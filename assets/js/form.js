
const formEl = document.querySelector('#form')
const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');

// TODO: Create a variable that selects the form element

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSub(event) {
    event.preventDefault();
    
    if (!username.value || !title.value || !content.value) {
        const errorEl = document.querySelector('#error');
        errorEl.textContent = "Please complete the form."
        return;
    }
        
        const blogPost = {
            username: username.value,
            title: title.value,
            content: content.value,
        };

        storeLocalStorage(blogPost);

        
        redirectPage('blog.html');
    
    
};

formEl.addEventListener('submit', formSub);
// ?DO: Add an event listener to the form on submit. Call the function to handle the form submission.
