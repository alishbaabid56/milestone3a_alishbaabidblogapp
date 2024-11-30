import React from "react";
import Image from "next/image";

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  image: string; 
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, review, rating, image }) => {
  const stars = Array(rating)
    .fill("⭐")
    .join("");

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center border border-black">
      <Image
        src={image}
        alt={`${name}'s profile`}
        width={64}
        height={64}
        className="rounded-full mb-4 object-cover"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">{name}</h2>
      <p className="text-gray-600 mb-4 text-center">{review}</p>
      <p className="text-yellow-500 font-bold">{stars}</p>
    </div>
  );
};

export default ReviewCard;