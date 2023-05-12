import CarrouselCanada from "@components/CarouselCanada";
import MoodBoardCanada from "@components/MoodBoardCanada";
import PresentationCanada from "@components/PresentationCanada";

export default function Canada() {
  return (
    <>
      <header>
        <CarrouselCanada />
      </header>
      <PresentationCanada />
      <h2 className="title text-center mb-5">MOOD BOARD</h2>
      <MoodBoardCanada />
    </>
  );
}
