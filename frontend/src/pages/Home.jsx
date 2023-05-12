import { Link } from "react-router-dom";
import Carrousel from "@components/Carousel";
import Presentation from "@components/Presentation";
import ProposalList from "@components/ProposalList";
import RadioLogo from "../assets/radio/radioLogo.png";
// import MoodBoard from "@components/MoodBoard";

export default function Home() {
  return (
    <header className="App-header">
      <Link to="/radio">
        <button type="button">
          <img className="md:w-20 md:h-20" src={RadioLogo} alt={RadioLogo} />
        </button>
      </Link>
      <Carrousel />
      <Presentation />
      <ProposalList />
      {/* <MoodBoard /> */}
    </header>
  );
}
