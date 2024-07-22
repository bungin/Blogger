const toggleBtn = document.querySelector('#toggle');
const mode = localStorage.getItem('mode')

function lastKnownMode () {
  
  
  if (mode === 'light') {
    document.body.classList.replace('dark', mode);
    toggleBtn.textContent = '☀️';
  } else {
    document.body.classList.replace('light', mode);
    toggleBtn.textContent = '🌙';
  }
}

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function darkModeToggle() {

    if (document.body.className == 'light') {
      toggleBtn.textContent = '🌙';
      document.body.className = 'dark';
      localStorage.setItem('mode', 'dark');
    } else {
      toggleBtn.textContent = '☀️';
      document.body.className = 'light';
      localStorage.setItem('mode', 'light');
    }
}



toggleBtn.addEventListener('click', darkModeToggle);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const storedData = JSON.parse(localStorage.getItem('blogPosts'));
  return storedData ? storedData : [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage (newData) {
  let existingData = localStorage.getItem('blogPosts');
  let blogData = existingData ? JSON.parse(existingData) : [];
  blogData.push(newData);
  let updatedData = JSON.stringify(blogData);
  localStorage.setItem('blogPosts', updatedData)
}
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = ''

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

lastKnownMode();