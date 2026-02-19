import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Download,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
} from "lucide-react";
import { title } from "framer-motion/client";

const CVPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // --- CENTRAL DATA STORE ---
  const teamData = {
    farhan: {
      name: "Farhan Faqir",
      role: "CEO / Co-Founder",
      email: "farhan@cologixs.com",
      phone: "+92 341 5688937",
      location: "Gilgit, Pakistan",
      profilePic: "/Farhan.png",
      customStyle: { objectPosition: "center 10%", transform: "scale(1)" },
      summary:
        "Visionary leader with a passion for driving digital transformation and scaling tech startups to global markets.",
      skills: [
        "Strategic Leadership",
        "Business Development",
        "Project Management",
        "UI/UX Strategy",
      ],
      experience: [
        {
          year: "2021 - Present",
          title: "CEO",
          company: "Cologixs",
          desc: "Leading a team of experts to deliver top-tier tech solutions.",
        },
      ],
      education: [
        {
          year: "2014 - 2018",
          degree: "Bachelor in Computer Science",
          school: "KIU",
        },
      ],
      projects: [
        { title: "Cologixs Enterprise Portal", link: "https://cologixs.com" },
      ],
    },
    burhan: {
      name: "Burhan Alam",
      role: "Frontend Developer",
      email: "burhan@cologixs.com",
      phone: "+92 341 5688937",
      location: "Gilgit, Pakistan",
      profilePic: "/Burhan.png",
      customStyle: { objectPosition: "center 0%", transform: "scale(1.1)" },
      summary:
        "Dedicated Frontend Developer focused on building high-performance, pixel-perfect web applications.",
      skills: ["HTML", "CSS", "JavaScript"],
      experience: [
        {
          year: "2022 - Present",
          title: "Frontend Dev",
          company: "Cologixs",
          desc: "Crafting modern user interfaces with React.",
        },
      ],
      education: [
        {
          year: "2016 - 2020",
          degree: "BS Information Technology",
          school: "Virtual University",
        },
      ],
      projects: [{ title: "E-Commerce Dashboard", link: "#" }],
    },
    izhar: {
      name: "Izhar",
      role: "Frontend Developer",
      email: "izhardarbar571@gmail.com",
      phone: "+92 355 4952450",
      location: "Gilgit, Pakistan",
      profilePic: "/Izhar.png",
      customStyle: { objectPosition: "top center" },
      summary:
        "Front-End Developer skilled in HTML, CSS, JavaScript, React, and Tailwind CSS, building modern, responsive, and user-friendly websites and web apps. Committed to clean code, fast performance, and pixel-perfect design with strong attention to detail and client satisfaction.",
      skills: [
        "HTML5 / CSS3 / JavaScript / React",
        "Responsive Web Design (Bootstrap, Tailwind CSS)",
      ],
      experience: [
        {
          year: "2024 - Present",
          desc: "Junior Web Developer at Freelance / Internship / COLOGIXS – Gilgit, Pakistan. Developed fully responsive websites using HTML, CSS, JavaScript, and front-end frameworks. Debugged and resolved front-end issues to improve website functionality and user experience. Collaborated on real-world projects using Git for version control and efficient workflow. Gained practical experience in cross-browser compatibility and responsive design best practices.",
        },
      ],
      education: [
        {
          degree: "Matriculation (Science)",
          school: "Aga Khan Higher Secondary School, Nasirabad, Hunza",
        },
        {
          year: "2022 – 2024",
          degree: "Fsc (Pre Medical)",
          school: "Sedna School & Degree College Aliabad, Hunza",
        },
      ],
      projects: [
        { title: "luxe-stone", link: "https://luxe-stone-store.vercel.app/" },
        {
          title: "reflect-digital",
          link: "https://reflect-digital.vercel.app/",
        },
        {
          title: "portfolio-Website",
          link: "https://portfolio-ofizhar.netlify.app/",
        },
      ],
    },
    "alina-alam": {
      name: "Alina Alam",
      role: "CTO",
      email: "alina@cologixs.com",
      phone: "+92 341 5688937",
      location: "Gilgit, Pakistan",
      profilePic: "/AlinaAlam.png",
      customStyle: { objectPosition: "center 0%" },
      summary:
        "Dedicated and detail-oriented WordPress Developer with over 3+ years of experience in designing, customizing, and maintaining responsive websites using WordPress. Proficient in Elementor, custom themes, plugin integration, and WooCommerce. Skilled in HTML, CSS, JavaScript, React and responsive design frameworks. Experienced trainer with a passion for mentoring students and empowering them with web development skills.",
      skills: [
        "WordPress (Themes, Plugins, Elementor, WooCommerce)",
        "HTML5 / CSS3 / JavaScript / React",
        "Responsive Web Design (Bootstrap, Tailwind CSS)",
        "SEO Basics for WordPress",
        "cPanel / FTP / Hosting Management",
      ],
      experience: [
        {
          year: "2023 – Present",
          title: "WordPress Developer & Web Development Trainer",
          company: "Cologixs Pvt Ltd",
          desc: "Developed and maintained WordPress websites for clients and internal projects. Conducted training sessions for students covering WordPress, Elementor, themes, and plugins. Guided 2 batches of students through hands-on website projects. Implemented responsive designs using Bootstrap and Tailwind CSS.",
        },
        {
          year: "2022 – 2023",
          title: "Freelance WordPress Developer",
          company: "Remote",
          desc: "Built custom websites for small businesses, portfolios, and blogs. Integrated e-commerce functionality using WooCommerce. Optimized websites for speed and SEO performance.",
        },
      ],
      education: [
        {
          year: "2022 – Continue",
          degree: "Bachelor's Degree in Software Engineering",
          school: "Karakoram International University Gilgit",
        },
        {
          year: "2020 – 2022",
          degree: "Fsc (Pre Medical)",
          school: "College of Business Managment And Science Danyore, Gilgit",
        },
      ],
      projects: [
        { title: "Venus Trails", link: "https://venustrails.com/" },
        { title: "Voyatica", link: "https://voyatica.com/" },
        { title: "Wide Bay", link: "https://widebaymarinegroup.com.au/" },
        { title: "ATP", link: "https://atp.com.pk/" },
        { title: "Blvksir", link: "https://blvksir.com/" },
      ],
    },
    diya: {
      name: "Diya Noor",
      role: "WordPress Developer",
      email: "diya@cologixs.com",
      phone: "+92 341 5688937",
      location: "Hunza, Pakistan",
      profilePic: "/Diya.png",
      customStyle: { objectPosition: "center 0%" },
      summary:
        "Passionate Wordpress Developer dedicated to crafting creative and functional websites. Proficient in HTML5, CSS3, and Bootstrap, with hands-on experience in website maintenance and client project support. Committed to continuous learning and professional growth in the IT field.",
      skills: ["HTML", "CSS", "Bootstrap", "WordPress Development"],
      experience: [
        {
          year: "May 2025 - Present",
          desc: "Creating responsive and visually appealing websites using HTML, CSS, and Bootstrap. Managing WordPress development, including theme customization and plugin integration. Assisting senior developers with maintenance, testing, and troubleshooting. Gaining exposure to professional workflows.",
        },
      ],
      education: [
        {
          year: "2021 – 2024",
          degree: "Intermediate (Computer Science)",
          school: "Hunza Premier College",
        },
        {
          year: "2017 – 2021",
          degree: "Matriculation (Science)",
          school: "D.J High School Hussainabad Hunza",
        },
      ],
      projects: [
        { title: "Venustrails", link: "https://venustrails.com/" },
        { title: "Voyatica", link: "https://voyatica.com/" },
        { title: "Blvksir", link: "https://blvksir.com/" },
      ],
    },
    "alina-ali": {
      name: "Alina Ali",
      role: "WordPress Developer",
      email: "alina.ali@cologixs.com",
      phone: "+92 341 5688937",
      location: "Gilgit, Pakistan",
      profilePic: "/AlinaAli.png",
      customStyle: { objectPosition: "center 0%" },
      summary:
        "Passionate about web development and creating user-friendly WordPress solutions.",
      skills: [
        "CMS Management",
        "SEO Optimization",
        "Responsive Design",
        "Plugin Customization",
      ],
      experience: [
        {
          year: "2023 - Present",
          title: "WordPress Dev",
          company: "Cologixs",
          desc: "Managing content and theme customization.",
        },
      ],
      education: [
        { year: "2019 - 2023", degree: "Bachelor Degree", school: "KIU" },
      ],
      projects: [{ title: "NGO Website Redesign", link: "#" }],
    },
  };

  const member = teamData[id];

  if (!member)
    return <div className="text-white text-center mt-20">Member not found</div>;

  return (
    <div className="bg-white min-h-screen font-sans animate-fadeIn">
      {/* 2. HEADER SECTION (Brand Navy) */}
      <section className="bg-[#0b1120] mt-15 h-auto md:h-[450px] pt-10 pb-32 md:pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Member Profile Picture - WITH CUSTOM STYLE CONTROL */}
          <div className="w-48 h-48 mt-10 lg:ml-25 md:mt-15 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#f27c22] shadow-2xl shrink-0 bg-white">
            <img
              src={member.profilePic}
              alt={member.name}
              className="w-full h-full object-cover"
              style={member.customStyle}
            />
          </div>

          <div className="text-center md:text-left space-y-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tighter">
              {member.name}
            </h1>
            <p className="text-[#f27c22] text-lg md:text-2xl font-bold uppercase tracking-widest">
              {member.role}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-gray-400 text-sm">
              <span className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={14} className="text-[#f27c22]" /> {member.email}
              </span>
              <span className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={14} className="text-[#f27c22]" /> {member.phone}
              </span>
              <span className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={14} className="text-[#f27c22]" />{" "}
                {member.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CV CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-6 -mt-20 md:-mt-12 mb-20">
        <div className="bg-white shadow-2xl rounded-sm p-6 md:p-16 border border-gray-100 flex flex-col gap-12">
          <section className="space-y-4">
            <h3 className="text-[#0b1120] text-lg md:text-xl font-bold flex items-center gap-3 uppercase tracking-wider border-l-4 border-[#f27c22] pl-4">
              Professional Summary
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {member.summary}
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <section className="space-y-6">
                <h3 className="text-[#0b1120] text-lg md:text-xl font-bold flex items-center gap-3 uppercase tracking-wider border-l-4 border-[#f27c22] pl-4">
                  <Briefcase size={20} /> Work Experience
                </h3>
                <div className="space-y-8">
                  {member.experience.map((exp, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-[#f27c22] font-bold text-sm">
                        {exp.year}
                      </p>
                      <h4 className="text-base md:text-lg font-bold text-[#1a1f2e]">
                        {exp.title}
                      </h4>
                      <p className="text-gray-500 font-bold text-xs uppercase">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 text-sm mt-2">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6 ">
                <h3 className="text-[#0b1120] text-lg md:text-xl font-bold flex items-center gap-3 uppercase tracking-wider border-l-4 border-[#f27c22] pl-4">
                  <Globe size={20} /> Personal Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {member.projects.map((project, i) => (
                    <div key={i} className="space-y-1">
                      <h4 className="text-base md:text-lg font-bold text-[#1a1f2e]">
                        {project.title}
                      </h4>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#f27c22] text-sm hover:underline font-medium"
                      >
                        View Project Link
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-12">
              <section className="space-y-6">
                <h3 className="text-[#0b1120] text-lg md:text-xl font-bold flex items-center gap-3 uppercase tracking-wider border-l-4 border-[#f27c22] pl-4">
                  <Award size={20} /> Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-[#0b1120] px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-[#0b1120] text-lg md:text-xl font-bold flex items-center gap-3 uppercase tracking-wider border-l-4 border-[#f27c22] pl-4">
                  <GraduationCap size={20} /> Education
                </h3>
                <div className="space-y-4">
                  {member.education.map((edu, i) => (
                    <div key={i}>
                      <p className="text-[#f27c22] font-bold text-xs">
                        {edu.year}
                      </p>
                      <h4 className="text-sm md:font-bold text-[#1a1f2e]">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-500 text-sm">{edu.school}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CVPage;
