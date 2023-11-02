/*blended cabbage
grated cabbage
special - purple cabbage*/

import firstImage from '../media/cabbage-juice.png';
import secondImage from '../media/Sauerkraut-min.png';
import thirdImage from '../media/fresh-purple-cabbage.png';

function addMenuContent() {

  const contentDiv = document.querySelector('.content');

  // Main Div parent container - child of contentDiv

  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'main-menu');
  contentDiv.appendChild(mainDiv);

  // mainDiv children - child of mainDiv

  const itemOne = document.createElement('div');
  const itemTwo = document.createElement('div');
  const itemThree = document.createElement('div');

  itemOne.setAttribute('id', 'item-one-menu');
  itemTwo.setAttribute('id', 'item-two-menu');
  itemThree.setAttribute('id', 'item-three-menu');

  mainDiv.appendChild(itemOne);
  mainDiv.appendChild(itemTwo);
  mainDiv.appendChild(itemThree);

  // Menu item picture

  const imgOne = document.createElement('img');
  const imgTwo = document.createElement('img');
  const imgThree = document.createElement('img');

  imgOne.setAttribute('id', 'img-one-menu');
  imgTwo.setAttribute('id', 'img-two-menu');
  imgThree.setAttribute('id', 'img-three-menu');

  imgOne.src = firstImage;
  imgTwo.src = secondImage;
  imgThree.src = thirdImage;

  imgOne.alt = 'Blended cabbage juice in a glass';
  imgTwo.alt = 'Sauerkraut in a jar.';
  imgThree.alt = 'A purple cabbage head.';

  itemOne.appendChild(imgOne);
  itemTwo.appendChild(imgTwo);
  itemThree.appendChild(imgThree);

  // Menu item description & price

  const imgOneText = document.createElement('div');
  const imgTwoText = document.createElement('div');
  const imgThreeText = document.createElement('div');

  imgOneText.setAttribute('id', 'txt-one-menu');
  imgTwoText.setAttribute('id', 'txt-two-menu');
  imgThreeText.setAttribute('id', 'txt-three-menu');
  
  const textNodeOne = document.createTextNode('Blended Cabbage');
  const textNodeTwo = document.createTextNode('Sauerkraut');
  const textNodeThree = document.createTextNode('Red Cabbage');
  
  
  const spanElementOne = document.createElement('span');
  const spanElementTwo = document.createElement('span');
  const spanElementThree = document.createElement('span');

  spanElementOne.textContent = '$1';
  spanElementTwo.textContent = '$2';
  spanElementThree.textContent = '$3';
  
  imgOneText.appendChild(textNodeOne);
  imgTwoText.appendChild(textNodeTwo);
  imgThreeText.appendChild(textNodeThree);

  imgOneText.appendChild(spanElementOne);
  imgTwoText.appendChild(spanElementTwo);
  imgThreeText.appendChild(spanElementThree);
  
  itemOne.appendChild(imgOneText); 
  itemTwo.appendChild(imgTwoText);
  itemThree.appendChild(imgThreeText);


    
    
    
    
   
    


    


    
 
}

  export default addMenuContent;