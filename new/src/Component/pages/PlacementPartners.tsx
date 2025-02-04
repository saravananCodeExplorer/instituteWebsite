import { motion } from "framer-motion";

// Placement Partner Logos
const partners = [
  {
    id: 1,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 2,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 3,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 4,
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    id: 5,
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
];

const PlacementPartners = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
               <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">Placement Partners</h2>

      {/* Grid Layout for Partner Logos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {partners.map((partner) => (
          <motion.div
            key={partner.id}
            className="flex justify-center items-center bg-white shadow-lg p-6 rounded-xl transition-all border border-gray-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-16 md:h-20 lg:h-24"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlacementPartners;
