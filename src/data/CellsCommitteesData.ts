export interface CommitteeMember {
    srNo: number;
    name: string;
    designation: string;
    position: string;
    mobileNumber: string;
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

// Function to generate members for a committee
const generateMembers = (
    chairperson: string,
    department: string,
    prefix: string
): CommitteeMember[] => {
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
        { srNo: 10, name: `Prof. ${prefix} Nair`, designation: "Student Representative", position: "Member" },
    ];
};

export const CELLS_COMMITTEES_DATA: CollegeCommittees[] = [
    {
        collegeId: "vishwabharati-polytechnic-institute",
        collegeName: "Vishwabharati Polytechnic Institute",
        committees: [
            {
                id: "anti-ragging-committee",
                title: "Anti Ragging Committee",
                description: "Oversees anti-ragging policies and implementation.",
                members: [
                    { srNo: 1, name: "Mr. Shahaji P. Deshmukh", designation: "Principal", position: "Chairman", mobileNumber: "9561906555" },
                    { srNo: 2, name: "Ms. Manisha K. More", designation: "HoD, Computer Engineering", position: "Member", mobileNumber: "9764999089" },
                    { srNo: 3, name: "Ms. Ashwini B. Mule", designation: "I/C HoD, E & TC Engineering", position: "Member", mobileNumber: "7709459329" },
                    { srNo: 4, name: "Mr. Sanjay J. Deshmukh", designation: "I/C HoD, Electrical Engineering", position: "Member", mobileNumber: "9970974483" },
                    { srNo: 5, name: "Ms. Sukeshani S. Patil", designation: "Lecturer in Civil Engineering", position: "Member", mobileNumber: "8625820923" },
                    { srNo: 6, name: "Mr. Laxmikant D. Kulkarni", designation: "Office Superintendent", position: "Member", mobileNumber: "9881321000" },
                    { srNo: 7, name: "Ms. Ruprekha Bharsawde", designation: "Representative of Girls Students", position: "Member", mobileNumber: "8788249785" },
                    { srNo: 8, name: "Mr. Chandrashekhar R. Shinde", designation: "Representative of Boys Students", position: "Member", mobileNumber: "9011215805" },
                    { srNo: 9, name: "Dr. Sandeep S. Hambarde", designation: "HoD, Science & Humanity", position: "Member Secretary", mobileNumber: "9860735536" },
                ],
            },
            {
                id: "anti-sexual-harassment-cell",
                title: "Anti Sexual Harassment Cell",
                description: "Addresses complaints and grievances related to sexual harassment.",
                members: [
                    { srNo: 1, name: "Mr. Shahaji P. Deshmukh", designation: "Principal", position: "Chairman", mobileNumber: "9561906555" },
                    { srNo: 2, name: "Dr. Sandeep S. Hambarde", designation: "HoD, Science & Humanity", position: "Member", mobileNumber: "9860735536" },
                    { srNo: 3, name: "Mr. Vedant A. Unchadkar", designation: "Lecturer in Computer Engineering", position: "Member", mobileNumber: "7507848160" },
                    { srNo: 4, name: "Ms. Shubhangi D. Deshmukh", designation: "Lecturer in Electrical Engineering", position: "Member", mobileNumber: "9970207286" },
                    { srNo: 5, name: "Ms. Riya Kumawat", designation: "Representative of Girls Students", position: "Member", mobileNumber: "8087753364" },
                    { srNo: 6, name: "Ms. Sainath Kahalekar", designation: "Representative of Boys Students", position: "Member", mobileNumber: "8856886107" },
                    { srNo: 7, name: "Ms. Manisha K. More", designation: "HoD, Computer Engineering", position: "Member Secretary", mobileNumber: "9764999089" },
                ],
            },
            {
                id: "womens-guidance-cell",
                title: "Women's Guidance Cell",
                description: "Provides support and guidance to women students and staff.",
                members: [
                    { srNo: 1, name: "Ms. Manisha K. More", designation: "HoD, Computer Engineering", position: "Chairman", mobileNumber: "9764999089" },
                    { srNo: 2, name: "Mr. Shahaji P. Deshmukh", designation: "Principal", position: "Member", mobileNumber: "9561906555" },
                    { srNo: 3, name: "Ms. Amruta S. Deshmukh", designation: "Lecturer in Chemistry", position: "Member", mobileNumber: "8208686077" },
                    { srNo: 4, name: "Ms. Rupali G. Tuppekar", designation: "Lecturer in Civil Engineering", position: "Member", mobileNumber: "8308116491" },
                    { srNo: 5, name: "Ms. Arti R. Kadam", designation: "Representative of Girls Students", position: "Member", mobileNumber: "9021045528" },
                    { srNo: 6, name: "Ms. Ruprekha V. Bharsawde", designation: "Representative of Girls Students", position: "Member", mobileNumber: "8788249725" },
                    { srNo: 7, name: "Ms. Ashwini B. Mule", designation: "I/C HoD, E & TC Engineering", position: "Member Secretary", mobileNumber: "7709459329" },
                ],
            },
            {
                id: "sc-st-cell",
                title: "SC/ST Cell",
                description: "Ensures welfare of SC/ST students and staff.",
                members: [
                    { srNo: 1, name: "Mr. Shahaji P. Deshmukh", designation: "Principal", position: "Chairman", mobileNumber: "9561906555" },
                    { srNo: 2, name: "Ms. Komal M. Bhalerao", designation: "Lecturer in Chemistry", position: "Member", mobileNumber: "9604081350" },
                    { srNo: 3, name: "Mr. Bhimrao G. Shrungarputle", designation: "Lecturer in Electrical Engineering", position: "Member", mobileNumber: "9011962541" },
                    { srNo: 4, name: "Ms. Rajshri H. Kagde", designation: "Lecturer in Electrical Engineering", position: "Member", mobileNumber: "8669389239" },
                    { srNo: 5, name: "Mr. Omkar Gare", designation: "Lecturer in E & TC Engineering", position: "Member", mobileNumber: "7038513132" },
                    { srNo: 6, name: "Mr. Deelip D. Tate", designation: "Librarian", position: "Member", mobileNumber: "9970691711" },
                    { srNo: 7, name: "Ms. Sukeshani S. Patil", designation: "Lecturer in Civil Engineering", position: "Member Secretary", mobileNumber: "8625820923" },
                ],
            },
            // Existing committees...
        ],
    },
    {
        collegeId: "school-of-management",
        collegeName: "School of Management",
        committees: [
            // Existing committees...
        ],
    },
    {
        collegeId: "school-of-engineering",
        collegeName: "School of Engineering",
        committees: [
            // Existing committees...
        ],
    },
];

export const getCollegeCommittees = (collegeId: string) => {
    return CELLS_COMMITTEES_DATA.find(college => college.collegeId === collegeId);
};

export const getCommitteeDetails = (collegeId: string, committeeId: string) => {
    const college = getCollegeCommittees(collegeId);
    if (!college) return null;
    return college.committees.find(committee => committee.id === committeeId);
};