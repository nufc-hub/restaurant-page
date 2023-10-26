const contentDiv = document.querySelector('.content');

initializePage();

function createHeader() {
   const headerNavContainer = document.createElement('div');
   headerNavContainer.classList.add('header-nav-container');
   contentDiv.appendChild(headerNavContainer);


   const header = document.createElement('header');
   header.classList.add('logo');
   headerNavContainer.appendChild(header);


   const headerText = document.createElement('h3');
   const headerImg = document.createElement('img');
   headerText.textContent = 'Dark Age Diet';
   headerImg.src = '../src/media/5087623.png';
   headerImg.alt = 'An icon of a ruin';
   header.appendChild(headerText);
   header.appendChild(headerImg);

   return {
      header,
      headerNavContainer
   };
}

function createNav(headerNavContainer) {
   const nav = document.createElement('nav');
   headerNavContainer.appendChild(nav);
   
   
   const tabs = document.createElement('ul');
   nav.appendChild(tabs);
   
   for (let i = 1; i <= 3; i++) {
      
      const li = document.createElement('li');
      const a = document.createElement('a');
   
      if (i === 1) {
         a.textContent = 'Home';
         a.href = ''
      } else if (i === 2) {
         a.textContent = 'Menu';
         a.href = ''
      } else if (i === 3) {
         a.textContent = 'Contact';
         a.href = ''
      }
   
      tabs.appendChild(li);
      li.appendChild(a);
   }

   return nav;
}

function createMainDiv() {
   const mainDiv = document.createElement('div');
   mainDiv.classList.add('main');
   contentDiv.appendChild(mainDiv);

   return mainDiv;
}


function createMainDivElements(mainDiv) {
   const mainImg = document.createElement('img');
   mainImg.classList.add('main-img');
   mainImg.src = '../src/media/pngimg.com - cabbage_PNG8785-min-resize2.png'
   mainImg.alt = 'An uncooked green cabbage head';
   const sloganContainer = document.createElement('div');
   sloganContainer.classList.add('slogan-container');
   mainDiv.appendChild(mainImg);
   mainDiv.appendChild(sloganContainer);

   return {
      mainImg,
      sloganContainer
   };
}


function createSlogan(sloganContainer) {
   const sloganDiv = document.createElement('div');
   sloganDiv.classList.add('slogan');
   
   const textNodeOne = document.createTextNode('100% CABBAGE,');
   const textNodeTwo = document.createTextNode('...');
   const textNodeThree = document.createTextNode('...DAY');
   
   const lineBreak = document.createElement('br')
   
   const spanElement = document.createElement('span');
   spanElement.textContent = 'EVERY';
   
   sloganDiv.appendChild(textNodeOne);
   sloganDiv.appendChild(lineBreak);
   sloganDiv.appendChild(textNodeTwo);
   sloganDiv.appendChild(spanElement);
   sloganDiv.appendChild(textNodeThree);
   
   sloganContainer.appendChild(sloganDiv);

   return sloganDiv;
}

function initializePage() {
   const {header, headerNavContainer} = createHeader();
   createNav(headerNavContainer);
   const mainDiv = createMainDiv();
   const {mainImg, sloganContainer} = createMainDivElements(mainDiv);
   createSlogan(sloganContainer);
}