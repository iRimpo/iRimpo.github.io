import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cvchs,
    gdsc0,
    dls,
    mathnasium,
    python,
    cpp,
    website,
    signsage,
    richard
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ];
  
  const services = [
    {
      title: "W.I.P Media",
      icon: web,
    },
    {
      title: "W.I.P Media",
      icon: mobile,
    },
    {
      title: "W.I.P Media",
      icon: backend,
    },
    {
      title: "W.I.P Media",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "eSports President",
      company_name: "Clayton Valley Charter High School",
      icon: cvchs,
      iconBg: "#ffffff",
      date: "Aug 2021 - Jun 2022",
      points: [
        "Lead and oversaw all aspects of the eSports organization, leveraging experience as a successful player and collaborator to develop and execute strategic plans that drive team success, enhance player performance, and elevate the organization's standing in the competitive landscape.",
        "Utilized firsthand understanding of player dynamics and team dynamics to foster an environment of collaboration, effective communication, and synergy. Work closely with players, coaches, and staff to optimize team strategies, improve player skills, and ensure a cohesive and high-performing roster.",
        "Demonstrated a history of excellence as a former player, having contributed to a team that achieved a top 5 ranking in the league. Leverage this experience to provide valuable insights, mentorship, and guidance to current players, helping them overcome challenges and achieve their maximum potential.",
      ],
    },
    {
      title: "Junior Developer",
      company_name: "Google Developer Student Club",
      icon: gdsc0,
      iconBg: "#ffffff",
      date: "Sept 2022 - Jan 2023",
      points: [
        "Developed a Discord bot that accesses the Notion Database to send deadline reminders.",
        "Worked on the Notion API Department.",
        "Developed parse functions that utilized a Notion Page's Database.",
        "Participated in code reviews and listened to constructive feedback from other developers.",
      ],
    },
    {
      title: "Marketing Director",
      company_name: "Deep Learning Society",
      icon: dls,
      iconBg: "#000000",
      date: "Feb 2023 - May 2023",
      points: [
        "Designed all digital graphics and managed the social media account.",
        "Brainstormed unique and creative branding ideas that contributed to its growth.",
      ],
    },
    {
      title: "Creative Designer",
      company_name: "Google Developer Student Club",
      icon: gdsc0,
      iconBg: "#ffffff",
      date: "Mar 2023 - May 2023",
      points: [
        "Created scalable social media posts, presentation slides, shirt designs, and any other design-related media.",
        "Contributed to design and marketing related workshops and affairs.",
        "Helped organize Viking Hacks 2023 through various methods.",
      ],
    },
    {
      title: "Mathematics Instructor",
      company_name: "Mathnasium",
      icon: mathnasium,
      iconBg: "#11100e",
      date: "Jul 2023 - Present",
      points: [
        "Deliver personalized math instruction to students, catering to their unique learning needs and skill levels. Utilize Mathnasium's curriculum and teaching methodologies to effectively explain mathematical concepts, problem-solving strategies, and techniques.",
        "Foster a positive and enthusiastic learning atmosphere by establishing rapport with students and maintaining a supportive attitude. Employ creative teaching methods, real-life examples, and interactive activities to keep students engaged and motivated to excel in math.",
      ],
    },
    {
      title: "Vice President of Creative Design",
      company_name: "Google Developer Student Club",
      icon: gdsc0,
      iconBg: "#ffffff",
      date: "Aug 2023 - Present",
      points: [
        "A part of the executive Google Developer Student Club officer team.",
        "Create scalable social media posts, presentation slides, shirt designs, and any other design-related media.",
        "In charge of reinforcing brand guidelines and marketing materials.",
        "Contribute to design and marketing related workshops and affairs.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Personal Website",
      description:
        "The website you're currently on! It utilizes Three.js, React.js, and Tailwind CSS. I'm using a full YouTube tutorial of Three.js and ChatGPT to create this.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
      ],
      image: website,
      source_code_link: "https://github.com/iRimpo/iRimpo.github.io",
    },
    {
      name: "Notion Deadline Reminder Bot",
      description:
        "A Discord Bot that enables users to fetch and notify a Notion Page's deadlines to a Discord server. Fun fact, this was my first ever real project. :D",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "notion-api",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: gdsc0,
      source_code_link: "https://github.com/pluffpenguin/Notion-Deadline-Reminder-Bot",
    },
    {
      name: "Sign Sage",
      description:
        "Project submission for UC Berkeley AI Hackathon. It utilizes CV in order to detect an ASL word and then convert it into text form. I worked on the back-end by utilizing a full YouTube tutorial of action recognition and ChatGPT.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "lstm",
          color: "pink-text-gradient",
        },
      ],
      image: signsage,
      source_code_link: "https://github.com/iRimpo/calhacks2023",
    },
    {
      name: "More to come!",
      description:
        "Yippee!",
      tags: [
        {
          name: " ",
          color: "blue-text-gradient",
        },
        {
          name: " ",
          color: "green-text-gradient",
        },
        {
          name: " ",
          color: "pink-text-gradient",
        },
      ],
      image: git,
      source_code_link: "https://google.com",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };