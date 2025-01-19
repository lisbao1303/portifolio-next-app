

import Welcome from "@/components/welcome/welcome";
import SideAbout from "@/components/sideabout/sideabout";
import About from "@/components/about/about";
import FirstDiv from "@/components/firstdiv/firstdiv";
import FixedMenu from "@/components/fixedmenu/fixedmenu";
import Footer from "@/components/footer/footer";
import Loading from "@/components/loading/loading";
import Carrosel from "@/components/carrosel/carrosel";
import Projects from "@/components/projects/projects";

export default function Home() {


  return (
    <div>
      {/* <Loading/> */}
      <Welcome />
      <FixedMenu/>
      <FirstDiv/>
      {/* <Carrosel/> */}
      <Projects/>
      <About />
      <Footer/>
    </div>

  );
}
