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
    richard,
    esports,
    notion,
    dlsp,
    gdsccd,
    math,
    gdscvp,
    svs,
    tiktok,
    shuffle,
    party,
    cant,
    down,
    presenai,
    lbnl,
    lbnllab

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

  const pics = [
    {
      title: "Dashstar",
      icon: shuffle,
    },
    {
      title: "Party Rock",
      icon: party,
    },
    {
      title: "Can't Take My Eyes Off You",
      icon: cant,
    },
    {
      title: "Timber",
      videoSrc: down,
    },
  ];
  
  const services = [
    {
      title: "Dashstar",
      videoSrc: shuffle,
    },
    {
      title: "Party Rock",
      videoSrc: party,
    },
    {
      title: "Can't Take My Eyes Off You",
      videoSrc: cant,
    },
    {
      title: "Timber",
      videoSrc: down,
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
      title: "Cybersecurity Controls Intern",
      company_name: "Lawrence Berkeley National Laboratory",
      icon: lbnl,
      iconBg: "#ffffff",
      proj: lbnllab,
      date: "Starting June 2024",
      points: [
        "Increased efficiency of tracking energy management systems for 1,000+ controllers significantly by developing an interactive automated network diagrammer using Python libraries across 70+ buildings.",
        "Enabled engineers to visualize complex network relationships between servers, buildings, and controllers by implementing nodes and edges that relay critical information, such as serial numbers, and IP Addresses.",
        "Decrypted 5,000+ obscure location values from databases into usable building numbers for accurate diagramming by analyzing patterns in control system database reports.",
        "Proposed plans for a secure SaaS deployment and the conceptual idea of using the commericial product 'Nozomi' for facilities engineers as a result from the deployment of this project.",
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "Lumira Solutions",
      icon: "",
      iconBg: "#ffffff",
      proj: "",
      date: "Starting June 2024",
      points: [
        "Accomplished learning about workflows to automate business processes, resulting in a deeper understanding of automation techniques by studying various methods for enhancing productivity.",
        "Researched automated workflows like Zapier, resulting in an understanding of how to integrate user interfaces, data tables, and logic, by exploring the capabilities of automation tools to automate diverse tasks and processes.",
      ],
    },
    {
      title: "Program Manager",
      company_name: "PlayVS - Clayton Valley Charter High School",
      icon: cvchs,
      iconBg: "#ffffff",
      proj: esports,
      date: "Aug 2020 - Jun 2022",
      points: [
        "Managed the eSports Program, leading to a #1 ranking in the Youth Pacific Region Championships in subsequent years by laying the foundation and implementing program structure.",
        "Led and coordinated 60+ meetings, practice sessions, and match reviews- driving a 70%+ win rate across varsity teams by utilizing project management techniques and fostering team collaboration.",
        "Conducted data-driven analysis of individual player performance to identify improvement opportunities by applying psychological insights to develop targeted development plans and performance metrics.",
      ],
    },
    {
      title: "Mathematics Instructor",
      company_name: "Mathnasium",
      icon: mathnasium,
      iconBg: "#11100e",
      proj: math,
      date: "Jul 2023 - Present",
      points: [
        "Deliver personalized math instruction to students, catering to their unique learning needs and skill levels. Utilize Mathnasium's curriculum and teaching methodologies to effectively explain mathematical concepts, problem-solving strategies, and techniques.",
        "Foster a positive and enthusiastic learning atmosphere by establishing rapport with students and maintaining a supportive attitude. Employ creative teaching methods, real-life examples, and interactive activities to keep students engaged and motivated to excel in math.",
      ],
    },
  ];

  const educations = [
    {
      title: "University of California, Berkeley",
      company_name: "Data Science, Bachelors of Arts Degree",
      icon: "",
      iconBg: "#ffffff",
      proj: "",
      date: "Graduating 2026",
      points: [
        ],
    },
    {
      title: "Diablo Valley College",
      company_name: "Computer Science, Associates Degree",
      icon: "",
      iconBg: "#ffffff",
      proj: "",
      date: "Aug 2022 - May 2024",
      points: [
        ],
    }
  ];

  const clubs = [
    {
      title: "Junior Developer",
      company_name: "Google Developer Student Club",
      icon: gdsc0,
      iconBg: "#ffffff",
      proj: notion,
      date: "Sept 2022 - Jan 2023",
      points: [
        "Co-developed a Discord bot using JavaScript and Node.js that connects with Notion's API to fetch deadlines and sends automated reminder messages to users on Discord for Google Developer Student Club.",
        "Worked in the Notion API department to create functions to fetch deadlines and other information from the Notion database, enhancing the integration between Notion and Discord for seamless information retrieval."
      ],
    },
    {
      title: "Content Creator",
      company_name: "@Sunvalley Shufflerz - TikTok",
      icon: tiktok,
      iconBg: "#000000",
      proj: svs,
      date: "Jan 2023 - Present",
      points: [
        "Accumulated over 1 million views on TikTok through captivating shuffle dance content.",
        "Founded a group dedicated to promoting shuffle dance and fostering a global community of dance enthusiasts.",
        "Promoted a platform for sharing creativity, passion, social engagement, and positivity through thoughtful editing and practice in dancing."
      ],
    },
    {
      title: "Vice President of Creative Design",
      company_name: "Google Developer Student Club",
      icon: gdsc0,
      iconBg: "#ffffff",
      proj: gdscvp,
      date: "Aug 2023 - Present",
      points: [
        "A part of the executive Google Developer Student Club officer team.",
        "Create scalable social media posts, presentation slides, shirt designs, and any other design-related media.",
        "In charge of reinforcing brand guidelines and marketing materials.",
        "Contribute to design and marketing related workshops and affairs.",
      ],
    },
    {
      title: "Marketing Director",
      company_name: "Deep Learning Society",
      icon: dls,
      iconBg: "#000000",
      proj: dlsp,
      date: "Feb 2023 - Present",
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
      proj: gdsccd,
      date: "Mar 2023 - May 2023",
      points: [
        "Created scalable social media posts, presentation slides, shirt designs, and any other design-related media.",
        "Contributed to design and marketing related workshops and affairs.",
        "Helped organize Viking Hacks 2023 through various methods.",
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
      name: "PresenAI",
      description:
        "Project submission for CalHacks 10.0. PresenAI uses Hume AI to analyze the presenter's facial expressions and speech language during a video presentation. The AI provides real-time feedback on how to enhance delivery, engagement, and emotional connection with the audience.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
        {
          name: "hume-ai",
          color: "pink-text-gradient",
        },
      ],
      image: presenai,
      source_code_link: "https://github.com/iRimpo/PresenAI",
    },
    {
      name: "EMS Network Diagrammer",
      description:
        "Developed Python scripts using PyVis and Pandas to convert CSV data into interactive network diagrams. Implemented data cleaning functions to accurately parse data from various energy management system reports, ensuring reliability in visualizations. Presented the project to the engineering department, the cybersecurity division, and WD&E Interns at LBNL.!",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "PyVis",
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
  
  export { services, technologies, experiences, testimonials, projects, educations, clubs };