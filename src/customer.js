class Customer {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
  }

  getBookings(bookings) {
    let userBookings = bookings.filter((booking) => {
      return booking.userID === this.id;
    });
    userBookings.sort((a,b) => {
      return a.date - b.date
    })
    return userBookings;
  }

  getTotalExpenses(bookings, rooms) {
    let userBookings = this.getBookings(bookings);
    let totalCost = userBookings.reduce((totalExpense, booking) => {
      let foundRoom = rooms.find((room) => room.number === booking.roomNumber);
      totalExpense += foundRoom.costPerNight;
      return totalExpense;
    }, 0);
    return totalCost;
  }

addBooking(date, roomNumber) {
  let newBooking = {
    "userID": this.id, 
    "date": date,
    "roomNumber": parseInt(roomNumber)
  }
  return newBooking
  }
}

export default Customer;
