import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
export default function Lottery() {
  let [ticket, setTicket] = useState(genTicket(5));
  let TicketWinning = sum(ticket) === 20;
  let BuyTicket = () => {
    setTicket(genTicket(3));
  };
  return (
    <div>
      <h1> Lottery Game!</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
        {/* <span>{ticket[3]}</span> */}
      </div>
      <br></br>
      <button className="button" onClick={BuyTicket}>
        Buy new Ticket!
      </button>
      <h3>{TicketWinning && "Congragulations you won the Lottery !"}</h3>
    </div>
  );
}

// //Second method of Lottery Game using Props
// import { useState } from "react";

// import { genTicket, sum } from "./helper";
// import Ticket from "./assets/Ticket";

// export default function Lottery(n = 3, winningSum = 15) {
//   let [ticket, setTicket] = useState(genTicket(n));
//   let TicketWinning = sum(ticket) === winningSum;

//   let BuyTicket = () => {
//     setTicket(genTicket(n));
//   };
//   return (
//     <div>
//       <h1> Lottery Game!</h1>
//       <Ticket ticket={ticket} />
//       <button className="button" onClick={BuyTicket}>
//         Buy new Ticket!
//       </button>
//       <h3>{TicketWinning && "Congragulations you won the Lottery !"}</h3>
//     </div>
//   );
// }
