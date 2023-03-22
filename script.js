/your code here!
// Get the reference to the list element
const list = document.getElementById('infi-list');

// Add 10 list items by default
for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `List item ${i}`;
  list.appendChild(listItem);
}

// Define a function to add 2 more list items
function addItems() {
  for (let i = 1; i <= 2; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `List item ${list.children.length + i}`;
    list.appendChild(listItem);
  }
}

// Detect when the user reaches the end of the list and add more items
list.addEventListener('scroll', function() {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems();
  }
});

