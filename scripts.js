/*$(document).ready(function() {

$('h1').html('Sassy');
}); */

function createOL() {
  //create ordered list and append to Upcoming Traversals
  let list = document.createElement('OL');
  list.setAttribute("id", "myOL");
  document.getElementsByClassName('info-box sad')[0].appendChild(list);

  //create for loop to append the list items onto the ordered list
  let listItems = ["The DOM", "The BOM", "Your MOM"];
  for (let i = 0; i < listItems.length; i++) {
    let x = document.createElement("LI");
    let y = document.createTextNode(listItems[i]);
    x.appendChild(y);
    document.getElementById("myOL").appendChild(x);
  }

  //center ordered list on page
  document.getElementsByClassName('info-box sad')[0].style.textAlign = 'center';
  document.getElementById('myOL').style.display = 'inline-block';
  document.getElementById('myOL').style.textAlign = 'left';
}

function changeClass() {
  let sadClasses = Array.from(document.getElementsByClassName('sad'));
    for (var i = 0; i < sadClasses.length; i++) {
        sadClasses[i].setAttribute('class', 'happy');
    }
}

function popUp() {
  let pop = document.getElementById('annoying-popup');
  pop.style.right = '0px';
  pop.style.top = '40px';
}

function txtArea() {
  let t = document.getElementsByTagName('form')[0].children[0];
  t.outerHTML=t.outerHTML.replace('input', 'textarea');
};

/* Assignment:
1. Change the <h1> to something cheeky
2. Inside the container for "Upcoming Traversals", create and insert an ordered list
3. Make all sad classes into happy ones.
4. Make the annoying popup link point instead to http://www.cashcats.biz.
5. Change the positioning of the popup so it is on the right side of the screen.
   Make it 30 pixels lower than its current position.
6. Replace the ellipsis ... with content of your choice, do so by traversing from a different element.
7. Replace the form input with a <textarea> instead of a <input type="text">.
*/

window.onload = function() {
  document.getElementsByTagName('h1')[0].innerHTML = 'Sassy';
  createOL();
  changeClass();
  document.getElementsByTagName('a')[0].href = 'http://www.cashcats.biz';
  popUp();
  document.getElementsByTagName('ul')[0].children[6].innerHTML = 'Irritable iterations';
  txtArea();
};
