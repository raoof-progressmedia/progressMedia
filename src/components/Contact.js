import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp, FaPinterestP } from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";

export default function Contact() {
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
    <section id="contact" className="py-24 px-6 bg-white text-dark my-2">
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
  className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-primary transition mb-8 max-w-full break-words text-center"
>
  Email Us: raoof.progressmedia
  <span className="force-break-email inline">@gmail.com</span>
</a>



        <div className="flex flex-wrap justify-center gap-6 text-xl text-primary mt-8">
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
