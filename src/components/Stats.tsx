const Stats = () => {
  return (
    <section className="flex items-center justify-between flex-wrap w-full">
      <div className="flex flex-col w-[200px]">
        <h1 className="text-primary text-center ">15K</h1>
        <h5 className="text-text text-center">Happy Customers</h5>
      </div>
      <div className="flex flex-col w-[200px]">
        <h1 className="text-primary text-center">150K</h1>
        <h5 className="text-text text-center">Monthly Visitors</h5>
      </div>
      <div className="flex flex-col w-[200px]">
        <h1 className="text-primary text-center">15</h1>
        <h5 className="text-text text-center">Countries Worldwide</h5>
      </div>
      <div className="flex flex-col w-[200px]">
        <h1 className="text-primary text-center">100+</h1>
        <h5 className="text-text text-center">Top Partners</h5>
      </div>
    </section>
  );
};

export default Stats;
