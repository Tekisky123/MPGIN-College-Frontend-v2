import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import FacilityCard from "../components/FacilityCard";
import { facilities } from "../data/facilities";
import { Users, Calendar, Award, Dumbbell } from "lucide-react";

const CampusLife: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Page Header */}
      <PageHeader
        title="Campus Life"
        subtitle="Experience a vibrant and enriching campus environment"
        backgroundImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Campus Overview Section */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Life at MPGIN
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover a perfect blend of academic excellence and
              extracurricular activities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: Users, title: "50+", description: "Student Clubs" },
              { icon: Calendar, title: "20+", description: "Annual Events" },
              {
                icon: Award,
                title: "100+",
                description: "Cultural Activities",
              },
              {
                icon: Dumbbell,
                title: "15+",
                description: "Sports Facilities",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-[#0860b1]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10 text-[#0860b1]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Campus Facilities
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities to support your academic journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {facilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </section>

      {/* Student Activities Section */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Student Activities
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Engage in various extracurricular activities and events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Technical Clubs",
                image:
                  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                description:
                  "Join robotics, coding, and innovation clubs to enhance your technical skills.",
              },
              {
                title: "Cultural Events",
                image:
                  "https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                description:
                  "Participate in annual cultural festivals, music, and dance competitions.",
              },
              {
                title: "Sports Activities",
                image:
                  "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                description:
                  "Compete in various sports tournaments and maintain physical fitness.",
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
