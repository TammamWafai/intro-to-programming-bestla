
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');

copyright.innerHTML = "Tammam | " + thisYear;
footer.appendChild(copyright);

let skills = ["HTML5", "CSS3", "JavaScript"];
let skillsSection = document.querySelector("#skills");
let skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li')
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}


//Global variables
let messageSection = document.querySelector('#messages');
let messageList = messageSection.querySelector('ul');
let messageForm = document.querySelector('[name="leave_message"]')

//Submit handling
messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let name = event.target.name;
    let email = event.target.email;
    let message = event.target.message;
    let newMessage = document.createElement('li');

    newMessage.innerHTML = "<a href='mailto:" + email.value + "'>" + name.value + "</a> wrote: <span>" + message.value + "</span>   ";
    messageList.appendChild(newMessage);
    let removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener('click', (event) => {
        let entry = removeButton.parentNode;
        entry.remove();
        messagesSectionShowHide();
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    console.log(name.value, email.value, message.value)
    messagesSectionShowHide();
    messageForm.reset();
});

//Check if Message section is empty on page load
window.addEventListener("load", function () {
    messagesSectionShowHide();
});

// Show/hide Messages section
function messagesSectionShowHide() {
    if (messageList.childElementCount != 0) {
        messageSection.style.display = "block";
    } else {
        messageSection.style.display = "none";
    }
}

