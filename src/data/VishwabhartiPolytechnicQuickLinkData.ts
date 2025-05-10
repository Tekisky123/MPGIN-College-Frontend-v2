import polyPrincipal from "../assets/principalImages/Prof. Shahaji Deshmukh Vishwabharati polytechnic.jpg"

export interface ProfileData {
    id: string;
    name: string;
    title: string;
    image: string;
    education: string;
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
        name: "Prof. Shahaji Deshmukh",
        title: "Principal",
        image: polyPrincipal,
        education: "PhD. (Pursuing) (Mechanical Engineering)",
        content: `From the Principal's Desk
  
Welcome to Vishwabharti Polytechnic Institute, a premier technical education institution committed to excellence since 1985.

Key Highlights:
- NAAC 'A' Grade Accredited Institution
- 15+ Diploma Programs with industry-aligned curriculum
- 95% placement record over last 5 years
- ₹15 crores annual research funding
- 50+ industry collaborations

Our Infrastructure:
- 25+ advanced laboratories
- 10,000+ sq.ft. central library
- Incubation center for student startups
- Sports complex and hostel facilities

I invite you to be part of our journey to create technically competent professionals who will shape the future of our nation.`
    }
];



export const placementData = {
    title: "Placement Highlights",
    content: `Our Placement Cell has achieved remarkable success in connecting students with top companies:

Placement Statistics (2022-23):
- Highest Package: ₹12 LPA
- Average Package: ₹4.5 LPA
- Placement Percentage: 92%
- 150+ Recruiting Companies

Top Recruiters:
- Tata Technologies
- L&T Construction
- Infosys
- Wipro
- Tech Mahindra
- JSW Steel
- Godrej & Boyce

Training Initiatives:
- Technical Skill Development Programs
- Soft Skills Training
- Mock Interviews
- Resume Building Workshops
- Industry Visits`
};

export const achievementData = {
    title: "Institutional Achievements",
    content: `Vishwabharti Polytechnic has been recognized for excellence in technical education:

Recent Awards:
- 'Best Polytechnic in Maharashtra' - AICTE 2023
- 'Green Campus Award' - State Government 2022
- 'Industry Linked Institute' - CII 2021

Student Achievements:
- 1st Prize in National Level Project Competition 2023
- 3 Gold Medals in State Technical Festival
- 5 Students Selected for National Skill Competition
- 12 Research Papers Published by Students

Sports Achievements:
- State Champions in Volleyball (Men) 2023
- Runners-up in Cricket Tournament 2022
- 5 Gold Medals in University Athletics Meet`
};

export const nirfData = {
    title: "NIRF Ranking",
    content: `Vishwabharti Polytechnic Institute's NIRF Performance:

2023 Rankings:
- Overall Rank: 15 among Polytechnics in India
- Teaching, Learning & Resources: 4.5/5
- Graduation Outcomes: 4.2/5
- Outreach & Inclusivity: 4.7/5
- Perception: 3.9/5

Key Strengths:
- Excellent Faculty-Student Ratio (1:15)
- 95% Placement Record
- ₹2 crores Research Funding per Year
- 100% Digital Classrooms
- 25+ Industry Collaborations

Future Goals:
- Top 10 Polytechnic by 2025
- Increase Research Publications by 50%
- Enhance Industry Partnerships
- Improve Student Satisfaction Scores`
};

export const mandatoryDisclosureData = {
    title: "Mandatory Disclosure",
    content: `As per AICTE norms, we disclose the following information:

Institutional Information:
- Establishment Year: 1985
- Approved Intake: 1800 students
- Total Faculty: 125
- Non-Teaching Staff: 75
- Campus Area: 25 acres

Academic Information:
- Programs Offered: 15 Diploma Courses
- Curriculum: Revised every 3 years
- Examination System: Semester Pattern
- Academic Calendar: Published Annually

Financial Information:
- Fee Structure: As per Government Norms
- Scholarships: 20+ Schemes Available
- Financial Aid: For Economically Weaker Students

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
- Develop quality benchmarks
- Facilitate learner-centric environment
- Encourage best practices
- Organize workshops on quality parameters

Functions:
- Documentation of programs
- Acting as nodal agency for quality initiatives
- Preparing Annual Quality Assurance Report
- Conducting Academic and Administrative Audits

Recent Activities:
- Faculty Development Programs (5 per year)
- Student Feedback Analysis
- Curriculum Review Workshops
- Industry Interaction Programs
- Alumni Meet Organization

Quality Initiatives:
- Outcome Based Education
- ICT Enabled Teaching
- Student Mentorship Program
- Research Promotion Cell
- Innovation and Entrepreneurship Development Cell`
};

export const swayamNptelData = {
    title: "SWAYAM-NPTEL Initiatives",
    content: `Our Institute's Participation in SWAYAM-NPTEL:

Current Offerings:
- 25+ NPTEL Courses Integrated in Curriculum
- 15 Faculty as NPTEL Coordinators
- 300+ Students Certified in Last 3 Years
- 5 Local Chapters Established

Benefits to Students:
- Access to IIT Faculty Lectures
- Industry-Relevant Certification Courses
- Credit Transfer Facility
- Enhanced Learning Resources

Upcoming Programs:
- FDP on Emerging Technologies
- Student Certification in AI/ML
- Workshop on NPTEL Exam Preparation
- Industry-Aligned Course Mapping

Achievements:
- Top Performing Institute in Maharashtra
- 3 Faculty Recognized as Best Coordinators
- 95% Pass Rate in NPTEL Exams
- 50% Students Opting for Additional Courses`
};

export const visionMissionData = {
    title: "Vision & Mission",
    content: `Our Guiding Principles:

Vision:
"To emerge as a center of excellence in technical education by nurturing innovation, research and ethical values to produce globally competent professionals."

Mission:
M1: To provide quality technical education through innovative teaching-learning methods.
M2: To foster research culture and industry collaboration.
M3: To develop entrepreneurial skills and employability.
M4: To promote ethical values and social responsibility.
M5: To create state-of-the-art infrastructure for holistic development.

Core Values:
- Excellence in Education
- Innovation and Creativity
- Integrity and Ethics
- Social Responsibility
- Continuous Improvement

Quality Policy:
"Committed to provide quality technical education through competent faculty, modern infrastructure and industry interaction to develop skilled professionals meeting global standards."`
};