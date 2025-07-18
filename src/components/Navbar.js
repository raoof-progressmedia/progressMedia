import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp, FaPinterestP } from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Elements", href: "#pillars" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61569673919099" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/channel/UCUO0O2M0P1SS-KLbMDb1S_Q" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/raufgoher/?hl=en" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/raoof-goher-b26429358/" },
    { icon: <FaTiktok />, href: "https://www.tiktok.com/@raoof.progressmedia" },
    { icon: <RiThreadsFill />, href: "https://www.threads.com/@raufgoher" },
    { icon: <FaPinterestP />, href: "https://www.pinterest.com/progressmedia123/?actingBusinessId=983192299809048138" },
    { icon: <FaWhatsapp />, href: "https://wa.me/923426167711" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Animated Logo with Infinite Subtle Rotation */}
<div className="flex items-center gap-3">
  <motion.div
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 10,
      ease: "linear",
    }}
    className="rounded-full border-2 border-primary p-1 w-10 h-10 flex items-center justify-center shadow-md"
  >
    <Image
      src="/assets/logo.png"
      alt="Progress Media Logo"
      width={36}
      height={36}
      className="rounded-full object-cover"
    />
  </motion.div>

  <span className="text-2xl  text-primary font-sans tracking-wide">
    Progress Media
  </span>
</div>


        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-sans">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-dark hover:text-primary transition font-medium relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiOutlineX size={28} className="text-primary" />
            ) : (
              <HiOutlineMenuAlt3 size={28} className="text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md px-4 pb-4 overflow-hidden font-sans"
          >
            {navItems.map((item) => (
              <Link
              onClick={() => setIsOpen(false)}
                key={item.href}
                href={item.href}
                className="block py-2 text-dark hover:text-primary transition font-medium"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex justify-center gap-5 mt-6 text-xl text-primary">
              {socialLinks.map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
