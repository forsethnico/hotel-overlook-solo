import chai from "chai";
const expect = chai.expect;
import Booking from "../src/booking";
import { bookings } from "./data-test.js";

describe("Booking", () => {
  let booking1, booking2, booking3;

  beforeEach(() => {
    booking1 = new Booking(bookings[0]);
    booking2 = new Booking(bookings[1]);
    booking3 = new Booking(bookings[2]);
  });

  it("should be a function", () => {
    expect(Booking).to.be.a("function");
  });

  it("should instantiate a new booking", () => {
    expect(booking1).to.be.an.instanceOf(Booking);
  });

  it("should have a booking id", () => {
    expect(booking1.id).to.equal("5fwrgu4i7k55hl6to");
  });

  it("should have a user id", () => {
    expect(booking1.userID).to.equal(101);
  });

  it("should have a date", () => {
    expect(booking2.date).to.equal("2023/11/23");
  });

  it("should have a room number", () => {
    expect(booking3.roomNumber).to.equal(3);
  });
});
