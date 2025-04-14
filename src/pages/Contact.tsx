import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Contact Information */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24 mt-10"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-[#001560] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001560] to-[#b71a34]">
              Contact Us
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            We’d love to hear from you!
          </p>
        </motion.div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-[#001560] mb-8">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001560] focus:border-[#001560] transition-all"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001560] focus:border-[#001560] transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001560] focus:border-[#001560] transition-all"
                    placeholder="Enter the subject"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001560] focus:border-[#001560] transition-all"
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-[#001560] text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#b71a34] transition-all"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#001560] mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#001560]/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-[#001560]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        MIDC Area, Nanded - 431603, <br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#001560]/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-[#001560]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 2462 269900</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#001560]/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-[#001560]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@mpgin.edu.in</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#001560]/10 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-[#001560]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 5:00 PM <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#001560] mb-8">
                  Location Map
                </h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7123456789!2d77.3123456789!3d19.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzM0LjQiTiA3N8KwMTgnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
