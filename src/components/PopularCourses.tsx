import CardMentors from "./Reuseable/CardMentors";
import mentor1 from "../assets/mentor1.jpeg";
import mentor2 from "../assets/mentor2.jpeg";
import mentor3 from "../assets/mentor3.jpeg";
import mentor4 from "../assets/mentor4.jpeg";

const mentors = [
  {
    name: "John Doe",
    profession: "CEO, Company A",
    image: mentor1,
    socialLinks: [
      { platform: "facebook", url: "https://facebook.com" },
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    name: "Jane Smith",
    profession: "CTO, Company B",
    image: mentor2,
    socialLinks: [
      { platform: "facebook", url: "https://facebook.com" },
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    name: "Alice Johnson",
    profession: "CFO, Company C",
    image: mentor3,
    socialLinks: [
      { platform: "facebook", url: "https://facebook.com" },
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    name: "Bob Brown",
    profession: "COO, Company D",
    image: mentor4,
    socialLinks: [
      { platform: "facebook", url: "https://facebook.com" },
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
] as const;

const PopularCourses = () => {
  return (
    <section className="flex flex-col gap-[112px]">
      <div className="flex flex-col gap-[10px]">
        <h6 className="text-primary ">Team</h6>
        <h3 className="text-text ">Our Popular Courses</h3>
        <p className="text-secondText  max-w-[480px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap gap-[30px] items-center justify-between w-full">
        {mentors.map((card, index) => (
          <div className="col-span-1" key={index}>
            <CardMentors {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
