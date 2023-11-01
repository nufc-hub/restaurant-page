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
   
      if (i === 1) {
         li.textContent = 'Home';
         li.classList.add('tab')
         li.setAttribute('id', 'home');;
      } else if (i === 2) {
         li.textContent = 'Menu';
         li.classList.add('tab');
         li.setAttribute('id', 'menu');
      } else if (i === 3) {
         li.textContent = 'Contact';
         li.classList.add('tab');
         li.setAttribute('id', 'contact');
      }
   
      tabs.appendChild(li);
   }
}

export default createHeader;