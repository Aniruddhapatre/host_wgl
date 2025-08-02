import { Mail, Phone, MapPin, Send, Briefcase } from "lucide-react";
import { useRef } from "react";
// Reverted to using a direct import for emailjs as requested.
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();
  const formContainerRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    
    // This uses import.meta.env, which requires a build tool like Vite.
    // If you encounter errors, it means the environment doesn't support this method.
    // The alternative is to hardcode the values or use the dynamic script loading method from the previous version.
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          // In a real app, you'd use a more elegant notification system
          // instead of alert().
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please check your credentials or try again later.");
        }
      );
  };
  
  // Function to handle smooth scrolling
  const handleJoinClick = (e) => {
    e.preventDefault();
    formContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="no-cursor text-white px-4 sm:px-16 py-16 "
    >
      <div className="max-w-6xl mx-auto">

        {/* "Join Us" section at the top */}
        <div className="text-center mb-16 pb-10 border-b border-lime-900/50">
          <h3 className="text-3xl font-bold text-white mb-3">Ready to Make a Difference?</h3>
          <a
            href="#contact"
            onClick={handleJoinClick}
            className="inline-flex items-center justify-center gap-2 py-3 px-8 bg-lime-400 text-green-900 font-semibold rounded-md hover:bg-lime-300 transition-all transform hover:scale-105 mb-6"
          >
            <Briefcase className="w-5 h-5" /> Join Our Team
          </a>
          <p className="text-gray-300 max-w-2xl mx-auto">
            If you're passionate about our cause, let us know what position you're interested in by using the form below. We're always looking for dedicated individuals to join our team.
          </p>
        </div>

        <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-lime-400">
          Get in Touch
        </h2>
         <div className="h-1 w-16 bg-lime-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side: Map & Info */}
          <div className="space-y-6">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.574294833715!2d72.50784411496756!3d23.0743769211514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ddfa4b7eb7%3A0x8f3fd1fa94485f8a!2sCurovis%20Healthcare%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1628337961325!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl shadow-xl border border-lime-500"
            ></iframe>

            <div className="text-sm sm:text-base space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-lime-400 mt-0.5 h-6 w-6 shrink-0" />
                <p>
                  'B' Block, Safal Mondeal Business Park-2, Near Gurudwara,
                  Bodakdev, S.G. Highway, Ahmedabad-380054, Gujarat
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-lime-400 mt-0.5 w-6 h-6 shrink-0" />
                <p>+1 800 603 6035</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-lime-400 mt-0.5 w-6 h-6 shrink-0" />
                <p>info@curovis.co.in</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          {/* Added a ref to this container to enable smooth scrolling */}
          <div ref={formContainerRef} className="bg-[#0c3f2d] rounded-2xl p-8 shadow-lg border border-lime-400">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="p-3 rounded-md bg-green-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="p-3 rounded-md bg-green-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 rounded-md bg-green-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
              
              {/* NEW: Field for position of interest */}
              <input
                type="text"
                name="position"
                placeholder="Position of Interest (Optional)"
                className="w-full p-3 rounded-md bg-green-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message / Comment"
                required
                className="w-full p-3 rounded-md bg-green-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3 bg-lime-400 text-green-900 font-semibold rounded-md hover:bg-lime-300 transition-all"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
