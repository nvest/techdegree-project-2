/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
const itemsPerPage = 9;


/*
Figure out which 9 (itemsPerPage) students the page should show
Clear out any previous list items
Build out new list items, and insert them into the html
*/
function showPage(list, page) {
   const start = (page * itemsPerPage) - itemsPerPage;
   const end = page * itemsPerPage;
   const pageList = document.querySelector("ul.student-list");
   pageList.innerHTML = '';
   for ( let i = 0; i < list.length; i++ ) {
     if (i >= start && i < end) {
      const html = `
         <li class="student-item cf">
            <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>
      `;
      pageList.insertAdjacentHTML('beforeend', html);
     }
   }
}


/*
Figure out how many pageination buttons to show
Clear out any previous list items
Build out new list items, and insert them into the html
*/
function addPagination(list) {
   const numberOfButtons = Math.ceil(list.length / itemsPerPage);
   const buttonsList = document.querySelector("ul.link-list");
   buttonsList.innerHTML = '';
   for ( let i = 1; i <= numberOfButtons; i++ ) {
      const html = `
      <li>
         <button type="button">${i}</button>
      </li>
      `;
      buttonsList.insertAdjacentHTML('beforeend', html);
   }
   // Add active class to the first button
   buttonsList.querySelector('button').classList.add('active');
   // Move active class to button that is clicked
   // Load the items for the correct page
   buttonsList.addEventListener('click', (e) => {
      const activeButton = buttonsList.querySelector('.active');
      const clickedButton = e.target.closest('button');
      
      if (clickedButton && activeButton) {
         activeButton.classList.remove('.active');
      }

      if (clickedButton) {
         clickedButton.classList.add("active");
         showPage(list, clickedButton.innerHTML);
       }
   });
}


// Call functions
showPage(data, 1);
addPagination(data);