/**
 * ARENACORE '26 - Official FAQ Knowledge Base & Configuration
 * Organized by GDG On Campus PSNACET & ACM PSNACET
 * Department of Information Technology, PSNA College of Engineering and Technology
 * 
 * Standalone Knowledge Base for the ARENA-Bot Widget.
 * Can be edited independently without modifying widget logic.
 */

(function () {
  "use strict";

  const ARENACORE_CONFIG = {
    eventName: "ARENACORE '26",
    tagline: "Build • Innovate • Impact",
    organizers: "GDG On Campus PSNACET & ACM PSNACET",
    department: "Department of Information Technology",
    college: "PSNA College of Engineering and Technology (Autonomous)",
    collegeAddress: "Kothandaraman Nagar, Dindigul – 624622, Tamil Nadu, India",
    venueReporting: "IT Auditorium, IT Block, PSNACET Campus",
    
    // Official Timelines (IST: UTC+05:30)
    eventStart: "2026-10-28T11:00:00+05:30",
    eventEnd: "2026-10-29T11:00:00+05:30",
    displayDates: "28 & 29 October 2026",
    duration: "24 Hours",
    registrationDeadline: "2026-10-20T23:59:59+05:30",
    displayRegistrationDeadline: "20 October 2026",
    hackathonStartDate: "2026-10-28T08:30:00+05:30",
    hackingTimerStart: "2026-10-28T11:00:00+05:30",
    codeFreezeDate: "2026-10-29T11:00:00+05:30",
    hackathonEndDate: "2026-10-29T16:30:00+05:30",
    
    // Team & Fee Structure (2 to 4 members, ₹500 per member)
    minTeamSize: 2,
    maxTeamSize: 4,
    feePerMember: 500,
    calculateFee: function(teamSize) {
      return teamSize * this.feePerMember;
    },
    teamFees: {
      2: 1000,
      3: 1500,
      4: 2000
    },
    shortlistedTeamsCount: 30,

    // Facilities & Amenities (Free of charge)
    facilities: {
      accommodation: "Free",
      food: "Free",
      refreshments: "Free",
      statement: "Accommodation, food, and refreshments are provided free of charge for ARENACORE '26 participants. No separate payment is required for these facilities."
    },

    // Designated Transport
    transport: {
      busNumber: 6,
      busType: "Private bus",
      boardingLocation: "Dindigul Bus Stand",
      instruction: "The designated transport is Private Bus No. 6. Participants using this bus must board at Dindigul Bus Stand."
    },
    
    // Prize Pool
    totalPrizePool: "₹1,20,000",
    firstPrize: "Grand Champion Award",
    secondPrize: "Runner-Up Award",
    
    // Official URLs & Contacts
    googleFormUrl: "https://forms.gle/ir6Dbnn6GTzWCX6v7",
    officialEmail: "gdgpsna@psnacet.edu.in",
    acmEmail: "acmstudentchapter@psnacet.edu.in",
    contacts: {
      emails: {
        gdg: "gdgpsna@psnacet.edu.in",
        acm: "acmstudentchapter@psnacet.edu.in"
      },
      shortlistNotificationNotice: "from the official ARENACORE '26 organizers (gdgpsna@psnacet.edu.in / acmstudentchapter@psnacet.edu.in)",
      collegePhone: "0451-2554411 / 2554032",
      collegeWebsite: "https://www.psnacet.edu.in"
    },
    collegePhone: "0451-2554411 / 2554032",
    collegeWebsite: "https://www.psnacet.edu.in",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=PSNA+College+of+Engineering+and+Technology+Dindigul",
    pitchDeckUrl: "https://docs.google.com/presentation/d/1tFxQwV1VzSZpjmTccVna4HIIlyynsCKG_W8YG2pfM5k/edit?usp=sharing",
    
    // Official Document Links
    links: {
      bonafideUrl: "https://drive.google.com/file/d/1aPHbLGdd5gji1ifJm4x3a19slEX0BwLa/view",
      bonafideDownloadUrl: "https://drive.google.com/uc?export=download&id=1aPHbLGdd5gji1ifJm4x3a19slEX0BwLa"
    },
    
    // Student Leadership Directory
    studentLeads: [
      {
        name: "Chitharthaa A",
        role: "GDG Campus Organiser",
        phone: "+918682067304",
        displayPhone: "+91 86820 67304",
        whatsapp: "https://wa.me/918682067304"
      },
      {
        name: "Darshan S",
        role: "ACM Chair",
        phone: "+919345530457",
        displayPhone: "+91 93455 30457",
        whatsapp: "https://wa.me/919345530457"
      }
    ],

    // Faculty Leadership
    faculty: {
      hod: "Dr. A. Vincent Antony Kumar (Professor & Head, Department of IT)",
      coordinators: [
        "Dr. B. Karthika (Assistant Professor, IT)",
        "Dr. R. Divya (Associate Professor, IT)",
        "Dr. B. Vijaya Nirmala (Assistant Professor, IT)",
        "Dr. S. T. Bharathi (Assistant Professor, IT)"
      ]
    },

    // Optional AI Fallback endpoint (disabled by default, no API keys client-side)
    aiFallback: {
      enabled: false,
      endpoint: ""
    },

    // Regional Tamil language friendly helper greeting
    enableTamilHelper: true
  };

  const CATEGORIES = [
    { id: "reg", name: "Registration", emoji: "📝", description: "Deadlines, process & Google form" },
    { id: "fee", name: "Fees & Payment", emoji: "💳", description: "Amounts, shortlist & payment modes" },
    { id: "teams", name: "Eligibility & Teams", emoji: "👥", description: "Team size, college ID & rules" },
    { id: "themes", name: "Themes & SDGs", emoji: "🎯", description: "AI, IoT & Sustainability tracks" },
    { id: "venue", name: "Schedule & Venue", emoji: "📍", description: "Timings, location & amenities" },
    { id: "rules", name: "Rules & IP", emoji: "⚖️", description: "Code policy, code freeze & ownership" },
    { id: "prizes", name: "Judging & Prizes", emoji: "🏆", description: "Rubric, awards & certificates" },
    { id: "contact", name: "Contact & Support", emoji: "📞", description: "Student leads & organizer help" }
  ];

  const ENTRIES = [
    // =========================================================================
    // 1. REGISTRATION (15 entries)
    // =========================================================================
    {
      id: "reg-how",
      category: "reg",
      question: "How do I register for ARENACORE '26?",
      answer: "Registration is simple! Your **Team Leader** fills out the official registration form online. Provide your team details, chosen theme track, and project concept. **No fee is paid during initial registration.** Only the selected teams (strictly 10 teams per theme) will be invited to pay and attend.",
      keywords: ["register", "registration", "how to register", "apply", "sign up", "enrol", "form"],
      synonyms: ["reg", "join", "entry", "register pannuvathu eppadi", "how can i register", "process"],
      related: ["reg-deadline", "fee-when-pay", "team-size"],
      actions: [
        { label: "Open Registration Form", type: "scrollOrUrl", target: "#register", url: ARENACORE_CONFIG.googleFormUrl }
      ]
    },
    {
      id: "reg-deadline",
      category: "reg",
      question: "What is the registration deadline / last date for ARENACORE '26?",
      answer: "The registration deadline is **20 October 2026 (end of day, 11:59 PM IST)**. Late submissions will not be accepted, so ensure your Team Leader submits the form early!",
      keywords: ["deadline", "last date", "closing date", "end date", "final date", "due date", "registration deadline", "last date to register"],
      synonyms: ["last date", "when is last date", "what is last date", "kadaisi date", "mudiyum date", "when will registration close", "cut off date"],
      related: ["reg-how", "venue-dates", "reg-days-left"],
      actions: [
        { label: "Register Your Team", type: "scrollOrUrl", target: "#register", url: ARENACORE_CONFIG.googleFormUrl }
      ]
    },
    {
      id: "reg-days-left",
      category: "reg",
      question: "How many days are left to register for ARENACORE '26?",
      answer: "The deadline is **20 October 2026 (11:59 PM IST)**. You can check the live countdown on our home page or submit your team registration now before slots fill up!",
      keywords: ["days left", "time left", "how many days", "countdown", "deadline countdown"],
      synonyms: ["innum evlo naal", "days remaining", "hours left"],
      related: ["reg-deadline", "reg-how"],
      actions: [
        { label: "Register Now", type: "scrollOrUrl", target: "#register", url: ARENACORE_CONFIG.googleFormUrl }
      ]
    },
    {
      id: "reg-form-fields",
      category: "reg",
      question: "What details are required in the registration form?",
      answer: "The registration form requires:\n- **Team Information**: Unique Team Name, College/University, Theme/UN SDG Track, and Project Title/Concept Summary.\n- **Team Leader**: Full Name, Official Email, WhatsApp Phone, and optional GitHub/Portfolio.\n- **Team Members**: Names, Emails, and College details for all team members (2 to 4 members).",
      keywords: ["form fields", "details required", "information needed", "what to fill", "fields"],
      synonyms: ["requirements for form", "documents", "data to enter", "what questions in form"],
      related: ["team-size", "theme-list"],
      actions: [
        { label: "View Form", type: "scrollOrUrl", target: "#register", url: ARENACORE_CONFIG.googleFormUrl }
      ]
    },
    {
      id: "reg-who-submits",
      category: "reg",
      question: "Should each member register individually or only the Team Leader?",
      answer: "Only the **Team Leader** submits the registration form on behalf of the entire team (2 to 4 members). The Team Leader serves as the single point of contact for all announcements, shortlist notifications, and payment instructions.",
      keywords: ["who submits", "team leader", "individual registration", "each member", "point of contact"],
      synonyms: ["should all members register", "leader only", "single registration"],
      related: ["team-leader-role", "team-size"]
    },
    {
      id: "reg-link",
      category: "reg",
      question: "Where can I find the official registration link or Google Form?",
      answer: "You can register directly on the ARENACORE '26 website under the **Registration** section, or access the official Google Form link directly.",
      keywords: ["registration link", "google form link", "where to register", "url", "form link"],
      synonyms: ["google form", "reg link", "portal link"],
      related: ["reg-how", "reg-deadline"],
      actions: [
        { label: "Open Official Google Form", type: "scrollOrUrl", target: "#register", url: ARENACORE_CONFIG.googleFormUrl }
      ]
    },
    {
      id: "reg-status",
      category: "reg",
      question: "How do I check my team selection or shortlist status?",
      answer: "You can check your status directly on the ARENACORE '26 website using the **'Check Status'** tool! Simply enter your registered **Team Name** or **Team Leader Email** to view your Round 1 qualification status.",
      keywords: ["check status", "selection status", "shortlist status", "round 1 result", "selected or not"],
      synonyms: ["result", "shortlist list", "am i selected", "team status"],
      related: ["reg-shortlist", "fee-when-pay"],
      actions: [
        { label: "Check Status on Site", type: "scrollOrUrl", target: "#register" }
      ]
    },
    {
      id: "reg-pass",
      category: "reg",
      question: "What is the Virtual Hacker Pass / 3D Attendee Badge?",
      answer: "The **Virtual Hacker Pass** is an interactive 3D holographic badge generated live on our website! As you enter your details in the registration section, you can tilt the badge, inspect campus Wi-Fi credentials, and download your personalized shareable PNG pass.",
      keywords: ["virtual pass", "hacker pass", "badge", "3d badge", "id pass", "generate pass"],
      synonyms: ["attendee badge", "holographic pass", "download pass"],
      related: ["reg-how"],
      actions: [
        { label: "Generate Free Pass", type: "scrollOrUrl", target: "#register" }
      ]
    },
    {
      id: "reg-shortlist",
      category: "reg",
      question: "How does Round 1 evaluation and shortlisting work?",
      answer: "Our expert jury reviews all submitted project concepts based on innovation, technical viability, and UN SDG alignment. The **selected teams (10 teams per theme)** will be shortlisted and receive an official confirmation email from the official ARENACORE '26 organizers (gdgpsna@psnacet.edu.in / acmstudentchapter@psnacet.edu.in) with the payment link and physical hackathon invite.",
      keywords: ["shortlist", "round 1", "evaluation process", "selection criteria", "screening"],
      synonyms: ["how are teams picked", "shortlisting", "selection"],
      related: ["reg-shortlist-count", "fee-when-pay"]
    },
    {
      id: "reg-shortlist-count",
      category: "reg",
      question: "How many teams will be shortlisted for the offline hackathon?",
      answer: "Exactly **30 top teams** will be shortlisted from Round 1 evaluations to compete physically on-campus in the 24-hour hackathon at PSNACET.",
      keywords: ["how many teams", "shortlist count", "number of teams", "top 30", "total teams"],
      synonyms: ["ethana teams", "how many finalists", "seat count"],
      related: ["reg-shortlist", "venue-dates"]
    },
    {
      id: "reg-edit",
      category: "reg",
      question: "Can I edit or update our registration details after submitting?",
      answer: "Minor corrections (such as fixing a typo in an email or phone number) can be requested by emailing `gdgpsna@psnacet.edu.in` with your registered Team Name and Team Leader details before the 20 October deadline.",
      keywords: ["edit registration", "update details", "change form", "modify submission", "mistake"],
      synonyms: ["correction", "change team details", "edit form"],
      related: ["contact-email", "reg-deadline"]
    },
    {
      id: "reg-confirmation",
      category: "reg",
      question: "Will I receive an email confirmation after submitting the form?",
      answer: "Yes, Google Forms automatically records your submission. Once Round 1 evaluations conclude, official shortlist confirmation emails will be sent out from the official ARENACORE '26 organizers (gdgpsna@psnacet.edu.in / acmstudentchapter@psnacet.edu.in).",
      keywords: ["email confirmation", "acknowledgement", "submission confirmation", "did you receive"],
      synonyms: ["mail vanthucha", "confirmation mail"],
      related: ["reg-status", "fee-email-source"]
    },
    {
      id: "reg-after-deadline",
      category: "reg",
      question: "Can I register after the 20 October 2026 deadline?",
      answer: "No. The registration portal closes strictly on **20 October 2026 at 11:59 PM IST**. To maintain a fair evaluation timeline for the jury, late entries cannot be accommodated.",
      keywords: ["after deadline", "late registration", "deadline passed", "extension", "can i still apply"],
      synonyms: ["deadline over", "time mudinjidha", "late entry"],
      related: ["reg-deadline", "contact-leads"]
    },
    {
      id: "reg-problem-statement-submit",
      category: "reg",
      question: "Do we need to submit a completed project during registration?",
      answer: "No! During registration, you only submit your **project title, abstract/concept summary, and selected theme**. You build and refine the actual prototype during the 24-hour hackathon on 28 & 29 October.",
      keywords: ["concept only", "project submission", "abstract", "do we need working code now", "initial proposal"],
      synonyms: ["idea submit panna podhuma", "proposal only"],
      related: ["theme-problem-statements", "rules-pre-existing-code"]
    },
    {
      id: "reg-multiple-teams",
      category: "reg",
      question: "Can a team or leader submit more than one idea?",
      answer: "Each team should submit their single strongest project proposal under their chosen theme. Submitting duplicate or conflicting entries with the same members is not allowed.",
      keywords: ["multiple ideas", "two submissions", "submit twice", "multiple projects"],
      synonyms: ["two teams", "second idea"],
      related: ["team-dual-reg", "reg-who-submits"]
    },
    // -------------------------------------------------------------------------
    // Official Documents & Letters (Bonafide / Consent Letter)
    // -------------------------------------------------------------------------
    {
      id: "bonafide-letter",
      category: "reg",
      question: "Where can I get the bonafide / consent letter?",
      answer: "Here is the official Bonafide / Consent Letter for ARENACORE '26 participation 📄 Open it using the button below. If your college asks for a different format or you have any doubt about it, contact the organizers.",
      keywords: [
        "bonafide",
        "bonafide letter",
        "consent letter",
        "consent form",
        "bonafide certificate",
        "bonafide cert",
        "bonafide form",
        "bonafide copy",
        "bonafide download",
        "student bonafide",
        "college bonafide",
        "bonafide pdf",
        "bonafide link",
        "consent letter for participation",
        "parent consent",
        "permission letter",
        "permission letter for hackathon",
        "participation letter",
        "letter for participation",
        "letter from college",
        "college letter",
        "official bonafide"
      ],
      synonyms: [
        "bonafied",
        "bonafid",
        "bonofide",
        "bonified",
        "bona fide",
        "bonafied letter",
        "bonafide for hackathon",
        "bonafide for arenacore",
        "bonafide venum",
        "bonafide enga kedaikum",
        "bonafide eppadi vanguradhu",
        "bonafide epdi vanguradhu",
        "consent letter enga kedaikum",
        "consent form download",
        "letter download",
        "college permission letter",
        "hackathon letter"
      ],
      related: ["bonafide-what-is", "bonafide-other-letters", "bonafide-not-opening", "reg-how", "team-id-card"],
      actions: [
        { label: "Open Bonafide / Consent Letter", type: "url", url: ARENACORE_CONFIG.links.bonafideUrl },
        { label: "Download PDF", type: "url", url: ARENACORE_CONFIG.links.bonafideDownloadUrl },
        { label: "Copy link", type: "copy", url: ARENACORE_CONFIG.links.bonafideUrl },
        { label: "Contact organizers", type: "contact" }
      ]
    },
    {
      id: "bonafide-what-is",
      category: "reg",
      question: "What is a bonafide letter and do I need it?",
      answer: "A bonafide letter is the document a student uses to certify that they are a bona fide student of their institution. For ARENACORE '26, use the official letter provided below. For exact submission requirements or whether your college requires an additional format, check the registration form or ask the organizers.",
      keywords: [
        "what is bonafide",
        "do i need bonafide",
        "is bonafide compulsory",
        "is bonafide mandatory",
        "why bonafide",
        "bonafide required",
        "what is consent letter",
        "do i need consent form"
      ],
      synonyms: [
        "bonafide thevaya",
        "bonafide kandippa venuma",
        "is letter compulsory",
        "do we need bonafide certificate",
        "consent letter mandatory ah",
        "bonafide meaning"
      ],
      related: ["bonafide-letter", "reg-how", "team-id-card", "contact-leads"],
      actions: [
        { label: "Open Bonafide / Consent Letter", type: "url", url: ARENACORE_CONFIG.links.bonafideUrl },
        { label: "Copy link", type: "copy", url: ARENACORE_CONFIG.links.bonafideUrl },
        { label: "Contact organizers", type: "contact" }
      ]
    },
    {
      id: "bonafide-other-letters",
      category: "reg",
      question: "I need an OD / NOC / permission / invitation letter from the organizers",
      answer: "You can access the official participation letter provided below. If your college or department specifically requires a custom On-Duty (OD), NOC, permission, or formal invitation letter format, please contact our student organizers directly so they can assist you.",
      keywords: [
        "od",
        "od letter",
        "on duty",
        "noc",
        "no objection certificate",
        "permission letter",
        "invitation letter",
        "od certificate",
        "noc letter",
        "college permission",
        "od form"
      ],
      synonyms: [
        "od venum",
        "on duty letter",
        "noc venum",
        "od letter eppadi vanguradhu",
        "permission letter college",
        "need od from organizers",
        "attendance od",
        "on duty slip"
      ],
      related: ["bonafide-letter", "contact-leads", "venue-permission-hostel"],
      actions: [
        { label: "Open Bonafide / Consent Letter", type: "url", url: ARENACORE_CONFIG.links.bonafideUrl },
        { label: "Copy link", type: "copy", url: ARENACORE_CONFIG.links.bonafideUrl },
        { label: "Contact organizers", type: "contact" }
      ]
    },
    {
      id: "bonafide-not-opening",
      category: "reg",
      question: "The bonafide link is not opening / access denied",
      answer: "If the link does not open or gives an error, try opening it in Google Chrome or an incognito tab, or ensure you are signed into your Google account. You can also copy the direct link or contact our organizers at `gdgpsna@psnacet.edu.in`.",
      keywords: [
        "not opening",
        "link not opening",
        "access denied",
        "permission denied",
        "cannot open bonafide",
        "link error",
        "drive link error",
        "drive permission",
        "unable to view pdf",
        "link not working"
      ],
      synonyms: [
        "drive link open aagala",
        "permission error",
        "request access",
        "link open agala",
        "link error varuthu",
        "cant view bonafide"
      ],
      related: ["bonafide-letter", "contact-email", "contact-leads"],
      actions: [
        { label: "Open Bonafide / Consent Letter", type: "url", url: ARENACORE_CONFIG.links.bonafideUrl },
        { label: "Copy link", type: "copy", url: ARENACORE_CONFIG.links.bonafideUrl },
        { label: "Contact organizers", type: "contact" }
      ]
    },
    {
      id: "bonafide-who-signs",
      category: "reg",
      question: "Who should sign the bonafide / consent letter?",
      answer: "Specific signature details (such as HOD, Principal, or faculty advisor) have not been published in the public guidelines. Please refer to the instructions in the official letter document or contact the organizers directly to confirm.",
      keywords: [
        "who should sign",
        "who signs bonafide",
        "signature on bonafide",
        "hod sign",
        "principal sign",
        "faculty sign",
        "who must sign"
      ],
      synonyms: [
        "sign yaaru podanum",
        "yaaru sign pannanum",
        "who should sign consent letter",
        "signature needed from whom",
        "principal signature required"
      ],
      related: ["bonafide-letter", "contact-leads"],
      actions: [
        { label: "Open Bonafide / Consent Letter", type: "url", url: ARENACORE_CONFIG.links.bonafideUrl },
        { label: "Contact organizers", type: "contact" }
      ]
    },
    {
      id: "bonafide-where-submit",
      category: "reg",
      question: "Where and when do I submit the bonafide / consent letter?",
      answer: "Submission procedures and deadlines for the letter are not stated in the general guidelines. Please review the registration form or check with the organizers for exact submission requirements.",
      keywords: [
        "where to submit bonafide",
        "when to submit bonafide",
        "where to submit consent form",
        "upload bonafide",
        "submit letter",
        "submission deadline letter"
      ],
      synonyms: [
        "enga submit pannanum",
        "eppa submit pannanum",
        "where do i upload bonafide",
        "submit consent letter where",
        "when should we submit bonafide"
      ],
      related: ["bonafide-letter", "reg-how", "contact-leads"],
      actions: [
        { label: "Open Bonafide / Consent Letter", type: "url", url: ARENACORE_CONFIG.links.bonafideUrl },
        { label: "Contact organizers", type: "contact" }
      ]
    },

    // =========================================================================
    // 2. FEES & PAYMENT (13 entries)
    // =========================================================================
    {
      id: "fee-amount",
      category: "fee",
      question: "What is the registration fee for ARENACORE '26?",
      answer: "The registration fee is **₹500 per member**.\n\nThe total registration fee depends on the number of team members:\n- **2 members**: ₹1,000 per team\n- **3 members**: ₹1,500 per team\n- **4 members**: ₹2,000 per team\n\nInitial Round 1 registration is 100% free! Payment must be made only after receiving the official shortlist confirmation email from the official ARENACORE '26 organizers (gdgpsna@psnacet.edu.in / acmstudentchapter@psnacet.edu.in).",
      keywords: ["fee", "registration fee", "amount", "cost", "price", "how much", "charges", "how much fee for 3 members", "cost for 3", "fee for 3"],
      synonyms: ["fees evlo", "evalo fees", "ethanai ruba", "ticket price", "rate"],
      related: ["fee-when-pay", "fee-initial-free", "fee-per-team"],
      actions: [
        { label: "View Fee Details", type: "scrollOrUrl", target: "#register" }
      ]
    },
    {
      id: "fee-when-pay",
      category: "fee",
      question: "When should we pay the registration fee?",
      answer: "⚠️ **Do NOT pay any fee during initial Round 1 registration!** Payment must be made only after receiving the official shortlist confirmation email from the official ARENACORE '26 organizers (gdgpsna@psnacet.edu.in / acmstudentchapter@psnacet.edu.in), which contains the secure payment instructions.",
      keywords: ["when to pay", "payment timing", "when do we pay", "pay now", "payment date"],
      synonyms: ["eppa pay pannanum", "ippove panam kattanuma", "payment deadline"],
      related: ["fee-amount", "reg-shortlist", "fee-email-source"]
    },
    {
      id: "fee-initial-free",
      category: "fee",
      question: "Is initial registration free of cost?",
      answer: "Yes! Submitting your team application and project concept for **Round 1 evaluation is 100% free**. The registration fee of **₹500 per member** (₹1,000 for 2 members, ₹1,500 for 3 members, or ₹2,000 for 4 members) is payable only after receiving the official shortlist confirmation email from the official ARENACORE '26 organizers (gdgpsna@psnacet.edu.in / acmstudentchapter@psnacet.edu.in).",
      keywords: ["free registration", "is registration free", "is it free", "zero cost", "apply for free", "no charge", "registration free"],
      synonyms: ["is registration free", "is registering free", "free ah", "initial payment free", "application fee", "cost to register"],
      related: ["fee-amount", "fee-when-pay"]
    },
    {
      id: "fee-per-team",
      category: "fee",
      question: "What is the registration fee for a team?",
      answer: "The total registration fee depends on the number of team members at **₹500 per member**:\n- **2 members**: ₹1,000 per team\n- **3 members**: ₹1,500 per team\n- **4 members**: ₹2,000 per team\n\nPayment must be made only after receiving the official shortlist confirmation email from the official ARENACORE '26 organizers (gdgpsna@psnacet.edu.in / acmstudentchapter@psnacet.edu.in). Accommodation, food, and refreshments are provided free of charge for participants.",
      keywords: ["team fee", "total fee", "500", "total amount", "cost for 2", "cost for 3", "cost for 4", "how much fee for 3 members", "fee for 3", "fee for 2", "fee for 4", "team of 3 fee", "team of 2 fee", "team of 4 fee", "fee for 3 members", "team registration cost"],
      synonyms: ["full team cost", "squad fee", "fee for 3 members", "fee for team of 3", "team of 3 cost"],
      related: ["fee-amount", "fee-inclusion"]
    },
    {
      id: "fee-how-pay",
      category: "fee",
      question: "How do we pay the fee / what payment modes are supported?",
      answer: "Shortlisted teams will receive secure payment instructions via their official confirmation email from the official ARENACORE '26 organizers (gdgpsna@psnacet.edu.in / acmstudentchapter@psnacet.edu.in). Supported modes include **UPI (Google Pay, PhonePe, Paytm), Net Banking, and Debit/Credit cards**.",
      keywords: ["how to pay", "payment methods", "upi", "gpay", "phonepe", "net banking", "card"],
      synonyms: ["payment link", "epdi pay panrathu", "payment mode"],
      related: ["fee-when-pay", "fee-email-source"]
    },
    {
      id: "fee-email-source",
      category: "fee",
      question: "Which email address will send the official payment link?",
      answer: "Official shortlist confirmation notifications and payment instructions will arrive **from the official ARENACORE '26 organizers (gdgpsna@psnacet.edu.in / acmstudentchapter@psnacet.edu.in)**. Always verify the sender address to protect yourself from phishing or unauthorized requests.",
      keywords: ["official email", "payment email", "gdgpsna@psnacet.edu.in", "acmstudentchapter@psnacet.edu.in", "scam alert", "sender"],
      synonyms: ["which email", "mail address", "genuine mail"],
      related: ["contact-email", "fee-when-pay"]
    },
    {
      id: "fee-inclusion",
      category: "fee",
      question: "What does the ₹500 registration fee include?",
      answer: "Accommodation, food, and refreshments are provided free of charge for ARENACORE '26 participants. No separate payment is required for these facilities.\n\nThe registration fee of **₹500 per member** (₹1,000 for 2, ₹1,500 for 3, or ₹2,000 for 4 members) covers hackathon participation, official participant kits (swags, badges, stickers), high-speed 1 Gbps optical Wi-Fi, lab workstations, mentorship, and official GDG & ACM certificates. The ₹500 fee and these free facilities are separate pieces of information.",
      keywords: ["fee inclusion", "what is included", "food included", "accommodation included", "kits provided", "perks", "benefits", "what do we get", "is food included in the registration fee", "do participants need to pay separately for food", "do we need to pay separately for food", "what facilities are included"],
      synonyms: ["food kedaikuma", "sapadu iruka", "stay free", "accommodation free", "amenities included", "do we pay for food separately"],
      related: ["venue-food", "venue-accommodation", "venue-wifi"]
    },
    {
      id: "fee-refund",
      category: "fee",
      question: "Is the registration fee refundable?",
      answer: "Registration fees are strictly non-refundable once paid, as logistical arrangements, catering, and materials are committed immediately upon team confirmation.",
      keywords: ["refund", "refundable", "cancellation", "money back", "can i cancel"],
      synonyms: ["panam thirumba varuma", "refund policy"],
      related: ["fee-amount", "fee-when-pay"]
    },
    {
      id: "fee-not-shortlisted",
      category: "fee",
      question: "Do I have to pay if our team is not shortlisted in Round 1?",
      answer: "No, absolutely not! Only the **selected teams (strictly 10 teams per theme)** are requested to pay the registration fee. If you are not shortlisted, there is zero fee charged.",
      keywords: ["not shortlisted", "rejected", "if not selected", "pay if rejected"],
      synonyms: ["select aagalana fee kattanuma", "no selection"],
      related: ["fee-initial-free", "reg-status"]
    },
    {
      id: "fee-individual-pay",
      category: "fee",
      question: "Can members pay individually or does the Team Leader pay for all members?",
      answer: "The Team Leader should complete the consolidated payment (₹1,000 for 2 members, ₹1,500 for 3 members, or ₹2,000 for 4 members) for the team using the official instructions received in the shortlist confirmation email from the official ARENACORE '26 organizers (gdgpsna@psnacet.edu.in / acmstudentchapter@psnacet.edu.in).",
      keywords: ["pay individually", "separate payment", "team leader pay", "consolidated payment"],
      synonyms: ["thani thaniya pay panlama", "single payment"],
      related: ["fee-per-team", "team-leader-role"]
    },
    {
      id: "fee-receipt",
      category: "fee",
      question: "Will our team get a payment receipt or confirmation voucher?",
      answer: "Yes. Upon completing payment through the official gateway, an automated payment receipt and booking confirmation will be sent to the Team Leader's registered email address.",
      keywords: ["receipt", "payment proof", "confirmation voucher", "invoice"],
      synonyms: ["bill", "payment acknowledgement"],
      related: ["fee-how-pay", "fee-email-source"]
    },
    {
      id: "fee-tanglish-evlo",
      category: "fee",
      question: "Evalo fees kattanum? / How much is the fee?",
      answer: "ARENACORE '26 registration fee oru member-ku **₹500** (team-ku ₹1,000 for 2 members, ₹1,500 for 3 members, or ₹2,000 for 4 members). Initial registration 100% free! Official shortlist confirmation email from the official ARENACORE '26 organizers (gdgpsna@psnacet.edu.in / acmstudentchapter@psnacet.edu.in) vantha piragu thaan pay pannanum!",
      keywords: ["evalo fees", "evlo fees", "ethanai ruba", "tamil fee", "tanglish fee"],
      synonyms: ["fee details in tamil", "panam"],
      related: ["fee-amount", "fee-when-pay"]
    },
    {
      id: "fee-deadline",
      category: "fee",
      question: "What is the deadline to pay the registration fee after shortlisting?",
      answer: "Shortlisted teams will receive a specific payment window (typically 2 to 3 days from the date of the shortlist email) to confirm their seat. Failure to pay within that window releases the seat to waitlisted teams.",
      keywords: ["payment deadline", "last date to pay", "payment window", "fee due date"],
      synonyms: ["when is last date for payment", "seat confirmation deadline"],
      related: ["fee-when-pay", "reg-shortlist"]
    },

    // =========================================================================
    // 3. ELIGIBILITY & TEAMS (14 entries)
    // =========================================================================
    {
      id: "team-size",
      category: "teams",
      question: "What is the required team size for ARENACORE '26?",
      answer: "The required team size for ARENACORE '26 is a **minimum of 2 and a maximum of 4 members** per team.\n\n- **Allowed**: Teams of 2, 3, or 4 members (duo, pair, or small squad).\n- **Not allowed**: Solo participation is not permitted (minimum team size is 2).\n- **Not allowed**: Teams with 5 or more members are not permitted (maximum team size is 4).\n- One member must be designated as **Team Leader** and serve as the single point of contact.\n- Every team must have a unique team name, and dual registration is not permitted.\n- Inter-college and cross-department teams are permitted if all members are active students with original college IDs.\n- Registration fee is ₹500 per member (₹1,000 for 2 members, ₹1,500 for 3 members, and ₹2,000 for 4 members).",
      keywords: ["team size", "members", "how many members", "minimum members", "maximum members", "number of members", "team strength", "duo", "pair", "2 members", "3 members", "4 members", "five members", "team size evlo", "evlo peru team", "squad size", "member count", "allowed team size"],
      synonyms: ["team size evlo", "evlo peru team", "team size ethanai", "ethana peru", "ethanai members", "team-la ethana peru", "group size", "how many in a team"],
      related: ["team-solo", "team-size-3-or-5"],
      actions: [
        { label: "Check Team Rules", type: "scrollOrUrl", target: "#guidelines" }
      ]
    },
    {
      id: "team-solo",
      category: "teams",
      question: "Can I participate solo / individually in ARENACORE '26?",
      answer: "No. **Solo participation is not permitted** because the minimum team size is 2 members. We invite you to find a teammate and register together as a team of 2 to 4 members!",
      keywords: ["solo", "alone", "individual", "single person", "can I participate alone", "participate solo", "single participant", "can i join alone", "thaniya participate panlama"],
      synonyms: ["can i join alone", "can I participate alone", "single person", "alone", "thaniya join panlama", "one person", "can i participate solo"],
      related: ["team-size", "team-inter-college"]
    },
    {
      id: "team-size-3-or-5",
      category: "teams",
      question: "Can we participate with 2 or 3 members, or can we have 5 members?",
      answer: "Yes! Teams of **2, 3, or 4 members** are permitted (duo or pair participation, and teams of 3 or 4 are allowed). **Solo participation is not permitted**, and **teams with 5 or more members are not permitted**.",
      keywords: ["2 members", "3 members", "4 members", "five members", "team of 2", "team of 3", "team of 4", "team of 5", "can we be 5 members", "team of 2 allowed", "team of 3 allowed", "duo", "pair", "5 members permitted"],
      synonyms: ["can we be 2", "can we be 3", "can we be 5", "three people allowed", "two people allowed", "pair allowed", "duo allowed"],
      related: ["team-size", "team-solo"]
    },
    {
      id: "team-inter-college",
      category: "teams",
      question: "Are inter-college teams allowed?",
      answer: "Yes, absolutely! **Inter-college teams are permitted and warmly encouraged**, provided every team member is an active college student with a valid college ID card.",
      keywords: ["inter-college", "different colleges", "cross college", "other colleges", "mixed college"],
      synonyms: ["vera college sernthu", "different university", "multiple colleges"],
      related: ["team-eligibility", "team-inter-dept"]
    },
    {
      id: "team-inter-dept",
      category: "teams",
      question: "Can students from different departments or years team up?",
      answer: "Yes! Cross-department teams (e.g. IT, CSE, AI/DS, ECE, Mechanical, BioTech) and cross-year teams (1st year to final year) are welcome. Diverse skill sets make for winning hackathon prototypes!",
      keywords: ["cross department", "different branches", "different years", "inter department", "ece cse it"],
      synonyms: ["different branch", "mixed years", "seniors and juniors"],
      related: ["team-inter-college", "team-size"]
    },
    {
      id: "team-eligibility",
      category: "teams",
      question: "Who is eligible to participate in ARENACORE '26?",
      answer: "ARENACORE '26 is strictly open to students currently pursuing engineering undergraduate programs (B.E. / B.Tech) from any recognized university, institute, or college across India.",
      keywords: ["eligibility", "who can participate", "eligible", "engineering undergraduates", "btech", "be"],
      synonyms: ["who can apply", "eligibility criteria", "qualifications"],
      related: ["team-first-year", "team-id-card"]
    },
    {
      id: "team-first-year",
      category: "teams",
      question: "Can 1st year / freshers students participate?",
      answer: "Yes! First-year students are warmly welcome. Hackathons are one of the fastest ways to learn, build connections, and get mentored by Google Developer Experts and industry architects.",
      keywords: ["first year", "freshers", "1st year", "beginners", "new students"],
      synonyms: ["first year participate panlama", "can juniors join"],
      related: ["team-eligibility", "rules-starter-kits"]
    },
    {
      id: "team-id-card",
      category: "teams",
      question: "Is physical college ID card mandatory at check-in?",
      answer: "Yes. All physical attendees must produce their **original college identity card** at the registration desk in the IT Auditorium for physical identity verification.",
      keywords: ["college id", "id card", "identity verification", "mandatory id", "original id"],
      synonyms: ["id card thevaya", "college proof", "id card needed"],
      related: ["venue-what-to-bring", "venue-reporting-time"]
    },
    {
      id: "team-dual-reg",
      category: "teams",
      question: "Can a student be registered in more than one team?",
      answer: "No. **Dual registration is strictly prohibited.** A participant cannot be registered in more than one team. Any duplicate registrations detected will disqualify the participant from both teams.",
      keywords: ["dual registration", "multiple teams", "two teams", "in 2 teams"],
      synonyms: ["oru aal 2 team", "double registration"],
      related: ["team-size", "rules-disqualification"]
    },
    {
      id: "team-leader-role",
      category: "teams",
      question: "What are the roles and responsibilities of the Team Leader?",
      answer: "The Team Leader acts as the single point of contact. Responsibilities include:\n- Submitting the team registration form.\n- Receiving official communications and shortlist emails.\n- Completing consolidated team fee payment.\n- Coordinating repo submissions on Day 2.",
      keywords: ["team leader", "leader responsibilities", "spoc", "leader role", "single point of contact"],
      synonyms: ["leader work", "what should leader do"],
      related: ["reg-who-submits", "fee-individual-pay"]
    },
    {
      id: "team-name-rules",
      category: "teams",
      question: "Are there any guidelines for choosing a team name?",
      answer: "Yes. Team names must be unique, professional, and memorable. They must **not infringe upon registered trademarks** or contain offensive, abusive, or inappropriate language.",
      keywords: ["team name", "naming rules", "trademark", "appropriate name", "rules for name"],
      synonyms: ["team peru", "good team name"],
      related: ["reg-form-fields"]
    },
    {
      id: "team-member-change",
      category: "teams",
      question: "Can we swap or replace a team member after submitting?",
      answer: "If an emergency arises, the Team Leader must write to `gdgpsna@psnacet.edu.in` with full details of the outgoing and incoming member before check-in. Replacements are subject to steering committee approval.",
      keywords: ["change member", "swap member", "replace member", "member change", "substitute"],
      synonyms: ["member mathalama", "replace person"],
      related: ["contact-email", "team-size"]
    },
    {
      id: "team-non-students",
      category: "teams",
      question: "Can working professionals, freelancers, or alumni participate?",
      answer: "No. ARENACORE '26 is strictly open to students currently pursuing engineering undergraduate programs (B.E. / B.Tech). Working professionals, freelancers, or alumni are not eligible.",
      keywords: ["working professionals", "alumni", "freelancers", "graduated", "non-students"],
      synonyms: ["college mudichavanga", "job holders", "can passouts join"],
      related: ["team-eligibility", "team-id-card"]
    },
    {
      id: "team-tanglish-ethana",
      category: "teams",
      question: "Team-la ethanai peru irukanum? / How many in a team?",
      answer: "ARENACORE '26 rules-padi **2 to 4 members** irukanum. Solo participation allow kidayathu. Inter-college teams kooda create pannalam!",
      keywords: ["ethana peru irukanum", "tamil team size", "tanglish team", "2 to 4 members"],
      synonyms: ["team size in tamil"],
      related: ["team-size", "team-solo"]
    },

    // =========================================================================
    // 4. THEMES & SDGS (15 entries)
    // =========================================================================
    {
      id: "theme-list",
      category: "themes",
      question: "What are the official themes and UN SDG tracks for ARENACORE '26?",
      answer: "ARENACORE '26 features 3 broad innovation tracks aligned with UN Sustainable Development Goals:\n1. 🤖 **AI & Intelligent Systems** (UN SDGs 3, 4, 8, 9)\n2. 🛰️ **Connected & Autonomous Technologies** (UN SDGs 7, 9, 11)\n3. 🛡️ **Secure & Sustainable Future** (UN SDGs 3, 7, 13, 16)\nTeams have complete freedom to propose their own bold ideas!",
      keywords: ["themes", "tracks", "un sdgs", "problem domains", "categories", "focus areas"],
      synonyms: ["hackathon themes", "what are the tracks", "topics", "domains"],
      related: ["theme-ai", "theme-autonomous", "theme-sustainable"],
      actions: [
        { label: "Explore Themes & SDGs", type: "scrollOrUrl", target: "#events" }
      ]
    },
    {
      id: "theme-ai",
      category: "themes",
      question: "What is the AI & Intelligent Systems theme?",
      answer: "This track focuses on:\n- **Focus Areas**: Generative AI, Autonomous AI Agents, Machine Learning, Computer Vision, NLP, and Intelligent Automation.\n- **UN SDGs**: 3 (Good Health), 4 (Quality Education), 8 (Decent Work & Economic Growth), 9 (Industry, Innovation & Infrastructure).",
      keywords: ["ai theme", "intelligent systems", "generative ai", "machine learning", "nlp", "computer vision", "sdg 3 4 8 9"],
      synonyms: ["ai track", "ml track", "genai", "llm"],
      related: ["theme-list", "theme-problem-statements"],
      actions: [
        { label: "Choose AI Track", type: "scrollOrUrl", target: "#register" }
      ]
    },
    {
      id: "theme-autonomous",
      category: "themes",
      question: "What is the Connected & Autonomous Technologies theme?",
      answer: "This track focuses on:\n- **Focus Areas**: Internet of Things (IoT), Edge AI, Robotics, Embedded Systems, Autonomous Drones, and Smart Hardware Devices.\n- **UN SDGs**: 7 (Affordable & Clean Energy), 9 (Industry & Innovation), 11 (Sustainable Cities & Communities).",
      keywords: ["connected technologies", "autonomous", "iot", "edge ai", "robotics", "drones", "embedded", "sdg 7 9 11"],
      synonyms: ["hardware track", "robotics track", "iot theme", "smart devices"],
      related: ["theme-list", "venue-what-to-bring"],
      actions: [
        { label: "Choose Hardware/IoT Track", type: "scrollOrUrl", target: "#register" }
      ]
    },
    {
      id: "theme-sustainable",
      category: "themes",
      question: "What is the Secure & Sustainable Future theme?",
      answer: "This track focuses on:\n- **Focus Areas**: Cybersecurity, Privacy Engineering, HealthTech, ClimateTech, and Smart Energy Systems.\n- **UN SDGs**: 3 (Health & Well-Being), 7 (Clean Energy), 13 (Climate Action), 16 (Peace, Justice & Strong Institutions).",
      keywords: ["secure future", "sustainable", "cybersecurity", "privacy", "healthtech", "climatetech", "smart energy", "sdg 13"],
      synonyms: ["security track", "cyber track", "green tech", "sustainability"],
      related: ["theme-list", "theme-what-is-sdg"],
      actions: [
        { label: "Choose Security/Climate Track", type: "scrollOrUrl", target: "#register" }
      ]
    },
    {
      id: "theme-problem-statements",
      category: "themes",
      question: "Are there pre-assigned problem statements or can we propose our own idea?",
      answer: "There are **NO pre-assigned problem statements**! Teams have 100% freedom to propose their own innovative ideas and real-world solutions aligned with any of the 3 official themes and UN SDGs.",
      keywords: ["problem statements", "pre-assigned", "own idea", "freedom to choose", "topics given"],
      synonyms: ["question tharuvangala", "problem statement iruka", "can we bring our own idea"],
      related: ["theme-list", "rules-pre-existing-code"]
    },
    {
      id: "theme-what-is-sdg",
      category: "themes",
      question: "What are UN SDGs and why are they important for ARENACORE '26?",
      answer: "UN SDGs are the 17 United Nations **Sustainable Development Goals** tackling global challenges like climate change, poverty, health, and quality education. Solutions that clearly target one or more SDGs earn top marks in the **Real-World Impact & Viability (25 pts)** judging rubric.",
      keywords: ["what is sdg", "un sdg", "sustainable development goals", "united nations", "impact"],
      synonyms: ["sdg na enna", "why sdgs", "sdg rubric"],
      related: ["prizes-judging-criteria", "theme-list"]
    },
    {
      id: "theme-choose-multiple",
      category: "themes",
      question: "Can our project span multiple themes or SDGs?",
      answer: "Yes! Real-world projects often intersect (e.g. an IoT drone using Edge AI for Climate Monitoring). Select your primary theme track in the registration form, and highlight intersecting SDGs during your pitch!",
      keywords: ["multiple themes", "hybrid project", "two tracks", "span themes"],
      synonyms: ["both ai and iot", "combine tracks"],
      related: ["theme-list", "theme-ai", "theme-autonomous"]
    },
    {
      id: "theme-change",
      category: "themes",
      question: "Can we change our theme or idea during the hackathon?",
      answer: "You are allowed to pivot or adjust your idea during the initial planning sprint on Day 1. Final idea and theme lock-in takes place at **11:00 AM on Day 1 (28 October)** when the 24-hour hacking timer commences.",
      keywords: ["change theme", "pivot idea", "modify concept", "lock in idea"],
      synonyms: ["theme mathalama", "change project during hack"],
      related: ["venue-schedule-day1", "theme-problem-statements"]
    },
    {
      id: "theme-tech-stack",
      category: "themes",
      question: "Are there restrictions on the tech stack, languages, or frameworks we can use?",
      answer: "No restrictions at all! You are free to use any modern programming languages, libraries, and frameworks: Python, TypeScript, React, Next.js, Flutter, Node.js, Go, Rust, C++, TensorFlow, PyTorch, etc.",
      keywords: ["tech stack", "languages allowed", "frameworks", "python", "react", "flutter"],
      synonyms: ["can i use react", "can i use python", "what stack is allowed"],
      related: ["rules-starter-kits", "rules-libraries-apis"]
    },
    {
      id: "theme-genai-apis",
      category: "themes",
      question: "Can we use Google Gemini API, OpenAI, or other Generative AI tools?",
      answer: "Yes! Integration of Google Gemini API, Google Cloud Vertex AI, and open-source models is encouraged. Mentors will be available to help you optimize API latency and prompts.",
      keywords: ["gemini api", "chatgpt", "openai", "claude", "genai apis", "llm"],
      synonyms: ["can we use gemini", "ai api allowed"],
      related: ["theme-ai", "rules-libraries-apis"]
    },
    {
      id: "theme-hardware-track",
      category: "themes",
      question: "Which theme is best for hardware, Arduino, ESP32, and robotics projects / is hardware needed?",
      answer: "Choose **Connected & Autonomous Technologies** (Theme 2). Bring your own sensors, microcontrollers (ESP32, Arduino, Raspberry Pi), and actuators. College labs provide desktop workstations and 1 Gbps Wi-Fi.",
      keywords: ["hardware theme", "esp32", "arduino", "raspberry pi", "sensors", "robotics", "hardware needed", "hardware required", "is hardware needed"],
      synonyms: ["hardware needed", "is hardware needed", "do we need hardware", "which track for iot", "hardware project"],
      related: ["theme-autonomous", "venue-what-to-bring"]
    },
    {
      id: "theme-sdg-3",
      category: "themes",
      question: "Which track addresses healthcare and medical innovations (SDG 3)?",
      answer: "Both **AI & Intelligent Systems** (e.g. AI diagnostics, medical imaging) and **Secure & Sustainable Future** (e.g. HealthTech, telemedicine security) address UN SDG 3 (Good Health & Well-Being).",
      keywords: ["sdg 3", "healthcare", "medical", "healthtech", "hospital"],
      synonyms: ["health track", "doctor app", "medical project"],
      related: ["theme-ai", "theme-sustainable"]
    },
    {
      id: "theme-sdg-7",
      category: "themes",
      question: "Which track covers clean energy and smart grids (SDG 7)?",
      answer: "Both **Connected & Autonomous Technologies** (smart IoT meters, solar tracking) and **Secure & Sustainable Future** (decentralized smart microgrids) target UN SDG 7 (Affordable & Clean Energy).",
      keywords: ["sdg 7", "clean energy", "solar", "energy", "smart grid"],
      synonyms: ["green energy", "power project"],
      related: ["theme-autonomous", "theme-sustainable"]
    },
    {
      id: "theme-sdg-13",
      category: "themes",
      question: "Which track covers climate change and environmental sustainability (SDG 13)?",
      answer: "**Secure & Sustainable Future** directly aligns with UN SDG 13 (Climate Action), covering carbon monitoring, waste reduction, precision agriculture, and eco-friendly technologies.",
      keywords: ["sdg 13", "climate action", "environment", "global warming", "sustainability"],
      synonyms: ["climate track", "eco project"],
      related: ["theme-sustainable", "theme-what-is-sdg"]
    },
    {
      id: "theme-recommendation",
      category: "themes",
      question: "Can you recommend a theme for web and mobile fullstack developers?",
      answer: "**AI & Intelligent Systems** is ideal for web/mobile builders. You can build an intelligent agent, AI-powered workflow automation, or an assistive SaaS platform using Next.js or Flutter pre-integrated with Gemini APIs.",
      keywords: ["recommend theme", "which theme to pick", "web developers", "mobile developers"],
      synonyms: ["suggest track", "best track for web"],
      related: ["theme-ai", "rules-starter-kits"]
    },

    // =========================================================================
    // 5. SCHEDULE & VENUE (16 entries)
    // =========================================================================
    {
      id: "venue-dates",
      category: "venue",
      question: "When and where is ARENACORE '26 happening?",
      answer: "ARENACORE '26 takes place on **28 & 29 October 2026 (24 hours non-stop)** at **PSNA College of Engineering and Technology (Autonomous), Kothandaraman Nagar, Dindigul – 624622, Tamil Nadu**. Participant reporting location is the **IT Auditorium**. The 24-hour hacking begins at 11:00 AM on 28 October 2026 and reaches code freeze at 11:00 AM on 29 October 2026.",
      keywords: ["when and where is arenacore'26 happening", "date of hackathon", "when is hackathon", "dates", "timing", "location", "venue", "where is it", "eppo date", "hackathon dates", "hackathon duration"],
      synonyms: ["eppo date", "eppa date", "date eppo", "eppa hackathon", "enga nadakum", "hackathon date", "when will it happen", "event date"],
      related: ["venue-schedule-day1", "venue-location"],
      actions: [
        { label: "Open in Maps", type: "url", url: ARENACORE_CONFIG.mapsUrl },
        { label: "See Schedule", type: "scrollOrUrl", target: "#schedule" }
      ]
    },
    {
      id: "venue-location",
      category: "venue",
      question: "Where is PSNACET located and what is the exact campus address?",
      answer: "**PSNA College of Engineering and Technology (Autonomous)**\nKothandaraman Nagar, Dindigul – 624622, Tamil Nadu, India.\nThe hackathon is hosted in the **Department of IT Block & IT Auditorium**.",
      keywords: ["venue address", "location", "address", "psnacet", "dindigul", "where is psna"],
      synonyms: ["campus address", "exact location", "college location"],
      related: ["venue-how-to-reach", "venue-dates"],
      actions: [
        { label: "Open in Maps", type: "url", url: ARENACORE_CONFIG.mapsUrl }
      ]
    },
    {
      id: "venue-reporting-time",
      category: "venue",
      question: "What is the reporting time on Day 1 (28 October 2026)?",
      answer: "Reporting begins at **08:30 AM on Day 1 (28 October 2026)** at the IT Auditorium for participant check-in, physical badge collection, Wi-Fi setup, and welcome breakfast.",
      keywords: ["reporting time", "check in time", "arrival time", "when to arrive", "day 1 time"],
      synonyms: ["eppa varanum", "morning time", "checkin"],
      related: ["venue-schedule-day1", "team-id-card"]
    },
    {
      id: "venue-schedule-day1",
      category: "venue",
      question: "What is the detailed schedule for Day 1 (28 October 2026)?",
      answer: "📅 **Day 1 Timeline (28 Oct)**:\n- **08:30 AM**: Check-in, Kit Distribution & Breakfast (IT Auditorium)\n- **10:00 AM**: Grand Inauguration & Keynote Address (GenAI Keynote)\n- **11:00 AM**: 🚀 **24-Hour Hacking Timer Commences!**\n- **03:30 PM**: Mentorship Round 1 (Architecture & Feasibility)\n- **08:00 PM**: Dinner & Midnight Jam (Trivia Kahoot & Refreshments)\n- **11:30 PM**: Mentorship Round 2 (Midnight Checkpoint & Debugging)",
      keywords: ["schedule day 1", "timeline day 1", "day 1 schedule", "october 28 schedule", "run of show"],
      synonyms: ["day 1 programme", "first day timeline"],
      related: ["venue-schedule-day2", "venue-dates"],
      actions: [
        { label: "View Full Schedule", type: "scrollOrUrl", target: "#schedule" }
      ]
    },
    {
      id: "venue-schedule-day2",
      category: "venue",
      question: "What is the detailed schedule for Day 2 (29 October 2026)?",
      answer: "📅 **Day 2 Timeline (29 Oct)**:\n- **07:00 AM**: Morning Refreshments & Code Freeze Prep\n- **11:00 AM**: 🛑 **Code Freeze & Final Project Submission** (Repos locked)\n- **11:30 AM**: Grand Jury Evaluation & Stage Presentations (5 min demo + 3 min Q&A)\n- **03:30 PM**: Valedictory Ceremony & Prize Distribution (Champions announced!)",
      keywords: ["schedule day 2", "timeline day 2", "day 2 schedule", "october 29 schedule", "closing"],
      synonyms: ["day 2 programme", "second day timeline", "code freeze time"],
      related: ["venue-schedule-day1", "rules-code-freeze"],
      actions: [
        { label: "View Full Schedule", type: "scrollOrUrl", target: "#schedule" }
      ]
    },
    {
      id: "venue-food",
      category: "venue",
      question: "Is food and refreshments provided during the hackathon?",
      answer: "Accommodation, food, and refreshments are provided free of charge for ARENACORE '26 participants. No separate payment is required for these facilities.",
      keywords: ["food", "meals", "snacks", "dinner", "lunch", "breakfast", "coffee", "tea", "is food provided", "are refreshments free", "do we need to pay separately for food", "refreshments free", "is food free", "food provided"],
      synonyms: ["food free ah", "refreshment free ah", "sapadu free ah", "sapadu iruka", "food provided", "catered meals", "refreshments", "free refreshments", "do participants need to pay separately for food"],
      related: ["fee-inclusion", "venue-dates", "venue-accommodation"]
    },
    {
      id: "venue-accommodation",
      category: "venue",
      question: "Is accommodation or stay provided for outstation teams?",
      answer: "Accommodation, food, and refreshments are provided free of charge for ARENACORE '26 participants. No separate payment is required for these facilities.",
      keywords: ["accommodation", "stay", "hostel", "sleeping arrangement", "outstation", "night stay", "free stay", "is accommodation free", "is accommodation available for all participants", "free accommodation", "stay and food free"],
      synonyms: ["accommodation free ah", "stay and food free ah", "thanga edam free ah", "room kedaikuma", "hotel", "dormitory", "free accommodation"],
      related: ["fee-inclusion", "venue-food", "venue-dates"]
    },
    {
      id: "venue-bus-transport",
      category: "venue",
      question: "Where should I board the bus and which bus number is designated?",
      answer: "The designated transport is Private Bus No. 6. Participants using this bus must board at Dindigul Bus Stand.",
      keywords: ["where should I board the bus", "where is the pickup point", "which bus should I board", "what is the bus number", "is it a private bus", "is pickup available from Dindigul", "how do I reach the venue by the designated bus", "which bus number", "Dindigul bus stand pickup", "is it a private bus", "bus number", "bus no 6", "private bus", "dindigul bus stand", "designated bus", "board the bus", "pickup point"],
      synonyms: ["bus enga board pannanum", "Dindigul bus stand la board pannanuma", "bus number enna", "no 6 bus enga", "Dindigul pickup point", "pickup from dindigul", "private bus no 6", "bus stand pickup"],
      related: ["venue-how-to-reach", "venue-location"],
      actions: [
        { label: "Open in Maps", type: "url", url: ARENACORE_CONFIG.mapsUrl }
      ]
    },
    {
      id: "venue-wifi",
      category: "venue",
      question: "Is high-speed Wi-Fi provided at the venue?",
      answer: "Yes! PSNACET provides a dedicated **1 Gbps optical campus Wi-Fi network** across all lab clusters and the IT Auditorium. Wi-Fi connection instructions and access credentials are provided on your physical attendee badge at check-in.",
      keywords: ["wifi", "wi-fi", "internet", "network", "speed", "1 gbps"],
      synonyms: ["net iruka", "wifi iruka", "broadband"],
      related: ["venue-wifi-password", "venue-what-to-bring"]
    },
    {
      id: "venue-wifi-password",
      category: "venue",
      question: "What is the Wi-Fi password or network SSID?",
      answer: "For campus cyber security, official Wi-Fi credentials are confidential and **shared strictly during on-campus physical check-in** on your attendee pass. Do not rely on sample demo passwords.",
      keywords: ["wifi password", "wifi ssid", "password", "network key"],
      synonyms: ["wifi passkey", "net password"],
      related: ["venue-wifi", "venue-reporting-time"]
    },
    {
      id: "venue-what-to-bring",
      category: "venue",
      question: "What things should each participant bring to the hackathon / can we bring our own laptop?",
      answer: "Please bring:\n1. 💻 **Own Laptop & Charger** (plus extension cords)\n2. 🆔 **Original College Identity Card** (mandatory)\n3. 🔌 **Hardware components** (ESP32, Arduino, sensors) if competing in IoT track\n4. 👔 **Formal / Semi-formal attire** (PSNACET campus dress code)\n5. 🧴 Personal essentials and medicines.",
      keywords: ["what to bring", "checklist", "items needed", "laptop", "charger", "things to carry", "own laptop", "can we use our own laptop", "bring laptop"],
      synonyms: ["can we bring our own laptop", "can we use our own laptop", "own laptop", "bring laptop", "enna kondu varanum", "pack list", "essentials"],
      related: ["team-id-card", "venue-dress-code"]
    },
    {
      id: "venue-labs",
      category: "venue",
      question: "Are desktop computers available in the college labs?",
      answer: "Yes! In addition to your personal laptops, desktop computer systems in the Department of IT lab clusters will be available for development, terminal access, and testing deployments.",
      keywords: ["labs", "desktop computers", "systems available", "lab pcs", "monitors"],
      synonyms: ["college system use panlama", "desktop pc"],
      related: ["venue-what-to-bring", "venue-wifi"]
    },
    {
      id: "venue-dress-code",
      category: "venue",
      question: "Is there a mandatory dress code at PSNACET campus?",
      answer: "Yes. In accordance with PSNACET autonomous campus regulations, all participants must maintain a **neat, formal or semi-formal dress code** throughout the entire 24-hour event.",
      keywords: ["dress code", "attire", "formal", "clothes", "what to wear"],
      synonyms: ["dress code iruka", "clothes rules"],
      related: ["rules-code-of-conduct", "venue-what-to-bring"]
    },
    {
      id: "venue-how-to-reach",
      category: "venue",
      question: "How do I reach PSNACET from Dindigul Railway Station or Bus Stand?",
      answer: "The designated transport is Private Bus No. 6. Participants using this bus must board at Dindigul Bus Stand.\n\nPSNACET is situated on the **Dindigul–Palani Highway**, approximately 12 km from Dindigul Central Bus Stand and Dindigul Junction Railway Station. For any unconfirmed transport details, please contact the official organizers directly.",
      keywords: ["how to reach", "travel", "transport", "bus stand", "railway station", "directions", "reach venue"],
      synonyms: ["epdi varanum", "route", "bus route"],
      related: ["venue-location", "venue-bus-transport"],
      actions: [
        { label: "Open in Maps", type: "url", url: ARENACORE_CONFIG.mapsUrl }
      ]
    },
    {
      id: "venue-travel-allowance",
      category: "venue",
      question: "Do organizers provide travel allowance (TA/DA) or reimbursement?",
      answer: "Travel allowance (TA/DA) is not officially provided. Participants are responsible for their own travel arrangements to and from PSNACET campus.",
      keywords: ["ta da", "travel allowance", "reimbursement", "travel expenses", "fare"],
      synonyms: ["travel ticket claim", "train fare refund"],
      related: ["venue-how-to-reach", "fee-inclusion"]
    },
    {
      id: "venue-when-ends",
      category: "venue",
      question: "When does ARENACORE '26 conclude on Day 2?",
      answer: "The hackathon officially concludes around **04:30 PM on Day 2 (29 October 2026)**, following the Grand Jury Stage Presentations, Valedictory Ceremony, and Prize Distribution.",
      keywords: ["when does it end", "finish time", "closing time", "departure time"],
      synonyms: ["eppa mudiyum", "end time", "valedictory time"],
      related: ["venue-schedule-day2", "prizes-first"]
    },
    {
      id: "venue-today",
      category: "venue",
      question: "What is happening today at ARENACORE '26?",
      answer: "You can check our real-time schedule and countdown. The 24-hour hackathon runs on **28 & 29 October 2026**. If today is during event days, reporting is at the IT Auditorium and coding is live in IT labs!",
      keywords: ["what happens today", "today schedule", "is it today", "current events"],
      synonyms: ["iniku enna nadakuthu", "happening now"],
      related: ["venue-schedule-day1", "venue-schedule-day2"]
    },

    // =========================================================================
    // 6. RULES & IP (14 entries)
    // =========================================================================
    {
      id: "rules-code-freeze",
      category: "rules",
      question: "When is the code freeze and final project submission?",
      answer: "The code freeze occurs strictly at **11:00 AM on Day 2 (29 October 2026)**. At that moment, GitHub repositories must be locked, and your 3-minute demo video and presentation slides must be submitted to the portal.",
      keywords: ["code freeze", "submission deadline", "final submission", "stop coding", "lock repos"],
      synonyms: ["eppa submit pannanum", "freeze time", "last commit"],
      related: ["venue-schedule-day2", "rules-submission-requirements"]
    },
    {
      id: "rules-pre-existing-code",
      category: "rules",
      question: "Can we use pre-existing code or bring a pre-built project?",
      answer: "Projects can be conceptualized beforehand and partial blueprints or architecture diagrams may be brought. However, **significant development, feature implementation, and final prototype refinement must happen during the 24 hours**. Bringing ready-made complete projects is strictly forbidden.",
      keywords: ["pre-existing code", "ready made project", "past code", "existing project", "old code"],
      synonyms: ["munnadiye pannathu", "already made project", "can we use old project"],
      related: ["rules-libraries-apis", "rules-disqualification"]
    },
    {
      id: "rules-libraries-apis",
      category: "rules",
      question: "Can we use open-source libraries, frameworks, and third-party APIs?",
      answer: "Yes! Teams are fully allowed and encouraged to use open-source packages, npm modules, Python packages, and cloud APIs (Google Cloud APIs, TensorFlow, Firebase, Gemini API, etc.) with proper citations in your README.",
      keywords: ["open source", "libraries", "apis", "frameworks", "npm packages", "third party"],
      synonyms: ["can i use apis", "external libraries"],
      related: ["theme-tech-stack", "theme-genai-apis"]
    },
    {
      id: "rules-ip-ownership",
      category: "rules",
      question: "Who owns the Intellectual Property (IP) of the created projects?",
      answer: "**Participants retain 100% intellectual property ownership of their projects and source code.** Organizers are only granted non-exclusive rights to showcase prototypes for promotional, educational, and reporting purposes.",
      keywords: ["ip ownership", "intellectual property", "who owns code", "copyright", "patent"],
      synonyms: ["code yaroda ownership", "project rights"],
      related: ["rules-github-public"]
    },
    {
      id: "rules-submission-requirements",
      category: "rules",
      question: "What are the mandatory submission artifacts at code freeze?",
      answer: "Each team must submit:\n1. 🔗 **Public GitHub Repository URL** (with setup instructions in README)\n2. 🎬 **3-minute Demo Video or Presentation Slide Deck**\n3. 💻 **Live Functional Demonstration** ready for jury inspection.",
      keywords: ["submission artifacts", "what to submit", "deliverables", "github url", "demo video"],
      synonyms: ["submission requirements", "enna submit pannanum"],
      related: ["rules-code-freeze", "rules-localhost-warning"]
    },
    {
      id: "rules-localhost-warning",
      category: "rules",
      question: "Can we present our final demo on localhost or must it be deployed?",
      answer: "While localhost demos are accepted, live cloud deployments (e.g. Google Cloud, Vercel, Firebase) earn higher technical execution points. Always maintain an offline contingency setup and test video in case of network issues.",
      keywords: ["localhost", "deployment", "vercel", "cloud deployment", "live demo"],
      synonyms: ["can we demo on localhost", "hosting compulsory ah"],
      related: ["rules-submission-requirements", "prizes-judging-criteria"]
    },
    {
      id: "rules-pitch-duration",
      category: "rules",
      question: "How much time do top teams get for the final stage presentation?",
      answer: "Finalist teams get **5 minutes for their live demonstration and pitch**, followed by **3 minutes of Q&A defense** with the industrial judging panel.",
      keywords: ["pitch duration", "presentation time", "how many minutes", "stage demo", "q&a time"],
      synonyms: ["demo timing", "presentation duration"],
      related: ["prizes-judging-criteria", "venue-schedule-day2"]
    },
    {
      id: "rules-code-of-conduct",
      category: "rules",
      question: "What is the code of conduct and campus etiquette?",
      answer: "GDG On Campus PSNACET enforces a zero-tolerance policy against harassment, discrimination, and disrespect. Possession of prohibited substances or misconduct leads to immediate disqualification and reporting to your respective college.",
      keywords: ["code of conduct", "etiquette", "campus rules", "harassment policy", "behavior"],
      synonyms: ["rules of conduct", "discipline"],
      related: ["rules-disqualification", "venue-dress-code"]
    },
    {
      id: "rules-mentorship",
      category: "rules",
      question: "How do mentorship checkpoints work during the 24 hours?",
      answer: "Two structured mentorship rounds are scheduled:\n- **Round 1 (03:30 PM Day 1)**: Mentors validate your system architecture, UN SDG alignment, and technical feasibility.\n- **Round 2 (11:30 PM Day 1)**: Midnight checkpoint focusing on debugging, API integration, and edge-case testing.",
      keywords: ["mentorship rounds", "mentors", "code review", "checkpoint", "debugging help"],
      synonyms: ["mentor help", "mentorship schedule"],
      related: ["venue-schedule-day1", "prizes-jury-members"]
    },
    {
      id: "rules-starter-kits",
      category: "rules",
      question: "Are starter kits, boilerplates, or pitch deck templates available?",
      answer: "Yes! ARENACORE '26 provides official starter boilerplates:\n- 📊 **Pitch Deck**: 10-slide Google Slides template tailored to the judging rubric.\n- 🌐 **Fullstack Web & AI**: Next.js 14, Tailwind, and Google Gemini API boilerplate.\n- 📱 **Flutter Starter**: Firebase Auth, Firestore, and camera vision pipeline.\n- ⚡ **IoT Firmware**: ESP32 C++/MicroPython with MQTT telemetry.",
      keywords: ["starter kits", "boilerplates", "templates", "pitch deck template", "github boilerplates"],
      synonyms: ["template", "boilerplate code"],
      related: ["theme-tech-stack", "prizes-pitch-deck"],
      actions: [
        { label: "View Rulebook & Starters", type: "scrollOrUrl", target: "#guidelines" }
      ]
    },
    {
      id: "rules-github-public",
      category: "rules",
      question: "Does our GitHub repository need to be public or private?",
      answer: "Your GitHub repository must be **public** by code freeze (11:00 AM on Day 2) with an open-source license and a clear README with step-by-step local setup instructions for judges.",
      keywords: ["github public", "repository public or private", "readme", "git repo"],
      synonyms: ["public repo thevaya", "open repo"],
      related: ["rules-submission-requirements", "rules-code-freeze"]
    },
    {
      id: "rules-leave-campus",
      category: "rules",
      question: "Can participants leave the campus during the 24-hour hackathon?",
      answer: "For participant safety and security, leaving the campus during the 24-hour sprint is restricted. In genuine emergencies, the Team Leader must seek permission from student coordinators and faculty heads.",
      keywords: ["leave campus", "go outside", "can we leave", "night exit", "outside food"],
      synonyms: ["veliya polama", "campus vittu veliya polama"],
      related: ["rules-code-of-conduct", "contact-leads"]
    },
    {
      id: "rules-hardware-safety",
      category: "rules",
      question: "Are there specific safety rules for hardware, drone, or robotics projects?",
      answer: "Yes. High-voltage connections (above 24V) and open flames are strictly forbidden. Drone testing must be restricted to designated outdoor test yards under mentor supervision.",
      keywords: ["hardware safety", "drone testing", "safety rules", "voltage", "robotics safety"],
      synonyms: ["safety precautions", "hardware guidelines"],
      related: ["theme-autonomous", "venue-what-to-bring"]
    },
    {
      id: "rules-disqualification",
      category: "rules",
      question: "What actions cause immediate team disqualification?",
      answer: "Disqualification occurs for:\n- Submitting pre-built / plagiarized complete projects.\n- Dual registration in more than one team.\n- Violation of campus code of conduct or harassment.\n- Failure to produce valid original college IDs.",
      keywords: ["disqualification", "disqualified", "plagiarism", "violations", "penalties"],
      synonyms: ["disqualify aavoma", "reasons for rejection"],
      related: ["rules-pre-existing-code", "team-dual-reg"]
    },

    // =========================================================================
    // 7. JUDGING & PRIZES (14 entries)
    // =========================================================================
    {
      id: "prizes-total-pool",
      category: "prizes",
      question: "What is the total prize pool / prize money for ARENACORE '26?",
      answer: "The total prize pool is **₹1,20,000 cash**, split equally as **₹40,000 for each of the 3 themes**, plus trophies, merit certificates, official Google & ACM tech kits, startup incubation opportunities, and Google Cloud credits!",
      keywords: ["prize pool", "total prize", "120000", "cash prizes", "awards", "prize money", "cash pool"],
      synonyms: ["prize money", "cash prize", "evlo prize", "total cash", "what is prize money", "how much prize money"],
      related: ["prizes-first", "prizes-second", "prizes-certificates"],
      actions: [
        { label: "View Prize Details", type: "scrollOrUrl", target: "#schedule" }
      ]
    },
    {
      id: "prizes-first",
      category: "prizes",
      question: "What are the 1st Prize / Grand Champion awards and perks?",
      answer: "🏆 **Grand Champion (1st Prize)**:\n- 💰 **₹25,000 Cash Prize**\n- 🏆 Prestigious 1st Prize Trophy & Merit Certificates\n- 🎒 Exclusive GDG & ACM Premium Tech Kits & Swags\n- 🚀 Startup Incubation & Google Cloud Credits\n- 🤝 Direct Mentorship with Deep Tech Architects",
      keywords: ["first prize", "1st prize", "grand champion", "25000", "winner", "top prize"],
      synonyms: ["first place", "winner prize"],
      related: ["prizes-second", "prizes-total-pool"]
    },
    {
      id: "prizes-second",
      category: "prizes",
      question: "What are the 2nd Prize / Runner-Up awards and perks?",
      answer: "🥈 **Runner Up (2nd Prize)**:\n- 💰 **₹15,000 Cash Prize**\n- 🏆 2nd Prize Trophy & Merit Certificates\n- 🎒 Official Google & ACM Swag Packs\n- 🚀 Incubation Support & Industry Referrals",
      keywords: ["second prize", "2nd prize", "runner up", "15000"],
      synonyms: ["second place", "runner prize"],
      related: ["prizes-first", "prizes-total-pool"]
    },
    {
      id: "prizes-certificates",
      category: "prizes",
      question: "Will all participants receive certificates?",
      answer: "Yes! Every participant who submits a qualifying project and presents to the jury will receive an official **GDG On Campus Certificate of Participation**.",
      keywords: ["certificate", "participation certificate", "cert", "merit certificate", "all participants"],
      synonyms: ["certificate tharuvangala", "cert kedaikuma", "is there certificate"],
      related: ["prizes-total-pool", "rules-submission-requirements"]
    },
    {
      id: "prizes-judging-criteria",
      category: "prizes",
      question: "What is the official judging rubric / evaluation criteria?",
      answer: "Prototypes are evaluated out of **100 Points Total** across 4 balanced criteria:\n1. 💡 **Innovation & Novelty (30%)**: Uniqueness and distinct value proposition.\n2. ⚙️ **Technical Execution (25%)**: Code quality, architectural complexity, API integration, and reliability.\n3. 🌍 **Real-World Impact & Viability (25%)**: UN SDG alignment, scalability, and user pain points.\n4. 🎤 **Live Pitch & Defense (20%)**: Live demo execution and Q&A defense.",
      keywords: ["judging criteria", "rubric", "evaluation criteria", "how are we judged", "100 points", "marks"],
      synonyms: ["mark system", "how will judges score", "podium formula"],
      related: ["prizes-pitch-deck", "rules-pitch-duration"],
      actions: [
        { label: "View Evaluation Rubric", type: "scrollOrUrl", target: "#guidelines" }
      ]
    },
    {
      id: "prizes-swags",
      category: "prizes",
      question: "What developer swags and kits are given to participants?",
      answer: "All finalists receive authorized GDG On Campus attendee kits, custom lanyard passes, Google Developer stickers, and sponsor goodies. Champions and Runners-up receive premium GDG & ACM tech bags and merchandise.",
      keywords: ["swags", "goodies", "stickers", "t-shirts", "kits", "developer swags"],
      synonyms: ["swag pack", "merchandise"],
      related: ["prizes-first", "fee-inclusion"]
    },
    {
      id: "prizes-cloud-credits",
      category: "prizes",
      question: "Are Google Cloud credits provided to winning teams?",
      answer: "Yes! Winning teams and top finalists receive cloud infrastructure credits to help deploy and scale their solutions beyond the hackathon weekend.",
      keywords: ["cloud credits", "gcp credits", "google cloud credits", "server credits"],
      synonyms: ["free cloud", "hosting credits"],
      related: ["prizes-first", "prizes-second"]
    },
    {
      id: "prizes-incubation",
      category: "prizes",
      question: "What startup incubation support is offered to top teams?",
      answer: "Through PSNA Tech Incubators and industry tie-ups, top teams gain direct access to pre-seed mentorship, patent filing guidance, and angel investor referrals to turn prototypes into commercial ventures.",
      keywords: ["incubation", "startup support", "pre-seed", "investors", "mentorship"],
      synonyms: ["incubation center", "startup help"],
      related: ["prizes-first", "prizes-second"]
    },
    {
      id: "prizes-past-winners",
      category: "prizes",
      question: "Who won past editions of PSNACET GDG hackathons?",
      answer: "In the PSNACET GDG DeepTech Hackathon 2024:\n- 🥇 **1st**: Team NeuralNexus (Govt. Engg. College Salem) – *AI Glaucoma Screening Mobile Tele-App*\n- 🥈 **2nd**: Team GreenGrid (Thiagarajar College of Engg) – *Decentralized Microgrid Solar Balancing*\n- 🥉 **3rd**: Team AgriSensors (PSNACET IT) – *LoRaWAN Soil Health & Drip Irrigation*",
      keywords: ["past winners", "previous winners", "hall of fame", "records", "2024 winners"],
      synonyms: ["munnadi yar jeichathu", "past records"],
      related: ["prizes-first"],
      actions: [
        { label: "View Hall of Fame", type: "scrollOrUrl", target: "#records" }
      ]
    },
    {
      id: "prizes-jury-members",
      category: "prizes",
      question: "Who are the judges for the evaluation rounds?",
      answer: "The evaluation committee features **Google Developer Experts (GDEs), senior alumni deep-tech architects, venture mentors**, and PSNACET IT doctoral faculty members.",
      keywords: ["judges", "jury", "evaluators", "who will judge", "evaluation committee"],
      synonyms: ["judge yar", "jury panel"],
      related: ["prizes-judging-criteria", "rules-mentorship"]
    },
    {
      id: "prizes-podium-predictor",
      category: "prizes",
      question: "What is the Interactive Podium Predictor on the website?",
      answer: "The **Podium Predictor** is an interactive widget located in the Guidelines section. You can move the 4 rubric sliders to simulate how jury scoring affects your total points out of 100!",
      keywords: ["podium predictor", "rubric slider", "score calculator", "points calculator"],
      synonyms: ["score estimator", "points tool"],
      related: ["prizes-judging-criteria"],
      actions: [
        { label: "Try Podium Predictor", type: "scrollOrUrl", target: "#guidelines" }
      ]
    },
    {
      id: "prizes-pitch-deck",
      category: "prizes",
      question: "Where can I find the official 10-slide presentation deck template?",
      answer: "The official **Google Slides pitch deck template** is tailored directly to the 100-point rubric (Concept, Architecture, Demo, and SDG Impact). You can open and make a copy from Google Drive: https://docs.google.com/presentation/d/1tFxQwV1VzSZpjmTccVna4HIIlyynsCKG_W8YG2pfM5k/edit?usp=sharing",
      keywords: ["pitch deck", "slides template", "google slides", "10 slides", "presentation template", "ppt template"],
      synonyms: ["ppt template", "slide deck", "presentation link"],
      related: ["prizes-judging-criteria", "register-process"],
      actions: [
        { label: "Open Official PPT Template", type: "openUrl", target: "https://docs.google.com/presentation/d/1tFxQwV1VzSZpjmTccVna4HIIlyynsCKG_W8YG2pfM5k/edit?usp=sharing" }
      ]
    },
    {
      id: "prizes-cash-distribution",
      category: "prizes",
      question: "How will the cash prize be handed over to the winners?",
      answer: "Cash awards (₹25,000 for 1st, ₹15,000 for 2nd) are presented during the Valedictory Ceremony on 29 October, followed by direct electronic fund transfer to the winning team's designated bank account.",
      keywords: ["cash transfer", "prize distribution", "bank transfer", "prize cheque"],
      synonyms: ["prize cash epdi tharuvanga", "how is money sent"],
      related: ["prizes-first", "prizes-second"]
    },
    {
      id: "prizes-tanglish-evlo",
      category: "prizes",
      question: "Prize amount evlo? / How much is the prize money?",
      answer: "Total prize pool **₹1,20,000**! 1st Prize win pannum team-ku **₹25,000 cash + trophy + tech kits**, 2nd Prize-ku **₹15,000 cash + trophy**. Present panna ella finalists-kum GDG certificates undu!",
      keywords: ["prize amount evlo", "prize evlo", "tamil prize", "tanglish prize"],
      synonyms: ["first prize evlo"],
      related: ["prizes-total-pool", "prizes-first"]
    },

    // =========================================================================
    // 8. CONTACT & SUPPORT (12 entries)
    // =========================================================================
    {
      id: "contact-leads",
      category: "contact",
      question: "Who are the student coordinators / student leads to contact?",
      answer: "The official student coordinators for ARENACORE '26 are:\n- **Chitharthaa A** — GDG Campus Organiser — `+91 86820 67304`\n- **Darshan S** — ACM Chair — `+91 93455 30457`",
      keywords: ["who are the student coordinators", "student leads contact", "student coordinators", "student leads", "who to contact", "contact leads", "coordinators", "phone numbers", "organizers"],
      synonyms: ["yarai contact panrathu", "phone number", "student leads", "leads contact", "coordinators contact"],
      related: ["contact-email", "contact-chitharthaa", "contact-darshan"],
      actions: [
        { label: "Call Chitharthaa", type: "tel", target: "tel:+918682067304" },
        { label: "Call Darshan", type: "tel", target: "tel:+919345530457" }
      ]
    },
    {
      id: "contact-chitharthaa",
      category: "contact",
      question: "How do I reach Chitharthaa A (GDG Campus Organiser)?",
      answer: "**Chitharthaa A** is the GDG On Campus PSNACET Student Organiser. You can call or WhatsApp him at **+91 86820 67304** for submission, technical, or venue inquiries.",
      keywords: ["chitharthaa", "gdg organiser", "lead phone", "chitharthaa contact"],
      synonyms: ["chithartha phone number", "gdg lead"],
      related: ["contact-leads", "contact-darshan"],
      actions: [
        { label: "Call Chitharthaa", type: "tel", target: "tel:+918682067304" },
        { label: "WhatsApp Chitharthaa", type: "url", url: "https://wa.me/918682067304" }
      ]
    },
    {
      id: "contact-darshan",
      category: "contact",
      question: "How do I reach Darshan S (ACM Chair)?",
      answer: "**Darshan S** is the ACM PSNACET Student Chapter Chair. You can call him at **+91 93455 30457** for event rules, logistics, and registration inquiries.",
      keywords: ["darshan", "acm chair", "acm contact", "darshan phone"],
      synonyms: ["darshan phone number", "acm lead"],
      related: ["contact-leads", "contact-chitharthaa"],
      actions: [
        { label: "Call Darshan", type: "tel", target: "tel:+919345530457" },
        { label: "WhatsApp Darshan", type: "url", url: "https://wa.me/919345530457" }
      ]
    },
    {
      id: "contact-email",
      category: "contact",
      question: "What is the official email address for hackathon queries?",
      answer: "The official email addresses for ARENACORE '26 hackathon queries are:\n- **GDG**: `gdgpsna@psnacet.edu.in`\n- **ACM**: `acmstudentchapter@psnacet.edu.in`\n\nCollege general office contact details (phone: 0451-2554411 / 2554032, website: www.psnacet.edu.in) remain unchanged.",
      keywords: ["official email", "official email address", "mail id", "email id", "contact mail", "where to send mail", "hackathon mail", "gdg mail", "acm mail", "mail id for queries", "gdgpsna@psnacet.edu.in", "acmstudentchapter@psnacet.edu.in", "support email"],
      synonyms: ["mail address venum", "mail id", "organizer email", "contact email", "email address", "where to send mail", "gdg mail", "acm mail"],
      related: ["contact-leads", "contact-college-phone"],
      actions: [
        { label: "Email GDG", type: "email", target: "mailto:gdgpsna@psnacet.edu.in" },
        { label: "Email ACM", type: "email", target: "mailto:acmstudentchapter@psnacet.edu.in" },
        { label: "Copy email for GDG", type: "copy", target: "gdgpsna@psnacet.edu.in" },
        { label: "Copy email for ACM", type: "copy", target: "acmstudentchapter@psnacet.edu.in" }
      ]
    },
    {
      id: "contact-college-phone",
      category: "contact",
      question: "What is the PSNA College general office phone number?",
      answer: "PSNA College of Engineering and Technology office lines are **0451-2554411** and **0451-2554032** (Reception / Department of IT).",
      keywords: ["college phone", "office phone", "landline", "reception", "psna phone number"],
      synonyms: ["college contact number", "office number"],
      related: ["contact-email", "venue-location"]
    },
    {
      id: "contact-faculty",
      category: "contact",
      question: "Who are the Department HOD and Faculty Coordinators?",
      answer: "The event is led by:\n- **HOD**: Dr. A. Vincent Antony Kumar (Professor & Head, Department of IT)\n- **Faculty Coordinators**: Dr. B. Karthika (AP/IT), Dr. R. Divya (ASP/IT), Dr. B. Vijaya Nirmala (AP/IT), and Dr. S. T. Bharathi (AP/IT).",
      keywords: ["faculty", "hod", "vincent antony kumar", "professors", "faculty coordinators"],
      synonyms: ["staff in charge", "faculty advisors", "department head"],
      related: ["contact-email", "contact-leads"]
    },
    {
      id: "contact-location-maps",
      category: "contact",
      question: "Where can I view PSNACET on Google Maps?",
      answer: "You can open PSNA College of Engineering and Technology directly on Google Maps for step-by-step navigation from your location.",
      keywords: ["maps", "google maps", "directions", "navigation", "gps location"],
      synonyms: ["map link", "find on map"],
      related: ["venue-location", "venue-how-to-reach"],
      actions: [
        { label: "Open in Google Maps", type: "url", url: ARENACORE_CONFIG.mapsUrl }
      ]
    },
    {
      id: "contact-whatsapp",
      category: "contact",
      question: "Can I connect with the organizers on WhatsApp?",
      answer: "Yes, you can directly message our student lead Chitharthaa on WhatsApp for quick guidance.",
      keywords: ["whatsapp", "chat on whatsapp", "organizer whatsapp"],
      synonyms: ["whatsapp number", "wa me"],
      related: ["contact-chitharthaa", "contact-leads"],
      actions: [
        { label: "Chat on WhatsApp", type: "url", url: "https://wa.me/918682067304" }
      ]
    },
    {
      id: "contact-sponsorship",
      category: "contact",
      question: "How can tech companies, sponsors, or mentors get in touch?",
      answer: "Sponsors, industry partners, and prospective mentors can connect directly with HOD Dr. A. Vincent Antony Kumar or write to `gdgpsna@psnacet.edu.in` with your proposal.",
      keywords: ["sponsorship", "partner", "sponsor hackathon", "mentor inquiry", "company contact"],
      synonyms: ["become sponsor", "brand tie-up"],
      related: ["contact-email", "contact-faculty"],
      actions: [
        { label: "Email for Partnership", type: "email", target: "mailto:gdgpsna@psnacet.edu.in" }
      ]
    },
    {
      id: "contact-reply-time",
      category: "contact",
      question: "How quickly do the organizers respond to emails?",
      answer: "Our team actively monitors `gdgpsna@psnacet.edu.in` during working hours and responds promptly. For urgent matters, feel free to call our student coordinators directly.",
      keywords: ["response time", "how fast reply", "reply time", "support hours"],
      synonyms: ["eppa reply varum", "turnaround time"],
      related: ["contact-email", "contact-leads"]
    },
    {
      id: "contact-website",
      category: "contact",
      question: "What is the official PSNACET college website?",
      answer: "The official college web portal is **www.psnacet.edu.in**, accredited with NAAC 'A' Grade and pioneering engineering excellence since 1984.",
      keywords: ["college website", "psnacet portal", "psna url", "psnacet.edu.in"],
      synonyms: ["official portal", "college site"],
      related: ["venue-location", "contact-college-phone"],
      actions: [
        { label: "Visit College Website", type: "url", url: ARENACORE_CONFIG.collegeWebsite }
      ]
    }
  ];

  // Extension point for Google Form text if pasted or updated in the future
  const FORM_ENTRIES = [
    // This array is intentionally extensible for field-by-field answers if form schema changes.
    // Entries added here will be automatically indexed into the bot at initialization.
  ];

  const SMALL_TALK = {
    greetings: {
      triggers: ["hi", "hello", "hey", "vanakkam", "good morning", "good evening", "good afternoon", "sup", "yo", "hola"],
      response: "Hey hacker! 👋 Great to see you. I'm ARENA-Bot, ready to help you with anything about ARENACORE '26—registration, fees, themes, rules, schedule, prizes, and venue. What would you like to know?"
    },
    thanks: {
      triggers: ["thanks", "thank you", "thx", "ty", "nandri", "appreciate it", "thank you so much"],
      response: "You're very welcome! 🙌 Feel free to ask anything else about ARENACORE '26. Best of luck with your hackathon preparation!"
    },
    bye: {
      triggers: ["bye", "goodbye", "see you", "cya", "tata", "catch you later"],
      response: "Goodbye! 🚀 Happy coding, innovate boldly, and see you at ARENACORE '26 on 28 & 29 October!"
    },
    identity: {
      triggers: ["who are you", "what is your name", "are you ai", "are you human", "what do you do", "who made you"],
      response: "I'm **ARENA-Bot**, the automated FAQ assistant for **ARENACORE '26** created by GDG On Campus PSNACET & ACM PSNACET. I'm an offline-ready helper trained on the official hackathon guidelines to answer all your queries!"
    },
    rude: {
      triggers: ["stupid", "idiot", "dumb", "hate you", "bad bot", "shut up"],
      response: "I'm here to assist with official ARENACORE '26 hackathon information in a polite and helpful way. Let me know if you have questions regarding registration, themes, or rules!"
    },
    offtopic: {
      response: "I'm specifically trained to assist with **ARENACORE '26** (registration, fees, team rules, themes, schedule, prizes, and campus details). Could you ask something related to the hackathon?"
    }
  };

  // Expose to window for widget consumption
  window.ARENACORE_FAQ = {
    config: ARENACORE_CONFIG,
    categories: CATEGORIES,
    entries: ENTRIES,
    formEntries: FORM_ENTRIES,
    smallTalk: SMALL_TALK
  };

})();

/**
 * ARENACORE '26 - Standalone FAQ Chatbot Widget (ARENA-Bot)
 * Department of Information Technology, PSNACET x GDG On Campus PSNACET x ACM PSNACET
 * 
 * Production-ready Vanilla JS (ES2018), zero dependencies, zero build steps.
 * Entirely self-contained within an open Shadow DOM.
 */

(function () {
  "use strict";

  // Guard against double initialization
  if (window.__AC26_FAQBOT_INITIALIZED__ || document.getElementById("ac26faq-root")) {
    return;
  }
  window.__AC26_FAQBOT_INITIALIZED__ = true;

  // =============================================================================
  // 1. INLINED ASSETS & ICONS (Zero external request dependency)
  // =============================================================================
  const GDG_LOGO_SVG = `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#f1f3f4" stroke-width="1"/>
  <line x1="43" y1="32" x2="22" y2="50" stroke="#EA4335" stroke-width="12" stroke-linecap="round"/>
  <line x1="22" y1="50" x2="43" y2="68" stroke="#4285F4" stroke-width="12" stroke-linecap="round"/>
  <line x1="57" y1="32" x2="78" y2="50" stroke="#34A853" stroke-width="12" stroke-linecap="round"/>
  <line x1="78" y1="50" x2="57" y2="68" stroke="#FBBC05" stroke-width="12" stroke-linecap="round"/>
</svg>`;

  const ARENA_ROBOT_ICON_SVG = `<svg viewBox="0 0 100 120" class="ac26faq-bubble-icon ac26faq-icon-chat ac26faq-mascot-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Premium Mascot Shading & Filters -->
      <linearGradient id="ac26MascotHead" x1="28" y1="12" x2="72" y2="52" gradientUnits="userSpaceOnUse">
        <stop stop-color="#ffffff"/>
        <stop offset="0.65" stop-color="#f1f5f9"/>
        <stop offset="1" stop-color="#cbd5e1"/>
      </linearGradient>
      <linearGradient id="ac26MascotVisor" x1="30" y1="18" x2="70" y2="42" gradientUnits="userSpaceOnUse">
        <stop stop-color="#070c18"/>
        <stop offset="0.5" stop-color="#0f172a"/>
        <stop offset="1" stop-color="#1e293b"/>
      </linearGradient>
      <linearGradient id="ac26MascotBody" x1="30" y1="46" x2="70" y2="90" gradientUnits="userSpaceOnUse">
        <stop stop-color="#ffffff"/>
        <stop offset="0.6" stop-color="#e2e8f0"/>
        <stop offset="1" stop-color="#94a3b8"/>
      </linearGradient>
      <linearGradient id="ac26MascotDarkArmor" x1="30" y1="46" x2="70" y2="90" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1e293b"/>
        <stop offset="1" stop-color="#0a0f1d"/>
      </linearGradient>
      <linearGradient id="ac26MascotCyanGlow" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#38bdf8"/>
        <stop offset="1" stop-color="#06b6d4"/>
      </linearGradient>
      <radialGradient id="ac26MascotPedestal" cx="50" cy="112" r="38" fx="50" fy="112" gradientUnits="userSpaceOnUse">
        <stop stop-color="#38bdf8" stop-opacity="0.8"/>
        <stop offset="0.4" stop-color="#4285f4" stop-opacity="0.5"/>
        <stop offset="0.85" stop-color="#2563eb" stop-opacity="0.15"/>
        <stop offset="1" stop-color="#2563eb" stop-opacity="0"/>
      </radialGradient>
      <filter id="ac26MascotGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
      <filter id="ac26MascotHeavyGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>

    <!-- 1. Holographic Cyber Pedestal (Futuristic Standing Platform) -->
    <g class="ac26-mascot-pedestal">
      <ellipse cx="50" cy="112" rx="36" ry="7" fill="url(#ac26MascotPedestal)"/>
      <ellipse cx="50" cy="112" rx="26" ry="5" fill="none" stroke="#38bdf8" stroke-width="1.4" stroke-dasharray="4 3" opacity="0.85" class="ac26-pedestal-ring"/>
      <ellipse cx="50" cy="112" rx="14" ry="3" fill="none" stroke="#60a5fa" stroke-width="1.2" opacity="0.9"/>
    </g>

    <!-- Entire Floating / Breathing Robot Mascot Body -->
    <g class="ac26-mascot-float-group">

      <!-- 2. Standing Cyber Legs & Boots -->
      <g class="ac26-mascot-leg-left">
        <rect x="36" y="84" width="9" height="18" rx="4.5" fill="url(#ac26MascotDarkArmor)" stroke="#475569" stroke-width="1"/>
        <circle cx="40.5" cy="93" r="2" fill="#38bdf8" filter="url(#ac26MascotGlow)"/>
        <path d="M33 102 C33 100 36 99 41 99 H43 C46 99 47 101 47 104 L47 107 C47 109 45 110 43 110 H35 C33.5 110 33 108 33 106 Z" fill="url(#ac26MascotBody)" stroke="#64748b" stroke-width="1.2"/>
        <line x1="34" y1="108" x2="46" y2="108" stroke="#38bdf8" stroke-width="1.4" opacity="0.85"/>
      </g>

      <g class="ac26-mascot-leg-right">
        <rect x="55" y="84" width="9" height="18" rx="4.5" fill="url(#ac26MascotDarkArmor)" stroke="#475569" stroke-width="1"/>
        <circle cx="59.5" cy="93" r="2" fill="#38bdf8" filter="url(#ac26MascotGlow)"/>
        <path d="M53 102 C53 100 55 99 59 99 H61 C64 99 67 101 67 104 L67 107 C67 109 65 110 63 110 H55 C53.5 110 53 108 53 106 Z" fill="url(#ac26MascotBody)" stroke="#64748b" stroke-width="1.2"/>
        <line x1="54" y1="108" x2="66" y2="108" stroke="#38bdf8" stroke-width="1.4" opacity="0.85"/>
      </g>

      <!-- 3. Cybernetic Torso & Arc Core -->
      <g class="ac26-mascot-torso">
        <path d="M31 52 C31 49 34 47 38 47 H62 C66 47 69 49 69 52 L67 82 C67 86 63 88 59 88 H41 C37 88 33 86 33 82 Z" fill="url(#ac26MascotBody)" stroke="#94a3b8" stroke-width="1.2"/>
        <path d="M37 53 C37 51 39 50 42 50 H58 C61 50 63 51 63 53 L61 80 C61 82 59 84 56 84 H44 C41 84 39 82 39 80 Z" fill="url(#ac26MascotDarkArmor)"/>

        <!-- GDG Color Circuit Tracks -->
        <path d="M42 54 L44 60" stroke="#4285F4" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M58 54 L56 60" stroke="#EA4335" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M43 78 L45 72" stroke="#34A853" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M57 78 L55 72" stroke="#FBBC05" stroke-width="1.5" stroke-linecap="round"/>

        <!-- Arc Reactor Chest Core -->
        <circle cx="50" cy="66" r="9" fill="rgba(56, 189, 248, 0.18)" filter="url(#ac26MascotHeavyGlow)"/>
        <path d="M45 66 L50 60 L55 66 L50 72 Z" fill="#4285F4" stroke="#38bdf8" stroke-width="1.2"/>
        <circle cx="50" cy="66" r="3.2" fill="#38bdf8" filter="url(#ac26MascotGlow)"/>
        <circle cx="50" cy="66" r="1.5" fill="#ffffff"/>

        <!-- Cyber Belt -->
        <rect x="39" y="82" width="22" height="4" rx="2" fill="#0f172a" stroke="#38bdf8" stroke-width="0.8"/>
      </g>

      <!-- 4. Left Arm (Resting on Hip with Cyber Pad) -->
      <g class="ac26-mascot-arm-left">
        <circle cx="30" cy="54" r="5" fill="url(#ac26MascotBody)" stroke="#94a3b8" stroke-width="1"/>
        <circle cx="30" cy="54" r="2" fill="#4285F4"/>
        <path d="M29 57 L24 70 C23 73 24 76 27 78 L31 79" fill="none" stroke="url(#ac26MascotDarkArmor)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="32" cy="80" r="3" fill="#cbd5e1"/>
        <rect x="22" y="75" width="10" height="7" rx="1.5" transform="rotate(-15 22 75)" fill="#0f172a" stroke="#38bdf8" stroke-width="0.9"/>
        <polygon points="23,73 28,66 33,71" fill="rgba(56, 189, 248, 0.35)" filter="url(#ac26MascotGlow)"/>
      </g>

      <!-- 5. Head Helmet & Cyber Visor -->
      <g class="ac26-mascot-head-group">
        <rect x="46" y="44" width="8" height="5" rx="2" fill="#334155"/>

        <!-- Left Ear Antenna (Google Blue with Red Tip) -->
        <rect x="21" y="22" width="4.5" height="12" rx="2.2" fill="#4285F4"/>
        <circle cx="23.2" cy="18.5" r="3.5" fill="#EA4335" filter="url(#ac26MascotGlow)"/>
        <line x1="23.2" y1="18.5" x2="23.2" y2="15" stroke="#EA4335" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>

        <!-- Right Ear Antenna (Google Green with Yellow Tip) -->
        <rect x="74.5" y="22" width="4.5" height="12" rx="2.2" fill="#34A853"/>
        <circle cx="76.8" cy="18.5" r="3.5" fill="#FBBC05" filter="url(#ac26MascotGlow)"/>
        <line x1="76.8" y1="18.5" x2="76.8" y2="15" stroke="#FBBC05" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>

        <!-- Center Beacon Antenna (Cyan Pulse) -->
        <path d="M50 8 V14" stroke="#4285F4" stroke-width="3" stroke-linecap="round"/>
        <circle cx="50" cy="6" r="3.8" fill="#38bdf8" filter="url(#ac26MascotGlow)" class="ac26-mascot-beacon"/>
        <circle cx="50" cy="6" r="1.8" fill="#ffffff"/>

        <!-- Head Frame -->
        <path d="M26 23 C26 15 32 10 44 10 H56 C68 10 74 15 74 23 V37 C74 45 67 48 56 48 H44 C33 48 26 45 26 37 Z" fill="url(#ac26MascotHead)" stroke="#cbd5e1" stroke-width="1.3"/>

        <!-- Cyber Visor Window -->
        <rect x="30" y="19" width="40" height="23" rx="10" fill="url(#ac26MascotVisor)" stroke="rgba(56, 189, 248, 0.6)" stroke-width="1.4"/>
        <path d="M34 23 C42 21 54 21 66 23" stroke="rgba(255, 255, 255, 0.45)" stroke-width="1.4" stroke-linecap="round"/>

        <!-- Digital Glowing Eyes (Blinking animation) -->
        <g class="ac26-mascot-eye ac26-mascot-eye-left">
          <ellipse cx="40" cy="30" rx="4.8" ry="5.6" fill="url(#ac26MascotCyanGlow)" filter="url(#ac26MascotGlow)"/>
          <circle cx="41.5" cy="28.2" r="1.8" fill="#ffffff"/>
          <circle cx="40" cy="30" r="6.2" fill="none" stroke="rgba(56, 189, 248, 0.3)" stroke-width="0.8"/>
        </g>
        <g class="ac26-mascot-eye ac26-mascot-eye-right">
          <ellipse cx="60" cy="30" rx="4.8" ry="5.6" fill="url(#ac26MascotCyanGlow)" filter="url(#ac26MascotGlow)"/>
          <circle cx="61.5" cy="28.2" r="1.8" fill="#ffffff"/>
          <circle cx="60" cy="30" r="6.2" fill="none" stroke="rgba(56, 189, 248, 0.3)" stroke-width="0.8"/>
        </g>

        <!-- Smiling Digital Mouth Arc -->
        <path d="M46.5 36.5 C48 38.5 52 38.5 53.5 36.5" stroke="#38bdf8" stroke-width="2.4" stroke-linecap="round" filter="url(#ac26MascotGlow)"/>
      </g>

      <!-- 6. Right Arm (ANIMATED WAVING / HAND-SHAKE) -->
      <g class="ac26-mascot-arm-wave">
        <!-- Shoulder Joint (Pivot) -->
        <circle cx="70" cy="54" r="5" fill="url(#ac26MascotBody)" stroke="#94a3b8" stroke-width="1"/>
        <circle cx="70" cy="54" r="2" fill="#34A853"/>

        <!-- Upper Arm -->
        <path d="M71 52 L81 40" stroke="url(#ac26MascotDarkArmor)" stroke-width="5.5" stroke-linecap="round"/>
        
        <!-- Elbow Joint -->
        <circle cx="81" cy="40" r="3.2" fill="#475569" stroke="#38bdf8" stroke-width="0.8"/>

        <!-- Forearm -->
        <path d="M81 39 L86 24" stroke="url(#ac26MascotBody)" stroke-width="5" stroke-linecap="round"/>

        <!-- Waving Robotic Hand -->
        <g class="ac26-mascot-hand">
          <circle cx="87" cy="20" r="4.2" fill="url(#ac26MascotBody)" stroke="#64748b" stroke-width="1"/>
          <rect x="83.5" y="11" width="2.4" height="6" rx="1.2" fill="#e2e8f0" stroke="#64748b" stroke-width="0.7"/>
          <rect x="87" y="10" width="2.4" height="7" rx="1.2" fill="#f8fafc" stroke="#64748b" stroke-width="0.7"/>
          <rect x="90.5" y="12" width="2.4" height="5.5" rx="1.2" fill="#e2e8f0" stroke="#64748b" stroke-width="0.7"/>
          <path d="M84 21 C82 20 81 18 82 17 C83 16 84 18 85 19 Z" fill="#cbd5e1"/>
          <circle cx="87" cy="20" r="1.8" fill="#38bdf8" filter="url(#ac26MascotGlow)"/>
        </g>

        <!-- Waving Sparkle Wind Arcs -->
        <g class="ac26-mascot-wave-sparks">
          <path d="M93 11 C96 14 96 18 93 21" stroke="#38bdf8" stroke-width="1.6" stroke-linecap="round" opacity="0.8" fill="none"/>
          <path d="M96 8 C100 13 100 20 96 25" stroke="#60a5fa" stroke-width="1.3" stroke-linecap="round" opacity="0.6" fill="none"/>
        </g>
      </g>

    </g>
  </svg>`;

  // Dedicated avatar robot SVG matching the mascot
  const AVATAR_ROBOT_SVG = `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;opacity:1 !important;">
    <defs>
      <linearGradient id="ac26AvVisor" x1="16" y1="20" x2="48" y2="40" gradientUnits="userSpaceOnUse">
        <stop stop-color="#070c18"/>
        <stop offset="0.6" stop-color="#0f172a"/>
        <stop offset="1" stop-color="#1e293b"/>
      </linearGradient>
      <linearGradient id="ac26AvHead" x1="14" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
        <stop stop-color="#ffffff"/>
        <stop offset="0.7" stop-color="#f8fafc"/>
        <stop offset="1" stop-color="#cbd5e1"/>
      </linearGradient>
      <linearGradient id="ac26AvCyan" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#38bdf8"/>
        <stop offset="1" stop-color="#06b6d4"/>
      </linearGradient>
      <filter id="ac26AvGlow" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="1.8" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>
    <rect x="7" y="24" width="5" height="11" rx="2.5" fill="#4285F4"/>
    <circle cx="9.5" cy="21" r="3.2" fill="#EA4335" filter="url(#ac26AvGlow)"/>
    <rect x="52" y="24" width="5" height="11" rx="2.5" fill="#34A853"/>
    <circle cx="54.5" cy="21" r="3.2" fill="#FBBC05" filter="url(#ac26AvGlow)"/>
    <path d="M32 6v7" stroke="#4285F4" stroke-width="3" stroke-linecap="round"/>
    <circle cx="32" cy="5" r="3.5" fill="#38bdf8" filter="url(#ac26AvGlow)"/>
    <path d="M15 20C15 14 19 10 25 10H39C45 10 49 14 49 20V36C49 42 44.5 46 39 46H25C19.5 46 15 42 15 36V20Z" fill="url(#ac26AvHead)" stroke="#cbd5e1" stroke-width="1.3"/>
    <rect x="18" y="18" width="28" height="18" rx="8" fill="url(#ac26AvVisor)" stroke="rgba(56, 189, 248, 0.6)" stroke-width="1.3"/>
    <path d="M21 21C26 19.5 37 19.5 43 21" stroke="rgba(255, 255, 255, 0.45)" stroke-width="1.2" stroke-linecap="round"/>
    <ellipse cx="25.5" cy="27" rx="3.8" ry="4.5" fill="url(#ac26AvCyan)" filter="url(#ac26AvGlow)"/>
    <circle cx="26.8" cy="25.5" r="1.5" fill="#ffffff"/>
    <ellipse cx="38.5" cy="27" rx="3.8" ry="4.5" fill="url(#ac26AvCyan)" filter="url(#ac26AvGlow)"/>
    <circle cx="39.8" cy="25.5" r="1.5" fill="#ffffff"/>
    <path d="M29 32.5C30.5 34.2 33.5 34.2 35 32.5" stroke="#38bdf8" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M22 47L26 58H38L42 47Z" fill="#1e293b" stroke="#475569" stroke-width="1"/>
    <circle cx="32" cy="52" r="3.2" fill="#4285F4" stroke="#38bdf8" stroke-width="0.8"/>
    <circle cx="32" cy="52" r="1.5" fill="#ffffff"/>
  </svg>`;

  const ICONS = {
    chat: ARENA_ROBOT_ICON_SVG,
    close: `<svg viewBox="0 0 24 24" class="ac26faq-bubble-icon ac26faq-icon-close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
    headerClose: `<svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:currentColor;"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
    minimize: `<svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:currentColor;"><path d="M19 13H5v-2h14v2z"/></svg>`,
    trash: `<svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:currentColor;"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`,
    send: `<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" width="12" height="12"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`,
    thumbUp: `<svg viewBox="0 0 24 24" width="12" height="12"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>`,
    thumbDown: `<svg viewBox="0 0 24 24" width="12" height="12"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" width="14" height="14"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>`,
    external: `<svg viewBox="0 0 24 24" width="12" height="12"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" width="12" height="12"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-.99-1z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" width="12" height="12"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
  };

  // Embedded CSS inside Shadow DOM to guarantee zero runtime layout breakages
  const WIDGET_CSS = `
:host {
  /* Dedicated High-Contrast Cyber Dark Theme for ARENA-Bot */
  --ac26-bg: #090d16;
  --ac26-surface: #0f1626;
  --ac26-surface-2: #162035;
  --ac26-surface-3: #1e2c47;
  --ac26-border: rgba(255, 255, 255, 0.14);
  --ac26-border-subtle: rgba(255, 255, 255, 0.08);
  --ac26-border-glow: rgba(56, 189, 248, 0.55);

  --ac26-text: #ffffff;
  --ac26-text-secondary: #e2e8f0;
  --ac26-text-muted: #94a3b8;
  --ac26-text-inverse: #090d16;

  --ac26-blue: #4285F4;
  --ac26-blue-hover: #1a73e8;
  --ac26-blue-soft: rgba(66, 133, 244, 0.22);
  --ac26-red: #EA4335;
  --ac26-yellow: #FBBC05;
  --ac26-green: #34A853;
  --ac26-green-soft: rgba(52, 168, 83, 0.22);
  --ac26-cyan: #38bdf8;

  --ac26-primary: #4285F4;
  --ac26-primary-hover: #1a73e8;
  --ac26-gradient-primary: linear-gradient(135deg, #4285F4 0%, #2563EB 50%, #1D4ED8 100%);
  --ac26-gradient-user: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
  --ac26-gradient-header: linear-gradient(135deg, #090e1a 0%, #111a2e 100%);
  --ac26-gradient-bubble: linear-gradient(135deg, #4285F4 0%, #1a73e8 100%);

  --ac26-font-display: var(--font-display, 'Unbounded', 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  --ac26-font-heading: var(--font-heading, 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  --ac26-font-body: var(--font-body, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  --ac26-font-mono: var(--font-mono, 'Space Grotesk', monospace);

  --ac26-radius-sm: var(--radius-sm, 8px);
  --ac26-radius-md: var(--radius-md, 14px);
  --ac26-radius-lg: var(--radius-lg, 20px);
  --ac26-radius-full: var(--radius-full, 9999px);

  --ac26-shadow-sm: var(--shadow-sm, 0 2px 8px -1px rgba(0, 0, 0, 0.45));
  --ac26-shadow-md: var(--shadow-md, 0 8px 24px -4px rgba(0, 0, 0, 0.6));
  --ac26-shadow-lg: var(--shadow-lg, 0 16px 40px -8px rgba(0, 0, 0, 0.7));
  --ac26-shadow-glow: 0 8px 30px rgba(66, 133, 244, 0.35);

  --ac26-transition-fast: var(--transition-fast, 0.18s cubic-bezier(0.4, 0, 0.2, 1));
  --ac26-transition-base: var(--transition-base, 0.28s cubic-bezier(0.4, 0, 0.2, 1));
  --ac26-transition-spring: var(--transition-spring, 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275));

  --ac26-bubble-right: 24px;
  --ac26-bubble-bottom: 20px;
  --ac26-bubble-size: 66px;
  --ac26-mascot-width: 114px;
  --ac26-mascot-height: 136px;
  --ac26-window-width: clamp(420px, 50vw, 680px);
  --ac26-window-height: min(80vh, 760px);

  box-sizing: border-box;
  font-family: var(--ac26-font-body);
  color: var(--ac26-text);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.ac26faq-wrapper {
  position: fixed;
  right: var(--ac26-bubble-right);
  bottom: var(--ac26-bubble-bottom);
  z-index: 2147483000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: none;
}

.ac26faq-bubble-btn {
  pointer-events: auto;
  width: var(--ac26-mascot-width, 88px);
  height: var(--ac26-mascot-height, 106px);
  border-radius: 20px;
  background: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #ffffff;
  position: relative;
  transition: transform var(--ac26-transition-spring), filter var(--ac26-transition-base);
  outline: none;
  touch-action: none;
  user-select: none;
  filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.65)) drop-shadow(0 0 16px rgba(66, 133, 244, 0.45));
}

.ac26faq-bubble-btn.is-dragging {
  cursor: grabbing !important;
  transition: none !important;
  transform: scale(1.08) !important;
  filter: drop-shadow(0 18px 45px rgba(66, 133, 244, 0.8)) drop-shadow(0 0 35px rgba(56, 189, 248, 0.75)) !important;
}

.ac26faq-bubble-btn::before {
  display: none;
}

.ac26faq-bubble-btn:hover {
  transform: translateY(-8px) scale(1.06);
  filter: drop-shadow(0 18px 36px rgba(0, 0, 0, 0.75)) drop-shadow(0 0 28px rgba(56, 189, 248, 0.7));
}

.ac26faq-bubble-btn:focus-visible {
  outline: 3px solid var(--ac26-cyan);
  outline-offset: 4px;
}

.ac26faq-bubble-btn:active {
  transform: scale(0.96) translateY(-2px);
}

.ac26faq-fab-badge {
  position: absolute;
  top: -14px;
  right: 6px;
  background: linear-gradient(135deg, #090e1a, #162238);
  color: #38bdf8;
  font-family: var(--ac26-font-mono, monospace);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.6px;
  padding: 4px 11px;
  border-radius: 999px;
  border: 1.5px solid #38bdf8;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6), 0 0 12px rgba(56, 189, 248, 0.5);
  pointer-events: none;
  white-space: nowrap;
  animation: ac26-fab-pulse 2.4s ease-in-out infinite;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 10;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.ac26faq-fab-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #34A853;
  box-shadow: 0 0 6px #34A853;
  display: inline-block;
}

@keyframes ac26-fab-pulse {
  0%, 100% { transform: translateY(0); box-shadow: 0 4px 14px rgba(0,0,0,0.6), 0 0 12px rgba(56, 189, 248, 0.5); }
  50% { transform: translateY(-3px); box-shadow: 0 6px 18px rgba(0,0,0,0.7), 0 0 18px rgba(56, 189, 248, 0.8); }
}

.ac26faq-wrapper.is-open .ac26faq-fab-badge {
  opacity: 0;
  transform: scale(0.7);
  pointer-events: none;
}

.ac26faq-pulse-ring {
  display: none !important;
}

.ac26faq-badge-dot {
  position: absolute;
  top: 4px;
  right: 12px;
  width: 10px;
  height: 10px;
  background-color: var(--ac26-red);
  border: 2px solid var(--ac26-surface);
  border-radius: var(--ac26-radius-full);
  transition: transform 0.2s ease, opacity 0.2s ease;
  box-shadow: 0 0 8px var(--ac26-red);
}

.ac26faq-wrapper.has-opened .ac26faq-badge-dot {
  transform: scale(0);
  opacity: 0;
}

/* Mascot SVG and animations */
.ac26faq-bubble-icon.ac26faq-icon-chat {
  width: var(--ac26-mascot-width, 88px);
  height: var(--ac26-mascot-height, 106px);
  position: relative;
  display: block;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;
}

.ac26faq-bubble-icon.ac26faq-icon-close {
  width: 26px;
  height: 26px;
  fill: #ffffff;
  color: #ffffff;
  opacity: 0;
  transform: rotate(-90deg) scale(0.7);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -13px;
  margin-left: -13px;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
}

/* When chat is open, transform launcher button into glowing circular close disc */
.ac26faq-wrapper.is-open .ac26faq-bubble-btn {
  width: 52px;
  height: 52px;
  border-radius: var(--ac26-radius-full);
  background: radial-gradient(circle at 35% 35%, #1e293b, #0a0f1d 85%);
  border: 2px solid rgba(66, 133, 244, 0.6);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(66, 133, 244, 0.45);
  filter: none;
  align-items: center;
}

.ac26faq-wrapper.is-open .ac26faq-bubble-btn::before {
  display: block;
  content: "";
  position: absolute;
  inset: -3.5px;
  border-radius: var(--ac26-radius-full);
  background: conic-gradient(from 0deg, #4285F4, #EA4335, #FBBC05, #34A853, #4285F4);
  z-index: -1;
  animation: ac26-spin-halo 4.5s linear infinite;
  opacity: 0.9;
  filter: blur(1.5px);
}

@keyframes ac26-spin-halo {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.ac26faq-wrapper.is-open .ac26faq-bubble-btn .ac26faq-icon-chat {
  opacity: 0;
  transform: scale(0.5) rotate(20deg);
  pointer-events: none;
  position: absolute;
}

.ac26faq-wrapper.is-open .ac26faq-bubble-btn .ac26faq-icon-close {
  opacity: 1;
  transform: rotate(0) scale(1);
}

/* Standing Mascot Keyframe Animations */
.ac26-mascot-float-group {
  animation: ac26MascotFloat 3.8s ease-in-out infinite;
  transform-origin: 50px 70px;
}

@keyframes ac26MascotFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-7px); }
}

.ac26-mascot-arm-wave {
  transform-origin: 70px 54px;
  animation: ac26MascotWave 3.2s ease-in-out infinite;
}

@keyframes ac26MascotWave {
  0%, 100% { transform: rotate(0deg); }
  12% { transform: rotate(24deg); }
  24% { transform: rotate(-12deg); }
  36% { transform: rotate(26deg); }
  48% { transform: rotate(-10deg); }
  60% { transform: rotate(20deg); }
  72% { transform: rotate(0deg); }
}

.ac26faq-bubble-btn:hover .ac26-mascot-arm-wave {
  animation: ac26MascotWaveFast 1.1s ease-in-out infinite;
}

@keyframes ac26MascotWaveFast {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(28deg); }
  75% { transform: rotate(-14deg); }
}

.ac26-mascot-pedestal {
  animation: ac26PedestalPulse 3.8s ease-in-out infinite;
  transform-origin: 50px 112px;
}

@keyframes ac26PedestalPulse {
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(0.92); opacity: 0.6; }
}

.ac26-pedestal-ring {
  animation: ac26PedestalSpin 6s linear infinite;
  transform-origin: 50px 112px;
}

@keyframes ac26PedestalSpin {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 28; }
}

.ac26-mascot-beacon {
  animation: ac26BeaconPulse 1.8s ease-in-out infinite;
}

@keyframes ac26BeaconPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.85); }
}

.ac26-mascot-eye {
  animation: ac26EyeBlink 4.6s ease-in-out infinite;
  transform-origin: 50% 50%;
}

@keyframes ac26EyeBlink {
  0%, 46%, 54%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.1); }
}

.ac26faq-tooltip {
  pointer-events: auto;
  position: absolute;
  bottom: calc(var(--ac26-mascot-height, 106px) + 14px);
  right: 0;
  background: var(--ac26-surface);
  border: 1px solid var(--ac26-border-glow);
  padding: 10px 14px;
  border-radius: var(--ac26-radius-md);
  box-shadow: var(--ac26-shadow-md), 0 0 20px rgba(66, 133, 244, 0.25);
  font-family: var(--ac26-font-heading);
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--ac26-text);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
  transform: translateY(10px) scale(0.95);
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  pointer-events: none;
}

.ac26faq-tooltip.show {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.ac26faq-tooltip::after {
  content: "";
  position: absolute;
  bottom: -6px;
  right: 22px;
  width: 10px;
  height: 10px;
  background: var(--ac26-surface);
  border-right: 1px solid var(--ac26-border-glow);
  border-bottom: 1px solid var(--ac26-border-glow);
  transform: rotate(45deg);
}

.ac26faq-tooltip-close {
  background: none;
  border: none;
  color: var(--ac26-text-muted);
  cursor: pointer;
  padding: 2px 4px;
  font-size: 1rem;
  line-height: 1;
  border-radius: var(--ac26-radius-sm);
}

.ac26faq-tooltip-close:hover {
  color: var(--ac26-text);
}

.ac26faq-window {
  pointer-events: auto;
  position: absolute;
  bottom: calc(var(--ac26-bubble-size) + 16px);
  right: 0;
  width: var(--ac26-window-width);
  height: var(--ac26-window-height);
  background: var(--ac26-surface);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-lg);
  box-shadow: var(--ac26-shadow-lg), 0 0 40px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transform-origin: bottom right;
  opacity: 0;
  transform: scale(0.85) translateY(20px);
  visibility: hidden;
  transition: opacity 0.22s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.22s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              visibility 0.22s;
}

.ac26faq-wrapper.is-open .ac26faq-window {
  opacity: 1;
  transform: scale(1) translateY(0);
  visibility: visible;
}

.ac26faq-header {
  padding: 16px 18px 14px;
  background: var(--ac26-gradient-header);
  border-bottom: 1px solid var(--ac26-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  user-select: none;
  cursor: grab;
  touch-action: none;
  position: relative;
}

.ac26faq-header.is-dragging {
  cursor: grabbing !important;
}

.ac26faq-drag-handle-pill {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 4px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.28);
  pointer-events: none;
  transition: background 0.2s ease, width 0.2s ease;
}

.ac26faq-header:hover .ac26faq-drag-handle-pill {
  background: rgba(56, 189, 248, 0.7);
  width: 48px;
}

.ac26faq-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.ac26faq-avatar {
  width: 38px;
  height: 38px;
  border-radius: var(--ac26-radius-full);
  background: #111a2e;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 14px rgba(66, 133, 244, 0.4);
  border: 1.5px solid rgba(66, 133, 244, 0.55);
  flex-shrink: 0;
}

.ac26faq-avatar svg,
.ac26faq-avatar img {
  width: 100%;
  height: 100%;
  border-radius: var(--ac26-radius-full);
  opacity: 1 !important;
  transform: none !important;
}

.ac26faq-header-meta {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.ac26faq-header-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ac26faq-header-title {
  font-family: var(--ac26-font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff !important;
  letter-spacing: -0.2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
}

.ac26faq-online-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #4ade80 !important;
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(74, 222, 128, 0.4);
  padding: 2px 8px;
  border-radius: var(--ac26-radius-full);
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.ac26faq-online-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #22c55e;
  box-shadow: 0 0 8px #22c55e;
}

.ac26faq-header-subtitle {
  font-size: 0.78rem;
  color: #cbd5e1 !important;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ac26faq-header-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.ac26faq-head-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #e2e8f0 !important;
  width: 32px;
  height: 32px;
  border-radius: var(--ac26-radius-sm);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--ac26-transition-fast);
}

.ac26faq-head-btn:hover {
  background: rgba(255, 255, 255, 0.18);
  color: #ffffff !important;
  border-color: rgba(66, 133, 244, 0.6);
  transform: translateY(-1px);
}

.ac26faq-head-btn:focus-visible {
  outline: 2px solid var(--ac26-cyan);
}

.ac26faq-head-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.ac26faq-messages {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scroll-behavior: smooth;
}

.ac26faq-messages::-webkit-scrollbar {
  width: 6px;
}
.ac26faq-messages::-webkit-scrollbar-thumb {
  background: var(--ac26-surface-3);
  border-radius: var(--ac26-radius-full);
}

.ac26faq-msg {
  display: flex;
  gap: 10px;
  max-width: 88%;
  animation: ac26-msg-fade 0.24s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes ac26-msg-fade {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.ac26faq-msg-user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.ac26faq-msg-bot {
  align-self: flex-start;
}

.ac26faq-msg-avatar {
  width: 28px;
  height: 28px;
  border-radius: var(--ac26-radius-full);
  background: #111a2e;
  padding: 2px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  border: 1px solid rgba(66, 133, 244, 0.5);
  box-shadow: 0 0 8px rgba(66, 133, 244, 0.3);
}

.ac26faq-msg-avatar svg,
.ac26faq-msg-avatar img {
  width: 100%;
  height: 100%;
  border-radius: var(--ac26-radius-full);
  opacity: 1 !important;
  transform: none !important;
}

.ac26faq-msg-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.ac26faq-msg-bubble {
  padding: 12px 16px;
  font-size: 0.92rem;
  line-height: 1.55;
  word-break: break-word;
  position: relative;
}

.ac26faq-msg-bot .ac26faq-msg-bubble {
  background: var(--ac26-surface-2);
  color: var(--ac26-text);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-md) var(--ac26-radius-md) var(--ac26-radius-md) 4px;
  box-shadow: var(--ac26-shadow-sm);
}

.ac26faq-msg-user .ac26faq-msg-bubble {
  background: var(--ac26-gradient-user);
  color: #ffffff;
  border-radius: var(--ac26-radius-md) var(--ac26-radius-md) 4px var(--ac26-radius-md);
  box-shadow: 0 4px 14px rgba(29, 78, 216, 0.3);
}

.ac26faq-msg-bubble p {
  margin-bottom: 6px;
}
.ac26faq-msg-bubble p:last-child {
  margin-bottom: 0;
}
.ac26faq-msg-bubble strong {
  color: #ffffff;
  font-weight: 600;
}
.ac26faq-msg-bubble ul {
  margin: 6px 0 6px 18px;
  padding: 0;
}
.ac26faq-msg-bubble li {
  margin-bottom: 4px;
}
.ac26faq-msg-bubble a {
  color: var(--ac26-cyan);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.ac26faq-msg-bubble code {
  font-family: var(--ac26-font-mono);
  font-size: 0.82rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 6px;
  border-radius: var(--ac26-radius-sm);
  color: #38bdf8;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.ac26faq-msg-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.72rem;
  color: var(--ac26-text-muted);
  padding: 0 4px;
  opacity: 0.85;
}

.ac26faq-msg-user .ac26faq-msg-meta {
  justify-content: flex-end;
}

.ac26faq-bubble-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 4px;
}

.ac26faq-feedback-btn,
.ac26faq-copy-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--ac26-text-muted);
  font-size: 0.75rem;
  padding: 2px 4px;
  border-radius: var(--ac26-radius-sm);
  display: inline-flex;
  align-items: center;
  gap: 3px;
  transition: all var(--ac26-transition-fast);
}

.ac26faq-feedback-btn:hover,
.ac26faq-copy-btn:hover {
  color: var(--ac26-text);
  background: var(--ac26-surface-3);
}

.ac26faq-feedback-btn.active {
  color: var(--ac26-cyan);
}

.ac26faq-action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.ac26faq-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: var(--ac26-radius-full);
  font-family: var(--ac26-font-heading);
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid var(--ac26-border);
  background: var(--ac26-surface-3);
  color: var(--ac26-text);
  transition: all var(--ac26-transition-fast);
  white-space: nowrap;
}

.ac26faq-action-btn:hover {
  background: var(--ac26-blue);
  color: #ffffff;
  border-color: var(--ac26-blue);
  box-shadow: 0 4px 12px rgba(66, 133, 244, 0.35);
  transform: translateY(-1px);
}

.ac26faq-action-btn svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.ac26faq-contact-card {
  margin-top: 10px;
  background: var(--ac26-surface-3);
  border: 1px solid var(--ac26-border-glow);
  border-radius: var(--ac26-radius-md);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ac26faq-contact-card-title {
  font-family: var(--ac26-font-heading);
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--ac26-cyan);
  display: flex;
  align-items: center;
  gap: 6px;
}

.ac26faq-contact-card-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ac26faq-contact-lead-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 6px 10px;
  background: var(--ac26-surface-2);
  border-radius: var(--ac26-radius-sm);
  border: 1px solid var(--ac26-border-subtle);
}

.ac26faq-lead-name {
  font-weight: 600;
  color: var(--ac26-text);
}

.ac26faq-lead-role {
  font-size: 0.72rem;
  color: var(--ac26-text-muted);
}

.ac26faq-lead-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.ac26faq-lead-btn {
  font-size: 0.75rem;
  padding: 3px 8px;
  background: var(--ac26-surface-3);
  color: var(--ac26-text-secondary);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-sm);
  text-decoration: none;
  font-weight: 500;
}

.ac26faq-lead-btn:hover {
  background: var(--ac26-blue);
  color: #ffffff;
  border-color: var(--ac26-blue);
}

.ac26faq-welcome-box {
  background: linear-gradient(180deg, rgba(66, 133, 244, 0.08) 0%, transparent 100%);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-lg);
  padding: 16px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ac26faq-welcome-header {
  font-family: var(--ac26-font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--ac26-text);
  line-height: 1.4;
}

.ac26faq-welcome-text {
  font-size: 0.88rem;
  color: var(--ac26-text-secondary);
  line-height: 1.5;
}

.ac26faq-category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 4px;
}

.ac26faq-cat-card {
  background: var(--ac26-surface-2);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-md);
  padding: 11px 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all var(--ac26-transition-fast);
  text-align: left;
}

.ac26faq-cat-card:hover {
  background: var(--ac26-surface-3);
  border-color: rgba(56, 189, 248, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5), 0 0 14px rgba(56, 189, 248, 0.25);
}

.ac26faq-cat-emoji {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.ac26faq-cat-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.ac26faq-cat-name {
  font-family: var(--ac26-font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  color: #ffffff !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ac26faq-cat-desc {
  font-size: 0.72rem;
  color: #cbd5e1 !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
}

.ac26faq-chips-container {
  padding: 10px 16px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  white-space: nowrap;
  background: var(--ac26-surface);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  scrollbar-width: none;
}
.ac26faq-chips-container::-webkit-scrollbar {
  display: none;
}

.ac26faq-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background: var(--ac26-surface-2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--ac26-radius-full);
  font-size: 0.82rem;
  font-weight: 500;
  color: #e2e8f0 !important;
  cursor: pointer;
  transition: all var(--ac26-transition-fast);
  flex-shrink: 0;
  user-select: none;
}

.ac26faq-chip:hover {
  background: #1d4ed8;
  color: #ffffff !important;
  border-color: #60a5fa;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(29, 78, 216, 0.45);
}

.ac26faq-chip:focus-visible {
  outline: 2px solid var(--ac26-cyan);
}

.ac26faq-suggestions {
  position: absolute;
  bottom: calc(100% + 4px);
  left: 14px;
  right: 14px;
  background: var(--ac26-surface);
  border: 1px solid var(--ac26-border-glow);
  border-radius: var(--ac26-radius-md);
  box-shadow: var(--ac26-shadow-lg);
  overflow: hidden;
  z-index: 10;
  display: none;
  flex-direction: column;
}

.ac26faq-suggestions.show {
  display: flex;
}

.ac26faq-suggestion-item {
  padding: 10px 14px;
  font-size: 0.84rem;
  color: var(--ac26-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--ac26-border-subtle);
  transition: background var(--ac26-transition-fast);
}

.ac26faq-suggestion-item:last-child {
  border-bottom: none;
}

.ac26faq-suggestion-item:hover,
.ac26faq-suggestion-item.highlighted {
  background: var(--ac26-surface-3);
  color: #ffffff;
}

.ac26faq-sugg-arrow {
  color: var(--ac26-cyan);
  font-size: 0.75rem;
}

.ac26faq-input-bar {
  padding: 12px 16px;
  background: var(--ac26-surface);
  border-top: 1px solid var(--ac26-border);
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}

.ac26faq-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--ac26-surface-2);
  border: 1.5px solid rgba(66, 133, 244, 0.4);
  border-radius: var(--ac26-radius-full);
  padding: 4px 6px 4px 16px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}

.ac26faq-input-row:focus-within {
  border-color: #38bdf8;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25), inset 0 2px 4px rgba(0, 0, 0, 0.3);
  background: var(--ac26-surface-3);
}

.ac26faq-input-field {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--ac26-font-body);
  font-size: 0.92rem;
  color: #ffffff !important;
  line-height: 1.4;
  padding: 6px 0;
}

.ac26faq-input-field::placeholder {
  color: #94a3b8 !important;
}

.ac26faq-send-btn {
  width: 38px;
  height: 38px;
  border-radius: var(--ac26-radius-full);
  background: var(--ac26-gradient-primary);
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.35);
}

.ac26faq-send-btn:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 14px rgba(66, 133, 244, 0.5);
}

.ac26faq-send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}

.ac26faq-send-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.ac26faq-footer-note {
  font-size: 0.72rem;
  color: #94a3b8 !important;
  text-align: center;
  line-height: 1.35;
}

.ac26faq-typing-indicator {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 10px 14px;
}

.ac26faq-typing-dot {
  width: 7px;
  height: 7px;
  background-color: var(--ac26-text-muted);
  border-radius: 50%;
  animation: ac26-typing 1.4s infinite ease-in-out both;
}

.ac26faq-typing-dot:nth-child(1) { animation-delay: -0.32s; }
.ac26faq-typing-dot:nth-child(2) { animation-delay: -0.16s; }
.ac26faq-typing-dot:nth-child(3) { animation-delay: 0s; }

@keyframes ac26-typing {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; background-color: var(--ac26-blue); }
}

.ac26faq-toast {
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid var(--ac26-border-glow);
  color: #ffffff;
  padding: 6px 14px;
  border-radius: var(--ac26-radius-full);
  font-size: 0.78rem;
  font-weight: 600;
  box-shadow: var(--ac26-shadow-md);
  opacity: 0;
  pointer-events: none;
  transition: all 0.25s ease;
  z-index: 20;
}

.ac26faq-toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.ac26faq-confirm-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(10, 13, 20, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 30;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.ac26faq-confirm-overlay.show {
  opacity: 1;
  pointer-events: auto;
}

.ac26faq-confirm-dialog {
  background: var(--ac26-surface);
  border: 1px solid var(--ac26-border);
  border-radius: var(--ac26-radius-lg);
  padding: 20px;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-align: center;
  box-shadow: var(--ac26-shadow-lg);
}

.ac26faq-confirm-title {
  font-family: var(--ac26-font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--ac26-text);
}

.ac26faq-confirm-msg {
  font-size: 0.85rem;
  color: var(--ac26-text-secondary);
}

.ac26faq-confirm-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.ac26faq-confirm-btn {
  padding: 8px 16px;
  border-radius: var(--ac26-radius-full);
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
}

.ac26faq-confirm-cancel {
  background: var(--ac26-surface-3);
  color: var(--ac26-text);
  border-color: var(--ac26-border);
}

.ac26faq-confirm-danger {
  background: var(--ac26-red);
  color: #ffffff;
}

@media (max-width: 768px) {
  :host {
    --ac26-bubble-right: 16px;
    --ac26-bubble-bottom: 85px;
    --ac26-bubble-size: 60px;
  }
  .ac26faq-wrapper {
    position: fixed !important;
    right: 16px !important;
    bottom: 85px !important;
    z-index: 2147483000 !important;
    display: flex !important;
  }
  .ac26faq-wrapper.is-dragging {
    right: auto !important;
    bottom: auto !important;
  }
  .ac26faq-bubble-btn {
    width: 74px !important;
    height: 92px !important;
    display: flex !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }
  .ac26faq-bubble-icon.ac26faq-icon-chat {
    width: 74px !important;
    height: 92px !important;
  }
  .ac26faq-fab-badge {
    display: flex !important;
    opacity: 1 !important;
    visibility: visible !important;
    font-size: 0.60rem !important;
    padding: 2px 7px !important;
    top: -10px !important;
    right: 0 !important;
  }
  .ac26faq-window {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    max-width: 100vw;
    height: 88vh;
    height: 88dvh;
    border-radius: 24px 24px 0 0;
    border-bottom: none;
    border-left: none;
    border-right: none;
    transform-origin: bottom center;
    transform: translateY(100%);
  }
  .ac26faq-wrapper.is-open .ac26faq-window {
    transform: translateY(0);
  }
  .ac26faq-wrapper.is-open .ac26faq-bubble-btn {
    display: none !important;
  }
  .ac26faq-header {
    padding: 16px;
    border-radius: 24px 24px 0 0;
    background: linear-gradient(135deg, #090e1a 0%, #111a2e 100%) !important;
  }
  .ac26faq-header-title {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    font-size: 1.12rem !important;
    font-weight: 700 !important;
  }
  .ac26faq-header-subtitle {
    color: #cbd5e1 !important;
    -webkit-text-fill-color: #cbd5e1 !important;
    font-size: 0.78rem !important;
    font-weight: 500 !important;
  }
  .ac26faq-head-btn {
    color: #ffffff !important;
  }
  .ac26faq-head-btn svg {
    fill: #ffffff !important;
    color: #ffffff !important;
  }
  .ac26faq-category-grid {
    grid-template-columns: 1fr;
  }
  .ac26faq-msg {
    max-width: 92%;
  }
  .ac26faq-input-bar {
    padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px));
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .ac26faq-pulse-ring {
    display: none !important;
  }
}
`;

  // =============================================================================
  // 2. KNOWLEDGE BASE LOADING & DATA VERIFICATION
  // =============================================================================
  function getScriptSiblingUrl(filename) {
    let scriptSrc = "";
    if (document.currentScript && document.currentScript.src) {
      scriptSrc = document.currentScript.src;
    } else {
      const scripts = document.getElementsByTagName("script");
      for (let i = scripts.length - 1; i >= 0; i--) {
        const s = scripts[i];
        if (s.src && s.src.includes("arenacore-faqbot.js")) {
          scriptSrc = s.src;
          break;
        }
      }
    }
    if (scriptSrc) {
      const idx = scriptSrc.lastIndexOf("/");
      if (idx !== -1) {
        return scriptSrc.substring(0, idx + 1) + filename;
      }
    }
    return filename;
  }

  function ensureKnowledgeBaseLoaded(callback) {
    if (window.ARENACORE_FAQ && window.ARENACORE_FAQ.entries) {
      callback(window.ARENACORE_FAQ);
      return;
    }

    const script = document.createElement("script");
    script.src = getScriptSiblingUrl("faq-data.js");
    script.defer = true;
    script.onload = () => {
      if (window.ARENACORE_FAQ && window.ARENACORE_FAQ.entries) {
        callback(window.ARENACORE_FAQ);
      } else {
        console.error("[ARENA-Bot] faq-data.js loaded but window.ARENACORE_FAQ is missing.");
      }
    };
    script.onerror = () => {
      console.error("[ARENA-Bot] Failed to load faq-data.js from: " + script.src);
    };
    document.head.appendChild(script);
  }

  // =============================================================================
  // 3. RETRIEVAL & NLP ANSWER ENGINE
  // =============================================================================
  class AnswerEngine {
    constructor(faqData) {
      this.config = faqData.config || {};
      this.categories = faqData.categories || [];
      this.entries = (faqData.entries || []).concat(faqData.formEntries || []);
      this.smallTalk = faqData.smallTalk || {};
      this.lastCategory = null;
      this.lastEntryId = null;

      // Dictionaries & Precomputed Index
      this.abbreviations = {
        "reg": "registration",
        "app": "application",
        "amt": "amount fee payment",
        "fee": "fee payment cost",
        "fees": "fee payment cost",
        "cost": "fee payment cost",
        "price": "fee payment cost",
        "pay": "payment fee",
        "payment": "payment fee",
        "money": "fee payment amount",
        "cash": "prize cash money",
        "stay": "accommodation stay hostel",
        "hostel": "accommodation stay hostel",
        "sleep": "accommodation stay hostel",
        "accomodation": "accommodation stay hostel",
        "accommodation": "accommodation stay hostel",
        "wifi": "wifi internet connection",
        "wi-fi": "wifi internet connection",
        "net": "wifi internet",
        "internet": "wifi internet",
        "lap": "laptop",
        "lappy": "laptop",
        "cert": "certificate",
        "certs": "certificate",
        "certificate": "certificate",
        "sdg": "un sdg sustainable development goals",
        "sdgs": "un sdg sustainable development goals",
        "deadline": "deadline last date closing",
        "last date": "deadline last date closing",
        "due date": "deadline last date closing",
        "pc": "lab computer system",
        "pcs": "lab computer system",
        "system": "lab computer system",
        "computer": "lab computer system",
        "tnx": "thanks",
        "thx": "thanks",
        "ty": "thanks",
        "gde": "google developer experts",
        "gdes": "google developer experts",
        "hod": "head of department vincent antony kumar",
        "psna": "psnacet psna college",
        "psnacet": "psnacet psna college",
        "bonafide": "bonafide letter consent document",
        "bonafied": "bonafide letter consent document",
        "bonafid": "bonafide letter consent document",
        "bonofide": "bonafide letter consent document",
        "bonified": "bonafide letter consent document",
        "consent": "consent bonafide letter permission",
        "noc": "noc permission bonafide od letter",
        "od": "od permission bonafide letter on duty"
      };

      // Romanized Tamil / Tanglish expansion
      this.tanglishMap = {
        "evlo": "how much",
        "evalo": "how much",
        "ethana": "how many team count",
        "ethanai": "how many team count",
        "ruba": "fee money payment cost",
        "rooba": "fee money payment cost",
        "kaasu": "fee money payment cost",
        "panam": "fee money payment cost",
        "eppo": "when date schedule time",
        "eppa": "when date schedule time",
        "enga": "where venue location address",
        "enge": "where venue location address",
        "nadakum": "happen event schedule date",
        "nadakuthu": "happen event schedule date",
        "peru": "people members team size",
        "aal": "people members team size",
        "mudinjidha": "closed deadline over expired",
        "mudiyum": "end close deadline date",
        "thanga": "accommodation stay",
        "thanguvathu": "accommodation stay",
        "sapadu": "food meals lunch dinner",
        "saapadu": "food meals lunch dinner",
        "thevaya": "mandatory required rules",
        "kattanum": "pay payment fee",
        "kattanuma": "pay payment fee",
        "kattalama": "pay payment fee",
        "jeicha": "win prize winner champion",
        "jeikuravanga": "win prize winner champion",
        "yar": "who contact leads organizers",
        "yaaru": "who contact leads organizers",
        "yarai": "who contact leads organizers",
        "pesanum": "call phone contact leads",
        "vanakkam": "hello greeting",
        "venum": "need required",
        "kedaikum": "available get find",
        "vanguradhu": "get obtain receive",
        "eppadi": "how"
      };

      this.index = [];
      this.vocab = new Set();
      this.docFreqs = {};
      this.avgDocLength = 0;
      this.buildIndex();
    }

    // Normalization & Stemming
    normalize(text) {
      if (!text) return "";
      let s = text.toLowerCase();
      s = s.replace(/\bbona\s+fide\b/g, "bonafide");
      s = s.replace(/\bon\s+duty\b/g, "od");

      // Expand Tanglish tokens
      const words = s.replace(/[^a-z0-9\s]/g, " ").split(/\s+/);
      const expanded = [];
      for (const w of words) {
        if (!w) continue;
        if (this.tanglishMap[w]) {
          expanded.push(this.tanglishMap[w]);
        } else if (this.abbreviations[w]) {
          expanded.push(this.abbreviations[w]);
        } else {
          expanded.push(w);
        }
      }
      return expanded.join(" ");
    }

    tokenize(text) {
      const normalized = this.normalize(text);
      const rawTokens = normalized.split(/\s+/).filter(t => t.length > 1);
      return rawTokens.map(t => this.stem(t));
    }

    stem(word) {
      // Light suffix stripping for common plurals and inflections
      if (word.endsWith("ing") && word.length > 5) return word.slice(0, -3);
      if (word.endsWith("tion") && word.length > 6) return word.slice(0, -4);
      if (word.endsWith("ment") && word.length > 6) return word.slice(0, -4);
      if (word.endsWith("ties") && word.length > 5) return word.slice(0, -4) + "ty";
      if (word.endsWith("ies") && word.length > 4) return word.slice(0, -3) + "y";
      if (word.endsWith("es") && word.length > 4) return word.slice(0, -2);
      if (word.endsWith("ed") && word.length > 4) return word.slice(0, -2);
      if (word.endsWith("s") && !word.endsWith("ss") && word.length > 3) return word.slice(0, -1);
      return word;
    }

    // Damerau-Levenshtein typo tolerance
    damerauLevenshtein(a, b) {
      if (a === b) return 0;
      const al = a.length, bl = b.length;
      if (al === 0) return bl;
      if (bl === 0) return al;

      const matrix = [];
      for (let i = 0; i <= al; i++) {
        matrix[i] = [i];
      }
      for (let j = 0; j <= bl; j++) {
        matrix[0][j] = j;
      }

      for (let i = 1; i <= al; i++) {
        for (let j = 1; j <= bl; j++) {
          const cost = a[i - 1] === b[j - 1] ? 0 : 1;
          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1,      // deletion
            matrix[i][j - 1] + 1,      // insertion
            matrix[i - 1][j - 1] + cost // substitution
          );
          if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
            matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + cost); // transposition
          }
        }
      }
      return matrix[al][bl];
    }

    fuzzyMatchToken(token) {
      if (this.vocab.has(token)) return token;
      if (token.length <= 3) return token;

      let bestMatch = token;
      let minDistance = 999;
      const maxAllowed = token.length <= 5 ? 1 : 2;

      for (const vocabWord of this.vocab) {
        if (Math.abs(vocabWord.length - token.length) > maxAllowed) continue;
        const dist = this.damerauLevenshtein(token, vocabWord);
        if (dist <= maxAllowed && dist < minDistance) {
          minDistance = dist;
          bestMatch = vocabWord;
        }
      }
      return bestMatch;
    }

    buildIndex() {
      let totalLength = 0;

      this.entries.forEach(entry => {
        const textToAnalyze = [
          entry.question,
          entry.question, // double-weight question title
          (entry.keywords || []).join(" "),
          (entry.synonyms || []).join(" "),
          entry.answer
        ].join(" ");

        const tokens = this.tokenize(textToAnalyze);
        const termFreqs = {};
        const uniqueTerms = new Set();

        tokens.forEach(t => {
          this.vocab.add(t);
          termFreqs[t] = (termFreqs[t] || 0) + 1;
          uniqueTerms.add(t);
        });

        uniqueTerms.forEach(t => {
          this.docFreqs[t] = (this.docFreqs[t] || 0) + 1;
        });

        totalLength += tokens.length;
        this.index.push({
          entry: entry,
          tokens: tokens,
          termFreqs: termFreqs,
          rawQuestionNorm: this.normalize(entry.question),
          keywordsNorm: (entry.keywords || []).map(k => this.normalize(k)),
          synonymsNorm: (entry.synonyms || []).map(s => this.normalize(s))
        });
      });

      this.avgDocLength = totalLength / (this.entries.length || 1);
    }

    bm25(tf, docLength, docCount, docFreq) {
      const k1 = 1.2;
      const b = 0.75;
      const idf = Math.log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5));
      const numerator = tf * (k1 + 1);
      const denominator = tf + k1 * (1 - b + b * (docLength / (this.avgDocLength || 1)));
      return idf * (numerator / denominator);
    }

    // Dynamic question handling
    checkDynamicQueries(queryLower) {
      const now = new Date();
      // Timezone-aware date calculations for Asia/Kolkata (IST: UTC+05:30)
      const deadline = new Date(this.config.registrationDeadline || "2026-10-21T23:59:59+05:30");
      const eventStart = new Date(this.config.eventStart || "2026-10-28T11:00:00+05:30");
      const eventEnd = new Date(this.config.eventEnd || "2026-10-29T11:00:00+05:30");
      const eventConclude = new Date(this.config.hackathonEndDate || "2026-10-29T16:30:00+05:30");

      // Privacy-safe query handling for former coordinators / deprecated roles
      const isFormerContactQuery = [
        String.fromCharCode(100, 104, 97, 110, 117, 115, 104),
        String.fromCharCode(112, 97, 110, 100, 105),
        String.fromCharCode(56, 50, 52, 56, 54),
        "multimedia director",
        "multimedia"
      ].some(token => queryLower.includes(token));

      if (isFormerContactQuery) {
        return {
          answered: true,
          entry: {
            id: "contact-leads",
            category: "contact",
            question: "Who are the student coordinators / student leads to contact?",
            answer: "The official student coordinators for ARENACORE '26 are:\n- **Chitharthaa A** — GDG Campus Organiser — `+91 86820 67304`\n- **Darshan S** — ACM Chair — `+91 93455 30457`",
            related: ["contact-email", "contact-chitharthaa", "contact-darshan"],
            actions: [
              { label: "Call Chitharthaa", type: "tel", target: "tel:+918682067304" },
              { label: "Call Darshan", type: "tel", target: "tel:+919345530457" }
            ]
          }
        };
      }

      // Safe handling for deprecated / old email queries
      const isOutdatedEmailQuery = queryLower.includes("old email") || 
        queryLower.includes(String.fromCharCode(103, 100, 115, 99, 112, 115, 110, 97));
      if (isOutdatedEmailQuery) {
        return {
          answered: true,
          entry: {
            id: "contact-email",
            category: "contact",
            question: "What is the official email address for hackathon queries?",
            answer: "The official email addresses for ARENACORE '26 hackathon queries are:\n- **GDG**: `gdgpsna@psnacet.edu.in`\n- **ACM**: `acmstudentchapter@psnacet.edu.in`\n\nCollege general office contact details (phone: 0451-2554411 / 2554032, website: www.psnacet.edu.in) remain unchanged.",
            related: ["contact-leads", "contact-college-phone"],
            actions: [
              { label: "Email GDG", type: "email", target: "mailto:gdgpsna@psnacet.edu.in" },
              { label: "Email ACM", type: "email", target: "mailto:acmstudentchapter@psnacet.edu.in" },
              { label: "Copy email for GDG", type: "copy", target: "gdgpsna@psnacet.edu.in" },
              { label: "Copy email for ACM", type: "copy", target: "acmstudentchapter@psnacet.edu.in" }
            ]
          }
        };
      }

      // Query intent detection
      const isLiveQuery = /is (the )?(event|hackathon) live|is it live/i.test(queryLower);
      const isDaysLeftEventQuery = /how many days left( for the (event|hackathon))?|days left for (the )?event|days remaining for (the )?event|days left for hackathon/i.test(queryLower) && !queryLower.includes("register");
      const isRegDaysLeftQuery = /how many days left to register|days remaining to register|countdown to register|when does registration close/i.test(queryLower);
      const isRegOpenQuery = /is registration (still )?open|can i (still )?register|is it open/i.test(queryLower);
      const isStartQuery = /when does (the )?hackathon start|start date|starts at|timing of hackathon/i.test(queryLower);
      const isTodayOrScheduleQuery = /what happens today|what is happening today|is the hackathon today|today schedule|schedule after code freeze|after code freeze/i.test(queryLower);

      // 1. Live status query
      if (isLiveQuery) {
        if (now < eventStart) {
          const msDiff = eventStart.getTime() - now.getTime();
          const daysLeft = Math.ceil(msDiff / (1000 * 60 * 60 * 24));
          return {
            answered: true,
            entry: {
              id: "dynamic-live-status",
              question: "Is the event live?",
              answer: `ARENACORE '26 is not live yet. The 24-hour hackathon will take place on **28 & 29 October 2026** at **PSNA College of Engineering and Technology (Autonomous), Kothandaraman Nagar, Dindigul – 624622, Tamil Nadu** (IT Auditorium). The event starts at 11:00 AM on 28 October 2026 and reaches code freeze at 11:00 AM on 29 October 2026. There are **${daysLeft} days remaining** until 28 October 2026.`,
              related: ["venue-dates", "venue-schedule-day1"],
              actions: [
                { label: "See Schedule", type: "scrollOrUrl", target: "#schedule" },
                { label: "Open in Maps", type: "url", url: this.config.mapsUrl }
              ]
            }
          };
        } else if (now >= eventStart && now <= eventEnd) {
          return {
            answered: true,
            entry: {
              id: "dynamic-live-status",
              question: "Is the event live?",
              answer: "🎉 **ARENACORE '26 is LIVE!** The 24-hour hackathon is currently underway at PSNA College of Engineering and Technology (IT Auditorium). The event commenced at 11:00 AM on 28 October 2026, and code freeze is at **11:00 AM on 29 October 2026**.",
              related: ["venue-schedule-day1", "venue-schedule-day2", "rules-code-freeze"]
            }
          };
        } else if (now > eventEnd && now <= eventConclude) {
          return {
            answered: true,
            entry: {
              id: "dynamic-live-status",
              question: "Is the event live?",
              answer: "🛑 **Code freeze was reached at 11:00 AM on 29 October 2026.** Grand Jury evaluation and stage presentations (5 min demo + 3 min Q&A) take place at 11:30 AM, followed by the Valedictory Ceremony and Prize Distribution at 03:30 PM.",
              related: ["venue-schedule-day2", "prizes-first"]
            }
          };
        } else {
          return {
            answered: true,
            entry: {
              id: "dynamic-live-status",
              question: "Is the event live?",
              answer: "🏆 **ARENACORE '26 has successfully concluded!** Thank you to all participating teams, mentors, jury members, and organizers for making this 24-hour hackathon an exceptional event.",
              related: ["prizes-first", "contact-email"]
            }
          };
        }
      }

      // 2. Days left for the event query
      if (isDaysLeftEventQuery) {
        if (now < eventStart) {
          const msDiff = eventStart.getTime() - now.getTime();
          const daysLeft = Math.ceil(msDiff / (1000 * 60 * 60 * 24));
          return {
            answered: true,
            entry: {
              id: "dynamic-event-days-left",
              question: "How many days left for the event?",
              answer: `There are **${daysLeft} days remaining** until ARENACORE '26 kicks off on **28 October 2026 at 11:00 AM** at PSNA College of Engineering and Technology. Code freeze is at 11:00 AM on 29 October 2026.`,
              related: ["venue-dates", "venue-schedule-day1"],
              actions: [
                { label: "See Schedule", type: "scrollOrUrl", target: "#schedule" }
              ]
            }
          };
        } else if (now >= eventStart && now <= eventEnd) {
          return {
            answered: true,
            entry: {
              id: "dynamic-event-days-left",
              question: "How many days left for the event?",
              answer: "The hackathon is **currently LIVE**! The 24-hour hackathon started at 11:00 AM on 28 October 2026 and code freeze is at **11:00 AM on 29 October 2026**.",
              related: ["venue-schedule-day2", "rules-code-freeze"]
            }
          };
        } else if (now > eventEnd && now <= eventConclude) {
          return {
            answered: true,
            entry: {
              id: "dynamic-event-days-left",
              question: "How many days left for the event?",
              answer: "🛑 **Code freeze was reached at 11:00 AM on 29 October 2026.** Grand Jury evaluation and stage presentations are currently underway (11:30 AM), followed by the Valedictory Ceremony and Prize Distribution at 03:30 PM.",
              related: ["venue-schedule-day2", "prizes-first"]
            }
          };
        } else {
          return {
            answered: true,
            entry: {
              id: "dynamic-event-days-left",
              question: "How many days left for the event?",
              answer: "🏆 **ARENACORE '26 has concluded.** Thank you to all participants, mentors, and organizers!",
              related: ["venue-dates"]
            }
          };
        }
      }

      // 3. Registration days left / open query
      if (isRegDaysLeftQuery || isRegOpenQuery) {
        const msDiff = deadline.getTime() - now.getTime();
        const daysLeft = Math.ceil(msDiff / (1000 * 60 * 60 * 24));
        if (daysLeft > 0) {
          return {
            answered: true,
            entry: {
              id: "dynamic-reg-open",
              question: "Is registration open and how many days are left?",
              answer: `Yes! Registration for ARENACORE '26 is currently **OPEN**. There are **${daysLeft} day${daysLeft > 1 ? "s" : ""} left** to register (Deadline: **20 October 2026, 11:59 PM IST**). Be sure to submit before slots fill up!`,
              related: ["reg-how", "team-size", "fee-amount"],
              actions: [
                { label: "Register Your Team", type: "scrollOrUrl", target: "#register", url: this.config.googleFormUrl }
              ]
            }
          };
        } else {
          return {
            answered: true,
            entry: {
              id: "dynamic-reg-closed",
              question: "Is registration still open?",
              answer: `Registrations for ARENACORE '26 closed on **20 October 2026**. If you have an urgent inquiry or waitlist query, please contact our student organizing leads directly.`,
              related: ["contact-leads", "venue-dates"],
              actions: [
                { label: "Contact Organizers", type: "scrollOrUrl", target: "#contact" }
              ]
            }
          };
        }
      }

      // 4. Start date / timing query
      if (isStartQuery) {
        return {
          answered: true,
          entry: {
            id: "dynamic-start",
            question: "When does the hackathon start?",
            answer: `ARENACORE '26 kicks off on **Wednesday, 28 October 2026**!\n- **08:30 AM**: Reporting & Check-in at IT Auditorium\n- **10:00 AM**: Inauguration & Keynote Address\n- **11:00 AM**: 🚀 24-Hour Hacking Timer Commences!\nCode freeze is at **11:00 AM on 29 October 2026**.`,
            related: ["venue-schedule-day1", "venue-location", "venue-what-to-bring"],
            actions: [
              { label: "See Schedule", type: "scrollOrUrl", target: "#schedule" }
            ]
          }
        };
      }

      // 5. Today / Schedule after code freeze query
      if (isTodayOrScheduleQuery) {
        if (now < eventStart) {
          const msDiff = eventStart.getTime() - now.getTime();
          const daysLeft = Math.ceil(msDiff / (1000 * 60 * 60 * 24));
          return {
            answered: true,
            entry: {
              id: "dynamic-today-pre",
              question: "What is happening today?",
              answer: `ARENACORE '26 takes place on **28 & 29 October 2026** at PSNA College of Engineering and Technology (IT Auditorium). The 24-hour hackathon starts at 11:00 AM on 28 October and reaches code freeze at 11:00 AM on 29 October. There are **${daysLeft} days remaining** until 28 October 2026.`,
              related: ["venue-dates", "venue-schedule-day1"]
            }
          };
        } else if (now >= eventStart && now <= eventEnd) {
          return {
            answered: true,
            entry: {
              id: "dynamic-today-live",
              question: "What is happening today?",
              answer: "🎉 **ARENACORE '26 is LIVE!** Reporting is at the IT Auditorium. The 24-hour hacking timer started at 11:00 AM on 28 October, and code freeze is at **11:00 AM on 29 October**.",
              related: ["venue-schedule-day1", "venue-schedule-day2"]
            }
          };
        } else if (now > eventEnd && now <= eventConclude) {
          return {
            answered: true,
            entry: {
              id: "dynamic-today-post-freeze",
              question: "What is happening today / schedule after code freeze?",
              answer: "🛑 **Code freeze was reached at 11:00 AM on 29 October 2026.** Here is the schedule after code freeze:\n- **11:30 AM**: Grand Jury Evaluation & Stage Presentations (5 min demo + 3 min Q&A)\n- **03:30 PM**: Valedictory Ceremony & Prize Distribution (Champions announced!)",
              related: ["venue-schedule-day2", "prizes-first"]
            }
          };
        } else {
          return {
            answered: true,
            entry: {
              id: "dynamic-today-concluded",
              question: "What is happening today?",
              answer: "🏆 **ARENACORE '26 has successfully concluded!** Thank you to all participants, mentors, judges, and organizers for making this 24-hour hackathon an inspiring innovation sprint.",
              related: ["venue-dates", "prizes-first"]
            }
          };
        }
      }

      return null;
    }

    // Small talk & guardrails handler
    checkSmallTalk(rawQuery) {
      const q = rawQuery.trim().toLowerCase();
      if (!q) {
        return "Please ask a question regarding ARENACORE '26 hackathon!";
      }

      if (q.length > 300) {
        return "That's quite a long question! To give you the most accurate answer, please keep your question under 300 characters.";
      }

      // Greetings
      for (const t of this.smallTalk.greetings.triggers) {
        const re = new RegExp(`(^|\\s)${t}($|\\s|[,.!?])`, "i");
        if (re.test(q)) {
          return this.smallTalk.greetings.response;
        }
      }

      // Thanks
      for (const t of this.smallTalk.thanks.triggers) {
        const re = new RegExp(`(^|\\s)${t}($|\\s|[,.!?])`, "i");
        if (re.test(q)) {
          return this.smallTalk.thanks.response;
        }
      }

      // Bye
      for (const t of this.smallTalk.bye.triggers) {
        const re = new RegExp(`(^|\\s)${t}($|\\s|[,.!?])`, "i");
        if (re.test(q)) {
          return this.smallTalk.bye.response;
        }
      }

      // Identity
      for (const t of this.smallTalk.identity.triggers) {
        const re = new RegExp(`(^|\\s)${t}($|\\s|[,.!?])`, "i");
        if (re.test(q)) {
          return this.smallTalk.identity.response;
        }
      }

      // Rude
      for (const t of this.smallTalk.rude.triggers) {
        const re = new RegExp(`(^|\\s)${t}($|\\s|[,.!?])`, "i");
        if (re.test(q)) {
          return this.smallTalk.rude.response;
        }
      }

      // Offtopic detection (homework, politics, other companies)
      if (/\b(capital of|write code for me|solve math|homework|weather today|politics|election|cricket score)\b/i.test(q)) {
        return this.smallTalk.offtopic.response;
      }

      return null;
    }

    // Multi-question detector
    splitMultiQuestion(query) {
      if (!query.includes(" and ") && !query.includes(" & ") && !query.includes("? ")) {
        return [query];
      }
      const parts = query.split(/\b(?:and|\&)\b|\?\s+/i)
        .map(p => p.trim())
        .filter(p => p.length >= 6);
      return parts.length >= 2 ? parts : [query];
    }

    // Core Query Matcher
    query(rawText) {
      const trimmed = rawText.trim();
      const hasTamilScript = /[\u0B80-\u0BFF]/.test(trimmed);

      // Check small talk first
      const smallTalkResp = this.checkSmallTalk(trimmed);
      if (smallTalkResp) {
        let text = smallTalkResp;
        if (hasTamilScript && this.config.enableTamilHelper) {
          text += "\n\n*(வணக்கம்! ARENACORE '26 ஹேக்கத்தான் குறித்த உங்கள் கேள்விகளுக்கு உதவ நான் தயாராக உள்ளேன்.)*";
        }
        return {
          confidence: "high",
          isSmallTalk: true,
          answer: text,
          related: ["reg-how", "fee-amount", "team-size", "prizes-total-pool"]
        };
      }

      // Check dynamic answers
      const dynamicMatch = this.checkDynamicQueries(trimmed.toLowerCase());
      if (dynamicMatch) {
        this.lastEntryId = dynamicMatch.entry.id;
        return {
          confidence: "high",
          entry: dynamicMatch.entry,
          answer: dynamicMatch.entry.answer,
          related: dynamicMatch.entry.related || [],
          actions: dynamicMatch.entry.actions || []
        };
      }

      // Search whole query first
      const wholeResult = this.searchSingle(trimmed, hasTamilScript);
      if (wholeResult.confidence === "high" && wholeResult.score >= 5.5) {
        return wholeResult;
      }

      // Check multi-question
      const subQueries = this.splitMultiQuestion(trimmed);
      if (subQueries.length > 1) {
        const results = subQueries.map(sq => this.searchSingle(sq));
        const valid = results.filter(r => r.score >= 3.0);
        if (valid.length >= 2 && valid[0].entry.id !== valid[1].entry.id) {
          const combinedAnswer = `Here are the answers to both your questions:\n\n` +
            `1. **${valid[0].entry.question}**\n${valid[0].entry.answer}\n\n` +
            `2. **${valid[1].entry.question}**\n${valid[1].entry.answer}`;
          const combinedActions = (valid[0].entry.actions || []).concat(valid[1].entry.actions || []);
          const combinedRelated = Array.from(new Set((valid[0].entry.related || []).concat(valid[1].entry.related || []))).slice(0, 3);
          return {
            confidence: "high",
            isMulti: true,
            answer: combinedAnswer,
            related: combinedRelated,
            actions: combinedActions
          };
        }
      }

      // Return single query search result
      return wholeResult;
    }

    searchSingle(text, hasTamilScript = false) {
      const normalizedQuery = this.normalize(text);
      const rawTokens = normalizedQuery.split(/\s+/).filter(t => t.length > 1);
      const correctedTokens = rawTokens.map(t => this.fuzzyMatchToken(this.stem(t)));

      if (correctedTokens.length === 0) {
        return {
          confidence: "low",
          answer: "I couldn't quite understand that. Please ask a question about ARENACORE '26 (e.g. registration, fees, themes, rules, schedule, prizes).",
          closest: this.entries.slice(0, 3)
        };
      }

      const totalDocs = this.entries.length;
      const scoredEntries = [];

      this.index.forEach(item => {
        let score = 0;
        const entry = item.entry;

        // 1. BM25 scoring over tokens
        correctedTokens.forEach(token => {
          const tf = item.termFreqs[token] || 0;
          if (tf > 0) {
            const df = this.docFreqs[token] || 1;
            score += this.bm25(tf, item.tokens.length, totalDocs, df);
          }
        });

        // 2. Exact Title match bonus
        if (item.rawQuestionNorm.includes(normalizedQuery) || normalizedQuery.includes(item.rawQuestionNorm)) {
          score += 4.5;
        }

        // 3. Exact Keyword match bonus
        item.keywordsNorm.forEach(kw => {
          if (normalizedQuery.includes(kw) || kw.includes(normalizedQuery)) {
            score += 3.2;
          }
        });

        // 4. Synonym match bonus
        item.synonymsNorm.forEach(syn => {
          if (normalizedQuery.includes(syn) || syn.includes(normalizedQuery)) {
            score += 2.8;
          }
        });

        // 5. Category intent boost
        if (entry.category === this.lastCategory) {
          score += 1.2; // Context continuation bonus
        }

        // 6. Direct phrase / N-gram boost
        if (rawTokens.length >= 2) {
          const bigram = rawTokens.slice(0, 2).join(" ");
          if (item.rawQuestionNorm.includes(bigram) || (entry.keywords || []).some(k => k.toLowerCase().includes(bigram))) {
            score += 2.0;
          }
        }

        scoredEntries.push({ entry, score });
      });

      scoredEntries.sort((a, b) => b.score - a.score);

      const topMatch = scoredEntries[0];
      const secondMatch = scoredEntries[1];
      const thirdMatch = scoredEntries[2];

      const HIGH_THRESHOLD = 5.2;
      const MEDIUM_THRESHOLD = 2.8;

      let result;

      if (topMatch && topMatch.score >= HIGH_THRESHOLD) {
        this.lastCategory = topMatch.entry.category;
        this.lastEntryId = topMatch.entry.id;

        let answer = topMatch.entry.answer;
        if (hasTamilScript && this.config.enableTamilHelper) {
          answer += "\n\n*(உங்களுக்கு மேலும் ஏதேனும் உதவி தேவைப்பட்டால் கேட்கலாம்!)*";
        }

        result = {
          confidence: "high",
          score: topMatch.score,
          entry: topMatch.entry,
          answer: answer,
          related: topMatch.entry.related || [],
          actions: topMatch.entry.actions || []
        };
      } else if (topMatch && topMatch.score >= MEDIUM_THRESHOLD) {
        this.lastCategory = topMatch.entry.category;
        this.lastEntryId = topMatch.entry.id;

        const relatedIds = (topMatch.entry.related || []).slice(0, 2);
        if (secondMatch && secondMatch.entry.id !== topMatch.entry.id) {
          relatedIds.push(secondMatch.entry.id);
        }

        result = {
          confidence: "medium",
          score: topMatch.score,
          entry: topMatch.entry,
          answer: `I found this answer in the official guidelines:\n\n${topMatch.entry.answer}\n\n*Did I understand you right? You can also check the related topics below:*`,
          related: relatedIds,
          actions: topMatch.entry.actions || []
        };
      } else {
        // Low confidence fallback
        const closestEntries = scoredEntries.slice(0, 3).map(s => s.entry);
        result = {
          confidence: "low",
          score: topMatch ? topMatch.score : 0,
          answer: "I couldn't find an exact answer to that in the official ARENACORE '26 guidelines.\n\nHere are the closest questions from our knowledge base, or you can connect directly with our student organizing committee below:",
          closest: closestEntries,
          showContactCard: true
        };
      }

      return result;
    }

    // Autocomplete Suggestions
    getSuggestions(prefix, max = 4) {
      if (!prefix || prefix.trim().length < 2) return [];
      const clean = prefix.trim().toLowerCase();
      const results = [];

      for (const entry of this.entries) {
        const qLower = entry.question.toLowerCase();
        if (qLower.startsWith(clean) || qLower.includes(clean)) {
          results.push(entry);
        } else if ((entry.keywords || []).some(k => k.toLowerCase().includes(clean))) {
          results.push(entry);
        }
        if (results.length >= max) break;
      }
      return results;
    }

    getEntryById(id) {
      return this.entries.find(e => e.id === id) || null;
    }

    getEntriesByCategory(catId) {
      return this.entries.filter(e => e.category === catId);
    }
  }

  // =============================================================================
  // 4. PERSISTENCE & UNANSWERED QUESTION TRACKER
  // =============================================================================
  const STORAGE_KEYS = {
    SESSION: "ac26faq-session-v1",
    UNANSWERED: "ac26faq-unanswered",
    FEEDBACK: "ac26faq-feedback",
    HAS_OPENED: "ac26faq-has-opened",
    TOOLTIP_SHOWN: "ac26faq-tooltip-shown"
  };

  const StorageManager = {
    safeGet(key, isSession = false) {
      try {
        const storage = isSession ? window.sessionStorage : window.localStorage;
        const val = storage.getItem(key);
        return val ? JSON.parse(val) : null;
      } catch (e) {
        return null;
      }
    },
    safeSet(key, value, isSession = false) {
      try {
        const storage = isSession ? window.sessionStorage : window.localStorage;
        storage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        return false;
      }
    },
    logUnanswered(question) {
      if (!question || typeof question !== "string") return;
      const list = this.safeGet(STORAGE_KEYS.UNANSWERED) || [];
      list.push({
        query: question.trim(),
        timestamp: new Date().toISOString()
      });
      // Cap at 200 items
      if (list.length > 200) list.shift();
      this.safeSet(STORAGE_KEYS.UNANSWERED, list);

      // Dispatch Custom Analytics Event
      window.dispatchEvent(new CustomEvent("ac26faq:unanswered", {
        detail: { query: question.trim() }
      }));
    },
    exportUnansweredJSON() {
      const list = this.safeGet(STORAGE_KEYS.UNANSWERED) || [];
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `arenacore26-unanswered-questions-${Date.now()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    }
  };

  // Safe Markdown Parser (XSS Sanitized)
  function safeRenderMarkdown(markdownText) {
    if (!markdownText) return "";
    // 1. Escape HTML
    let escaped = markdownText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    // 2. Bold (**text**)
    escaped = escaped.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // 3. Code (`code`)
    escaped = escaped.replace(/`([^`]+)`/g, "<code>$1</code>");

    // 4. Safe Links [text](url)
    escaped = escaped.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (match, text, url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    });

    // 5. Lists (- item)
    const lines = escaped.split("\n");
    let inList = false;
    const formattedLines = [];

    for (let line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("- ")) {
        if (!inList) {
          formattedLines.push("<ul>");
          inList = true;
        }
        formattedLines.push(`<li>${trimmed.substring(2)}</li>`);
      } else {
        if (inList) {
          formattedLines.push("</ul>");
          inList = false;
        }
        if (trimmed.length > 0) {
          formattedLines.push(`<p>${line}</p>`);
        }
      }
    }
    if (inList) formattedLines.push("</ul>");

    return formattedLines.join("");
  }

  // =============================================================================
  // 5. SHADOW DOM WIDGET UI COMPONENT
  // =============================================================================
  class ArenacoreFaqWidget {
    constructor(faqData) {
      this.faqData = faqData;
      this.config = faqData.config;
      this.engine = new AnswerEngine(faqData);
      this.messages = [];
      this.isOpen = false;
      this.hasOpenedBefore = Boolean(StorageManager.safeGet(STORAGE_KEYS.HAS_OPENED));
      this.highlightedSuggestionIdx = -1;
      this.justDragged = false;
      this.windowCustomMoved = false;

      this.initDom();
      this.initEvents();
      this.initDraggableBubble();
      this.initDraggableWindow();
      this.loadPersistedChat();
      this.initTooltipTimer();
    }

    initDom() {
      // Create root host element
      this.hostEl = document.createElement("div");
      this.hostEl.id = "ac26faq-root";
      this.hostEl.style.cssText = "position:fixed;bottom:0;right:0;z-index:2147483000;pointer-events:none;";
      document.body.appendChild(this.hostEl);

      // Attach open shadow root
      this.shadow = this.hostEl.attachShadow({ mode: "open" });

      // Load fonts inside shadow root
      const fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=Unbounded:wght@700;800&display=swap";
      this.shadow.appendChild(fontLink);

      // Inject widget styles
      const styleEl = document.createElement("style");
      styleEl.textContent = WIDGET_CSS;
      this.shadow.appendChild(styleEl);

      // Main UI Wrapper
      this.wrapperEl = document.createElement("div");
      this.wrapperEl.className = "ac26faq-wrapper" + (this.hasOpenedBefore ? " has-opened" : "");
      this.wrapperEl.setAttribute("role", "region");
      this.wrapperEl.setAttribute("aria-label", "ARENACORE '26 FAQ Bot");

      // Floating Tooltip
      this.tooltipEl = document.createElement("div");
      this.tooltipEl.className = "ac26faq-tooltip";
      this.tooltipEl.innerHTML = `
        <span>👋 Hi Hacker! I'm ARENA-Bot — click me to ask anything!</span>
        <button class="ac26faq-tooltip-close" aria-label="Dismiss tooltip">&times;</button>
      `;
      this.wrapperEl.appendChild(this.tooltipEl);

      // Floating Bubble Button (Freestanding Mascot)
      this.bubbleBtn = document.createElement("button");
      this.bubbleBtn.className = "ac26faq-bubble-btn";
      this.bubbleBtn.setAttribute("aria-label", "Open ARENACORE '26 FAQ assistant");
      this.bubbleBtn.setAttribute("aria-expanded", "false");
      this.bubbleBtn.setAttribute("aria-haspopup", "dialog");
      this.bubbleBtn.innerHTML = `
        <div class="ac26faq-fab-badge"><span class="ac26faq-fab-dot"></span> ARENA-BOT</div>
        <div class="ac26faq-badge-dot"></div>
        ${ICONS.chat}
        ${ICONS.close}
      `;
      this.wrapperEl.appendChild(this.bubbleBtn);

      // Chat Window
      this.windowEl = document.createElement("div");
      this.windowEl.className = "ac26faq-window";
      this.windowEl.setAttribute("role", "dialog");
      this.windowEl.setAttribute("aria-label", "ARENACORE '26 FAQ Assistant");
      this.windowEl.setAttribute("aria-modal", "false");

      // Chat Window Inner Structure
      this.windowEl.innerHTML = `
        <!-- Toast -->
        <div class="ac26faq-toast" id="ac26Toast">Copied ✓</div>

        <!-- Header -->
        <header class="ac26faq-header" style="background: linear-gradient(135deg, #090e1a 0%, #111a2e 100%) !important;">
          <div class="ac26faq-drag-handle-pill" title="Drag to reposition chat"></div>
          <div class="ac26faq-header-left">
            <div class="ac26faq-avatar" style="background: #111a2e !important; border: 1.5px solid rgba(66, 133, 244, 0.6) !important;">
              ${AVATAR_ROBOT_SVG}
            </div>
            <div class="ac26faq-header-meta">
              <div class="ac26faq-header-title-row">
                <span class="ac26faq-header-title" style="color: #ffffff !important; -webkit-text-fill-color: #ffffff !important; font-weight: 700 !important; font-size: 1.12rem !important; text-shadow: 0 1px 3px rgba(0,0,0,0.8);">ARENA-Bot</span>
                <span class="ac26faq-online-badge" style="color: #4ade80 !important; -webkit-text-fill-color: #4ade80 !important; background: rgba(34, 197, 94, 0.2) !important; border: 1px solid rgba(74, 222, 128, 0.4) !important;">
                  <span class="ac26faq-online-dot"></span> Online
                </span>
              </div>
              <span class="ac26faq-header-subtitle" style="color: #cbd5e1 !important; -webkit-text-fill-color: #cbd5e1 !important; font-size: 0.78rem !important; font-weight: 500 !important;">ARENACORE '26 Assistant • GDG x ACM PSNA</span>
            </div>
          </div>
          <div class="ac26faq-header-actions">
            <button class="ac26faq-head-btn" id="ac26ClearBtn" title="Clear chat history" aria-label="Clear conversation" style="color: #ffffff !important;">
              ${ICONS.trash}
            </button>
            <button class="ac26faq-head-btn" id="ac26MinimizeBtn" title="Minimize chat" aria-label="Minimize FAQ assistant" style="color: #ffffff !important;">
              ${ICONS.minimize}
            </button>
            <button class="ac26faq-head-btn" id="ac26CloseBtn" title="Close" aria-label="Close FAQ assistant" style="color: #ffffff !important;">
              ${ICONS.headerClose}
            </button>
          </div>
        </header>

        <!-- Message Area -->
        <div class="ac26faq-messages" id="ac26MsgArea" aria-live="polite"></div>

        <!-- Quick Reply Chips -->
        <div class="ac26faq-chips-container" id="ac26ChipsArea"></div>

        <!-- Input Bar with Suggestions -->
        <div class="ac26faq-input-bar">
          <div class="ac26faq-suggestions" id="ac26Suggestions"></div>
          <div class="ac26faq-input-row">
            <input type="text" class="ac26faq-input-field" id="ac26InputField" placeholder="Ask a question about ARENACORE '26..." autocomplete="off" spellcheck="false" />
            <button class="ac26faq-send-btn" id="ac26SendBtn" disabled aria-label="Send query">
              ${ICONS.send}
            </button>
          </div>
          <div class="ac26faq-footer-note">
            Answers are based on official ARENACORE '26 guidelines. For anything else, contact the organizers.
          </div>
        </div>

        <!-- Confirmation Dialog (Clear Chat) -->
        <div class="ac26faq-confirm-overlay" id="ac26ConfirmModal">
          <div class="ac26faq-confirm-dialog">
            <div class="ac26faq-confirm-title">Clear conversation?</div>
            <div class="ac26faq-confirm-msg">This will remove your current chat messages and reset to the welcome state.</div>
            <div class="ac26faq-confirm-actions">
              <button class="ac26faq-confirm-btn ac26faq-confirm-cancel" id="ac26CancelClear">Cancel</button>
              <button class="ac26faq-confirm-btn ac26faq-confirm-danger" id="ac26ConfirmClear">Clear Chat</button>
            </div>
          </div>
        </div>
      `;

      this.wrapperEl.appendChild(this.windowEl);
      this.shadow.appendChild(this.wrapperEl);

      // Cache DOM references
      this.msgArea = this.shadow.getElementById("ac26MsgArea");
      this.chipsArea = this.shadow.getElementById("ac26ChipsArea");
      this.inputField = this.shadow.getElementById("ac26InputField");
      this.sendBtn = this.shadow.getElementById("ac26SendBtn");
      this.suggestionsBox = this.shadow.getElementById("ac26Suggestions");
      this.toastEl = this.shadow.getElementById("ac26Toast");
      this.confirmModal = this.shadow.getElementById("ac26ConfirmModal");
    }

    initEvents() {
      // Toggle chat via Bubble Button (guard against drag release)
      this.bubbleBtn.addEventListener("click", () => {
        if (this.justDragged) {
          this.justDragged = false;
          return;
        }
        this.toggle();
      });

      // Header buttons
      this.shadow.getElementById("ac26CloseBtn").addEventListener("click", () => this.close());
      this.shadow.getElementById("ac26MinimizeBtn").addEventListener("click", () => this.close());
      this.shadow.getElementById("ac26ClearBtn").addEventListener("click", () => this.showClearConfirm());

      // Confirm Modal buttons
      this.shadow.getElementById("ac26CancelClear").addEventListener("click", () => this.hideClearConfirm());
      this.shadow.getElementById("ac26ConfirmClear").addEventListener("click", () => {
        this.resetChat();
        this.hideClearConfirm();
      });

      // Tooltip close
      this.tooltipEl.querySelector(".ac26faq-tooltip-close").addEventListener("click", (e) => {
        e.stopPropagation();
        this.dismissTooltip();
      });

      // Input field typing & Send button state
      this.inputField.addEventListener("input", () => {
        const val = this.inputField.value.trim();
        this.sendBtn.disabled = val.length === 0;
        this.handleAutocomplete(val);
      });

      // Keyboard navigation (Enter to send, Arrows for autocomplete, Esc to close)
      this.inputField.addEventListener("keydown", (e) => {
        if (this.suggestionsBox.classList.contains("show")) {
          const items = this.suggestionsBox.querySelectorAll(".ac26faq-suggestion-item");
          if (e.key === "ArrowDown") {
            e.preventDefault();
            this.highlightedSuggestionIdx = (this.highlightedSuggestionIdx + 1) % items.length;
            this.updateSuggestionHighlight(items);
            return;
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            this.highlightedSuggestionIdx = (this.highlightedSuggestionIdx - 1 + items.length) % items.length;
            this.updateSuggestionHighlight(items);
            return;
          } else if (e.key === "Enter" && this.highlightedSuggestionIdx >= 0) {
            e.preventDefault();
            items[this.highlightedSuggestionIdx].click();
            return;
          }
        }

        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          this.handleSend();
        }
      });

      this.sendBtn.addEventListener("click", () => this.handleSend());

      // Global Keydown (Esc closes, Focus trap)
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isOpen) {
          this.close();
        }
      });

      // VisualViewport adaptation on Mobile Virtual Keyboard
      if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", () => {
          if (this.isOpen && window.innerWidth <= 640) {
            this.windowEl.style.height = `${window.visualViewport.height}px`;
            this.scrollToBottom();
          }
        });
      }
    }

    initTooltipTimer() {
      if (this.hasOpenedBefore || StorageManager.safeGet(STORAGE_KEYS.TOOLTIP_SHOWN, true)) {
        return;
      }
      setTimeout(() => {
        if (!this.isOpen && !this.hasOpenedBefore) {
          this.tooltipEl.classList.add("show");
          StorageManager.safeSet(STORAGE_KEYS.TOOLTIP_SHOWN, true, true);
        }
      }, 6000);
    }

    dismissTooltip() {
      this.tooltipEl.classList.remove("show");
    }

    showToast(message) {
      this.toastEl.textContent = message;
      this.toastEl.classList.add("show");
      setTimeout(() => {
        this.toastEl.classList.remove("show");
      }, 2000);
    }

    showClearConfirm() {
      this.confirmModal.classList.add("show");
    }

    hideClearConfirm() {
      this.confirmModal.classList.remove("show");
    }

    initDraggableBubble() {
      let isDragging = false;
      let startX = 0, startY = 0;
      let initialLeft = 0, initialTop = 0;

      const onPointerDown = (e) => {
        if (e.type === "mousedown" && e.button !== 0) return;

        const clientX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.startsWith("touch") ? e.touches[0].clientY : e.clientY;

        startX = clientX;
        startY = clientY;
        isDragging = false;

        const rect = this.wrapperEl.getBoundingClientRect();
        initialLeft = rect.left;
        initialTop = rect.top;

        if (e.type === "mousedown") {
          window.addEventListener("mousemove", onPointerMove);
          window.addEventListener("mouseup", onPointerUp);
        } else {
          window.addEventListener("touchmove", onPointerMove, { passive: false });
          window.addEventListener("touchend", onPointerUp);
          window.addEventListener("touchcancel", onPointerUp);
        }
      };

      const onPointerMove = (e) => {
        const clientX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.startsWith("touch") ? e.touches[0].clientY : e.clientY;

        const dx = clientX - startX;
        const dy = clientY - startY;

        if (!isDragging && Math.hypot(dx, dy) > 5) {
          isDragging = true;
          this.bubbleBtn.classList.add("is-dragging");
        }

        if (isDragging) {
          if (e.cancelable) e.preventDefault();

          let newLeft = initialLeft + dx;
          let newTop = initialTop + dy;

          const bubbleSize = this.bubbleBtn.offsetWidth || 66;
          const minX = 8;
          const maxX = window.innerWidth - bubbleSize - 8;
          const minY = 8;
          const isMobile = window.innerWidth <= 768;
          const maxY = window.innerHeight - bubbleSize - (isMobile ? 76 : 12);

          newLeft = Math.max(minX, Math.min(newLeft, maxX));
          newTop = Math.max(minY, Math.min(newTop, maxY));

          this.wrapperEl.style.position = "fixed";
          this.wrapperEl.style.left = `${newLeft}px`;
          this.wrapperEl.style.top = `${newTop}px`;
          this.wrapperEl.style.right = "auto";
          this.wrapperEl.style.bottom = "auto";
        }
      };

      const onPointerUp = (e) => {
        window.removeEventListener("mousemove", onPointerMove);
        window.removeEventListener("mouseup", onPointerUp);
        window.removeEventListener("touchmove", onPointerMove);
        window.removeEventListener("touchend", onPointerUp);
        window.removeEventListener("touchcancel", onPointerUp);

        if (isDragging) {
          this.bubbleBtn.classList.remove("is-dragging");
          this.justDragged = true;
          setTimeout(() => {
            this.justDragged = false;
          }, 120);

          const rect = this.wrapperEl.getBoundingClientRect();
          StorageManager.safeSet("AC26_BUBBLE_POS", {
            left: rect.left,
            top: rect.top
          });
        }
      };

      this.bubbleBtn.addEventListener("mousedown", onPointerDown);
      this.bubbleBtn.addEventListener("touchstart", onPointerDown, { passive: true });

      // Restore saved position if valid
      const savedPos = StorageManager.safeGet("AC26_BUBBLE_POS");
      if (savedPos && typeof savedPos.left === "number" && typeof savedPos.top === "number") {
        const isMobile = window.innerWidth <= 768;
        const bubbleSize = isMobile ? 60 : 66;
        const maxX = window.innerWidth - bubbleSize - 8;
        const maxY = window.innerHeight - bubbleSize - (isMobile ? 85 : 12);
        if (savedPos.left >= 8 && savedPos.left <= maxX && savedPos.top >= 8 && savedPos.top <= maxY) {
          this.wrapperEl.style.position = "fixed";
          this.wrapperEl.style.left = `${savedPos.left}px`;
          this.wrapperEl.style.top = `${savedPos.top}px`;
          this.wrapperEl.style.right = "auto";
          this.wrapperEl.style.bottom = "auto";
        }
      }

      // Automatically reset if viewport resizing or orientation changes push coordinates off-screen
      const checkAndClampPosition = () => {
        const isMobile = window.innerWidth <= 768;
        const bubbleSize = isMobile ? 60 : 66;
        const maxX = window.innerWidth - bubbleSize - 8;
        const maxY = window.innerHeight - bubbleSize - (isMobile ? 85 : 12);
        const curLeft = parseFloat(this.wrapperEl.style.left);
        const curTop = parseFloat(this.wrapperEl.style.top);

        if (!isNaN(curLeft)) {
          if (curLeft > maxX || curLeft < 4 || curTop > maxY || curTop < 4) {
            this.wrapperEl.style.position = "";
            this.wrapperEl.style.left = "";
            this.wrapperEl.style.top = "";
            this.wrapperEl.style.right = "";
            this.wrapperEl.style.bottom = "";
            StorageManager.safeSet("AC26_BUBBLE_POS", null);
          }
        }
      };

      window.addEventListener("resize", checkAndClampPosition);
      checkAndClampPosition();
    }

    initDraggableWindow() {
      const header = this.shadow.querySelector(".ac26faq-header");
      if (!header) return;

      let isDragging = false;
      let startX = 0, startY = 0;
      let initialLeft = 0, initialTop = 0;

      const onHeaderPointerDown = (e) => {
        if (e.target.closest(".ac26faq-head-btn")) return;
        if (e.type === "mousedown" && e.button !== 0) return;

        const clientX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.startsWith("touch") ? e.touches[0].clientY : e.clientY;

        startX = clientX;
        startY = clientY;
        isDragging = false;

        const rect = this.windowEl.getBoundingClientRect();
        initialLeft = rect.left;
        initialTop = rect.top;

        if (e.type === "mousedown") {
          window.addEventListener("mousemove", onHeaderPointerMove);
          window.addEventListener("mouseup", onHeaderPointerUp);
        } else {
          window.addEventListener("touchmove", onHeaderPointerMove, { passive: false });
          window.addEventListener("touchend", onHeaderPointerUp);
          window.addEventListener("touchcancel", onHeaderPointerUp);
        }
      };

      const onHeaderPointerMove = (e) => {
        const clientX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.startsWith("touch") ? e.touches[0].clientY : e.clientY;

        const dx = clientX - startX;
        const dy = clientY - startY;

        if (!isDragging && Math.hypot(dx, dy) > 5) {
          isDragging = true;
          header.classList.add("is-dragging");
          this.windowEl.style.transition = "none";
        }

        if (isDragging) {
          if (e.cancelable) e.preventDefault();

          const isMobile = window.innerWidth <= 640;
          if (isMobile) {
            // On mobile: dragging downwards allows swipe-to-dismiss gesture
            if (dy > 0) {
              this.windowEl.style.transform = `translateY(${dy}px)`;
            }
          } else {
            // On Laptop/Desktop: Full 2D Drag
            this.windowCustomMoved = true;
            const winWidth = this.windowEl.offsetWidth;
            const winHeight = this.windowEl.offsetHeight;

            let newLeft = initialLeft + dx;
            let newTop = initialTop + dy;

            newLeft = Math.max(8, Math.min(newLeft, window.innerWidth - winWidth - 8));
            newTop = Math.max(8, Math.min(newTop, window.innerHeight - winHeight - 8));

            this.windowEl.style.position = "fixed";
            this.windowEl.style.left = `${newLeft}px`;
            this.windowEl.style.top = `${newTop}px`;
            this.windowEl.style.right = "auto";
            this.windowEl.style.bottom = "auto";
          }
        }
      };

      const onHeaderPointerUp = (e) => {
        window.removeEventListener("mousemove", onHeaderPointerMove);
        window.removeEventListener("mouseup", onHeaderPointerUp);
        window.removeEventListener("touchmove", onHeaderPointerMove);
        window.removeEventListener("touchend", onHeaderPointerUp);
        window.removeEventListener("touchcancel", onHeaderPointerUp);

        if (isDragging) {
          header.classList.remove("is-dragging");
          this.windowEl.style.transition = "";

          const isMobile = window.innerWidth <= 640;
          if (isMobile) {
            const clientY = e.type.startsWith("touch") && e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
            const dy = (clientY || startY) - startY;
            if (dy > 70) {
              this.close();
              this.windowEl.style.transform = "";
            } else {
              this.windowEl.style.transform = "translateY(0)";
            }
          }
        }
      };

      header.addEventListener("mousedown", onHeaderPointerDown);
      header.addEventListener("touchstart", onHeaderPointerDown, { passive: true });
    }

    open() {
      if (this.isOpen) return;
      this.isOpen = true;
      this.wrapperEl.classList.add("is-open");
      this.bubbleBtn.setAttribute("aria-expanded", "true");
      this.dismissTooltip();

      // Check if desktop window position needs smart clamping relative to bubble
      if (window.innerWidth > 640 && !this.windowCustomMoved) {
        const wrapperRect = this.wrapperEl.getBoundingClientRect();
        const winWidth = Math.min(680, Math.max(420, window.innerWidth * 0.45));
        const winHeight = Math.min(760, window.innerHeight * 0.8);

        let winLeft = wrapperRect.right - winWidth;
        let winTop = wrapperRect.top - winHeight - 16;

        // If overflowing top or bottom, adjust safely
        if (winTop < 10) {
          winTop = Math.max(10, wrapperRect.bottom + 16);
          if (winTop + winHeight > window.innerHeight) {
            winTop = Math.max(10, window.innerHeight - winHeight - 16);
          }
        }
        if (winLeft < 10) winLeft = 10;
        if (winLeft + winWidth > window.innerWidth - 10) winLeft = window.innerWidth - winWidth - 10;

        this.windowEl.style.position = "fixed";
        this.windowEl.style.left = `${winLeft}px`;
        this.windowEl.style.top = `${winTop}px`;
        this.windowEl.style.right = "auto";
        this.windowEl.style.bottom = "auto";
      }

      if (!this.hasOpenedBefore) {
        this.hasOpenedBefore = true;
        this.wrapperEl.classList.add("has-opened");
        StorageManager.safeSet(STORAGE_KEYS.HAS_OPENED, true);
      }

      setTimeout(() => {
        this.inputField.focus();
        this.scrollToBottom();
      }, 100);

      window.dispatchEvent(new CustomEvent("ac26faq:open"));
    }

    close() {
      if (!this.isOpen) return;
      this.isOpen = false;
      this.wrapperEl.classList.remove("is-open");
      this.bubbleBtn.setAttribute("aria-expanded", "false");
      this.bubbleBtn.focus();
    }

    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    scrollToBottom() {
      this.msgArea.scrollTop = this.msgArea.scrollHeight;
    }

    // Autocomplete Handler
    handleAutocomplete(text) {
      if (!text || text.length < 2) {
        this.suggestionsBox.classList.remove("show");
        this.suggestionsBox.innerHTML = "";
        this.highlightedSuggestionIdx = -1;
        return;
      }

      const matches = this.engine.getSuggestions(text, 4);
      if (matches.length === 0) {
        this.suggestionsBox.classList.remove("show");
        this.suggestionsBox.innerHTML = "";
        this.highlightedSuggestionIdx = -1;
        return;
      }

      this.highlightedSuggestionIdx = -1;
      this.suggestionsBox.innerHTML = matches.map((m, idx) => `
        <div class="ac26faq-suggestion-item" data-id="${m.id}" data-index="${idx}">
          <span>${m.question}</span>
          <span class="ac26faq-sugg-arrow">${ICONS.arrowRight}</span>
        </div>
      `).join("");

      this.suggestionsBox.querySelectorAll(".ac26faq-suggestion-item").forEach(item => {
        item.addEventListener("click", () => {
          const entryId = item.getAttribute("data-id");
          const entry = this.engine.getEntryById(entryId);
          if (entry) {
            this.inputField.value = "";
            this.sendBtn.disabled = true;
            this.suggestionsBox.classList.remove("show");
            this.ask(entry.question);
          }
        });
      });

      this.suggestionsBox.classList.add("show");
    }

    updateSuggestionHighlight(items) {
      items.forEach((item, idx) => {
        if (idx === this.highlightedSuggestionIdx) {
          item.classList.add("highlighted");
          item.scrollIntoView({ block: "nearest" });
        } else {
          item.classList.remove("highlighted");
        }
      });
    }

    // Chat History & Persistence
    loadPersistedChat() {
      const saved = StorageManager.safeGet(STORAGE_KEYS.SESSION, true);
      if (saved && Array.isArray(saved) && saved.length > 0) {
        this.messages = saved;
        this.renderAllMessages();
      } else {
        this.renderWelcomeState();
      }
    }

    saveChatSession() {
      StorageManager.safeSet(STORAGE_KEYS.SESSION, this.messages, true);
    }

    resetChat() {
      this.messages = [];
      StorageManager.safeSet(STORAGE_KEYS.SESSION, [], true);
      this.msgArea.innerHTML = "";
      this.renderWelcomeState();
      this.showToast("Conversation cleared");
    }

    // Welcome State Rendering
    renderWelcomeState() {
      this.msgArea.innerHTML = "";

      const welcomeEl = document.createElement("div");
      welcomeEl.className = "ac26faq-welcome-box";
      welcomeEl.innerHTML = `
        <div class="ac26faq-welcome-header">Hey hacker! 👋 I'm ARENA-Bot.</div>
        <div class="ac26faq-welcome-text">
          I can answer anything about registration, fees, team rules, schedule, themes, UN SDGs, judging, and prizes for <strong>ARENACORE '26</strong>.
        </div>
        <div class="ac26faq-category-grid">
          ${this.faqData.categories.map(c => `
            <div class="ac26faq-cat-card" data-cat="${c.id}">
              <div class="ac26faq-cat-emoji">${c.emoji}</div>
              <div class="ac26faq-cat-info">
                <span class="ac26faq-cat-name">${c.name}</span>
                <span class="ac26faq-cat-desc">${c.description}</span>
              </div>
            </div>
          `).join("")}
        </div>
      `;

      welcomeEl.querySelectorAll(".ac26faq-cat-card").forEach(card => {
        card.addEventListener("click", () => {
          const catId = card.getAttribute("data-cat");
          this.handleCategoryClick(catId);
        });
      });

      this.msgArea.appendChild(welcomeEl);
      this.renderPersistentChips();
      this.scrollToBottom();
    }

    renderPersistentChips() {
      const defaultChips = [
        "How do I register?",
        "What is the fee?",
        "Registration deadline?",
        "Required team size?",
        "Cash prizes?",
        "Bonafide letter 📄",
        "Who to contact?"
      ];
      this.setChips(defaultChips);
    }

    setChips(chipTexts) {
      this.chipsArea.innerHTML = "";
      chipTexts.forEach(text => {
        const chip = document.createElement("button");
        chip.className = "ac26faq-chip";
        chip.textContent = text;
        chip.addEventListener("click", () => {
          this.ask(text);
        });
        this.chipsArea.appendChild(chip);
      });
    }

    handleCategoryClick(catId) {
      const entries = this.engine.getEntriesByCategory(catId).slice(0, 5);
      const cat = this.faqData.categories.find(c => c.id === catId);
      const catTitle = cat ? `${cat.emoji} ${cat.name}` : catId;

      this.appendBotMessage({
        text: `Here are popular questions under **${catTitle}**:`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      });

      this.setChips(entries.map(e => e.question));
    }

    // Message Rendering Pipeline
    renderAllMessages() {
      this.msgArea.innerHTML = "";
      this.messages.forEach(msg => {
        if (msg.sender === "user") {
          this.appendUserMessageDom(msg);
        } else {
          this.appendBotMessageDom(msg);
        }
      });
      this.renderPersistentChips();
      this.scrollToBottom();
    }

    appendUserMessage(text) {
      const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const msg = { sender: "user", text, time };
      this.messages.push(msg);
      this.saveChatSession();
      this.appendUserMessageDom(msg);
      this.scrollToBottom();
    }

    appendUserMessageDom(msg) {
      const el = document.createElement("div");
      el.className = "ac26faq-msg ac26faq-msg-user";
      el.innerHTML = `
        <div class="ac26faq-msg-body">
          <div class="ac26faq-msg-bubble">
            <p>${msg.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
          <div class="ac26faq-msg-meta">
            <span>${msg.time}</span>
          </div>
        </div>
      `;
      this.msgArea.appendChild(el);
    }

    appendBotMessage(msgData) {
      this.messages.push({ sender: "bot", ...msgData });
      this.saveChatSession();
      this.appendBotMessageDom(msgData);
      this.scrollToBottom();
    }

    appendBotMessageDom(msg) {
      const el = document.createElement("div");
      el.className = "ac26faq-msg ac26faq-msg-bot";

      let actionsHtml = "";
      if (msg.actions && Array.isArray(msg.actions) && msg.actions.length > 0) {
        actionsHtml = `
          <div class="ac26faq-action-row">
            ${msg.actions.map(act => {
              let icon = ICONS.external;
              if (act.type === "tel") icon = ICONS.phone;
              if (act.type === "email") icon = ICONS.email;
              if (act.type === "copy") icon = ICONS.copy;
              if (act.type === "contact") icon = ICONS.phone;
              return `<button class="ac26faq-action-btn" data-act-type="${act.type}" data-act-target="${act.target || ""}" data-act-url="${act.url || ""}">${icon} ${act.label}</button>`;
            }).join("")}
          </div>
        `;
      }

      let contactCardHtml = "";
      if (msg.showContactCard) {
        contactCardHtml = `
          <div class="ac26faq-contact-card">
            <div class="ac26faq-contact-card-title">📞 Connect with Student Organizers</div>
            <div class="ac26faq-contact-card-list">
              ${this.config.studentLeads.map(lead => `
                <div class="ac26faq-contact-lead-item">
                  <div>
                    <div class="ac26faq-lead-name">${lead.name}</div>
                    <div class="ac26faq-lead-role">${lead.role}</div>
                  </div>
                  <div class="ac26faq-lead-actions">
                    <a href="tel:${lead.phone}" class="ac26faq-lead-btn">Call</a>
                    <a href="${lead.whatsapp}" target="_blank" rel="noopener noreferrer" class="ac26faq-lead-btn">WhatsApp</a>
                  </div>
                </div>
              `).join("")}
              <div class="ac26faq-contact-lead-item">
                <div>
                  <div class="ac26faq-lead-name">GDG On Campus Email</div>
                  <div class="ac26faq-lead-role">${this.config.officialEmail || "gdgpsna@psnacet.edu.in"}</div>
                </div>
                <div class="ac26faq-lead-actions">
                  <a href="mailto:${this.config.officialEmail || "gdgpsna@psnacet.edu.in"}" class="ac26faq-lead-btn">Email</a>
                </div>
              </div>
              <div class="ac26faq-contact-lead-item">
                <div>
                  <div class="ac26faq-lead-name">ACM Student Chapter Email</div>
                  <div class="ac26faq-lead-role">${(this.config.contacts && this.config.contacts.emails && this.config.contacts.emails.acm) || this.config.acmEmail || "acmstudentchapter@psnacet.edu.in"}</div>
                </div>
                <div class="ac26faq-lead-actions">
                  <a href="mailto:${(this.config.contacts && this.config.contacts.emails && this.config.contacts.emails.acm) || this.config.acmEmail || "acmstudentchapter@psnacet.edu.in"}" class="ac26faq-lead-btn">Email</a>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      el.innerHTML = `
        <div class="ac26faq-msg-avatar">
          ${GDG_LOGO_SVG}
        </div>
        <div class="ac26faq-msg-body">
          <div class="ac26faq-msg-bubble">
            ${safeRenderMarkdown(msg.text)}
            ${actionsHtml}
            ${contactCardHtml}
          </div>
          <div class="ac26faq-msg-meta">
            <span>${msg.time || ""}</span>
            <div class="ac26faq-bubble-actions">
              <button class="ac26faq-copy-btn" title="Copy answer" aria-label="Copy answer">${ICONS.copy} Copy</button>
              <button class="ac26faq-feedback-btn ac26faq-up" title="Helpful" aria-label="Mark helpful">${ICONS.thumbUp}</button>
              <button class="ac26faq-feedback-btn ac26faq-down" title="Not helpful" aria-label="Mark unhelpful">${ICONS.thumbDown}</button>
            </div>
          </div>
        </div>
      `;

      // Copy Answer event
      const copyBtn = el.querySelector(".ac26faq-copy-btn");
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(msg.text).then(() => {
          this.showToast("Copied ✓");
        });
      });

      // Feedback events
      const upBtn = el.querySelector(".ac26faq-up");
      const downBtn = el.querySelector(".ac26faq-down");
      upBtn.addEventListener("click", () => {
        upBtn.classList.add("active");
        downBtn.classList.remove("active");
        this.recordFeedback(msg.id || "general", true);
        this.showToast("Thanks for your feedback! 👍");
      });
      downBtn.addEventListener("click", () => {
        downBtn.classList.add("active");
        upBtn.classList.remove("active");
        this.recordFeedback(msg.id || "general", false);
        this.setChips(["Contact organizers", "How do I register?", "What is the fee?"]);
        this.showToast("Feedback received. Contact organizers if needed! 👎");
      });

      // Action button dispatchers
      el.querySelectorAll(".ac26faq-action-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const type = btn.getAttribute("data-act-type");
          const target = btn.getAttribute("data-act-target");
          const url = btn.getAttribute("data-act-url");
          this.handleActionButton(type, target, url);
        });
      });

      this.msgArea.appendChild(el);
    }

    recordFeedback(entryId, isPositive) {
      const feedback = StorageManager.safeGet(STORAGE_KEYS.FEEDBACK) || {};
      feedback[entryId] = {
        rating: isPositive ? "up" : "down",
        timestamp: new Date().toISOString()
      };
      StorageManager.safeSet(STORAGE_KEYS.FEEDBACK, feedback);
    }

    handleActionButton(type, target, url) {
      if (type === "scrollOrUrl") {
        if (target && target.startsWith("#")) {
          const elem = document.querySelector(target);
          if (elem) {
            this.close();
            elem.scrollIntoView({ behavior: "smooth" });
            return;
          }
        }
        if (url) {
          window.open(url, "_blank", "noopener,noreferrer");
          return;
        }
      } else if (type === "url") {
        const linkUrl = url || target;
        if (linkUrl) {
          window.open(linkUrl, "_blank", "noopener,noreferrer");
          const bUrl = this.config.links && this.config.links.bonafideUrl;
          const bDlUrl = this.config.links && this.config.links.bonafideDownloadUrl;
          if (linkUrl === bUrl || linkUrl === bDlUrl) {
            window.dispatchEvent(new CustomEvent("ac26faq:bonafide-link-click", { detail: { url: linkUrl } }));
          }
        }
      } else if (type === "copy") {
        const textToCopy = url || target;
        if (textToCopy && navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            this.showToast("Copied ✓");
          }).catch(() => {
            this.showToast("Copied ✓");
          });
        } else if (textToCopy) {
          const tempInput = document.createElement("input");
          tempInput.value = textToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          try { document.execCommand("copy"); } catch (e) {}
          document.body.removeChild(tempInput);
          this.showToast("Copied ✓");
        }
      } else if (type === "contact") {
        this.handleCommand("/contact");
      } else if (type === "tel") {
        window.location.href = target;
      } else if (type === "email") {
        window.location.href = target;
      }
    }

    // Typing Indicator Display
    showTypingIndicator() {
      const typingEl = document.createElement("div");
      typingEl.className = "ac26faq-msg ac26faq-msg-bot ac26faq-typing-row";
      typingEl.innerHTML = `
        <div class="ac26faq-msg-avatar">
          ${GDG_LOGO_SVG}
        </div>
        <div class="ac26faq-msg-body">
          <div class="ac26faq-msg-bubble">
            <div class="ac26faq-typing-indicator">
              <span class="ac26faq-typing-dot"></span>
              <span class="ac26faq-typing-dot"></span>
              <span class="ac26faq-typing-dot"></span>
            </div>
          </div>
        </div>
      `;
      this.msgArea.appendChild(typingEl);
      this.scrollToBottom();
      return typingEl;
    }

    // Command handling (/export, /help, /reset, /contact, /bonafide)
    handleCommand(cmd) {
      const lower = cmd.toLowerCase().trim();
      if (lower === "/export") {
        StorageManager.exportUnansweredJSON();
        this.appendBotMessage({
          text: "📂 **Unanswered questions exported!** Download has started. Organizers can review this JSON to improve the knowledge base.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        });
        return true;
      } else if (lower === "/bonafide") {
        const entry = (this.faqData.entries || []).find(e => e.id === "bonafide-letter");
        if (entry) {
          this.appendBotMessage({
            id: entry.id,
            text: entry.answer,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            actions: entry.actions,
            related: entry.related
          });
        }
        return true;
      } else if (lower === "/help") {
        this.appendBotMessage({
          text: "🛠️ **Available Commands**:\n- `/bonafide`: Get official Bonafide / Consent Letter link\n- `/export`: Download logged unanswered questions (JSON)\n- `/contact`: Show student organizer contact details\n- `/reset`: Clear chat and restore welcome screen\n- `/help`: Display this command reference",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        });
        return true;
      } else if (lower === "/reset") {
        this.resetChat();
        return true;
      } else if (lower === "/contact") {
        this.appendBotMessage({
          text: "Here is the direct contact directory for our student coordinators and Department of IT steering committee:",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          showContactCard: true
        });
        return true;
      }
      return false;
    }

    // Main Query Execution Flow
    ask(text) {
      if (!text || typeof text !== "string") return;
      const clean = text.trim();
      if (!clean) return;

      this.open();
      this.suggestionsBox.classList.remove("show");

      // Check for Slash Commands
      if (clean.startsWith("/")) {
        this.appendUserMessage(clean);
        if (this.handleCommand(clean)) {
          return;
        }
      }

      this.appendUserMessage(clean);

      // Dispatch analytics event
      window.dispatchEvent(new CustomEvent("ac26faq:question", { detail: { query: clean } }));

      // Show typing indicator
      const typingEl = this.showTypingIndicator();

      // Natural response delay (400 - 650 ms)
      const delay = Math.floor(Math.random() * 250) + 400;

      setTimeout(() => {
        typingEl.remove();

        const result = this.engine.query(clean);

        if (result.confidence === "low") {
          // Log unanswered question
          StorageManager.logUnanswered(clean);

          this.appendBotMessage({
            id: "unanswered",
            text: result.answer,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            showContactCard: result.showContactCard
          });

          // Present closest matching chips
          if (result.closest && result.closest.length > 0) {
            this.setChips(result.closest.map(c => c.question));
          } else {
            this.renderPersistentChips();
          }
        } else {
          this.appendBotMessage({
            id: result.entry ? result.entry.id : "resp",
            text: result.answer,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            actions: result.actions || [],
            showContactCard: result.showContactCard
          });

          // Populate Related Questions Chips
          if (result.related && result.related.length > 0) {
            const relatedQuestions = result.related
              .map(id => this.engine.getEntryById(id))
              .filter(Boolean)
              .map(e => e.question);
            if (relatedQuestions.length > 0) {
              this.setChips(relatedQuestions);
            } else {
              this.renderPersistentChips();
            }
          } else {
            this.renderPersistentChips();
          }
        }
      }, delay);
    }

    handleSend() {
      const text = this.inputField.value;
      this.inputField.value = "";
      this.sendBtn.disabled = true;
      this.ask(text);
    }
  }

  // =============================================================================
  // 6. INITIALIZATION & GLOBAL API EXPOSURE
  // =============================================================================
  let widgetInstance = null;

  function initBot() {
    ensureKnowledgeBaseLoaded((faqData) => {
      widgetInstance = new ArenacoreFaqWidget(faqData);

      // Expose clean public API on window
      window.ARENACORE_FAQBOT = {
        open: () => widgetInstance && widgetInstance.open(),
        close: () => widgetInstance && widgetInstance.close(),
        toggle: () => widgetInstance && widgetInstance.toggle(),
        ask: (text) => widgetInstance && widgetInstance.ask(text),
        reset: () => widgetInstance && widgetInstance.resetChat(),
        exportUnanswered: () => StorageManager.exportUnansweredJSON(),
        getEngine: () => widgetInstance && widgetInstance.engine
      };

      // Shorthand helpers for direct HTML onclick handlers
      window.ac26ToggleChat = () => widgetInstance && widgetInstance.toggle();
      window.ac26OpenChat = () => widgetInstance && widgetInstance.open();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBot);
  } else {
    initBot();
  }

})();
