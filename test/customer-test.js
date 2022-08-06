import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/booking';
import Customer from '../src/customer';
//import Hotel from '../src/hotel';
//import Room from '../src/room';
import { customers, rooms, bookings } from './data-test.js'

describe('Customer', () => {
    let customer1,
    customer2, 
    room1,
    room2,
    room3,
    booking1,
    booking2,
    booking3,
    allBookings;
   // allRooms,
    //hotel;

    beforeEach(() => {
        customer1 = new Customer(customers[0]);
        customer2 = new Customer(customers[1]);
        booking1 = new Booking(bookings[0]);
        booking2 = new Booking(bookings[1]);
        booking3 = new Booking(bookings[2]);
        // room1 = new Room(rooms[0]);
        // room2 = new Room(rooms[1]);
        // room3 = new Room(rooms[2]);
        allBookings = [booking1, booking2, booking3];
        //allRooms = [room1, room2, room3];
        //hotel = new Hotel(allBookings, allRooms);
    })

    it('should be a function', () => {
        expect(Customer).to.be.a('function');
    });

    it('should instantiate a new customer', () => {
        expect(customer1).to.be.an.instanceOf(Customer);
    });

    it('should have a customer id', () => {
        expect(customer1.id).to.equal(101);
    });

    it('should have a customer name', () => {
        expect(customer1.name).to.equal('Shepherd Book');
    });

    it('should be able to get all user bookings', () => {
        expect(customer1.getBookings(bookings)).to.deep.equal([
            {
                id:"5fwrgu4i7k55hl6to",
                userId:101,
                date:"2022/02/22",
                roomNumber:1
            }, 
            {
                id:"5fwrgu4i7k55hl6tr",
                userId:101,
                date:"2022/01/24",
                roomNumber:1
            }
        ])  
    });

    it('should calculate total room expenses', () => {
        expect(customer1.getTotalExpenses(bookings, rooms)).to.equal(716.8);
    });

    // it('should be able to add a booking', () => {
    //     expect(customer1.bookings).to.deep.equal();
    // });

})