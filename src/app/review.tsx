import React from "react";
import ReviewCard from "@/components/ReviewCards";

const reviews = [
  {
    name: "John Doe",
    review: "The Frozen Paradise blog inspired our family trip, and it was even better than expected. A must-visit destination!",
    rating: 5,
    image: "/review1.png", 
  },
  {
    name: "Emily Smith",
    review: "Whispering Woods felt like a magical experience. The blog's tips for hidden trails were incredibly helpful.",
    rating: 4,
    image: "/review2.png", 
  },
  {
    name: "Michael Brown",
    review: "Lost Lagoon is a true gem. The serene environment made our vacation unforgettable. Thanks for the detailed blog!",
    rating: 5,
    image: "/review3.png", 
  },
];

const Reviews = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Traveler Reviews
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Hear what our readers have to say about their experiences inspired by our blogs.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;