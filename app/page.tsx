import Navbar from "@/components/navbar/Navbar";
import WhoAmI from "@/components/who-am-i/WhoAmI";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Education from "@/components/education/Education";
import Career from "@/components/career/Career";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <WhoAmI />
      <About />
      <Skills />
      <Education />
      <Career />
      {/* <Projects /> */}
    </main>
  );
}
