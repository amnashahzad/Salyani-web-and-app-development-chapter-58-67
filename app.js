function submitForm() {
    // Retrieve the entered values
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;

    // Display an alert with the entered data
    alert("Submitted Data:\nFirst Name: " + firstName + "\nLast Name: " + lastName + "\nEmail: " + email);
  }

  // JavaScript code for DOM manipulation

  // i. Get element of id "main-content" and assign them in a variable.
  var mainContent = document.getElementById("main-content");

  // ii. Display all child elements of "main-content" element.
  var childElements = mainContent.children;
  for (var i = 0; i < childElements.length; i++) {
    console.log(childElements[i]);
  }

  // iii. Get all elements of class "render" and show their innerHTML in the browser.
  var renderElements = document.getElementsByClassName("render");
  for (var i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
  }

  // iv. Fill input value whose element id is "first-name" using JavaScript.
  document.getElementById("first-name").value = "John";

  // v. Repeat part iv for id "last-name" and "email".
  document.getElementById("last-name").value = "Doe";
  document.getElementById("email").value = "johndoe@example.com";

  // Additional Questions:

  // 1. What is the node type of the element having the ID "form-content"?
  var formContentElement = document.getElementById("form-content");
  console.log("Node type of element with ID 'form-content':", formContentElement.nodeType);

  // 2. Show the node type of the element having the ID "lastName" and its child node.
  var lastNameElement = document.getElementById("lastName");
  console.log("Node type of element with ID 'lastName':", lastNameElement.nodeType);
  console.log("Child node of element with ID 'lastName':", lastNameElement.firstChild.nodeType);

  // 3. Update the child node of the element having the ID "lastName".
  lastNameElement.firstChild.nodeValue = "Last Name: Updated Value";

  // 4. Get the first and last child of the element with the ID "main-content".
  var firstChild = mainContent.firstElementChild;
  var lastChild = mainContent.lastElementChild;
  console.log("First child of element with ID 'main-content':", firstChild);
  console.log("Last child of element with ID 'main-content':", lastChild);

  // 5. Get the next and previous siblings of the element with the ID "lastName".
  var nextSibling = lastNameElement.nextElementSibling;
  var previousSibling = lastNameElement.previousElementSibling;
  console.log("Next sibling of element with ID 'lastName':", nextSibling);
  console.log("Previous sibling of element with ID 'lastName':", previousSibling);

  // 6. Get the parent node and node type of the element with the ID "email".
  var emailElement = document.getElementById("email");
  var parentNode = emailElement.parentNode;
  var nodeType = emailElement.nodeType;
  console.log("Parent node of element with ID 'email':", parentNode);
  console.log("Node type of element with ID 'email':", nodeType);