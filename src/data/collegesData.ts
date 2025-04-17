export interface Department {
  id: string;
  name: string;
  description: string;
  image: string;
  courses: string[];
  facilities: string[];
  facultyCount: number;
  gallery: string[];
}

export interface College {
  id: string;
  name: string;
  description: string;
  image: string;
  departments: Department[];
  cardImage: string;
}

export const colleges: College[] = [
  {
    id: "vishwabharati-polytechnic-institute",
    name: "Vishwabharti Polytechnic Institute",
    description: "Premier polytechnic institute offering technical education",
    image: "https://www.sandipfoundation.org/images/sp.jpg",
    cardImage: "https://www.sandipfoundation.org/images/sp.jpg",
    departments: [
      {
        id: "mechanical",
        name: "Mechanical Engineering",
        description:
          "Hands-on diploma program specializing in automobile, CNC technology, and mechatronics.",
        image: "https://www.cepathanapuram.ac.in/assets/images/mephoto5.jpg",
        courses: [
          "Diploma in Mechanical Engineering",
          "CNC Technology",
          "Mechatronics Fundamentals",
        ],
        facilities: [
          "2000+ sq.ft Automotive Workshop",
          "CAD/CAM Lab with 50+ workstations",
          "Industry 4.0 Training Center",
          "6-month compulsory industry internship",
        ],
        facultyCount: 15,
        gallery: ["/images/mech-1.jpg", "/images/mech-2.jpg"],
      },
      {
        id: "civil",
        name: "Civil Engineering",
        description:
          "Comprehensive program in civil engineering and construction technology",
        image: "https://i.ytimg.com/vi/b87BLzfNal4/maxresdefault.jpg",
        courses: [
          "Diploma in Civil Engg",
          "Advanced Construction Tech",
          "Surveying Techniques",
        ],
        facilities: [
          "Fully-equipped Material Testing Lab",
          "BIM Software Training Center",
          "On-site internship with construction firms",
          "Modern Surveying Equipment",
        ],
        facultyCount: 12,
        gallery: ["/images/civil-1.jpg", "/images/civil-2.jpg"],
      },
      {
        id: "electrical",
        name: "Electrical Engineering",
        description:
          "Industry-aligned electrical engineering program focused on automation and energy systems.",
        image: "https://webfiles.amrita.edu/2019/12/Teywkhaq-about-electrical-and-electronics.jpg",
        courses: [
          "Diploma in Electrical Engineering",
          "PLC and Automation",
          "Solar Power Systems",
        ],
        facilities: [
          "Smart Grid Simulation Lab",
          "Solar Panel Installation Workshop",
          "IoT Integration Training",
          "Industrial Automation Center",
        ],
        facultyCount: 10,
        gallery: ["/images/electrical-1.jpg", "/images/electrical-2.jpg"],
      },
      {
        id: "computer",
        name: "Computer Engineering",
        description:
          "Future-focused program covering embedded systems, web technologies, and cloud computing.",
        image: "https://grdedu.in/wp-content/uploads/2023/05/cse.png",
        courses: [
          "Diploma in Computer Engineering",
          "Web Development",
          "Embedded Systems",
        ],
        facilities: [
          "Cisco Networking Academy Lab",
          "Mobile App Development Center",
          "Cloud Computing Infrastructure",
          "Annual Hackathon Competition",
        ],
        facultyCount: 9,
        gallery: ["/images/computer-1.jpg", "/images/computer-2.jpg"],
      },
      {
        id: "it",
        name: "Information Technology",
        description:
          "Program focusing on software development, cybersecurity, and data analytics.",
        image: "https://i0.wp.com/www.gniotgroup.edu.in/blog/wp-content/uploads/2024/04/Information-Technology-1-1024x462-1.webp?resize=640%2C289&ssl=1",
        courses: [
          "Diploma in Information Technology",
          "Cybersecurity Fundamentals",
          "Data Analytics",
        ],
        facilities: [
          "Advanced Cybersecurity Lab",
          "Cloud-Based Development Environment",
          "Industry Collaboration Projects",
          "Hackathons and Coding Competitions",
        ],
        facultyCount: 8,
        gallery: ["/images/it-1.jpg", "/images/it-2.jpg"],
      },
      {
        id: "ece",
        name: "Electronics and Telecommunication",
        description:
          "Program specializing in communication systems, embedded systems, and IoT.",
        image: "https://georgetelegraphblog.wordpress.com/wp-content/uploads/2021/01/electronics-and-communication.jpg?w=584",
        courses: [
          "Diploma in Electronics and Telecommunication",
          "Wireless Communication",
          "IoT Applications",
        ],
        facilities: [
          "RF & Microwave Lab",
          "Digital Signal Processing Lab",
          "IoT Prototyping Lab",
          "Industry-Aligned Certification Courses",
        ],
        facultyCount: 10,
        gallery: ["/images/ece-1.jpg", "/images/ece-2.jpg"],
      },
    ],
  },
  {
    id: "school-of-engineering",
    name: "School of Engineering",
    description:
      "Leading institution offering advanced undergraduate engineering programs.",
    image: "https://content.jdmagicbox.com/comp/nanded/v9/9999p2462.2462.120530154113.m7v9/catalogue/matoshri-pratishthan-s-group-of-institutions-khupsarwadi-nanded-colleges-k8dwa8huzm.jpg",
    cardImage: "/images/soe-card.jpg",
    departments: [
      {
        id: "cse",
        name: "Computer Science & Engineering",
        description:
          "B.Tech program with specializations in AI, Cybersecurity, Data Science, and IoT.",
        image: "https://aitsrajampet.ac.in/images/artificial-intelligence.jpg",
        courses: [
          "B.Tech in CSE - AI & ML",
          "Cybersecurity",
          "IoT",
          "Data Science",
        ],
        facilities: [
          "Cisco Networking Academy Lab",
          "Hackathon & Coding Competitions",
          "Industry-aligned Certification Courses",
          "100+ Computing Workstations",
        ],
        facultyCount: 18,
        gallery: ["/images/cse-1.jpg", "/images/cse-2.jpg"],
      },
      {
        id: "mech",
        name: "Mechanical Engineering",
        description:
          "Advanced undergraduate program in robotics, automotive, and thermal systems.",
        image: "https://www.cepathanapuram.ac.in/assets/images/mephoto5.jpg",
        courses: [
          "B.Tech in Mechanical Engineering",
          "Robotics",
          "Thermal Systems",
          "Automotive Technology",
        ],
        facilities: [
          "Advanced CAD/CAM Center",
          "3D Printing & Prototyping Lab",
          "Automotive Workshop",
          "Industry 4.0 Training",
        ],
        facultyCount: 16,
        gallery: ["/images/mech-engg-1.jpg", "/images/mech-engg-2.jpg"],
      },
      {
        id: "eee",
        name: "Electrical Engineering",
        description:
          "Focused on smart grids, power systems, and renewable technologies.",
        image: "https://webfiles.amrita.edu/2019/12/Teywkhaq-about-electrical-and-electronics.jpg",
        courses: [
          "B.Tech in Electrical Engineering",
          "Smart Grid Systems",
          "Power Systems",
          "Industrial IoT",
        ],
        facilities: [
          "Smart Grid Simulation Lab",
          "Solar & Wind Energy Stations",
          "PLC & SCADA Training",
          "High Voltage Lab",
        ],
        facultyCount: 14,
        gallery: ["/images/eee-1.jpg", "/images/eee-2.jpg"],
      },
      {
        id: "civil",
        name: "Civil Engineering",
        description:
          "Industry-ready curriculum focused on structural and environmental engineering.",
        image: "https://i.ytimg.com/vi/b87BLzfNal4/maxresdefault.jpg",
        courses: [
          "B.Tech in Civil Engineering",
          "Structural Engineering",
          "Transportation Systems",
          "Environmental Engineering",
        ],
        facilities: [
          "BIM Training Center",
          "Materials Testing Facility",
          "Surveying Equipment",
          "GIS Applications Lab",
        ],
        facultyCount: 13,
        gallery: ["/images/soe-civil-1.jpg", "/images/soe-civil-2.jpg"],
      },
      {
        id: "ece",
        name: "Electronics and Telecommunication Engineering",
        description:
          "Program specializing in communication systems, embedded systems, and VLSI design.",
        image: "https://aei.ac.in/wp-content/uploads/2021/01/ET1.jpg",
        courses: [
          "B.Tech in ECE",
          "Wireless Communication",
          "VLSI Design",
          "Embedded Systems",
        ],
        facilities: [
          "RF & Microwave Lab",
          "Digital Signal Processing Lab",
          "Communication Systems Lab",
          "Industry Collaboration Projects",
        ],
        facultyCount: 15,
        gallery: ["/images/ece-1.jpg", "/images/ece-2.jpg"],
      },
    ],
  },

  {
    id: "school-of-management",
    name: "School of Management",
    description:
      "Premier institution offering comprehensive programs in business and management.",
    image: "https://content.jdmagicbox.com/comp/lucknow/y4/0522px522.x522.131217104012.w3y4/catalogue/school-of-management-sciences-lucknow-gpo-lucknow-management-institutes-73UUMutp3i.jpg",
    cardImage: "/images/som-card.jpg",
    departments: [
      {
        id: "mba",
        name: "MBA Program",
        description:
          "Two-year AACSB-accredited MBA program with specializations in Digital Marketing, Financial Analytics, and Operations.",
        image: "https://www.spsu.ac.in/wp-content/uploads/2023/10/MBA-2.jpg",
        courses: [
          "MBA in Digital Marketing",
          "MBA in Financial Analytics",
          "MBA in Operations Management",
        ],
        facilities: [
          "Harvard Case Study Methodology",
          "Summer Internships with Fortune 500 Companies",
          "1:1 Executive Mentorship",
        ],
        facultyCount: 20,
        gallery: ["/images/mba-1.jpg", "/images/mba-2.jpg"],
      },
      {
        id: "bba",
        name: "BBA Program",
        description:
          "Three-year NAAC A++ graded BBA program focusing on Entrepreneurship, HR Management, and Business Analytics.",
        image: "https://www.epravesh.com/blog/wp-content/uploads/2017/05/BBA-career.jpg",
        courses: [
          "BBA in Entrepreneurship",
          "BBA in HR Management",
          "BBA in Business Analytics",
        ],
        facilities: [
          "Startup Incubation Center",
          "Global Business Certification",
          "Industry Immersion Program",
        ],
        facultyCount: 18,
        gallery: ["/images/bba-1.jpg", "/images/bba-2.jpg"],
      },
      {
        id: "finance-management",
        name: "Finance Management",
        description:
          "Two-year program partnered with the CFA Institute, specializing in Investment Banking, Risk Management, and FinTech.",
        image: "https://stucred.com/wp-content/uploads/2023/06/Financial-Literacy-for-Students-Stucred-1024x576.jpg",
        courses: [
          "MFM in Investment Banking",
          "MFM in Risk Management",
          "MFM in FinTech",
        ],
        facilities: [
          "Bloomberg Terminal Lab Access",
          "Virtual Trading Floor",
          "FRM Certification Preparation",
        ],
        facultyCount: 15,
        gallery: ["/images/finance-1.jpg", "/images/finance-2.jpg"],
      },
      {
        id: "marketing-management",
        name: "Marketing Management",
        description:
          "Two-year program in partnership with Google Digital Garage, focusing on Digital Strategy, Consumer Behavior, and Brand Management.",
        image: "https://snu.edu.in/site/assets/files/18305/asian-businessman-blurred-office_1.1600x0.webp",
        courses: [
          "MMM in Digital Strategy",
          "MMM in Consumer Behavior",
          "MMM in Brand Management",
        ],
        facilities: [
          "Live Client Projects",
          "Social Media Analytics Lab",
          "Ad World Competition",
        ],
        facultyCount: 17,
        gallery: ["/images/marketing-1.jpg", "/images/marketing-2.jpg"],
      },
    ],
  },
];
