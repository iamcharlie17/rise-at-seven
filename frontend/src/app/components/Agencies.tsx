import Marquee from "react-fast-marquee";

const logos = [
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/01J76SW385WN4X1CBJWJV7QSAP.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=c5319beb4b8cbb4b4189503ba62abee7",
  "https://rise-atseven.transforms.svdcdn.com/production/images/SN.webp?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5338&fp-y=0.5169&dm=1777373493&s=94f8efbf206ee393e9efb44ef6828658",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/red-bull-logo-black.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1754645714&s=bd5a1c6f9193f3f0ec0bbbe3caca8ef4",
];

const Agencies = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-between lg:items-center py-8 lg:py-16 px-2 lg:px-4">
      <h1 className="whitespace-nowrap font-semibold">The agency behind ...</h1>
      <section className="relative overflow-hidden">
        {/* Left blur overlay */}
        <div className="absolute left-0 top-0 w-24 lg:w-48 h-full z-10 bg-[#EFEEEC] backdrop-blur-3xl mask-[linear-gradient(to_right,white,transparent)] pointer-events-none" />

        {/* Right blur overlay */}
        <div className="absolute right-0 top-0 w-24 lg:w-48 h-full z-10 bg-[#EFEEEC] backdrop-blur-3xl mask-[linear-gradient(to_left,white,transparent)] pointer-events-none" />

        <Marquee speed={30} gradient={false}>
          {[...logos, ...logos, ...logos, ...logos].map((src, i) => (
            <div key={i} className="px-10 lg:px-20">
              <img className=" w-20 lg:w-25" src={src} alt="brand logo" />
            </div>
          ))}
        </Marquee>
      </section>
    </div>
  );
};

export default Agencies;
