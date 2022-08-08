import chai from "chai";
const expect = chai.expect;
import Hotel from "../src/hotel";
import { rooms, bookings } from "./data-test.js";

describe("Hotel", () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel();
  });

  it("should be a function", () => {
    expect(Hotel).to.be.a("function");
  });

  it("should instantiate a new hotel", () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it("should provide available rooms for date", () => {
    expect(
      hotel.getAvailableRooms("2022/02/22", rooms, bookings)
    ).to.deep.equal([
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38,
      },
      {
        number: 3,
        roomType: "single room",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 491.14,
      },
    ]);
  });

  it("should show no rooms if date has no vacancy", () => {
    expect(
      hotel.getAvailableRooms("2022/01/24", rooms, bookings)
    ).to.deep.equal([]);
  });

  it("should filter available rooms by room type", () => {
    expect(
      hotel.getAvailableRooms("2022/02/22", rooms, bookings, "suite")
    ).to.deep.equal([
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38,
      },
    ]);
  });

  it("should show no availabilty if room type is not available", () => {
    expect(
      hotel.getAvailableRooms("2022/02/22", rooms, bookings, "junior suite")
    ).to.deep.equal([]);
  });
});
