import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTiktok,FaWhatsapp } from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";

export default function Footer() {
    const socialLinks = [
        { icon: <FaFacebookF />, href: "https://facebook.com" },
        { icon: <FaYoutube />, href: "https://youtube.com" },
        { icon: <FaInstagram />, href: "https://instagram.com" },
        { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
        { icon: <FaTiktok />, href: "https://tiktok.com" },
        { icon: <RiThreadsFill />, href: "https://threads.net" },
        { icon: <FaWhatsapp />, href: "https://wa.me/923001234567" }
    ];

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "#about" },
        { label: "Pillars", href: "#pillars" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <footer className="relative bg-white text-dark py-10">
              {/* Background Decorative SVGs */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {/* Top-left abstract blob */}
        <svg className="absolute top-[-100px] right-[-100px] w-[250px]" viewBox="0 0 200 200">
          <path
            fill="#ffe34c"
            d="M43.5,-64.6C54.2,-55.5,61.7,-43.6,66.3,-30.9C70.9,-18.2,72.5,-4.6,70.1,7.7C67.7,20.1,61.3,31.2,52.4,41.2C43.5,51.2,32,60.1,19.1,64.9C6.1,69.7,-8.3,70.4,-22.8,67.4C-37.3,64.3,-51.8,57.4,-60.3,46.4C-68.8,35.4,-71.3,20.4,-71.2,5.5C-71.1,-9.4,-68.4,-24.3,-60.4,-35.9C-52.3,-47.4,-38.8,-55.6,-25.2,-63.3C-11.7,-70.9,2,-78,15.8,-75.1C29.5,-72.2,43.5,-59.7,43.5,-64.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                <div>
                <img
                        src="/assets/logo.png"
                        alt="Progress Media Logo"
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                    />
                    <h4 className="text-xl font-bold font-sans text-primary mb-2">Progress Media</h4>
                    <p className="text-sm text-gray-600">Empowering growth in the digital world through tech, energy, and mindset.</p>
                </div>

                <div>
                    <h5 className="font-semibold mb-3 text-primary">Quick Links</h5>
                    <ul className="space-y-2 text-sm">
                        {navLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.href} className="hover:text-accent transition">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>

                    <h5 className="font-semibold mb-3 text-primary">Connect With Us</h5>
                    <div className="flex gap-4 text-xl text-primary">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent transition"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    
                </div>
            </div>
            <div className="text-center text-xs text-gray-400 mt-8">© {new Date().getFullYear()} Progress Media. All rights reserved.</div>
        </footer>
    );
}
