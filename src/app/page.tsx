// import Image from "next/image";
// import Header from "./Components/Header";
import Herosection from "./Components/Herosection";
import CoachesPage from "./Components/CoachesPage";
import Blurb from "./Components/Blurb";
// import Coach2 from "./Components/Coach2";
import Blurb2 from "./Components/Blurb2";
import Meaningfulworld from "./Components/Meaningfulworld";

export default function Home() {
  return (
    <div className="bg-white ">
      
      <Herosection />
      <Blurb />
      <CoachesPage />
      <Blurb2 />
      <Meaningfulworld />
      {/* <Coach2 /> */}
    </div>

  );
}
