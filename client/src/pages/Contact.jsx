import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Aryan from "../assets/Aryan.jpeg";
import Khusi from "../assets/Khusi.jpg";
import Suman from "../assets/Suman.png";
const TeamCard = ({ name, image, socialLinks }) => {
  return (
    <div className="max-w-xs h-fit rounded-lg overflow-hidden shadow-lg object-contain">
      <img className="w-full  " src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{name}</div>
      </div>
      {/* <div className="px-6 py-4">
        {hashtags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {tag}
          </span>
        ))}
      </div> */}
      <div className="px-6 py-4 flex justify-evenly">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            className="text-gray-500 hover:text-gray-700 mr-2 h-fit w-fit shadow-inner p-2 rounded-lg"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
const Contact = () => {
  const teamMembers = [
    {
      name: "Aryan",
      image: Aryan,
      socialLinks: [
        {
          platform: "Instagram",
          icon: <FaInstagram />,
          url: "https://www.instagram.com/_.aryan1._/",
        },
        {
          platform: "LinkedIn",
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/",
        },
        {
          platform: "GitHub",
          icon: <FaGithub />,
          url: "https://github.com/SwiftFox1839",
        },
      ],
    },
    {
      name: "Khusi Das Mohapatra",
      image: Khusi,
      socialLinks: [
        {
          platform: "Instagram",
          icon: <FaInstagram />,
          url: "https://www.instagram.com/khirabdhi.tanaya/",
        },
        {
          platform: "LinkedIn",
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/khusi-das-mohapatra-058652235/",
        },
        {
          platform: "GitHub",
          icon: <FaGithub />,
          url: "https://github.com/Khusidm",
        },
      ],
    },
    {
      name: "Suman Sourav Biswal",
      image: Suman,
      socialLinks: [
        {
          platform: "Instagram",
          icon: <FaInstagram />,
          url: "https://www.instagram.com/_the_white_fang_/",
        },
        {
          platform: "LinkedIn",
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/suman-sourav-biswal-974789211/",
        },
        {
          platform: "GitHub",
          icon: <FaGithub />,
          url: "https://github.com/SouravBiswal",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 ">
      <div className="font-extrabold text-[#0EA5E9] text-[32px] h-fit w-fit ml-[45%] shadow-inner p-1.5 rounded-lg flex ">
        Our Team
      </div>
      <div className="flex flex-wrap justify-evenly ">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
