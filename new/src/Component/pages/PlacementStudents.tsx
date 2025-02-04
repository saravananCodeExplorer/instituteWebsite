import { motion } from "framer-motion";

// Placement Data
const placedStudents = [
  {
    id: 1,
    name: "Rohit Sharma",
    company: "Amazon",
    jobTitle: "Business Analyst",
    imgUrl: "https://randomuser.me/api/portraits/men/32.jpg", // Example Image
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 2,
    name: "Neha Gupta",
    company: "Google",
    jobTitle: "Marketing Specialist",
    imgUrl: "https://randomuser.me/api/portraits/women/44.jpg", // Example Image
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 3,
    name: "Arjun Verma",
    company: "Microsoft",
    jobTitle: "Customer Success Manager",
    imgUrl: "https://randomuser.me/api/portraits/men/56.jpg", // Example Image
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
];

const PlacementStudents = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
        Our Placed Students
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placedStudents.map((student) => (
          <motion.div
            key={student.id}
            className="bg-white bg-opacity-80 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center backdrop-blur-md border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={student.imgUrl}
              alt={student.name}
              className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
            />
            <h3 className="text-xl font-bold text-blue-700 mt-4">
              {student.name}
            </h3>
            <p className="text-gray-600">{student.jobTitle}</p>
            <div className="flex items-center gap-2 mt-3">
              <img
                src={student.companyLogo}
                alt={student.company}
                className="h-8"
              />
              <span className="font-semibold text-gray-800">{student.company}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlacementStudents;
