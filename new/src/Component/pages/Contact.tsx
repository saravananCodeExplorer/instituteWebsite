import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
   <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
   Contacts Us
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Main Office */}
        <div
          className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-700 ${
            show ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Contact For Isysway
          </h2>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            12-A Nallaiyah Complex, Near Railway Station, Thanjavur-613001.
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaClock className="text-gray-500" />
            Mon - Sat, 10:00 AM - 7:30 PM
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhone className="text-green-500" />
            <a href="tel:9894047812" className="hover:underline">
              9894047812
            </a>{" "}
            /{" "}
            <a href="tel:9566657812" className="hover:underline">
              9566657812
            </a>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope className="text-blue-500" />
            <a href="mailto:info@isysway.in" className="hover:underline">
              info@isysway.in
            </a>
          </p>
        </div>

        {/* Branch Office */}
        <div
          className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-700 delay-200 ${
            show ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Branch Contact Info
          </h2>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            No:52, 2nd Kumar Complex, RR Nagar, New Bus Stand, Thanjavur-613005.
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaClock className="text-gray-500" />
            Mon - Sat, 10:00 AM - 7:30 PM
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhone className="text-green-500" />
            <a href="tel:9894047812" className="hover:underline">
              9894047812
            </a>{" "}
            /{" "}
            <a href="tel:9566657812" className="hover:underline">
              9566657812
            </a>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope className="text-blue-500" />
            <a href="mailto:info@isysway.in" className="hover:underline">
              info@isysway.in
            </a>
          </p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div
        className={`mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ease-in-out ${
          show ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <iframe
          className="w-full h-[300px] md:h-[400px] rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5051851680646!2d79.13570367585907!3d10.787902489362385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacff3e9cb1e31%3A0x898dd6a364f8a2a6!2sThanjavur%2C%20Tamil%20Nadu%20613001%2C%20India!5e0!3m2!1sen!2sin!4v1707053048000"
          loading="lazy"
        ></iframe>

        <iframe
          className="w-full h-[300px] md:h-[400px] rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5051851680646!2d79.13570367585907!3d10.787902489362385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacff3e9cb1e31%3A0x898dd6a364f8a2a6!2sThanjavur%2C%20Tamil%20Nadu%20613001%2C%20India!5e0!3m2!1sen!2sin!4v1707053048000"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
