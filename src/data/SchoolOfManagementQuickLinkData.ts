// import polyPrincipal from "../assets/principalImages/Dr. Priya Sharma School Of Management.jpg";

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
    image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740",
    content: `

Welcome to the School of Management at Matoshri Pratishthan Group of Institutions — a place where ambition meets opportunity and innovation drives education. We are committed to shaping a new generation of business professionals who are not only skilled but also socially conscious and ethically grounded.

As the Principal, I take immense pride in leading an institution that harmonizes academic excellence with real-world relevance. Our goal is to empower students to become visionary leaders, strategic thinkers, and impactful entrepreneurs who can thrive in a dynamic global economy.

As Principal, I am proud to lead an institution that stands out for its:
- AICTE approved programs
- 5+ Management programs with industry-aligned curriculum
- 95% placement record (2022-23)
- ₹10 crores annual research funding
- 50+ corporate partnerships

## Our Unique Offerings:
- Harvard Case Study Methodology
- Business Simulation Labs
- FinTech Certification Programs
- Entrepreneurship Development Cell
- International Student Exchange Programs

## Faculty Highlights:
- 70% PhD holders
- Average 12 years industry experience
- 30+ research publications annually
- Regular corporate training assignments

## Campus Features:
- Digital Business Lab
- Behavioral Research Center
- Moot Court for Business Law
- Incubation Center for Startups
- Executive Education Facilities

We believe in nurturing not just professionals but **future-ready entrepreneurs**, ethical managers, and socially responsible leaders.

*— Dr. Priya Sharma*
`
  }
];

export const placementData = {
  title: "Placement Highlights",
  content: `

Our Corporate Resource Center has an excellent placement record and strong industry connections.

## Placement Statistics (2022-2023):
- Highest Package: ₹18 LPA (Amazon)
- Average Package: ₹6.5 LPA
- Placement Percentage: 95%
- 120+ Recruiting Companies

## Top Recruiters:
- Deloitte
- ICICI Bank
- HDFC Bank
- TCS
- Wipro
- Kotak Mahindra Bank
- Reliance Retail
- Accenture
- Infosys
- Godrej

## Career Development Initiatives:
- Corporate Readiness Program
- Leadership Development Workshops
- Industry Certification Courses
- Business Analytics Bootcamp
- Alumni Mentorship Program

## Recent Placements:
✓ 10 students placed in Big 4 firms  
✓ 25 students in Fortune 500 companies  
✓ 15 internships converted into PPOs  
✓ 30+ international internship opportunities

We offer continuous support through our dedicated **Career Development Office** which organizes:
- Mock GD/PI sessions
- Resume building workshops
- Personality development classes
- Company-specific training programs

*— School of Management, MPGI*
`
};

export const achievementData = {
  title: "Institutional Achievements",
  content: `

The School of Management has been recognized for excellence:

## Awards & Recognitions:
- 'Best Emerging B-School in Maharashtra' - AICTE 2023
- 'Excellence in Industry Interface' - CII 2022
- 'Innovative Pedagogy Award' - ISTE 2021
- 'Top 10 Most Promising MBA College' - Outlook India 2023

## Student Achievements:
- National Champions in Business Plan Competition 2023
- 1st Prize in National Stock Market Challenge
- 3 Students Selected for International Exchange Programs
- 15+ Research Papers Published in Scopus Journals
- Winner of "Young CEO Challenge" 2023
- 2nd Position in All India Marketing Strategy Contest

## Corporate Collaborations:
- MoU with NSE for Financial Literacy Programs
- Collaboration with Microsoft for Digital Skills Training
- Tie-up with Local Industries for Live Projects
- Partnership with Deloitte for Internship Opportunities
- Engagement with RBI for Banking Workshops

These achievements reflect our commitment to producing globally competitive management graduates.

*— Celebrating Excellence Together*
`
};

export const nirfData = {
  title: "NIRF Ranking",
  content: `

School of Management's NIRF Performance:

## 2023 Rankings:
- Overall Rank: 25 among Management Institutes in India
- Teaching, Learning & Resources: 4.3/5
- Graduation Outcomes: 4.5/5
- Outreach & Inclusivity: 4.0/5
- Perception: 3.8/5

## Key Strengths:
- Industry-Aligned Curriculum
- 95% Placement Record
- ₹5 crores Research Funding
- International Collaborations
- Experienced Faculty

## Strategic Focus Areas:
- Increasing international tie-ups
- Strengthening entrepreneurship ecosystem
- Expanding executive education programs
- Enhancing digital learning platforms
- Improving faculty-industry collaboration

We aim to enter the top 20 by 2025 and become a preferred destination for recruiters across sectors.

*— NIRF Report 2023*
`
};

export const mandatoryDisclosureData = {
  title: "Mandatory Disclosure",
  content: `

As per AICTE norms, we disclose the following information transparently:

## Institutional Information:
- Establishment Year: 2005
- Approved Intake: 300 students
- Total Faculty: 45
- Non-Teaching Staff: 25
- Campus Area: 15 acres

## Academic Information:
- Programs Offered: MBA, BBA, Executive MBA
- Curriculum: Revised annually
- Examination System: Semester Pattern
- Academic Calendar: Published Bi-annually

## Financial Information:
- Fee Structure: As per University Norms
- Scholarships: 15+ Schemes Available
- Financial Aid: For Meritorious Students

## Governance:
- Governing Body Composition
- Administrative Structure
- Grievance Redressal Mechanism
- Anti-Ragging Committee Details

This transparency ensures accountability and trust among stakeholders.

*— Committed to AICTE Guidelines*
`
};

export const iqacData = {
  title: "Internal Quality Assurance Cell (IQAC)",
  content: `

About IQAC:

**Mission Statement:**  
To ensure continuous quality improvement through systematic evaluation and stakeholder engagement.

## Objectives:
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
- 10 Faculty Development Programs
- Curriculum Review Workshop
- Industry Advisory Board Meeting
- Alumni Interaction Sessions
- Student Satisfaction Survey Analysis

## Quality Initiatives:
- Case Study Development
- Business Simulation Exercises
- Research Methodology Training
- Leadership Development Programs
- Outcome-Based Education Framework

Quality enhancement is not a one-time task — it's an ongoing mission.

*— IQAC, School of Management*
`
};

export const visionMissionData = {
  title: "Vision & Mission",
  content: `

At the School of Management, our guiding principles define who we are and what we stand for.

## Vision:
"To be a globally recognized center of excellence in management education that nurtures ethical leaders and innovative entrepreneurs."

## Mission:
- M1: To provide transformative management education through innovative pedagogy
- M2: To foster research and consultancy for business solutions
- M3: To develop socially responsible business leaders
- M4: To strengthen industry-academia collaboration
- M5: To promote entrepreneurial mindset

## Core Values:
- Excellence
- Integrity
- Innovation
- Social Responsibility
- Continuous Learning

## Quality Policy:
"Committed to deliver quality management education through experienced faculty, industry-relevant curriculum, and state-of-the-art infrastructure to develop competent professionals."

Every policy and program aligns with these foundational values.

*— Management Team, MPGI*
`
};