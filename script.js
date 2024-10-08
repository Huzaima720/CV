const cv = {
  personalInfo: {
    name: "Abdulrehman",
    age: 19,
    location: "Township, Lahore , Pakistan",

    email: "abdulrehmanasghar720@gmail.com",
    phone: "0332-4396444",
  },
  socialMedia: {
    github: "https://github.com/Huzaima720/",
    linkedin: "https://www.linkedin.com/in/huzaima-asghar-6a1420234/",
    instagram: "https://www.instagram.com/huzaima_asghar",
    
  },
  education: [
    {
      degree: "ICS",
      institution: "GCT College",
      year: "Currently studying",
    },
    {
      degree: "Matric",
      institution: "School Name",
      year: "Completed in 2022",
    },
  ],
  experience: [
    {
      role: "MERN Stack Student",
      institution: "Bano Qabil",
      year: "2023-Present",
      details: "Learning the MERN stack and gaining web development skills.",
    },
    {
      role: "Frontend Challenges",
      platform: "Frontend Mentor",
      year: "2023-Present",
      details:
        "Working on coding challenges to improve frontend development skills.",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    
  ],
  projects: [
    {
      title: "Contact form",
      description:
        "A contact form with responsive design and basic validation.",
      url: "https://huzaima720.github.io/contact-form-main/",
      ImageUrl:
        "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/ghgxiqy2foifrixlbil2.jpg",
    },
    {
      title: "Fylo data storage component",
      description: "A clean and modern webpage for a data storage service, showing its features in an easy-to-understand layout.",
      url: "https://huzaima720.github.io/fylo-data-storage-component-master/",
      ImageUrl:
        "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/degsynzebp4iugi4yajw.jpg",
    },
    {
      title: "Rating Component",
      description: "An interactive rating component allowing users to select a rating from 1 to 5 and submit their feedback.",
      url: "https://huzaima720.github.io/interactive-rating-component-main/",
      ImageUrl:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/v2p4novtdanoch489mgo.jpg",
    },
    {
      title: "Product List with Cart",
      description: "A simple e-commerce interface allowing users to add products to the cart and view the total cost.",
      url: "https://huzaima720.github.io/product-list-with-cart/",
      ImageUrl:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/nxbi2zjjn0wtktqml85n.jpg",
    },
    {
      title: "Aim Zone",
      description: "Aim Zone is a virtual environment designed to help users improve their mental and physical health.",
      url: "https://huzaima720.github.io/AimZone/",
      ImageUrl:
        "images/AimZone.png",
    },
    {
      title: "Notification Page",
      description: "A notifications page UI showing unread and read notifications with a clean design and status updates.",
      url: "https://huzaima720.github.io/notifications-page/",
      ImageUrl:
        "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/enpshtoz23n50nm9mgbj.jpg",
    },
    {
      title: "Calculator",
      description: "A functional calculator application that supports basic arithmetic operations with a modern UI design.",
      url: "https://huzaima720.github.io/calculator-app-main/",
      ImageUrl:
        "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/q9llohdmmsbkwbq1raeu.jpg",
    },
    {
      title: "Age Calculator",
      description: "An age calculator app where users can input their birthdate to get their exact age in years, months, and days.",
      url: "https://huzaima720.github.io/age-calculator-app-main/",
      ImageUrl:
        "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/sauy5mxc5ep4gnlbqjcd.jpg",
    },
    {
      title: "Faq Accordion",
      description: "A responsive FAQ accordion that displays and hides answers to frequently asked questions when clicked.",
      url: "https://huzaima720.github.io/faq-accordion/",
      ImageUrl:
        "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/edeu0mt4bihzyt6otijw.jpg",
    },
  ],
  languages: ["English", "Urdu"],
  hobbies: ["Game Development", "History Research", "Web Development"],
};

function capitalizeText(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

let container = document.querySelector(".container");
let buttonsContainer = document.querySelector(".buttons");

let personalBtn = document.getElementById("Personal-btn");
let personalInfoDiv = document.getElementById("personal-info");

let socialBtn = document.getElementById("social-btn");
let socialInfoDiv = document.getElementById("social-media");

let educationBtn = document.getElementById("education-btn");
let educationInfoDiv = document.getElementById("education");

let experienceBtn = document.getElementById("experience-btn");
let experienceInfoDiv = document.getElementById("experience");

let skillsBtn = document.getElementById("skills-btn");
let skillsInfoDiv = document.getElementById("skills");

let projectsBtn = document.getElementById("projects-btn");
let projectsInfoDiv = document.getElementById("projects");

let backBtns = document.querySelectorAll(".back-btn");
backBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
      location.reload();
  });
});

window.addEventListener("load", function () {
  buttonsContainer.classList.add("loaded");
});

personalBtn.addEventListener("click", function () {
  detailsPanel(personalInfoDiv);

  let { personalInfo } = cv;
  for (let key in personalInfo) {
    const newInfo = document.createElement("div");
    newInfo.classList.add("info-text");
    newInfo.innerHTML = `<h3 >${capitalizeText(key)}</h3> <p>${
      personalInfo[key]
    }</p>`;
    personalInfoDiv.appendChild(newInfo);
  }
});

socialBtn.addEventListener("click", function () {
  detailsPanel(socialInfoDiv);
  let { socialMedia } = cv;
  for (let key in socialMedia) {
    const newLink = document.createElement("a");
    newLink.classList.add("btn");
    newLink.href = socialMedia[key];
    newLink.innerText = capitalizeText(key);
    socialInfoDiv.appendChild(newLink);
  }
});

educationBtn.addEventListener("click", function () {
  detailsPanel(educationInfoDiv);
  let { education } = cv;
  let educationList = educationInfoDiv.querySelector(".list");

  education.forEach((edu) => {
    const newEdu = document.createElement("div");
    newEdu.classList.add("list-item");

    for (let key in edu) {
      const newInfo = document.createElement("div");
      newInfo.classList.add("info-text");
      newInfo.innerHTML = `<h3>${capitalizeText(key)}</h3> <p>${edu[key]}</p>`;
      newEdu.appendChild(newInfo);
    }

    educationList.appendChild(newEdu);
  });
});

experienceBtn.addEventListener("click", function () {
  detailsPanel(experienceInfoDiv);
  const { experience } = cv;
  let experienceList = experienceInfoDiv.querySelector(".experience-list");
  experience.forEach((exp) => {
    const newExp = document.createElement("div");
    newExp.classList.add("list-item");
    for (let key in exp) {
      const newInfo = document.createElement("div");
      newInfo.classList.add("info-text");
      newInfo.innerHTML = `<h3>${capitalizeText(key)}</h3> <p>${exp[key]}</p>`;
      newExp.appendChild(newInfo);
    }

    experienceList.appendChild(newExp);
  });
});

skillsBtn.addEventListener("click", function () {
  detailsPanel(skillsInfoDiv);
  let { skills } = cv;
  let skillList = skillsInfoDiv.querySelector(".skill-list");
  for (let key in skills) {
    const newSkill = document.createElement("button");
    newSkill.classList.add("skill");
    newSkill.innerText = skills[key];
    skillList.appendChild(newSkill);
  }
});

projectsBtn.addEventListener("click", function () {
  detailsPanel(projectsInfoDiv);
  let { projects } = cv;
  let projectList = projectsInfoDiv.querySelector(".project-list");
  projects.forEach((project) => {
    let newProject = document.createElement("div");
    newProject.classList.add("project");
    newProject.innerHTML = `
    <img src=${project.ImageUrl}  class="project-image">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <a href=${project.url} class="project-btn">View Project</a>
                </div>
    `;
    projectList.appendChild(newProject);
  });
});

function detailsPanel(infoDiv) {
  buttonsContainer.style.display = "none";
  infoDiv.style.display = "flex";
  setTimeout(function () {
    infoDiv.classList.add("loaded");
  }, 10);
}
