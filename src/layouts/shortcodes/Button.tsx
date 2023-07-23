import React from "react";
import DynamicIcon from "@/helpers/DynamicIcon";

const Button = ({
  label,
  link,
  style,
  rel,
  className
}: {
  label: string;
  link: string;
  style?: string;
  rel?: string;
  class?: string;
  className?: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
      className={`btn me-4 hover:no-underline group inline-flex items-center ${
        style === "outline" ? "btn-outline-primary" : "btn-primary"
      } ${className ? className : ''}`}
    >
      <span class="group-hover:-translate-x-0.5 transition-transform duration-300">{label}</span>
      <DynamicIcon class="inline-block ml-2 group-hover:translate-x-1.5 transition-transform duration-300" icon={'FaArrowRight'} />
    </a>
  );
};

export default Button;
