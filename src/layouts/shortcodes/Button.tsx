import React from "react";
import DynamicIcon from "@/helpers/DynamicIcon";

const Button = ({
  label,
  link,
  style,
  rel,
  target,
  small,
  className
}: {
  label: string;
  link: string;
  style?: string;
  rel?: string;
  target?: string;
  class?: string;
  small?: boolean;
  className?: string;
}) => {
  return (
    <a
      href={link}
      target={target}
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
      className={`btn hover:no-underline group inline-flex items-center ${small ? 'btn-sm' : ''} ${
        style === "outline" ? "btn-outline-primary" : "btn-primary"
      } ${className ? className : ''}`}
    >
      <span className="group-hover:-translate-x-0.5 transition-transform duration-300">{label}</span>
      <DynamicIcon className="inline-block ml-2 group-hover:translate-x-1.5 transition-transform duration-300" icon={'FaArrowRight'} />
    </a>
  );
};

export default Button;
