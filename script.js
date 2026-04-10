// EmailJS
(function(){
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// Contact Form
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
        document.getElementById("msg").innerText = "Message sent successfully!";
    });
});

// Typing Effect
const words = ["Web Developer", "Programmer", "Tech Enthusiast"];
let i = 0, j = 0, isDeleting = false;

function type() {
    let current = words[i];
    document.getElementById("typing").innerText = current.substring(0, j);

    if (!isDeleting) j++; else j--;

    if (j === current.length) isDeleting = true;
    if (j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// GitHub Projects
fetch("https://api.github.com/users/ajitrajput/repos")
.then(res => res.json())
.then(data => {
    let container = document.getElementById("repo-container");

    data.slice(0,6).forEach(repo => {
        let div = document.createElement("div");
        div.className = "repo";

        div.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description"}</p>
            <a href="${repo.html_url}" target="_blank">View Code</a>
        `;

        container.appendChild(div);
    });
});

// Particles
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 }
    }
});

// Dark Mode
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("light");
};
