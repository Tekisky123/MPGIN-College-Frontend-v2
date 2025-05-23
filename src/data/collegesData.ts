import eceHod from "../assets/hodImages/Dr. Abdullah M.K.Department of Electronics & Telecommunication Engineering.jpeg"
import eeeHod from "../assets/hodImages/S. Asad HashmiElectrical Engineering.png"
import polyEceHod from "../assets/hodImages/Ms. Mule A.B. Head of Department - Electronics & Telecommunication Engineering.png"
import mechHod from "../assets/hodImages/Sayyad Shafik R Mechanical Engineering.png"
import cseHod from "../assets/hodImages/Mr B.A Khansole Computer Science & Engineering.png"

export interface Department {
  id: string;
  name: string;
  description: string;
  about: string;
  image: string;
  courses: string[];
  facilities: string[];
  facultyCount: number;
  gallery: string[];
  labs: {
    srNo: number;
    labName: string;
    area: string;
    incharge: string;
  }[];
  hod: {
    name: string;
    designation: string;
    message: string;
    profileImage: string;
  };
  vision: string;
  mission: string;
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
        about: `MPGI Integrated Campus is one of the premier technical institutions of the Region. The Department of Electronics and Telecommunication, MPGI Integrated Campus, was established in the year 2023 with an intake of 30 students. It is among the finest in the college having qualified faculty and well-equipped laboratories. The department has always strived to inculcate the very best in the students so that they can face the challenges offered by the industry. The department offers a B.Tech degree course in Electronics and Telecommunication Engineering. The preeminence of the department can be understood by the ever-increasing demands for its fresh graduates. Close interaction with the industry has led to the evolution of a teaching system, which produces diligent and erudite engineers. The young engineers have excelled both in higher education and in the industry.`,

        facilities: [
          "2000+ sq.ft Automotive Workshop",
          "CAD/CAM Lab with 50+ workstations",
          "Industry 4.0 Training Center",
          "6-month compulsory industry internship",
        ],
        facultyCount: 15,
        gallery: ["/images/mech-1.jpg", "/images/mech-2.jpg"],
        labs: [
          { srNo: 1, labName: "Automotive Workshop", area: "2000+ sq.ft", incharge: "Mr. Ramesh Patil" },
          { srNo: 2, labName: "CAD/CAM Lab", area: "1000 sq.ft", incharge: "Dr. Anil Deshmukh" },
          { srNo: 3, labName: "Mechatronics Lab", area: "800 sq.ft", incharge: "Prof. Neha Singh" },
        ],

        hod: {
          name: "Dr. Rajesh Kumar",
          designation: "Head of Department - Mechanical Engineering",
          message: "We are committed to shaping future-ready mechanical engineers through hands-on learning and industry exposure.",
          profileImage: "https://example.com/images/dr-rajesh-kumar.jpg "
        },
        vision: "To be a globally recognized center of excellence in mechanical engineering education and research.",
        mission: "To produce skilled professionals who contribute effectively to industrial development and technological innovation."
      },
      {
        id: "civil",
        name: "Civil Engineering",
        description:
          "Comprehensive program in civil engineering and construction technology",
        image: "https://i.ytimg.com/vi/b87BLzfNal4/maxresdefault.jpg ",
        courses: [
          "Diploma in Civil Engg",
          "Advanced Construction Tech",
          "Surveying Techniques",
        ],
        about: `MPGI Integrated Campus is one of the premier technical institutions of the Region. The Department of Electronics and Telecommunication, MPGI Integrated Campus, was established in the year 2023 with an intake of 30 students. It is among the finest in the college having qualified faculty and well-equipped laboratories. The department has always strived to inculcate the very best in the students so that they can face the challenges offered by the industry. The department offers a B.Tech degree course in Electronics and Telecommunication Engineering. The preeminence of the department can be understood by the ever-increasing demands for its fresh graduates. Close interaction with the industry has led to the evolution of a teaching system, which produces diligent and erudite engineers. The young engineers have excelled both in higher education and in the industry.`,
        facilities: [
          "Fully-equipped Material Testing Lab",
          "BIM Software Training Center",
          "On-site internship with construction firms",
          "Modern Surveying Equipment",
        ],
        facultyCount: 12,
        gallery: ["/images/civil-1.jpg", "/images/civil-2.jpg"],
        labs: [
          { srNo: 1, labName: "Automotive Workshop", area: "2000+ sq.ft", incharge: "Mr. Ramesh Patil" },
          { srNo: 2, labName: "CAD/CAM Lab", area: "1000 sq.ft", incharge: "Dr. Anil Deshmukh" },
          { srNo: 3, labName: "Mechatronics Lab", area: "800 sq.ft", incharge: "Prof. Neha Singh" },
        ],
        hod: {
          name: "Dr. Rajesh Kumar",
          designation: "Head of Department - Mechanical Engineering",
          message: "We are committed to shaping future-ready mechanical engineers through hands-on learning and industry exposure.",
          profileImage: "https://example.com/images/dr-rajesh-kumar.jpg "
        },
        vision: "To impart knowledge and excellence with global perspectives to our students and to make ethically strong engineers to build our nation",
        mission: "To produce civil engineers of high caliber, technical skills and ethical values to serve the society and to provide knowledge base consultancy services to the community in all areas of civil engineering"
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
        about: `MPGI Integrated Campus is one of the premier technical institutions of the Region. The Department of Electronics and Telecommunication, MPGI Integrated Campus, was established in the year 2023 with an intake of 30 students. It is among the finest in the college having qualified faculty and well-equipped laboratories. The department has always strived to inculcate the very best in the students so that they can face the challenges offered by the industry. The department offers a B.Tech degree course in Electronics and Telecommunication Engineering. The preeminence of the department can be understood by the ever-increasing demands for its fresh graduates. Close interaction with the industry has led to the evolution of a teaching system, which produces diligent and erudite engineers. The young engineers have excelled both in higher education and in the industry.`,

        facilities: [
          "Smart Grid Simulation Lab",
          "Solar Panel Installation Workshop",
          "IoT Integration Training",
          "Industrial Automation Center",
        ],
        facultyCount: 10,
        gallery: ["/images/electrical-1.jpg", "/images/electrical-2.jpg"],
        labs: [
          { srNo: 1, labName: "Automotive Workshop", area: "2000+ sq.ft", incharge: "Mr. Ramesh Patil" },
          { srNo: 2, labName: "CAD/CAM Lab", area: "1000 sq.ft", incharge: "Dr. Anil Deshmukh" },
          { srNo: 3, labName: "Mechatronics Lab", area: "800 sq.ft", incharge: "Prof. Neha Singh" },
        ],
        hod: {
          name: "Dr. Rajesh Kumar",
          designation: "Head of Department - Mechanical Engineering",
          message: "We are committed to shaping future-ready mechanical engineers through hands-on learning and industry exposure.",
          profileImage: "https://example.com/images/dr-rajesh-kumar.jpg "
        },
        vision: "To be a globally recognized center of excellence in mechanical engineering education and research.",
        mission: "To produce skilled professionals who contribute effectively to industrial development and technological innovation."
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
        about: `MPGI Integrated Campus is one of the premier technical institutions of the Region. The Department of Electronics and Telecommunication, MPGI Integrated Campus, was established in the year 2023 with an intake of 30 students. It is among the finest in the college having qualified faculty and well-equipped laboratories. The department has always strived to inculcate the very best in the students so that they can face the challenges offered by the industry. The department offers a B.Tech degree course in Electronics and Telecommunication Engineering. The preeminence of the department can be understood by the ever-increasing demands for its fresh graduates. Close interaction with the industry has led to the evolution of a teaching system, which produces diligent and erudite engineers. The young engineers have excelled both in higher education and in the industry.`,

        facilities: [
          "Cisco Networking Academy Lab",
          "Mobile App Development Center",
          "Cloud Computing Infrastructure",
          "Annual Hackathon Competition",
        ],
        facultyCount: 9,
        gallery: ["/images/computer-1.jpg", "/images/computer-2.jpg"],
        labs: [
          { srNo: 1, labName: "Automotive Workshop", area: "2000+ sq.ft", incharge: "Mr. Ramesh Patil" },
          { srNo: 2, labName: "CAD/CAM Lab", area: "1000 sq.ft", incharge: "Dr. Anil Deshmukh" },
          { srNo: 3, labName: "Mechatronics Lab", area: "800 sq.ft", incharge: "Prof. Neha Singh" },
        ],
        hod: {
          name: "Dr. Rajesh Kumar",
          designation: "Head of Department - Mechanical Engineering",
          message: "We are committed to shaping future-ready mechanical engineers through hands-on learning and industry exposure.",
          profileImage: "https://example.com/images/dr-rajesh-kumar.jpg "
        },
        vision: "To be a globally recognized center of excellence in mechanical engineering education and research.",
        mission: "To produce skilled professionals who contribute effectively to industrial development and technological innovation."
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
        about: `MPGI Integrated Campus is one of the premier technical institutions of the Region. The Department of Electronics and Telecommunication, MPGI Integrated Campus, was established in the year 2023 with an intake of 30 students. It is among the finest in the college having qualified faculty and well-equipped laboratories. The department has always strived to inculcate the very best in the students so that they can face the challenges offered by the industry. The department offers a B.Tech degree course in Electronics and Telecommunication Engineering. The preeminence of the department can be understood by the ever-increasing demands for its fresh graduates. Close interaction with the industry has led to the evolution of a teaching system, which produces diligent and erudite engineers. The young engineers have excelled both in higher education and in the industry.`,

        facilities: [
          "Advanced Cybersecurity Lab",
          "Cloud-Based Development Environment",
          "Industry Collaboration Projects",
          "Hackathons and Coding Competitions",
        ],
        facultyCount: 8,
        gallery: ["/images/it-1.jpg", "/images/it-2.jpg"],
        labs: [
          { srNo: 1, labName: "Automotive Workshop", area: "2000+ sq.ft", incharge: "Mr. Ramesh Patil" },
          { srNo: 2, labName: "CAD/CAM Lab", area: "1000 sq.ft", incharge: "Dr. Anil Deshmukh" },
          { srNo: 3, labName: "Mechatronics Lab", area: "800 sq.ft", incharge: "Prof. Neha Singh" },
        ],
        hod: {
          name: "Dr. Rajesh Kumar",
          designation: "Head of Department - Mechanical Engineering",
          message: "We are committed to shaping future-ready mechanical engineers through hands-on learning and industry exposure.",
          profileImage: "https://example.com/images/dr-rajesh-kumar.jpg "
        },
        vision: "To be a globally recognized center of excellence in mechanical engineering education and research.",
        mission: "To produce skilled professionals who contribute effectively to industrial development and technological innovation."
      },
      {
        id: "ece",
        name: "Electronics and Telecommunication",
        description:
          "Program specializing in communication systems, embedded systems, and IoT.",
        image: "https://georgetelegraphblog.wordpress.com/wp-content/uploads/2021/01/electronics-and-communication.jpg?w=584 ",
        about: `MPGI Integrated Campus is one of the premier technical institutions of the Region. The department of Electronics and Tele Communication, MPGI Integrated Campus, was established in the year 2023 with an intake of 30 students. It is among the finest in the college having qualified faculty and well equipped laboratories. The department has always strived to inculcate the very best in the students so that they can face the challenges offered by the industry. The department offers B.Tech degree course in Electronics and Tele Communication Engineering. The preeminence of the department can be understood by the ever increasing demands of its fresh graduate. Close interaction with the industry has led to the evolution of a teaching system, which produces diligent and erudite engineers. The young engineers have excelled both in higher education and in industry.`,
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
        labs: [
          { srNo: 1, labName: "Automotive Workshop", area: "2000+ sq.ft", incharge: "Mr. Ramesh Patil" },
          { srNo: 2, labName: "CAD/CAM Lab", area: "1000 sq.ft", incharge: "Dr. Anil Deshmukh" },
          { srNo: 3, labName: "Mechatronics Lab", area: "800 sq.ft", incharge: "Prof. Neha Singh" },
        ],
        hod: {
          name: "Ms. Mule A.B.",
          designation: "Head of Department - Electronics & Telecommunication Engineering",
          message: `Department of Electronics and Telecommunication Engineering is one of the established departments in the institute. It was started in the year 2023. The Department offers diploma in “Electronics and Telecommunication Engineering” with intake capacity of 30.We have a team of qualified, experienced & dedicated teaching faculty. Department is supported by equally dedicated qualified laboratory staff. The Department has built an excellent reputation for its diploma students in terms of placements. The curriculum offers a balance of theoretical knowledge and practical experience, enabling you to design, develop, and test electronic systems used in fields like telecommunications, aerospace, and healthcare. With robust industry partnerships, research-oriented labs, and a focus on innovation, MPVPI stands out as one of the leading institutes for Electronics and Telecommunication Engineering in Maharashtra.
                    “Technology can become the “wings” that will allow the educational world to fly farther and faster than ever before – if we allow it”`,
          profileImage: polyEceHod
        },
        vision: "Creation of academic excellence in the field of Electronics & Telecommunication Engineering through value based universal education system to produce proficient professionals for the welfare of mankind around the globe.",
        mission: `1. To provide quality education in the field of Electronics Engineering.
2. To conduct practical training as per industry needs to enhance academic standard of the students.
3. To empower each & every student by providing them all round personality development with latest emerging technology through expert lectures.
4. To provide electronics engineers to the society for effective contribution towards societal developments with the sense of discipline and dedication.`
      },
      {
        id: "bsh",
        name: "Basic Sciences and Humanities (FE)",
        description:
          "Foundation department focusing on engineering fundamentals, mathematics, physics, chemistry, and communication skills.",
        image: "https://www.lpu.in/academics/images/department/physics.jpg",
        about: `The Department of Basic Sciences and Humanities (BSH) forms the cornerstone of engineering education at MPGI Integrated Campus. Established with the vision to provide a strong academic foundation for first-year students, the department plays a vital role in shaping the core competencies required across all streams of engineering. With expert faculty in Mathematics, Physics, Chemistry, and English, the department focuses on bridging the gap between school-level understanding and the advanced requirements of professional technical courses. Our faculty uses innovative pedagogies and modern teaching tools to make fundamental concepts accessible and engaging. We strive to cultivate analytical reasoning, scientific temper, and effective communication skills in students to ensure their seamless transition into branch-specific subjects from the second year onwards.`,
        courses: [
          "Engineering Mathematics I & II",
          "Engineering Physics & Lab",
          "Engineering Chemistry & Lab",
          "Environmental Studies",
          "Communication Skills & Soft Skills"
        ],
        facilities: [
          "Engineering Physics Lab",
          "Engineering Chemistry Lab",
          "Language and Communication Lab",
          "Digital Learning Smart Classrooms"
        ],
        facultyCount: 15,
        gallery: ["/images/bsh-1.jpg", "/images/bsh-2.jpg"],
        labs: [
          { srNo: 1, labName: "Physics Lab", area: "900 sq.ft", incharge: "Dr. Prakash Yadav" },
          { srNo: 2, labName: "Chemistry Lab", area: "850 sq.ft", incharge: "Ms. Shalini Thakur" },
          { srNo: 3, labName: "Language Lab", area: "750 sq.ft", incharge: "Mr. Vikram Nair" }
        ],
        hod: {
          name: "Dr. Seema Kulkarni",
          designation: "Head of Department - Basic Sciences and Humanities",
          message: `The Department of Basic Sciences and Humanities plays a crucial role in laying the groundwork for aspiring engineers. We believe that a strong conceptual base in science and mathematics, coupled with effective communication skills, forms the backbone of successful engineering education. Our faculty members are committed to academic excellence and holistic development of students. Through interactive learning, lab-based experiments, and a focus on critical thinking, we strive to build the intellectual curiosity and problem-solving abilities of our students. At MPGI, we believe that the first year is not just a transition—it is a transformation. 

    “Science is a way of thinking much more than it is a body of knowledge.” – Carl Sagan`,
          profileImage: "polyBshHod"
        },
        vision: "To provide a strong academic foundation and foster critical thinking, scientific inquiry, and effective communication in engineering students for lifelong learning and professional excellence.",
        mission: `1. To strengthen the fundamental knowledge of science and mathematics among first-year engineering students.
2. To enhance communication, interpersonal, and analytical skills through skill-based training.
3. To promote scientific curiosity, ethical reasoning, and sustainable thinking among students.
4. To nurture a multidisciplinary environment that supports innovation, creativity, and problem-solving.`,
      }


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
        about: `MPGI Integrated Campus is recognized as one of the premier technical institutions in the region. The Department of Computer Science and Engineering was established in the year 2009 with an initial intake of 30 students. Since its inception, the department has emerged as one of the most distinguished in the institution, supported by a team of well-qualified faculty members and equipped with modern, state-of-the-art laboratories.

The department is committed to nurturing students with strong academic foundations and practical skills to prepare them for the dynamic challenges of the IT industry. By fostering a culture of innovation, critical thinking, and problem-solving, the department ensures that students are industry-ready upon graduation.

The excellence of the department is reflected in the consistent demand for its graduates in both industry and academia. Strong ties with the industry have shaped a forward-looking teaching methodology that blends theoretical knowledge with hands-on experience. As a result, our graduates have gone on to excel in higher education and secure successful careers in leading organizations.`,

        facultyCount: 18,
        gallery: ["/images/cse-1.jpg", "/images/cse-2.jpg"],
        labs: [
          {
            srNo: 1, labName: `1.Database System &  Software       
 Engineering Laboratory:`, area: "-", incharge: "Mr. K. A. Mistry "
          },
          { srNo: 2, labName: `Project Phase internship & Project in Industry`, area: "-", incharge: "Mr. K.D. Ibitkar" },
          { srNo: 3, labName: `Natural Language   Processing  &  Data Engineering lab`, area: "-", incharge: "Miss. Maliha Sayyad." },
          { srNo: 4, labName: `Programing & Machine Learning Lab`, area: "-", incharge: "Mr. K.A. Mistry" },
          { srNo: 5, labName: `Deep Learning & Machine Learning Lab`, area: "-", incharge: "Mrs. Jyoti Sarode" },
          { srNo: 6, labName: `Data Structures & Object-Oriented Lab`, area: "-", incharge: "Miss. Maliha Sayyad" },
          { srNo: 7, labName: `Operating System & Python Programing Lab`, area: "-", incharge: "Mrs. Jyoti Sarode" },
        ],
        hod: {
          name: "Mr B.A Khansole",
          designation: "Associate Professor & H.O.D",
          message: `Dear Students and Respected Visitors,

A warm and heartfelt welcome to all of you.

As we are all aware, the world of technology is evolving rapidly with new innovations and advancements emerging every day. In response to this dynamic landscape, the Department of Computer Science and Engineering at MPGI Integrated Campus is committed to providing students with up-to-date knowledge and technical skills. This is achieved through our highly qualified faculty, who bring rich industry experience, and through our well-developed, technologically advanced laboratories.

The department has witnessed significant growth, particularly due to the rapid developments in the field of Computer Science and Engineering. We continuously strive to adapt our teaching methods and curriculum to align with current industry standards and future technological trends.

I am confident that our current batch of students will uphold the department’s reputation by demonstrating a high level of professional competence and making meaningful contributions in their respective careers.

Wishing all our students great success in their academic and professional journeys.`,
          profileImage: cseHod
        },
        vision: `The Department of Computer Science and Engineering at MPGI Integrated Campus envisions becoming a leading center of excellence in computing education, research, and innovation. The department is committed to nurturing technically proficient, ethically grounded, and socially responsible professionals who can thrive in a rapidly evolving technological world. By fostering a spirit of innovation, continuous learning, and global awareness, the department aims to empower students to make meaningful contributions to industry, academia, and society at large. `,
        mission: `The mission of the Department of Computer Science and Engineering is to deliver high-quality education that blends theoretical knowledge with practical skills in computer science and related technologies. The department seeks to develop students’ analytical thinking, problem-solving capabilities, and creativity through a curriculum that is responsive to the latest industry trends and technological advancements. Through collaborations with industry and research organizations, the department ensures experiential learning opportunities such as internships, projects, and workshops. It also places strong emphasis on ethical practices, effective communication, leadership, and teamwork, preparing students to excel in diverse professional environments. Continuous improvement in faculty development, infrastructure, and academic delivery remains a core focus in the department’s pursuit of excellence.`
      },
      {
        id: "mech",
        name: "Mechanical Engineering",
        description:
          "Advanced undergraduate program in robotics, automotive, and thermal systems.",
        image: "https://www.cepathanapuram.ac.in/assets/images/mephoto5.jpg ",
        courses: [
          "B.Tech in Mechanical Engineering",
          "Robotics",
          "Thermal Systems",
          "Automotive Technology",
        ],
        about: `Department of Mechanical and Automation Engineering
MPGI, Nanded

The Department of Mechanical and Automation Engineering at Matoshri Pratishthan Group of Institutions (Integrated Campus), Nanded, is dedicated to excellence in teaching, research, and industry engagement. The department offers a robust undergraduate program that integrates the foundational concepts of mechanical engineering with emerging technologies in automation, robotics, and intelligent systems.

Established with the aim of preparing students for the evolving demands of modern engineering industries, the department is equipped with state-of-the-art laboratories, modern software tools, and advanced equipment. Our curriculum emphasizes practical learning, interdisciplinary knowledge, and industry-relevant skills.

Our faculty members are highly qualified, experienced, and committed to fostering a student-centric learning environment. The department actively encourages innovation, entrepreneurship, and research among students through technical events, workshops, industrial visits, and collaborative projects.

To promote student engagement and all-round development, we have formed the Mechanical and Automation Engineering Students Association (MAESA). The association regularly organizes technical, cultural, and soft-skill development activities to prepare students for successful careers in industry, research, or higher education.

With a focus on academic excellence, hands-on experience, and professional growth, the Department of Mechanical and Automation Engineering is committed to producing competent, ethical, and future-ready engineers.`,
        facilities: [
          "Advanced CAD/CAM Center",
          "3D Printing & Prototyping Lab",
          "Automotive Workshop",
          "Industry 4.0 Training",
        ],
        facultyCount: 16,
        gallery: ["/images/mech-engg-1.jpg", "/images/mech-engg-2.jpg"],
        labs: [
          { srNo: 1, labName: "Automation & Robotics Lab", area: "950 sq.ft", incharge: "Prof. S.K. Gupta" },
          { srNo: 2, labName: "Thermal Engineering Lab", area: "800 sq.ft", incharge: "Dr. P. M. Deshmukh" },
          { srNo: 3, labName: "Manufacturing & Machining Workshop", area: "1200 sq.ft", incharge: "Mr. D. R. Patil" }
        ],
        hod: {
          name: "Sayyad Shafik R",
          designation: "Head of Department - Mechanical and Automation Engineering",
          message: `Welcome to the Department of Mechanical and Automation Engineering at MPGI, Nanded. Our department is committed to delivering quality education by blending core mechanical principles with modern automation technologies. With well-equipped laboratories and a dedicated team of experienced faculty, we provide a learning environment that fosters innovation, critical thinking, and practical skills.

We emphasize holistic development through the Mechanical and Automation Engineering Students Association (MAESA), which offers students opportunities to enhance their technical knowledge, communication skills, and leadership abilities. Our goal is to prepare students to meet industry challenges and become future-ready professionals.

Join us in shaping a dynamic and rewarding career in engineering.`,
          profileImage: mechHod
        },
        vision: "Entrancing education to reach the Unreached: The rural student",
        mission: "To provide a congenial learning atmosphere and ambition, thereby enabling students to reach their purpose and target and to become good technocrats and responsible citizens"
      },
      {
        id: "eee",
        name: "Electrical Engineering",
        description:
          "Focused on smart grids, power systems, and renewable technologies.",
        image: "https://webfiles.amrita.edu/2019/12/Teywkhaq-about-electrical-and-electronics.jpg ",
        courses: [
          "B.Tech in Electrical Engineering",
          "Smart Grid Systems",
          "Power Systems",
          "Industrial IoT",
        ],
        about: `The Department of Electrical Engineering at MPGI's School of Engineering was established in the Academic Year 2011-12 with an intake of 60 Students. Electrical Engineering is a continuously evolving subject. As technology has advanced, so have the challenges facing the modern engineer. The main job of an electrical engineer is to design and develop more efficient electrical machinery, power and energy systems, and control equipment for the generation, transmission, and distribution of electrical energy and communication. The Department has a healthy mixture of young and experienced faculty members, all of whom display high levels of enthusiasm and dedication. They provide knowledge on theoretical and practical aspects of different areas of electrical engineering. Apart from teaching, the faculties are actively involved in organizing technical workshops, camps, and visits at the Institute to create an environment conducive to experiential learning. The Department firmly believes in imparting a strong hands-on flavor to the courses that a student takes, and therefore places emphasis on the laboratory component, internships, and projects.`,
        facilities: [
          "Smart Grid Simulation Lab",
          "Solar & Wind Energy Stations",
          "PLC & SCADA Training",
          "High Voltage Lab",
        ],
        facultyCount: 14,
        gallery: ["/images/eee-1.jpg", "/images/eee-2.jpg"],
        labs: [
          { srNo: 1, labName: "Networking Lab", area: "900 sq.ft", incharge: "Mr. Rohit Jain" },
          { srNo: 2, labName: "App Development Lab", area: "700 sq.ft", incharge: "Ms. Sneha Mehta" },
          { srNo: 3, labName: "Cloud Computing Lab", area: "850 sq.ft", incharge: "Dr. Arun Dubey" },
        ],
        hod: {
          name: "S. Asad Hashmi",
          designation: "Head of Department - Electrical Engineering",
          message: `I take the privilege to welcome you all to the Department of Electrical Engineering at the School of Engineering, Matoshri Pratishthan Group of Institutions (Integrated Campus), Nanded. The undergraduate course in Electrical Engineering was started in 2011 with the intake of 60 students. The Electrical Engineering is one of the most vibrant and live departments in the institute.
    
    The department seeks to combine excellence in education and well-equipped laboratories. Learning is a continuous process and does not end with the acquisition of a degree. Therefore, students are given a strong foundation related to electrical technology and problem-solving techniques and are made adaptable to changes.
    
    The faculty is well qualified and dynamic and always ready to help students to guide. The Department has formed Electrical Engineering Students Association (EESA), with the aim for all-round development of students that is to enhance their technical, cultural, and communication skills which will help them to sustain in the competition for their better future and to perform best.`,
          profileImage: eeeHod
        },
        vision: "To Become a Lead Center in the Field of Electrical Engineering to Minimize Human Efforts with an Eye on Environment.",
        mission: "To Impart Technical Education, Nurture Creativity, Critical Thinking & Application of Comprehensive Engineering Knowledge & Skills to Meet the Global Challenges through Innovation & Research."
      },
      {
        id: "civil",
        name: "Civil Engineering",
        description:
          "Comprehensive program in civil engineering and construction technology",
        image: "https://i.ytimg.com/vi/b87BLzfNal4/maxresdefault.jpg ",
        courses: [
          "Diploma in Civil Engg",
          "Advanced Construction Tech",
          "Surveying Techniques",
        ],
        about: `MPGI Integrated Campus is one of the premier technical institutions of the Region. The Department of Electronics and Telecommunication, MPGI Integrated Campus, was established in the year 2023 with an intake of 30 students. It is among the finest in the college having qualified faculty and well-equipped laboratories. The department has always strived to inculcate the very best in the students so that they can face the challenges offered by the industry. The department offers a B.Tech degree course in Electronics and Telecommunication Engineering. The preeminence of the department can be understood by the ever-increasing demands for its fresh graduates. Close interaction with the industry has led to the evolution of a teaching system, which produces diligent and erudite engineers. The young engineers have excelled both in higher education and in the industry.`,
        facilities: [
          "Fully-equipped Material Testing Lab",
          "BIM Software Training Center",
          "On-site internship with construction firms",
          "Modern Surveying Equipment",
        ],
        facultyCount: 12,
        gallery: ["/images/civil-1.jpg", "/images/civil-2.jpg"],
        labs: [
          { srNo: 1, labName: "Automotive Workshop", area: "2000+ sq.ft", incharge: "Mr. Ramesh Patil" },
          { srNo: 2, labName: "CAD/CAM Lab", area: "1000 sq.ft", incharge: "Dr. Anil Deshmukh" },
          { srNo: 3, labName: "Mechatronics Lab", area: "800 sq.ft", incharge: "Prof. Neha Singh" },
        ],
        hod: {
          name: "Dr. Rajesh Kumar",
          designation: "Head of Department - Mechanical Engineering",
          message: "We are committed to shaping future-ready mechanical engineers through hands-on learning and industry exposure.",
          profileImage: "https://example.com/images/dr-rajesh-kumar.jpg "
        },
        vision: "To impart knowledge and excellence with global perspectives to our students and to make ethically strong engineers to build our nation",
        mission: "To produce civil engineers of high caliber, technical skills and ethical values to serve the society and to provide knowledge base consultancy services to the community in all areas of civil engineering"
      },
      {
        id: "ece",
        name: "Electronics and Telecommunication",
        description:
          "Program specializing in communication systems, embedded systems, and IoT.",
        image: "https://georgetelegraphblog.wordpress.com/wp-content/uploads/2021/01/electronics-and-communication.jpg?w=584 ",
        about: `MPGI Integrated Campus is one of the premier technical institutions of the Region. The department of Electronics and Tele Communication, MPGI Integrated Campus, was established in the year 2023 with an intake of 30 students. It is among the finest in the college having qualified faculty and well equipped laboratories. The department has always strived to inculcate the very best in the students so that they can face the challenges offered by the industry. The department offers B.Tech degree course in Electronics and Tele Communication Engineering. The preeminence of the department can be understood by the ever increasing demands of its fresh graduate. Close interaction with the industry has led to the evolution of a teaching system, which produces diligent and erudite engineers. The young engineers have excelled both in higher education and in industry.`,
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
        labs: [
          { srNo: 1, labName: "Automotive Workshop", area: "2000+ sq.ft", incharge: "Mr. Ramesh Patil" },
          { srNo: 2, labName: "CAD/CAM Lab", area: "1000 sq.ft", incharge: "Dr. Anil Deshmukh" },
          { srNo: 3, labName: "Mechatronics Lab", area: "800 sq.ft", incharge: "Prof. Neha Singh" },
        ],
        hod: {
          name: "Dr. Abdullah M.K.",
          designation: "Head of Department - Electronics & Telecommunication Engineering",
          message: "Dear students & respected visitors heartiest welcome to all of you. As all of us know that day by day new technologies and new innovative things are developing and today the world is within reach and by pressing on only one click we are getting whole information about the world. All these things are happening because of marvels fruit of Electronics. Electronics & Telecommunication Engineering is continuously growing, changing, widening, and challenging branch of engineering profession, its shapes the fabric of our global society. The department of Electronics and Telecommunication aims to give the excellent knowledge and trained the students as per the industry requirements so that students can successfully face the challenges in their life. We are providing up to date knowledge and technical development in the field of Electronics and Telecommunication, through technically rich and industry experience faculty and well develop technologically update labs. The department has seen a significant growth especially because of the rapid advances in Electronics and Telecommunication. I am confident that the students of the present batch would justify the credibility of the department by showing a high level of professional competence in their respective job areas.",
          profileImage: eceHod
        },
        vision: "To Train the students with solid technical knowledge and impart ethical values, so that the students will be able to deal any challenge in life successfully.",
        mission: "To provide the excellent and skilled technocrats to the world by providing excellent teaching and training."
      },
      {
        id: "bsh",
        name: "Basic Sciences and Humanities (FE)",
        description:
          "Foundation department focusing on engineering fundamentals, mathematics, physics, chemistry, and communication skills.",
        image: "https://www.lpu.in/academics/images/department/physics.jpg",
        about: `The Department of Basic Sciences and Humanities (BSH) forms the cornerstone of engineering education at MPGI Integrated Campus. Established with the vision to provide a strong academic foundation for first-year students, the department plays a vital role in shaping the core competencies required across all streams of engineering. With expert faculty in Mathematics, Physics, Chemistry, and English, the department focuses on bridging the gap between school-level understanding and the advanced requirements of professional technical courses. Our faculty uses innovative pedagogies and modern teaching tools to make fundamental concepts accessible and engaging. We strive to cultivate analytical reasoning, scientific temper, and effective communication skills in students to ensure their seamless transition into branch-specific subjects from the second year onwards.`,
        courses: [
          "Engineering Mathematics I & II",
          "Engineering Physics & Lab",
          "Engineering Chemistry & Lab",
          "Environmental Studies",
          "Communication Skills & Soft Skills"
        ],
        facilities: [
          "Engineering Physics Lab",
          "Engineering Chemistry Lab",
          "Language and Communication Lab",
          "Digital Learning Smart Classrooms"
        ],
        facultyCount: 15,
        gallery: ["/images/bsh-1.jpg", "/images/bsh-2.jpg"],
        labs: [
          { srNo: 1, labName: "Physics Lab", area: "900 sq.ft", incharge: "Dr. Prakash Yadav" },
          { srNo: 2, labName: "Chemistry Lab", area: "850 sq.ft", incharge: "Ms. Shalini Thakur" },
          { srNo: 3, labName: "Language Lab", area: "750 sq.ft", incharge: "Mr. Vikram Nair" }
        ],
        hod: {
          name: "Dr. Seema Kulkarni",
          designation: "Head of Department - Basic Sciences and Humanities",
          message: `The Department of Basic Sciences and Humanities plays a crucial role in laying the groundwork for aspiring engineers. We believe that a strong conceptual base in science and mathematics, coupled with effective communication skills, forms the backbone of successful engineering education. Our faculty members are committed to academic excellence and holistic development of students. Through interactive learning, lab-based experiments, and a focus on critical thinking, we strive to build the intellectual curiosity and problem-solving abilities of our students. At MPGI, we believe that the first year is not just a transition—it is a transformation. 

    “Science is a way of thinking much more than it is a body of knowledge.” – Carl Sagan`,
          // profileImage: polyBshHod
        },
        vision: "To provide a strong academic foundation and foster critical thinking, scientific inquiry, and effective communication in engineering students for lifelong learning and professional excellence.",
        mission: `1. To strengthen the fundamental knowledge of science and mathematics among first-year engineering students.
2. To enhance communication, interpersonal, and analytical skills through skill-based training.
3. To promote scientific curiosity, ethical reasoning, and sustainable thinking among students.
4. To nurture a multidisciplinary environment that supports innovation, creativity, and problem-solving.`,
      }

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
        labs: [],
        hod: {
          name: "Dr. Rajesh Kumar",
          designation: "Head of Department - Mechanical Engineering",
          message: "We are committed to shaping future-ready mechanical engineers through hands-on learning and industry exposure.",
          profileImage: "https://example.com/images/dr-rajesh-kumar.jpg "
        },
        vision: "To be a globally recognized center of excellence in mechanical engineering education and research.",
        mission: "To produce skilled professionals who contribute effectively to industrial development and technological innovation."
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
        labs: [],
        hod: {
          name: "Dr. Rajesh Kumar",
          designation: "Head of Department - Mechanical Engineering",
          message: "We are committed to shaping future-ready mechanical engineers through hands-on learning and industry exposure.",
          profileImage: "https://example.com/images/dr-rajesh-kumar.jpg "
        },
        vision: "To be a globally recognized center of excellence in mechanical engineering education and research.",
        mission: "To produce skilled professionals who contribute effectively to industrial development and technological innovation."
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
        labs: [],
        hod: {
          name: "Dr. Rajesh Kumar",
          designation: "Head of Department - Mechanical Engineering",
          message: "We are committed to shaping future-ready mechanical engineers through hands-on learning and industry exposure.",
          profileImage: "https://example.com/images/dr-rajesh-kumar.jpg "
        },
        vision: "To be a globally recognized center of excellence in mechanical engineering education and research.",
        mission: "To produce skilled professionals who contribute effectively to industrial development and technological innovation."
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
        labs: [],
        hod: {
          name: "Dr. Rajesh Kumar",
          designation: "Head of Department - Mechanical Engineering",
          message: "We are committed to shaping future-ready mechanical engineers through hands-on learning and industry exposure.",
          profileImage: "https://example.com/images/dr-rajesh-kumar.jpg "
        },
        vision: "To be a globally recognized center of excellence in mechanical engineering education and research.",
        mission: "To produce skilled professionals who contribute effectively to industrial development and technological innovation."
      },

    ],
  },
];
