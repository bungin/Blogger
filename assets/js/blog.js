// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main')
const backBtn = document.querySelector('#back')

// TODO: Create a function that builds an element and appends it to the DOM
function appendNewEl(type, text, parent) {
    const tag = document.createElement(type);
    tag.textContent = text;
    parent.appendChild(tag);
}
// TODO: Create a function that handles the case where there are no blog posts to display
function noPostsDisplayed() {
    
    if (readLocalStorage().length === 0) {
        
        mainEl.innerHTML = "No Blog posts yet...";
    }
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const blogPosts = readLocalStorage();
    if (!blogPosts.length) {
        noPostsDisplayed();
    }
    else {
        blogPosts.forEach(blogPost => {
           const blogEl = document.createElement('article');

           const titleEl = appendNewEl('h2', blogPost.title, blogEl);
           const contentEl = appendNewEl('blockquote', blogPost.content, blogEl);
           const usernameEl = appendNewEl('p', `Posted by: ${blogPost.username}`, blogEl);

           mainEl.appendChild(blogEl); 
        });
        
    }

}
// TODO: Call the `renderBlogList` function
renderBlogList();




// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backBtn.addEventListener('click', function() {redirectPage('index.html')}); 
    
