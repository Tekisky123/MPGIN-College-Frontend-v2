// src/components/DepartmentOverview.tsx
import { useParams } from "react-router-dom";
import { colleges } from "../data/collegesData";

const DepartmentOverview = () => {
  const { collegeId, departmentId } = useParams();
  const college = colleges.find(c => c.id === collegeId);
  const department = college?.departments.find(d => d.id === departmentId);

  if (!department) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">About the Department</h2>
      <p className="text-gray-600 leading-relaxed">{department.description}</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-semibold mb-3">Key Facilities</h3>
          <ul className="list-disc pl-5 space-y-2">
            {department.facilities.map((facility) => (
              <li key={facility} className="text-gray-600">{facility}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-semibold mb-3">Courses Offered</h3>
          <ul className="list-disc pl-5 space-y-2">
            {department.courses.map((course) => (
              <li key={course} className="text-gray-600">{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DepartmentOverview;