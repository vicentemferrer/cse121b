const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img')
newImage.setAttribute('src', 'https://picsum.photos/200')

document.body.appendChild(newImage)

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

/* 
Create a new section element.
Add an h2 element with the content "CSE 121b"
Add a paragraph p that says: "Welcome to Javascript Language"
Add your section to the body.
*/

const newSection = document.createElement("section")

const h2 = document.createElement('h2')
h2.innerText = 'CSE 121b'

newSection.appendChild(h2)

newSection.innerHTML += '<p>Welcome to Javascript Language</p>'
document.body.appendChild(newSection)