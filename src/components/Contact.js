import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp, FaPinterestP } from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";
import SocialLinks from "./social/social";

export default function Contact() {
  

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



        <SocialLinks/>
      </div>
    </section>
  );
}
