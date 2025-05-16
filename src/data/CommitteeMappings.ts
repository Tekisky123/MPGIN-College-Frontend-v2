
export type CollegeId = "school-of-engineering" | "school-of-management" | "vishwabharati-polytechnic-institute";

export interface CommitteeMapping {
    id: string;
    title: string;
}

export const COMMITTEE_MAPPINGS: Record<CollegeId, Array<CommitteeMapping>> = {
    "school-of-engineering": [
        { id: "anti-ragging-committee-engineering", title: "Anti Ragging Committee" },
        { id: "anti-ragging-squad-engineering", title: "Anti Ragging Squad" },
        { id: "women-empowerment-committee-engineering", title: "Women Empowerment Committee" },
        { id: "governing-body-engineering", title: "Governing Body" },
        { id: "faculty-grievance-redressal-cell-engineering", title: "Faculty Grievance Redressal Cell" },
        { id: "student-counselling-cell-engineering", title: "Student Counselling Cell" },
        { id: "industry-liaison-committee-engineering", title: "Industry Liaison Committee" },
        { id: "library-committee-engineering", title: "Library Committee" },
        { id: "remedial-coaching-cell-engineering", title: "Remedial Coaching Cell" }
    ],
    "school-of-management": [
        { id: "anti-ragging-committee-management", title: "Anti Ragging Committee" },
        { id: "anti-ragging-squad-management", title: "Anti Ragging Squad" },
        { id: "women-empowerment-committee-management", title: "Women Empowerment Committee" },
        { id: "governing-body-management", title: "Governing Body" },
        { id: "faculty-grievance-redressal-cell-management", title: "Faculty Grievance Redressal Cell" },
        { id: "student-counselling-cell-management", title: "Student Counselling Cell" },
        { id: "industry-liaison-committee-management", title: "Industry Liaison Committee" },
        { id: "library-committee-management", title: "Library Committee" },
        { id: "remedial-coaching-cell-management", title: "Remedial Coaching Cell" }
    ],
    "vishwabharati-polytechnic-institute": [
        { id: "anti-ragging-committee", title: "Anti Ragging Committee" },
        { id: "anti-sexual-harassment-cell", title: "Anti Sexual Harassment Cell" },
        { id: "womens-guidance-cell", title: "Women's Guidance Cell" },
        { id: "sc-st-cell", title: "SC/ST Cell" }
    ]
};