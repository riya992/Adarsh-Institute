export interface CourseDetail {
  name: string;
  duration: string;
  modeOfStudy: string;
  seatIntake: string;
  eligibility: string;
  objective: string;
  highlights: string[];
  syllabus: { semester: string; subjects: string[] }[];
  subStreams?: { name: string; syllabus: { semester: string; subjects: string[] }[] }[];
  specializations?: { name: string; syllabus: { semester: string; subjects: string[] }[] }[];
}

export interface CatalogCategory {
  id: string;
  title: string;
  description: string;
  eligibilitySummary: string;
  courses: { name: string; detail: CourseDetail; badge?: string }[];
}

export const COURSE_CATALOG_DATA: CatalogCategory[] = [
  {
    id: "diploma",
    title: "Diploma Programmes",
    description: "Industry-focused diploma programmes with practical training, skill development, and career-oriented curriculum across engineering & pharmacy.",
    eligibilitySummary: "Minimum 10th Pass (Course-specific)",
    courses: [
      {
        name: "3 Years Diploma in Engineering",
        detail: {
          name: "3 Years Diploma in Engineering",
          duration: "3 Years",
          modeOfStudy: "Full-Time (Regular)",
          seatIntake: "120 Seats (Morning and Evening Batches)",
          eligibility: "Minimum 50% marks in Class 10th from a recognized board with Mathematics and Science as compulsory subjects.",
          objective: "To build strong foundational engineering skills and hands-on laboratory expertise to prepare students for core technical industries or direct entry into second-year engineering degrees.",
          highlights: [
            "Advanced physics, chemistry, and specialized engineering laboratories.",
            "Industrial training collaborations with major manufacturing and technology firms.",
            "Seminars, expert speaker sessions, and vocational workshop practices.",
            "100% assistance for industrial apprenticeships and placements."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Applied Mathematics - I", "Applied Physics - I", "Communication Skills", "Engineering Drawing - I", "Workshop Practice"] },
            { semester: "Semester 2", subjects: ["Applied Mathematics - II", "Applied Physics - II", "Applied Chemistry", "Engineering Drawing - II", "Computer Fundamentals"] },
            { semester: "Semester 3", subjects: ["Basic Electrical Engineering", "Electronics Devices & Circuits", "Digital Electronics", "Branch Core - I", "Lab Work"] },
            { semester: "Semester 4", subjects: ["Microprocessors", "Electrical Machines", "Measurement & Instrumentation", "Branch Core - II", "Workshop - II"] },
            { semester: "Semester 5", subjects: ["Power Electronics", "Control Systems", "Industrial Management", "Elective Subject", "Mini Project"] },
            { semester: "Semester 6", subjects: ["Entrepreneurship Development", "Environmental Studies", "Major Project Work", "Core Branch Seminar", "Industrial Viva"] }
          ]
        }
      },
      {
        name: "Lateral Entry Diploma",
        detail: {
          name: "Lateral Entry Diploma (Direct 2nd Year)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (Direct Entry)",
          seatIntake: "30 Seats (Morning Batch)",
          eligibility: "Passed Class 12th Science (with PCM) or 2 years ITI course from a recognized board or NCVT institution.",
          objective: "To enable ITI and vocational students to fast-track their technical education by entering directly into the third semester of the engineering diploma track.",
          highlights: [
            "Direct integration into active second-year laboratory workshops.",
            "Bridge courses in Mathematics and Science to align with diploma curriculum.",
            "Hands-on mechanical, electrical, and computer sandbox training.",
            "Focus on real-world industrial projects and professional troubleshooting skills."
          ],
          syllabus: [
            { semester: "Semester 3 (Direct Entry)", subjects: ["Bridge Mathematics", "Core Engineering Mechanics", "Material Science", "Practical Workshop", "Circuit Analysis"] },
            { semester: "Semester 4", subjects: ["Digital Electronics", "Manufacturing Technology", "Thermal Engineering", "Microcontroller Labs", "CAD Drawing"] },
            { semester: "Semester 5", subjects: ["Industrial Automation", "Quality Control & Metrology", "Elective Specialization", "Project Phase - I"] },
            { semester: "Semester 6", subjects: ["Industrial Engineering", "Major Project", "Environmental Engineering", "Management & Ethics", "Technical Seminar"] }
          ]
        }
      },
      {
        name: "D.Pharm (Diploma in Pharmacy)",
        detail: {
          name: "Diploma in Pharmacy (D.Pharm)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (Professional)",
          seatIntake: "60 Seats (Morning Batch)",
          eligibility: "Passed 10+2 with Physics, Chemistry, and Biology/Mathematics with minimum 50% marks from a recognized board.",
          objective: "To provide quality education in pharmaceutical compounding, dispensing, drug interactions, community health guidelines, and pharmacy laws.",
          highlights: [
            "Modern anatomy, physiology, and pharmaceutical chemistry laboratories.",
            "Professional hospital pharmacy internships at attached medical centers.",
            "Hands-on training in prescription analysis and digital pharmacy billing systems.",
            "PCI (Pharmacy Council of India) aligned study curriculum."
          ],
          syllabus: [
            { semester: "Year 1 (Annual Exam)", subjects: ["Pharmaceutics - I", "Pharmaceutical Chemistry - I", "Pharmacognosy", "Biochemistry & Clinical Pathology", "Human Anatomy & Physiology"] },
            { semester: "Year 2 (Annual Exam)", subjects: ["Pharmaceutics - II", "Pharmaceutical Chemistry - II", "Pharmacology & Toxicology", "Pharmaceutical Jurisprudence", "Drug Store & Business Management", "Hospital & Clinical Pharmacy"] }
          ]
        }
      }
    ]
  },
  {
    id: "regular",
    title: "Regular Courses",
    description: "Highly focused, skill-based curriculum with hands-on lab sessions, standard examinations, and industry certification.",
    eligibilitySummary: "UG: 10+2 Passed | PG: Graduate",
    courses: [
      {
        name: "BA - General",
        detail: {
          name: "Bachelor of Arts (BA - General)",
          duration: "3 Years",
          modeOfStudy: "Full-Time (Regular)",
          seatIntake: "100 Seats (Morning shift)",
          eligibility: "Passed 10+2 in any stream with a minimum of 45% aggregate marks from a recognized board.",
          objective: "To offer a comprehensive foundations pathway across history, literature, political sciences, and social structures to develop strong critical analysis and communication skills.",
          highlights: [
            "Broad multi-disciplinary choice-based credit system.",
            "Structured writing labs and analytical research projects.",
            "Preparation assistance for competitive civil service exams.",
            "Active literary, debate, and social action clubs."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["English Language & Literature", "Introduction to Political Theory", "History of Ancient India", "Environmental Science"] },
            { semester: "Semester 2", subjects: ["Communication Studies", "Indian Government & Politics", "History of Medieval India", "Basic Sociology"] },
            { semester: "Semester 3", subjects: ["Modern Indian Literature", "International Relations", "History of Modern India", "Social Anthropology"] },
            { semester: "Semester 4", subjects: ["Macroeconomics Foundations", "Comparative Constitutions", "World History", "Public Administration Theory"] },
            { semester: "Semester 5", subjects: ["Modern Political Philosophy", "Research Methodology Basics", "Elective Discipline - I", "Minor Dissertation"] },
            { semester: "Semester 6", subjects: ["Contemporary Global Issues", "Media & Public Relations", "Elective Discipline - II", "Comprehensive Project Work"] }
          ]
        }
      },
      {
        name: "BA Hons.",
        detail: {
          name: "Bachelor of Arts Honors (BA Hons.)",
          duration: "3 Years",
          modeOfStudy: "Full-Time (Honors Intensive)",
          seatIntake: "60 Seats (Morning shift)",
          eligibility: "Passed Class 12th in any stream with at least 50% aggregate marks from a recognized board.",
          objective: "To deliver deep, research-centric education in a major humanities discipline, promoting critical theories, academic publications, and postgraduate preparedness.",
          highlights: [
            "Specialized core major tracks (English, Political Science, or History).",
            "One-on-one faculty mentoring for advanced research projects.",
            "Exclusive seminars on critical literature and sociological analysis.",
            "Advanced thesis defense in the final semester."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Major Track: Core - I", "Introduction to Humanities", "Classical Literary Critical Theory", "Generic Elective - I"] },
            { semester: "Semester 2", subjects: ["Major Track: Core - II", "Academic Writing Labs", "Modern Western Philosophy", "Generic Elective - II"] },
            { semester: "Semester 3", subjects: ["Major Core - III", "Major Core - IV", "Research Design & Methods", "Skill Enhancement Course"] },
            { semester: "Semester 4", subjects: ["Major Core - V", "Major Core - VI", "Gender & Subaltern Studies", "Interdisciplinary Seminar"] },
            { semester: "Semester 5", subjects: ["Specialization Core - VII", "Specialization Core - VIII", "Pre-Thesis Research Seminar", "Project Proposal"] },
            { semester: "Semester 6", subjects: ["Advanced Specialized Core - IX", "Major Honors Thesis Submission", "Public Policy Analysis", "Viva Voce"] }
          ]
        }
      },
      {
        name: "BBA",
        detail: {
          name: "Bachelor of Business Administration (BBA)",
          duration: "3 Years",
          modeOfStudy: "Full-Time (Regular)",
          seatIntake: "120 Seats (Morning and Evening Shifts)",
          eligibility: "10+2 Passed in any stream (Commerce preferred) with minimum 50% marks, or a valid CUET score.",
          objective: "To groom corporate-ready business executives and innovative entrepreneurs with rigorous training in finance, organizational strategy, and consumer behavior.",
          highlights: [
            "Corporate case studies and interactive simulated boardrooms.",
            "Compulsory 8-week corporate summer internship program.",
            "Specializations in Marketing, Finance, and HR in final year.",
            "Regular leadership talks with corporate CXOs."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Principles of Management", "Business Economics", "Financial Accounting", "Business Communication", "IT in Management"] },
            { semester: "Semester 2", subjects: ["Organizational Behavior", "Macroeconomics", "Business Mathematics", "Cost Accounting", "Environmental Studies"] },
            { semester: "Semester 3", subjects: ["Marketing Management", "Human Resource Management", "Business Statistics", "Production & Operations", "Legal Aspects of Business"] },
            { semester: "Semester 4", subjects: ["Financial Management", "Research Methodology", "Business Ethics", "Consumer Behavior", "Management Information Systems"] },
            { semester: "Semester 5", subjects: ["Strategic Management", "Specialization Elective - I", "Specialization Elective - II", "Summer Training Project Viva"] },
            { semester: "Semester 6", subjects: ["Entrepreneurship Development", "Specialization Elective - III", "Specialization Elective - IV", "Corporate Simulation & Major Project"] }
          ]
        }
      },
      {
        name: "BCA",
        detail: {
          name: "Bachelor of Computer Applications (BCA)",
          duration: "3 Years",
          modeOfStudy: "Full-Time (Technical)",
          seatIntake: "120 Seats (Morning and Evening Shifts)",
          eligibility: "Minimum 50% marks in 10+2 with Mathematics, Computer Science, or Information Practices as a compulsory subject.",
          objective: "To provide top-tier computer science education, software engineering principles, web development proficiency, and cloud administration skills.",
          highlights: [
            "Dedicated programming sandbox laboratories with high-speed setups.",
            "Hands-on full-stack development, mobile apps, and machine learning models.",
            "Regular hackathons and mock placement preparation camps.",
            "Placement records with tier-1 technology MNCs."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Computer Fundamentals & OS", "Programming in C", "Mathematics - I", "Technical Communication", "C Programming Lab"] },
            { semester: "Semester 2", subjects: ["Data Structures using C", "Digital Electronics", "Mathematics - II", "Principles of Management", "Data Structures Lab"] },
            { semester: "Semester 3", subjects: ["Object Oriented Programming with C++", "Database Management Systems", "Software Engineering", "Computer Networks", "DBMS & C++ Labs"] },
            { semester: "Semester 4", subjects: ["Java Programming", "Web Technologies (HTML, CSS, JS)", "Operating System Administration", "Computer Architecture", "Web & Java Labs"] },
            { semester: "Semester 5", subjects: ["Python Programming", "Software Testing & QA", "Introduction to Cloud Computing", "Elective (AI/Cyber Security)", "Python & Cloud Labs"] },
            { semester: "Semester 6", subjects: ["Mobile Application Development", "Network Security", "Major Capstone Project Work", "General Seminar & Comprehensive Viva"] }
          ]
        }
      },
      {
        name: "BCOM",
        detail: {
          name: "Bachelor of Commerce (BCOM)",
          duration: "3 Years",
          modeOfStudy: "Full-Time (Regular)",
          seatIntake: "150 Seats (Morning and Evening Shifts)",
          eligibility: "10+2 Passed from a recognized board in any stream with a minimum of 50% aggregate marks.",
          objective: "To establish a firm foundation in corporate accounting, financial planning, commercial law regulations, and modern business audits.",
          highlights: [
            "Hands-on Tally Prime and financial ERP laboratory training.",
            "Digital tax filing and GST computation workshops.",
            "Interactive seminars led by experienced Chartered Accountants.",
            "Assisted placement opportunities in banking, insurance, and audit firms."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Financial Accounting", "Business Law", "Microeconomics", "Business Communication", "Environmental Studies"] },
            { semester: "Semester 2", subjects: ["Corporate Accounting", "Corporate Laws", "Macroeconomics", "Business Mathematics & Stats", "E-Commerce Basics"] },
            { semester: "Semester 3", subjects: ["Cost Accounting", "Income Tax Law & Practice", "Company Law", "Computer Applications in Business", "Digital Banking"] },
            { semester: "Semester 4", subjects: ["Management Accounting", "Indirect Tax Laws (GST)", "Auditing Principles", "Financial Markets & Institutions", "Tally ERP Lab"] },
            { semester: "Semester 5", subjects: ["Financial Management", "Principles of Marketing", "Discipline Specific Elective - I", "Summer Training Viva"] },
            { semester: "Semester 6", subjects: ["Human Resource Management", "International Business", "Discipline Specific Elective - II", "Comprehensive Project Work"] }
          ]
        }
      },
      {
        name: "BCOM-HONS",
        detail: {
          name: "Bachelor of Commerce Honors (BCOM-HONS)",
          duration: "3 Years",
          modeOfStudy: "Full-Time (Commerce Honors)",
          seatIntake: "90 Seats (Morning shift)",
          eligibility: "Minimum 55% aggregate marks in 10+2 with Mathematics or Accountancy as a core subject.",
          objective: "To offer an advanced, mathematically rigorous education in corporate finance, micro/macroeconomic research, and audit procedures to prepare students for CA, CS, or MBA studies.",
          highlights: [
            "Advanced financial modeling and investment analysis labs.",
            "Specialized modules on International Financial Reporting Standards (IFRS).",
            "Priority placement in top-4 global accounting consulting firms.",
            "Direct research project options under senior business faculty."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Financial Accounting - Advanced", "Business Law & Practice", "Microeconomics Theory", "Quantitative Techniques - I"] },
            { semester: "Semester 2", subjects: ["Corporate Accounting - Advanced", "Corporate Governance & Ethics", "Macroeconomics Theory", "Quantitative Techniques - II"] },
            { semester: "Semester 3", subjects: ["Advanced Cost Accounting", "Income Tax & Corporate Tax Planning", "Business Mathematics", "Digital Finance & Analytics"] },
            { semester: "Semester 4", subjects: ["Advanced Management Accounting", "GST Laws & Auditing", "Corporate Finance Foundations", "Research Methodology Basics"] },
            { semester: "Semester 5", subjects: ["Investment Management", "International Finance", "Specialized Elective - I", "Research Project Proposal"] },
            { semester: "Semester 6", subjects: ["Financial Derivatives", "Strategic Financial Management", "Specialized Elective - II", "Honors Thesis & Defense"] }
          ]
        }
      }
    ]
  },
  {
    id: "distance",
    title: "Distance Learning",
    description: "Flexible self-paced courses supported by dynamic online lectures, video catalogs, and online assignments.",
    eligibilitySummary: "UG: 10+2 Pass | PG: Graduation",
    courses: [
      {
        name: "BA",
        badge: "Exam Mode Online",
        detail: {
          name: "Study Mode Private (ODE) - Bachelor of Arts (BA)",
          duration: "3 Years",
          modeOfStudy: "Distance Learning (Open & Distance Education)",
          seatIntake: "Flexible Batch Limits (Online Enrollment)",
          eligibility: "10+2 Pass in any stream from a recognized board (No age limit).",
          objective: "To offer flexible, high-quality humanities education enabling students to balance employment or distance limitations with academic progress.",
          highlights: [
            "Complete digital access to video catalogs and recorded lectures.",
            "Online study guides, e-books, and assignment submission portals.",
            "Interactive live webinars and doubt-clearing sessions on weekends.",
            "Examinations conducted completely online as per university guidelines."
          ],
          syllabus: [
            { semester: "Year 1", subjects: ["Foundation English", "Political Science Theory", "Indian History Survey", "Sociology Principles"] },
            { semester: "Year 2", subjects: ["Applied Writing in English", "Comparative Politics", "Medieval & Modern World History", "Social Structures"] },
            { semester: "Year 3", subjects: ["Contemporary Global Issues", "Modern Political Thinkers", "Specialized Humanities Elective", "Final Online Project"] }
          ]
        }
      },
      {
        name: "BBA",
        badge: "Exam Mode Online",
        detail: {
          name: "Study Mode Private (ODE) - Bachelor of Business Administration (BBA)",
          duration: "3 Years",
          modeOfStudy: "Distance Learning (Open & Distance Education)",
          seatIntake: "Flexible Batch Limits (Online Enrollment)",
          eligibility: "10+2 Pass from any recognized board in any stream.",
          objective: "To deliver essential business administration, operations, and marketing principles in a self-paced format tailored for working professionals.",
          highlights: [
            "24/7 access to the e-learning portal containing digital resources.",
            "Mock business simulation packages and video case discussions.",
            "Online project submissions with continuous mentor feedback.",
            "Online examinations and remote assessment certifications."
          ],
          syllabus: [
            { semester: "Year 1", subjects: ["Management Fundamentals", "Business Economics", "Accounting in Business", "Marketing Principles"] },
            { semester: "Year 2", subjects: ["Organizational Behavior", "Human Resource Principles", "Corporate Finance Basics", "Business Law Essentials"] },
            { semester: "Year 3", subjects: ["Strategic Business Management", "Specialization Marketing/HR elective", "E-Commerce", "Strategic Case Study Project"] }
          ]
        }
      },
      {
        name: "BCA",
        badge: "Exam Mode Online",
        detail: {
          name: "Study Mode Private (ODE) - Bachelor of Computer Applications (BCA)",
          duration: "3 Years",
          modeOfStudy: "Distance Learning (Open & Distance Education)",
          seatIntake: "Flexible Batch Limits (Online Enrollment)",
          eligibility: "10+2 passed with Mathematics/Computer Science background preferred.",
          objective: "To offer flexible programming, database administration, and software engineering education through distance pathways with digital examinations.",
          highlights: [
            "Cloud-hosted virtual labs for direct sandbox programming practice.",
            "Recorded coding lecture libraries covering C, Java, Python, and Web Dev.",
            "Digital assignment submissions and online project code reviews.",
            "Online examinations and standard industry certifications."
          ],
          syllabus: [
            { semester: "Year 1", subjects: ["Introduction to Computing & OS", "Programming in C", "Mathematical Foundations", "Data Structures Basics"] },
            { semester: "Year 2", subjects: ["Database Management Systems", "Object Oriented Programming (Java)", "Software Engineering Concepts", "Web Technologies"] },
            { semester: "Year 3", subjects: ["Information & Cyber Security", "Python & Cloud Basics", "Elective (AI/Network)", "System Code Project Submission"] }
          ]
        }
      },
      {
        name: "BCOM",
        badge: "Exam Mode Online",
        detail: {
          name: "Study Mode Private (ODE) - Bachelor of Commerce (BCOM)",
          duration: "3 Years",
          modeOfStudy: "Distance Learning (Open & Distance Education)",
          seatIntake: "Flexible Batch Limits (Online Enrollment)",
          eligibility: "10+2 Pass in any stream from a recognized board.",
          objective: "To deliver core accounting, corporate finance, and business law education through self-paced learning structures.",
          highlights: [
            "Comprehensive digital e-books and study resources.",
            "Step-by-step video guides on computerized bookkeeping and accounting.",
            "Online submission of practical financial audits and portfolios.",
            "Examinations conducted completely online as per university guidelines."
          ],
          syllabus: [
            { semester: "Year 1", subjects: ["Financial Accounting Foundations", "Business Law Principles", "Microeconomics", "Business Communication"] },
            { semester: "Year 2", subjects: ["Corporate Accounting", "Cost Accounting Concepts", "Income Tax & GST Basics", "Banking Systems"] },
            { semester: "Year 3", subjects: ["Auditing and Corporate Governance", "Management Accounting", "Financial Management Basics", "Digital Accounting Project"] }
          ]
        }
      }
    ]
  },
  {
    id: "ug",
    title: "Undergraduate (UG) Programmes",
    description: "Full-time premier collegiate programs emphasizing rigorous academic theory, algorithmic skills, and industry internships.",
    eligibilitySummary: "Passed Class 12th from a recognized board",
    courses: [
      {
        name: "B.Tech Degree Courses",
        detail: {
          name: "Bachelor of Technology (B.Tech Degree Courses)",
          duration: "4 Years",
          modeOfStudy: "Full-Time (Regular Collegiate)",
          seatIntake: "300 Seats (Morning Session)",
          eligibility: "Minimum 60% aggregate marks in 10+2 (Physics, Chemistry, Mathematics) with valid JEE Main or university entrance test scores.",
          objective: "To cultivate elite engineers equipped with deep computational, analytical, and design capabilities across modern engineering disciplines.",
          highlights: [
            "Access to state-of-the-art specialization laboratories (AI, Avionics, Mechanical, CAD).",
            "Mandatory industry internships, technical hackathons, and research projects.",
            "100% placement assistance with top-tier technology and infrastructure firms.",
            "Sub-streams: Aerospace, Aeronautical, Aircraft Maintenance, Civil, Computer Science, AI & ML, Cyber Security, Electrical, Mechanical, Electronics & Communication."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Engineering Mathematics - I", "Engineering Physics", "Basic Electrical & Electronics", "Programming Fundamentals (Python)", "Physics Lab", "Workshop"] },
            { semester: "Semester 2", subjects: ["Engineering Mathematics - II", "Engineering Chemistry", "Mechanics & Materials", "Communication & Ethics", "Chemistry Lab", "Engineering Graphics"] },
            { semester: "Semester 3", subjects: ["Discrete Mathematics", "Data Structures", "Digital System Design", "Sub-Stream Core - I", "Lab Work"] },
            { semester: "Semester 4", subjects: ["Operating Systems", "Computer Networks", "Database Systems", "Sub-Stream Core - II", "Object Oriented Labs"] },
            { semester: "Semester 5", subjects: ["Software Engineering", "Microprocessors", "Sub-Stream Specialization - I", "Elective - I", "Mini Project"] },
            { semester: "Semester 6", subjects: ["Web Technologies", "Compiler Design", "Sub-Stream Specialization - II", "Elective - II", "Technical Seminar"] },
            { semester: "Semester 7", subjects: ["Cloud Computing", "Artificial Intelligence", "Sub-Stream Specialization - III", "Industrial Internship Viva", "Project Phase - I"] },
            { semester: "Semester 8", subjects: ["Professional Ethics", "Sub-Stream Advanced Core - IV", "Major Capstone Project Defense", "Comprehensive Viva Voce"] }
          ]
        }
      },
      {
        name: "BBA(G)",
        detail: {
          name: "Bachelor of Business Administration (BBA - General)",
          duration: "3 Years",
          modeOfStudy: "Full-Time (Regular)",
          seatIntake: "120 Seats (Morning and Evening Batches)",
          eligibility: "Minimum 50% aggregate marks in 10+2 in any stream with English as a compulsory subject.",
          objective: "To deliver essential business management, leadership, and analytical skills to build competitive administration careers.",
          highlights: [
            "Practical corporate case-study presentations and role-plays.",
            "Specialized workshops in personality development and corporate etiquette.",
            "Structured industrial visits and corporate field surveys.",
            "Comprehensive internship modules and placement drives."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Management Principles", "Microeconomics", "Business Math", "Computer Applications", "Language Lab"] },
            { semester: "Semester 2", subjects: ["Organizational Behavior", "Macroeconomics", "Cost Accounting", "Business Law", "Environmental Science"] },
            { semester: "Semester 3", subjects: ["Marketing Management", "HR Management", "Business Statistics", "Financial Accounting Basics"] },
            { semester: "Semester 4", subjects: ["Financial Management", "Legal Aspects of Business", "Research Methods", "Information Systems"] },
            { semester: "Semester 5", subjects: ["Strategic Management", "Elective - I", "Elective - II", "Summer Internship Project"] },
            { semester: "Semester 6", subjects: ["Entrepreneurship", "Elective - III", "Elective - IV", "Major Research Project"] }
          ]
        }
      },
      {
        name: "BBA(CAM)",
        detail: {
          name: "Bachelor of Business Administration - Computer Aided Management (BBA-CAM)",
          duration: "3 Years",
          modeOfStudy: "Full-Time (Dual Tech-Management)",
          seatIntake: "60 Seats (Morning Batch)",
          eligibility: "Passed Class 12th with minimum 50% marks (compulsory Computer Science, IP, or Mathematics preferred).",
          objective: "To integrate conventional management education with computing tools, database management, and corporate technology strategies.",
          highlights: [
            "Dual specialization in Business Management and Systems Administration.",
            "Hands-on SQL database, ERP software, and spreadsheet modeling laboratories.",
            "Specialized training in e-commerce strategy and digital transformation.",
            "Placement opportunities in IT consulting, business analytics, and tech support."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Management Principles", "Computer Fundamentals", "Operating Systems Theory", "Financial Accounting", "Programming Lab"] },
            { semester: "Semester 2", subjects: ["Organizational Behavior", "Database Management Systems", "Business Mathematics", "DBMS Practical Lab", "Marketing Management"] },
            { semester: "Semester 3", subjects: ["Data Communications & Networks", "Software Engineering Concepts", "Financial Management", "Network Administration Lab"] },
            { semester: "Semester 4", subjects: ["E-Commerce & Digital Markets", "System Analysis & Design", "Cost Accounting", "Web Designing Lab"] },
            { semester: "Semester 5", subjects: ["Business Analytics & BI", "Enterprise Resource Planning (ERP)", "Strategic Management", "Summer IT Project Viva"] },
            { semester: "Semester 6", subjects: ["Cyber Laws & Information Security", "Management Support Systems", "Elective (Python/Cloud)", "Major CAM Project"] }
          ]
        }
      },
      {
        name: "B.A.LL.B(H)",
        detail: {
          name: "B.A. LL.B. Honors (Integrated 5 Years Law)",
          duration: "5 Years",
          modeOfStudy: "Full-Time (Integrated Professional)",
          seatIntake: "120 Seats (Morning Session)",
          eligibility: "Passed Class 12th from a recognized board with minimum 50% marks, and a valid CLAT, LSAT, or national law entrance score.",
          objective: "To deliver rigorous, comprehensive legal education combining liberal arts subjects with intensive legal research and moot court litigation practices.",
          highlights: [
            "Advanced moot court training halls for simulated trials.",
            "Legal aid clinics offering community legal assistance exposure.",
            "Mandatory internships under judges, senior advocates, and top law firms.",
            "Bar Council of India (BCI) aligned curriculum."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["English & Legal Language", "Political Science - I", "History of India", "Law of Torts - I", "Law of Contract - I"] },
            { semester: "Semester 2", subjects: ["Legal Writing & Methods", "Political Science - II", "Sociology - I", "Law of Torts - II", "Law of Contract - II"] },
            { semester: "Semester 3", subjects: ["Family Law - I", "Constitutional Law - I", "Economics & Law", "Criminal Law - I (IPC)", "Legal History"] },
            { semester: "Semester 4", subjects: ["Family Law - II", "Constitutional Law - II", "Administrative Law", "Criminal Law - II (CrPC)", "Public International Law"] },
            { semester: "Semester 5", subjects: ["Jurisprudence (Legal Theory)", "Environmental Law", "Property Law", "Company Law - I", "Clinical Education - I"] },
            { semester: "Semester 6", subjects: ["Labour & Industrial Law - I", "Company Law - II", "Intellectual Property Rights", "Law of Evidence", "Clinical Education - II"] },
            { semester: "Semester 7", subjects: ["Labour Law - II", "Taxation Law - I", "Drafting, Pleading & Conveyance", "Alternative Dispute Resolution (ADR)"] },
            { semester: "Semester 8", subjects: ["Taxation Law - II", "Professional Ethics", "Moot Court Exercise & Trial", "Human Rights Law"] },
            { semester: "Semester 9", subjects: ["Public Interest Litigation", "Cyber Law / Banking Law", "Internship Diary Evaluation", "Seminar Paper - I"] },
            { semester: "Semester 10", subjects: ["International Trade Law", "Land Laws & Rent Control", "Comprehensive Viva Voce", "Seminar Paper - II"] }
          ]
        }
      },
      {
        name: "B.Sc. Nursing",
        detail: {
          name: "Bachelor of Science in Nursing (B.Sc. Nursing)",
          duration: "4 Years",
          modeOfStudy: "Full-Time (Healthcare Professional)",
          seatIntake: "60 Seats (Morning Session)",
          eligibility: "Passed 10+2 with Physics, Chemistry, Biology, and English with minimum 45% marks from a recognized board.",
          objective: "To cultivate highly competent, caring, and professional nursing practitioners equipped with clinical, emergency, and research competencies.",
          highlights: [
            "Direct clinical rotations at attached teaching hospitals.",
            "Advanced clinical simulation labs with interactive patient manikins.",
            "Dedicated community health camps and maternal healthcare programs.",
            "Indian Nursing Council (INC) recognized curriculum."
          ],
          syllabus: [
            { semester: "Year 1", subjects: ["Anatomy & Physiology", "Nutrition & Biochemistry", "Nursing Foundations", "Psychology", "Microbiology"] },
            { semester: "Year 2", subjects: ["Sociology", "Medical-Surgical Nursing - I", "Pharmacology, Pathology, Genetics", "Community Health Nursing - I", "Communication & Tech"] },
            { semester: "Year 3", subjects: ["Medical-Surgical Nursing - II", "Child Health Nursing", "Mental Health Nursing", "Nursing Research & Statistics"] },
            { semester: "Year 4", subjects: ["Midwifery & Obstetrical Nursing", "Community Health Nursing - II", "Management of Nursing Services", "Clinical Internship (Practical)"] }
          ]
        }
      }
    ]
  },
  {
    id: "pg",
    title: "Postgraduate (PG) Programmes",
    description: "High-tier academic programs featuring advanced software engineering, research pathways, and leadership competencies.",
    eligibilitySummary: "Bachelor's degree in relevant discipline",
    courses: [
      {
        name: "MBA",
        detail: {
          name: "Master of Business Administration (MBA)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (Postgraduate)",
          seatIntake: "120 Seats (Morning and Evening Shifts)",
          eligibility: "Minimum 50% in graduation in any discipline with a valid score in CAT, MAT, CMAT, or university entrance examination.",
          objective: "To develop future-ready global managers, corporate leaders, and entrepreneurs with strong strategic, marketing, and financial analytical capabilities.",
          highlights: [
            "Interactive corporate projects, global field visits, and boardroom simulations.",
            "Leadership series, corporate mentorship, and incubation for startups.",
            "Specializations available: Aviation, Financial, Human Resource, Marketing, Operations.",
            "100% placement support with top banking, consulting, and corporate groups."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Management Process & Theory", "Managerial Economics", "Financial Accounting & Reporting", "Quantitative Methods", "Marketing Management Basics"] },
            { semester: "Semester 2", subjects: ["Human Resource Management", "Financial Management", "Operations Management", "Business Research Methods", "Management Information Systems"] },
            { semester: "Semester 3", subjects: ["Strategic Management", "Enterprise Resource Planning", "Specialization - I (Paper 1 & 2)", "Specialization - II (Paper 1 & 2)", "Summer Project Evaluation"] },
            { semester: "Semester 4", subjects: ["Corporate Governance & Ethics", "International Business Environment", "Specialization - I (Paper 3)", "Specialization - II (Paper 3)", "Dissertation & Defense"] }
          ]
        }
      },
      {
        name: "MCA",
        detail: {
          name: "Master of Computer Applications (MCA)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (Technical PG)",
          seatIntake: "60 Seats (Morning Session)",
          eligibility: "Passed BCA, Bachelor Degree in Computer Science, or equivalent degree with minimum 50% aggregate marks.",
          objective: "To deliver advanced software engineering education, cloud computing setups, enterprise application design, and analytical programming systems.",
          highlights: [
            "Access to high-performance cloud server labs and data center simulations.",
            "Advanced software design, database security, AI, and big data training.",
            "Elite tech placement drives featuring top software product organizations.",
            "Compulsory 6-month industrial internship and capstone project."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Advanced Data Structures & Algorithms", "Advanced Computer Networks", "Database Engineering", "Mathematical Foundations", "Data Structures & DBMS Labs"] },
            { semester: "Semester 2", subjects: ["Java Enterprise Technologies", "Cloud Computing & Devops", "Software Project Management", "Elective - I (AI/ML)", "Java & Cloud Labs"] },
            { semester: "Semester 3", subjects: ["Full-Stack Web Development", "Information Security & Cryptography", "Data Science & Big Data", "Elective - II (IoT/Forensics)", "Full-Stack Lab", "Research Seminar"] },
            { semester: "Semester 4", subjects: ["Advanced Technical Seminar", "Six Months Industry Internship", "Major Capstone Project Defense", "Comprehensive Viva Voce"] }
          ]
        }
      },
      {
        name: "M.Com",
        detail: {
          name: "Master of Commerce (M.Com)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (Regular PG)",
          seatIntake: "60 Seats (Morning Session)",
          eligibility: "Completed B.Com or BBA from a recognized university with minimum 50% aggregate marks.",
          objective: "To offer high-level training in corporate finance, advanced accounting practices, research methodology, and statistical data analysis.",
          highlights: [
            "Advanced research paper publication mentoring.",
            "Statistical software training (SPSS, R programming) for financial analysis.",
            "Preparation assistance for academic research and UGC-NET examination.",
            "Direct corporate project options in tax laws and commercial audits."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Management Concepts & Theory", "Advanced Financial Accounting", "Statistical Analysis in Business", "Managerial Economics"] },
            { semester: "Semester 2", subjects: ["Financial Management & Strategy", "Research Methodology", "Corporate Tax Planning", "Business Environment"] },
            { semester: "Semester 3", subjects: ["Advanced Cost & Management Accounting", "E-Commerce & Digital Markets", "Elective - I", "Summer Training Report"] },
            { semester: "Semester 4", subjects: ["Corporate Governance & CSR", "International Business Finance", "Elective - II", "Master's Thesis and Viva"] }
          ]
        }
      },
      {
        name: "M.Sc-IT",
        detail: {
          name: "Master of Science in Information Technology (M.Sc-IT)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (Information Technology)",
          seatIntake: "60 Seats (Morning Session)",
          eligibility: "B.Sc. CS/IT, BCA, or equivalent degree with minimum 50% marks from a recognized university.",
          objective: "To deliver advanced specialization in data communication systems, cyber forensics, network infrastructure, and database engineering.",
          highlights: [
            "Dedicated network simulation and cyber forensics laboratories.",
            "Advanced training in big data systems and cloud deployment architecture.",
            "Priority research projects with faculty guidance.",
            "Placement training for systems administration, networking, and IT security roles."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Advanced Database Management Systems", "Data Communication & Computer Networks", "Object Oriented Analysis & Design", "Database Practical Lab"] },
            { semester: "Semester 2", subjects: ["Information Security & Cryptography", "Web Technology & Distributed Systems", "Operating Systems Architecture", "Java Programming Lab"] },
            { semester: "Semester 3", subjects: ["Data Mining & Warehousing", "Mobile Computing Protocols", "Elective - I (Cloud Computing)", "Network Administration Lab"] },
            { semester: "Semester 4", subjects: ["Software Quality & Testing", "Elective - II (Machine Learning)", "Research Project and Dissertation"] }
          ]
        }
      },
      {
        name: "MA-EDU",
        detail: {
          name: "Master of Arts in Education (MA-EDU)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (Education Studies)",
          seatIntake: "40 Seats (Morning Session)",
          eligibility: "Graduation in any discipline from a recognized university with minimum 45% aggregate marks.",
          objective: "To develop specialized knowledge in educational philosophy, psychological testing, curriculum design, and educational policy formulation.",
          highlights: [
            "Regular pedagogical research seminars and field studies.",
            "Practical training in educational psychology laboratories.",
            "Guidance on curriculum drafting for school and collegiate tracks.",
            "Coaching for national level educational research exams."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Philosophical Foundations of Education", "Sociological Foundations of Education", "Learner & Learning Process", "Educational Technology"] },
            { semester: "Semester 2", subjects: ["Historical & Political Perspectives", "Psychological Foundations", "Research Methodology in Education", "Statistics in Education"] },
            { semester: "Semester 3", subjects: ["Curriculum Studies", "Teacher Education", "Specialization - I (Educational Admin)", "Field Work Report"] },
            { semester: "Semester 4", subjects: ["Educational Guidance & Counseling", "Specialization - II (Special Education)", "Master's Research Dissertation & Viva"] }
          ]
        }
      },
      {
        name: "MA-ECO",
        detail: {
          name: "Master of Arts in Economics (MA-ECO)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (Economics)",
          seatIntake: "50 Seats (Morning Session)",
          eligibility: "Graduation in any discipline with minimum 45% marks (Economics/Mathematics at degree level preferred).",
          objective: "To deliver advanced theoretical and quantitative knowledge in micro/macroeconomics, econometrics, and public policies.",
          highlights: [
            "Advanced econometrics and data analysis lab setups.",
            "Practical research projects on current fiscal policies and trade issues.",
            "Preparation assistance for economic services and research positions.",
            "Regular workshops on financial markets and banking indicators."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Microeconomic Analysis - I", "Macroeconomic Analysis - I", "Mathematical Methods for Economics", "Public Economics"] },
            { semester: "Semester 2", subjects: ["Microeconomic Analysis - II", "Macroeconomic Analysis - II", "Statistical Methods for Economics", "Development Economics"] },
            { semester: "Semester 3", subjects: ["Econometric Methods - I", "International Trade Theory", "Discipline Elective - I", "Research Project Proposal"] },
            { semester: "Semester 4", subjects: ["Econometric Methods - II", "Indian Economic Policy", "Discipline Elective - II", "Master's Thesis Defense"] }
          ]
        }
      },
      {
        name: "MA-ENG",
        detail: {
          name: "Master of Arts in English (MA-ENG)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (English Literature)",
          seatIntake: "50 Seats (Morning Session)",
          eligibility: "Graduation in any stream with minimum 45% marks from a recognized university.",
          objective: "To provide an advanced critical study of English literature, literary criticism, linguistics, and cultural theories.",
          highlights: [
            "Research-led academic debate seminars and writing workshops.",
            "Mentoring for literary publications and critical paper writing.",
            "Guest lecture series featuring international scholars and authors.",
            "Preparation for UGC-NET and academic teaching paths."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Chaucer to Elizabethan Poetry & Drama", "Jacobean to Restoration Drama", "Augustan Age Literature", "Literary Criticism - I"] },
            { semester: "Semester 2", subjects: ["Romantic & Victorian Literature", "Linguistics & Phonetics", "Literary Criticism - II", "American Literature"] },
            { semester: "Semester 3", subjects: ["Modernist Poetry & Drama", "Postcolonial Literature", "Elective Specialization - I", "Research Seminar Presentation"] },
            { semester: "Semester 4", subjects: ["Contemporary Fiction", "Indian English Literature", "Elective Specialization - II", "Thesis Submission & Viva"] }
          ]
        }
      },
      {
        name: "MA-HINDI",
        detail: {
          name: "Master of Arts in Hindi (MA-HINDI)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (Hindi Literature)",
          seatIntake: "50 Seats (Morning Session)",
          eligibility: "Graduation with Hindi as a subject, or graduation in any discipline with minimum 45% marks.",
          objective: "To deliver advanced studies in Hindi literature, linguistics, media translation, and comparative critical theories.",
          highlights: [
            "Seminars on classical Hindi prose, poetry, and modern drama.",
            "Practical workshops on Hindi journalism, media writing, and translation.",
            "Preparation for translation and official language officer jobs.",
            "Hindi literary club events and publication options."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Hindi Sahitya ka Itihas (Aadi se Reeti Kaal)", "Prachin evam Madhyakalin Kavya", "Bhasha Vigyan aur Hindi Bhasha", "Bharatiya Kavyashastra"] },
            { semester: "Semester 2", subjects: ["Hindi Sahitya ka Itihas (Aadhunik Kaal)", "Aadhunik Hindi Kavya", "Hindi Gadya (Kahani aur Upanyas)", "Paschatya Kavyashastra"] },
            { semester: "Semester 3", subjects: ["Hindi Natak aur Nibandh", "Katha Sahitya evam Anuvad Vigyan", "Elective - I", "Research Paper writing"] },
            { semester: "Semester 4", subjects: ["Lok Sahitya", "Hindi Patrakarita aur Prayojanmulak Hindi", "Elective - II", "Dissertation & Viva"] }
          ]
        }
      },
      {
        name: "MA-HISTORY",
        detail: {
          name: "Master of Arts in History (MA-HISTORY)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (History Studies)",
          seatIntake: "50 Seats (Morning Session)",
          eligibility: "Graduation in any stream with minimum 45% marks from a recognized university.",
          objective: "To deliver advanced historical education covering ancient, medieval, and modern Indian history, alongside global historiography and research methodology.",
          highlights: [
            "Historical archives visiting research programs.",
            "Mentoring on manuscript preservation, numismatics, and archaeology basics.",
            "Advanced discussions on historiography and postcolonial perspectives.",
            "Civil service competitive exam historical coaching."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Historiography: Theory & Methods", "Ancient Indian Civilizations", "History of Ancient Near East", "Political Ideas in Indian History"] },
            { semester: "Semester 2", subjects: ["Medieval Indian Society & Economy", "Modern Historiography", "Rise of Modern West", "Constitutional History of India"] },
            { semester: "Semester 3", subjects: ["Modern India (1857-1947)", "World History (20th Century)", "Elective Specialization - I", "Archival Field Report"] },
            { semester: "Semester 4", subjects: ["Contemporary India (Post-1947)", "International Relations History", "Elective Specialization - II", "Dissertation Defense"] }
          ]
        }
      },
      {
        name: "MA-POL SCI",
        detail: {
          name: "Master of Arts in Political Science (MA-POL SCI)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (Political Science)",
          seatIntake: "50 Seats (Morning Session)",
          eligibility: "Graduation in any stream with minimum 45% marks from a recognized university.",
          objective: "To build a deep understanding of political philosophies, comparative systems, international relations, public policy, and Indian administration.",
          highlights: [
            "Mock parliaments, legislative policy drafting, and political surveys.",
            "Dedicated seminars on public policy and international relations theories.",
            "Field research in local administration and NGO operations.",
            "Competitive exam alignment and political consultancy preparation."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Western Political Thought", "Indian Political System", "Comparative Political Analysis", "Public Administration Theories"] },
            { semester: "Semester 2", subjects: ["Modern Indian Political Thought", "International Relations Theory", "Public Policy Process", "Research Methodology"] },
            { semester: "Semester 3", subjects: ["India's Foreign Policy", "Decentralization & Local Governance", "Specialization Elective - I", "Seminar Paper Presentation"] },
            { semester: "Semester 4", subjects: ["Human Rights in Globalized World", "Contemporary Political Theory", "Specialization Elective - II", "Dissertation & Defense"] }
          ]
        }
      },
      {
        name: "MA-SOCIOLOGY",
        detail: {
          name: "Master of Arts in Sociology (MA-SOCIOLOGY)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (Sociology)",
          seatIntake: "50 Seats (Morning Session)",
          eligibility: "Graduation in any stream with minimum 45% marks from a recognized university.",
          objective: "To deliver advanced sociological knowledge covering classical/modern social theories, social research methodology, gender, development, and family structures.",
          highlights: [
            "Weekly community social observation field visits.",
            "Mentoring on qualitative and quantitative sociological survey design.",
            "Exclusive seminars on gender studies, tribal sociology, and globalization.",
            "NGO placement drives and social welfare career preparation."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Classical Sociological Theories", "Methodology of Social Research", "Indian Society & Social Institutions", "Sociology of Development"] },
            { semester: "Semester 2", subjects: ["Modern Sociological Theories", "Quantitative Research Techniques", "Rural & Urban Sociology", "Sociology of Gender"] },
            { semester: "Semester 3", subjects: ["Sociology of Religion", "Social Movements in India", "Elective Specialization - I", "Sociological Field Report"] },
            { semester: "Semester 4", subjects: ["Globalization & Society", "Sociology of Environment", "Elective Specialization - II", "Dissertation and Viva"] }
          ]
        }
      },
      {
        name: "MSW",
        detail: {
          name: "Master of Social Work (MSW)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (Professional Social Work)",
          seatIntake: "40 Seats (Morning Session)",
          eligibility: "Graduation in any stream with minimum 50% marks from a recognized university.",
          objective: "To deliver elite professional social work training, NGO management skills, disaster relief administration, and clinical counseling competencies.",
          highlights: [
            "Concurrent field work placements weekly at welfare agencies.",
            "Strategic partnerships with top national and international NGOs.",
            "Specialized training in child protection, mental health, and family welfare.",
            "Direct recruitment in CSR departments, NGOs, and welfare boards."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["History & Philosophy of Social Work", "Social Work with Communities", "Dynamics of Human Behaviour", "Concurrent Field Work - I"] },
            { semester: "Semester 2", subjects: ["Social Work with Individuals & Groups", "Social Work Research & Statistics", "Social Policy & Planning", "Concurrent Field Work - II"] },
            { semester: "Semester 3", subjects: ["NGO Management & Corporate CSR", "Medical & Psychiatric Social Work", "Disaster Management & Welfare", "Concurrent Field Work - III"] },
            { semester: "Semester 4", subjects: ["Social Work with Families & Children", "Labour Welfare & Legislation", "Block Field Placement (Internship)", "Master's Dissertation Defense"] }
          ]
        }
      },
      {
        name: "LL.M.",
        detail: {
          name: "Master of Laws (LL.M.)",
          duration: "2 Years",
          modeOfStudy: "Full-Time (Postgraduate Law)",
          seatIntake: "30 Seats (Morning Session)",
          eligibility: "LL.B. or integrated 5-year Law degree with minimum 50% marks from a recognized institute (Bar Council registered).",
          objective: "To offer specialized legal education, advanced jurisprudential research, judicial review analysis, and legal drafting.",
          highlights: [
            "Advanced research seminars, moot court training, and judicial analysis panels.",
            "Specialization streams: Corporate Law, Criminal Law, or Intellectual Property Rights.",
            "attached legal aid society work and litigation simulation labs.",
            "Guidance for judicial services and legal officer recruitment."
          ],
          syllabus: [
            { semester: "Semester 1", subjects: ["Research Methodology & Legal Writing", "Comparative Public Law", "Law & Social Transformation in India", "Constitutional Law Theories"] },
            { semester: "Semester 2", subjects: ["Judicial Process & Review", "Specialization Core - I", "Specialization Core - II", "Drafting & Arbitration Practices"] },
            { semester: "Semester 3", subjects: ["Specialization Core - III", "Specialization Core - IV", "Discipline Elective - I", "Legal Aid & Practice evaluation"] },
            { semester: "Semester 4", subjects: ["Specialization Core - V", "Discipline Elective - II", "Master's Law Dissertation Submission", "Comprehensive Defense & Viva"] }
          ]
        }
      }
    ]
  }
];
