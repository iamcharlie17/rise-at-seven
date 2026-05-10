import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import AnimatedText from "./AnimatedText";
import Button from "./buttons/Button";

const image =
  "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750944462&s=5eb651d549739cde26429958911743ea";

const services = [
  {
    id: 1,
    title: "Digital PR",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5",
  },
  {
    id: 2,
    title: "Organic Social & Content",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=dd63f860a1924655216d5eb62cf5e592",
  },
  {
    id: 3,
    title: "Search & Growth Strategy",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=381490e8c73ef79a1885309fd0b0c48a",
  },
  {
    id: 4,
    title: "Content Experience",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=49e33faaf74314496fd5f00b47fe926c",
  },
  {
    id: 5,
    title: "Data & Insights",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=b0de9817445481a8f52dce0b5c443bbc",
  },
  {
    id: 6,
    title: "Onsite SEO",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=cbb1e369eeca98550153bca9743dbacb",
  },
];

const Service = () => {
  return (
    <section className="py-8 lg:py-16 px-2 lg:px-4">
      <div className="flex justify-between items-end">
        <div className="text-5xl lg:text-8xl font-medium lg:flex items-center gap-2">
          <div className="flex items-end lg:items-center gap-2">
            <div className="overflow-hidden pb-2">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-md:!transform-none"
              >
                Our
              </motion.h1>
            </div>
            <motion.img
              src={image}
              alt="Service"
              initial={{ width: 0 }}
              whileInView={{ width: "var(--img-w)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="h-16 lg:h-24 object-cover rounded-md [--img-w:4rem] lg:[--img-w:6rem] max-md:!w-16 max-md:!transform-none"
            />
          </div>
          <div className="overflow-hidden pb-2 mt-2 lg:mt-0">
            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="max-md:!transform-none"
            >
              Services
            </motion.h1>
          </div>
        </div>
        <div className="hidden lg:block">
          <Button type="white">
            <AnimatedText>View All Services</AnimatedText>
          </Button>
        </div>
      </div>
      <hr className="hidden lg:block text-slate-400 my-8" />
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2">
        {services?.map((service, index) => (
          <div key={service.id}>
            <div className="group cursor-pointer">
              <div className="relative lg:text-6xl font-medium px-8 py-6 rounded-full mx-4 overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative z-10 flex items-center transition-colors duration-300 group-hover:text-white">
                  <div className="flex items-center overflow-hidden w-0 group-hover:w-12 lg:group-hover:w-16 transition-all duration-500">
                    <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <HiArrowRight className="-rotate-45 text-4xl lg:text-5xl" />
                    </div>
                  </div>
                  <h1>{service.title}</h1>
                </div>
              </div>
              <hr
                hidden={service.id == 5 || service.id == 6}
                className="hidden lg:block text-slate-400 mx-18 group-hover:hidden"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:hidden py-8">
        {services?.map((service) => (
          <div
            key={service.id}
            className="flex items-center gap-3 border-b border-slate-400 py-4"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-16 h-16 object-cover rounded-md"
            />
            <h1 className="text-[28px] leading-tight font-medium">
              {service.title}
            </h1>
          </div>
        ))}

        <div className="pt-4">
          <Button type="white">View All Services</Button>
        </div>
      </div>
    </section>
  );
};

export default Service;
