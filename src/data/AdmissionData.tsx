import { JSX } from "react";

// Tab Navigation Items
export const admissionNavItems = [
  { name: "Under Graduate (B.Tech)", path: "/under-graduate" },
  { name: "Post Graduate (M.Tech)", path: "/post-graduate" },
  { name: "Fee Structure", path: "/fee-structure" },
  { name: "Student Information", path: "/student-information" },
  { name: "Undertaking", path: "/undertaking" },
  { name: "Information Brochure 2024-25", path: "/information-brochure" },
  { name: "VidyaLaxmi Portal", path: "https://www.vidyalakshmi.co.in/ ", external: true },
];

// B.Tech Intake Table Component
const BTECH_TABLE = (
  <table className="min-w-full border-collapse text-sm">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-2">Sr. No.</th>
        <th className="border px-4 py-2">DTE Code</th>
        <th className="border px-4 py-2">Branch</th>
        <th className="border px-4 py-2">Intake</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border px-4 py-2">1</td><td className="border px-4 py-2">212719110</td><td className="border px-4 py-2">Civil Engineering</td><td className="border px-4 py-2">60</td></tr>
      <tr><td className="border px-4 py-2">2</td><td className="border px-4 py-2">212719111T</td><td className="border px-4 py-2">Civil Engineering TFWS</td><td className="border px-4 py-2">3</td></tr>
      <tr><td className="border px-4 py-2">3</td><td className="border px-4 py-2">212724210</td><td className="border px-4 py-2">Computer Science and Engineering</td><td className="border px-4 py-2">180</td></tr>
      <tr><td className="border px-4 py-2">4</td><td className="border px-4 py-2">212724211T</td><td className="border px-4 py-2">Computer Science and Engineering TFWS</td><td className="border px-4 py-2">9</td></tr>
      <tr><td className="border px-4 py-2">5</td><td className="border px-4 py-2">212724610</td><td className="border px-4 py-2">Information Technology</td><td className="border px-4 py-2">120</td></tr>
      <tr><td className="border px-4 py-2">6</td><td className="border px-4 py-2">212724611T</td><td className="border px-4 py-2">Information Technology TFWS</td><td className="border px-4 py-2">6</td></tr>
      <tr><td className="border px-4 py-2">7</td><td className="border px-4 py-2">212737210</td><td className="border px-4 py-2">Electronics and Telecommunication Engg</td><td className="border px-4 py-2">60</td></tr>
      <tr><td className="border px-4 py-2">8</td><td className="border px-4 py-2">212737211T</td><td className="border px-4 py-2">Electronics and Telecommunication Engg TFWS</td><td className="border px-4 py-2">3</td></tr>
      <tr><td className="border px-4 py-2">9</td><td className="border px-4 py-2">212761210</td><td className="border px-4 py-2">Mechanical Engineering</td><td className="border px-4 py-2">60</td></tr>
      <tr><td className="border px-4 py-2">10</td><td className="border px-4 py-2">212761210T</td><td className="border px-4 py-2">Mechanical Engineering TFWS</td><td className="border px-4 py-2">-</td></tr>
      <tr><td className="border px-4 py-2">11</td><td className="border px-4 py-2">212792110</td><td className="border px-4 py-2">Artificial Intelligence and Machine Learning</td><td className="border px-4 py-2">60</td></tr>
      <tr><td className="border px-4 py-2">12</td><td className="border px-4 py-2">212792111T</td><td className="border px-4 py-2">Artificial Intelligence and Machine Learning TFWS</td><td className="border px-4 py-2">3</td></tr>
      <tr><td className="border px-4 py-2">13</td><td className="border px-4 py-2">212791610</td><td className="border px-4 py-2">Automation and Robotics</td><td className="border px-4 py-2">60</td></tr>
      <tr><td className="border px-4 py-2">14</td><td className="border px-4 py-2">212791611T</td><td className="border px-4 py-2">Automation and Robotics TFWS</td><td className="border px-4 py-2">3</td></tr>
    </tbody>
  </table>
);

// Eligibility & Documents
export const UG_ELIGIBILITY =
  "As per the norms of Govt. of Maharashtra (CET Cell) and Directorate of Technical Education, Maharashtra State.";

export const DOCUMENTS_LIST = (
  <ul className="list-disc pl-5 space-y-1 text-gray-700">
    <li>Receipt cum Acknowledgement score card</li>
    <li>SSC Marksheet</li>
    <li>HSC Marksheet / Diploma Final Year Marksheet</li>
    <li>Leaving Certificate (TC)</li>
    <li>Caste Certificate (for category students)</li>
    <li>Caste validity Certificate (for category students)</li>
    <li>Non Creamy Layer Certificate (for category students)</li>
    <li>Gap Certificate (if any)</li>
    <li>Migration Certificate (if any)</li>
    <li>Certificate of Physically Handicapped (if any)</li>
    <li>Certificate of Domicile & Nationality</li>
    <li>Equivalence Certificate for OMS Students</li>
  </ul>
);

// College-specific Undergraduate Admission Data
export interface CollegeAdmissionData {
  id: string;
  btechIntakeTable: JSX.Element;
  eligibility: string;
  documents: JSX.Element;
}

export const schoolOfEngineeringAdmission: CollegeAdmissionData = {
  id: "school-of-engineering",
  btechIntakeTable: BTECH_TABLE,
  eligibility: UG_ELIGIBILITY,
  documents: DOCUMENTS_LIST,
};

export const vishwabharatiPolytechnicAdmission: CollegeAdmissionData = {
  id: "vishwabharati-polytechnic-institute",
  btechIntakeTable: (
    <p>Polytechnic offers diploma-level engineering courses only.</p>
  ),
  eligibility: "Pass in SSC (10th standard).",
  documents: (
    <ul className="list-disc pl-5 space-y-1 text-gray-700">
      <li>SSC Marksheet</li>
      <li>Leaving Certificate</li>
      <li>Caste Certificate (if applicable)</li>
      <li>Domicile Certificate</li>
    </ul>
  ),
};

export const schoolOfManagementAdmission: CollegeAdmissionData = {
  id: "school-of-management",
  btechIntakeTable: (
    <p>No B.Tech courses offered. Please see MBA/BBA programs in Management.</p>
  ),
  eligibility: "As per University norms and AICTE guidelines.",
  documents: (
    <ul className="list-disc pl-5 space-y-1 text-gray-700">
      <li>SSC & HSC Marksheets</li>
      <li>Graduation Marksheet (for PG programs)</li>
      <li>Transfer Certificate</li>
      <li>Gap Certificate (if applicable)</li>
      <li>Caste Certificate (if applicable)</li>
      <li>Domicile Certificate</li>
    </ul>
  ),
};

// Master map by collegeId
export const collegeAdmissionDataMap: Record<string, CollegeAdmissionData> = {
  "school-of-engineering": schoolOfEngineeringAdmission,
  "school-of-management": schoolOfManagementAdmission,
  "vishwabharati-polytechnic-institute": vishwabharatiPolytechnicAdmission,
};