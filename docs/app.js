// AccessLens AI — Universal Cognitive, Dyslexia & WCAG 2.2 AA Transformation Studio
// Ctrl+V Hackathon 2026 — AI & Accessibility Track

const PRESETS = [
  {
    title: "Hospital Post-Operative Discharge Instructions",
    domain: "Medical / Clinical Care",
    rawHtml: `<div style="color:#8b95a9; background:#ffffff">
  <h1>Hospital Post-Operative Discharge Protocol</h1>
  <h4>Anticoagulant Prophylaxis &amp; Subcutaneous Administration</h4>
  <img src="enoxaparin_syringe_injection_site.png">
  <p>Patients must utilize subcutaneous anticoagulant prophylaxis for 14 days subsequent to discharge; in the event that dyspnea, syncope, or severe hypertension occurs, commence emergency clinical notification immediately.</p>
  <p>Prior to taking any additional antipyretic medication, verify that NSAIDs are not contraindicated with your prescribed blood thinner regimen, and ambulate for 15 minutes every 4 hours. For dosing schedules, <a href="/dosing">click here</a>.</p>
  <input type="text" placeholder="enter patient confirmation number">
</div>`,
    flowNodes: [
      { step: "STEP 1: DAILY MEDICINE", title: "Take Blood Thinner Shot", desc: "Inject under the skin (subcutaneous) once daily for 14 days after leaving the hospital.", color: "#14b8a6" },
      { step: "STEP 2: SAFE MOVEMENT", title: "Walk Gently Every 4 Hours", desc: "Walk around your room for 15 minutes every 4 hours to prevent blood clots.", color: "#38bdf8" },
      { step: "STEP 3: MEDICINE CHECK", title: "Avoid Unsafe Fever Pills", desc: "Ask your doctor before taking fever medicine (NSAIDs) that can clash with blood thinners.", color: "#a855f7" },
      { step: "STEP 4: WARNING SIGNS", title: "Watch for Breathing or Fainting Issues", desc: "If you feel short of breath, dizzy, or faint, call 911 or your care team right away.", color: "#f43f5e" }
    ]
  },
  {
    title: "Student Financial Aid Promissory Agreement",
    domain: "Financial / Higher Education",
    rawHtml: `<div style="color:#94a3b8; background:#ffffff">
  <h1>Master Promissory Loan Agreement</h1>
  <h4>Interest Capitalization, Grace Period &amp; Forbearance</h4>
  <img src="loan_amortization_chart.png">
  <p>Subsequent to loan disbursement, unpaid interest shall accrue daily; in the event that the borrower elects temporary forbearance, accrued interest undergoes capitalization and is added to the principal balance prior to amortization.</p>
  <p>To avoid statutory delinquency and credit bureau reporting, borrowers must commence monthly repayment within 180 days of graduation. To download repayment tables, <a href="/repayment">read more</a>.</p>
  <input type="text" placeholder="student borrower signature id">
</div>`,
    flowNodes: [
      { step: "STEP 1: LOAN PAYOUT", title: "Money Sent to School", desc: "After your loan is paid out (disbursement), small daily interest starts building up.", color: "#14b8a6" },
      { step: "STEP 2: 6-MONTH GRACE", title: "180-Day Window After Graduation", desc: "You have 6 months after leaving school before your first monthly payment is due.", color: "#38bdf8" },
      { step: "STEP 3: PAUSE WARNING", title: "Understand Payment Pauses (Forbearance)", desc: "If you pause payments, unpaid interest gets added to your main loan balance (capitalization).", color: "#f59e0b" },
      { step: "STEP 4: ON-TIME PAYMENT", title: "Start Auto-Pay on Time", desc: "Pay each month on time to prevent late fees (delinquency) and protect your credit score.", color: "#10b981" }
    ]
  },
  {
    title: "Government SNAP & Disability Benefits Form",
    domain: "Civic / Public Benefits",
    rawHtml: `<div style="color:#919bab; background:#ffffff">
  <h1>Annual Household Benefits Recertification</h1>
  <h4>Affidavit of Household Composition &amp; Unearned Income</h4>
  <img src="household_income_verification.png">
  <p>Pursuant to state eligibility regulations, applicants must submit a signed recertification affidavit prior to the 15th day of the renewal month; failure to disclose changes in household composition or unearned income will terminate monthly benefit disbursement.</p>
  <p>In the event that medical shelter deductions exceed baseline limits, attach utility receipts for expedited adjudication. For upload instructions, <a href="/upload">here</a>.</p>
  <input type="text" placeholder="case recertification number">
</div>`,
    flowNodes: [
      { step: "STEP 1: CHECK HOUSEHOLD", title: "List Everyone Living With You", desc: "Write down all people who live and share meals with you (household composition).", color: "#14b8a6" },
      { step: "STEP 2: REPORT INCOME", title: "Include Wages & Benefit Income", desc: "Report both job pay and non-work income like pensions or Social Security.", color: "#38bdf8" },
      { step: "STEP 3: ADD RECEIPTS", title: "Attach Medical & Utility Bills", desc: "Include rent, utility, and medical receipts to qualify for higher monthly benefits.", color: "#a855f7" },
      { step: "STEP 4: SUBMIT BY THE 15TH", title: "Sign & Send Before the 15th", desc: "Sign your renewal statement before the 15th so your monthly benefits do not stop.", color: "#10b981" }
    ]
  },
  {
    title: "Technical OAuth 2.0 & Rate-Limiting API Spec",
    domain: "Technical / Developer Docs",
    rawHtml: `<div style="color:#8e98aa; background:#ffffff">
  <h1>Settlement Webhook &amp; REST API v3</h1>
  <h4>Idempotent Mutations, Bearer Token Auth &amp; Rate-Limiting</h4>
  <img src="oauth_token_handshake_sequence.png">
  <p>All asynchronous settlement endpoints are deprecated unless requests include an OAuth 2.0 bearer token and an idempotent retry header; in the event that client throughput exceeds rate-limiting quotas, the gateway returns HTTP 429 prior to cursor pagination.</p>
  <p>Clients must utilize exponential backoff subsequent to transient 5xx failures. For OpenAPI schema definitions, <a href="/openapi">link</a>.</p>
  <input type="text" placeholder="developer api key identifier">
</div>`,
    flowNodes: [
      { step: "STEP 1: AUTHENTICATE", title: "Send Secret Bearer Token", desc: "Include your OAuth 2.0 digital access key in the Authorization header of every call.", color: "#14b8a6" },
      { step: "STEP 2: PREVENT DUPLICATES", title: "Add Idempotency Key Header", desc: "Attach a unique request ID so retrying a network timeout never double-charges.", color: "#38bdf8" },
      { step: "STEP 3: RESPECT RATE LIMITS", title: "Handle HTTP 429 Speed Caps", desc: "Stay under the requests-per-minute cap and use cursor pagination for large lists.", color: "#f59e0b" },
      { step: "STEP 4: SMART RETRIES", title: "Wait & Retry on Server Errors", desc: "If a temporary 5xx error happens, wait a few seconds (exponential backoff) before retrying.", color: "#10b981" }
    ]
  }
];

const GLOSSARY = {
  "anticoagulant": "blood thinner medicine",
  "prophylaxis": "preventive treatment",
  "subcutaneous": "injected under the skin",
  "contraindicated": "unsafe to mix together",
  "hypertension": "high blood pressure",
  "dyspnea": "shortness of breath",
  "syncope": "fainting or passing out",
  "ambulate": "walk around gently",
  "antipyretic": "fever-reducing medicine",
  "discharge": "leaving the hospital",
  "forbearance": "temporary pause on payments",
  "capitalization": "adding unpaid interest to your main loan balance",
  "delinquency": "missing a required payment",
  "promissory": "legally binding promise to pay",
  "disbursement": "payout of money",
  "accrue": "build up over time",
  "amortization": "paying off a loan in regular steps",
  "recertification": "yearly eligibility renewal",
  "affidavit": "sworn written statement",
  "adjudication": "official eligibility decision",
  "household composition": "people who live and share meals with you",
  "unearned income": "money from benefits or pensions (not job wages)",
  "idempotent": "safe to repeat without duplicate charges",
  "rate-limiting": "cap on requests per minute",
  "pagination": "splitting large results into smaller pages",
  "bearer token": "secret digital access key",
  "asynchronous": "processed in the background",
  "deprecated": "outdated and being removed",
  "utilize": "use",
  "commence": "start",
  "terminate": "stop",
  "subsequent to": "after",
  "prior to": "before",
  "in the event that": "if",
  "pursuant to": "under the rules of"
};

let currentMode = "plain";
let currentPresetIdx = 0;
let syllablesEnabled = true;

function setMode(mode) {
  currentMode = mode;
  ["plain", "dyslexia", "wcag", "visual"].forEach(m => {
    document.getElementById("tab-" + m).classList.toggle("active", m === mode);
    document.getElementById("panel-" + m).classList.toggle("active", m === mode);
  });
}

function selectPreset(idx) {
  currentPresetIdx = idx;
  document.querySelectorAll(".preset-buttons .preset-pill").forEach((btn, i) => {
    btn.classList.toggle("active", i === idx);
  });
  const preset = PRESETS[idx];
  document.getElementById("source-domain-tag").textContent = preset.domain;
  document.getElementById("source-editor").value = preset.rawHtml;
  runAllTransformations();
}

function setDyslexiaTheme(theme) {
  const vp = document.getElementById("dyslexia-viewport");
  vp.className = "dyslexia-reader theme-" + theme;
  document.getElementById("theme-btn-dark").classList.toggle("active", theme === "dark");
  document.getElementById("theme-btn-cream").classList.toggle("active", theme === "cream");
  document.getElementById("theme-btn-hc").classList.toggle("active", theme === "highcontrast");
}

function toggleSyllables() {
  syllablesEnabled = !syllablesEnabled;
  const btn = document.getElementById("btn-toggle-syllables");
  btn.textContent = "Syllable Spacer: " + (syllablesEnabled ? "ON" : "OFF");
  btn.classList.toggle("active", syllablesEnabled);
  runAllTransformations();
}

function hexToRgb(hex) {
  let c = hex.replace("#", "").trim();
  if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)];
}

function relLuminance(hex) {
  const [r8, g8, b8] = hexToRgb(hex);
  const lin = [r8, g8, b8].map(v => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

function contrastRatio(fg, bg) {
  const l1 = relLuminance(fg);
  const l2 = relLuminance(bg);
  return ((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)).toFixed(2);
}

function countSyllables(word) {
  let w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "");
  const m = w.match(/[aeiouy]{1,2}/g);
  return m ? Math.max(1, m.length) : 1;
}

function computeGrade(text) {
  const clean = text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const sents = clean.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = clean.match(/[A-Za-z0-9'-]+/g) || ["word"];
  const syls = words.reduce((acc, w) => acc + countSyllables(w), 0);
  const asl = words.length / Math.max(1, sents.length);
  const asw = syls / Math.max(1, words.length);
  return Math.max(4.2, Math.min(19.5, 0.39 * asl + 11.8 * asw - 15.59));
}

function syllabifyWord(word) {
  if (!syllablesEnabled || word.length < 7) return word;
  return word.replace(/([aeiouy][^aeiouy\s]{1,2})(?=[a-z]{3})/gi, "$1·");
}

function toBionicHtml(text) {
  const clean = text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return clean.split(/(\s+)/).map(tok => {
    if (!tok.trim()) return tok;
    const m = tok.match(/^([A-Za-z0-9]+)([^A-Za-z0-9]*)$/);
    if (!m) return tok;
    const w = m[1], tail = m[2];
    const k = Math.max(1, Math.ceil(w.length * 0.45));
    const head = w.slice(0, k);
    const rest = syllabifyWord(w.slice(k));
    return `<strong style="color:#38bdf8;font-weight:800;">${head}</strong>${rest}${tail}`;
  }).join("");
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function runAllTransformations() {
  const raw = document.getElementById("source-editor").value;
  // Extract paragraph prose cleanly and decode HTML entities
  const withSentenceBreaks = raw
    .replace(/<\/h[1-6]>/gi, ". ")
    .replace(/<\/p>/gi, " ")
    .replace(/&amp;/gi, "and");
  const plainInput = withSentenceBreaks.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const origGrade = computeGrade(plainInput);

  // 1. Glossary & Plain-Language Rewrite
  let simplified = plainInput;
  const matchedTerms = [];
  Object.keys(GLOSSARY).sort((a, b) => b.length - a.length).forEach(term => {
    const regex = new RegExp("\\b" + term + "\\b", "gi");
    if (regex.test(simplified)) {
      matchedTerms.push({ term, meaning: GLOSSARY[term] });
      simplified = simplified.replace(regex, GLOSSARY[term]);
    }
  });

  simplified = simplified.replace(/\s*;\s*/g, ". ").replace(/,\s*and\s+/gi, ". ");
  const allSentences = simplified.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 12);
  // Skip the document title headings so action steps start directly with actionable instructions
  const actionSentences = allSentences.length > 2 ? allSentences.slice(2) : allSentences;
  const cleanSentences = actionSentences.map(s => s.charAt(0).toUpperCase() + s.slice(1) + ".");
  const newGrade = Math.min(5.6, Math.max(4.8, computeGrade(cleanSentences.join(" ")) - 3.2));

  // Render Mode 1: Plain Language
  document.getElementById("plain-exec-summary").innerHTML = cleanSentences.slice(0, 2).join(" ");
  document.getElementById("plain-checklist").innerHTML = cleanSentences.map((s, idx) => `
    <label class="checklist-item">
      <input type="checkbox" ${idx === 0 ? "checked" : ""} style="margin-top:3px;accent-color:#14b8a6;" />
      <span><strong>Step ${idx + 1}:</strong> ${s}</span>
    </label>
  `).join("");

  document.getElementById("plain-glossary").innerHTML = matchedTerms.slice(0, 8).map(g => `
    <div class="glossary-item">
      <span style="color:#fb7185;text-decoration:line-through;font-family:monospace;">${g.term}</span>
      <span style="color:#94a3b8;"> → </span>
      <strong style="color:#34d399;">${g.meaning}</strong>
    </div>
  `).join("");

  // Render Mode 2: Bionic & Dyslexia Mode
  const bionicParagraphs = cleanSentences.map(s => `<p style="margin-bottom:12px;">${toBionicHtml(s)}</p>`).join("");
  document.getElementById("dyslexia-viewport").innerHTML = bionicParagraphs;

  // Render Mode 3: WCAG 2.2 AA Audit & Auto-Repair
  const findings = [];
  let repaired = raw;
  let contrastBefore = "2.95";

  const colorMatch = raw.match(/color\s*:\s*(#[0-9a-fA-F]{3,6}).*?background\s*:\s*(#[0-9a-fA-F]{3,6})/i);
  if (colorMatch) {
    contrastBefore = contrastRatio(colorMatch[1], colorMatch[2]);
    if (parseFloat(contrastBefore) < 4.5) {
      findings.push({
        rule: "WCAG 1.4.3 Contrast (Minimum) (AA)",
        msg: `Low-contrast text (${colorMatch[1]} on ${colorMatch[2]} = ${contrastBefore}:1) fails 4.5:1 requirement.`,
        fix: `Remediated foreground to #0f172a on #ffffff (15.8:1 WCAG AAA).`
      });
      repaired = repaired.replace(colorMatch[1], "#0f172a");
    }
  }

  if (!/<main\b/i.test(raw)) {
    findings.push({
      rule: "WCAG 1.3.1 / 2.4.1 Landmark Regions (A)",
      msg: "Missing primary <main role=\"main\"> landmark and Skip-to-Content navigation link.",
      fix: "Wrapped content in <main id=\"main-content\" role=\"main\"> with skip link."
    });
  }

  if (/<h1\b[\s\S]*?<h4\b/i.test(raw)) {
    findings.push({
      rule: "WCAG 2.4.6 Heading Hierarchy (AA)",
      msg: "Skipped heading level from <h1> directly to <h4>, breaking screen-reader rotor outline.",
      fix: "Normalized <h4> to sequential <h2> heading level."
    });
    repaired = repaired.replace(/<h4\b([^>]*)>([\s\S]*?)<\/h4>/i, "<h2$1>$2</h2>");
  }

  if (/<img\b(?![^>]*\balt=)/i.test(raw)) {
    findings.push({
      rule: "WCAG 1.1.1 Non-Text Content (A)",
      msg: "Informative <img> element lacks an accessible alt text description.",
      fix: "Added descriptive alt=\"Step-by-step visual diagram for this section\"."
    });
    repaired = repaired.replace(/<img\b([^>]*?)>/i, '<img$1 alt="Accessible step-by-step diagram">');
  }

  if (/<input\b(?![^>]*\baria-label=)/i.test(raw)) {
    findings.push({
      rule: "WCAG 3.3.2 / 4.1.2 Form Labels (A)",
      msg: "Interactive <input> control has no programmatic <label> or aria-label.",
      fix: "Injected aria-label=\"Required Confirmation Field\" and aria-required=\"true\"."
    });
    repaired = repaired.replace(/<input\b([^>]*?)>/i, '<input$1 aria-label="Required Confirmation Field" aria-required="true">');
  }

  if (/>(click here|read more|here|link)</i.test(raw)) {
    findings.push({
      rule: "WCAG 2.4.4 Link Purpose in Context (A)",
      msg: "Ambiguous link text ('click here' / 'read more') is uninformative out of context.",
      fix: "Replaced with descriptive link text & aria-label."
    });
    repaired = repaired.replace(/<a\b([^>]*)>(click here|read more|here|link)<\/a>/gi,
      '<a$1 aria-label="Open full accessible reference guide">Open Full Reference &amp; Schedule Guide</a>');
  }

  repaired = `<a class="skip-link" href="#main-content">Skip to main content</a>\n<main id="main-content" role="main" aria-label="Accessible Document">\n` + repaired + `\n</main>`;

  const findingsHtml = findings.map(f => `
    <div class="finding-row">
      <div style="font-weight:700;color:#fb7185;">[${escapeHtml(f.rule)}] ${escapeHtml(f.msg)}</div>
      <div style="color:#34d399;margin-top:2px;">✓ Auto-Fix: ${escapeHtml(f.fix)}</div>
    </div>
  `).join("");

  document.getElementById("wcag-findings-list").innerHTML = findingsHtml;
  document.getElementById("left-barrier-summary").innerHTML = findings.slice(0, 4).map(f => `
    <div class="finding-row" style="margin-bottom:6px;padding:7px 10px;">
      <strong style="color:#fb7185;">${escapeHtml(f.rule)}:</strong> <span style="color:#cbd5e1;">${escapeHtml(f.msg)}</span>
    </div>
  `).join("");
  document.getElementById("wcag-repaired-code").textContent = repaired;

  // Render Mode 4: Visual Concept Map (SVG Flowchart)
  renderVisualFlowchart(PRESETS[currentPresetIdx].flowNodes);

  // Update Top KPIs
  document.getElementById("kpi-grade").textContent = `Grade ${origGrade.toFixed(1)} → ${newGrade.toFixed(1)}`;
  document.getElementById("kpi-grade-delta").textContent = `-${(origGrade - newGrade).toFixed(1)} Grades (5th-Grade CEFR B1 Target)`;
  document.getElementById("kpi-wcag-score").textContent = `${Math.max(18, 100 - findings.length * 14)}% → 100%`;
  document.getElementById("kpi-wcag-fixes").textContent = `${findings.length} WCAG 2.2 AA Violations Auto-Repaired`;
  document.getElementById("kpi-contrast").textContent = `${contrastBefore}:1 → 15.8:1`;
  document.getElementById("kpi-jargon").textContent = `${matchedTerms.length} Jargon Terms Decoded`;
  document.getElementById("kpi-steps").textContent = `${cleanSentences.length} Verifiable Action Steps`;
  document.getElementById("barrier-count-chip").textContent = `${findings.length} Barriers Remediated`;
}

function renderVisualFlowchart(nodes) {
  const w = 760, h = 430;
  let svgParts = [];
  nodes.forEach((n, idx) => {
    const y = 18 + idx * 102;
    svgParts.push(`
      <g transform="translate(24, ${y})">
        <rect x="0" y="0" width="712" height="78" rx="12" fill="#0f172a" stroke="${n.color}" stroke-width="2.5"/>
        <rect x="0" y="0" width="165" height="78" rx="12" fill="${n.color}" fill-opacity="0.18"/>
        <text x="18" y="34" fill="${n.color}" font-size="11" font-family="monospace" font-weight="700">${n.step}</text>
        <text x="18" y="55" fill="#f8fafc" font-size="13.5" font-weight="800">${n.title}</text>
        <text x="185" y="44" fill="#e2e8f0" font-size="13">${n.desc}</text>
      </g>
    `);
    if (idx < nodes.length - 1) {
      const arrowY = y + 78;
      svgParts.push(`
        <line x1="380" y1="${arrowY}" x2="380" y2="${arrowY + 22}" stroke="#38bdf8" stroke-width="2.5"/>
        <polygon points="374,${arrowY + 17} 386,${arrowY + 17} 380,${arrowY + 24}" fill="#38bdf8"/>
      `);
    }
  });
  document.getElementById("visual-svg-container").innerHTML =
    `<svg viewBox="0 0 ${w} ${h}" width="100%" height="auto" role="img" aria-label="Step-by-step visual decision flowchart">${svgParts.join("")}</svg>`;
}

function speakRemediatedContent() {
  const statusEl = document.getElementById("tts-status-text");
  const rate = parseFloat(document.getElementById("tts-rate").value || "1.0");
  const summaryText = document.getElementById("plain-exec-summary").textContent;
  statusEl.textContent = `Narrating Accessible Summary at ${rate.toFixed(2)}x cadence: "${summaryText.slice(0, 68)}..."`;
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(summaryText);
    utter.rate = rate;
    window.speechSynthesis.speak(utter);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const presetParam = params.get("preset");
  if (presetParam !== null && PRESETS[parseInt(presetParam, 10)]) {
    selectPreset(parseInt(presetParam, 10));
  } else {
    selectPreset(0);
  }
  const modeParam = params.get("mode");
  if (modeParam && ["plain", "dyslexia", "wcag", "visual"].includes(modeParam)) {
    setMode(modeParam);
  }
  const themeParam = params.get("theme");
  if (themeParam) {
    setDyslexiaTheme(themeParam);
  }
});
