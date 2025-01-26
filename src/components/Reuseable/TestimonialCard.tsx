import React from "react";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

interface TestimonialCardProps {
  rating: number; // Rating out of 5
  testimonial: string; // Testimonial text
  image: string; // URL of the user's image
  name: string; // User's name
  designation: string; // User's designation
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating = 5,
  testimonial,
  image,
  name,
  designation,
}) => {
  // Generate stars based on the rating
  const stars = Array(5)
    .fill(0)
    .map((_, index) =>
      index < rating ? (
        <MdOutlineStarPurple500
          key={index}
          className="text-[24px] text-secondary"
        />
      ) : (
        <MdOutlineStarOutline
          key={index}
          className="text-[24px] text-secondary"
        />
      )
    );

  return (
    <div className="p-[25px]">
      <div className="flex flex-col p-[30px] gap-[15px] items-center">
        {/* Rating Stars */}
        <div className="flex items-center gap-[5px]">{stars}</div>

        {/* Testimonial Text */}
        <p className="text-center text-secondText max-w-[150px]">
          {testimonial}
        </p>

        {/* User Info */}
        <div className="flex items-center gap-[15px]">
          <img
            src={image}
            alt={`${name}'s avatar`}
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h6 className="text-primary">{name}</h6>
            <span className="small text-text">{designation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
