import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaLaptop, FaClipboardList, FaUserAlt, FaUsers, FaAward, FaBriefcase, FaDollarSign } from "react-icons/fa";

// Steps Data
const steps = [
  { label: "Theory", icon: <FaBook size={36} />, color: "bg-red-500" },
  { label: "Practicals", icon: <FaLaptop size={36} />, color: "bg-blue-500" },
  { label: "Assignments", icon: <FaClipboardList size={36} />, color: "bg-green-500" },
  { label: "Resume Prep", icon: <FaClipboardList size={36} />, color: "bg-pink-500" },
  { label: "Interviews", icon: <FaUserAlt size={36} />, color: "bg-teal-500" },
  { label: "Certification", icon: <FaAward size={36} />, color: "bg-yellow-500" },
  { label: "Job Placement", icon: <FaUsers size={36} />, color: "bg-purple-500" },
  { label: "Salary Negotiation", icon: <FaDollarSign size={36} />, color: "bg-indigo-500" },
  { label: "Career Growth", icon: <FaBriefcase size={36} />, color: "bg-gray-500" },
];

const JobPrepProcess: React.FC = () => {
  return (
    <section className="py-10 px-4 md:px-10 flex flex-col items-center border-4 border-yellow-500 rounded-lg m-4 md:m-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
        This is How Our Students Prepare for Better Jobs
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`rounded-lg p-4 flex flex-col items-center text-white ${step.color} shadow-lg`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white rounded-lg shadow-md p-4 border-4 border-transparent hover:border-yellow-500 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="text-4xl md:text-5xl text-gray-800"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                {step.icon}
              </motion.div>
            </motion.div>
            <p className="text-sm md:text-lg font-medium text-gray-100 mt-2">{step.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Congratulations Message */}
      <motion.div
        className="mt-10 flex items-center gap-3 bg-gray-200 p-4 md:p-5 rounded-md shadow-md w-full max-w-md text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-base md:text-xl font-semibold">🎉 Congratulations! You Got Placed! 🎉</span>
      </motion.div>
    </section>
  );
};

export default JobPrepProcess;
