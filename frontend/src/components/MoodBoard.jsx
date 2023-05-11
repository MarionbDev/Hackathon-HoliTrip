// import React, { useState, useEffect } from "react";
// import "./moodBoard.css";

// const MoodBoard = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const images = [
//     {
//       id: 1,
//       url: "https://cdn.pixabay.com/photo/2020/04/28/21/01/sea-5106327_1280.jpg",
//     },
//     {
//       id: 2,
//       url: "https://cdn.pixabay.com/photo/2020/06/28/08/50/eastern-grey-kangaroo-5348449_1280.jpg",
//     },
//     {
//       id: 3,
//       url: "https://cdn.pixabay.com/photo/2020/04/28/21/01/sea-5106327_1280.jpg",
//     },
//     {
//       id: 4,
//       url: "https://cdn.pixabay.com/photo/2019/07/06/15/29/mountain-4320647_1280.jpg",
//     },
//     {
//       id: 5,
//       url: "https://cdn.pixabay.com/photo/2019/03/21/08/32/animal-4070485_1280.jpg",
//     },
//     {
//       id: 6,
//       url: "https://cdn.pixabay.com/photo/2019/07/06/15/29/mountain-4320647_1280.jpg",
//     },
//     {
//       id: 7,
//       url: "https://cdn.pixabay.com/photo/2020/04/28/21/01/sea-5106327_1280.jpg",
//     },
//     {
//       id: 8,
//       url: "https://cdn.pixabay.com/photo/2020/06/28/08/50/eastern-grey-kangaroo-5348449_1280.jpg",
//     },
//   ];

//   const handleImageHover = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleImageClick = (index) => {
//     setExpandedIndex(index);
//   };

//   const handleCloseClick = () => {
//     setExpandedIndex(null);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         setExpandedIndex(null);
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   return (
//     <section className="mood-board">
//       {images.map((image, index) => (
//         <figure
//           key={image.id}
//           className={`image-container ${
//             expandedIndex === index ? "expanded" : ""
//           } ${index === 0 ? "growTwo" : ""} ${index === 5 ? "growThree" : ""}`}
//           onMouseEnter={() => handleImageHover(index)}
//           onMouseLeave={() => handleImageHover(null)}
//           onClick={() => handleImageClick(index)}
//         >
//           <img src={image.url} alt={`Image ${image.id}`} />
//           <figcaption>
//             <h2>{image.caption}</h2>
//           </figcaption>
//         </figure>
//       ))}
//       {expandedIndex !== null && (
//         <article
//           className="photo-fullsize"
//           onClick={handleCloseClick}
//           onKeyDown={handleCloseClick}
//           tabIndex={0}
//         >
//           <img
//             src={images[expandedIndex].url}
//             alt={`Image ${expandedIndex + 1}`}
//           />
//         </article>
//       )}
//     </section>
//   );
// };

// export default MoodBoard;
