import { useParams } from "react-router-dom";
import { colleges } from "../data/collegesData";

const HodProfilePage = () => {
  const { collegeId, departmentId } = useParams();
  const college = colleges.find(c => c.id === collegeId);
  const department = college?.departments.find(d => d.id === departmentId);

  if (!department || !department.hod) return <p>HOD information not available.</p>;

  const { name, hod } = department;

  return (
    <div className="space-y-8">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* About the Department (Left Side) */}
        <div className="w-full md:w-2/3 bg-white ">
          <h1 className="text-2xl font-bold mb-5">{name}</h1>
          <p className="text-gray-700 leading-relaxed">{hod.message}</p>
        </div>

        {/* HOD Profile (Right Side) */}
        <div className="w-full md:w-1/3 bg-white p-6">
          <img
            src={hod.profileImage}
            alt={hod.name}
            className="w-full h-64 object-contain rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 my-2">{hod.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{hod.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default HodProfilePage;