import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
const Bottom = () => {
  return (
    <section className="flex items-center justify-between py-[16px] bg-[#FAFAFA] lg:px-[100px] md:px-[60px] px-[16px]">
      <h6 className="text-secondText">
        Made With Love By Figmaland All Right Reserved{" "}
      </h6>
      <div className="flex items-center gap-[10px]">
        <FaFacebook className="text-[18] text-primary" />
        <IoLogoInstagram className="text-[18px] text-primary" />
        <FaTwitter className="text-[18px] text-primary" />
      </div>
    </section>
  );
};

export default Bottom;
