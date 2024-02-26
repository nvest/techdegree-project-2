/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
const itemsPerPage = 9;



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
---
Figure out which 9 (itemsPerPage) students the page should show
Build out their list items, and insert them into the html
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
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
---
Figure out how many pageination buttons to show
Build out their list items, and insert them into the html
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
}


// Call functions
showPage(data, 1);
addPagination(data);