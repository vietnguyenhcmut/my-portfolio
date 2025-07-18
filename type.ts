export type PortfolioProps = {
  name: string;
  fullName: string;
  role: string;
  availableStatus: string;
  email: string;
  location: string;
  lifeMotto: string[];
  attractButton: boolean;
  education: {
    name: string;
    logoPath: string;
    time: string;
    major: string;
    brief: string[];
  }[];
  skills: {
    type: string;
    list: string[];
  }[];
  career: {
    company: string;
    companyGradientColor: string;
    logo: {
      name: string;
      height: number;
      width: number;
    };
    time: string;
    industry: string;
    role: {
      title: string;
      achievements: string[];
    }[];
    skills: string[];
  }[];
  projects: {
    name: string;
    description: string;
    skills: string[];
    linkGithub: string;
    linkDemo: string;
  }[];
};
