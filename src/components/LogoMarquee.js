import React from "react";

const LogoMarquee = () => {
  const logos = [
    {
      text:'Love God Love men',
      alt: "Item 1",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/cisco.png",
    },
    {
      text:'Love God Love men',
      alt: "Item 2",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/huawei.png",
    },
    {
      text:'Love God Love men',
      alt: "Item 3",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/lenovo.png",
    },
    {
      text:'Love God Love men',
      alt: "Item 4",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/hpe-1.png",
    },
    {
      text:'Love God Love men',
      alt: "Item 5",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/hpe.png",
    },
    {
      text:'Love God Love men',
      alt: "Item 6",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/ribbon.png",
    },
  ];

  return (
    <div
  className="relative border overflow-hidden flex justify-start items-center bg-[#ec3237] shadow-sm"
  style={{
    clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0 100%)', // Triangle bottom shape
    filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.8))',
  }}

>
  {/* Marquee Content */}
  <div className="flex animate-marquee space-x-6"
  style={{
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)', // Triangle bottom shape
    filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.8))',
  }}>
    {logos.map((logo, index) => (
      <div key={index} className="flex items-center">
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-white w-max">
          {logo.text}
        </p>
      </div>
    ))}
  </div>
</div>
  );
};

export default LogoMarquee;
