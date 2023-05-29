// import React, { useEffect, useState } from "react";
// import data from "./Part.json";
// import "./Part.scss";
// import Detail from "./PartDetail";
// import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

// export default function Part(props) {
//   const { parts } = props;
//   const [part, setPart] = useState([]);

//   useEffect(() => {
//     setPart(Part);
//   }, []);
//   return (
//     <>
//       {parts.map((part) => (
//         <div key={part.id} className="cards">
//           <div className="card">
//             <div className="card__part">
//               <h3>{part.part}</h3>
//               {part.icon}
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
