
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

    newMessage.innerHTML = "<a href='mailto:" + email.value + "'>" + name.value + "</a><span>  wrote: " + message.value + "</span>   ";
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

    let editButton = document.createElement('button');
    editButton.innerText = "edit";
    editButton.setAttribute("type", "button");
    editButton.addEventListener('click', editFunc, false);

    newMessage.appendChild(editButton);


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

//editFunc
function editFunc() {
    let originalMsg = this.parentNode;
    let msgList = this.parentNode.parentNode;
    let a = this.parentNode.querySelector('a');
    let removeBtn = this.parentNode.querySelectorAll('button')[0];
    let editBtn = this.parentNode.querySelectorAll('button')[1];


    let span = document.createElement('span');
    let newMsg = prompt('Enter new message: ');
    span.innerHTML = ' wrote: ' + newMsg + "   ";
    let returnMsg = document.createElement('li');
    returnMsg.appendChild(a);
    returnMsg.appendChild(span);
    returnMsg.appendChild(removeBtn);
    returnMsg.appendChild(editBtn);
    console.log(returnMsg);
    console.log(originalMsg);

    msgList.insertBefore(returnMsg, originalMsg.nextSibling);
    originalMsg.remove();
}