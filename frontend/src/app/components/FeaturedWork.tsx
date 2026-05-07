import { BsGraphUpArrow } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const works = [
  {
    id: 1,
    title: "SIXT",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5",
    date: "2023-2025",
    type: "Car rental",
  },
  {
    id: 2,
    title: "Dojo - B2B",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=dd63f860a1924655216d5eb62cf5e592",
    date: "2021-2025",
    type: "Card Machines",
  },
  {
    id: 3,
    title: "Magnet Trade - B2B",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=381490e8c73ef79a1885309fd0b0c48a",
    date: "2023-2024",
    type: "",
  },
  {
    id: 4,
    title: "Leading E Sim brand globally",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=49e33faaf74314496fd5f00b47fe926c",
    date: "2023-2025",
    type: "Esims",
  },
  {
    id: 5,
    title: "JD Sports",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=b0de9817445481a8f52dce0b5c443bbc",
    date: "2025",
    type: "Trainers",
  },
  {
    id: 6,
    title: "Parkdean Resorts",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=cbb1e369eeca98550153bca9743dbacb",
    date: "2019-2025",
    type: "Easter Breaks",
  },
];

const FeaturedWork = () => {
  return (
    <>
      <MobileFeaturedWork />
    </>
  );
};

export default FeaturedWork;

const MobileFeaturedWork = () => {
  return (
    <section className="flex lg:hidden p-2 h-[calc(100vh-16px)] bg-black text-white rounded-2xl overflow-scroll">
      <div className="p-4">
        <h1 className="font-medium text-lg">Featured Work</h1>
        <div className="flex flex-col gap-4">
          {works?.map((work) => (
            <div
              key={work.id}
              className="relative mt-4 rounded-2xl overflow-hidden"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
              {work.type && (
                <span className="absolute top-4 right-4 bg-[#EFEEEC]/50 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  <FaSearch /> {work.type} <BsGraphUpArrow />
                </span>
              )}
              <div className="absolute bottom-4 left-4">
                <p className="text-[12px] font-medium">[{work.date}]</p>
                <h2 className="font-semibold text-3xl">{work.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
