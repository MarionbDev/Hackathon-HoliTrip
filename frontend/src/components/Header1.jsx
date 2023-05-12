// import React, { useState } from "react";
// import "./Header1.css";
// import { Link } from "react-router-dom";
// function Header() {
//   const [searchExpanded, setSearchExpanded] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const handleSearchExpand = () => {
//     setSearchExpanded(!searchExpanded);
//   };
//   return (
//     <header>
//       <nav>
//         <div className={`search-container ${searchExpanded ? "expanded" : ""}`}>
//           <button id="search-button" type="button">
//             <img
//               src="/src/assets/search2.svg"
//               alt="search"
//               onClick={handleSearchExpand}
//             />
//           </button>
//           {searchExpanded && (
//             <input
//               className="recherche"
//               type="text"
//               placeholder="Recherche"
//               value={searchTerm}
//               onChange={(event) => setSearchTerm(event.target.value)}
//             />
//           )}
//           <button type="button">
//             <Link to="/contact">
//               <img src="/src/assets/message3.svg" alt="message" />
//             </Link>
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }
// export default Header;
