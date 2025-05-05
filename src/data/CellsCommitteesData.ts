export interface CommitteeMember {
    srNo: number;
    name: string;
    designation: string;
    position: string;
}

export interface Committee {
    id: string;
    title: string;
    description: string;
    members: CommitteeMember[];
}

export interface CollegeCommittees {
    collegeId: string;
    collegeName: string;
    committees: Committee[];
}

const generateMembers = (chairperson: string, department: string, prefix: string): CommitteeMember[] => {
    return [
        { srNo: 1, name: chairperson, designation: "Principal/Director", position: "Chairperson" },
        { srNo: 2, name: `Prof. ${prefix} Sharma`, designation: `HOD - ${department}`, position: "Member" },
        { srNo: 3, name: `Dr. ${prefix} Patel`, designation: "Professor", position: "Member" },
        { srNo: 4, name: `Prof. ${prefix} Kumar`, designation: "Associate Professor", position: "Member" },
        { srNo: 5, name: `Dr. ${prefix} Singh`, designation: "Assistant Professor", position: "Member" },
        { srNo: 6, name: `Prof. ${prefix} Gupta`, designation: "Lecturer", position: "Member" },
        { srNo: 7, name: `Mr. ${prefix} Joshi`, designation: "Administrative Officer", position: "Member" },
        { srNo: 8, name: `Ms. ${prefix} Desai`, designation: "Lab Incharge", position: "Member" },
        { srNo: 9, name: `Dr. ${prefix} Iyer`, designation: "Research Coordinator", position: "Member" },
        { srNo: 10, name: `Prof. ${prefix} Nair`, designation: "Student Representative", position: "Member" }
    ];
};

export const CELLS_COMMITTEES_DATA: CollegeCommittees[] = [
    {
        collegeId: "vishwabharati-polytechnic-institute",
        collegeName: "Vishwabharati Polytechnic Institute",
        committees: [
            {
                id: "academic-cell",
                title: "Academic Cell",
                description: "Responsible for overseeing all academic activities and curriculum development.",
                members: generateMembers("Dr. Rajesh Kumar", "Computer Engineering", "Academic")
            },
            {
                id: "admission-cell",
                title: "Admission Cell",
                description: "Handles all admission related processes and queries.",
                members: generateMembers("Dr. Priya Singh", "Admissions", "Admission")
            },
            {
                id: "anti-ragging-squad",
                title: "Anti Ragging Squad",
                description: "Prevents and addresses ragging incidents on campus.",
                members: generateMembers("Dr. Sunil Verma", "Discipline", "Anti-Ragging")
            },
            {
                id: "anti-ragging-committee",
                title: "Anti Ragging Committee",
                description: "Oversees anti-ragging policies and implementation.",
                members: generateMembers("Dr. Anjali Kapoor", "Student Welfare", "Anti-Ragging")
            },
            {
                id: "CASERPCell",
                title: "CASERP Cell",
                description: "Coordinates campus sustainability and environmental initiatives.",
                members: generateMembers("Dr. Ramesh Iyer", "Environmental Science", "CASERP")
            },
            {
                id: "college-development-committee",
                title: "College Development Committee",
                description: "Plans and oversees infrastructure and institutional development.",
                members: generateMembers("Dr. Vikram Aditya", "Infrastructure", "Development")
            },
            {
                id: "cultural-committee",
                title: "Cultural Committee",
                description: "Organizes cultural events and activities.",
                members: generateMembers("Prof. Neha Joshi", "Cultural Activities", "Cultural")
            },
            {
                id: "examination-cell",
                title: "Examination Cell",
                description: "Manages all examination related activities.",
                members: generateMembers("Dr. Arun Deshmukh", "Examinations", "Exam")
            },
            {
                id: "internal-complaint-committee",
                title: "Internal Complaint Committee",
                description: "Addresses complaints and grievances within the institution.",
                members: generateMembers("Dr. Meena Nair", "Grievance Redressal", "Complaint")
            },
            {
                id: "SC_STCell",
                title: "SC/ST Cell",
                description: "Ensures welfare of SC/ST students and staff.",
                members: generateMembers("Dr. Satish Rao", "SC/ST Welfare", "SC/ST")
            },
            {
                id: "student-grievance-redressal-committee",
                title: "Student Grievance Redressal Committee",
                description: "Addresses student grievances and complaints.",
                members: generateMembers("Dr. Priyanka Reddy", "Student Affairs", "Grievance")
            },
            {
                id: "training-and-placementCell",
                title: "Training and Placement Cell",
                description: "Manages campus recruitment and industry relations.",
                members: generateMembers("Dr. Nisha Kapoor", "Placements", "Placement")
            }
        ]
    },
    {
        collegeId: "school-of-management",
        collegeName: "School of Management",
        committees: [
            {
                id: "academic-cell",
                title: "Academic Cell",
                description: "Oversees MBA and BBA program curriculum and academic standards.",
                members: generateMembers("Dr. Sanjay Mehta", "Management Studies", "Academic")
            },
            {
                id: "admission-cell",
                title: "Admission Cell",
                description: "Handles management program admissions.",
                members: generateMembers("Dr. Anjali Desai", "Admissions", "Admission")
            },
            {
                id: "anti-ragging-squad",
                title: "Anti Ragging Squad",
                description: "Prevents ragging in management programs.",
                members: generateMembers("Dr. Rahul Sharma", "Student Discipline", "Anti-Ragging")
            },
            {
                id: "anti-ragging-committee",
                title: "Anti Ragging Committee",
                description: "Oversees anti-ragging policies for management students.",
                members: generateMembers("Dr. Nandini Patel", "Student Welfare", "Anti-Ragging")
            },
            {
                id: "CASERPCell",
                title: "CASERP Cell",
                description: "Manages corporate social responsibility initiatives.",
                members: generateMembers("Dr. Arvind Kumar", "CSR", "CASERP")
            },
            {
                id: "college-development-committee",
                title: "College Development Committee",
                description: "Plans management school development.",
                members: generateMembers("Dr. Preeti Singh", "Institutional Development", "Development")
            },
            {
                id: "cultural-committee",
                title: "Cultural Committee",
                description: "Organizes management school cultural events.",
                members: generateMembers("Prof. Ritu Gupta", "Cultural Activities", "Cultural")
            },
            {
                id: "examination-cell",
                title: "Examination Cell",
                description: "Manages management program examinations.",
                members: generateMembers("Dr. Manoj Joshi", "Examinations", "Exam")
            },
            {
                id: "internal-complaint-committee",
                title: "Internal Complaint Committee",
                description: "Addresses complaints in management school.",
                members: generateMembers("Dr. Sneha Desai", "Grievance Redressal", "Complaint")
            },
            {
                id: "SC_STCell",
                title: "SC/ST Cell",
                description: "Ensures welfare of SC/ST management students.",
                members: generateMembers("Dr. Rajendra Nair", "SC/ST Welfare", "SC/ST")
            },
            {
                id: "student-grievance-redressal-committee",
                title: "Student Grievance Redressal Committee",
                description: "Addresses management student grievances.",
                members: generateMembers("Dr. Pooja Reddy", "Student Affairs", "Grievance")
            },
            {
                id: "training-and-placementCell",
                title: "Training and Placement Cell",
                description: "Manages MBA/BBA placements and internships.",
                members: generateMembers("Dr. Vikram Singh", "Placements", "Placement")
            }
        ]
    },
    {
        collegeId: "school-of-engineering",
        collegeName: "School of Engineering",
        committees: [
            {
                id: "academic-cell",
                title: "Academic Cell",
                description: "Responsible for engineering curriculum and academic policies.",
                members: generateMembers("Dr. Vikram Aditya", "Engineering", "Academic")
            },
            {
                id: "admission-cell",
                title: "Admission Cell",
                description: "Handles engineering program admissions.",
                members: generateMembers("Dr. Sunil Kumar", "Admissions", "Admission")
            },
            {
                id: "anti-ragging-squad",
                title: "Anti Ragging Squad",
                description: "Prevents ragging in engineering programs.",
                members: generateMembers("Dr. Anil Sharma", "Discipline", "Anti-Ragging")
            },
            {
                id: "anti-ragging-committee",
                title: "Anti Ragging Committee",
                description: "Oversees anti-ragging policies for engineering students.",
                members: generateMembers("Dr. Meena Desai", "Student Welfare", "Anti-Ragging")
            },
            {
                id: "CASERPCell",
                title: "CASERP Cell",
                description: "Manages engineering college sustainability initiatives.",
                members: generateMembers("Dr. Arun Verma", "Environmental Engineering", "CASERP")
            },
            {
                id: "college-development-committee",
                title: "College Development Committee",
                description: "Plans engineering college development.",
                members: generateMembers("Dr. Ramesh Patel", "Infrastructure", "Development")
            },
            {
                id: "cultural-committee",
                title: "Cultural Committee",
                description: "Organizes engineering college cultural events.",
                members: generateMembers("Prof. Neha Verma", "Cultural Activities", "Cultural")
            },
            {
                id: "examination-cell",
                title: "Examination Cell",
                description: "Manages engineering program examinations.",
                members: generateMembers("Dr. Priya Iyer", "Examinations", "Exam")
            },
            {
                id: "internal-complaint-committee",
                title: "Internal Complaint Committee",
                description: "Addresses complaints in engineering college.",
                members: generateMembers("Dr. Satish Nair", "Grievance Redressal", "Complaint")
            },
            {
                id: "SC_STCell",
                title: "SC/ST Cell",
                description: "Ensures welfare of SC/ST engineering students.",
                members: generateMembers("Dr. Kavita Rao", "SC/ST Welfare", "SC/ST")
            },
            {
                id: "student-grievance-redressal-committee",
                title: "Student Grievance Redressal Committee",
                description: "Addresses engineering student grievances.",
                members: generateMembers("Dr. Sanjay Reddy", "Student Affairs", "Grievance")
            },
            {
                id: "training-and-placementCell",
                title: "Training and Placement Cell",
                description: "Manages engineering placements and internships.",
                members: generateMembers("Dr. Nisha Kapoor", "Placements", "Placement")
            }
        ]
    }
];

export const getCollegeCommittees = (collegeId: string) => {
    return CELLS_COMMITTEES_DATA.find(college => college.collegeId === collegeId);
};

export const getCommitteeDetails = (collegeId: string, committeeId: string) => {
    const college = getCollegeCommittees(collegeId);
    if (!college) return null;

    return college.committees.find(committee => committee.id === committeeId);
};