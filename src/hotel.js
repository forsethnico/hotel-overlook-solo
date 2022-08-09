class Hotel {
  getAvailableRooms(date, rooms, bookings, roomType) {
    let availableRooms = rooms.filter((room) => {
      let roomBookings = bookings.filter((booking) => {
        return room.number === booking.roomNumber && booking.date === date;
      });
      return roomBookings.length === 0;
    });
    if (roomType && roomType !== "any") {
      availableRooms = availableRooms.filter((room) => {
        return room.roomType === roomType;
      });
    }
    return availableRooms;
  }
}

export default Hotel;
