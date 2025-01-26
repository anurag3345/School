const WatchCourses = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[80px]">
      <div className="flex flex-col gap-[10px] ">
        <h6 className="text-primary text-center">Newsletter</h6>
        <h3 className="text-text text-center">Watch our Courses</h3>
        <p className="text-secondText text-center max-w-[480px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <form className="flex items-center h-[50px]">
        <input
          className="lg:w-[500px] md:w-[300px] w-full  bg-[#F9F9F9] rounded-l-[5px] border-[1px] border-[#E6E6E6] px-[15px] py-[15px] border-r-0 text-[14px] font-mont text-secondText placeholder:text-secondText font-normal tracking-wide leading-5 h-full  outline-none focus:outline-none"
          type="text"
          placeholder="Your Email"
        />
        <button className="btn bg-primary text-white px-[22.5px] py-[15px] rounded-r-[5px] border-[1px] border-[#E6E6E6] h-full">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default WatchCourses;
