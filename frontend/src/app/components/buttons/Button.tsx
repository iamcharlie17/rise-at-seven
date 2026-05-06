import React from "react";
import AnimatedText from "../AnimatedText";
import { FaArrowRight } from "react-icons/fa";

const Button = ({
  children,
  type = "white",
}: {
  children: React.ReactNode;
  type?: string;
}) => {
  return (
    <button
      className={`py-2 px-8 w-full lg:w-auto rounded-4xl font-semibold ${type == "white" ? "bg-white" : "bg-transparent"} flex gap-2 items-center justify-center rounded-4xl font-semibold hover:rounded-xl transition-all duration-300 ease-out group cursor-pointer`}
    >
      <AnimatedText>
        {children} <FaArrowRight size={15} className="-rotate-45" />
      </AnimatedText>
    </button>
  );
};

export default Button;
