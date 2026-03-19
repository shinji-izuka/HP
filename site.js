const SITE_DATA = {
  nav: [
    { id: "home", href: "index.html", label: "Home" },
    { id: "profile", href: "profile.html", label: "Profile" },
    { id: "research", href: "research.html", label: "Research" },
    { id: "publications", href: "publications.html", label: "Publications" },
    { id: "talks", href: "talks.html", label: "Talks" },
    { id: "achievements", href: "achievements.html", label: "Achievements" },
    { id: "connect", href: "connect.html", label: "Connect" }
  ],
  quickLinks: [
    { label: "researchmap", href: "https://researchmap.jp/shinji04" },
    { label: "ORCID", href: "https://orcid.org/0000-0002-9724-4911" },
    { label: "Google Scholar", href: "https://scholar.google.co.jp/citations?user=rGD6khYAAAAJ" }
  ],
  homepagePublications: [
    {
      title: "Integration of transcriptome and immunophenotyping data highlights differences in the pathogenetic kinetics of B cells across immune-mediated disease",
      venue: "RMD Open",
      meta: "Article · Apr 2025",
      copy: "Maps immune-mediated disease states by integrating immunophenotyping with transcriptome data across six conditions.",
      href: "https://pubmed.ncbi.nlm.nih.gov/40210259/"
    },
    {
      title: "The role of monocytes and macrophages in idiopathic inflammatory myopathies: insights into pathogenesis and potential targets",
      venue: "Frontiers in Immunology",
      meta: "Review · Mar 2025",
      copy: "Synthesizes how innate immune cell subsets drive tissue injury and repair in idiopathic inflammatory myopathies.",
      href: "https://pubmed.ncbi.nlm.nih.gov/40181992/"
    },
    {
      title: "Muscle Tissue Transcriptome of Idiopathic Inflammatory Myopathy Reflects the Muscle Damage Process by Monocytes and Presence of Skin Lesions",
      venue: "Arthritis & Rheumatology",
      meta: "Article · Jan 2025",
      copy: "Connects muscle transcriptome signals with monocyte-driven damage and clinical phenotypes in myositis.",
      href: "https://pubmed.ncbi.nlm.nih.gov/39162115/"
    },
    {
      title: "Machine learning-driven immunophenotypic stratification of mixed connective tissue disease, corroborating the clinical heterogeneity",
      venue: "Rheumatology",
      meta: "Article · Mar 2025",
      copy: "Uses immunophenotyping and machine learning to reveal clinically meaningful subgroups within MCTD.",
      href: "https://doi.org/10.1093/rheumatology/keae158"
    }
  ],
  selectedPublications: [
    {
      title: "Beyond simple positivity: dissecting anti-PL-12 antibodies as a blueprint for future therapeutics in anti-synthetase syndrome",
      venue: "Rheumatology",
      meta: "Perspective · Dec 2025",
      copy: "Single-author perspective on anti-PL-12 antibodies and future therapeutic direction in anti-synthetase syndrome.",
      href: "https://pubmed.ncbi.nlm.nih.gov/40833779/"
    },
    {
      title: "More than an immunosuppressant-lower serious infection rates with methotrexate in early rheumatoid arthritis",
      venue: "Rheumatology",
      meta: "Perspective · Nov 2025",
      copy: "Concise clinical perspective on methotrexate and infection risk in early rheumatoid arthritis.",
      href: "https://pubmed.ncbi.nlm.nih.gov/40576195/"
    },
    {
      title: "ERN ReCONNET-SLICC-SLEuro expert consensus on the therapeutic management of rare systemic lupus erythematosus manifestations",
      venue: "The Lancet Rheumatology",
      meta: "Consensus · Jul 2025",
      copy: "Participation in an international consensus framework covering rare SLE manifestations and treatment strategy.",
      href: "https://doi.org/10.1016/S2665-9913(25)00063-3"
    },
    {
      title: "Framework for implementing treat-to-target in systemic lupus erythematosus routine clinical care: consensus statements from an international task force",
      venue: "Autoimmunity Reviews",
      meta: "Consensus · Apr 2025",
      copy: "International task-force consensus on putting treat-to-target SLE care into routine clinical practice.",
      href: "https://doi.org/10.1016/j.autrev.2025.103773"
    },
    {
      title: "Integration of transcriptome and immunophenotyping data highlights differences in the pathogenetic kinetics of B cells across immune-mediated disease",
      venue: "RMD Open",
      meta: "Article · Apr 2025",
      copy: "Combines immunophenotyping and transcriptomics to identify disease-state dynamics across immune-mediated disease.",
      href: "https://pubmed.ncbi.nlm.nih.gov/40210259/"
    },
    {
      title: "The role of monocytes and macrophages in idiopathic inflammatory myopathies: insights into pathogenesis and potential targets",
      venue: "Frontiers in Immunology",
      meta: "Review · Mar 2025",
      copy: "Review of monocyte and macrophage biology in IIM, with biomarker and therapeutic implications.",
      href: "https://pubmed.ncbi.nlm.nih.gov/40181992/"
    },
    {
      title: "Muscle Tissue Transcriptome of Idiopathic Inflammatory Myopathy Reflects the Muscle Damage Process by Monocytes and Presence of Skin Lesions",
      venue: "Arthritis & Rheumatology",
      meta: "Article · Jan 2025",
      copy: "Profiles muscle tissue transcriptome patterns and links them with monocyte-driven pathology in IIM.",
      href: "https://pubmed.ncbi.nlm.nih.gov/39162115/"
    },
    {
      title: "Digital approaches in myositis",
      venue: "Health Policy and Technology",
      meta: "Editorial · Sep 2024",
      copy: "Explores digital, AI-enabled, and telemedicine approaches for the future of myositis care and monitoring.",
      href: "https://doi.org/10.1016/j.hlpt.2024.100906"
    },
    {
      title: "Machine learning-driven immunophenotypic stratification of mixed connective tissue disease, corroborating the clinical heterogeneity",
      venue: "Rheumatology",
      meta: "Article · Mar 2025",
      copy: "Shows how machine-learning-assisted immunophenotyping can separate clinically distinct MCTD phenotypes.",
      href: "https://doi.org/10.1093/rheumatology/keae158"
    },
    {
      title: "Acute exacerbation of rheumatoid arthritis-associated interstitial lung disease: mortality and its prediction model",
      venue: "Rheumatology",
      meta: "Article · May 2021",
      copy: "Clinical study on acute exacerbation, prognostic factors, and mortality in RA-associated interstitial lung disease.",
      href: "https://pubmed.ncbi.nlm.nih.gov/35277175/"
    }
  ],
  books: [
    {
      title: "Diagnostic Essentials When Rheumatic or Connective Tissue Disease Is Suspected",
      meta: "Book chapter · 2025",
      copy: "Differential diagnosis contribution for clinicians evaluating possible rheumatic or collagen diseases."
    },
    {
      title: "Internal Medicine Specialist Problem Collection",
      meta: "Question author · 2024",
      copy: "Board-style problem writing for internal medicine specialist preparation."
    },
    {
      title: "Questions Frequently Asked by Patients in Internal Medicine",
      meta: "Clinical writing · Apr 2024",
      copy: "Researchmap lists a contribution on dermatomyositis-related cancer anxiety in routine clinical communication."
    },
    {
      title: "Visual Case Challenge",
      meta: "Clinical education · Dec 2023",
      copy: "Visual case-based contribution in the Journal of the Japanese Society of Internal Medicine."
    }
  ],
  awards: [
    { date: "Sep 2025", title: "APLAR 2025 Travel Award on JCR", note: "Listed on researchmap." },
    { date: "Apr 2025", title: "JCR 2025 Excellent Abstract Award", note: "Japan College of Rheumatology." },
    { date: "Nov 2024", title: "Tadamitsu Kishimoto International Travel Award", note: "Listed on researchmap." },
    { date: "Nov 2024", title: "EMEUNET Top 10 Abstracts at ACR 2024", note: "European Alliance of Associations for Rheumatology network recognition." },
    { date: "Jun 2024", title: "EMEUNET Top 10 Abstracts at EULAR 2024", note: "Selected abstract distinction." },
    { date: "Apr 2024", title: "JCR 2024 Excellent Abstract Award", note: "Japan College of Rheumatology." },
    { date: "Jan 2024", title: "Ursula and Fritz Melchers Travel Award", note: "International travel award." },
    { date: "Nov 2023", title: "ACR-EULAR-APLAR Research Exchange Program", note: "International rheumatology exchange selection." },
    { date: "Jun 2023", title: "Young Scientist, 72nd Lindau Nobel Laureate Meeting", note: "Physiology/Medicine cohort." },
    { date: "Jun 2023", title: "EULAR 2023 Abstract Award", note: "European rheumatology congress recognition." },
    { date: "Apr 2023", title: "JCR 2023 Excellent Abstract Award", note: "Japan College of Rheumatology." },
    { date: "Nov 2022", title: "EMEUNET Top 10 Abstracts at ACR 2022", note: "Selected abstract distinction." },
    { date: "Oct 2022", title: "APLAR 2022 Excellent Abstract Award on JCR", note: "Asia-Pacific rheumatology recognition." },
    { date: "Mar 2021", title: "NCGM Hakoneyama Award 2020", note: "National Center for Global Health and Medicine." },
    { date: "Oct 2019", title: "APLAR 2019 travel grant", note: "Japan College of Rheumatology." }
  ],
  timeline: [
    {
      date: "2016",
      title: "Graduated from Tottori University",
      note: "A University of Tokyo departmental page identifies a 2016 graduation from Tottori University."
    },
    {
      date: "2016-2021",
      title: "Clinical foundation built through NCGM training",
      note: "Public UTokyo departmental writing describes early clinical training and rheumatology training at the National Center for Global Health and Medicine."
    },
    {
      date: "2021",
      title: "Entered graduate school at The University of Tokyo",
      note: "The same department page lists doctoral study beginning in 2021."
    },
    {
      date: "Apr 2022-Mar 2025",
      title: "JSPS Research Fellow (DC1)",
      note: "Researchmap lists a JSPS DC1 fellowship during the doctoral period."
    },
    {
      date: "2025-present",
      title: "Specially Appointed Clinical Fellow, The University of Tokyo Hospital",
      note: "KAKEN and department staff listings place the current appointment in 2025."
    }
  ],
  grants: [
    {
      date: "Jul 2025-Mar 2027",
      title: "Elucidating the Pathogenesis of Idiopathic Inflammatory Myopathies via Integrated Peripheral Blood and Tissue Multi-omics",
      note: "Principal Investigator · JSPS Grant-in-Aid for Research Activity Start-up."
    },
    {
      date: "Apr 2022-Mar 2025",
      title: "Stratification of Rheumatic Diseases and Exploration of Prognostic Predictors Using Large-Scale Multi-Omics Data",
      note: "Grant-in-Aid for JSPS Fellows."
    }
  ],
  roles: [
    {
      date: "2025-present",
      title: "Japanese Scientists To Advance Rheumatology (J-STAR) - International Relationship",
      note: "Committee membership listed on researchmap."
    },
    {
      date: "Dec 2024-present",
      title: "American College of Rheumatology International Adviser",
      note: "Committee membership listed on researchmap."
    },
    {
      date: "2024-present",
      title: "RMD Open Social Media Editor",
      note: "Editorial and science communication role."
    },
    {
      date: "2023-present",
      title: "American College of Rheumatology Social Media Ambassador",
      note: "Public-facing rheumatology communication role."
    },
    {
      date: "Nov 2024",
      title: "Annals of the Rheumatic Diseases Guest Social Media Editor",
      note: "Short-term editorial role listed on researchmap."
    }
  ],
  memberships: [
    { title: "Myositis Clinical Trial Consortium (MCTC)", note: "2025-present" },
    { title: "The Japanese Society of Clinical Immunology", note: "2025-present" },
    { title: "Myositis International Health & Research Collaborative Alliance (MIHRA)", note: "2024-present" },
    { title: "Japanese Society for Immunology", note: "2023-present" },
    { title: "International Myositis Assessment & Clinical Studies Group (IMACS)", note: "2022-present" },
    { title: "European Lupus Society", note: "2019-present" },
    { title: "American College of Rheumatology", note: "2019-present" },
    { title: "Japan College of Rheumatology", note: "2018-present" },
    { title: "The Japanese Society of Internal Medicine", note: "2018-present" }
  ],
  themes: [
    {
      icon: "🧬",
      title: "Idiopathic Inflammatory Myopathies",
      copy: "I investigate disease heterogeneity, monocyte and macrophage biology, and tissue-level injury signatures across muscle and blood.",
      tags: ["myositis", "monocytes", "tissue transcriptome"],
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&q=70"
    },
    {
      icon: "🦋",
      title: "Systemic Lupus Erythematosus",
      copy: "My lupus work spans patient stratification, consensus building, and translational frameworks that aim to improve treatment precision.",
      tags: ["SLE", "treat-to-target", "international consensus"],
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800&q=70"
    },
    {
      icon: "📊",
      title: "Multi-Omics Stratification",
      copy: "Clinical phenotypes become more actionable when they are integrated with immunophenotyping, transcriptomics, and other omics layers.",
      tags: ["multi-omics", "stratification", "biomarkers"],
      image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800&q=70"
    },
    {
      icon: "⚙️",
      title: "Computational Rheumatology",
      copy: "I use machine learning and bioinformatics to discover immune cell programs, classify disease states, and surface translational targets.",
      tags: ["machine learning", "bioinformatics", "precision medicine"],
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&q=70"
    }
  ],
  talks: [
    {
      date: "Sep 2025",
      type: "Oral",
      title: "Multi-Omics Stratification in Idiopathic Inflammatory Myopathies",
      venue: "APLAR 2025 Annual Congress",
      location: "Japan",
      note: "APLAR 2025 Travel Award on JCR."
    },
    {
      date: "Apr 2025",
      type: "Oral",
      title: "Immunophenotypic Profiling Across Immune-Mediated Diseases",
      venue: "JCR 2025 Annual Meeting",
      location: "Japan",
      note: "JCR 2025 Excellent Abstract Award."
    },
    {
      date: "Nov 2024",
      type: "Poster",
      title: "Machine Learning-Driven Immunophenotypic Stratification of Mixed Connective Tissue Disease",
      venue: "ACR 2024 Convergence",
      location: "Washington, D.C., USA",
      note: "EMEUNET Top 10 Abstracts at ACR 2024. Tadamitsu Kishimoto International Travel Award."
    },
    {
      date: "Jun 2024",
      type: "Oral",
      title: "B Cell Kinetics Across Immune-Mediated Disease: A Transcriptomic and Immunophenotyping Perspective",
      venue: "EULAR 2024 Annual Congress",
      location: "Vienna, Austria",
      note: "EMEUNET Top 10 Abstracts at EULAR 2024."
    },
    {
      date: "Apr 2024",
      type: "Oral",
      title: "Peripheral Blood Multi-Omics for Rheumatic Disease Stratification",
      venue: "JCR 2024 Annual Meeting",
      location: "Japan",
      note: "JCR 2024 Excellent Abstract Award. Ursula and Fritz Melchers Travel Award."
    },
    {
      date: "Nov 2023",
      type: "Oral",
      title: "Muscle Transcriptome in Idiopathic Inflammatory Myopathy: Monocyte Signatures and Skin Lesions",
      venue: "ACR 2023 Convergence",
      location: "San Diego, CA, USA",
      note: "Selected for ACR-EULAR-APLAR Research Exchange Program."
    },
    {
      date: "Jun 2023",
      type: "Invited",
      title: "Translational Multi-Omics in Autoimmune Rheumatology",
      venue: "72nd Lindau Nobel Laureate Meeting",
      location: "Lindau, Germany",
      note: "Selected as Young Scientist, Physiology/Medicine cohort — one of ~600 young scientists worldwide."
    },
    {
      date: "Jun 2023",
      type: "Poster",
      title: "Immunophenotypic Analysis of Myositis Subsets via Large-Scale Flow Cytometry",
      venue: "EULAR 2023 Annual Congress",
      location: "Milan, Italy",
      note: "EULAR 2023 Abstract Award."
    },
    {
      date: "Apr 2023",
      type: "Oral",
      title: "Multi-Omics Approaches to Rheumatic Disease Heterogeneity",
      venue: "JCR 2023 Annual Meeting",
      location: "Japan",
      note: "JCR 2023 Excellent Abstract Award."
    },
    {
      date: "Nov 2022",
      type: "Poster",
      title: "Large-Scale Multi-Omics Data for Prognostic Prediction in Rheumatic Diseases",
      venue: "ACR 2022 Convergence",
      location: "Philadelphia, PA, USA",
      note: "EMEUNET Top 10 Abstracts at ACR 2022."
    },
    {
      date: "Oct 2022",
      type: "Oral",
      title: "Stratification of Idiopathic Inflammatory Myopathies via Multi-Omics Profiling",
      venue: "APLAR 2022 Congress on JCR",
      location: "Japan",
      note: "APLAR 2022 Excellent Abstract Award."
    },
    {
      date: "Oct 2019",
      type: "Poster",
      title: "Clinical Outcomes in Connective Tissue Disease-Associated Interstitial Lung Disease",
      venue: "APLAR 2019 Annual Congress",
      location: "Taipei, Taiwan",
      note: "APLAR 2019 Travel Grant."
    }
  ],
  profiles: [
    {
      label: "researchmap",
      domain: "researchmap.jp",
      copy: "Profile, awards, projects, committee memberships, and paper list.",
      href: "https://researchmap.jp/shinji04"
    },
    {
      label: "ORCID",
      domain: "orcid.org",
      copy: "Persistent researcher identity and linked works.",
      href: "https://orcid.org/0000-0002-9724-4911"
    },
    {
      label: "Google Scholar",
      domain: "scholar.google.co.jp",
      copy: "Citation view and cross-disciplinary discovery.",
      href: "https://scholar.google.co.jp/citations?user=rGD6khYAAAAJ"
    },
    {
      label: "PubMed Author Search",
      domain: "pubmed.ncbi.nlm.nih.gov",
      copy: "Latest indexed publications and abstracts.",
      href: "https://pubmed.ncbi.nlm.nih.gov/?term=Izuka+Shinji%5BAuthor%5D&sort=date"
    },
    {
      label: "KAKEN Project",
      domain: "kaken.nii.ac.jp",
      copy: "Current JSPS start-up grant for integrated peripheral blood and tissue multi-omics in IIM.",
      href: "https://kaken.nii.ac.jp/grant/KAKENHI-PROJECT-25K23897/"
    },
    {
      label: "Department Website",
      domain: "ryumachi.umin.jp",
      copy: "The University of Tokyo Hospital Department of Allergy and Rheumatology.",
      href: "http://ryumachi.umin.jp/"
    },
    {
      label: "Department Staff Page",
      domain: "ryumachi.umin.jp",
      copy: "Current staff listing for the department.",
      href: "https://ryumachi.umin.jp/staff/index.html"
    },
    {
      label: "Graduate Story",
      domain: "ryumachi.umin.jp",
      copy: "Public profile note on doctoral motivation and training path.",
      href: "https://ryumachi.umin.jp/student/daigakuin/inozuka.html"
    },
    {
      label: "LinkedIn",
      domain: "linkedin.com",
      copy: "Professional profile and external connection point.",
      href: "https://www.linkedin.com/in/shinji-izuka-a2b80b192/"
    },
    {
      label: "X",
      domain: "x.com",
      copy: "Research updates, conference activity, and academic communication.",
      href: "https://x.com/IzukaShinji"
    },
    {
      label: "Bluesky",
      domain: "bsky.app",
      copy: "Additional social profile and science network presence.",
      href: "https://bsky.app/profile/shinjiizuka.bsky.social"
    },
    {
      label: "ResearchGate",
      domain: "researchgate.net",
      copy: "Publication network and research visibility channel.",
      href: "https://www.researchgate.net/profile/Shinji-Izuka"
    }
  ]
};

function isExternalLink(href) {
  return /^https?:\/\//i.test(href);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function makeLink(href, label, className = "") {
  const external = isExternalLink(href);
  const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
  const klass = className ? ` class="${className}"` : "";
  const suffix = external ? ' <span aria-hidden="true">↗</span>' : "";
  return `<a href="${escapeHtml(href)}"${klass}${attrs}>${escapeHtml(label)}${suffix}</a>`;
}

function getCurrentPageId() {
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  const current = SITE_DATA.nav.find((item) => item.href === currentFile);
  return current ? current.id : "home";
}

function renderHeader() {
  const currentId = getCurrentPageId();
  const host = document.querySelector("[data-site-header]");
  if (!host) return;

  const desktopLinks = SITE_DATA.nav.map((item) => {
    const current = item.id === currentId ? ' aria-current="page"' : "";
    return `<a href="${escapeHtml(item.href)}"${current}>${escapeHtml(item.label)}</a>`;
  }).join("");

  const mobileLinks = SITE_DATA.nav.map((item) => {
    const current = item.id === currentId ? ' aria-current="page"' : "";
    return `<a href="${escapeHtml(item.href)}"${current}>${escapeHtml(item.label)}</a>`;
  }).join("");

  host.innerHTML = `
    <header class="site-header" data-header>
      <div class="shell site-header__inner">
        <a class="brand" href="index.html" aria-label="Shinji Izuka home">
          <span class="brand__mark">SI</span>
          <span class="brand__text">Shinji Izuka</span>
        </a>
        <nav class="desktop-nav" aria-label="Main navigation">${desktopLinks}</nav>
        <div class="header-actions">
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" data-menu-toggle>
            <span aria-hidden="true">☰</span>
            <span class="sr-only">Open menu</span>
          </button>
        </div>
      </div>
      <div class="mobile-panel" id="mobile-nav" data-mobile-panel>
        <div class="shell">
          <nav class="mobile-nav" aria-label="Mobile navigation">${mobileLinks}</nav>
        </div>
      </div>
    </header>
  `;

  const header = host.querySelector("[data-header]");
  const toggle = host.querySelector("[data-menu-toggle]");
  const mobilePanel = host.querySelector("[data-mobile-panel]");

  const syncHeader = () => {
    if (window.scrollY > 18) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  if (toggle && mobilePanel) {
    toggle.addEventListener("click", () => {
      const open = mobilePanel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
    });

    mobilePanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobilePanel.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }
}

function renderFooter() {
  const host = document.querySelector("[data-site-footer]");
  if (!host) return;
  const links = SITE_DATA.quickLinks.map((item) => makeLink(item.href, item.label)).join("");
  host.innerHTML = `
    <footer class="site-footer">
      <div class="shell">
        <div class="site-footer__panel">
          <div>
            <h2>Shinji Izuka, M.D., Ph.D.</h2>
            <p>Rheumatology, myositis, SLE, and multi-omics research at The University of Tokyo Hospital.</p>
            <p class="muted">&copy; <span data-current-year></span> Shinji Izuka</p>
          </div>
          <div class="site-footer__links">${links}</div>
        </div>
      </div>
    </footer>
  `;
}

function renderList(containerId, items, renderer) {
  const host = document.getElementById(containerId);
  if (!host) return;
  host.innerHTML = items.map(renderer).join("");
}

function renderPublicationCard(item) {
  return `
    <article class="publication-card reveal">
      <div class="publication-card__meta">
        <span class="tag tag--warm">${escapeHtml(item.venue)}</span>
        <span>${escapeHtml(item.meta)}</span>
      </div>
      <h3 class="publication-card__title">${escapeHtml(item.title)}</h3>
      <p class="publication-card__copy">${escapeHtml(item.copy)}</p>
      ${makeLink(item.href, "Open source", "publication-card__link")}
    </article>
  `;
}

function renderTimelineCard(item) {
  return `
    <article class="timeline-card reveal">
      <div class="timeline-card__meta">${escapeHtml(item.date)}</div>
      <h3 class="timeline-card__title">${escapeHtml(item.title)}</h3>
      <p class="list-note">${escapeHtml(item.note)}</p>
    </article>
  `;
}

function renderMiniCard(item) {
  return `
    <article class="mini-card reveal">
      <div class="mini-label">${escapeHtml(item.date)}</div>
      <strong>${escapeHtml(item.title)}</strong>
      <p class="mini-note">${escapeHtml(item.note)}</p>
    </article>
  `;
}

function renderLinkCard(item) {
  return `
    <article class="link-card reveal">
      <div class="mini-label">Profile</div>
      <div class="link-card__label">${escapeHtml(item.label)}</div>
      <div class="link-card__domain">${escapeHtml(item.domain)}</div>
      <p class="list-note">${escapeHtml(item.copy)}</p>
      ${makeLink(item.href, "Visit", "publication-card__link")}
    </article>
  `;
}

function renderThemeCard(item) {
  const tags = item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  const visual = item.image
    ? `<div class="theme-card__visual" style="background-image:url('${escapeHtml(item.image)}')" aria-hidden="true">
         <span class="theme-card__icon">${escapeHtml(item.icon)}</span>
       </div>`
    : `<div class="theme-card__icon" aria-hidden="true">${escapeHtml(item.icon)}</div>`;
  return `
    <article class="theme-card reveal">
      ${visual}
      <h3 class="theme-card__title">${escapeHtml(item.title)}</h3>
      <p class="list-note">${escapeHtml(item.copy)}</p>
      <div class="tag-row">${tags}</div>
    </article>
  `;
}

function renderTalkCard(item) {
  const typeClass = item.type === "Invited" ? "tag--warm" : item.type === "Oral" ? "tag--signal" : "";
  return `
    <article class="talk-card reveal">
      <div class="talk-card__header">
        <span class="tag ${typeClass}">${escapeHtml(item.type)}</span>
        <span class="talk-card__date">${escapeHtml(item.date)}</span>
      </div>
      <h3 class="talk-card__title">${escapeHtml(item.title)}</h3>
      <div class="talk-card__venue">
        <span class="talk-card__venue-name">${escapeHtml(item.venue)}</span>
        <span class="talk-card__location">📍 ${escapeHtml(item.location)}</span>
      </div>
      <p class="list-note">${escapeHtml(item.note)}</p>
    </article>
  `;
}

function renderMembershipCard(item) {
  return `
    <article class="mini-card reveal">
      <div class="mini-label">Membership</div>
      <strong>${escapeHtml(item.title)}</strong>
      <p class="mini-note">${escapeHtml(item.note)}</p>
    </article>
  `;
}

function renderDataBlocks() {
  renderList("home-publications", SITE_DATA.homepagePublications.slice(0, 3), renderPublicationCard);
  renderList("home-awards", SITE_DATA.awards.slice(0, 5), renderTimelineCard);
  renderList("home-links", SITE_DATA.profiles.slice(0, 4), renderLinkCard);

  renderList("profile-timeline", SITE_DATA.timeline, renderTimelineCard);
  renderList("research-themes", SITE_DATA.themes, renderThemeCard);
  renderList("research-grants", SITE_DATA.grants, renderMiniCard);

  renderList("publications-list", SITE_DATA.selectedPublications, renderPublicationCard);
  renderList("books-list", SITE_DATA.books, (item) => `
    <article class="mini-card reveal">
      <div class="mini-label">${escapeHtml(item.meta)}</div>
      <strong>${escapeHtml(item.title)}</strong>
      <p class="mini-note">${escapeHtml(item.copy)}</p>
    </article>
  `);

  renderList("awards-list", SITE_DATA.awards, renderTimelineCard);
  renderList("grants-list", SITE_DATA.grants, renderTimelineCard);
  renderList("roles-list", SITE_DATA.roles, renderTimelineCard);
  renderList("memberships-list", SITE_DATA.memberships, renderMembershipCard);

  renderList("profiles-list", SITE_DATA.profiles, renderLinkCard);

  renderList("talks-list", SITE_DATA.talks, renderTalkCard);
  renderList("talks-featured", SITE_DATA.talks.slice(0, 3), renderTalkCard);
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 36, 180)}ms`;
    observer.observe(el);
  });
}

function initSpotlights() {
  document.querySelectorAll(".spotlight-card, .panel-card, .publication-card, .timeline-card, .theme-card, .mini-card, .link-card, .talk-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--spot-x", `${x}%`);
      card.style.setProperty("--spot-y", `${y}%`);
    });
  });
}

function syncYear() {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderDataBlocks();
  syncYear();
  initReveal();
  initSpotlights();
});
