import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutUs: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 px-6 bg-gray-100">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center">AboutUs</h2>   
             <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Section */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="assets/about.png" 
            alt="About Isysway Technologies"
            className="rounded-lg shadow-lg w-full h-125"
          />
        </motion.div>

        {/* Text Content Section */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Isysway Technologies</h2>
          <p className="text-gray-700 leading-relaxed">
            Isysway Technology provides <strong>high-quality computer education</strong> with a focus on <strong>private sector jobs</strong>. 
            Our mission is to create <strong>skilled software professionals</strong> who can meet the needs of multinational organizations 
            in tomorrow’s job market.
          </p>
          <p className="text-gray-700 mt-4">
            With <strong>20+ years of experience</strong>, we have built a <strong>friendly and interactive learning environment</strong>. Our institute 
            is <strong>ISO-9001:2008 certified</strong> and aims to promote IT education and awareness.
          </p>

          {/* Read More Section */}
          {isExpanded && (
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700">
                We offer <strong>computer courses</strong> for all age groups (children, teenagers, and seniors), 
                covering topics from <strong>basic to advanced IT skills</strong>. Our experienced and patient instructors ensure that 
                students gain <strong>practical knowledge</strong> used in the IT industry.
              </p>
              <p className="text-gray-700 mt-4">
                Our training methods focus on <strong>hands-on learning</strong> rather than just theory. With well-equipped labs 
                and up-to-date software, we ensure our students receive the best training experience.
              </p>
            </motion.div>
          )}

          {/* Read More Button */}
          <motion.button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
