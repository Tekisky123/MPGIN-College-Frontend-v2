import { useParams, useNavigate, Route, Routes } from "react-router-dom";
import {
  admissionNavItems,
  collegeAdmissionDataMap,
} from "../data/AdmissionData";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

const renderContent = (content: React.ReactNode) => {
  return <>{content}</>;
};

const UnderGraduateTab = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const currentCollegeData =
    collegeAdmissionDataMap[collegeId || ""] ||
    collegeAdmissionDataMap["school-of-engineering"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
    >
      <h3 className="text-xl font-bold mb-4">Under Graduate (B.Tech)</h3>

      <div className="overflow-x-auto mb-6">
        {currentCollegeData.btechIntakeTable}
      </div>

      <h4 className="font-semibold mt-6">Eligibility</h4>
      <p className="mt-2 text-gray-700">{currentCollegeData.eligibility}</p>

      <h4 className="font-semibold mt-6">Documents Required</h4>
      <div className="mt-2">{currentCollegeData.documents}</div>
    </motion.div>
  );
};

const AdmissionPage = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        !menuButtonRef.current?.contains(e.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close sidebar on ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () =>
      document.removeEventListener("keydown", handleEsc);
  }, []);

  const navigate = useNavigate();

  const activePath = window.location.pathname.split("/").pop() || "";

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="md:hidden flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-blue-700">Navigation</h2>
        <button
          ref={menuButtonRef}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-blue-700"
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="w-full mx-auto flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside
          className={`lg:w-1/4 xl:w-1/5 bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300 fixed lg:static lg:z-10 z-50 h-full overflow-y-auto ${
            isSidebarOpen ? "block inset-0" : "hidden lg:block"
          }`}
          ref={sidebarRef}
        >
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden absolute top-4 right-4 text-blue-700"
          >
            <X size={24} />
          </button>
          <nav className="space-y-2 mt-6 md:mt-0">
            {admissionNavItems.map((item) => (
              <button
                key={item.name}
                onClick={() =>
                  navigate(`/${collegeId}/admission${item.path}`)
                }
                className={`block w-full border border-gray-200 text-left py-3 px-4 transition-all duration-200 font-bold text-lg md:text-base ${
                  item.path.includes(activePath)
                    ? "bg-mpgin-darkBlue text-mpgin-blue underline"
                    : "bg-mpgin-blue hover:bg-mpgin-darkBlue hover:text-white text-mpgin-darkBlue"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:w-2/4 xl:w-3/5">
          <Routes>
            <Route path="under-graduate" element={<UnderGraduateTab />} />
          </Routes>
        </main>
      </div>
    </section>
  );
};

export default AdmissionPage;