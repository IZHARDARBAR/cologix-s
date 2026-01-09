import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Briefcase, Megaphone, Globe, Plus, Minus } from "lucide-react";

const About = () => {
  // FAQ Accordion State
  const [openIndex, setOpenIndex] = useState(null);

  // Progress Bar Animation Logic
  const [animate, setAnimate] = useState(false);
  const progressSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (progressSectionRef.current) {
      observer.observe(progressSectionRef.current);
    }

    return () => {
      if (progressSectionRef.current) {
        observer.unobserve(progressSectionRef.current);
      }
    };
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Added 'id' fields for dynamic routing to CV pages
  const teamMembers = [
    {
      id: "farhan",
      name: "Farhan Faqir",
      role: "CEO / Co-Founder",
      img: "/Farhan.png",
      color: "bg-blue-100",
    },
    {
      id: "burhan",
      name: "Burhan Alam",
      role: "Frontend Developer",
      img: "/Burhan.png",
      color: "bg-orange-100",
    },
    {
      id: "izhar",
      name: "Izhar",
      role: "Frontend Developer",
      img: "/Izhar.png",
      color: "bg-blue-100",
    },
    {
      id: "alina-alam",
      name: "Alina Alam",
      role: "CTO",
      img: "/AlinaAlam.png",
      color: "bg-gray-100",
    },
    {
      id: "diya",
      name: "Diya Noor",
      role: "WordPress Developer",
      img: "/Diya.png",
      color: "bg-gray-100",
    },
    {
      id: "alina-ali",
      name: "Alina Ali",
      role: "WordPress Developer",
      img: "/AlinaAli.png",
      color: "bg-gray-100",
    },
  ];

  const faqs = [
    {
      q: "What types of services do you consult for?",
      a: "We provide expert consulting in web development, mobile apps, and digital growth strategies.",
    },
    {
      q: "How do I get started with your consulting services?",
      a: "Simply click 'Get in Touch' and fill out the form. Our team will contact you within 24 hours.",
    },
    {
      q: "What is your approach to solving startup challenges?",
      a: "We analyze your specific market needs and provide scalable technical solutions.",
    },
    {
      q: "How long does it take to see results from your consulting?",
      a: "Initial strategic results are visible within weeks of implementation.",
    },
    {
      q: "What are your fees for consulting services?",
      a: "Our pricing is tailored to the project scope. Contact us for a custom quote.",
    },
  ];

  return (
    <div className="animate-fadeIn font-sans overflow-x-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-r from-[#213252] to-[#0b1120] md:h-[600px] flex items-center pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 md:h-[310px] flex flex-col justify-between items-start text-left order-2 md:order-1">
            <div className="space-y-4 mt-5">
              <span className="text-[#f27c22] font-bold uppercase tracking-[0.2em] text-[13px]">
                ABOUT
              </span>
              <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-md">
                We help our clients stay ahead with innovative technology
                solutions.
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed mt-4 mb-6 md:my-0">
              Our services provide a strategic overview, keeping clients focused
              on long-term goals.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block bg-[#f27c22] hover:bg-[#d96a1b] text-white px-8 py-3 font-bold text-sm rounded-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#f27c22]/10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="w-full mt-10 md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <div className="overflow-hidden shadow-2xl rounded-sm">
              <img
                src="/about-hero.png"
                alt="About Us"
                className="w-full md:w-[493px] h-[310px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONSULTING SECTION */}
      <section className="md:h-[472px] h-auto py-16 md:py-0 px-6 md:px-12 bg-white text-center flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl mx-auto mb-10 md:mb-20">
            <span className="text-gray-400 font-bold uppercase tracking-widest text-lg">
              CONSULTING
            </span>
            <h2 className="text-[#1a1f2e] text-2xl md:text-3xl lg:text-4xl md:whitespace-nowrap font-bold mt-4">
              Empowering growth and innovation through technology.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              {
                title: "Our Expertise",
                icon: <Briefcase size={50} />,
                desc: "We offer specialized knowledge and skills in delivering innovative solutions tailored to your tech needs.",
              },
              {
                title: "Our Approach",
                icon: <Megaphone size={50} />,
                desc: "Our method combines strategic planning with hands-on execution, focusing on collaboration and adaptability.",
              },
              {
                title: "Where We Operate",
                icon: <Globe size={50} />,
                desc: "We serve clients globally, providing top-tier consulting services with a focus on delivering impactful results.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <div className="text-[#1a1f2e] mb-1">{item.icon}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-500 text-sm md:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TEAM SECTION - Click Leads to Dynamic CV Page */}
      <section className="py-24 px-6 md:px-12 bg-[#ebeef5]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">
              TEAM
            </span>
            <h2 className="text-[#1a1f2e] text-3xl md:text-4xl font-bold mt-4">
              Meet Our Experts
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center">
            {teamMembers.map((member, i) => (
              <Link
                to={`/cv/${member.id}`} 
                key={i}
                className="bg-white group cursor-pointer overflow-hidden border border-gray-100 hover:shadow-xl transition-all w-full max-w-[300px]"
              >
                <div
                  className={`md:h-[290px] h-[200px] ${member.color} flex items-end justify-center overflow-hidden`}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-6 text-center">
                  <h4 className="text-sm md:text-xl font-bold text-[#1a1f2e]">
                    {member.name}
                  </h4>
                  <p className="text-gray-400 text-[10px] md:text-sm mt-1">
                    {member.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROGRESS BARS SECTION */}
      <section
        ref={progressSectionRef}
        className="py-24 px-6 md:px-12 bg-white"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 order-1">
            <img
              src="/startup.png"
              className="w-full rounded-sm shadow-xl"
              alt="Startup"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6 order-2">
            <span className="text-gray-500 font-bold uppercase tracking-widest text-lg">
              TECH Level
            </span>
            <h2 className="text-[#1a1f2e] text-3xl md:text-4xl font-bold leading-tight">
              Take your startup to new heights with smart technology solutions.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Unlock new opportunities and drive sustainable growth for your
              small startups.
            </p>
            <div className="space-y-6 pt-4">
              {[
                { label: "Client Satisfaction", val: "95%" },
                { label: "Project Success Rate", val: "90%" },
                { label: "Client Retention Ratio", val: "88%" },
              ].map((bar, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between font-bold text-sm text-[#1a1f2e]">
                    <span>{bar.label}</span>
                    <span>{bar.val}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-[10px] rounded-full overflow-hidden">
                    <div
                      className="bg-[#f27c22] h-full transition-all duration-[2500ms] ease-out"
                      style={{ width: animate ? bar.val : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DARK CTA SECTION */}
      <section className="relative bg-gradient-to-r from-[#213252] to-[#0b1120] md:h-[600px] flex items-center py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 md:h-[310px] flex flex-col justify-between items-start text-left order-2 md:order-1">
            <div className="space-y-4">
              <span className="text-[#f27c22] font-bold uppercase tracking-[0.25em] text-[20px]">
                Solution
              </span>
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-lg">
                Cutting-Edge Solutions for Modern Enterprises
              </h2>
            </div>
            <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed mt-4 mb-6 md:my-0">
              Delivering innovative strategies and advanced solutions to drive
              success in today’s evolving startup landscape.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block bg-[#f27c22] hover:bg-[#d96a1b] text-white px-8 py-3 font-bold text-sm rounded-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#f27c22]/10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <div className="overflow-hidden shadow-2xl rounded-sm">
              <img
                src="/modern-solutions.png"
                alt="Enterprise"
                className="w-full md:w-[493px] h-[310px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="bg-gradient-to-r from-[#45546b] to-[#18293d] py-24 px-6 md:px-12 flex flex-col  items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <span className="text-[#f27c22] font-bold uppercase text-lg">
              FAQ
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2 text-center">
              Frequently asked question
            </h2>
          </div>
          <div className="w-full lg:w-[1028px] lg:h-[640px] h-auto lg:ml-18 bg-white shadow-sm rounded-sm  flex-col justify-center overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 flex-col mt-10">
              {faqs.map((faq, i) => (
                <div key={i} className="md:px-[110px] px-6">
                  <div
                    className={`${
                      i !== faqs.length - 1 ? "border-b-2 border-gray-300" : ""
                    } transition-all duration-300`}
                  >
                    <button
                      onClick={() => toggleFaq(i)}
                      className="flex justify-between items-center w-full text-left py-8 group transition-all"
                    >
                      <span
                        className={`font-bold text-[#1a1f2e] text-lg md:text-2xl transition-colors duration-300 ${
                          openIndex === i
                            ? "text-[#f27c22]"
                            : "group-hover:text-[#f27c22]"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <div className="flex-shrink-0 ml-4">
                        {openIndex === i ? (
                          <Minus size={24} className="text-[#f27c22]" />
                        ) : (
                          <Plus
                            size={24}
                            className="text-gray-300 group-hover:text-[#f27c22]"
                          />
                        )}
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === i
                          ? "max-h-[300px] opacity-100 pb-10"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-500 text-base md:text-xl leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. REGISTER WITH LOGOS */}
      <section className="bg-white border-t border-gray-100 md:h-[146px] h-auto py-12 md:py-0 flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24">
            <img
              src="/pseb.png"
              alt="PSEB"
              className="h-15 md:h-25 object-contain"
            />
            <img
              src="/pasha.png"
              alt="P@SHA"
              className="h-15 md:h-25 object-contain"
            />
            <img
              src="/gbsha.png"
              alt="GBSHA"
              className="h-20 md:h-30 object-contain"
            />
            <img
              src="/secp.png"
              alt="SECP"
              className="h-20 md:h-25 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
