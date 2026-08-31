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
      <div className="px-8 lg:flex-1 lg:px-12">
        <About />
        <Experience />
        <Projects />
        <Archive />
        <Footer />
      </div>
    </main>
  );
}
