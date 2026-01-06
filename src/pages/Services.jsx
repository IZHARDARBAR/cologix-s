import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  // 9 Cards Data
  const servicesData = [
    {
      title: "Web Development",
      desc: "Unlock your potential with our expert-led web development courses. Learn the skills you need to build dynamic websites.",
      icon: "/weblogo.svg",
    },
    {
      title: "WordPress Development",
      desc: "Become a WordPress expert with our hands-on courses. Learn to create stunning, functional websites and unlock endless opportunities.",
      icon: "/wplogo.svg",
    },
    {
      title: "Digital Marketing",
      desc: "Master the art of digital marketing with our comprehensive courses. Gain the skills to drive online success and elevate your brand.",
      icon: "/dmlogo.svg",
    },
    {
      title: "UI/UX Designing",
      desc: "Create beautiful and intuitive user interfaces. Our courses cover everything from wireframing to high-fidelity prototyping.",
      icon: "/uilogo.svg",
    },
    {
      title: "Video Editing",
      desc: "Professional video storytelling for your brand. Learn the tools and techniques to create engaging visual content for your audience.",
      icon: "/videologo.svg",
    },
    {
      title: "Mobile Application",
      desc: "Build powerful cross-platform mobile applications. Learn the latest frameworks to bring your ideas to life on iOS and Android.",
      icon: "/wplogo.svg",
    },
    {
      title: "Graphic Designing",
      desc: "Graphic design combines creativity and visual communication to create compelling visuals for branding, marketing, and digital experiences.",
      icon: "/7.svg",
    },
    {
      title: "Full Stack Developer",
      desc: "Full-Stack development involves building both the front-end and back-end of applications, ensuring seamless functionality and user experience.",
      icon: "/8.svg",
    },
    {
      title: "Visual Programming",
      desc: "Visual programming simplifies coding by using graphical elements insted of text-based code, making development more intuitive and accessibile.",
      icon: "/9.svg",
    },
  ];

  return (
    <div className="animate-fadeIn font-sans overflow-x-hidden bg-white">
      {/* 1. SERVICES HERO SECTION - Aligned to max-w-7xl */}
      <section className="relative bg-gradient-to-r from-[#213252] to-[#0b1120] md:h-[600px] flex items-center pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT SIDE Content */}
          <div className="w-full md:w-1/2 md:h-[310px] flex flex-col justify-between items-start text-left order-2 md:order-1">
            <div className="space-y-4 mt-5">
              <span className=" text-[#f27c22] font-bold  uppercase tracking-[0.2em] text-[15px]">
                SERVICES
              </span>
              <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-md">
                Find out how our services can elevate your startup potential
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed">
              Unlock new opportunities and achieve greater success with our
              expert services.
            </p>
            <div className="pt-2">
              <Link
                to="/"
                className="inline-block bg-[#f27c22] hover:bg-[#d96a1b] text-white px-8 py-3 font-bold text-sm rounded-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#f27c22]/10"
              >
                Know More
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE Image */}
          <div className="w-full mt-10 md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <div className="overflow-hidden shadow-2xl rounded-sm">
              <img
                src="/services-hero.png"
                alt="Our Services"
                className="w-full md:w-[493px] h-[310px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID SECTION - Aligned to max-w-7xl */}
      <section className="bg-[#f3f5f7] py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">
              OUR EXPERTISE
            </span>
            <h2 className="text-[#1a1f2e] text-4xl md:text-5xl font-bold mt-4">
              Solutions for Every Tech Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center md:justify-items-start">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className="group relative h-[483px] w-[331px] bg-white p-11 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:bg-[#1a1f2e] cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center">
                  <div
                    className="w-12 h-12 bg-[#1a1f2e] group-hover:bg-[#f27c22] transition-colors duration-500"
                    style={{
                      maskImage: `url(${item.icon})`,
                      WebkitMaskImage: `url(${item.icon})`,
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      maskPosition: "center",
                    }}
                  />
                </div>

                <div className="space-y-6">
                  <h3 className="text-[#1a1f2e] group-hover:text-white text-2xl font-bold leading-tight transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mb-15 group-hover:text-gray-300 text-[15px] leading-relaxed transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION - Aligned to max-w-7xl */}
      <section className="bg-gradient-to-r from-[#213252] to-[#0b1120] md:h-[250px] flex items-center py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center md:items-center gap-6">
          <div className="text-center md:text-center space-y-2">
            <h3 className="text-white text-center text-3xl md:text-[44px] font-bold leading-tight tracking-tight">
              Want to know more? Contact with our <br /> startup consultant
            </h3>
          </div>
          <div className="flex-shrink-0 ">
            <Link
              to="/contact"
              className="inline-block bg-[#f27c22] hover:bg-[#d96a1b] text-white px-10 py-4 font-bold text-lg rounded-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#f27c22]/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION SECTION - Aligned to max-w-7xl */}
      <section className="bg-[#f3f5f7] md:h-[620px] flex items-center py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="overflow-hidden shadow-2xl rounded-sm">
              <img
                src="/modern-solutions.png"
                alt="Cutting-Edge Solutions"
                className="w-full md:w-[418px] h-[418px] object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start text-left space-y-6">
            <span className="text-gray-400 font-bold uppercase tracking-[0.15em] text-sm md:text-base">
              SOLUTION
            </span>
            <h2 className="text-[#1a1f2e] text-4xl md:text-5xl lg:text-4xl font-bold leading-tight tracking-tight">
              Cutting-Edge Solutions for Modern Enterprises
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
              Delivering innovative strategies and advanced solutions to drive
              success in today’s evolving startup landscape. Empowering modern
              enterprises with the tools to stay ahead of the curve.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block bg-[#f27c22] hover:bg-[#d96a1b] text-white px-8 py-3.5 font-bold text-lg rounded-sm transition-all duration-300"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOGOS SECTION - Aligned to max-w-7xl */}
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

      {/* 6. COLLABORATIVE APPROACH SECTION (Video) - Aligned to max-w-7xl */}
      <section className="bg-[#161c2e] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center space-y-10 w-full">
          <div className="space-y-4 mt-[-30px]">
            <span className="text-[#f27c22] font-bold uppercase tracking-[0.25em] text-sm md:text-base">
              COLLABORATIVE APPROACH
            </span>
            <h1 className="text-white text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight tracking-tight">
              Harnessing Team Synergy for Outstanding Outcomes
            </h1>
          </div>

          <div className="relative mx-auto w-full max-w-full h-[418px] aspect-video overflow-hidden shadow-2xl border border-white/5">
            <video
              className="w-full h-full object-cover"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src="/Services.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-white text-start mb-[-30px] text-base md:text-lg leading-relaxed max-w-full mx-auto">
            Description: At Cologixs, teamwork is at the heart of everything we
            do. By combining our diverse skills and perspectives, we foster a
            collaborative environment where innovative solutions thrive.
          </p>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION - Aligned to max-w-7xl */}
      <section
        className="relative py-28 px-6 md:px-12 bg-cover h-[440px] bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/footer-bg.png')" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto mt-[-15px] text-center space-y-8 w-full">
          <h2 className="text-white text-3xl md:text-5xl lg:text-[50px] font-bold leading-tight tracking-tight">
            Looking for fresh and innovative ideas?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Get ahead with creative solutions from Cologixs. We turn bold ideas
            into actionable strategies tailored to your goals.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-block bg-[#f27c22] hover:bg-[#d96a1b] text-white px-10 py-4 font-bold text-lg rounded-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#f27c22]/20"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
