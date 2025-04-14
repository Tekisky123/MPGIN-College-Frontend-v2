import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Briefcase,
  CalendarCheck,
  GraduationCap,
  Wrench,
  HardHat,
  BatteryCharging,
  Cpu,
  BookOpenCheck,
  Factory,
} from "lucide-react";
import polytechnicHero from "../assets/images/labs.avif";

const VishwabharatiPolytechnicHome = () => {
  const programs = [
    {
      title: "Mechanical Engineering",
      specializations: ["Automobile", "Mechatronics", "CNC Technology"],
      icon: <Wrench className="w-6 h-6" />,
      highlights: [
        "2000+ sq.ft Automotive Workshop",
        "CAD/CAM Lab with 50+ workstations",
        "Industry 4.0 Training Center",
        "6-month compulsory industry internship",
      ],
      accreditation: "AICTE Approved | ISO 9001:2015 Certified",
      intake: "120 seats (60 per shift)",
    },
    {
      title: "Civil Engineering",
      specializations: ["Construction Tech", "Surveying", "Estimation"],
      icon: <HardHat className="w-6 h-6" />,
      highlights: [
        "Fully-equipped Material Testing Lab",
        "BIM Software Training Center",
        "On-site internship with construction firms",
        "Modern Surveying Equipment",
      ],
      accreditation: "COA Recognized | NSDC Partnered",
      intake: "90 seats (45 per shift)",
    },
    {
      title: "Electrical Engineering",
      specializations: ["Industrial Wiring", "PLC Systems", "Solar Tech"],
      icon: <BatteryCharging className="w-6 h-6" />,
      highlights: [
        "Smart Grid Simulation Lab",
        "Solar Panel Installation Workshop",
        "IoT Integration Training",
        "Industrial Automation Center",
      ],
      accreditation: "NSDC Partnered | Siemens Certified",
      intake: "75 seats (divided in two shifts)",
    },
    {
      title: "Computer Engineering",
      specializations: ["Networking", "Embedded Systems", "Web Tech"],
      icon: <Cpu className="w-6 h-6" />,
      highlights: [
        "Cisco Networking Academy Lab",
        "Mobile App Development Center",
        "Cloud Computing Infrastructure",
        "Annual Hackathon Competition",
      ],
      accreditation: "NIELIT Certified | Microsoft Partner",
      intake: "60 seats (single shift)",
    },
  ];

  const facilities = [
    {
      title: "Advanced Workshops",
      projects: [
        "Fully-equipped Welding Station with 10 booths",
        "Machine Shop with CNC and conventional machines",
        "3D Printing Lab with 5 industrial printers",
      ],
      icon: <Wrench className="w-6 h-6" />,
      collaborations: ["Bosch", "TATA Motors", "L&T"],
      capacity: "Simultaneous training for 50 students",
    },
    {
      title: "Energy Labs",
      projects: [
        "10KW Solar Installation Training System",
        "Wind Energy Simulation Setup",
        "Smart Grid Demonstration Unit",
      ],
      icon: <BatteryCharging className="w-6 h-6" />,
      collaborations: ["Siemens", "ABB", "Havells"],
      capacity: "24/7 access for final year projects",
    },
    {
      title: "Construction Yard",
      projects: [
        "Complete Material Testing Facility",
        "Survey Practice Field with modern equipment",
        "Architectural Model Making Studio",
      ],
      icon: <Factory className="w-6 h-6" />,
      collaborations: ["UltraTech", "JCB", "Caterpillar"],
      capacity: "Hands-on training for 80 students",
    },
    {
      title: "Digital Labs",
      projects: [
        "IoT Systems Development Center",
        "Robotics and Automation Lab",
        "CNC Programming Workstations",
      ],
      icon: <BookOpenCheck className="w-6 h-6" />,
      collaborations: ["Autodesk", "Dassault", "SolidWorks"],
      capacity: "60 high-end computing systems",
    },
  ];

  const admissions = [
    {
      title: "Eligibility",
      detail: "10th Pass with minimum 45% marks (40% for reserved categories)",
      icon: <GraduationCap className="w-6 h-6" />,
      note: "Maths and Science preferred",
    },
    {
      title: "Duration",
      detail: "3 Years Full-time (6 semesters)",
      icon: <CalendarCheck className="w-6 h-6" />,
      note: "Including 6-month industry training",
    },
    {
      title: "Intake",
      detail: "60-120 Seats per Program",
      icon: <Users className="w-6 h-6" />,
      note: "As per AICTE norms",
    },
    {
      title: "Placements",
      detail: "100+ companies visit annually",
      icon: <Briefcase className="w-6 h-6" />,
      note: "85% placement record in 2023",
    },
  ];

  const partners = [
    { name: "TATA Motors", since: 2015 },
    { name: "L&T Construction", since: 2018 },
    { name: "Siemens Energy", since: 2019 },
    { name: "Bosch India", since: 2016 },
    { name: "Havells Electricals", since: 2020 },
    { name: "Infosys", since: 2021 },
    { name: "Wipro Infrastructure", since: 2017 },
    { name: "ABB India", since: 2018 },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Junior Engineer",
      company: "TATA Motors",
      batch: "Mechanical Engineering, 2022",
      quote:
        "The hands-on training at Vishwabharati gave me practical skills that made my transition to industry seamless. I was production-ready from day one.",
    },
    {
      name: "Priya Patel",
      role: "Site Supervisor",
      company: "L&T Construction",
      batch: "Civil Engineering, 2021",
      quote:
        "The industry-aligned curriculum and site visits during my diploma helped me understand real-world challenges before entering the workforce.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] bg-mpgin-darkBlue text-white">
        <div className="absolute inset-0 bg-black/80">
          <img
            src={polytechnicHero}
            alt="Students working in polytechnic lab"
            className="w-full h-full object-cover object-center opacity-25"
            loading="lazy"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Skill-Based Technical Education at
              <br />
              <span className="text-mpgin-blue">Vishwabharati Polytechnic</span>
            </h1>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl text-gray-200">
                AICTE Approved | 100% Practical Training | Industry-Ready
                Certification
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-mpgin-blue text-white px-8 py-3 rounded-sm flex items-center gap-2 shadow-lg"
                >
                  Apply Now <ArrowRight size={20} />
                </motion.button> */}

                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 text-white px-8 py-3 rounded-sm border border-mpgin-blue hover:bg-mpgin-blue/20 transition-colors"
                >
                  View Courses
                </motion.button> */}
              </div>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              {
                number: "25+",
                label: "Skill Certifications",
                detail: "NSDC aligned programs",
              },
              {
                number: "200+",
                label: "Industry Partners",
                detail: "For training & placements",
              },
              {
                number: "85%",
                label: "Campus Placements",
                detail: "Highest in the region",
              },
              {
                number: "100%",
                label: "Practical Training",
                detail: "Hands-on learning",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-sm border border-white/10"
              >
                <p className="text-3xl font-bold text-mpgin-blue">
                  {stat.number}
                </p>
                <p className="text-sm font-medium text-gray-300 mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-400 mt-1">{stat.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-mpgin-darkBlue mb-4">
              Industry-Focused Diploma Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practical skill development with hands-on training modules
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-sm shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-mpgin-blue mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-mpgin-darkBlue mb-3">
                  {program.title}
                </h3>

                <div className="mb-4 flex flex-wrap gap-2">
                  {program.specializations.map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-sm"
                      style={{
                        backgroundColor: "#83c8f2",
                        color: "#111827",
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 mb-4">
                  {program.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 rounded-full bg-mpgin-blue mt-2 mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="text-xs text-gray-500 mt-4">
                  <p className="font-medium">{program.accreditation}</p>
                  <p>Intake: {program.intake}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-mpgin-darkBlue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Advanced Technical Facilities
            </h2>
            <p className="text-mpgin-blue max-w-xl mx-auto">
              Industry-grade infrastructure for practical learning excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-sm shadow-lg"
              >
                <div className="text-mpgin-blue mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold text-mpgin-darkBlue mb-4">
                  {facility.title}
                </h3>

                <div className="mb-4 border-b border-gray-200 pb-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {facility.projects.map((project, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="w-2 h-2 rounded-full bg-mpgin-blue mt-2 mr-2" />
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-gray-600 mb-1">
                    Industry Support:
                  </h4>
                  <p className="text-xs text-gray-600">
                    {facility.collaborations.join(", ")}
                  </p>
                </div>

                <p className="text-xs text-gray-500">{facility.capacity}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className="py-16 bg-mpgin-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-mpgin-darkBlue mb-4">
              Admission Process
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Simple steps to begin your technical education journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-sm shadow-lg"
              >
                <div className="text-mpgin-blue mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-mpgin-darkBlue mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-2">{item.detail}</p>
                {item.note && (
                  <p className="text-xs text-gray-500">{item.note}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-mpgin-darkBlue text-white p-8 rounded-sm max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">
              Admission Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              {[
                { month: "May", activity: "Application Open" },
                { month: "June", activity: "Document Submission" },
                { month: "July", activity: "Merit List Announcement" },
                { month: "August", activity: "Session Begins" },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white/10 rounded-sm">
                  <p className="font-bold text-mpgin-blue">{item.month}</p>
                  <p className="text-sm">{item.activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-mpgin-darkBlue mb-4">
              Our Recruitment Partners
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Leading organizations that regularly recruit our graduates
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-mpgin-darkBlue/5 rounded-sm text-center hover:shadow-md transition-shadow"
              >
                <p className="font-medium text-mpgin-darkBlue">
                  {partner.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Partner since {partner.since}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-mpgin-darkBlue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Student Success Stories
            </h2>
            <p className="text-mpgin-blue max-w-xl mx-auto">
              Hear from our alumni about their journey after Vishwabharati
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-8 bg-white text-mpgin-darkBlue rounded-sm shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-mpgin-blue flex items-center justify-center text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-mpgin-blue">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.batch}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-mpgin-darkBlue to-mpgin-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Build Your Technical Career?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Applications for 2024-25 academic year are now open
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-mpgin-darkBlue px-8 py-3 rounded-sm flex items-center gap-2 shadow-lg font-medium"
            >
              Apply Now <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-transparent text-white px-8 py-3 rounded-sm border border-white hover:bg-white/10"
            >
              Contact Admission Office
            </motion.button>
          </div> */}
          <p className="text-sm text-white/80 mt-6">
            Limited seats available | Merit-based admissions
          </p>
        </div>
      </section>
    </div>
  );
};

export default VishwabharatiPolytechnicHome;
