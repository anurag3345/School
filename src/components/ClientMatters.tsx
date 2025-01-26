import { HiMiniChevronRight } from "react-icons/hi2";
import thumbnailClientMatters from "../assets/thumb-concept-7.svg";

const ClientMatters = () => {
  return (
    <section className="flex items-center justify-between flex-wrap">
      <div className="flex flex-col gap-[35px]">
        <hr className="w-[94px] h-[7px] bg-danger" />
        <h2 className="text-text">Every Client Matters</h2>
        <p className="text-secondText w-[358px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <button className="flex items-center text-primary ">
          <span className="link">Learn More</span>
          <HiMiniChevronRight className="text-[24px]" />
        </button>
      </div>
      <img
        src={thumbnailClientMatters}
        alt=""
        className="max-w-[600px] w-full h-[600px]"
      />
    </section>
  );
};

export default ClientMatters;
