interface HeroCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, description, icon }) => {
  return (
    <div className="px-[40px] py-[35px] flex flex-col gap-[20px] bg-white accentuedDropShadow w-[328px]">
      <div className="flex items-center justify-center p-[10px] bg-danger w-fit rounded-full">
        {icon}
      </div>
      <h3 className="text-text">{title}</h3>
      <hr className="w-[50px] h-[2px] bg-danger" />
      <p className="text-secondText line-clamp-3">{description}</p>
    </div>
  );
};

export default HeroCard;
