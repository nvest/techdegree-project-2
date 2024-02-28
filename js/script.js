/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
const itemsPerPage = 9;
const buttonsList = document.querySelector("ul.link-list");
const pageList = document.querySelector("ul.student-list");


/*
Figure out which 9 (itemsPerPage) students the page should show
Clear out any previous list items
Build out new list items, and insert them into the html
*/
function showPage(list, page) {
   const start = (page * itemsPerPage) - itemsPerPage;
   const end = page * itemsPerPage;
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
         activeButton.classList.remove('active');
      }
      if (clickedButton) {
         clickedButton.classList.add('active');
         showPage(list, clickedButton.innerHTML);
       }
   });
}


/*
Add search bar into header
*/
function addSearchBar() {
   const header = document.querySelector('header');;
   const html = `
      <label for="search" class="student-search">
         <span>Search by name</span>
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>
   `;
   header.insertAdjacentHTML('beforeend', html);
   // Loop through data array and check if the first and last name includes the search input
   // Push data to a new array
   // Call addPagination and showPage funcitons on the new array
   // If there are no items in the array, show a no results message
   // Execute function on input keyup and button click
   const searchInput = document.querySelector("#search");
   const button = document.querySelector("button");
   searchInput.type = "text";
   function searchFilters() {
      const filteredStudents = [];
      const inputValue = searchInput.value.toLowerCase();
      for (i = 0; i < data.length; i++) {
         firstName = data[i].name.first.toLowerCase();
         lastName = data[i].name.last.toLowerCase();
         currentStudent = `${firstName} ${lastName}`;
         if (currentStudent.includes(inputValue)) {
            filteredStudents.push(data[i]);
         }
      }
      if (filteredStudents.length > 0 ) {
         addPagination(filteredStudents);
         showPage(filteredStudents, 1);
      } else {
         pageList.innerHTML = `<h3 class="no-results">No results were found.</h3>`;
         buttonsList.innerHTML = '';
       }
   }
   searchInput.addEventListener('keyup', (e) => {
      searchFilters();
   });
   button.addEventListener('click', (e) => {
      searchFilters();
   });
}


// Call functions
showPage(data, 1);
addPagination(data);
addSearchBar();


