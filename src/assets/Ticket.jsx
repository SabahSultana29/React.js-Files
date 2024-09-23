import TicketNum from "./TicketNum";
import "../ticketNum.css";
export default function Ticket({ ticket }) {
  return (
    <div className="TicketNum">
      <span className="Ticket">Ticket =</span>
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}
