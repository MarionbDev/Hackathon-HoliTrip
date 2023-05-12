import { Link } from "react-router-dom";
import Carrousel from "@components/Carousel";
import Presentation from "@components/Presentation";
import ProposalList from "@components/ProposalList";
import Header from "@components/Header";
// import MoodBoard from "@components/MoodBoard";

export default function Home() {
  return (
    <div>
      <Header />
      <Carrousel />
      <Presentation />
      <ProposalList />
      {/* <MoodBoard /> */}
      <Link to="/radio">
        <button type="button">RADIO</button>
      </Link>
    </div>
  );
}
