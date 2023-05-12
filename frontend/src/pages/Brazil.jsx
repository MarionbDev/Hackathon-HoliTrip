import CarrouselBrazil from "@components/CarouselBrazil";
import MoodBoardBrazil from "@components/MoodBoardBrazil";
import PresentationBrazil from "@components/PresentationBrazil";

export default function Australia() {
  return (
    <>
      <header>
        <CarrouselBrazil />
      </header>
      <PresentationBrazil />
      <h2 className="title text-center mb-5">MOOD BOARD</h2>
      <MoodBoardBrazil />
    </>
  );
}
