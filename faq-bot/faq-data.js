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
    registrationDeadline: "2026-10-12T23:59:59+05:30",
    hackathonStartDate: "2026-10-27T08:30:00+05:30",
    hackingTimerStart: "2026-10-27T11:00:00+05:30",
    codeFreezeDate: "2026-10-28T11:00:00+05:30",
    hackathonEndDate: "2026-10-28T16:30:00+05:30",
    
    // Team & Fee Structure
    requiredMembers: 4,
    feePerMember: 500,
    totalTeamFee: 2000,
    shortlistedTeamsCount: 60,
    
    // Prize Pool
    totalPrizePool: "₹1,20,000",
    firstPrize: "Grand Champion Award",
    secondPrize: "Runner-Up Award",
    
    // Official URLs & Contacts
    googleFormUrl: "https://forms.gle/ir6Dbnn6GTzWCX6v7",
    officialEmail: "gdscpsna@psnacet.edu.in",
    collegeEmail: "contact@psnacet.edu.in",
    collegePhone: "0451-2554411 / 2554032",
    collegeWebsite: "https://www.psnacet.edu.in",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=PSNA+College+of+Engineering+and+Technology+Dindigul",
    pitchDeckUrl: "https://docs.google.com/presentation/",
    
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
      },
      {
        name: "Dhanush Pandi S",
        role: "GDG Multimedia Director",
        phone: "+918248603031",
        displayPhone: "+91 82486 03031",
        whatsapp: "https://wa.me/918248603031"
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
      answer: "The registration deadline is **12 October 2026 (end of day, 11:59 PM IST)**. Late submissions will not be accepted, so ensure your Team Leader submits the form early!",
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
      answer: "The deadline is **12 October 2026 (11:59 PM IST)**. You can check the live countdown on our home page or submit your team registration now before slots fill up!",
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
      answer: "The registration form requires:\n- **Team Information**: Unique Team Name, College/University, Theme/UN SDG Track, and Project Title/Concept Summary.\n- **Team Leader**: Full Name, Official Email, WhatsApp Phone, and optional GitHub/Portfolio.\n- **Team Members**: Names, Emails, and College details for all 4 squad members.",
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
      answer: "Only the **Team Leader** submits the registration form on behalf of the entire 4-member squad. The Team Leader serves as the single point of contact for all announcements, shortlist notifications, and payment instructions.",
      keywords: ["who submits", "team leader", "individual registration", "each member", "point of contact"],
      synonyms: ["should all 4 register", "leader only", "single registration"],
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
      answer: "Our expert jury reviews all submitted project concepts based on innovation, technical viability, and UN SDG alignment. The **selected teams (10 teams per theme)** will be shortlisted and receive an official confirmation email from `gdscpsna@psnacet.edu.in` with the payment link and physical hackathon invite.",
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
      answer: "Minor corrections (such as fixing a typo in an email or phone number) can be requested by emailing `gdscpsna@psnacet.edu.in` with your registered Team Name and Team Leader details before the 21 October deadline.",
      keywords: ["edit registration", "update details", "change form", "modify submission", "mistake"],
      synonyms: ["correction", "change team details", "edit form"],
      related: ["contact-email", "reg-deadline"]
    },
    {
      id: "reg-confirmation",
      category: "reg",
      question: "Will I receive an email confirmation after submitting the form?",
      answer: "Yes, Google Forms automatically records your submission. Once Round 1 evaluations conclude, official shortlist confirmation emails will be sent out exclusively from `gdscpsna@psnacet.edu.in`.",
      keywords: ["email confirmation", "acknowledgement", "submission confirmation", "did you receive"],
      synonyms: ["mail vanthucha", "confirmation mail"],
      related: ["reg-status", "fee-email-source"]
    },
    {
      id: "reg-after-deadline",
      category: "reg",
      question: "Can I register after the 12 October 2026 deadline?",
      answer: "No. The registration portal closes strictly on **12 October 2026 at 11:59 PM IST**. To maintain a fair evaluation timeline for the jury, late entries cannot be accommodated.",
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
      answer: "If the link does not open or gives an error, try opening it in Google Chrome or an incognito tab, or ensure you are signed into your Google account. You can also copy the direct link or contact our organizers at `gdscpsna@psnacet.edu.in`.",
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
      answer: "The registration fee is **₹500 per member**, which equals **₹2,000 for the entire 4-member squad**. Remember: **Do NOT pay anything now!** Payment is required ONLY after your team is officially shortlisted.",
      keywords: ["fee", "registration fee", "amount", "cost", "price", "how much", "charges"],
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
      answer: "⚠️ **Do NOT pay any fee during initial Round 1 submission!** After our evaluation committee reviews all entries, the shortlisted **selected teams (10 teams per theme)** will receive an official confirmation email containing the secure payment link.",
      keywords: ["when to pay", "payment timing", "when do we pay", "pay now", "payment date"],
      synonyms: ["eppa pay pannanum", "ippove panam kattanuma", "payment deadline"],
      related: ["fee-amount", "reg-shortlist", "fee-email-source"]
    },
    {
      id: "fee-initial-free",
      category: "fee",
      question: "Is initial registration free of cost?",
      answer: "Yes! Submitting your team application and project concept for **Round 1 evaluation is 100% free**. You only pay the ₹500/member fee if your squad qualifies for the Top 30 offline finalists.",
      keywords: ["free registration", "is registration free", "is it free", "zero cost", "apply for free", "no charge", "registration free"],
      synonyms: ["is registration free", "is registering free", "free ah", "initial payment free", "application fee", "cost to register"],
      related: ["fee-amount", "fee-when-pay"]
    },
    {
      id: "fee-per-team",
      category: "fee",
      question: "What is the total fee for a 4-member team?",
      answer: "The total fee is **₹2,000 per team** (calculated as ₹500 × 4 members = ₹2,000). This covers full 24-hour food, snacks, high-speed Wi-Fi, mentorship, certificates, and swag kits.",
      keywords: ["team fee", "total fee", "600", "total amount", "cost for 4"],
      synonyms: ["full team cost", "squad fee"],
      related: ["fee-amount", "fee-inclusion"]
    },
    {
      id: "fee-how-pay",
      category: "fee",
      question: "How do we pay the fee / what payment modes are supported?",
      answer: "Shortlisted teams will receive a secure payment gateway link via their official confirmation email. Supported modes include **UPI (Google Pay, PhonePe, Paytm), Net Banking, and Debit/Credit cards**.",
      keywords: ["how to pay", "payment methods", "upi", "gpay", "phonepe", "net banking", "card"],
      synonyms: ["payment link", "epdi pay panrathu", "payment mode"],
      related: ["fee-when-pay", "fee-email-source"]
    },
    {
      id: "fee-email-source",
      category: "fee",
      question: "Which email address will send the official payment link?",
      answer: "Official shortlist notifications and payment links will arrive **ONLY from `gdscpsna@psnacet.edu.in`**. Always verify the sender address to protect yourself from phishing or unauthorized requests.",
      keywords: ["official email", "payment email", "gdscpsna@psnacet.edu.in", "scam alert", "sender"],
      synonyms: ["which email", "mail address", "genuine mail"],
      related: ["contact-email", "fee-when-pay"]
    },
    {
      id: "fee-inclusion",
      category: "fee",
      question: "What does the ₹500 registration fee include?",
      answer: "The ₹500 fee per person provides:\n- 🍽️ **Full Meals**: Breakfast, Lunch, and Dinner.\n- ☕ **Continuous Refreshments**: Midnight snacks, tea, and coffee throughout 24 hours.\n- 🌐 **1 Gbps Optical Wi-Fi** & lab desktop compute access.\n- 📜 **Official GDG & ACM Certificates**.\n- 🎁 **Hacker Swag Kits** & cloud credits.",
      keywords: ["fee inclusion", "what is included", "food included", "perks", "benefits", "what do we get"],
      synonyms: ["food kedaikuma", "sapadu iruka", "amenities included"],
      related: ["venue-food", "venue-wifi"]
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
      question: "Can members pay individually or does the Team Leader pay for all 4?",
      answer: "The Team Leader should complete the consolidated payment of ₹2,000 for all 4 squad members using the official link received in the shortlist email to ensure hassle-free team verification.",
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
      answer: "ARENACORE '26 registration fee oru member-ku **₹500** (team-ku ₹2,000 total). Round 1 selection confirmation email (`gdscpsna@psnacet.edu.in`) vantha piragu thaan pay pannanum!",
      keywords: ["evalo fees", "evlo fees", "ethanai ruba", "tamil fee", "tanglish fee"],
      synonyms: ["fee details in tamil", "panam"],
      related: ["fee-amount", "fee-when-pay"]
    },
    {
      id: "fee-deadline",
      category: "fee",
      question: "What is the deadline to pay the registration fee after shortlisting?",
      answer: "Shortlisted teams will receive a specific payment window (typically 48–72 hours from the date of the shortlist email) to confirm their seat. Failure to pay within that window releases the seat to waitlisted teams.",
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
      answer: "Teams must **strictly consist of exactly 4 members**. Solo participation or teams of 2, 3, or 5 are not permitted to ensure balanced team dynamics and collaborative innovation.",
      keywords: ["team size", "how many members", "squad size", "4 members", "member count", "team size evlo"],
      synonyms: ["team size evlo", "team size ethanai", "ethana peru", "ethanai members", "team-la ethana peru", "group size"],
      related: ["team-solo", "team-size-3-or-5"],
      actions: [
        { label: "Check Team Rules", type: "scrollOrUrl", target: "#guidelines" }
      ]
    },
    {
      id: "team-solo",
      category: "teams",
      question: "Can I participate solo / individually in ARENACORE '26?",
      answer: "No. **Solo participation is strictly not permitted** for ARENACORE '26. You must form a 4-member squad. We encourage teaming up with classmates, department peers, or friends from other institutions!",
      keywords: ["solo", "participate solo", "individual", "alone", "single participant"],
      synonyms: ["thaniya participate panlama", "can i join alone", "one person"],
      related: ["team-size", "team-inter-college"]
    },
    {
      id: "team-size-3-or-5",
      category: "teams",
      question: "Can we participate with 2, 3, or 5 members?",
      answer: "No. The guidelines mandate **strictly 4 members per team**. If you currently have 2 or 3 members, please invite another eligible student to complete your 4-member squad before submitting.",
      keywords: ["3 members", "5 members", "2 members", "team of 3", "team of 5"],
      synonyms: ["can we be 3", "can we be 5", "three people allowed"],
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
      answer: "Undergraduate (UG) and Postgraduate (PG) engineering and technology students from any recognized university, institute, or college across India are eligible to participate.",
      keywords: ["eligibility", "who can participate", "eligible", "ug pg", "engineering students"],
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
      answer: "If an emergency arises, the Team Leader must write to `gdscpsna@psnacet.edu.in` with full details of the outgoing and incoming member before check-in. Replacements are subject to steering committee approval.",
      keywords: ["change member", "swap member", "replace member", "member change", "substitute"],
      synonyms: ["member mathalama", "replace person"],
      related: ["contact-email", "team-size"]
    },
    {
      id: "team-non-students",
      category: "teams",
      question: "Can working professionals, freelancers, or alumni participate?",
      answer: "No. ARENACORE '26 is exclusively a collegiate hackathon. All participants must be active, enrolled undergraduate or postgraduate students at the time of the event.",
      keywords: ["working professionals", "alumni", "freelancers", "graduated", "non-students"],
      synonyms: ["college mudichavanga", "job holders", "can passouts join"],
      related: ["team-eligibility", "team-id-card"]
    },
    {
      id: "team-tanglish-ethana",
      category: "teams",
      question: "Team-la ethanai peru irukanum? / How many in a team?",
      answer: "ARENACORE '26 rules-padi **strictly 4 members** irukanum. Solo participation allow kidayathu. Inter-college teams kooda create pannalam!",
      keywords: ["ethana peru irukanum", "tamil team size", "tanglish team"],
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
      answer: "ARENACORE '26 takes place on **27 & 27 October 2026 (24 hours non-stop)** at **PSNA College of Engineering and Technology, Dindigul, Tamil Nadu**. Reporting is at 08:30 AM on Day 1 at the IT Auditorium.",
      keywords: ["dates", "when is hackathon", "venue", "where is it", "timing", "location", "eppo date"],
      synonyms: ["eppo date", "eppa date", "date eppo", "eppa hackathon", "enga nadakum", "hackathon date", "when will it happen"],
      related: ["venue-schedule-day1", "venue-location"],
      actions: [
        { label: "See Schedule", type: "scrollOrUrl", target: "#schedule" },
        { label: "Open in Maps", type: "url", url: ARENACORE_CONFIG.mapsUrl }
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
        { label: "Open in Google Maps", type: "url", url: ARENACORE_CONFIG.mapsUrl }
      ]
    },
    {
      id: "venue-reporting-time",
      category: "venue",
      question: "What is the reporting time on Day 1 (27 October 2026)?",
      answer: "Reporting begins at **08:30 AM on Day 1 (27 October 2026)** at the IT Auditorium for participant check-in, physical badge collection, Wi-Fi setup, and welcome breakfast.",
      keywords: ["reporting time", "check in time", "arrival time", "when to arrive", "day 1 time"],
      synonyms: ["eppa varanum", "morning time", "checkin"],
      related: ["venue-schedule-day1", "team-id-card"]
    },
    {
      id: "venue-schedule-day1",
      category: "venue",
      question: "What is the detailed schedule for Day 1 (27 October 2026)?",
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
      question: "What is the detailed schedule for Day 2 (28 October 2026)?",
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
      answer: "Yes! Full catering is provided inside PSNACET campus for all registered participants:\n- 🍳 **Day 1**: Breakfast, Lunch, Dinner\n- 🍕 **Midnight**: Midnight snacks & jam refreshments\n- ☕ **Continuous**: Tea, coffee, and energy drinks 24/7\n- 🥪 **Day 2**: Breakfast & Lunch",
      keywords: ["food", "meals", "snacks", "dinner", "lunch", "breakfast", "coffee", "tea"],
      synonyms: ["sapadu iruka", "food provided", "catered meals", "refreshments"],
      related: ["fee-inclusion", "venue-dates"]
    },
    {
      id: "venue-accommodation",
      category: "venue",
      question: "Is accommodation or stay provided for outstation teams?",
      answer: "Dedicated resting zones inside the campus are provided throughout the 24-hour sprint. Specific overnight hostel rooms or early check-in slots have not been published yet. Please contact the student organizing leads for special accommodation inquiries.",
      keywords: ["accommodation", "stay", "hostel", "sleeping arrangement", "outstation", "night stay"],
      synonyms: ["thanga edam iruka", "room kedaikuma", "hotel", "dormitory"],
      related: ["contact-leads", "venue-dates"]
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
      answer: "PSNACET is situated on the **Dindigul–Palani Highway**, approximately 12 km from Dindigul Central Bus Stand and Dindigul Junction Railway Station. Government & private buses towards Palani/Ottanchathiram stop right in front of the college gate. Auto-rickshaws and taxis are readily available.",
      keywords: ["how to reach", "travel", "transport", "bus stand", "railway station", "directions"],
      synonyms: ["epdi varanum", "route", "bus route"],
      related: ["venue-location"],
      actions: [
        { label: "Open in Google Maps", type: "url", url: ARENACORE_CONFIG.mapsUrl }
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
      answer: "The hackathon officially concludes around **04:30 PM on Day 2 (28 October 2026)**, following the Grand Jury Stage Presentations, Valedictory Ceremony, and Prize Distribution.",
      keywords: ["when does it end", "finish time", "closing time", "departure time"],
      synonyms: ["eppa mudiyum", "end time", "valedictory time"],
      related: ["venue-schedule-day2", "prizes-first"]
    },
    {
      id: "venue-today",
      category: "venue",
      question: "What is happening today at ARENACORE '26?",
      answer: "You can check our real-time schedule and countdown. The 24-hour hackathon runs on **27 & 27 October 2026**. If today is during event days, reporting is at the IT Auditorium and coding is live in IT labs!",
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
      answer: "The code freeze occurs strictly at **11:00 AM on Day 2 (28 October 2026)**. At that moment, GitHub repositories must be locked, and your 3-minute demo video and presentation slides must be submitted to the portal.",
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
      answer: "The total prize pool is **₹1,20,000 cash**, plus trophies, merit certificates, official Google & ACM tech kits, startup incubation opportunities, and Google Cloud credits!",
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
      answer: "The official **10-slide Google Slides pitch deck template** is tailored directly to the 100-point rubric (Concept, Architecture, Demo, and SDG Impact). You can open and clone it from the starter kits section on the website.",
      keywords: ["pitch deck", "slides template", "google slides", "10 slides", "presentation template"],
      synonyms: ["ppt template", "slide deck"],
      related: ["prizes-judging-criteria", "rules-starter-kits"]
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
      answer: "Our direct student organizing leads are:\n- 📞 **Chitharthaa A** (GDG Campus Organiser): `+91 86820 67304`\n- 📞 **Darshan S** (ACM Chair): `+91 93455 30457`\n- 📞 **Dhanush Pandi S** (GDG Multimedia Director): `+91 82486 03031`",
      keywords: ["contact leads", "student coordinators", "phone numbers", "who to call", "organizers"],
      synonyms: ["yarai contact panrathu", "phone number", "student leads"],
      related: ["contact-email", "contact-chitharthaa"],
      actions: [
        { label: "Call Chitharthaa", type: "tel", target: "tel:+918682067304" },
        { label: "Call Darshan", type: "tel", target: "tel:+919345530457" },
        { label: "Call Dhanush", type: "tel", target: "tel:+918248603031" }
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
      related: ["contact-leads", "contact-dhanush"],
      actions: [
        { label: "Call Darshan", type: "tel", target: "tel:+919345530457" },
        { label: "WhatsApp Darshan", type: "url", url: "https://wa.me/919345530457" }
      ]
    },
    {
      id: "contact-dhanush",
      category: "contact",
      question: "How do I reach Dhanush Pandi S (GDG Multimedia Director)?",
      answer: "**Dhanush Pandi S** is the GDG Multimedia Director. You can contact him at **+91 82486 03031** for website, hacker pass, and media support.",
      keywords: ["dhanush", "dhanush pandi", "multimedia director", "dhanush contact"],
      synonyms: ["dhanush phone number", "media lead"],
      related: ["contact-leads", "contact-chitharthaa"],
      actions: [
        { label: "Call Dhanush", type: "tel", target: "tel:+918248603031" },
        { label: "WhatsApp Dhanush", type: "url", url: "https://wa.me/918248603031" }
      ]
    },
    {
      id: "contact-email",
      category: "contact",
      question: "What is the official email address for hackathon queries?",
      answer: "For all official communications, shortlist questions, and payment queries, email **`gdscpsna@psnacet.edu.in`**. You can also reach the general college desk at `contact@psnacet.edu.in`.",
      keywords: ["email", "official email", "gdscpsna@psnacet.edu.in", "contact email", "support email"],
      synonyms: ["mail id", "organizer email"],
      related: ["contact-leads", "contact-college-phone"],
      actions: [
        { label: "Email Organizers", type: "email", target: "mailto:gdscpsna@psnacet.edu.in" }
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
      answer: "Sponsors, industry partners, and prospective mentors can connect directly with HOD Dr. A. Vincent Antony Kumar or write to `gdscpsna@psnacet.edu.in` with your proposal.",
      keywords: ["sponsorship", "partner", "sponsor hackathon", "mentor inquiry", "company contact"],
      synonyms: ["become sponsor", "brand tie-up"],
      related: ["contact-email", "contact-faculty"],
      actions: [
        { label: "Email for Partnership", type: "email", target: "mailto:gdscpsna@psnacet.edu.in" }
      ]
    },
    {
      id: "contact-reply-time",
      category: "contact",
      question: "How quickly do the organizers respond to emails?",
      answer: "Our team actively monitors `gdscpsna@psnacet.edu.in` during working hours and responds promptly. For urgent matters, feel free to call our student coordinators directly.",
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
