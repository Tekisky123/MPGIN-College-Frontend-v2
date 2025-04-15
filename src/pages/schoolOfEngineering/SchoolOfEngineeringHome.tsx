import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Microscope, Factory, Cpu, BookOpenCheck, Briefcase, Users, Award } from "lucide-react";
import homeImg from "../../assets/images/homeimage.avif";

const SchoolOfEngineeringHome = () => {
  const programs = [
    {
      title: "Computer Science & Engineering",
      specializations: ["AI & ML", "Cybersecurity", "Data Science", "IoT"],
      duration: "4 Years (8 Semesters)",
      intake: "120 Seats (60 per shift)",
      accreditation: "NBA Accredited | ISO 9001:2015",
      icon: <Cpu className="w-6 h-6" />,
      highlights: [
        "Cisco Networking Academy Lab",
        "Hackathon & Coding Competitions",
        "Industry-aligned Certification Courses",
        "100+ Computing Workstations"
      ],
      placement: "₹18LPA Highest Package"
    },
    {
      title: "Mechanical Engineering",
      specializations: ["Robotics", "Thermal Systems", "Mechatronics", "Automotive"],
      duration: "4 Years (8 Semesters)",
      intake: "90 Seats (45 per shift)",
      accreditation: "SAE Collegiate Club | ASME Certified",
      icon: <Factory className="w-6 h-6" />,
      highlights: [
        "Advanced CAD/CAM Center",
        "3D Printing & Prototyping Lab",
        "Automotive Workshop",
        "Industry 4.0 Training"
      ],
      placement: "₹12LPA Average Package"
    },
    {
      title: "Electrical Engineering",
      specializations: ["Smart Grid", "Renewables", "Industrial IoT", "Power Systems"],
      duration: "4 Years (8 Semesters)",
      intake: "75 Seats (Single Shift)",
      accreditation: "Siemens Certified Center",
      icon: <BookOpenCheck className="w-6 h-6" />,
      highlights: [
        "Smart Grid Simulation Lab",
        "Solar & Wind Energy Stations",
        "PLC & SCADA Training",
        "High Voltage Lab"
      ],
      placement: "100% Placement Record"
    },
    {
      title: "Civil Engineering",
      specializations: ["Structural", "Environmental", "Transportation", "Geotech"],
      duration: "4 Years (8 Semesters)",
      intake: "60 Seats (Single Shift)",
      accreditation: "COA Approved | IS Codes Compliant",
      icon: <GraduationCap className="w-6 h-6" />,
      highlights: [
        "BIM Training Center",
        "Materials Testing Facility",
        "Surveying Equipment",
        "GIS Applications Lab"
      ],
      placement: "Core Sector Placements"
    },
  ];

  const researchAreas = [
    {
      title: "Advanced Materials",
      projects: [
        "Nanocomposite Development",
        "3D Printing Materials",
        "Corrosion-resistant Alloys"
      ],
      icon: <Microscope className="w-6 h-6" />,
      collaborations: ["DRDO", "TATA Steel", "HAL"],
      funding: "₹2.5Cr DST Grant"
    },
    {
      title: "Sustainable Energy",
      projects: [
        "Solar Cell Efficiency",
        "Wind Farm Optimization",
        "Smart Grid Technologies"
      ],
      icon: <Briefcase className="w-6 h-6" />,
      collaborations: ["Siemens", "ABB", "NTPC"],
      funding: "₹1.8Cr MNRE Project"
    },
    {
      title: "Robotics & AI",
      projects: [
        "Industrial Automation",
        "Computer Vision Systems",
        "Autonomous Drone Swarms"
      ],
      icon: <Cpu className="w-6 h-6" />,
      collaborations: ["Bosch", "FANUC", "IBM"],
      funding: "₹3.2Cr MeitY Grant"
    },
    {
      title: "Smart Infrastructure",
      projects: [
        "IoT-enabled Cities",
        "Green Building Tech",
        "Disaster-resistant Structures"
      ],
      icon: <Factory className="w-6 h-6" />,
      collaborations: ["L&T", "AECOM", "Jacobs"],
      funding: "₹2.1Cr Smart Cities Mission"
    },
  ];

  const stats = [
    { number: "NAAC A++", label: "Institutional Accreditation", icon: <Award className="w-8 h-8" /> },
    { number: "1500+", label: "Active Students", icon: <Users className="w-8 h-8" /> },
    { number: "95%", label: "Placement Rate", icon: <Briefcase className="w-8 h-8" /> },
    { number: "35+", label: "Years of Excellence", icon: <GraduationCap className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] bg-mpgin-darkBlue text-white">
        <div className="absolute inset-0 bg-black/80">
          <img
            src={homeImg}
            alt="Engineering campus overview"
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
              Engineering Excellence at
              <span className="block mt-4 text-mpgin-blue">Matoshni Pratishthan</span>
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl text-gray-200">
                NAAC A++ Accredited | Industry-Aligned Curriculum | 95% Placement Record
              </p>
              
              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-mpgin-blue text-white px-8 py-3 rounded-sm flex items-center gap-2 shadow-lg"
                >
                  Apply Now <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 text-white px-8 py-3 rounded-sm border border-mpgin-blue hover:bg-mpgin-blue/20 transition-colors"
                >
                  Schedule Campus Tour
                </motion.button>
              </div> */}
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-sm border border-white/10"
              >
                <div className="text-mpgin-blue mb-2">{stat.icon}</div>
                <p className="text-3xl font-bold text-mpgin-blue">{stat.number}</p>
                <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Academic Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-mpgin-darkBlue mb-4">
              Premier Engineering Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-aligned curriculum with global certification pathways
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
                      className="text-xs px-2 py-1 rounded-sm bg-mpgin-blue/10 text-mpgin-darkBlue"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-3 mb-4">
                  {program.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-mpgin-blue mt-2 mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="text-xs text-gray-500 mt-4">
                  <p className="font-medium">{program.accreditation}</p>
                  <p>Intake: {program.intake}</p>
                  {program.placement && <p>{program.placement}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-16 bg-mpgin-darkBlue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Cutting-Edge Research Initiatives
            </h2>
            <p className="text-mpgin-blue max-w-xl mx-auto">
              Collaborative research with industry and government organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-sm shadow-lg"
              >
                <div className="text-mpgin-blue mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-mpgin-darkBlue mb-4">
                  {area.title}
                </h3>
                
                <div className="mb-4 border-b border-gray-200 pb-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Projects:</h4>
                  <ul className="space-y-2">
                    {area.projects.map((project, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-mpgin-blue mt-2 mr-2" />
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-gray-600 mb-1">Collaborations:</h4>
                  <p className="text-xs text-gray-600">{area.collaborations.join(", ")}</p>
                </div>
                
                {area.funding && <p className="text-xs text-gray-500 mt-2">Funding: {area.funding}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections (Facilities, Admissions, etc. can be added similarly) */}
    </div>
  );
};

export default SchoolOfEngineeringHome;