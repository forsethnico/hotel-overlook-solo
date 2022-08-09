const fetchCustomer = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("User does not exist.");
      } else {
        return response.json();
      }
    }
  );
};

const fetchHotelData = (dataType) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then((response) => response.json())
    .catch((error) => console.log(`API error: ${error.message}`));
};

const getHotelData = () => {
  const result = Promise.all([
    fetchHotelData("bookings"),
    fetchHotelData("rooms"),
    fetchHotelData("customers"),
  ]).then((responses) => {
    return responses;
  });
  return result;
};

export { getHotelData, fetchCustomer };
