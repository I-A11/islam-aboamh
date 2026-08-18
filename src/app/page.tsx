import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl lg:flex">
      <Sidebar />
      <div className="px-8 lg:ml-[--sidebar-width] lg:w-[calc(100%-var(--sidebar-width))] lg:px-12 xl:[--sidebar-width:34%] [--sidebar-width:40%]">
        <About />
        <Experience />
        <Projects />
        <Archive />
        <Footer />
      </div>
    </main>
  );
}
