import CarrouselBrazil from "@components/CarouselBrazil";
import MoodBoardCanada from "@components/MoodBoardCanada";
import PresentationCanada from "@components/PresentationCanada";

export default function Australia() {
  return (
    <>
      <header>
        <CarrouselBrazil />
      </header>
      <PresentationCanada />
      <h2 className="title text-center mb-5">MOOD BOARD</h2>
      <MoodBoardCanada />
    </>
  );
}
