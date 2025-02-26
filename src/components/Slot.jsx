import React from "react";



const Slot = ({ slot, onSelect }) => {
  return (
    <div 
      className={`p-4 border rounded-lg shadow-md text-center text-white font-semibold transition-all ${slot.status === "booked" ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 cursor-pointer"}`}
      onClick={() => slot.status === "available" && onSelect(slot)}
    >
      {slot.start} - {slot.end}
    </div>
  );
};

export default Slot;
