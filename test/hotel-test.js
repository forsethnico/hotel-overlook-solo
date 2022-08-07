import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/booking';
import Hotel from '../src/hotel';
import Room from '../src/room';
import { rooms , bookings } from './data-test.js'

describe('Hotel', () => {
    let
    booking1,
    booking2,
    booking3,
    room1,
    room2,
    room3,
    allRooms,
    allBookings,
    hotel;

    beforeEach(() => {
        room1 = new Room(rooms[0]);
        room2 = new Room(rooms[1]);
        room3 = new Room(rooms[2]);
        booking1 = new Booking(bookings[0]);
        booking2 = new Booking(bookings[1]);
        booking3 = new Booking(bookings[2]);
        hotel = new Hotel()
    });

    it('should be a function', () => {
        expect(Hotel).to.be.a('function');
    });

    it('should instantiate a new hotel', () => {
        expect(hotel).to.be.an.instanceOf(Hotel);
    });

    it('should provide available bookings for date', () => {
        expect(hotel.getAvailableRooms("2022/02/22", rooms, bookings)).to.deep.equal([{
            number: 2,
            roomType: 'suite',
            bidet: false,
            bedSize: 'full',
            numBeds: 2,
            costPerNight: 477.38
        },
        {
            number: 3,
            roomType: 'single room',
            bidet: false,
            bedSize: 'king',
            numBeds: 1,
            costPerNight: 491.14
        }])
    });

    it('should show no bookings if date has no vacancy', () => {
        expect(hotel.getAvailableRooms("2022/01/24", rooms, bookings)).to.deep.equal([])
    });

    it('should filter available rooms by room type', () => {
        expect(hotel.filterRoomType("2022/02/22", rooms, bookings, "suite")).to.deep.equal([{
            number: 2,
            roomType: 'suite',
            bidet: false,
            bedSize: 'full',
            numBeds: 2,
            costPerNight: 477.38
        }])
    });    

    it('should show no availabilty if room type is not available', () => {
        expect(hotel.filterRoomType("2022/02/22", rooms, bookings, "junior suite")).to.deep.equal([])
    }); 

})   