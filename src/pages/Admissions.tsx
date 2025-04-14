import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import {
  ClipboardCheck,
  GraduationCap,
  FileText,
  IndianRupee,
  Clock,
  CheckCircle,
} from "lucide-react";

const Admissions = () => {
  return (
    <div>
      <PageHeader
        title="Admissions"
        subtitle="Your journey to excellence begins here"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Admission Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these steps to begin your academic journey at MPGIN
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ClipboardCheck,
                title: "Online Application",
                description:
                  "Fill out the online application form with your personal and academic details.",
                button: "Apply Now",
              },
              {
                icon: FileText,
                title: "Document Submission",
                description:
                  "Upload required documents including academic records and identification.",
                button: "Document Checklist",
              },
              {
                icon: IndianRupee,
                title: "Application Fee",
                description:
                  "Pay the application processing fee through our secure payment gateway.",
                button: "Pay Fee",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-[#0860b1]/10 p-3 rounded-full">
                    <step.icon className="w-8 h-8 text-[#0860b1]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <button className="w-full bg-[#0860b1] text-white py-3 rounded-md hover:bg-[#064481] transition-colors ease-in-out duration-200">
                  {step.button}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check the eligibility requirements for your desired program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "B.Tech Programs",
                criteria: [
                  "10+2 with PCM (Physics, Chemistry, Mathematics)",
                  "Minimum 60% aggregate in PCM",
                  "Valid JEE Main score",
                  "Maharashtra State CET score (for state quota)",
                ],
              },
              {
                title: "MBA Program",
                criteria: [
                  "Graduation in any discipline",
                  "Minimum 50% aggregate in graduation",
                  "Valid CAT/MAT/XAT/CMAT score",
                  "Work experience preferred but not mandatory",
                ],
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {program.title}
                </h3>
                <ul className="space-y-4">
                  {program.criteria.map((criterion, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0860b1] mt-1" />
                      <span className="text-gray-600">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Important Dates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar with these key admission dates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Application Start",
                date: "March 1, 2024",
                icon: Clock,
              },
              {
                title: "Application Deadline",
                date: "May 15, 2024",
                icon: Clock,
              },
              {
                title: "Document Verification",
                date: "May 20-30, 2024",
                icon: FileText,
              },
              {
                title: "Classes Begin",
                date: "July 1, 2024",
                icon: GraduationCap,
              },
            ].map((date, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow text-center"
              >
                <div className="bg-[#0860b1]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <date.icon className="w-8 h-8 text-[#0860b1]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {date.title}
                </h3>
                <p className="text-[#0860b1] font-semibold">{date.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
