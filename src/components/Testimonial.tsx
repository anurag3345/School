import TestimonialCard from "./Reuseable/TestimonialCard";
import testimonial1 from "../assets/testimonial1.jpeg";
import testimonial2 from "../assets/testimonial2.jpeg";
import testimonial3 from "../assets/testimonial3.jpeg";

const testimonialCards = [
  {
    rating: 5,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nunc id cursus sit. ",
    image: testimonial1,
    name: "John Doe",
    designation: "CEO, Company A",
  },
  {
    rating: 4,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nunc id cursus sit. ",
    image: testimonial2,
    name: "Jane Smith",
    designation: "CTO, Company B",
  },
  {
    rating: 5,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nunc id cursus sit. ",
    image: testimonial3,
    name: "Alice Johnson",
    designation: "CFO, Company C",
  },
];

const Testimonial = () => {
  return (
    <section className="flex flex-col gap-[80px]">
      <div className="flex flex-col gap-[10px]">
        <h6 className="text-primary ">Practice Advice</h6>
        <h2 className="text-text ">Every Client Matters</h2>
        <p className="text-secondText  max-w-[480px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex gap-[30px] flex-wrap items-center justify-between">
        {testimonialCards.map((card, index) => (
          <TestimonialCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
