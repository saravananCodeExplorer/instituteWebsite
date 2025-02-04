import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const services = [
  {
    title: "FullStack Development",
    image: "assets/fullstack.jpg",
    description: "Master front-end and back-end technologies to build modern web applications.",
  },
  {
    title: "Cloud Computing",
    image: "assets/cloud.jpg",
    description: "Learn AWS, Azure, and Google Cloud to scale applications in the cloud.",
  },
  {
    title: "Data Science",
    image: "assets/datascience.jpg",
    description: "Analyze data, build machine learning models, and uncover business insights.",
  },
  {
    title: ".NET Programming",
    image: "assets/dotnet.jpg",
    description: "Develop enterprise applications using C#, ASP.NET, and MVC frameworks.",
  },
  {
    title: "Digital Marketing",
    image: "assets/digital-marketing.jpg",
    description: "Leverage SEO, social media, and content marketing to grow your business.",
  },
  {
    title: "Networking & Security",
    image: "assets/networking.jpg",
    description: "Understand network security, protocols, and infrastructure for a connected world.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services For Students
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We support you no matter where you are. World-class talent and proven development processes allow us to deliver advanced technology solutions at a great value.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Animated Responsive Button */}
        <motion.button
         className="mt-10 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg transition-all hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to ="/courses">
          Explore Our Courses
          </Link>
        </motion.button>
      </div>
    </section>
  );
};

export default Services;
