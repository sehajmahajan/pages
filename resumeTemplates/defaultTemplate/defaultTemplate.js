const addBtn = document.querySelector(".experienceAdd");
const deleteBtn = document.getElementsByClassName("experienceDelete");

const experience = document.getElementsByClassName("experience");
const inputExperience = document.getElementsByClassName(".inputExperience")
const education = document.getElementsByClassName("education");
const project = document.getElementsByClassName("project");
const achievements = document.getElementsByClassName("achievements");
const skills = document.getElementsByClassName("skills");

addBtn.addEventListener("click",()=>{
    experience.appendChild(inputExperience);
});