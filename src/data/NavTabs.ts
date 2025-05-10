export const NAV_ITEMS = [
  { name: "Home", path: "/" },


  {
    name: "Courses",
    path: "/courses",
  },
  {
    name: "Departments",
    subItems: [
      {
        name: "Applied Science & Humanities",
        path: "/applied-science-humanities/profile",
      },
      { name: "Civil Engineering", path: "/civil-engineering/profile" },
      {
        name: "Computer Science & Engineering",
        path: "/computer-science-engineering/profile",
      },
      {
        name: "Electronics & Telecommunication",
        path: "/electronincs-telecommunication-engineering/profile",
      },
      {
        name: "Information Technology",
        path: "/information-technology/profile",
      },
      {
        name: "Mechanical Engineering",
        path: "/mechanical-engineering/profile",
      },
      {
        name: "Human Values & Ethics",
        path: "/courses-humanvalues-professionalethics/profile",
      },
      { name: "Training and Placement", path: "/trainingandplacement/profile" },
      {
        name: "Innovation & Entrepreneurship",
        path: "/Innovation-Entrepreneurship-Development-Cell/profile",
      },
      { name: "Research", path: "/research/profile" },
      { name: "Academic Calendar", path: "/academic-calendar" },
    ],
  },
  {
    name: "Cells & Committees",
    subItems: [
      {
        name: "Academic Cell",
        path: "/cells-committees?section=academic-cell",
      },
      {
        name: "Admission Cell",
        path: "/cells-committees?section=admission-cell",
      },
      {
        name: "Anti Ragging Squad",
        path: "/cells-committees?section=anti-ragging-squad",
      },
      {
        name: "Anti Ragging Committee",
        path: "/cells-committees?section=anti-ragging-committee",
      },
      { name: "CASERP Cell", path: "/cells-committees?section=CASERPCell" },
      {
        name: "College Development Committee",
        path: "/cells-committees?section=college-development-committee",
      },
      {
        name: "Cultural Committee",
        path: "/cells-committees?section=cultural-committee",
      },
      {
        name: "Examination Cell",
        path: "/cells-committees?section=examination-cell",
      },
      {
        name: "Internal Complaint Committee",
        path: "/cells-committees?section=internal-complaint-committee",
      },
      { name: "SC/ST Cell", path: "/cells-committees?section=SC_STCell" },
      {
        name: "Student Grievance Redressal Committee",
        path: "/cells-committees?section=student-grievance-redressal-committee",
      },
      {
        name: "Training and Placement Cell",
        path: "/cells-committees?section=training-and-placementCell",
      },
    ],
  },
  {
    name: "Admission",
    subItems: [
      { name: "Under Graduate (B.Tech)", path: "/under-graduate" },
      { name: "Post Graduate (M.Tech)", path: "/post-graduate" },
      { name: "Fee Structure", path: "/fee-structure" },
      { name: "Student Information", path: "/student-information" },
      { name: "Undertaking", path: "/undertaking" },
      {
        name: "Information Brochure 2024-25",
        path: "/InformationBrochureAcademicYear2020-21",
      },
      {
        name: "VidyaLaxmi Portal",
        path: "https://www.vidyalakshmi.co.in/",
        external: true,
      },
    ],
  },
  {
    "name": "Facilities",
    "subItems": [
      { "name": "Classrooms", "path": "/facilities/classrooms" },
      {
        "name": "Girls and Boys Hostel",
        "path": "/facilities/girls-boys-hostel"
      },
      { "name": "Infrastructure", "path": "/facilities/infrastructure" },
      { "name": "Library", "path": "/facilities/library" },
      { "name": "Virtual Labs", "path": "/facilities/virtual-labs" },
      { "name": "Sports", "path": "/facilities/sports" },
      { "name": "Remote Center", "path": "/facilities/remote-center" },
      // { "name": "Ekeeda", "path": "https://ekeeda.com/", "external": true },
      { "name": "Bus Facilities", "path": "/facilities/bus-facilities" },
      { "name": "WiFi Enable Campus", "path": "/facilities/wifi" },
    ]
  },

  {
    name: "Alumni",
    subItems: [
      { name: "Alumni Registration", path: "/alumni/registration" },
      { name: "Alumni Speaks", path: "/alumni/speaks" },
      { name: "Esteemed Alumni", path: "/esteemed-alumni" },
    ],
  },

  {
    name: "Student Activities",
    subItems: [
      { name: "CESA", path: "/cesa" },
      { name: "CUC", path: "/cuc" },
      { name: "ETA", path: "/eta" },
      { name: "CSI/IEI", path: "/csi" },
      { name: "MESA", path: "/mesa" },
      { name: "ITSA", path: "/itsa" },
      { name: "CAST Activity", path: "/cast-activity" },
      { name: "Open Source", path: "/open-source" },
      { name: "English Language Club", path: "/english-language-club" },
      { name: "Indoor Sports Achievements", path: "/indoor" },
      { name: "Outdoor Sports Achievements", path: "/outdoor" },
      { name: "Aarohan", path: "/aarohan" },
      { name: "Jhankaar", path: "/jhankaar" },
    ],
  },
  { name: "Campus", path: "/campus" },
  { name: "Quick Links", path: "/quick-links" },
  {
    name: "Download",
    subItems: [
      { name: "Current Advertisement", path: "/current-advertisement" },
      { name: "NIRF", path: "/nirf" },
      { name: "Fees Regulatory Authority", path: "/fees" },
    ],
  },
  { name: "Contact", path: "/contact" },
];
