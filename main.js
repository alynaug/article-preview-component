


const shareButton = document.getElementById("share");

shareButton.onclick = function() {
    const modal = document.getElementById("modal");
    const icon = shareButton.getElementsByClassName("icon")[0];
    const modalShape = document.getElementsByClassName("triangle-down")[0];
    if (modal.style.visibility !== "visible") {
        modal.style.visibility = 'visible';
        modalShape.style.visibility = 'visible';
        shareButton.style.backgroundColor = "var(--light-text-color)";
        icon.style.fill = "#fff";
    }
    else {
        modal.style.visibility = 'hidden';
        modalShape.style.visibility = 'hidden';
        shareButton.style.backgroundColor = "var(--light-background-color)";
        icon.style.fill = "var(--dark-text-color)";
    }
}