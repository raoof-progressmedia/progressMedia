"use client";

import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";
import { SiFiverr } from "react-icons/si";


const XTwitterIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1200 1227"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M787 0H946L583 521L1080 1227H753L478 829L162 1227H0L390 702L0 0H336L591 385L887 0H787Z" />
  </svg>
);

const socialLinks = [
  { icon: <SiFiverr className="w-full h-full" />, href: "https://www.fiverr.com/raoof_goher?public_mode=true", label: "Fiverr" },
  { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61569673919099", label: "Facebook" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/channel/UCUO0O2M0P1SS-KLbMDb1S_Q", label: "YouTube" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/raufgoher/?hl=en", label: "Instagram" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/raoof-goher-b26429358/", label: "LinkedIn" },
  { icon: <FaTiktok />, href: "https://www.tiktok.com/@raoof.progressmedia", label: "TikTok" },
  { icon: <RiThreadsFill />, href: "https://www.threads.com/@raufgoher", label: "Threads" },
  { icon: <FaPinterestP />, href: "https://www.pinterest.com/progressmedia123/?actingBusinessId=983192299809048138", label: "Pinterest" },
  { icon: <FaWhatsapp />, href: "https://wa.me/923426167711", label: "WhatsApp" },
  { icon: <XTwitterIcon />, href: "https://x.com/progressmedia_r", label: "X (Twitter)" },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 text-xl text-primary">
      {socialLinks.map((social, idx) => (
        <div key={idx} className="relative group flex flex-col items-center">
          {/* Tooltip (only on sm and above) */}
          <span className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-lg text-sm text-white bg-primary opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 z-10 shadow-md pointer-events-none">
            {social.label}
          </span>

          {/* Icon with bounce on hover */}
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center justify-center w-[1.8em] h-[1.8em] hover:text-accent hover:animate-bounce transition duration-300"
          >
            {social.icon}
          </a>

          {/* Always visible label on mobile */}
          <span className=" block sm:hidden text-xs mt-1 text-primary text-center">
            {social.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
