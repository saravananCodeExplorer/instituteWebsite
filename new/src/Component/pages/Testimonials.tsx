import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Amit Kumar",
    feedback:
      "The IELTS coaching was amazing! The mock tests and feedback helped me score a band 8.0!",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    id: 2,
    name: "Sophia Thomas",
    feedback:
      "Spoken English classes boosted my confidence. Now I speak fluently in interviews and meetings!",
    rating: 4,
    videoUrl: "https://www.youtube.com/embed/TX9qSaGXFyg",
  },
  {
    id: 3,
    name: "Rahul Verma",
    feedback:
      "The teachers were highly supportive and the training sessions were interactive and engaging!",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/K4TOrB7at0Y",
  },
];

const Testimonial = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
       Student Testimonials
      </h2>

      {/* Testimonial Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((review) => (
          <motion.div
            key={review.id}
            className="bg-white bg-opacity-80 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center backdrop-blur-md border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-5xl">💬</span>
            <p className="text-gray-700 italic mt-4">"{review.feedback}"</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="font-bold text-blue-700">{review.name}</span>
              <span className="flex text-yellow-500">
                {"⭐".repeat(review.rating)}
              </span>
            </div>
            <motion.button
              onClick={() => setSelectedReview(review)}
              className="mt-4 bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              🎥 Watch Video
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Video Review Modal */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg w-[90%] md:w-[60%] lg:w-[50%] relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-600 transition duration-300 text-2xl"
              >
                ❌
              </button>

              <h3 className="text-2xl font-bold text-center text-blue-700 mb-4">
                {selectedReview.name}'s Review 🎬
              </h3>

              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-72 rounded-lg"
                  src={selectedReview.videoUrl}
                  title="Student Testimonial Video"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
