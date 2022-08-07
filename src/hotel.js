class Hotel {
  getAvailableRooms(date, rooms, bookings) {
    let availableRooms = rooms.filter((room) => {
      let roomBookings = bookings.filter((booking) => {
        return room.number === booking.roomNumber && booking.date === date;
      });
      return roomBookings.length === 0;
    });
    return availableRooms;
  }

  filterRoomType(date, rooms, bookings, roomType) {
    let availableRooms = this.getAvailableRooms(date, rooms, bookings);
    let roomTypeAvailable = availableRooms.filter((room) => {
      return room.roomType === roomType;
    });
    return roomTypeAvailable;
  }
}

export default Hotel;
