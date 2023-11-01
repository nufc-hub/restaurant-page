import restaurantLogo from '../media/5087623.png'

 const createHeader = function() {
   const contentDiv = document.querySelector('.content');

   const headerNavContainer = document.createElement('div');
   headerNavContainer.classList.add('header-nav-container');
   contentDiv.appendChild(headerNavContainer);


   const header = document.createElement('header');
   header.classList.add('logo');
   headerNavContainer.appendChild(header);


   const headerText = document.createElement('h3');
   const headerImg = document.createElement('img');
   headerText.textContent = 'Dark Age Diet';
   headerImg.src = restaurantLogo;
   headerImg.alt = 'An icon of a ruin';
   header.appendChild(headerText);
   header.appendChild(headerImg);

   const nav = document.createElement('nav');
   headerNavContainer.appendChild(nav);
   
   
   const tabs = document.createElement('ul');
   nav.appendChild(tabs);
   
   for (let i = 1; i <= 3; i++) {
      
      const li = document.createElement('li');
      const liChild = document.createElement('div');
   
      if (i === 1) {
         liChild.textContent = 'Home';
         liChild.classList.add('homeChild');
      } else if (i === 2) {
         liChild.textContent = 'Menu';
         liChild.classList.add('menuChild');
      } else if (i === 3) {
         liChild.textContent = 'Contact';
         liChild.classList.add('contactChild');
      }
   
      tabs.appendChild(li);
      li.appendChild(a);
   }
}

export default createHeader;