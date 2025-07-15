import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";

export default function Contact() {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { icon: <FaTiktok />, href: "https://tiktok.com" },
    { icon: <RiThreadsFill />, href: "https://threads.net" },
    { icon: <FaWhatsapp />, href: "https://wa.me/923001234567" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white text-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold mb-8 tracking-wide text-primary">
          Get in Touch
        </h2>
        <p className="text-lg font-light mb-10 max-w-2xl mx-auto text-gray-700">
          Ready to build something meaningful? Whether it's a collaboration, a question,
          or a new beginning—drop us a message and let’s talk progress.
        </p>
        <a
          href="mailto:hello@progressmedia.com"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-dark transition mb-8"
        >
          Email Us: hello@progressmedia.com
        </a>
        <div className="flex justify-center gap-6 text-xl text-primary mt-8">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
