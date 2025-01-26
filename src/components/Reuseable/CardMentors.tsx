import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

interface SocialMediaLink {
  platform: string; // Strict union type
  url: string;
}

interface CardMentorsProps {
  name: string;
  profession: string;
  image: string;
  socialLinks: readonly SocialMediaLink[];
}

const CardMentors: React.FC<CardMentorsProps> = ({
  name,
  profession,
  image,
  socialLinks,
}) => {
  // Map social media links to respective icons
  const renderSocialIcon = (platform: SocialMediaLink["platform"]) => {
    switch (platform) {
      case "facebook":
        return <FaFacebook className="text-[24px] text-primary" />;
      case "instagram":
        return <IoLogoInstagram className="text-[24px] text-primary" />;
      case "twitter":
        return <FaTwitter className="text-[24px] text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col rounded-[20px] bg-white accentuedDropShadow overflow-hidden max-w-fit">
      {/* Mentor Image */}
      <img
        src={image}
        alt={`${name}'s avatar`}
        className="h-[230px] w-[238px] object-cover"
      />

      <div className="flex flex-col p-[30px] gap-[10px] items-center justify-center">
        {/* Mentor Name */}
        <h5 className="text-center text-text">{name}</h5>

        {/* Mentor Profession */}
        <span className="small text-secondText text-center">{profession}</span>

        {/* Social Media Links */}
        <div className="flex items-center gap-[20px]">
          {socialLinks.map((link, index) => (
            <a
              href={link.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {renderSocialIcon(link.platform)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardMentors;
