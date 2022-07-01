import React from "react";

export default function Image({ source, alt, className }) {
  return <img src={source} className={className} alt={alt}/>;
}