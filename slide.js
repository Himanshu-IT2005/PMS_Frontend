function showContent(type) {
    let contentText = document.getElementById("content-text");
    let contentImage = document.getElementById("content-image");

    if (type === "goals") {
        contentText.innerHTML = "Set clear goals, assign tasks, and track progress in real-time to ensure timely project completion with optimal efficiency. 🚀";
        contentImage.src = "/img/Goal-PNG-Pic.png"; 
    } else if (type === "skillsets") {
        contentText.innerHTML = "Equip your team with the right skills and training to maximize efficiency and deliver high-quality results. ✅";
        contentImage.src = "/img/skill-removebg-preview.png"; 
    } else if (type === "competency") {
        contentText.innerHTML = "Assess employees using key behavioral and performance metrics to drive growth and efficiency. ✅";
        contentImage.src = "/img/competency-removebg-preview.png"; 
    }
}
