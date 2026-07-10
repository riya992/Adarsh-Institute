export interface CourseBrief {
  id: string;
  name: string;
  description: string;
}

export interface CourseCategory {
  id: string;
  title: string;
  description: string;
  iconId: string;
  courses: CourseBrief[];
  subGroups?: { name: string; courses: CourseBrief[] }[];
}

export interface CourseDetail {
  name: string;
  tagline: string;
  introduction: string;
  about: string;
  duration: string;
  eligibility: string[];
  highlights: string[];
  careerOpportunities: string[];
  faqs: { question: string; answer: string }[];
}

export const CATEGORIES_DATA: CourseCategory[] = [
  {
    id: "regular",
    title: "Regular Courses",
    description: "Highly focused skill development and certification programs with practical sandbox learning modules.",
    iconId: "regular",
    courses: [
      { id: "dca", name: "DCA", description: "Diploma in Computer Applications covering core digital literacy and office automation." },
      { id: "adca", name: "ADCA", description: "Advanced Diploma in Computer Applications covering programming, web design, and accounting." },
      { id: "tally-prime", name: "Tally Prime ERP", description: "Professional accounting training with GST, invoicing, and financial management tools." },
      { id: "ccc", name: "CCC", description: "Course on Computer Concepts, certifying digital literacy for government and corporate careers." }
    ]
  },
  {
    id: "distance",
    title: "Distance Learning",
    description: "Flexible, self-paced degree options supported by online resources, assignments, and online exam modes.",
    iconId: "distance",
    courses: [
      { id: "dist-ba", name: "Distance BA", description: "Flexible self-paced Bachelor of Arts for diverse career paths in humanities." },
      { id: "dist-bcom", name: "Distance B.Com", description: "Flexible self-paced commerce degree covering bookkeeping and financial laws." },
      { id: "dist-bba", name: "Distance BBA", description: "Distance business administration degree for aspiring corporate leaders." },
      { id: "dist-bca", name: "Distance BCA", description: "Flexible technology degree covering coding and database architectures." },
      { id: "dist-ma", name: "Distance MA", description: "Postgraduate distance humanities degree for advanced academic studies." },
      { id: "dist-mcom", name: "Distance M.Com", description: "Postgraduate commerce degree offering flexible corporate accounting study." },
      { id: "dist-mba", name: "Distance MBA", description: "Distance master of business administration for professional advancement." },
      { id: "dist-mca", name: "Distance MCA", description: "Advanced self-paced computing degree for software development roles." }
    ]
  },
  {
    id: "ug",
    title: "Undergraduate (UG) Programmes",
    description: "Rigorous collegiate programs focusing on technical expertise, professional skills, and placement support.",
    iconId: "ug",
    courses: [
      { id: "bca", name: "BCA", description: "Bachelor of Computer Applications focusing on software engineering and web development." },
      { id: "bba", name: "BBA", description: "Bachelor of Business Administration covering core management and entrepreneurship." },
      { id: "bba-aviation", name: "BBA Aviation Management", description: "Specialized aviation business administration program for airport and airline management." },
      { id: "bcom", name: "B.Com", description: "Bachelor of Commerce offering solid groundings in accounting and financial principles." },
      { id: "bcom-hons", name: "B.Com (Hons.)", description: "Advanced honors commerce degree specializing in quantitative finance and corporate audit." },
      { id: "ba", name: "BA", description: "Bachelor of Arts offering broad multi-disciplinary education across humanities." },
      { id: "ba-hons", name: "BA (Hons.)", description: "Honors Bachelor of Arts offering intensive research-centric humanities studies." }
    ]
  },
  {
    id: "pg",
    title: "Postgraduate (PG) Programmes",
    description: "High-tier academic programs focusing on advanced software architectures, strategic leadership, and research.",
    iconId: "pg",
    courses: [
      { id: "mba", name: "MBA", description: "Master of Business Administration for strategic management leadership." },
      { id: "mba-aviation", name: "MBA Aviation Management", description: "Specialized postgraduate aviation administration for global airline management." },
      { id: "mba-finance", name: "MBA Finance", description: "Advanced business degree specializing in investment management and corporate finance." },
      { id: "mba-hr", name: "MBA HR", description: "Postgraduate specialization in human resource planning and organizational behavior." },
      { id: "mba-marketing", name: "MBA Marketing", description: "Advanced management study of consumer marketing, branding, and digital sales." },
      { id: "mba-operations", name: "MBA Operations", description: "Specialized postgraduate studies in global supply chains and logistics management." },
      { id: "mca", name: "MCA", description: "Master of Computer Applications for advanced software development and systems design." },
      { id: "mcom", name: "M.Com", description: "Master of Commerce specializing in advanced financial markets and corporate tax." },
      { id: "ma-education", name: "MA Education", description: "Master of Arts in Education covering educational philosophy and pedagogy." },
      { id: "ma-english", name: "MA English", description: "Advanced postgraduate study in English literature, criticism, and linguistics." },
      { id: "ma-hindi", name: "MA Hindi", description: "Postgraduate research and translation training in Hindi literature." },
      { id: "ma-history", name: "MA History", description: "Advanced study of ancient, medieval, and modern world histories." },
      { id: "ma-polsci", name: "MA Political Science", description: "Postgraduate study of political theories and international relations." },
      { id: "ma-sociology", name: "MA Sociology", description: "Advanced sociological studies of social institutions and demographics." },
      { id: "ma-economics", name: "MA Economics", description: "Postgraduate research covering econometrics and public fiscal policy." },
      { id: "msc-it", name: "MSc IT", description: "Master of Science in Information Technology specializing in network engineering." },
      { id: "msw", name: "MSW", description: "Master of Social Work for community leadership and NGO administration." }
    ]
  },
  {
    id: "diploma",
    title: "Diploma Programmes",
    description: "Industry-focused technical and engineering diplomas offering practical workshops and direct employment pathways.",
    iconId: "diploma",
    courses: [], // Backwards-compatible main list
    subGroups: [
      {
        name: "Engineering Diplomas",
        courses: [
          { id: "dip-aeronautical", name: "Aeronautical Engineering", description: "Diploma in aerospace engineering design and structural principles." },
          { id: "dip-ame", name: "Aircraft Maintenance Engineering (AME)", description: "Technical license preparation training for aircraft safety validation." },
          { id: "dip-ame-easa", name: "Aircraft Maintenance Engineering + EASA Modules", description: "Global aviation standard certification mapping EASA training." },
          { id: "dip-ai-ml", name: "Artificial Intelligence & Machine Learning", description: "Technical training in neural networks and machine learning models." },
          { id: "dip-automobile", name: "Automobile Engineering", description: "Practical study of automotive design and combustion mechanics." },
          { id: "dip-civil", name: "Civil Engineering", description: "Foundations in structural modeling, surveying, and civil drafting." },
          { id: "dip-cse", name: "Computer Science & Engineering", description: "Diploma in software programming, systems administration, and networks." },
          { id: "dip-electrical", name: "Electrical Engineering", description: "Technical diploma in power electronics and circuit networks." },
          { id: "dip-ece", name: "Electronics & Communication Engineering", description: "Diploma in semiconductor devices and communication channels." },
          { id: "dip-fire-safety", name: "Fire Technology & Safety", description: "Technical safety engineering covering disaster mitigation and prevention." },
          { id: "dip-mechanical", name: "Mechanical Engineering", description: "Practical study of machine structures, thermodynamics, and workshop tools." },
          { id: "dip-mlt", name: "Medical Lab Technician", description: "Clinical training in diagnostic lab testing, pathology, and hematology." }
        ]
      },
      {
        name: "Technical Diplomas",
        courses: [
          { id: "dip-draughtsman-civil", name: "Draughtsman (Civil)", description: "Specialized blueprint design, AutoCAD drafting, and survey maps." },
          { id: "dip-electrician", name: "Electrician", description: "Technical training in domestic wiring, machinery installation, and grid safety." },
          { id: "dip-mechanic-diesel", name: "Mechanics (Diesel Engine)", description: "Specialized vocational training in heavy machinery diesel systems." }
        ]
      },
      {
        name: "Healthcare Diplomas",
        courses: [
          { id: "dip-pharmacy", name: "Diploma in Pharmacy (D.Pharm)", description: "Professional pharmacy diploma covering dispensing, toxicology, and drug laws." },
          { id: "dip-gnm", name: "GNM Nursing", description: "General Nursing and Midwifery training in clinical care and maternity." }
        ]
      }
    ]
  }
];

// Populate the main courses array for categories that have subGroups
CATEGORIES_DATA.forEach(category => {
  if (category.subGroups) {
    category.courses = category.subGroups.flatMap(group => group.courses);
  }
});

// Dynamic content generator to generate high-quality text-based course details
export function getCourseDetails(courseId: string, categoryId: string, courseName: string): CourseDetail {
  const normalizedName = courseName;
  const isAviation = normalizedName.toLowerCase().includes("aviation");
  const isManagement = normalizedName.toLowerCase().includes("bba") || normalizedName.toLowerCase().includes("mba") || normalizedName.toLowerCase().includes("management");
  const isCommerce = normalizedName.toLowerCase().includes("com") || normalizedName.toLowerCase().includes("tally");
  const isHum = normalizedName.toLowerCase().includes("ba") || normalizedName.toLowerCase().includes("ma") || normalizedName.toLowerCase().includes("msw") || normalizedName.toLowerCase().includes("education");
  const isTech = normalizedName.toLowerCase().includes("bca") || normalizedName.toLowerCase().includes("mca") || normalizedName.toLowerCase().includes("it") || normalizedName.toLowerCase().includes("computer") || normalizedName.toLowerCase().includes("machine") || normalizedName.toLowerCase().includes("dca") || normalizedName.toLowerCase().includes("adca") || normalizedName.toLowerCase().includes("ccc");
  const isHealth = normalizedName.toLowerCase().includes("nurse") || normalizedName.toLowerCase().includes("gnm") || normalizedName.toLowerCase().includes("pharm") || normalizedName.toLowerCase().includes("lab");

  // Tagline selection
  let tagline = "Shape the future of technical systems and software frameworks.";
  if (isAviation) tagline = "Pioneering the next generation of global aviation management.";
  else if (isManagement) tagline = "Empowering leaders with strategic and entrepreneurial skills.";
  else if (isCommerce) tagline = "Strengthening quantitative finance, audit, and tax practices.";
  else if (isHum) tagline = "Fostering analytical thinking, human welfare, and public policy.";
  else if (isHealth) tagline = "Delivering professional healthcare and clinical excellence.";

  // Duration selection
  let duration = "3 Years (6 Semesters)";
  if (categoryId === "pg") {
    duration = "2 Years (4 Semesters)";
  } else if (categoryId === "diploma") {
    if (normalizedName.includes("GNM") || normalizedName.includes("Engineering") || normalizedName.includes("AME")) {
      duration = "3 Years (Annual/Semester System)";
    } else {
      duration = "2 Years (Annual/Semester System)";
    }
  } else if (normalizedName.includes("B.Tech")) {
    duration = "4 Years (8 Semesters)";
  } else if (normalizedName === "DCA" || normalizedName.includes("DCA")) {
    duration = "6 Months (Single Semester)";
  } else if (normalizedName === "Tally Prime ERP") {
    duration = "3 Months (Fast-track)";
  } else if (normalizedName === "CCC") {
    duration = "2 Months (Fast-track)";
  }

  // Study Mode selection
  const studyMode = categoryId === "distance" ? "Distance Learning (ODE)" : "Full-Time (Regular)";

  // Seat Intake selection
  let seatIntake = "60 Seats (Morning shift)";
  if (isTech || isManagement) seatIntake = "120 Seats (Morning and Evening Shifts)";
  else if (isCommerce) seatIntake = "150 Seats (Morning and Evening Shifts)";
  else if (categoryId === "distance") seatIntake = "Flexible Admission (Online Portal)";

  // Eligibility mapping
  let eligibility = [
    "Passed Class 12th from a recognized board in any stream.",
    "Minimum 50% aggregate marks in the qualifying board examination."
  ];

  if (categoryId === "pg") {
    eligibility = [
      "Completed Bachelor's degree in a relevant discipline from a recognized university.",
      "Minimum 50% aggregate marks (or equivalent CGPA) in the graduation exam."
    ];
  } else if (categoryId === "diploma") {
    if (isHealth || normalizedName.includes("Pharmacy")) {
      eligibility = [
        "Passed Class 12th (Physics, Chemistry, and Biology/Mathematics) with minimum 50% marks.",
        "Must have cleared subject-specific board requirements."
      ];
    } else {
      eligibility = [
        "Passed Class 10th from a recognized board.",
        "Compulsory subjects: Science and Mathematics with passing scores."
      ];
    }
  }

  // Objective mapping
  let objective = `To provide a high-quality academic pathway in ${normalizedName}. The curriculum combines rigorous theory with practical sandbox labs, developing advanced skillsets. Students learn to handle real-world challenges, preparing them for top-tier careers.`;
  if (isTech) {
    objective = `To train students in advanced software development, database administration, and computational thinking. The course emphasizes coding sandboxes, dynamic projects, and technical problem-solving to build developer-ready careers.`;
  } else if (isManagement) {
    objective = `To build essential leadership, operational planning, and strategic management capabilities. The course focuses on global case studies, business simulations, and professional ethics to shape executive corporate leaders.`;
  } else if (isCommerce) {
    objective = `To deliver deep knowledge of corporate accounting, financial planning, business laws, and indirect taxation. Students learn auditing software tools and digital calculations to prepare for professional finance roles.`;
  } else if (isHealth) {
    objective = `To deliver rigorous training in patient clinical care, pharmacy dispensing laws, anatomy, and healthcare management. The curriculum equips students with clinical and emergency response skills for hospitals and pharmacies.`;
  }

  // Highlights mapping
  const highlights = [
    "Industry-focused curriculum aligned with current market needs.",
    "Practical learning modules with regular hands-on sessions.",
    "Professional skill development focusing on tools and frameworks.",
    "Personality development classes and interview preparation.",
    "Live projects and case studies for real-world validation.",
    "Dedicated internship support and industrial placement assistance.",
    "Modern, state-of-the-art computer and technical laboratory facilities.",
    "Highly experienced faculty members with core domain expertise."
  ];

  // Career Opportunities mapping
  let careerOpportunities = ["General Executive", "Academic Researcher", "Competitive Exam Aspirant", "Public Policy Assistant"];
  if (isTech) {
    careerOpportunities = ["Software Developer", "Web Developer", "Data Analyst", "UI/UX Designer", "Cloud Support Engineer", "IT Systems Analyst"];
  } else if (isManagement) {
    if (isAviation) {
      careerOpportunities = ["Airport Duty Manager", "Airline Operations Executive", "Aviation Logistics Planner", "Ground Handling Supervisor", "Cargo Analyst", "Customer Relations Lead"];
    } else {
      careerOpportunities = ["Business Manager", "HR Generalist", "Marketing Executive", "Operations Analyst", "Corporate Trainer", "Entrepreneur"];
    }
  } else if (isCommerce) {
    careerOpportunities = ["Tax Consultant", "Corporate Auditor", "Financial Analyst", "Accounts Executive", "Investment Planner", "Banking Officer"];
  } else if (isHealth) {
    if (normalizedName.includes("Pharmacy")) {
      careerOpportunities = ["Registered Pharmacist", "Medical Representative", "Pharmacy Shop Manager", "Quality Control Assistant", "Drug Distributor", "Hospital Dispenser"];
    } else {
      careerOpportunities = ["Registered Nurse", "Clinical Care Specialist", "Community Health Nurse", "Ward Supervisor", "Nursing Educator", "Home Care Expert"];
    }
  } else if (categoryId === "diploma") {
    careerOpportunities = ["Junior Engineer", "Technical Assistant", "CAD Draftsman", "Maintenance Technician", "Lab Assistant", "Site Supervisor"];
  }

  // FAQs mapping
  const faqs = [
    {
      question: "Who can apply for this course?",
      answer: `Students who satisfy the eligibility criteria (typically ${eligibility[0]}) can submit their enquiry online or visit our admissions office.`
    },
    {
      question: "Is practical training and internship included?",
      answer: "Yes, our programs feature hands-on laboratory sessions, industrial workshop visits, and dedicated internship support to align you with industry practices."
    },
    {
      question: "What career options are available after completion?",
      answer: `Graduates of this course can explore diverse professional paths. Popular opportunities include ${careerOpportunities.slice(0, 3).join(", ")}, and more.`
    }
  ];

  return {
    name: normalizedName,
    tagline,
    introduction: `A premium, industry-focused academic program designed to deliver advanced skills, analytical thinking, and career-oriented validation.`,
    about: objective,
    duration,
    eligibility,
    highlights,
    careerOpportunities,
    faqs
  };
}
