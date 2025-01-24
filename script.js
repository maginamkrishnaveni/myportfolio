document.addEventListener("DOMContentLoaded", () => {
    const skillItems = document.querySelectorAll(".skill-item");
    const descriptions = document.querySelectorAll(".skill-description");

    skillItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            // Remove 'active' class from all descriptions
            descriptions.forEach((desc) => desc.classList.remove("active"));

            // Get the corresponding description by `data-skill`
            const skill = item.getAttribute("data-skill");
            const description = document.getElementById(skill);

            if (description) {
                description.classList.add("active"); // Show the description
            }
        });

        // Optional: Clear descriptions when mouse leaves the container
        item.addEventListener("mouseleave", () => {
            descriptions.forEach((desc) => desc.classList.remove("active"));
        });
    });
});
