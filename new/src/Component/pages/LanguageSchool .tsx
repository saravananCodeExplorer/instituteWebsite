import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "IELTS Speaking Preparation",
    icon: "🎤", // Microphone Emoji
    description:
      "Master the IELTS Speaking section with expert coaching, real-time feedback, and mock interviews to boost your fluency and confidence.",
    benefits: [
      "One-on-One Speaking Sessions",
      "Fluency & Pronunciation Training",
      "Real-Time IELTS Speaking Mock Tests",
      "Personalized Feedback & Tips",
    ],
  },
  {
    id: 2,
    title: "Spoken English Mastery",
    icon: "🗣️", // Speaking Emoji
    description:
      "Enhance your spoken English skills with engaging lessons, conversation practice, and confidence-building activities for all levels.",
    benefits: [
      "Daily Conversation Practice",
      "Accent & Pronunciation Training",
      "Grammar & Vocabulary Enhancement",
      "Public Speaking & Interview Preparation",
    ],
  },
];

const LanguageSchool = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
         <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
         Language Courses
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform"
          >
            <span className="text-4xl">{course.icon}</span>
            <h2 className="text-xl font-semibold text-blue-700 mt-4">
              {course.title}
            </h2>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <button
              onClick={() => setSelectedCourse(course)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%] lg:w-[40%] relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-600 transition duration-300 text-lg"
              >
                ✖
              </button>

              {/* Course Details */}
              <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
                {selectedCourse.title}
              </h2>
              <p className="text-gray-700 text-center">
                {selectedCourse.description}
              </p>

              <ul className="mt-4 list-disc list-inside text-gray-600">
                {selectedCourse.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSchool;
