export interface ProfileData {
  id: string;
  name: string;
  title: string;
  image: string;
  content: string;
}

export interface FacultyMember {
  _id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  dateOfJoining: string;
  photo: string | null;
  department: string;
}


export const navItems = [
  { label: "Principal", id: "principal" },
  { label: "Placements", id: "placements" },
  { label: "Achievements", id: "achievements" },
  { label: "NIRF", id: "nirf" },
  { label: "Mandatory Disclosure", id: "mandatory-disclosure" },
  { label: "IQAC", id: "iqac" },
  { label: "SWAYAM-NPTEL", id: "swayam-nptel" },
  { label: "Vision & Mission", id: "vision-mission" }
];

export const profiles: ProfileData[] = [
  {
    id: "principal",
    name: "Dr. Sanjay Patil",
    title: "Principal",
    image: "https://static.vecteezy.com/system/resources/thumbnails/029/271/062/small_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg",
    content: `From the Principal's Desk
  
Welcome to the School of Engineering at Matoshri Pratishthan Group of Institutions, a center of excellence in technical education since 2009.

Key Highlights:
- NBA accredited programs
- 10+ Undergraduate Engineering programs
- 98% placement record (2022-23)
- ₹20 crores annual research funding
- 75+ industry collaborations

Our Infrastructure:
- 30+ advanced laboratories
- 15,000+ sq.ft. digital library
- Innovation and Incubation Center
- High-performance computing facility
- Sports complex with indoor stadium

Our faculty includes:
- 80% PhD holders
- 15+ years average teaching experience
- 50+ patents filed
- 200+ research publications

I invite you to join our vibrant academic community where we transform students into industry-ready professionals.`
  }
];

export const departments: Department[] = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    shortName: "CSE",
    description: "The CSE department focuses on cutting-edge technologies including AI, Machine Learning, Cybersecurity, and IoT with state-of-the-art computing facilities.",
    image: "https://aitsrajampet.ac.in/images/artificial-intelligence.jpg",
    establishedYear: 2009,
    hod: "Dr. Rajesh Kumar",
    highlights: [
      "AI/ML Research Center",
      "Industry-aligned curriculum",
      "100% placement record",
      "Hackathons and coding competitions",
      "Cisco Networking Academy"
    ],
    labs: [
      "Artificial Intelligence Lab",
      "Cybersecurity Lab",
      "IoT Development Center",
      "High Performance Computing Lab",
      "Data Science Lab"
    ]
  },
  {
    id: "mech",
    name: "Mechanical Engineering",
    shortName: "ME",
    description: "The ME department provides comprehensive training in design, thermal, and production engineering with advanced CAD/CAM and robotics facilities.",
    image: "https://www.cepathanapuram.ac.in/assets/images/mephoto5.jpg",
    establishedYear: 2009,
    hod: "Dr. Vikram Joshi",
    highlights: [
      "Industry 4.0 ready curriculum",
      "Automation and Robotics focus",
      "SAE Collegiate Club",
      "Additive Manufacturing Center",
      "Collaboration with Siemens"
    ],
    labs: [
      "CAD/CAM Center",
      "Robotics and Automation Lab",
      "Thermal Engineering Lab",
      "Fluid Mechanics Lab",
      "Material Testing Lab"
    ]
  },
  {
    id: "eee",
    name: "Electrical Engineering",
    shortName: "EEE",
    description: "The EEE department specializes in power systems, renewable energy, and smart grid technologies with modern electrical labs and industry partnerships.",
    image: "https://webfiles.amrita.edu/2019/12/Teywkhaq-about-electrical-and-electronics.jpg",
    establishedYear: 2011,
    hod: "Prof. Anjali Deshmukh",
    highlights: [
      "Smart Grid Technology Center",
      "Renewable Energy Research",
      "PLC and SCADA Training",
      "Power Electronics Lab",
      "Industry collaboration with Siemens"
    ],
    labs: [
      "Power Systems Lab",
      "Electrical Machines Lab",
      "Control Systems Lab",
      "Renewable Energy Lab",
      "Measurement and Instrumentation Lab"
    ]
  }
];

export const placementData = {
  title: "Placement Highlights",
  content: `Our Training & Placement Cell has an outstanding track record:

Placement Statistics (2022-23):
- Highest Package: ₹42 LPA (Amazon)
- Average Package: ₹7.5 LPA
- Placement Percentage: 98%
- 200+ Recruiting Companies

Top Recruiters:
- Amazon
- TCS
- Infosys
- L&T
- Tech Mahindra
- Capgemini
- Persistent Systems

Training Initiatives:
- Technical Skill Enhancement Program
- Coding Bootcamps
- Mock GD/PI Sessions
- Industry Certification Courses
- Entrepreneurship Development Programs`
};

export const achievementData = {
  title: "Institutional Achievements",
  content: `The School of Engineering has been recognized for excellence:

Recent Awards:
- 'Best Engineering College in Maharashtra' - AICTE 2023
- 'Innovation Award' - ISTE 2022
- 'Industry 4.0 Ready Institute' - CII 2021

Student Achievements:
- 1st Prize in Smart India Hackathon 2023
- 5 Gold Medals in National Technical Fest
- 3 Students Selected for Google Summer of Code
- 25+ Research Papers Published in Scopus Indexed Journals

Sports Achievements:
- Inter-University Champions in Basketball 2023
- Runners-up in Cricket Tournament 2022
- 8 Gold Medals in University Athletics Meet`
};

export const nirfData = {
  title: "NIRF Ranking",
  content: `School of Engineering's NIRF Performance:

2023 Rankings:
- Overall Rank: 45 among Engineering Institutes in India
- Teaching, Learning & Resources: 4.2/5
- Graduation Outcomes: 4.6/5
- Outreach & Inclusivity: 4.1/5
- Perception: 3.9/5

Key Strengths:
- Industry-Ready Curriculum
- 98% Placement Record
- ₹20 crores Research Funding
- International Collaborations
- Experienced Faculty

Future Goals:
- Top 30 Engineering Institute by 2025
- Increase Industry-Academia Projects
- Enhance Research Output
- Expand International Collaborations`
};

export const mandatoryDisclosureData = {
  title: "Mandatory Disclosure",
  content: `As per AICTE norms, we disclose the following information:

Institutional Information:
- Establishment Year: 2009
- Approved Intake: 600 students
- Total Faculty: 65
- Non-Teaching Staff: 35
- Campus Area: 25 acres

Academic Information:
- Programs Offered: B.Tech, M.Tech, PhD
- Curriculum: Revised annually
- Examination System: Semester Pattern
- Academic Calendar: Published Bi-annually

Financial Information:
- Fee Structure: As per University Norms
- Scholarships: 20+ Schemes Available
- Financial Aid: For Meritorious Students

Governance:
- Governing Body Composition
- Administrative Structure
- Grievance Redressal Mechanism
- Anti-Ragging Committee Details`
};

export const iqacData = {
  title: "Internal Quality Assurance Cell (IQAC)",
  content: `About IQAC:

Objectives:
- Ensure continuous quality improvement
- Develop outcome-based education
- Promote research culture
- Enhance industry-academia interface

Functions:
- Conduct academic audits
- Organize faculty development programs
- Monitor student feedback
- Prepare AQAR reports

Recent Activities:
- 15 Faculty Development Programs
- Curriculum Review Workshop
- Industry Advisory Board Meeting
- Alumni Interaction Sessions

Quality Initiatives:
- Project-Based Learning
- Industry Certification Programs
- Research Methodology Training
- Technical Skill Development`
};

export const swayamNptelData = {
  title: "SWAYAM-NPTEL",
  content: `Our SWAYAM-NPTEL Initiatives:

NPTEL Local Chapter:
- 50+ courses offered annually
- 80% pass rate in NPTEL exams
- 5 Faculty as NPTEL Coordinators

Achievements:
- Top 10% in NPTEL courses: 35 students
- Elite certificates: 12 students
- 5 Faculty recognized as NPTEL Stars

Benefits:
- Free access to premium courses
- Industry-recognized certifications
- Credit transfer facility
- Enhanced employability

Upcoming Courses:
- Data Science for Engineers
- Internet of Things
- Artificial Intelligence
- Cyber Security Basics`
};

export const visionMissionData = {
  title: "Vision & Mission",
  content: `Our Guiding Principles:

Vision:
"To Become a Lead Center in the Field of Electrical Engineering to Minimize Human Efforts with an Eye on Environment."

Mission:
"To Impart Technical Education, Nurture Creativity, Critical Thinking & Application of Comprehensive Engineering Knowledge & Skills to Meet the Global Challenges through Innovation & Research."

Core Values:
- Excellence
- Integrity
- Innovation
- Social Responsibility
- Lifelong Learning

Quality Policy:
"Committed to deliver quality engineering education through experienced faculty, industry-relevant curriculum, and state-of-the-art infrastructure to develop competent professionals."`
};
