function addContactContent() {

    const contentDiv = document.querySelector('.content');

    // Main Div parent container - child of contentDiv

    const mainDiv = document.createElement('div');

    mainDiv.setAttribute('id', 'main-contact');

    contentDiv.appendChild(mainDiv);

    // Form - child of mainDiv

    const contactForm = document.createElement('form');

    contactForm.action = ''; // Insert server address when necessary.

    contactForm.method = 'post';

    contactForm.setAttribute('id', 'form-contact');

    mainDiv.appendChild(contactForm);

    // Header and input container - children of contactForm.

    const formHeader = document.createElement('h2');
    const bookingDetails = document.createElement('div'); // Input elements container.

    formHeader.setAttribute('id', 'form-header');
    bookingDetails.setAttribute('id', 'booking-details');

    formHeader.textContent = 'Make a reservation'

    contactForm.appendChild(formHeader);
    contactForm.appendChild(bookingDetails); 

    // Input containers, email input & button

    const dateContainer = document.createElement('div');
    const timeContainer = document.createElement('div');
    const guestsContainer = document.createElement('div');
    const dinerEmail = document.createElement('input');
    const reservationButton = document.createElement('button');

    dateContainer.setAttribute('id', 'date-container');
    timeContainer.setAttribute('id', 'time-container');
    guestsContainer.setAttribute('id', 'guest-container');
    dinerEmail.setAttribute('id', 'diner-email');
    reservationButton.setAttribute('id', 'reservation-button');

    dinerEmail.type = 'email';

    dinerEmail.id = 'diner_email';

    dinerEmail.name = 'diner_email';

    dinerEmail.placeholder = 'Enter your email';

    bookingDetails.appendChild(dateContainer);
    bookingDetails.appendChild(timeContainer);
    bookingDetails.appendChild(guestsContainer);
    bookingDetails.appendChild(dinerEmail);
    bookingDetails.appendChild(reservationButton);

    // Date, time & number of guests input

    const labelBookingDate = document.createElement('label');
    const labelBookingTime = document.createElement('label');
    const labelNumberOfGuests = document.createElement('label');
    const inputBookingDate = document.createElement('input');
    const inputBookingTime = document.createElement('input');
    const inputNumberOfGuests = document.createElement('input');
    const dropDownSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    labelBookingDate.setAttribute('for', 'booking_date');
    labelBookingDate.setAttribute('id', 'label-booking-date');
    labelBookingTime.setAttribute('for', 'booking_time');
    labelBookingTime.setAttribute('id', 'label-booking-time');
    labelNumberOfGuests.setAttribute('for', 'guests');
    labelNumberOfGuests.setAttribute('id', 'label-guests');
    inputBookingDate.setAttribute('id', 'input-booking-date');
    inputBookingTime.setAttribute('id', 'input-booking-time');
    inputNumberOfGuests.setAttribute('id', 'input-guests');

    labelBookingDate.textContent = 'Date';
    labelBookingTime.textContent = 'Time';
    labelNumberOfGuests.textContent = 'Guests';

    inputBookingDate.type = 'date';
    inputBookingTime.type = 'time';
    inputNumberOfGuests.type = 'number';

    inputBookingDate.id = 'booking_date';
    inputBookingTime.id = 'booking_time';
    inputNumberOfGuests.id = 'guests';

    inputBookingDate.name = 'booking_date';
    inputBookingTime.name = 'booking_time';
    inputNumberOfGuests.name = 'no_of_guests';


    // The 'use' element is utilized to reference local SVG file.
    const useDropDownSVG = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useDropDownSVG.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '../src/media/chevron-down.svg');

    dropDownSVG.appendChild(useDropDownSVG);
    labelBookingDate.appendChild(dropDownSVG);
    labelBookingTime.appendChild(dropDownSVG);
    labelNumberOfGuests.appendChild(dropDownSVG);
}

export default addContactContent;