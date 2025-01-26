import heroImage from "../assets/heroBg.svg";
import HeroCard from "./Reuseable/HeroCard";
import { GiGraduateCap } from "react-icons/gi";
import { GiSchoolBag } from "react-icons/gi";
import { MdBook } from "react-icons/md";

const Hero = () => {
  return (
    <section className="flex flex-col relative gap-[60px]">
      <div className="flex flex-col gap-[35px] xl:w-[500px] lg:w-[500px]">
        <h5 className="text-primary">Join Us</h5>
        <h1 className="text-text">25K+ STUDENTS TRUST US</h1>
        <h4 className="text-secondText">
          Every day brings with it a fresh set of learning possibilities.
        </h4>
        <div className="flex items-center gap-[10px]">
          <button className="px-[40px] py-[15px] bg-primary border-[1px] border-primary text-white font-bold rounded-[5px]">
            Get Quote Now
          </button>
          <button className="px-[40px] py-[15px] border-[1px] border-primary text-primary font-bold rounded-[5px]">
            Learn More
          </button>
        </div>
      </div>
      <img
        src={heroImage}
        alt=""
        className="lg:block hidden xl:max-w-[600px] lg:max-w-[500px] absolute xl:right-[140px] right-[100px] top-[50px] "
      />
      <div className="flex items-center justify-between gap-[30px] z-10 flex-wrap">
        <HeroCard
          title="Expert instruction"
          description="The gradual accumulation of 
information about atomic and 
small-scale behaviour..."
          icon={<GiGraduateCap className="text-white text-[40px]" />}
        />
        <HeroCard
          title="Training Courses"
          description="The gradual accumulation of 
information about atomic and 
small-scale behaviour..."
          icon={<GiSchoolBag className="text-white text-[40px]" />}
        />
        <HeroCard
          title="Expert instruction"
          description="The gradual accumulation of 
information about atomic and 
small-scale behaviour..."
          icon={<MdBook className="text-white text-[40px]" />}
        />
      </div>
    </section>
  );
};

export default Hero;
