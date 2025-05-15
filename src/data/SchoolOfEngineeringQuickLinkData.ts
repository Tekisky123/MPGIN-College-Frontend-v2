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
    content: `

Welcome to the School of Engineering at Matoshri Pratishthan Group of Institutions, where innovation meets inspiration. Since our inception in 2009, we have been dedicated to nurturing technically sound, ethically strong, and socially responsible engineers.

As the Principal, I take great pride in leading a dynamic institution that is continuously evolving to meet the demands of Industry 4.0 and beyond. We are committed to providing a holistic learning environment that fosters critical thinking, creativity, and real-world problem-solving.

##  Key Highlights:
- NBA-accredited, industry-aligned engineering programs  
- 10+ specialized undergraduate programs across core and emerging technologies  
- Exceptional **98% placement record** in 2022–23 with top-tier recruiters  
- ₹20 crores in annual research grants driving innovation and product development  
- 75+ active collaborations with industry leaders and global tech firms  

## Our Infrastructure:
- 30+ state-of-the-art laboratories fostering hands-on technical excellence  
- A fully digitized library spread over 15,000+ sq.ft. with global resource access  
- Innovation & Incubation Center supporting student-led startups and ideas  
- High-Performance Computing (HPC) facility for AI, ML, and Data Science research  
- Sports complex and indoor stadium promoting physical well-being and team spirit  

##  Faculty Excellence:
- 80% of faculty members are PhD holders with deep academic and research expertise  
- Over 15 years of average teaching experience across engineering domains  
- 50+ patents filed in the last 5 years — showcasing a strong culture of innovation  
- 200+ research publications in reputed national and international journals  

## Institutional Distinctions:
- Recognized as an **'Industry 4.0 Ready Institute'** by CII  
- Strategic internship tie-ups with Amazon, TCS, Infosys, Capgemini, and more  
- Faculty members regularly contribute to and present at global tech conferences  
- Ongoing curriculum updates to include AI, IoT, Cybersecurity, and Robotics  

At the School of Engineering, we don’t just teach subjects — we cultivate curiosity, instill discipline, and ignite a passion for lifelong learning. Our mission is to develop engineers who are not only technically proficient but also adaptive, innovative, and ready to shape the future.

Whether you dream of working with Fortune 500 companies, pursuing cutting-edge research, or launching your own tech venture — this is where your journey begins.

Join us and be part of a legacy of excellence, innovation, and transformation.

Warm regards,  
* Dr. Sanjay Patil*  
Principal, School of Engineering  
`
  }

];

export const departments: Department[] = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    shortName: "CSE",
    description: "The CSE department focuses on cutting-edge technologies including AI, Machine Learning, Cybersecurity, and IoT with state-of-the-art computing facilities.",
    image: "https://aitsrajampet.ac.in/images/artificial-intelligence.jpg ",
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
    image: "https://www.cepathanapuram.ac.in/assets/images/mephoto5.jpg ",
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
    image: "https://webfiles.amrita.edu/2019/12/Teywkhaq-about-electrical-and-electronics.jpg ",
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
  content: `

Our Training & Placement Cell has an outstanding track record:

## Placement Statistics (2022-23):
- Highest Package: ₹42 LPA (Amazon)
- Average Package: ₹7.5 LPA
- Placement Percentage: 98%
- 200+ Recruiting Companies

## Top Recruiters:
- Amazon
- TCS
- Infosys
- L&T
- Tech Mahindra
- Capgemini
- Persistent Systems

## Training Initiatives:
- Technical Skill Enhancement Program
- Coding Bootcamps
- Mock GD/PI Sessions
- Industry Certification Courses
- Entrepreneurship Development Programs

**Additional Notes:**
- Our placement cell organizes exclusive campus drives for top MNCs.
- We have a dedicated career counseling team to assist students.
- Over 90% of our students secure placements within 6 months of graduation.
`
};

export const achievementData = {
  title: "Institutional Achievements",
  content: `

The School of Engineering has been recognized for excellence:

## Recent Awards:
- 'Best Engineering College in Maharashtra' - AICTE 2023
- 'Innovation Award' - ISTE 2022
- 'Industry 4.0 Ready Institute' - CII 2021

## Student Achievements:
- 1st Prize in Smart India Hackathon 2023
- 5 Gold Medals in National Technical Fest
- 3 Students Selected for Google Summer of Code
- 25+ Research Papers Published in Scopus Indexed Journals

## Sports Achievements:
- Inter-University Champions in Basketball 2023
- Runners-up in Cricket Tournament 2022
- 8 Gold Medals in University Athletics Meet

**Additional Notes:**
- Our students consistently rank among the top performers in national and international competitions.
- We have won multiple awards for innovation and sustainability projects.
- Our sports teams participate in regional and national tournaments.
`
};

export const nirfData = {
  title: "NIRF Ranking",
  content: `

School of Engineering's NIRF Performance:

## 2023 Rankings:
- Overall Rank: 45 among Engineering Institutes in India
- Teaching, Learning & Resources: 4.2/5
- Graduation Outcomes: 4.6/5
- Outreach & Inclusivity: 4.1/5
- Perception: 3.9/5

## Key Strengths:
- Industry-Ready Curriculum
- 98% Placement Record
- ₹20 crores Research Funding
- International Collaborations
- Experienced Faculty

## Future Goals:
- Top 30 Engineering Institute by 2025
- Increase Industry-Academia Projects
- Enhance Research Output
- Expand International Collaborations

**Additional Notes:**
- We aim to achieve a ranking among the top 20 engineering institutes in India by 2027.
- Our focus is on continuous improvement in all NIRF parameters.
- We are committed to fostering a culture of innovation and excellence.
`
};

export const mandatoryDisclosureData = {
  title: "Mandatory Disclosure",
  content: `

As per AICTE norms, we disclose the following information:

## Institutional Information:
- Establishment Year: 2009
- Approved Intake: 600 students
- Total Faculty: 65
- Non-Teaching Staff: 35
- Campus Area: 25 acres

## Academic Information:
- Programs Offered: B.Tech, M.Tech, PhD
- Curriculum: Revised annually
- Examination System: Semester Pattern
- Academic Calendar: Published Bi-annually

## Financial Information:
- Fee Structure: As per University Norms
- Scholarships: 20+ Schemes Available
- Financial Aid: For Meritorious Students

## Governance:
- Governing Body Composition
- Administrative Structure
- Grievance Redressal Mechanism
- Anti-Ragging Committee Details

**Additional Notes:**
- Our institution adheres strictly to AICTE guidelines for transparency and accountability.
- We provide detailed financial reports to stakeholders.
- Our governance structure ensures fair and transparent decision-making.
`
};

export const iqacData = {
  title: "Internal Quality Assurance Cell (IQAC)",
  content: `

## About IQAC:
- Ensure continuous quality improvement
- Develop outcome-based education
- Promote research culture
- Enhance industry-academia interface

## Functions:
- Conduct academic audits
- Organize faculty development programs
- Monitor student feedback
- Prepare AQAR reports

## Recent Activities:
- 15 Faculty Development Programs
- Curriculum Review Workshop
- Industry Advisory Board Meeting
- Alumni Interaction Sessions

## Quality Initiatives:
- Project-Based Learning
- Industry Certification Programs
- Research Methodology Training
- Technical Skill Development

**Additional Notes:**
- The IQAC conducts regular assessments to ensure academic excellence.
- We collaborate with industry experts to align our curriculum with market needs.
- Student feedback is integral to our continuous improvement process.
`
};

export const swayamNptelData = {
  title: "SWAYAM-NPTEL",
  content: `

## NPTEL Local Chapter:
- 50+ courses offered annually
- 80% pass rate in NPTEL exams
- 5 Faculty as NPTEL Coordinators

## Achievements:
- Top 10% in NPTEL courses: 35 students
- Elite certificates: 12 students
- 5 Faculty recognized as NPTEL Stars

## Benefits:
- Free access to premium courses
- Industry-recognized certifications
- Credit transfer facility
- Enhanced employability

## Upcoming Courses:
- Data Science for Engineers
- Internet of Things
- Artificial Intelligence
- Cyber Security Basics

**Additional Notes:**
- Our NPTEL chapter offers exclusive workshops and webinars.
- Students can earn credits for NPTEL courses towards their degree.
- We encourage interdisciplinary learning through NPTEL offerings.
`
};

export const visionMissionData = {
  title: "Vision & Mission",
  content: `


### Vision:
To Become a Lead Center in the Field of Electrical Engineering to Minimize Human Efforts with an Eye on Environment.

### Mission:
To Impart Technical Education, Nurture Creativity, Critical Thinking & Application of Comprehensive Engineering Knowledge & Skills to Meet the Global Challenges through Innovation & Research.

## Core Values:
- Excellence
- Integrity
- Innovation
- Social Responsibility
- Lifelong Learning

## Quality Policy:
Committed to deliver quality engineering education through experienced faculty, industry-relevant curriculum, and state-of-the-art infrastructure to develop competent professionals.

**Additional Notes:**
- Our vision is aligned with sustainable development goals.
- We emphasize ethical practices and social responsibility in all our initiatives.
- Continuous learning and adaptation are at the core of our mission.
`
};