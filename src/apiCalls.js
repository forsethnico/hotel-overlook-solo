import {
    pageLoad,
    assignVariables,
    loadUser
} from './scripts';

//Fetch Requests//

const fetchCustomer = (id) => {
    return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(handleLoginError)
    .then(response => loadUser(response))
    .catch(error => console.log(`API error: ${error.message}`)
}

const fetchCustomers = () => {
    return fetch(`http://localhost:3001/api/v1/customers/`)
    .then(response => response.json())
    .catch(error => console.log(`API error: ${error.message}`));
}

const fetchHotelData = (dataType) => {
    return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then(response => response.json())
    .catch(error => console.log(`API error: ${error.message}`))
}

const getHotelData = () => {
    Promise.all([fetchHotelData('bookings'), fetchHotelData('rooms')])
    .then(responses => assignVariables(responses))
    .then(() => pageLoad());
}

//POST Request//

const bookRoom = (customer, dateSelected, roomNum) => {
    return fetchHotelData((bookings), {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customerId: customer.id,
            date: dateSelected,
            roomNumber: roomNum
        })
    })
    .then(handlePostError)
    .then(() => //update dom to show confirmation view)
    .then(() => fetchHotelData())
    .catch(error => console.log(`API error: ${error.message}`))
}

//Error Handling//

function handleLoginError(response) {
 if(!response.ok) {
    throw new Error('User does not exist');
 } else {
 return response.json();
 }
}

function handlePostError(response) {
    if(!response.ok) {
       throw new Error('Could not update!');
    } else {
    return response.json();
    }
   }

export { 
getHotelData,
fetchPhotos,
fetchCustomer,
fetchCustomers,
bookRoom
 };