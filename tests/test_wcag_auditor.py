#!/usr/bin/env python3
"""
Unit & Integration Test Suite for AccessLens AI (`wcag_auditor.py`).
Run with: python3 -m unittest discover -s tests -v
"""

from __future__ import annotations

import unittest

from wcag_auditor import (
    audit_and_repair_html,
    compute_readability_metrics,
    contrast_ratio,
    format_bionic_text,
    relative_luminance,
    suggest_accessible_foreground,
    transform_to_plain_language,
)


class TestAccessLensWCAGAuditor(unittest.TestCase):
    def test_wcag_relative_luminance_and_contrast_ratio(self) -> None:
        self.assertAlmostEqual(relative_luminance("#000000"), 0.0, places=4)
        self.assertAlmostEqual(relative_luminance("#ffffff"), 1.0, places=4)
        self.assertAlmostEqual(contrast_ratio("#000000", "#ffffff"), 21.0, places=1)
        # Low-contrast gray on white fails WCAG AA (4.5:1)
        low_ratio = contrast_ratio("#94a3b8", "#ffffff")
        self.assertLess(low_ratio, 4.5)
        fixed_hex = suggest_accessible_foreground("#94a3b8", "#ffffff", target_ratio=4.5)
        self.assertGreaterEqual(contrast_ratio(fixed_hex, "#ffffff"), 4.5)

    def test_plain_language_transformation_reduces_grade_level(self) -> None:
        dense_medical = (
            "Patients must utilize subcutaneous anticoagulant prophylaxis for 14 days subsequent "
            "to discharge; in the event that dyspnea or syncope occurs, commence emergency "
            "notification immediately pursuant to clinical hypertension protocols."
        )
        res = transform_to_plain_language(dense_medical)
        self.assertGreater(res["original_metrics"]["flesch_kincaid_grade"], 11.0)
        self.assertLess(
            res["simplified_metrics"]["flesch_kincaid_grade"],
            res["original_metrics"]["flesch_kincaid_grade"],
        )
        self.assertGreater(res["grade_reduction"], 2.5)
        self.assertGreaterEqual(len(res["action_checklist"]), 1)
        self.assertGreaterEqual(len(res["glossary_replacements"]), 4)

    def test_bionic_fixation_markup(self) -> None:
        bionic = format_bionic_text("Accessibility empowers neurodivergent readers.")
        self.assertIn("<strong>", bionic)
        self.assertIn("</strong>", bionic)

    def test_dom_wcag_audit_and_auto_remediation(self) -> None:
        broken_html = (
            '<div style="color:#99a3b8; background:#ffffff">'
            "<h1>Financial Aid Promissory Agreement</h1>"
            "<h4>Capitalization &amp; Forbearance Terms</h4>"
            '<img src="loan_schedule.png">'
            '<p>To review repayment amortization, <a href="/terms">click here</a>.</p>'
            '<input type="text" placeholder="student borrower id">'
            "</div>"
        )
        audit = audit_and_repair_html(broken_html)
        self.assertGreaterEqual(audit["issues_found"], 5)
        rule_ids = {f["rule_id"] for f in audit["findings"]}
        self.assertIn("WCAG-LANDMARK-MAIN", rule_ids)
        self.assertIn("WCAG-HEADING-ORDER", rule_ids)
        self.assertIn("WCAG-IMG-ALT", rule_ids)
        self.assertIn("WCAG-FORM-LABEL", rule_ids)
        self.assertIn("WCAG-LINK-PURPOSE", rule_ids)
        self.assertIn("WCAG-COLOR-CONTRAST", rule_ids)

        repaired = audit["repaired_html"]
        self.assertIn('<main id="main-content" role="main"', repaired)
        self.assertIn("<h2>Capitalization", repaired)
        self.assertIn('alt="Informative visual:', repaired)
        self.assertIn('aria-label="Student Borrower Id"', repaired)
        self.assertEqual(audit["score_after"], 100)


if __name__ == "__main__":
    unittest.main()
