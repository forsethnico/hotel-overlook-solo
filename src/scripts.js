//---Imports---//
import "./css/styles.css";
import apiCalls from "./apiCalls";
import { getHotelData } from "./apiCalls";
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
const bookNowBtn = document.querySelector(".book-now-button");
const profileBtn = document.querySelector(".profile-button");
const homeBtn = document.querySelector(".home-button");

//---Sections---//
const totalExpenses = document.querySelector(".total-expenses");
const stayResults = document.querySelector(".stay-results");
const passwordField = document.getElementById("pwd");
const usernameField = document.getElementById("username");
const loginError = document.querySelector(".error-message");
const userWelcome = document.getElementById("userWelcome");
const mainPage = document.querySelector(".main-page");
const profilePage = document.querySelector(".profile-page");
const loginForm = document.querySelector('.login-form')

//---Event Listeners---//
window.addEventListener("load", getHotelData);
//loginBtn.addEventListener('click', () => logIn(event))
profileBtn.addEventListener("click", showUserProfile);
logoutBtn.addEventListener('click', showMainPage);

//---Global Variables---//
let bookingData,
  roomData,
  rooms,
  bookings,
  allCustomerData,
  customerIdData,
  hotel,
  currentUser;

//---Functions---//

getHotelData().then((responses) => {
  bookingData = responses[0].bookings;
  roomData = responses[1].rooms;
  allCustomerData = responses[2].customers;
  customerIdData = responses[3];
  hotel = new Hotel();
  currentUser = new Customer(customerIdData);
  rooms = roomData.map((roomInfo) => {
    return new Room(roomInfo);
  });
  bookings = bookingData.map((bookingInfo) => {
    return new Booking(bookingInfo);
  });
});

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

// function checkEmptyFields(username, password) {
//   let emptyFields = false;
//   if (username === "") {
//     emptyFields = true;
//     usernameField.setAttribute("placeholder", "Username is required!");
//   }
//   if (password === "") {
//     emptyFields = true;
//     passwordField.setAttribute("placeholder", "Password is required!");
//   }
//   return emptyFields;
// }

// function logIn(event) {
//   event.preventDefault();
//   const username = usernameField.value;
//   const password = passwordField.value;
//   if (!checkEmptyFields(username, password)) {
//     try {
//       setUser(username, password);
//     } catch (error) {
//       loginError.innerText = error;
//     }
//   }
// }

// function addNewBookingToPost(event) {
//     event.preventDefault();
//     newBooking = {
//     "userID": 48,
//     "date": "2023/09/23",
//     "roomNumber": 4
//     }
//     addNewBookingToPost(newBooking);
// }

// const addNewBooking = (newBooking) => {
//     fetch('http://localhost:3001/api/v1/bookings', {
//         method: "POST",
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(newBooking)
//     })
//     .then(response => {
//         if(!response.ok) {
//             throw new Error(response.statusText);
//         } else {
//             return response.json();
//         }
//     })
//     .then(booking => {
//         //do stuff
//     })
//     .catch(err => {
//         errorMessage.innerText = err.message;
//     })
// }

function displayUserWelcome() {
  userWelcome.innerText = `Hello, ${currentUser.name}`;
}

function displayTotalExpenses() {
  let expenses = currentUser.getTotalExpenses(bookings, rooms);
  totalExpenses.innerHTML = '';
  totalExpenses.innerHTML = `$${expenses}`;
}

function displayUserBookings() {
  let userBookings = currentUser.getBookings(bookings);
  stayResults.innerHTML = '';
  if (userBookings.length > 0) {
    userBookings.forEach((booking) => {
      stayResults.innerHTML += `<section class="user-booking">
          <p class ="booking-date">${booking.date}</p>
          <p class ="booking-room-number">Room Number: ${booking.roomNumber}</p><br>
      </section>`;
    });
  } else {
    stayResults.innerHTML = `<section class="user-booking">
    <p class ="no-booking">You have no bookings!</p>
    </section>`;
  }
}

function showUserProfile() {
  hide(mainPage);
  show(profilePage);
  hide(loginForm)
  show(logoutBtn);
  show(bookNowBtn);
  hide(profileBtn);
  displayUserWelcome();
  displayTotalExpenses();
  displayUserBookings();
}

// function setUser(username, password) {
//   passwordField.value = "";
//   usernameField.value = "";
//   checkPassword(password);
//   checkUsername(username);
// }

// function checkPassword(password) {
//   if (password !== "overlook2021") {
//     throw new Error("Invalid password");
//   }
// }

// function checkUsername(username) {
// if(username)
// }

function showMainPage() {
  hide(logoutBtn);
  hide(profilePage);
  show(loginForm);
  show(mainPage);
  hide(bookNowBtn);
}