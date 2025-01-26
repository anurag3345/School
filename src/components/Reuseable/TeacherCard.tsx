import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiMiniChevronRight } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

// Define prop types for TeacherCard
interface TeacherCardProps {
  image: string; // URL of the image
  title: string;
  description: string;
  rating: number;
  sales: number;
  price: number;
  discountPrice: number;
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  image,
  title,
  description,
  rating,
  sales,
  price,
  discountPrice,
}) => {
  return (
    <div className="flex flex-col bg-white w-[348px]">
      <div className="image-container relative">
        <img
          className="w-full h-[300px] object-cover"
          src={image}
          alt={title}
        />
        <div className="px-[10px] bg-danger text-white absolute top-2 left-2 rounded-[3px] border-0 lightDropShadow">
          <h6 className="w-fit">Sale</h6>
        </div>
        <div className="flex items-center gap-[10px] absolute bottom-4 left-1/2 -translate-x-1/2">
          <span className="bg-white rounded-full p-[10px]">
            <IoMdHeartEmpty className=" text-[20px]" />
          </span>
          <span className="bg-white rounded-full p-[10px]">
            <BsCart2 className=" text-[20px]" />
          </span>
          <span className="bg-white rounded-full p-[10px]">
            <FaEye className=" text-[20px]" />
          </span>
        </div>
      </div>
      <div className="flex flex-col p-[25px] gap-[10px]">
        <div className="flex items-center justify-between">
          <span className="link text-primary">Training Courses</span>
          <div className="flex items-center bg-text p-[5px] rounded-full gap-[5px]">
            <MdOutlineStarPurple500 className="text-[16px] text-secondary" />
            <span className="text-white small">{rating.toFixed(1)}</span>
          </div>
        </div>
        <h5 className="text-text">{title}</h5>
        <p className="text-secondText">{description}</p>
        <div className="flex items-center gap-[10px]">
          <MdOutlineFileDownload className="text-[24px]" />
          <h6 className="text-secondText">{sales} Sales</h6>
        </div>
        <div className="flex items-center gap-[10px]">
          <h5 className="text-muted">${price.toFixed(2)}</h5>
          <h5 className="text-secondary">${discountPrice.toFixed(2)}</h5>
        </div>
        <button className="px-[20px] py-[10px] rounded-[37px] border-[1px] border-primary text-primary flex items-center gap-[10px] justify-center w-fit">
          <h6>Learn More</h6>
          <HiMiniChevronRight className="text-primary font-bold text-[24px]" />
        </button>
      </div>
    </div>
  );
};

export default TeacherCard;
