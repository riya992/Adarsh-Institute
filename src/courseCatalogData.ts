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
    id: "skill-india",
    title: "Computer Education Skill India Program",
    description: "National skill development computer training programs designed for employment readiness.",
    iconId: "skill-india",
    courses: [
      { id: "skill-tally", name: "Tally Prime", description: "3-month professional accounting training with GST, payroll, and financial reporting." },
      { id: "skill-office", name: "Office Automation (Basic)", description: "Basic office automation covering MS-Word, MS-Excel, MS-PowerPoint, Paint, WordPad and Notepad." },
      { id: "skill-dtp", name: "Desktop Publishing (DTP)", description: "3-month graphic designing course using Photoshop for photo editing and CorelDraw for graphic designing." },
      { id: "skill-webdesign", name: "Web Designing", description: "3-month web designing course covering HTML, CSS, and Flash MX for building websites." },
      { id: "skill-spoken-english", name: "Spoken English", description: "3-month spoken English communication course for workplace, interviews, and daily life confidence." },
      { id: "skill-digital-marketing", name: "Digital Marketing", description: "3-month comprehensive course on SEO, social media, Google Ads, and content strategy." },
      { id: "skill-c", name: "C Programming", description: "2-month foundational programming course covering syntax, pointers, and file handling in C." },
      { id: "skill-cpp", name: "C++ Programming", description: "2-month object-oriented programming course covering classes, inheritance, and STL in C++." },
      { id: "skill-java", name: "Core Java", description: "3-month Java programming course covering OOP, collections, exception handling, and JDBC." },
      { id: "skill-python", name: "Python", description: "3-month Python programming course covering scripting, data handling, and automation." },
      { id: "skill-mysql", name: "MySQL", description: "2-month database course covering SQL queries, joins, stored procedures, and optimization." },
      { id: "skill-dsa", name: "DSA (Data Structures & Algorithms)", description: "3-month course covering arrays, linked lists, trees, graphs, sorting, and searching algorithms." },
      { id: "skill-bcc", name: "Basic Computer Course (BCC)", description: "3-month fundamental computing, internet, and operating systems training." },
      { id: "skill-dca", name: "DCA (Diploma in Computer Applications)", description: "12-month comprehensive computer applications and programming diploma." },
      { id: "skill-dcshn", name: "DCSHN (Diploma in Computer Software, Hardware and Networking)", description: "15-month advanced training in software apps, hardware repair, and routing." },
      { id: "skill-dca-english", name: "DCA + English Spoken Course", description: "15-month integrated computing applications training with spoken English fluency." }
    ]
  },
  {
    id: "regular",
    title: "Regular Courses",
    description: "Highly focused skill development and certification programs with practical sandbox learning modules.",
    iconId: "regular",
    courses: [], // Will be populated dynamically below
    subGroups: [
      {
        name: "3 Years Diploma Courses in Engineering",
        courses: [
          { id: "reg-dip-aeronautical", name: "Aeronautical Engineering", description: "3 years diploma in aerospace and aeronautical principles." },
          { id: "reg-dip-ame", name: "Aircraft Maintenance Engineering (AME)", description: "DGCA aligned license training for aircraft maintenance." },
          { id: "reg-dip-easa", name: "Aircraft Maintenance Engineering + EASA Modules", description: "Technical training aligned with EASA certification standards." },
          { id: "reg-dip-aiml", name: "Artificial Intelligence & Machine Learning", description: "Foundations in data training and machine learning algorithms." },
          { id: "reg-dip-automobile", name: "Automobile Engineering", description: "Design, mechanics, and assembly training for automotive systems." },
          { id: "reg-dip-civil", name: "Civil Engineering", description: "Training in structural modeling, surveying, and civil design." },
          { id: "reg-dip-cse", name: "Computer Science and Engineering", description: "Technical training in programming languages and database networks." },
          { id: "reg-dip-electrical", name: "Electrical Engineering", description: "Study of electrical grids, circuits, and machinery operations." },
          { id: "reg-dip-ece", name: "Electronics & Communication Engineering", description: "Foundations of microchips, semiconductors, and communications." },
          { id: "reg-dip-fire", name: "Fire Technology & Safety", description: "Technical safety, fire prevention, and emergency planning." },
          { id: "reg-dip-mechanical", name: "Mechanical Engineering", description: "Applied study of mechanics, thermodynamics, and manufacturing tools." },
          { id: "reg-dip-mlt", name: "Medical Lab Technician", description: "Clinical training in diagnostic lab testing and pathology." }
        ]
      },
      {
        name: "Diploma (Lateral Entry)",
        courses: [
          { id: "reg-dip-lateral", name: "All Diploma Courses (Lateral Entry)", description: "Direct admission to the second year of engineering diploma." }
        ]
      },
      {
        name: "B.Tech Degree Courses",
        courses: [
          { id: "reg-btech-aerospace", name: "Aerospace Engineering", description: "4 years degree program in spacecraft and aerospace design." },
          { id: "reg-btech-aeronautical", name: "Aeronautical Engineering", description: "Aircraft design and aerodynamics flight systems degree." },
          { id: "reg-btech-ame", name: "Aircraft Maintenance Engineering", description: "Advanced mechanical and electronic maintenance systems degree." },
          { id: "reg-btech-civil", name: "Civil Engineering", description: "Structural engineering, concrete design, and infrastructure planning." },
          { id: "reg-btech-cse", name: "Computer Science and Engineering", description: "Full-stack development, algorithms, and computing systems." },
          { id: "reg-btech-cse-aiml", name: "Computer Science & Engineering (AI & ML)", description: "Specialized computer science degree in data science and neural networks." },
          { id: "reg-btech-cse-iot", name: "Computer Science & Engineering (Internet of Things & Cyber Security with Block chain Technology)", description: "Cybersecurity, ledger systems, and smart device engineering." },
          { id: "reg-btech-electrical", name: "Electrical Engineering", description: "Power systems, electricity generation, and grid automation." },
          { id: "reg-btech-mechanical", name: "Mechanical Engineering", description: "Advanced manufacturing, fluid dynamics, and robotic structures." },
          { id: "reg-btech-ece", name: "Electronics and Communication Engineering", description: "Telecommunications, microprocessors, and digital signal networks." }
        ]
      },
      {
        name: "B.Tech (Lateral Entry)",
        courses: [
          { id: "reg-btech-lateral", name: "All B.Tech Courses (Lateral Entry)", description: "Direct second-year admission to engineering degree tracks." }
        ]
      },
      {
        name: "B.Tech Integrated Degree Courses",
        courses: [
          { id: "reg-integ-aero", name: "AME(DGCA) + Aerospace Engineering", description: "Integrated engineering degree combining AME license preparation." },
          { id: "reg-integ-aeronautical", name: "AME(DGCA) + Aeronautical Engineering", description: "Aeronautical degree integrated with AME licensing training." },
          { id: "reg-integ-ame", name: "AME(DGCA) + Aircraft Maintenance Engineering(AME)", description: "Dual track covering mechanical AME and standard B.Tech syllabus." },
          { id: "reg-integ-aiml", name: "AME(DGCA) + Computer Science & Engineering(AI & ML)", description: "Computer science integrated with specialized aviation engineering." },
          { id: "reg-integ-ece", name: "AME(DGCA) + Electronics & Communication Engineering", description: "Integrated electronics degree mapping to aircraft communication systems." },
          { id: "reg-integ-mech", name: "AME(DGCA) + Mechanical Engineering", description: "Mechanical engineering integrated with aircraft structural maintenance." },
          { id: "reg-integ-cpl-aero", name: "CPL(Ground Classes) + Aeronautical Engineering", description: "Integrated commercial pilot ground training alongside engineering." },
          { id: "reg-integ-cpl-space", name: "CPL(Ground Classes) + Aerospace Engineering", description: "Integrated CPL ground courses with aerospace structures." }
        ]
      },
      {
        name: "B.Tech Integrated (Lateral Entry)",
        courses: [
          { id: "reg-integ-lateral", name: "All B.Tech Integrated Courses (Lateral Entry)", description: "Direct second-year admission to integrated B.Tech tracks." }
        ]
      },
      {
        name: "M.Tech Degree Courses",
        courses: [
          { id: "reg-mtech-aerospace", name: "Aerospace Engineering", description: "Postgraduate specialization in aerospace design and materials." },
          { id: "reg-mtech-civil", name: "Civil Engineering", description: "Advanced structural and seismic civil engineering studies." },
          { id: "reg-mtech-cse", name: "Computer Science and Engineering", description: "Advanced computing, cloud infrastructures, and algorithm research." },
          { id: "reg-mtech-ece", name: "Electronics & Communication Engineering", description: "Postgraduate study in smart grid signal networks and electronics." },
          { id: "reg-mtech-mechanical", name: "Mechanical Engineering", description: "Advanced fluid mechanics and thermal designs research." }
        ]
      },
      {
        name: "License Courses",
        courses: [
          { id: "reg-lic-drone", name: "Drone Pilot", description: "Certification program for operating unmanned aerial vehicles (UAVs)." },
          { id: "reg-lic-cpl", name: "Commercial Pilot (CPL)", description: "Professional flight training mapping ground and simulator exams." }
        ]
      },
      {
        name: "Management",
        courses: [
          { id: "reg-mgmt-ame-bba", name: "AME(DGCA) + BBA", description: "Aviation license training integrated with business administration." },
          { id: "reg-mgmt-bba", name: "Bachelor of Business Administration (BBA)", description: "Undergraduate degree in management, corporate strategy, and accounting." },
          { id: "reg-mgmt-bba-aviation", name: "BBA in Aviation Management", description: "Undergraduate business administration specialized in aviation." },
          { id: "reg-mgmt-bca", name: "Bachelor of Computer Application (BCA)", description: "Software development, web development, and coding sandboxes." },
          { id: "reg-mgmt-mba-av", name: "MBA - Aviation Management", description: "Specialized postgraduate aviation business administration." },
          { id: "reg-mgmt-mba-fin", name: "MBA - Financial Management", description: "Corporate finance, asset valuation, and banking systems." },
          { id: "reg-mgmt-mba-hr", name: "MBA - Human Resource Management", description: "Staff planning, talent acquisition, and corporate leadership." },
          { id: "reg-mgmt-mba-mkt", name: "MBA - Marketing Management", description: "Digital advertising, consumer behavior, and sales strategy." },
          { id: "reg-mgmt-mba-ops", name: "MBA - Operations Management", description: "Logistics, supply chain architectures, and operations." }
        ]
      },
      {
        name: "Technical (ITI)",
        courses: [
          { id: "reg-iti-draughtsman", name: "Draughtsman (Civil)", description: "2 years vocational blueprint design and mapping techniques." },
          { id: "reg-iti-electrician", name: "Electrician", description: "Technical wiring, power circuits, and industrial machinery safety." },
          { id: "reg-iti-diesel", name: "Mechanic Diesel Engine", description: "Vocational training in internal combustion diesel systems." }
        ]
      },
      {
        name: "Law",
        courses: [
          { id: "reg-law-llb", name: "LLB (Hons.)", description: "3 years professional degree in constitutional, corporate, and civil laws." },
          { id: "reg-law-ballb", name: "BA LLB (Hons.)", description: "Integrated 5 years legal education combining arts and law." }
        ]
      },
      {
        name: "Pharmacy",
        courses: [
          { id: "reg-pharm-bpharm", name: "Bachelor of Pharmacy (B.Pharm)", description: "4 years professional pharmacology and dispensing degree." },
          { id: "reg-pharm-lateral", name: "Bachelor of Pharmacy (B.Pharm) Lateral Entry", description: "Direct second-year admission for pharmaceutical graduates." },
          { id: "reg-pharm-dpharm", name: "Diploma in Pharmacy (D.Pharm)", description: "2 years fundamental pharmacy compounding and drug laws." }
        ]
      },
      {
        name: "Nursing",
        courses: [
          { id: "reg-nurs-bsc", name: "B.Sc. Nursing", description: "4 years healthcare clinical care and emergency medicine degree." },
          { id: "reg-nurs-gnm", name: "GNM", description: "General Nursing and Midwifery clinical nurse certification." }
        ]
      }
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
  const isAviation = normalizedName.toLowerCase().includes("aviation") || normalizedName.toLowerCase().includes("cpl") || normalizedName.toLowerCase().includes("pilot");
  const isManagement = normalizedName.toLowerCase().includes("bba") || normalizedName.toLowerCase().includes("mba") || normalizedName.toLowerCase().includes("management");
  const isCommerce = normalizedName.toLowerCase().includes("com") || normalizedName.toLowerCase().includes("tally");
  const isHum = normalizedName.toLowerCase().includes("ba") || normalizedName.toLowerCase().includes("ma") || normalizedName.toLowerCase().includes("msw") || normalizedName.toLowerCase().includes("education") || normalizedName.toLowerCase().includes("llb") || normalizedName.toLowerCase().includes("law");
  const isTech = normalizedName.toLowerCase().includes("bca") || normalizedName.toLowerCase().includes("mca") || normalizedName.toLowerCase().includes("it") || normalizedName.toLowerCase().includes("computer") || normalizedName.toLowerCase().includes("machine") || normalizedName.toLowerCase().includes("dca") || normalizedName.toLowerCase().includes("adca") || normalizedName.toLowerCase().includes("ccc") || normalizedName.toLowerCase().includes("tech") || normalizedName.toLowerCase().includes("draughtsman") || normalizedName.toLowerCase().includes("electrician") || normalizedName.toLowerCase().includes("mechanic") || normalizedName.toLowerCase().includes("engineering") || normalizedName.toLowerCase().includes("drone");
  const isHealth = normalizedName.toLowerCase().includes("nurse") || normalizedName.toLowerCase().includes("gnm") || normalizedName.toLowerCase().includes("pharm") || normalizedName.toLowerCase().includes("lab") || normalizedName.toLowerCase().includes("medical") || normalizedName.toLowerCase().includes("mlt");

  // Tagline selection
  let tagline = "Shape the future of technical systems and software frameworks.";
  if (isAviation) tagline = "Pioneering the next generation of global aviation management.";
  else if (isManagement) tagline = "Empowering leaders with strategic and entrepreneurial skills.";
  else if (isCommerce) tagline = "Strengthening quantitative finance, audit, and tax practices.";
  else if (isHum) tagline = "Fostering analytical thinking, legal frameworks, and public policy.";
  else if (isHealth) tagline = "Delivering professional healthcare and clinical excellence.";

  // Duration selection
  let duration = "3 Years (6 Semesters)";
  
  if (categoryId === "skill-india") {
    if (normalizedName.includes("DCA + English")) {
      duration = "15 Months";
    } else if (normalizedName.includes("DCSHN")) {
      duration = "15 Months";
    } else if (normalizedName.includes("DCA")) {
      duration = "12 Months";
    } else {
      duration = "3 Months";
    }
  } else if (normalizedName.includes("Integrated")) {
    duration = "5 Years (10 Semesters)";
  } else if (normalizedName.includes("B.Tech") && normalizedName.includes("Lateral")) {
    duration = "3 Years (6 Semesters)";
  } else if (normalizedName.includes("B.Tech")) {
    duration = "4 Years (8 Semesters)";
  } else if (normalizedName.includes("M.Tech")) {
    duration = "2 Years (4 Semesters)";
  } else if (normalizedName.includes("BA LLB")) {
    duration = "5 Years (10 Semesters)";
  } else if (normalizedName.includes("LLB")) {
    duration = "3 Years (6 Semesters)";
  } else if (normalizedName.includes("B.Pharm") && normalizedName.includes("Lateral")) {
    duration = "3 Years (6 Semesters)";
  } else if (normalizedName.includes("B.Pharm")) {
    duration = "4 Years (8 Semesters)";
  } else if (normalizedName.includes("B.Sc. Nursing")) {
    duration = "4 Years (8 Semesters)";
  } else if (normalizedName.includes("GNM") || normalizedName.includes("Nursing")) {
    duration = "3 Years (Annual System)";
  } else if (normalizedName.includes("D.Pharm") || normalizedName.includes("Pharmacy")) {
    duration = "2 Years (Annual System)";
  } else if (normalizedName.includes("Draughtsman") || normalizedName.includes("Electrician") || normalizedName.includes("Mechanic")) {
    duration = "2 Years (Annual System)";
  } else if (normalizedName.includes("Drone") || normalizedName.includes("Pilot")) {
    duration = "6 Months (Fast-track)";
  } else if (normalizedName === "DCA" || normalizedName.includes("DCA")) {
    duration = "6 Months (Single Semester)";
  } else if (normalizedName === "Tally Prime") {
    duration = "3 Months (Fast-track)";
  } else if (normalizedName === "Digital Marketing") {
    duration = "3 Months (Fast-track)";
  } else if (normalizedName === "C Programming" || normalizedName === "C++ Programming" || normalizedName === "MySQL" || normalizedName.includes("Office Automation")) {
    duration = "2 Months (Fast-track)";
  } else if (normalizedName === "Core Java" || normalizedName === "Python" || normalizedName.includes("DSA") || normalizedName === "Web Designing" || normalizedName === "Spoken English" || normalizedName.includes("Desktop Publishing")) {
    duration = "3 Months (Fast-track)";
  } else if (categoryId === "pg") {
    duration = "2 Years (4 Semesters)";
  } else if (categoryId === "diploma" || normalizedName.toLowerCase().includes("diploma")) {
    if (normalizedName.includes("Lateral")) {
      duration = "2 Years (4 Semesters)";
    } else {
      duration = "3 Years (6 Semesters)";
    }
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

  if (categoryId === "skill-india") {
    if (normalizedName.includes("Tally")) {
      eligibility = [
        "Computerized business accounting foundations",
        "GST reconciliation, invoice creations & tax returns filing",
        "Ledger maintaining, trial balances & financial reporting protocols"
      ];
    } else if (normalizedName.includes("Digital Marketing")) {
      eligibility = [
        "SEO, SEM & Google Analytics fundamentals",
        "Social media management: Facebook, Instagram & LinkedIn Ads",
        "Content marketing, email campaigns & performance tracking"
      ];
    } else if (normalizedName === "C Programming") {
      eligibility = [
        "Variables, data types, operators & control flow in C",
        "Functions, arrays, pointers & memory management",
        "File handling, structures & preprocessor directives"
      ];
    } else if (normalizedName === "C++ Programming") {
      eligibility = [
        "OOP concepts: classes, objects, inheritance & polymorphism",
        "Templates, exception handling & STL (Standard Template Library)",
        "File I/O, operator overloading & multi-paradigm programming"
      ];
    } else if (normalizedName === "Core Java") {
      eligibility = [
        "Java OOP: classes, interfaces, packages & inheritance",
        "Collections framework, exception handling & multithreading",
        "JDBC connectivity, file I/O & basic GUI with Swing"
      ];
    } else if (normalizedName === "Python") {
      eligibility = [
        "Python syntax, data types, loops & functions",
        "Lists, tuples, dictionaries, sets & file handling",
        "Modules, OOP in Python, NumPy & automation scripting"
      ];
    } else if (normalizedName === "MySQL") {
      eligibility = [
        "DDL, DML, DQL commands: CREATE, INSERT, SELECT & UPDATE",
        "Joins, subqueries, views, indexes & stored procedures",
        "Database normalization, transactions & user management"
      ];
    } else if (normalizedName.includes("DSA")) {
      eligibility = [
        "Arrays, linked lists, stacks, queues & hashing",
        "Trees, graphs, heaps & dynamic programming",
        "Sorting & searching algorithms with time/space complexity analysis"
      ];
    } else if (normalizedName.includes("CCC")) {
      eligibility = [
        "Fundamental digital literacy and operating system controls",
        "Secure web searching, email communications & attachments management",
        "E-Governance services portals, digital signatures & online transactions"
      ];
    } else if (normalizedName.includes("Basic Computer")) {
      eligibility = [
        "Keyboard typing layouts and shortcuts training",
        "Document composition, layout formatting & word processor editors",
        "Spreadsheet calculations, formulas execution & presentation slideshow layouts"
      ];
    } else if (normalizedName.includes("Office Automation")) {
      eligibility = [
        "Paint – basic drawing, sketching & image tools",
        "WordPad & Notepad – text editing and document creation",
        "MS-Word – professional document formatting & mail merge",
        "MS-Excel – spreadsheets, formulas, charts & data analysis",
        "MS-PowerPoint – presentations, animations & slide design"
      ];
    } else if (normalizedName.includes("Desktop Publishing")) {
      eligibility = [
        "Photoshop – photo editing, retouching & image manipulation",
        "CorelDraw – graphic designing, vector art & logo creation",
        "Pamphlet, poster & visiting card layout designing"
      ];
    } else if (normalizedName === "Web Designing" || normalizedName.includes("Web Design")) {
      eligibility = [
        "HTML – web page structure, tags, forms & hyperlinks",
        "CSS – styling, layouts, colors, fonts & responsive design",
        "Flash MX – animations, interactive graphics & web elements"
      ];
    } else if (normalizedName === "Spoken English" || (normalizedName.includes("Spoken") && !normalizedName.includes("DCA"))) {
      eligibility = [
        "Pronunciation training, phonetics & accent neutralization",
        "Grammar building, vocabulary enrichment & sentence formation",
        "Interview skills, group discussion & professional communication",
        "Public speaking, presentation delivery & workplace English"
      ];
    } else if (normalizedName.startsWith("DCA (Diploma")) {
      eligibility = [
        "Structured data structures, programming logs & web scripts design",
        "Database administrators management and queries execution",
        "Standard digital office suites and system file operations automation"
      ];
    } else if (normalizedName.startsWith("DCSHN")) {
      eligibility = [
        "PC hardware hardware assembling, components connections & diagnostic tools",
        "Operating systems installations, formatting & device drivers setting",
        "LAN networks routing cables, switch ports & network sharing configurations"
      ];
    } else if (normalizedName.includes("English Spoken")) {
      eligibility = [
        "Vocal conversation fluency, pronunciation and grammar building",
        "Integrated software applications skills combined with active spoken practices",
        "Professional workspace communication ethics, public speaking, and resume builders"
      ];
    } else {
      eligibility = [
        "Practical sandbox learning and direct employment skills",
        "Hands-on laboratory training with state-of-the-art workstations",
        "Interactive workshops and industry standard certifications"
      ];
    }
  } else if (categoryId === "pg" || normalizedName.startsWith("M.")) {
    eligibility = [
      "Completed Bachelor's degree in a relevant discipline from a recognized university.",
      "Minimum 50% aggregate marks (or equivalent CGPA) in the graduation exam."
    ];
  } else if (categoryId === "diploma" || normalizedName.toLowerCase().includes("diploma") || normalizedName.toLowerCase().includes("iti") || normalizedName.toLowerCase().includes("mechanic") || normalizedName.toLowerCase().includes("draughtsman") || normalizedName.toLowerCase().includes("electrician")) {
    if (normalizedName.includes("Lateral")) {
      eligibility = [
        "Passed Class 12th (Science/PCM) or completed 2 years ITI course from a recognized board/institution.",
        "Must have cleared subject-specific prerequisites."
      ];
    } else if (isHealth || normalizedName.includes("Pharmacy")) {
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
  } else if (normalizedName.includes("B.Tech")) {
    if (normalizedName.includes("Lateral")) {
      eligibility = [
        "Completed 3 Years Engineering Diploma or B.Sc. (with Mathematics) with minimum 50% aggregate marks.",
        "Prerequisite: Passed qualifying entrance test."
      ];
    } else {
      eligibility = [
        "Passed 10+2 with Physics, Chemistry, and Mathematics (PCM) from a recognized board.",
        "Minimum 60% aggregate marks in PCM, with valid JEE Main score."
      ];
    }
  } else if (normalizedName.includes("LLB")) {
    eligibility = [
      "Completed Bachelor's degree in any discipline with minimum 45% marks from a recognized university.",
      "Entrance: CLAT / LSAT or equivalent university score."
    ];
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
  } else if (normalizedName === "Digital Marketing") {
    careerOpportunities = ["SEO Analyst", "Social Media Manager", "Digital Marketing Executive", "Content Strategist", "PPC Specialist", "Brand Manager"];
  } else if (normalizedName === "C Programming" || normalizedName === "C++ Programming") {
    careerOpportunities = ["Systems Programmer", "Embedded Developer", "Game Developer", "Software Engineer", "Firmware Developer", "Application Developer"];
  } else if (normalizedName === "Core Java") {
    careerOpportunities = ["Java Developer", "Backend Engineer", "Android Developer", "Full Stack Developer", "Software Consultant", "API Developer"];
  } else if (normalizedName === "Python") {
    careerOpportunities = ["Python Developer", "Data Scientist", "ML Engineer", "Automation Tester", "Backend Developer", "AI Research Analyst"];
  } else if (normalizedName === "MySQL") {
    careerOpportunities = ["Database Administrator", "SQL Developer", "Data Analyst", "Backend Developer", "BI Analyst", "Data Engineer"];
  } else if (normalizedName.includes("DSA")) {
    careerOpportunities = ["Software Engineer", "Competitive Programmer", "Backend Developer", "Problem Solver", "Algorithm Engineer", "FAANG Aspirant"];
  } else if (normalizedName.includes("Office Automation")) {
    careerOpportunities = ["Data Entry Operator", "Office Assistant", "MIS Executive", "Computer Operator", "Administrative Assistant", "Back Office Executive"];
  } else if (normalizedName.includes("Desktop Publishing")) {
    careerOpportunities = ["Graphic Designer", "DTP Operator", "Photo Editor", "Print Media Designer", "Logo Designer", "Advertisement Layout Artist"];
  } else if (normalizedName === "Web Designing" || normalizedName.includes("Web Design")) {
    careerOpportunities = ["Web Designer", "Frontend Developer", "UI Designer", "HTML/CSS Developer", "Freelance Web Creator", "Digital Content Designer"];
  } else if (normalizedName === "Spoken English" || (normalizedName.includes("Spoken") && !normalizedName.includes("DCA"))) {
    careerOpportunities = ["Communication Trainer", "Customer Support Executive", "BPO/Call Centre Agent", "Corporate Presenter", "English Tutor", "HR & Recruitment Executive"];
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
  } else if (categoryId === "diploma" || normalizedName.toLowerCase().includes("diploma") || normalizedName.toLowerCase().includes("iti")) {
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
