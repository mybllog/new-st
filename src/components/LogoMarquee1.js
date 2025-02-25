import React from "react";
import { StarOutlineSharp } from "@mui/icons-material";

const LogoMarquee1 = () => {
  const logos = Array(6).fill({
    text: "Generate Your Own Power",
    alt: "Item",
  });

  return (
    <div className="relative overflow-hidden bg-gray-900 py-4">
      <div className="flex items-center space-x-6 animate-marquee">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center space-x-2">
            <p className="text-white text-3xl md:text-4xl font-semibold w-max">
              {logo.text}
            </p>
            <StarOutlineSharp
              className="text-white"
              sx={{ fontSize: "50px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee1;
