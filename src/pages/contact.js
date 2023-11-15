import mapImage from '../media/google-placeholder.png';

function addContactContent() {

    const contentDiv = document.querySelector('.content');

    // Main Div parent container - child of contentDiv.

    const mainDiv = document.createElement('div');

    mainDiv.id = 'main-contact';

    contentDiv.appendChild(mainDiv);

    // Container for form and picture(?) - child of mainDiv.

    const formImgContainer = document.createElement('section');

    formImgContainer.id = 'form-img-container';

    mainDiv.appendChild(formImgContainer);

    // Form - child of formImgContainer.

    const contactForm = document.createElement('form');

    contactForm.action = ''; // Insert server address when necessary.

    contactForm.method = 'post';

    contactForm.id = 'form-contact';

    formImgContainer.appendChild(contactForm);

    // Header and input container - children of contactForm.

    const formHeader = document.createElement('h2');
    const bookingDetails = document.createElement('div'); // Input elements container.

    formHeader.id = 'form-header';
    bookingDetails.id = 'booking-details';

    formHeader.textContent = 'Make a reservation';

    contactForm.appendChild(formHeader);
    contactForm.appendChild(bookingDetails); 

    // Input containers, email input & button.

    const dateContainer = document.createElement('div');
    const timeContainer = document.createElement('div');
    const guestsContainer = document.createElement('div');
    const dinerEmail = document.createElement('input');
    const reservationButton = document.createElement('button');

    dateContainer.id = 'date-container';
    timeContainer.id = 'time-container';
    guestsContainer.id = 'guest-container';
    dinerEmail.id = 'diner-email';
    reservationButton.id = 'reservation-button';

    dinerEmail.type = 'email';

    dinerEmail.name = 'diner_email';

    dinerEmail.placeholder = 'Enter your email';

    reservationButton.textContent = 'Confirm availability';

    bookingDetails.appendChild(dateContainer);
    bookingDetails.appendChild(timeContainer);
    bookingDetails.appendChild(guestsContainer);
    bookingDetails.appendChild(dinerEmail);
    bookingDetails.appendChild(reservationButton);

    // Date, time & number of guests input.

    const labelBookingDate = document.createElement('label');
    const labelBookingTime = document.createElement('label');
    const labelNumberOfGuests = document.createElement('label');
    const inputBookingDate = document.createElement('input');
    const inputBookingTime = document.createElement('input');
    const inputNumberOfGuests = document.createElement('input');

    labelBookingDate.htmlFor = 'input-booking-date';
    labelBookingDate.id = 'label-booking-date';
    labelBookingTime.htmlFor = 'input-booking-time';
    labelBookingTime.id = 'label-booking-time';
    labelNumberOfGuests.htmlFor = 'input-guests';
    labelNumberOfGuests.id = 'label-guests';
    inputBookingDate.id = 'input-booking-date';
    inputBookingTime.id = 'input-booking-time';
    inputNumberOfGuests.id = 'input-guests';


    inputBookingDate.type = 'date';
    inputBookingTime.type = 'time';
    inputNumberOfGuests.type = 'number';

    inputBookingDate.name = 'booking_date';
    inputBookingTime.name = 'booking_time';
    inputNumberOfGuests.name = 'no_of_guests';

    inputBookingDate.placeholder = 'Add date';

    labelBookingDate.textContent = 'Date';
    labelBookingTime.textContent = 'Time';
    labelNumberOfGuests.textContent = 'Guests';

    dateContainer.appendChild(labelBookingDate);
    dateContainer.appendChild(inputBookingDate);
    timeContainer.appendChild(labelBookingTime);
    timeContainer.appendChild(inputBookingTime);
    guestsContainer.appendChild(labelNumberOfGuests);
    guestsContainer.appendChild(inputNumberOfGuests);

    // Image - child of formImgContainer.

    const mapImg = document.createElement('img');

    mapImg.id = 'map-img';
    mapImg.alt = 'Map of example restaurant location.';
    mapImg.src = mapImage;

    formImgContainer.appendChild(mapImg);

    // Container for all contact details - child of mainDiv.

    const contactDetails = document.createElement('section');

    contactDetails.id = 'contact-details';

    mainDiv.appendChild(contactDetails);

    // Containers for each type of contact - child of contactDetails.

    const restaurantLocation = document.createElement('div');
    const restaurantHours = document.createElement('div');
    const restaurantContact = document.createElement('div');
    
    // Content for each type of contact - child of containers.
    
    const headerLocation = document.createElement('h2');
    const headerHours = document.createElement('h2');
    const headerContact = document.createElement('h2');
    const addressOne = document.createElement('p');
    const addressTwo = document.createElement('p');
    const hoursOne = document.createElement('p');
    const hoursTwo = document.createElement('p');
    const restaurantPhoneNumber = document.createElement('p');
    const RestaurantEmail = document.createElement('p');

    restaurantLocation.id = 'restaurant-location';
    restaurantHours.id = 'restaurant-hours';
    restaurantContact.id = 'restaurant-contact';
    headerLocation.id = 'header-location';
    headerHours.id = 'header-hours';
    headerContact.id = 'header-contact';
    addressOne.id = 'address-one';
    addressTwo.id = 'address-two';
    hoursOne.id = 'hours-one';
    hoursTwo.id = 'hours-two';
    restaurantPhoneNumber.id = 'restaurant-phone-number';
    RestaurantEmail.id = 'restaurant-email';

    headerLocation.textContent = 'Location';
    headerHours.textContent = 'Hours';
    headerContact.textContent = 'Contact';
    addressOne.textContent = 'Cabbage Farm';
    addressTwo.textContent = 'Cabbage Cottage';
    hoursOne.textContent = 'Open - Summer';
    hoursTwo.textContent = 'Closed - Winter';
    restaurantPhoneNumber.textContent = 'Phone - 01010101';
    RestaurantEmail.textContent = 'Email - cabbage@head.com';

    contactDetails.appendChild(restaurantLocation);
    contactDetails.appendChild(restaurantHours);
    contactDetails.appendChild(restaurantContact);
    restaurantLocation.appendChild(headerLocation);
    restaurantLocation.appendChild(addressOne);
    restaurantLocation.appendChild(addressTwo);
    restaurantHours.appendChild(headerHours);
    restaurantHours.appendChild(hoursOne);
    restaurantHours.appendChild(hoursTwo);
    restaurantContact.appendChild(headerContact);
    restaurantContact.appendChild(restaurantPhoneNumber);
    restaurantContact.appendChild(RestaurantEmail);

}

export default addContactContent;