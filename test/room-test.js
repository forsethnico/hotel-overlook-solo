import chai from 'chai';
const expect = chai.expect;
import Room from '../src/room';
import { customers, rooms, bookings } from './data-test.js';

describe('Room', () => {
    let 
    room1,
    room2,
    room3;

    beforeEach(() => {
        room1 = new Room(rooms[0])
        room2 = new Room(rooms[1])
        room3 = new Room(rooms[2])
    });

    it('should be a function', () => {
        expect(Room).to.be.a('function')
    });

    it('should instantiate a new instance of Room', () => {
        expect(room1).to.be.an.instanceOf(Room)
    });

    it('should have a room number', () => {
        expect(room2.number).to.equal(2);
    });

    it('should have a room type', () => {
        expect(room2.roomType).to.equal('suite');
    });

    it('should tell whether the room has a bidet', () => {
        expect(room1.bidet).to.equal(true);
    });

    it('should tell whether the room does not have a bidet', () => {
        expect(room2.bidet).to.equal(false);
    });

    it('should specify a bed size', () => {
        expect(room3.bedSize).to.equal('king');
    });

    it('should specify a number of beds', () => {
        expect(room2.numBeds).to.equal(2);
    });    

    it('should specify a cost per night', () => {
        expect(room2.costPerNight).to.equal(477.38);
    });

    it('should have a default value of being available to book', () => {
        expect(room2.isAvailable).to.equal(true);
    });

    // it('show an image that corresponds to room type', () => {
    //     expect(room1.image).to.equal(images[2]);
    // });

});
