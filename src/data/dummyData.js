export const bookingData = {
  machine: {
    id: 1,
    name: "Dummy Machine A",
    image: "dummy_machine_a.png",
    description: "This is a dummy machine for demonstration purposes.",
    lab_id: 10
  },
  rules: {
    id: 1,
    machineStartTime: "08:00:00",
    machineEndTime: "18:00:00",
    lunchStartTime: "12:00:00",
    lunchEndTime: "13:00:00",
    bookingBeforeHr: 2,
    cancelBeforeHr: 1,
    slot_duration: 1,
    machinePerSlotCost: "20.00",
    machine_id: 1
  },
  unavailableSlots: {
    date: "2025-03-10",
    unavailableSlots: [
      {
        slotId: 101,
        machineId: 5,
        openingTime: "09:00:00",
        closingTime: "10:00:00",
        reason: "Booked"
      },
      {
        slotId: 102,
        machineId: 5,
        openingTime: "10:00:00",
        closingTime: "11:00:00",
        reason: "Maintenance"
      }
    ],
    holidays: [
      {
        holidayId: 1,
        date: "2025-03-10",
        name: "National Holiday",
        description: "Public holiday for national celebration."
      }
    ]
  }
};
