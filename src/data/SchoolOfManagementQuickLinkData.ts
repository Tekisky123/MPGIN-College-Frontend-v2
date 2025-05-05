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
  { label: "Vision & Mission", id: "vision-mission" }
];

export const profiles: ProfileData[] = [
  {
    id: "principal",
    name: "Dr. Priya Sharma",
    title: "Principal",
    image: "https://static.vecteezy.com/system/resources/previews/020/486/936/non_2x/businesswoman-manager-leader-woman-silhouette-icon-beautiful-politician-lady-glyph-pictogram-business-manager-symbol-girl-s-profile-avatar-female-user-sign-isolated-illustration-vector.jpg",
    content: `From the Principal's Desk

Welcome to the School of Management at Matoshri Pratishthan Group of Institutions, where we shape future business leaders.

Key Highlights:
- AICTE approved programs
- 5+ Management programs with industry-aligned curriculum
- 95% placement record (2022-23)
- ₹10 crores annual research funding
- 50+ corporate partnerships

Our Unique Offerings:
- Harvard Case Study Methodology
- Business Simulation Labs
- FinTech Certification Programs
- Entrepreneurship Development Cell
- International Student Exchange Programs

Faculty Highlights:
- 70% PhD holders
- Average 12 years industry experience
- 30+ research publications annually
- Regular corporate training assignments

Our campus features:
- Digital Business Lab
- Behavioral Research Center
- Moot Court for Business Law
- Incubation Center for Startups
- Executive Education Facilities`
  }
];


export const placementData = {
  title: "Placement Highlights",
  content: `Our Corporate Resource Center has an excellent placement record:

Placement Statistics (2022-23):
- Highest Package: ₹18 LPA (Amazon)
- Average Package: ₹6.5 LPA
- Placement Percentage: 95%
- 120+ Recruiting Companies

Top Recruiters:
- Deloitte
- ICICI Bank
- HDFC Bank
- TCS
- Wipro
- Kotak Mahindra Bank
- Reliance Retail

Career Development Initiatives:
- Corporate Readiness Program
- Leadership Development Workshops
- Industry Certification Courses
- Business Analytics Bootcamp
- Alumni Mentorship Program`
};

export const achievementData = {
  title: "Institutional Achievements",
  content: `The School of Management has been recognized for excellence:

Recent Awards:
- 'Best Emerging B-School in Maharashtra' - AICTE 2023
- 'Excellence in Industry Interface' - CII 2022
- 'Innovative Pedagogy Award' - ISTE 2021

Student Achievements:
- National Champions in Business Plan Competition 2023
- 1st Prize in National Stock Market Challenge
- 3 Students Selected for International Exchange Programs
- 15+ Research Papers Published in Scopus Journals

Corporate Partnerships:
- MoU with NSE for Financial Literacy Programs
- Collaboration with Microsoft for Digital Skills Training
- Tie-up with Local Industries for Live Projects`
};

export const nirfData = {
  title: "NIRF Ranking",
  content: `School of Management's NIRF Performance:

2023 Rankings:
- Overall Rank: 25 among Management Institutes in India
- Teaching, Learning & Resources: 4.3/5
- Graduation Outcomes: 4.5/5
- Outreach & Inclusivity: 4.0/5
- Perception: 3.8/5

Key Strengths:
- Industry-Aligned Curriculum
- 95% Placement Record
- ₹5 crores Research Funding
- International Collaborations
- Experienced Faculty

Future Goals:
- Top 20 Management Institute by 2025
- Increase International Student Exchange
- Enhance Corporate Partnerships
- Expand Executive Education Programs`
};

export const mandatoryDisclosureData = {
  title: "Mandatory Disclosure",
  content: `As per AICTE norms, we disclose the following information:

Institutional Information:
- Establishment Year: 2005
- Approved Intake: 300 students
- Total Faculty: 45
- Non-Teaching Staff: 25
- Campus Area: 15 acres

Academic Information:
- Programs Offered: MBA, BBA, Executive MBA
- Curriculum: Revised annually
- Examination System: Semester Pattern
- Academic Calendar: Published Bi-annually

Financial Information:
- Fee Structure: As per University Norms
- Scholarships: 15+ Schemes Available
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
- 10 Faculty Development Programs
- Curriculum Review Workshop
- Industry Advisory Board Meeting
- Alumni Interaction Sessions

Quality Initiatives:
- Case Study Development
- Business Simulation Exercises
- Research Methodology Training
- Leadership Development Programs`
};

export const visionMissionData = {
  title: "Vision & Mission",
  content: `Our Guiding Principles:

Vision:
"To be a globally recognized center of excellence in management education that nurtures ethical leaders and innovative entrepreneurs."

Mission:
M1: To provide transformative management education through innovative pedagogy
M2: To foster research and consultancy for business solutions
M3: To develop socially responsible business leaders
M4: To strengthen industry-academia collaboration
M5: To promote entrepreneurial mindset

Core Values:
- Excellence
- Integrity
- Innovation
- Social Responsibility
- Continuous Learning

Quality Policy:
"Committed to deliver quality management education through experienced faculty, industry-relevant curriculum, and state-of-the-art infrastructure to develop competent professionals."`
};