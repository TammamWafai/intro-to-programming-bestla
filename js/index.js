
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

