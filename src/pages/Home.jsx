import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Slider State
  const [activeSlide, setActiveSlide] = React.useState(0);

  const services = [
    {
      title: "Web Development",
      desc: "Unlock your potential with our expert-led web development courses. Learn the skills you need to build dynamic websites and kickstart your tech career today.",
      icon: "/weblogo.svg" 
    },
    {
      title: "WordPress Development",
      desc: "Become a WordPress expert with our hands-on courses. Learn to create stunning, functional websites and unlock endless opportunities in web development.",
      icon: "/wplogo.svg"
    },
    {
      title: "Digital Marketing",
      desc: "Master the art of digital marketing with our comprehensive courses. Gain the skills to drive online success and elevate your brand in the digital world.",
      icon: "/dmlogo.svg"
    },
    {
      title: "UI/UX Designing",
      desc: "Create beautiful and intuitive user interfaces. Our courses cover everything from wireframing to high-fidelity prototyping for modern digital products.",
      icon: "/uilogo.svg"
    },
    {
      title: "Video Editing",
      desc: "Professional video storytelling for your brand. Learn the tools and techniques to create engaging visual content for your audience.",
      icon: "/videologo.svg"
    },
    {
      title: "Mobile Application",
      desc: "Build powerful cross-platform mobile applications. Learn the latest frameworks to bring your ideas to life on both iOS and Android platforms.",
      icon: "/wplogo.svg"
    }
  ];

  // 8 Projects Data
  const projects = [
    { title: "Create With Base", img: "/p1.png" },
    { title: "Voyatica", img: "/p2.png" },
    { title: "Dynamic Form", img: "/p3.png" },
    { title: "Venus Trials", img: "/p4.png" },
    { title: "Seasonal Sight", img: "/p5.png" },
    { title: "Fly.io", img: "/p6.png" },
    { title: "RefundIQ", img: "/p7.png" },
    { title: "Crypto App", img: "/p8.png" },
  ];

  // 5 Testimonials Data
  const testimonials = [
    {
      name: "Russal Yallop",
      role: "CEO / Create With Base",
      quote: "Cologixs makes every effort to make sure you are happy and always very fast to respond at all times.",
      img: "/client1.png"
    },
    {
      name: "Rita",
      role: "Founder / Texala",
      quote: "Cologixs has completed my requirements slightly better than expected, if anyone needs help with website with database making Cologixs is the best company to go to. great level of trust and professionalism. 10/10",
      img: "/client2.png"
    },
    {
      name: "Fadil",
      role: "CFO / Itpm",
      quote: "Cologixs has been working on my projects for some time now. Ihave always found him to be very professional. Cologixs has a great understanding of the problem space and the best way to solve it with speed and for easy futuremaintenance.",
      img: "/client3.png"
    },
    {
      name: "Justin",
      role: "Director",
      quote: "Cologixs expertise in the Development sector helped us enhance our customer experience and streamline operations. Their recommendations have had a lasting impact on our business.",
      img: "/client4.png"
    },
    {
      name: "Naiknam",
      role: "Managing Director /  Adventure Tour Pakistan",
      quote: "The team at Cologixs offered exceptional guidance for our real estate projects. Their strategic insights and industry knowledge were crucial to our success.",
      img: "/client5.png"
    }
  ];

  return (
    <div className="animate-fadeIn font-sans overflow-x-hidden">
      
      {/* HERO SECTION - Exact Mobile Screenshot Match | Web Design 100% Unchanged */}
      <section className="bg-[#0b1120] min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Image Part - Top on Mobile, Right on Web */}
          <div className="w-full md:w-1/2 order-1 md:order-2 relative flex justify-center">
            <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] rounded-full"></div>
            <img 
              src="/hero-illustration.png" 
              className="relative z-10 w-full max-w-2xl mx-auto drop-shadow-2xl object-contain" 
              alt="Cologixs Hero" 
            />
          </div>

          {/* Text Content - Left Aligned on Mobile (jaisa screenshot me hai) aur Web layout unchanged */}
          <div className="w-full md:w-1/2 order-2 md:order-1 space-y-6 md:space-y-8 flex flex-col items-start md:items-start text-left md:text-left">
            <h5 className="text-[#f27c22] font-bold tracking-[0.15em] md:tracking-[0.25em] uppercase text-sm md:text-base">
              LETS BUILD TOGETHER
            </h5>
            <h1 className="text-white text-[32px] sm:text-[40px] md:text-6xl lg:text-4xl font-bold leading-[1.2] md:leading-[1.1] tracking-tight">
              Elevate Your Brand, <br />
              Expert Tech Solutions for Growth
            </h1>
            <p className="text-gray-400 text-base md:text-xl max-w-xl leading-relaxed">
              Transform your online presence with Cologixs: Expert tech 
              solutions and strategies designed to drive your brand’s 
              growth. Let’s build your digital future together.
            </p>
            <div className="pt-4">
              <button className="bg-[#f27c22] mb-10 hover:bg-[#d96a1b] text-white px-8 md:px-10 py-3 md:py-4 font-bold text-lg rounded-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#f27c22]/20">
                Know More
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#f3f5f7] py-28 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="md:w-[60%]">
              <span className="text-gray-400 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                LETS BUILD TOGETHER
              </span>
              <h2 className="text-[#1a1f2e] text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                What services do we offer <br /> for your Tech?
              </h2>
            </div>
            <div className="md:w-[35%] space-y-5">
              <p className="text-gray-500 text-base leading-relaxed">
                See how our solutions can boost your tech journey. From planning to support, we provide the expertise to drive your success.
              </p>
              <a href="/services" className="inline-block font-bold text-[#1a1f2e] border-b-2 border-[#1a1f2e] pb-1 hover:text-[#f27c22] hover:border-[#f27c22] transition-all uppercase text-sm tracking-[0.1em]">
                All services
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 justify-items-center">
            {services.map((item, index) => (
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
                      maskRepeat: 'no-repeat',
                      maskSize: 'contain',
                      maskPosition: 'center'
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

      {/* STATS SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <h4 className="text-[#1a1f2e] text-5xl md:text-6xl font-black tracking-tight">100+</h4>
            <p className="text-gray-400 font-bold text-sm md:text-base mt-2">Projects Completed</p>
          </div>
          <div>
            <h4 className="text-[#1a1f2e] text-5xl md:text-6xl font-black tracking-tight">95%</h4>
            <p className="text-gray-400 font-bold text-sm md:text-base mt-2">Client Satisfaction</p>
          </div>
          <div>
            <h4 className="text-[#1a1f2e] text-5xl md:text-6xl font-black tracking-tight">$5M+</h4>
            <p className="text-gray-400 font-bold text-sm md:text-base mt-2">Revenue Generated</p>
          </div>
          <div>
            <h4 className="text-[#1a1f2e] text-5xl md:text-6xl font-black tracking-tight">90%</h4>
            <p className="text-gray-400 font-bold text-sm md:text-base mt-2">Project Success Rate</p>
          </div>
        </div>
      </section>

      {/* ADVICE SECTION */}
      <section className="flex flex-col md:flex-row min-h-[690px]">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end bg-white">
          <img 
            src="/advice-image.png" 
            alt="Office Team" 
            className="w-full md:w-[632px] h-full md:h-[850px] object-cover" 
          />
        </div>
        <div className="w-full md:w-1/2 bg-[#0b1120] p-8 md:p-16 lg:p-24 flex items-center">
          <div className="max-w-xl space-y-8">
            <span className="text-[#f27c22] font-bold uppercase tracking-[0.25em] text-sm">
              ADVICE
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Innovative Tech Strategies for Digital Growth and Success
            </h2>
            <div className="space-y-12">
              {[
                { title: "Scalable Tech Solutions", desc: "Tailored digital solutions to enhance efficiency and accelerate startup growth." },
                { title: "Expert Tech Insights", desc: "Access in-depth technology analysis and strategic recommendations from industry experts." },
                { title: "Optimized Digital Transformation", desc: "Advanced guidance on integrating technologies to drive innovation and maximize impact." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 group">
                  <div className="mt-1">
                    <div className="w-6 h-6 rounded-full border-2 border-[#b5e243] flex items-center justify-center text-[#b5e243]">
                      <ArrowRight size={12} className="stroke-[3]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white text-xl font-bold tracking-wide">{item.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="text-gray-400 font-bold uppercase tracking-[0.25em] text-sm">
            PROJECTS
          </span>
          <h2 className="text-[#1a1f2e] text-4xl md:text-6xl font-bold mt-4 mb-16 tracking-tight">
            Our Expertise in Cutting-Edge Tech Projects
          </h2>

          {/* grid-cols-2 makes it match your mobile screenshot exactly */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="group relative w-full aspect-square lg:w-[250px] lg:h-[250px] overflow-hidden cursor-pointer"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 opacity-100 group-hover:opacity-0"></div>
                <div className="absolute bottom-4 left-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-white text-base md:text-2xl font-bold drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SOLUTIONS SECTION */}
      <section className="bg-gradient-to-r from-[#213252] to-[#0f172a] md:h-[650px] flex items-center py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-3/5 space-y-6 md:space-y-8">
            <span className="text-[#f27c22] font-bold uppercase tracking-[0.25em] text-sm">
              TECHNOLOGY SOLUTIONS
            </span>
            <h2 className="text-white text-5xl md:text-5xl font-bold leading-tight tracking-tight">
              Next-Gen Tech Solutions for Innovative Enterprises
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              Providing cutting-edge technology and strategic innovation to help 
              businesses thrive in the digital era. Empowering enterprises with 
              advanced tools to stay ahead in a rapidly evolving tech landscape.
            </p>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="inline-block bg-[#f27c22] hover:bg-[#d96a1b] text-white px-8 md:px-10 py-3 md:py-4 font-bold text-lg rounded-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#f27c22]/20"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="bg-transparent overflow-hidden shadow-2xl">
              <img 
                src="/next-gen.png" 
                alt="Technology Expert" 
                className="w-[416px] h-[416px] object-cover" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIAL SLIDER SECTION */}
      <section className="bg-[#f3f4f6] py-24 px-6 flex flex-col items-center">
        <div className="w-full md:w-[1117px] md:h-[520px]  bg-white shadow-xl flex flex-col md:flex-row items-center overflow-hidden transition-all duration-500">
          <div className="w-full md:w-[460px] md:h-[400px] flex justify-center p-6 md:p-0 md:ml-10">
            <img 
              src={testimonials[activeSlide].img} 
              alt={testimonials[activeSlide].name} 
              className="w-[400px] lg:h-[400px] object-cover shadow-sm animate-fadeIn" 
            />
          </div>

          <div className="flex-1 p-8 md:p-16 relative">
            <div className="max-w-lg space-y-6">
              <h2 className="text-[#1a1f2e] text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                Voices of Our Satisfied Clients
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed italic animate-fadeIn">
                "{testimonials[activeSlide].quote}"
              </p>
              <div className="pt-4 animate-fadeIn">
                <h4 className="text-[#1a1f2e] text-xl font-bold">{testimonials[activeSlide].name}</h4>
                <p className="text-gray-400 text-base">{testimonials[activeSlide].role}</p>
              </div>
            </div>

            <div className="absolute bottom-10 right-10 text-gray-100 hidden md:block select-none">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.7909 17.2261 10 15.017 10H14.017V7H15.017C18.883 7 22.017 10.134 22.017 14V21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697V14C7.01697 11.7909 5.22606 10 3.01697 10H2.01697V7H3.01697C6.88297 7 10.017 10.134 10.017 14V21H2.01697Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex gap-4 lg:mt-12 mt-5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeSlide === idx ? 'bg-[#1a1f2e] scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* LOGOS SECTION */}
        <section className="bg-white border-t border-gray-100 md:h-[146px] h-auto py-12 md:py-0 flex items-center px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
          {/* Logo sizing kept same as web but wrap handled for mobile */}
         
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

export default Home;