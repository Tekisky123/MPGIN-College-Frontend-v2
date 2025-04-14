import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import img1 from "../assets/images/campus.avif";
import img2 from "../assets/images/e-Library.jpg";

const facilities = [
  {
    title: "Sports Facilities",
    content:
      "The students of MPGI are provided with excellent facilities and encouraged to take part in tournaments. The campus promotes sports activities to inculcate a healthy sportsman spirit among students. A well-laid playground is available for outdoor sports activities like Cricket, Volleyball, Chess, Carom, Basketball, Badminton, and Football.",
    image: img1,
    additionalDetails: {
      indoorFacilities: ["Table Tennis", "Chess", "Carrom"],
      outdoorFacilities: ["Cricket", "Volleyball", "Basketball", "Badminton"],
    },
  },
  {
    title: "Hostel Facility",
    content:
      "The institute provides comfortable, clean, and safe hostel accommodation with requisite amenities and mess facilities for about 120 boys and 60 girls within the campus. Each hostel has an internal mess and water purifier on RO technology.",
    image: img2,
   additionalDetails: {
      capacity: "180 students",
      amenities: ["Wi-Fi", "24/7 Security", "RO Water Purifiers", "Laundry"],
    },
  },
  {
    title: "Canteen & Mess",
    content:
      "The Campus has a spacious Canteen functioning inside the campus for providing quality catering facilities for the students and staff at moderate rates. Students, faculty members, and office staff can enjoy quality and delicious food.",
    image: img1,
    additionalDetails: {
      menuOptions: ["Vegetarian", "Non-Vegetarian", "Snacks"],
      timings: "7 AM - 9 PM",
    },
  },
  {
    title: "Transportation",
    content:
      "Transportation facility is available from campus to city for students, staff, and faculty. MPGI's transport unit has its own buses that run regularly between the campus and selected points in the city, covering all areas according to the schedule issued from time to time.",
    image: img2,
    additionalDetails: {
      routes: ["City Center", "Railway Station", "Bus Stand"],
      frequency: "Every 30 minutes",
    },
  },
  {
    title: "Computing Facility",
    content:
      "MPGI has a state-of-the-art centralized computer center with 250 computers featuring Core 2 Duo processors and LCD Monitors. The lab is equipped with printers, scanners, and provides varied computing environments for students.",
    image: img1,
    additionalDetails: {
      software: ["MATLAB", "AutoCAD", "Python IDEs"],
      hardware: ["Core 2 Duo PCs", "LCD Monitors", "Printers", "Scanners"],
    },
  },
  {
    title: "Language Lab",
    content:
      "Language Lab with specialized software to develop soft skills and improve communication. Trains students in pronunciation, accent, intonation, and different variations in English expressions for global economic environments.",
    image: img2,
    additionalDetails: {
      software: ["Rosetta Stone", "Tell Me More"],
      features: ["Pronunciation Training", "Accent Neutralization"],
    },
  },
  {
    title: "Central Library",
    content:
      "The academic heart of campus with over 26,000 books, seating for 300 users, and research facilities. Features include a reading hall for 150 students, updated collections, and support for teaching-learning activities.",
    image: img1,
    additionalDetails: {
      books: "26,000+ Titles",
      digitalResources: ["Journals", "E-Books", "Research Papers"],
    },
  },
  {
    title: "Night Library",
    content:
      "Special section with 200+ unique titles covering Engineering, Management, and Polytechnic fields. Open to all students and faculty with borrowing facilities according to institute rules.",
    image: img2,
    additionalDetails: {
      operatingHours: "8 PM - 6 AM (During Exams)",
      specialFeatures: ["Quiet Study Zones", "Group Discussion Rooms"],
    },
  },
];

const FacilityCard = ({ facility, index }: { facility: (typeof facilities)[0]; index: number }) => (
  <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 mb-12 lg:mb-16`}>
    {/* Image Section */}
    <div className="lg:w-1/2 relative overflow-hidden">
      <img
        src={facility.image}
        alt={facility.title}
        className="w-full h-72 object-cover"
      />
    </div>

    {/* Content Section */}
    <div className="lg:w-1/2 flex flex-col justify-center px-4 lg:px-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-mpgin-darkBlue mb-4">
        {facility.title}
      </h2>
      <p className="text-gray-600 text-base leading-relaxed mb-6">
        {facility.content}
      </p>
      
      <div className="space-y-3 text-gray-700">
        {Object.entries(facility.additionalDetails).map(([key, value]) => (
          <div key={key} className="flex gap-2 items-start">
            <span className="font-semibold text-mpgin-darkBlue">
              {key.replace(/([A-Z])/g, " $1").trim()}:
            </span>
            <span className="text-gray-600">
              {Array.isArray(value) ? value.join(", ") : value}
            </span>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-2 w-fit mt-4 text-mpgin-darkBlue hover:text-mpgin-blue transition-colors">
        <span className="font-medium">Explore More</span>
        <ArrowRight size={18} />
      </button>
    </div>
  </div>
);

export default function Facilities() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-mpgin-darkBlue mb-4">
            Campus Facilities
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience state-of-the-art amenities crafted to foster innovation and academic excellence.
          </p>
        </div>

        {/* Facility Cards */}
        <div className="space-y-12 lg:space-y-16">
          {facilities.map((facility, index) => (
            <FacilityCard key={facility.title} facility={facility} index={index} />
          ))}
        </div>

        {/* Library Highlight Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 lg:mt-16 bg-mpgin-darkBlue p-6 lg:p-8 text-white">
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Central & Night Library
            </h3>
            <p className="text-gray-200">
              Our dual-library system offers 26,000+ academic resources with 24/7 access during exams.
            </p>
            <button className="flex items-center gap-2 mt-3 text-mpgin-blue hover:text-white transition-colors">
              Virtual Tour <ArrowRight size={18} />
            </button>
          </div>
          <div className="relative h-64 lg:h-80">
            <img
              src={img2}
              alt="Library"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}