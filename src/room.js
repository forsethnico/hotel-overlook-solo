class Room {
  constructor(room) {
    this.number = room.number;
    this.roomType = room.roomType;
    this.bidet = room.bidet;
    this.bedSize = room.bedSize;
    this.numBeds = room.numBeds;
    this.costPerNight = room.costPerNight;
    this.isAvailable = true;
    //this.image;
  }

  //This section is still a work in progress
//   setImages(images) {
//     if (this.numBeds === 2) {
//       this.image = images[0];
//     } else if (this.roomType === "single room") {
//       this.image = images[1];
//     } else if (this.roomType === "residential suite") {
//       this.image = images[2];
//     } else {
//       this.image = images[3];
//     }
//   }

}

export default Room;
