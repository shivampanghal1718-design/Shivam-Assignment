const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});
// Live update logic
const studentsInput = document.getElementById("studentsInput");
const teachersInput = document.getElementById("teachersInput");
const classesInput = document.getElementById("classesInput");

const studentsCount = document.getElementById("studentsCount");
const teachersCount = document.getElementById("teachersCount");
const classesCount = document.getElementById("classesCount");

studentsInput.addEventListener("input", () => {
    studentsCount.textContent = studentsInput.value || 0;
});

teachersInput.addEventListener("input", () => {
    teachersCount.textContent = teachersInput.value || 0;
});

classesInput.addEventListener("input", () => {
    classesCount.textContent = classesInput.value || 0;
});
