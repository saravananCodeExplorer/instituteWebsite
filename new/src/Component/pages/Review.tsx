import { useState } from "react";
import { FaStar, FaTimes, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Amazing service! Highly recommend Isysway for IT solutions.",
  },
  {
    id: 2,
    name: "Sarah Lee",
    rating: 4,
    comment: "Great support and affordable pricing. Will come back again!",
  },
  {
    id: 3,
    name: "Michael Brown",
    rating: 5,
    comment: "Professional and reliable. Best in the market!",
  },
];

const Review = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="relative flex flex-col items-center">
         <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
   Reviews
      </h2>
      {/* Open Review Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition duration-300"
      >
        <FaStar className="text-yellow-400" />
        Read Our Customer Reviews
      </button>

      {/* Overlay + Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[60%] lg:w-[40%] relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 transition duration-300"
            >
              <FaTimes size={22} />
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
              What Our Customers Say!
            </h2>

            {/* Reviews */}
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="p-4 border border-gray-200 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <FaQuoteLeft className="text-gray-400" />
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="font-bold text-gray-800">{review.name}</span>
                    <span className="flex text-yellow-500">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Review Link */}
            <div className="text-center mt-4">
              <a
                href="https://www.google.com/search?q=isysway+technologies&sca_esv=71611abca5e5e6db&hl=en-IN&gl=in&sxsrf=AHTn8zpZ2fFrNH8-JQI5Xks3k9ydGHybpg%3A1738666373317&ei=hfGhZ5OIE_K3juMP9Yyr4Ao&gs_ssp=eJzj4tFP1zc0yrU0N6pKNjJgtFI1qDBOSkxMsrBMtDQzNDWxNDO2MqgwSU5MM7AwTrVMNE8zMbM09hLJLK4sLk-sVChJTc7Iy8_JT89MLQYAEPsWsw&oq=&gs_lp=Egxnd3Mtd2l6LXNlcnAiACoCCAAyEBAuGMcBGCcY6gIYjgUYrwEyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyEBAAGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQEyEBAuGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQFIpQtQAFgAcAJ4AZABAJgBAKABAKoBALgBAcgBAPgBAZgCAqACGqgCFJgDEPEFLGltqzBDh8q6BgYIARABGAqSBwEyoAcA&sclient=gws-wiz-serp#lrd=0x3baab89a96154963:0x4caf083e9a7f4693,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                See More Google Reviews
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
