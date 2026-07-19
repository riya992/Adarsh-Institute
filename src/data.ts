import { CourseCategory, FAQItem } from "./types";

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: "skill-india",
    title: "Computer Education Skill India Program",
    description: "National skill development computer training programs designed for employment readiness.",
    eligibilitySummary: "Skill Training: Open to All",
    courses: [
      { name: "DCA (Diploma in Computer Applications)", duration: "12 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "DCS (Diploma in Computer Software)", duration: "12 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "DCA + English Spoken Course", duration: "15 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "Tally Prime", duration: "3 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "Office Automation (Basic)", duration: "2 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "Desktop Publishing (DTP)", duration: "3 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "Web Designing", duration: "3 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "Spoken English", duration: "3 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "Digital Marketing", duration: "3 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "C Programming", duration: "2 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "C++ Programming", duration: "2 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "Core Java", duration: "3 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "Python", duration: "3 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "MySQL", duration: "2 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "DSA (Data Structures & Algorithms)", duration: "3 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] },
      { name: "Basic Computer Course (BCC)", duration: "3 Months", fee: "", eligibility: "Skill Training: Open to All", description: "", syllabus: [] }
    ],
    faqs: [
      {
        question: "Who can enroll in Skill India courses?",
        answer: "These courses are open to all students, job seekers, and working professionals looking to build practical computer skills."
      },
      {
        question: "Are certificates provided?",
        answer: "Yes, standard completion certificates are awarded upon finishing the practical exams."
      }
    ]
  },
  {
    id: "regular",
    title: "Regular Courses",
    description: "Highly focused, skill-based curriculum with hands-on lab sessions, standard examinations, and industry certification.",
    eligibilitySummary: "UG: 10+2 Passed | PG: Graduate",
    courses: [
      { name: "BCA", duration: "3 Years", fee: "", eligibility: "10+2 Passed from a recognized board", description: "", syllabus: [] },
      { name: "BBA", duration: "3 Years", fee: "", eligibility: "10+2 Passed from a recognized board", description: "", syllabus: [] },
      { name: "BA", duration: "3 Years", fee: "", eligibility: "10+2 Passed from a recognized board", description: "", syllabus: [] },
      { name: "B.Com", duration: "3 Years", fee: "", eligibility: "10+2 Passed from a recognized board", description: "", syllabus: [] },
      { name: "B.Sc", duration: "3 Years", fee: "", eligibility: "10+2 Passed from a recognized board", description: "", syllabus: [] },
      { name: "B.Tech", duration: "4 Years", fee: "", eligibility: "10+2 Passed from a recognized board", description: "", syllabus: [] },
      { name: "MBA", duration: "2 Years", fee: "", eligibility: "Graduation in relevant discipline", description: "", syllabus: [] },
      { name: "MCA", duration: "2 Years", fee: "", eligibility: "Graduation in relevant discipline", description: "", syllabus: [] },
      { name: "MA", duration: "2 Years", fee: "", eligibility: "Graduation in relevant discipline", description: "", syllabus: [] },
      { name: "M.Com", duration: "2 Years", fee: "", eligibility: "Graduation in relevant discipline", description: "", syllabus: [] },
      { name: "MSc IT", duration: "2 Years", fee: "", eligibility: "Graduation in relevant discipline", description: "", syllabus: [] },
      { name: "MSW", duration: "2 Years", fee: "", eligibility: "Graduation in relevant discipline", description: "", syllabus: [] }
    ],
    faqs: [
      {
        question: "Are Regular courses UGC approved?",
        answer: "Yes, all regular degree programmes offered are fully recognized and approved by the UGC (University Grants Commission) and respective regulatory bodies."
      },
      {
        question: "Are classes conducted offline?",
        answer: "Yes, regular courses feature structured offline classes, laboratory sessions, and direct interactions in on-campus classrooms."
      },
      {
        question: "Is placement assistance available?",
        answer: "Yes, students enrolled in regular programmes receive 100% placement support, pre-placement training, and campus interview opportunities through our dedicated placement cell."
      }
    ]
  },
  {
    id: "distance",
    title: "Distance Learning",
    description: "Flexible self-paced courses supported by dynamic online lectures, video catalogs, and online assignments.",
    eligibilitySummary: "UG: 10+2 Pass | PG: Graduation",
    courses: [
      { name: "BA", duration: "3 Years", fee: "", eligibility: "10+2 Pass", description: "", syllabus: [] },
      { name: "B.Com", duration: "3 Years", fee: "", eligibility: "10+2 Pass", description: "", syllabus: [] },
      { name: "BBA", duration: "3 Years", fee: "", eligibility: "10+2 Pass", description: "", syllabus: [] },
      { name: "BCA", duration: "3 Years", fee: "", eligibility: "10+2 Pass", description: "", syllabus: [] },
      { name: "MA", duration: "2 Years", fee: "", eligibility: "Graduation", description: "", syllabus: [] },
      { name: "M.Com", duration: "2 Years", fee: "", eligibility: "Graduation", description: "", syllabus: [] },
      { name: "MBA", duration: "2 Years", fee: "", eligibility: "Graduation", description: "", syllabus: [] },
      { name: "MCA", duration: "2 Years", fee: "", eligibility: "Graduation", description: "", syllabus: [] }
    ],
    faqs: [
      {
        question: "Is the degree valid?",
        answer: "Yes, distance learning degrees are fully recognized and valid for employment, higher studies, and government job applications."
      },
      {
        question: "Can working professionals apply?",
        answer: "Yes, these courses are specially designed with flexible schedules to allow working professionals to study at their own pace."
      },
      {
        question: "Are examinations conducted online as per university guidelines?",
        answer: "Yes, examinations are conducted online or through designated centers as per the university and UGC guidelines."
      }
    ]
  },
  {
    id: "ug",
    title: "Undergraduate (UG) Programmes",
    description: "Full-time premier collegiate programs emphasizing rigorous academic theory, algorithmic skills, and industry internships.",
    eligibilitySummary: "Passed Class 12th from a recognized board",
    courses: [
      { name: "BA", duration: "3 Years", fee: "", eligibility: "Passed Class 12th from a recognized board", description: "", syllabus: [] },
      { name: "BA (Hons)", duration: "3 Years", fee: "", eligibility: "Passed Class 12th from a recognized board", description: "", syllabus: [] },
      { name: "BBA", duration: "3 Years", fee: "", eligibility: "Passed Class 12th from a recognized board", description: "", syllabus: [] },
      { name: "BCA", duration: "3 Years", fee: "", eligibility: "Passed Class 12th from a recognized board", description: "", syllabus: [] },
      { name: "B.Com", duration: "3 Years", fee: "", eligibility: "Passed Class 12th from a recognized board", description: "", syllabus: [] },
      { name: "B.Com (Hons)", duration: "3 Years", fee: "", eligibility: "Passed Class 12th from a recognized board", description: "", syllabus: [] },
      { name: "B.Sc", duration: "3 Years", fee: "", eligibility: "Passed Class 12th from a recognized board", description: "", syllabus: [] },
      { name: "B.Tech", duration: "4 Years", fee: "", eligibility: "Passed Class 12th from a recognized board", description: "", syllabus: [] }
    ],
    faqs: [
      {
        question: "Which streams are eligible?",
        answer: "Students from Science, Commerce, or Arts streams can apply, subject to specific course requirements (e.g., Mathematics for B.Sc. or B.Tech)."
      },
      {
        question: "Are entrance exams mandatory for every course?",
        answer: "No, admissions to most undergraduate programmes are merit-based, though some specialized courses may require an entrance test."
      },
      {
        question: "Can students apply after results are declared?",
        answer: "Yes, students can submit their online enquiries and secure provisional admission while awaiting final results."
      }
    ]
  },
  {
    id: "pg",
    title: "Postgraduate (PG) Programmes",
    description: "High-tier academic programs featuring advanced software engineering, research pathways, and leadership competencies.",
    eligibilitySummary: "Bachelor's degree in relevant discipline",
    courses: [
      { name: "MBA", duration: "2 Years", fee: "", eligibility: "Bachelor’s degree in relevant discipline from a recognized university", description: "", syllabus: [] },
      { name: "MCA", duration: "2 Years", fee: "", eligibility: "Bachelor’s degree in relevant discipline from a recognized university", description: "", syllabus: [] },
      { name: "MA (Education)", duration: "2 Years", fee: "", eligibility: "Bachelor’s degree in relevant discipline from a recognized university", description: "", syllabus: [] },
      { name: "MA (English)", duration: "2 Years", fee: "", eligibility: "Bachelor’s degree in relevant discipline from a recognized university", description: "", syllabus: [] },
      { name: "MA (Hindi)", duration: "2 Years", fee: "", eligibility: "Bachelor’s degree in relevant discipline from a recognized university", description: "", syllabus: [] },
      { name: "MA (History)", duration: "2 Years", fee: "", eligibility: "Bachelor’s degree in relevant discipline from a recognized university", description: "", syllabus: [] },
      { name: "MA (Political Science)", duration: "2 Years", fee: "", eligibility: "Bachelor’s degree in relevant discipline from a recognized university", description: "", syllabus: [] },
      { name: "MA (Sociology)", duration: "2 Years", fee: "", eligibility: "Bachelor’s degree in relevant discipline from a recognized university", description: "", syllabus: [] },
      { name: "M.Com", duration: "2 Years", fee: "", eligibility: "Bachelor’s degree in relevant discipline from a recognized university", description: "", syllabus: [] },
      { name: "MSc IT", duration: "2 Years", fee: "", eligibility: "Bachelor’s degree in relevant discipline from a recognized university", description: "", syllabus: [] },
      { name: "MSW", duration: "2 Years", fee: "", eligibility: "Bachelor’s degree in relevant discipline from a recognized university", description: "", syllabus: [] }
    ],
    faqs: [
      {
        question: "Is graduation mandatory?",
        answer: "Yes, a completed Bachelor's degree or equivalent qualification is required to secure admission to PG programmes."
      },
      {
        question: "Can final-year students apply?",
        answer: "Yes, final-year undergraduate students can apply provisionally, provided they submit proof of graduation before the term starts."
      },
      {
        question: "Are specialization options available?",
        answer: "Yes, we offer multiple specializations in MBA, MCA, and MA programmes to align with your career goals."
      }
    ]
  },
  {
    id: "diploma",
    title: "Diploma Programmes",
    description: "Industry-focused diploma programmes with practical training, skill development, and career-oriented curriculum across multiple engineering and technical disciplines.",
    eligibilitySummary: "Minimum 10th Pass (Course-specific eligibility applies)",
    courses: [
      { name: "Aeronautical Engineering", duration: "3 Years", fee: "", eligibility: "Passed Class 10th from a recognized board. Some programmes may have subject-specific requirements.", description: "", syllabus: [] },
      { name: "Aircraft Maintenance Engineering (AME)", duration: "3 Years", fee: "", eligibility: "Passed Class 10th from a recognized board. Some programmes may have subject-specific requirements.", description: "", syllabus: [] },
      { name: "Aircraft Maintenance Engineering + EASA Modules", duration: "3 Years", fee: "", eligibility: "Passed Class 10th from a recognized board. Some programmes may have subject-specific requirements.", description: "", syllabus: [] },
      { name: "Artificial Intelligence & Machine Learning", duration: "3 Years", fee: "", eligibility: "Passed Class 10th from a recognized board. Some programmes may have subject-specific requirements.", description: "", syllabus: [] },
      { name: "Automobile Engineering", duration: "3 Years", fee: "", eligibility: "Passed Class 10th from a recognized board. Some programmes may have subject-specific requirements.", description: "", syllabus: [] },
      { name: "Civil Engineering", duration: "3 Years", fee: "", eligibility: "Passed Class 10th from a recognized board. Some programmes may have subject-specific requirements.", description: "", syllabus: [] },
      { name: "Computer Science & Engineering", duration: "3 Years", fee: "", eligibility: "Passed Class 10th from a recognized board. Some programmes may have subject-specific requirements.", description: "", syllabus: [] },
      { name: "Electrical Engineering", duration: "3 Years", fee: "", eligibility: "Passed Class 10th from a recognized board. Some programmes may have subject-specific requirements.", description: "", syllabus: [] },
      { name: "Electronics & Communication Engineering", duration: "3 Years", fee: "", eligibility: "Passed Class 10th from a recognized board. Some programmes may have subject-specific requirements.", description: "", syllabus: [] },
      { name: "Fire Technology & Safety", duration: "3 Years", fee: "", eligibility: "Passed Class 10th from a recognized board. Some programmes may have subject-specific requirements.", description: "", syllabus: [] },
      { name: "Mechanical Engineering", duration: "3 Years", fee: "", eligibility: "Passed Class 10th from a recognized board. Some programmes may have subject-specific requirements.", description: "", syllabus: [] },
      { name: "Medical Lab Technician", duration: "3 Years", fee: "", eligibility: "Passed Class 10th from a recognized board. Some programmes may have subject-specific requirements.", description: "", syllabus: [] },
      { name: "All Diploma Courses (Lateral Entry)", duration: "2 Years", fee: "", eligibility: "ITI or equivalent qualification as per programme eligibility.", description: "", syllabus: [] }
    ],
    faqs: [
      {
        question: "Who can apply for Diploma courses?",
        answer: "Students who have passed Class 10th from a recognized board can apply for eligible diploma programmes."
      },
      {
        question: "Is practical training included?",
        answer: "Yes, diploma programmes include practical labs, workshops, and industry-oriented training."
      },
      {
        question: "Can students take lateral entry admission?",
        answer: "Yes, eligible ITI or equivalent qualified students can apply for lateral entry where applicable."
      }
    ]
  },
  {
    id: "digital-marketing-section",
    title: "Digital Marketing + AI Program",
    description: "Flagship 12-month comprehensive digital marketing training program designed to turn you into a certified growth expert.",
    eligibilitySummary: "Eligibility: Open to All",
    courses: [
      { name: "Master Diploma in Digital Marketing + AI (MDDM + AI)", duration: "12 Months", fee: "", eligibility: "Open to All", description: "Flagship 12-month course teaching SEO, SEM, SMM, Web Designing, Email Marketing, Inbound Marketing, Web Analytics, YouTube Marketing and more.", syllabus: [] }
    ],
    faqs: [
      {
        question: "Who can enroll in this program?",
        answer: "Anyone who has passed 10th or 12th grade with basic computer familiarity can enroll."
      },
      {
        question: "Will I learn website building?",
        answer: "Yes, you will learn to build websites on Google Sites, Wix, and WordPress as part of the Web Designing module."
      }
    ]
  },
  {
    id: "data-analytics-section",
    title: "Data Analytics Program",
    description: "Learn to inspect, clean, transform, and model data to discover useful information and support decision-making.",
    eligibilitySummary: "Eligibility: Open to All",
    courses: [
      { name: "Professional Diploma in Data Analytics (PDDA)", duration: "4-6 Months", fee: "", eligibility: "Open to All", description: "Learn to build models, interactive dashboards, and optimize queries with Advance Excel, Power BI, Python, and MySQL.", syllabus: [] }
    ],
    faqs: [
      {
        question: "What tools are covered in this program?",
        answer: "You will master Advance Excel, Power BI, Python (specifically data libraries like Pandas and NumPy), and MySQL databases."
      },
      {
        question: "Do I need a coding background?",
        answer: "No coding background is required! We teach database querying and Python analysis in a beginner-friendly manner."
      }
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How can I take admission to Adarsh Institute?",
    answer: "You can apply easily by clicking the 'Enquiry Now' button on our website. Fill out the registration form with your basic academic details, choose your program, and submit. Our admissions counselor will contact you within 24 hours to guide you through verification, fee payment, and course allotment."
  },
  {
    question: "What documents are required for registration?",
    answer: "1. 2 passport size photos\n2. Aadhaar card photocopy"
  },
  {
    question: "Are online classes and hybrid modes available?",
    answer: "Yes, indeed! To help working professionals and remote students, we offer standard hybrid programs. You get access to our online portal featuring live streams and recorded sessions. Regular practical examinations and lab sessions can be scheduled on-campus on weekends."
  },
  {
    question: "Is there placement assistance provided?",
    answer: "Absolutely. Adarsh Institute houses a dedicated placement cell. We conduct resume-building workshops, mock technical interviews, and invite premium tech companies and financial agencies for campus recruitment drives. Graduates receive lifetime access to our legacy alumni network and job boards."
  },
  {
    question: "What is the duration of each course category?",
    answer: "Regular short-term courses like Tally Prime, Python, or Digital Marketing last 2 to 3 months. Diplomas like DCA and ADCA span 6 to 12 months. Undergraduate degrees (BCA, B.Sc.) are strictly 3 years, and postgraduate programs (MCA, M.Sc.) are completed over 2 years."
  },
  {
    question: "Can I apply online from other regions?",
    answer: "Yes! Adarsh Institute accepts national and international online admissions. Our distance learning and collegiate modules are designed to onboard students globally, ensuring smooth digitial document verification and payment gateways."
  },
  {
    question: "Is there any merit scholarship available?",
    answer: "Yes, Adarsh Institute rewards brilliance. Students with 85% or higher in their 12th Board examinations are eligible for an automatic 20% to 50% tuition fee waiver. We also run an annual Adarsh Legacy Scholarship Test (ALST) for additional fee concessions."
  }
];

export const CONTACT_INFO = {
  address: "1st Floor, Near RK Sweets, Safiabad Road, Narela, Delhi 110040",
  phone: "+91 92126 21301",
  email: "adarsh2010education@gmail.com",
  website: "www.adarsheducation.in",
  instagram: "https://www.instagram.com/adarsh_computereducationnarela?igsh=bnhodXlqbzB5Mnls",
  whatsappGroup: "https://chat.whatsapp.com/Lb3KoW5S31n2hv5NK4KylH?s=cl&p=a&ilr=4&amv=1",
  facebook: "https://www.facebook.com/share/1DTAQXq9eC/",
  youtube: "https://youtube.com/c/AdarshInstituteLegacy"
};
