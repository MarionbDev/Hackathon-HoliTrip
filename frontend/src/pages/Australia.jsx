import CarrouselAustralia from "@components/CarouselAustralia";
import PresentationAustralia from "@components/PresentationAustralia";
import MoodBoardAustralia from "@components/MoodBoardAustralia";

export default function Australia() {
  return (
    <>
      <header>
        <CarrouselAustralia />
      </header>
      <PresentationAustralia />
      <h2 className="title text-center mb-5">MOOD BOARD</h2>
      <MoodBoardAustralia />
    </>
  );
}
