import { motion } from "framer-motion";
import { ArrowRight, Briefcase, BarChart, DollarSign, Globe, Users, Award, BookOpenText, Handshake } from "lucide-react";
import managementHero from "../assets/images/management.jpeg";

const SchoolOfManagementHome = () => {
  const programs = [
    {
      title: "MBA Program",
      specializations: ["Digital Marketing", "Financial Analytics", "Operations"],
      duration: "2 Years",
      intake: "180 Seats",
      accreditation: "AACSB Accredited",
      icon: <Briefcase className="w-6 h-6" />,
      highlights: [
        "Harvard Case Study Methodology",
        "Summer Internships with Fortune 500",
        "1:1 Executive Mentorship"
      ],
      placement: "98% Placement Record"
    },
    {
      title: "BBA Program",
      specializations: ["Entrepreneurship", "HR Management", "Business Analytics"],
      duration: "3 Years",
      intake: "240 Seats",
      accreditation: "NAAC A++ Graded",
      icon: <BarChart className="w-6 h-6" />,
      highlights: [
        "Startup Incubation Center",
        "Global Business Certification",
        "Industry Immersion Program"
      ],
      placement: "85% Higher Studies"
    },
    {
      title: "Finance Management",
      specializations: ["Investment Banking", "Risk Management", "FinTech"],
      duration: "2 Years",
      intake: "120 Seats",
      accreditation: "CFA Institute Partner",
      icon: <DollarSign className="w-6 h-6" />,
      highlights: [
        "Bloomberg Terminal Lab Access",
        "Virtual Trading Floor",
        "FRM Certification Prep"
      ],
      placement: "₹12LPA Average Package"
    },
    {
      title: "Marketing Management",
      specializations: ["Digital Strategy", "Consumer Behavior", "Brand Management"],
      duration: "2 Years",
      intake: "150 Seats",
      accreditation: "Google Digital Garage Partner",
      icon: <Globe className="w-6 h-6" />,
      highlights: [
        "Live Client Projects",
        "Social Media Analytics Lab",
        "Ad World Competition"
      ],
      placement: "100+ Recruiters"
    },
  ];

  const researchAreas = [
    {
      title: "Sustainable Business",
      projects: ["CSR Analytics", "Green Finance Models", "Ethical Marketing Frameworks"],
      icon: <Handshake className="w-6 h-6" />,
      collaborations: ["UN Global Compact", "Deloitte", "PwC"],
      publications: "15+ Research Papers"
    },
    {
      title: "Digital Transformation",
      projects: ["AI in HR Analytics", "Blockchain Finance", "Metaverse Commerce"],
      icon: <BookOpenText className="w-6 h-6" />,
      collaborations: ["Microsoft Research", "IBM Cloud", "TCS Innovation"],
      publications: "10 Industry Reports"
    },
    {
      title: "Leadership Strategy",
      projects: ["Cross-Cultural Management", "Crisis Leadership", "Org Development Models"],
      icon: <Users className="w-6 h-6" />,
      collaborations: ["Harvard Business Review", "McKinsey", "Korn Ferry"],
      publications: "8 Case Studies"
    },
    {
      title: "Economic Policy",
      projects: ["Emerging Market Analysis", "Digital Economy Metrics", "Trade Analytics"],
      icon: <Award className="w-6 h-6" />,
      collaborations: ["World Bank", "NITI Aayog", "RBI"],
      publications: "12 Policy Papers"
    },
  ];

  const stats = [
    { number: "AACSB", label: "Global Accreditation", icon: <Award className="w-8 h-8" /> },
    { number: "5000+", label: "Alumni Network", icon: <Users className="w-8 h-8" /> },
    { number: "250+", label: "Recruiting Partners", icon: <Briefcase className="w-8 h-8" /> },
    { number: "80+", label: "Countries Represented", icon: <Globe className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] bg-mpgin-darkBlue text-white">
        <div className="absolute inset-0 bg-black/80">
          <img
            src={managementHero}
            alt="Management students discussion"
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
              Developing Next-Gen
              <span className="block mt-4 text-mpgin-blue">Business Leaders</span>
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl text-gray-200">
                AACSB Accredited | 98% Placement Record | Global Curriculum
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
                  Download Brochure
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
              Transformative Management Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-aligned curriculum with global perspective
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
                  <p>{program.placement}</p>
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
              Cutting-Edge Business Research
            </h2>
            <p className="text-mpgin-blue max-w-xl mx-auto">
              Driving innovation in global business practices
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
                
                <p className="text-xs text-gray-500">{area.publications}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections (Admissions, Testimonials, CTA can be added similarly) */}
    </div>
  );
};

export default SchoolOfManagementHome;