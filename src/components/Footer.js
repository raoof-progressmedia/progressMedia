import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";

export default function Footer() {
    const socialLinks = [
        { icon: <FaFacebookF />, href: "https://facebook.com" },
        { icon: <FaYoutube />, href: "https://youtube.com" },
        { icon: <FaInstagram />, href: "https://instagram.com" },
        { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
        { icon: <FaTiktok />, href: "https://tiktok.com" },
        { icon: <RiThreadsFill />, href: "https://threads.net" },
    ];

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "#about" },
        { label: "Pillars", href: "#pillars" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <footer className="bg-white text-dark py-10">
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
                    <h5 className="font-semibold mb-3">Quick Links</h5>
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

                    <h5 className="font-semibold mb-3">Connect With Us</h5>
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
