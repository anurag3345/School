import TeacherCard from "./Reuseable/TeacherCard";
import expert1 from "../assets/experts1.jpeg";
import expert2 from "../assets/experts2.jpeg";
import expert3 from "../assets/experts3.jpeg";

const teacherCards = [
  {
    image: expert1,
    title: "Get Quality Education",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    sales: 12,
    price: 16.48,
    discountPrice: 6.48,
    rating: 4.9,
  },
  {
    image: expert2,
    title: "Get Quality Education",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    sales: 12,
    price: 16.48,
    discountPrice: 6.48,
    rating: 4.9,
  },
  {
    image: expert3,
    title: "Get Quality Education",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    sales: 12,
    price: 16.48,
    discountPrice: 6.48,
    rating: 4.9,
  },
];

const ExpertTeachers = () => {
  return (
    <section className="flex flex-col gap-[80px] bg-fadedSecondary2">
      <div className="flex flex-col gap-[10px]">
        <h6 className="text-primary ">Practice Advice</h6>
        <h2 className="text-text ">Our Experts Teacher</h2>
        <p className="text-secondText  max-w-[480px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-[30px] justify-between">
        {teacherCards.map((card, index) => (
          <TeacherCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ExpertTeachers;
