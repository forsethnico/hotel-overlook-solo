//---Imports---//
import './css/styles.css';
//import apiCalls from './apiCalls';
import Customer from './customer'
import Booking from './booking'
import Hotel from './hotel'
import Room from './room'
import './images/glacier.png';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/turing-logo.png'

//---Query Selectors---//

//Buttons//
const loginBtn = document.querySelector('.login-button')
const logoutBtn = document.querySelector('.logout-button')
const bookNowBtn = document.querySelector('.book-now-btn')
const profileBtn = document.querySelector('.profile-button')
const homeBtn = document.querySelector('.home-button');

bookNowBtn.addEventListener('click', view)
