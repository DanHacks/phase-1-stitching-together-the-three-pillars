// Step 1: Selecting all the heart (like) elements
const articleHearts = document.querySelectorAll('.like'); // Selects all the like buttons
console.log(articleHearts); // Log to console to check if they are correctly selected

// Step 2: Loop through each like button to add event listeners
articleHearts.forEach(heart => {
  // For each like button, we add a click event listener
  heart.addEventListener('click', () => {
    // Step 3: Toggle the "liked" class to change the heart color
    const heartGlyph = heart.querySelector('.like-glyph'); // Get the span with the heart symbol
    
    // Check if the heart is already liked
    if (heartGlyph.classList.contains('liked')) {
      // If liked, remove the "liked" class and change the heart to an empty state
      heartGlyph.classList.remove('liked');
      heartGlyph.innerHTML = '&#x2661;'; // Empty heart symbol
    } else {
      // If not liked, add the "liked" class and change the heart to a filled state
      heartGlyph.classList.add('liked');
      heartGlyph.innerHTML = '&#x2665;'; // Filled heart symbol
    }
    
    // Step 4: Log the state to console
    console.log(`Heart for post ${heart.closest('.media-post').id} is now ${heartGlyph.classList.contains('liked') ? 'liked' : 'not liked'}`);
  });
});

// Step 5: Optional - Mock server communication (For demonstration purposes)
function simulateServerInteraction(postId, action) {
  // This function simulates sending data to a server, like liking a post
  console.log(`Sending ${action} request for post ID: ${postId}`);
}

// Example: Simulate server communication when a like is toggled
articleHearts.forEach(heart => {
  heart.addEventListener('click', () => {
    const postId = heart.closest('.media-post').id; // Get the post ID
    const action = heart.querySelector('.like-glyph').classList.contains('liked') ? 'like' : 'unlike'; // Determine if the action is like or unlike
    
    // Simulate the server interaction
    simulateServerInteraction(postId, action);
  });
});
