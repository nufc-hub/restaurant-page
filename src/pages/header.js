import restaurantLogo from '../media/5087623.png'

 const createHeader = function() {
   const contentDiv = document.querySelector('.content');

   // headerNavContainer - child of contentDiv.

   const headerNavContainer = document.createElement('div');

   headerNavContainer.id = 'header-nav-container';

   contentDiv.appendChild(headerNavContainer);

   // header - contains restaurant name and logo - child of headerNavContainer.

   const header = document.createElement('header');
   const headerText = document.createElement('h3');
   const headerImg = document.createElement('img');

   headerText.textContent = 'Dark Age Diet';

   headerImg.src = restaurantLogo;

   headerImg.alt = 'An icon of a ruin';

   header.appendChild(headerText);
   header.appendChild(headerImg);
   headerNavContainer.appendChild(header);

   // nav - child of headerNavContainer.

   const nav = document.createElement('nav');

   // tabs - child of nav.

   const tabs = document.createElement('ul');

   // li - child of tabs.

   for (let i = 1; i <= 3; i++) {
      
      const li = document.createElement('li');
   
      if (i === 1) {
         li.textContent = 'Home';
         li.id = 'home';
      } else if (i === 2) {
         li.textContent = 'Menu';
         li.id = 'menu';
      } else if (i === 3) {
         li.textContent = 'Contact';
         li.id = 'contact';
      }
   
      tabs.appendChild(li);
   }
   
   nav.appendChild(tabs);
   headerNavContainer.appendChild(nav);
}

export default createHeader;