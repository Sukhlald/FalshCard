
// Function to add a flashcard
// Function to add a flashcard
function addFlashcard(title, description) {
let flashcardContainer = document.getElementById('flashcards-container');
let flashcard = document.createElement('div');
flashcard.className = 'flashcard';

flashcard.innerHTML = `
<h3>${title}</h3>
<p class="answer">${description}</p>
<div class="flashcard-buttons">
  <button class="edit-button" onclick="editAnswer(this)">✏️</button>
  <button class="remove-button" onclick="removeFlashcard(this)">❌</button>
</div>
`;

flashcardContainer.appendChild(flashcard);
}

// Function to edit the answer of a flashcard
function editAnswer(editButton) {
let flashcard = editButton.parentElement.parentElement;
let answerElement = flashcard.querySelector(".answer");

// Prompt user to edit the answer
let newAnswer = prompt("Edit the answer:", answerElement.textContent);

if (newAnswer !== null && newAnswer.trim() !== "") {
// Update the answer if valid input is provided
answerElement.textContent = newAnswer;
} else if (newAnswer === "") {
alert("Answer cannot be empty!");
}
}

// Function to remove a flashcard
function removeFlashcard(removeButton) {
let flashcard = removeButton.parentElement.parentElement;
flashcard.remove();
}

// Function to create 3 sample flashcards
function addSampleFlashcards() {
const sampleFlashcards = [
{ title: "What is JavaScript?", description: "JavaScript is a programming language used for web development." },
{ title: "What is CSS?", description: "CSS is used for styling and layout of web pages." },
{ title: "What is HTML?", description: "HTML is the standard markup language used to create web pages." }
];

// Loop through the sample flashcards and add them
sampleFlashcards.forEach(card => {
addFlashcard(card.title, card.description);
});
}

// Function to handle adding a flashcard from user input
function handleAddFlashcard() {
let title = document.getElementById('title').value;
let description = document.getElementById('description').value;

// Set character limits
let maxTitleLength = 50;
let maxDescriptionLength = 200;

if (title.length > maxTitleLength || description.length > maxDescriptionLength) {
alert(`Title must be less than ${maxTitleLength} characters and description must be less than ${maxDescriptionLength} characters.`);
return;
}

if (title && description) {
addFlashcard(title, description);

// Clear input fields
document.getElementById('title').value = '';
document.getElementById('description').value = '';
} else {
alert("Please fill in both fields");
}
}

// Add event listeners for the "Enter" key to trigger adding a flashcard
document.getElementById('title').addEventListener('keypress', function (event) {
if (event.key === 'Enter') {
event.preventDefault();
handleAddFlashcard();
}
});
document.getElementById('description').addEventListener('keypress', function (event) {
if (event.key === 'Enter') {
event.preventDefault();
handleAddFlashcard();
}
});

// Call the function to add sample flashcards when the page loads
window.onload = function () {
addSampleFlashcards();
};

