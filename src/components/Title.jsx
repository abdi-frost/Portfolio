import { ReactNode } from "react";

const Title = ({ text, icon }) => {
  return (
    <div className="flex items-center gap-4 text-2xl group pb-8">
      <h3 className="font-semibold relative overflow-hidden">
        {text}
        <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-blue-600 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </h3>
      <span className="text-blue-600">{icon}</span>
    </div>
  );
};

export default Title;
