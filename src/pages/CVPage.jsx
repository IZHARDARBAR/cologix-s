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
} from "lucide-react";

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
      skills: ["HTML", "CSS", "JavaScript",],
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
        "Detail-oriented developer with expertise in creating seamless digital experiences.",
       skills: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      experience: [
        {
          year: "2024 - Present",
          title: "Developer",
          company: "Cologixs",
          desc: "Implementing robust frontend architectures.",
        },
      ],
      education: [{ year: "2022 - 2024", degree: "FAC", school: "SEDNA" }],
    },
    "alina-alam": {
      name: "Alina Alam",
      role: "CTO / WordPress Developer",
      email: "alina@cologixs.com",
      phone: "+92 341 5688937",
      location: "Gilgit, Pakistan",
      profilePic: "/AlinaAlam.png",
      customStyle: { objectPosition: "center 0%" },
      summary:
        "Technology leader and CMS expert with a focus on scalable architecture and innovative design.",
      skills: [
        "WordPress Mastery",
        "Technical Strategy",
        "Backend Architecture",
        "Team Mentoring",
      ],
      experience: [
        {
          year: "2021 - Present",
          title: "CTO",
          company: "Cologixs",
          desc: "Overseeing all technical aspects and WordPress development.",
        },
      ],
      education: [
        { year: "2015 - 2019", degree: "Software Engineering", school: "UET" },
      ],
    },
    diya: {
      name: "Diya Noor",
      role: "WordPress Developer",
      email: "diya@cologixs.com",
      phone: "+92 341 5688937",
      location: "Gilgit, Pakistan",
      profilePic: "/Diya.png",
      customStyle: { objectPosition: "center 0%"  },
      summary:
        "Expert WordPress developer specializing in custom themes and high-converting landing pages.",
      skills: ["PHP", "Elementor Pro", "Custom Post Types", "WooCommerce"],
      experience: [
        {
          year: "2023 - Present",
          title: "WordPress Dev",
          company: "Cologixs",
          desc: "Developing complex WordPress ecosystems.",
        },
      ],
      education: [
        {
          year: "2018 - 2022",
          degree: "Bachelor Degree",
          school: "Gilgit College",
        },
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
    },
  };

  const member = teamData[id];

  if (!member)
    return <div className="text-white text-center mt-20">Member not found</div>;

  return (
    <div className="bg-white min-h-screen font-sans animate-fadeIn">
      {/* 2. HEADER SECTION (Brand Navy) */}
      <section className="bg-[#0b1120] mt-15 h-auto md:h-[450px] pt-10 pb-32 md:pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Member Profile Picture - WITH CUSTOM STYLE CONTROL */}
          <div className="w-48 h-48 mt-10 md:mt-15 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#f27c22] shadow-2xl shrink-0 bg-white">
            <img
              src={member.profilePic}
              alt={member.name}
              className="w-full h-full object-cover"
              // Ye line aapki help karegi image align karne mein
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
      <main className="max-w-5xl mx-auto px-6 -mt-20 md:-mt-12 mb-20">
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
