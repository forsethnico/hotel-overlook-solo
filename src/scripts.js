//---Imports---//
import "./css/styles.css";
import { getHotelData, fetchCustomer } from "./apiCalls";
import Customer from "./customer";
import Booking from "./booking";
import Hotel from "./hotel";
import Room from "./room";
import "./images/glacier.png";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/turing-logo.png'

//---Query Selectors---//

//Buttons//
const loginBtn = document.querySelector(".login-button");
const logoutBtn = document.querySelector(".logout-button");
const bookingBtn = document.querySelector(".book-now-button");
const profileBtn = document.querySelector(".profile-button");
const checkAvailBtn = document.querySelector(".check-availability-btn");

//---Sections---//
const totalExpenses = document.querySelector(".total-expenses");
const stayResults = document.querySelector(".stay-results");
const passwordField = document.getElementById("pwd");
const usernameField = document.getElementById("username");
const loginError = document.querySelector(".error-message");
const userWelcome = document.getElementById("userWelcome");
const mainPage = document.querySelector(".main-page");
const profilePage = document.querySelector(".profile-page");
const loginForm = document.querySelector(".login-form");
const checkAvailSection = document.querySelector(".check-availability");
const availableRoomsSection = document.querySelector(".available-rooms");
const roomTypeChoice = document.getElementById("selectRoomType");
const datePicked = document.getElementById("arrivalDate");
const successMessage = document.querySelector(".success-message");

//---Event Listeners---//
window.addEventListener("load", getAllData);
loginBtn.addEventListener("click", logIn);
profileBtn.addEventListener("click", showUserProfile);
logoutBtn.addEventListener("click", showMainPage);
bookingBtn.addEventListener("click", showBookingPage);
checkAvailBtn.addEventListener("click", checkAvailability);
availableRoomsSection.addEventListener("click", createNewBooking);

//---Global Variables---//
let bookingData,
  roomData,
  rooms,
  bookings,
  hotel,
  allCustomerData,
  currentUser;

//---Functions---//
function getAllData () {
getHotelData().then((responses) => {
  bookingData = responses[0].bookings;
  roomData = responses[1].rooms;
  allCustomerData = responses[2].customers;
  hotel = new Hotel();
  rooms = roomData.map((roomInfo) => {
    return new Room(roomInfo);
  });
  bookings = bookingData.map((bookingInfo) => {
    return new Booking(bookingInfo);
  });
  setCurrentDate();
});
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function checkEmptyFields(username, password) {
  let emptyFields = false;
  if (username === "") {
    emptyFields = true;
    usernameField.setAttribute("placeholder", "Enter username");
  }
  if (password === "") {
    emptyFields = true;
    passwordField.setAttribute("placeholder", "Enter password");
  }
  return emptyFields;
}

function logIn(event) {
  event.preventDefault();
  const username = usernameField.value;
  const password = passwordField.value;
  if (!checkEmptyFields(username, password)) {
    try {
      setUser(username, password);
    } catch (error) {
      loginError.innerText = error.message;
    }
  }
}

function setUser(username, password) {
  passwordField.value = "";
  usernameField.value = "";
  if (password !== "overlook2021") {
    throw new Error("Invalid user password.");
  }
  let id = username.slice(8);
  if (id.startsWith(0)) {
    throw new Error("Invalid user name.");
  } else if (id) {
    fetchCustomer(id)
      .then((response) => {
        currentUser = new Customer(response);
        showUserProfile();
      })
      .catch((error) => {
        loginError.innerText = error.message;
      });
  }
}

const addNewBooking = (newBooking) => {
    fetch('http://localhost:3001/api/v1/bookings', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newBooking)
    })
    .then(response => {
        if(!response.ok) {
            throw new Error(response.statusText);
        } else {
            return response.json();
        }
    })
    .then(newBooking => {
      displaySuccessMessage(newBooking.message);
      getAllData();
      setTimeout(showUserProfile, 5000);
    })
    .catch(err => {
        errorMessage.innerText = err.message;
    })
}

function displayUserWelcome() {
  userWelcome.innerText = `Hello, ${currentUser.name}`;
}

function displayTotalExpenses() {
  let expenses = currentUser.getTotalExpenses(bookings, rooms);
  totalExpenses.innerHTML = "";
  totalExpenses.innerHTML = `$${expenses}`;
}

function displayUserBookings() {
  let userBookings = currentUser.getBookings(bookings);
  stayResults.innerHTML = "";
  if (userBookings.length > 0) {
    userBookings.forEach((booking) => {
      stayResults.innerHTML += `<section class="user-booking">
          <p class ="booking-date">${booking.date}</p>
          <p class ="booking-room-number">Room Number: ${booking.roomNumber}</p>
          <br>
      </section>`;
    });
  } else {
    stayResults.innerHTML = `<section class="user-booking">
    <p class ="no-booking">You have no bookings!</p>
    </section>`;
  }
}

function showMainPage() {
  hide(logoutBtn);
  hide(profilePage);
  hide(profileBtn);
  show(loginForm);
  show(mainPage);
  hide(bookingBtn);
  hide(checkAvailSection)
  clearForm();
  currentUser = null;
}

function clearForm() {
  loginError.innerText = "";
  passwordField.value = "";
  usernameField.value = "";
  usernameField.setAttribute("placeholder", "");
  passwordField.setAttribute("placeholder", "");
}

function showUserProfile() {
  hide(mainPage);
  show(profilePage);
  hide(profileBtn);
  hide(loginForm);
  show(logoutBtn);
  show(bookingBtn);
  hide(successMessage);
  displayUserWelcome();
  displayTotalExpenses();
  displayUserBookings();
  hide(checkAvailSection);
}

function showBookingPage() {
  hide(mainPage);
  hide(loginForm);
  hide(profilePage);
  show(profileBtn);
  show(logoutBtn);
  hide(bookingBtn);
  show(checkAvailSection);
  hide(successMessage);
  roomTypeChoice.value = "any";
  availableRoomsSection.innerHTML = '';
  setCurrentDate();
}

function checkAvailability() {
  let selectedDate = getDate(datePicked.value);
  let selectedRoomType = roomTypeChoice.value;
  let availableRooms = hotel.getAvailableRooms(
    selectedDate,
    rooms,
    bookings,
    selectedRoomType
  );
  availableRoomsSection.innerHTML = "";
  if (availableRooms.length > 0) {
    availableRooms.forEach((room) => {
      availableRoomsSection.innerHTML += `<section class="room-details">
        <p class="room-detail">Room Number: ${room.number}</p>
        <p class="room-detail">Room Type: ${room.roomType}</p>
        <p class="room-detail">Bed Size: ${room.bedSize}</p>
        <p class="room-detail">Number of Beds: ${room.numBeds}</p>
        <p class="room-detail">Cost per Night: $${room.costPerNight}</p>
        <button class="book-me-btn" id=${room.number}>Book me!</button>
    </section>`;
    });
  } else {
    availableRoomsSection.innerHTML = `<section class="room-details">
  <p class ="no-booking">Sorry, no rooms available! Try again with a different date or room type.</p>
  </section>`;
  }
};

function getDate(date) {
  return date.split("-").join("/");
};

function setCurrentDate() {
  let currentDate = new Date().toJSON().slice(0, 10);
  datePicked.value = currentDate;
  datePicked.min = currentDate;
};

function createNewBooking(event) {
  event.preventDefault();
  if (event.target.classList.contains('book-me-btn')) {
    let date = getDate(datePicked.value)
    addNewBooking(currentUser.addBooking(date, event.target.id))
  }
}

function deleteBookingBtn(event) {
  event.preventDefault();
  if(event.target.classList.contains('delete-btn')) {
    deleteBooking(hotel.deleteBooking(event.target.id))
  }
}

function displaySuccessMessage(message) {
  successMessage.innerHTML = `<section class="new-booking">
  <p>${message}</p>
  </section>`
  show(successMessage);
};
