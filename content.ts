import { PortfolioProps } from "./type";

const portfolio: PortfolioProps = {
  name: "Viet Nguyen",
  fullName: "Viet Nguyen Van",
  role: "Web Developer",
  availableStatus: "Available for hire",
  email: "viet.nguyen.hcmut@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
  lifeMotto: [
    "Meditation helps me build a good mind ! Try it for your life",
    "My previous bosses are impressed my mind more than my work achievements !",
    "I only work with companies that truly care about the spiritual development and well-being of their employees.",
  ],
  attractButton: true,
  education: [
    {
      name: "Ho Chi Minh City University of Technology",
      logoPath: "/LogoHCMUT.png",
      time: "Aug 2019 - Nov 2023",
      major: "Computer Engineering",
      brief: [
        "This is a major that blends principles from electrical engineering and computer science",
        "The core knowledge of this major: Digital Logic, Micro-processor and Micro-controllers, IoT System, Data Structure and Algorithms",
      ],
    },
  ],
  skills: [
    {
      type: "Programming Languages",
      list: [
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "C/C++",
        "Python",
        "Golang",
      ],
    },
    {
      type: "Framework",
      list: [
        "ReactJS NextJS",
        "React Native",
        "VeloJS",
        "ExpressJS with Prisma",
      ],
    },
    {
      type: "Libraries",
      list: ["TailwindCSS", "shadcn/ui", "Ant Design", "MUI"],
    },
    { type: "Containerization", list: ["Docker"] },
    { type: "Cloud Computing", list: ["AWS"] },
    { type: "Database", list: ["DynamoDB", "PostgreSQL", "S3"] },
    {
      type: "Powered platform:",
      list: ["AWS Amplify", "Supabase", "Firebase"],
    },
    {
      type: "English",
      list: ["TOEIC - 610 L&R - 205 S&W (04/2023)", "VSTEP - B2 (04/2025)"],
    },
  ],
  career: [
    {
      company: "Vietnamese IoT Solution Company",
      companyGradientColor: "bg-gradient-to-r from-green-600 to-lime-500",
      logo: {
        name: "/viis_logo.svg",
        width: 150,
        height: 150,
      },
      time: "Mar 2025 - Now",
      industry: "Smart Agriculture",
      role: [
        {
          title: "Contributor",
          achievements: [
            "Collected agricultural parameters from the farms (by the devices) to the web app solution.",
            "Built the Task Assignments functionality, and templates for configuration.",
            "Allowed user to control their agri-devices through RPC control method and received all changed actions through the MQTT protocol.",
          ],
        },
      ],
      skills: [
        "ReactJS",
        "Zustand",
        "PostgreSQL",
        "IoT",
        "Security",
        "VPN",
        "TailwindCSS",
        "+ More",
      ],
    },
    {
      company: "Dai Quang Phat Co.,LTD",
      companyGradientColor: "bg-gradient-to-r from-blue-500 to-orange-500",
      logo: {
        name: "/DaiQuangPhat.JPG",
        width: 150,
        height: 150,
      },
      time: "Nov 2023 - Now",
      industry: "Traffic System",
      role: [
        {
          title: "Researcher",
          achievements: [
            "Established a connection between electrical cabinets and our web application through edge devices.",
            "Designed and implemented logical algorithms to process data before triggering any actions in the cabinets.",
          ],
        },
        {
          title: "Full-stack Web Developer",
          achievements: [
            "Enabled customers to monitor the status of all their edge devices",
            "Provided remote control functionality for these devices",
            "Implemented incident alerts via email",
            "Secured data transmission through a VPN connection",
          ],
        },
      ],
      skills: [
        "AWS",
        "ReactJS",
        "Redux",
        "NestJS",
        "PostgreSQL",
        "IoT",
        "Security",
        "VPN",
        "TailwindCSS",
        "+ More",
      ],
    },
    {
      company: "WorldBaseSys",
      companyGradientColor: "bg-gradient-to-r from-gray-500 to-orange-400",
      logo: {
        name: "/wbs-logo-132x40.png",
        width: 99,
        height: 30,
      },
      time: "Mar 2023 - Sep 2023",
      industry: "Media & Communication",
      role: [
        {
          title: "Frontend Developer",
          achievements: [
            "Created forms that are ready for creating events, using ReactJS, MUI, TailwindCSS",
            "Integrated Google Map API, CKEditor",
          ],
        },
      ],
      skills: ["ReactJS", "Zustand", "Google Cloud Platform", "CKEditor"],
    },
    {
      company: "Bosch Global Software Technologies",
      companyGradientColor: "bg-gradient-to-r from-red-500 to-blue-500",
      logo: {
        name: "/BGST.png",
        width: 200,
        height: 100,
      },
      time: "June 2022 - Aug 2022",
      industry: "Automotive",
      role: [
        {
          title: "Embedded Developer",
          achievements: [
            "Got an overview with special automotive software",
            "Touched professional work environment",
          ],
        },
      ],
      skills: ["C/C++", "Automotive Softwares"],
    },
  ],
  projects: [
    // {
    //   name: "DQP Cloud",
    //   description:
    //     "A fully platform for enterprises monitors and controls devices remotely, and prevents incidents",
    //   skills: [
    //     "React",
    //     "Tailwind CSS",
    //     "Redux",
    //     "AWS",
    //     "NestJS",
    //     "PostgreSQL",
    //     "Kafka",
    //     "Kubernetes",
    //     "Jenkins",
    //     "+ more",
    //   ],
    //   linkGithub: "",
    //   linkDemo: "https://dqpcloud.com/",
    // },
    // {
    //   name: "Note Di Pls",
    //   description: "A publicly notation app for simple purposes",
    //   skills: ["NextJS", "Tailwind CSS", "Redux", "NestJS"],
    //   linkGithub: "https://github.com/vietnguyenhcmut/note-di-pls",
    //   linkDemo: "I haven't deployed it yet",
    // },
    // {
    //   name: "OnHand SmartHome",
    //   description:
    //     "An smarthome platform for family to control their smart home devices",
    //   skills: ["NextJS", "Tailwind CSS", "Redux", "AWS"],
    //   linkGithub: "https://github.com/vietnguyenhcmut/core-components-vietng",
    //   linkDemo: "https://master.d3n3605u39aiut.amplifyapp.com/",
    // },
  ],
};

export const contentOfApp = {
  portfolio: portfolio,
  life: "enabled",
};
