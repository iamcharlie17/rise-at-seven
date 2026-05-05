import AnimatedText from "./AnimatedText";

const Announcement = () => {
  return (
    <div
      data-announcement
      className="relative overflow-hidden group cursor-pointer py-1 bg-[#B2F6E3] text-center text-sm font-semibold rounded-full"
    >
      <AnimatedText>The Category Leaderboard - Live Now</AnimatedText>
    </div>
  );
};


export default Announcement;
