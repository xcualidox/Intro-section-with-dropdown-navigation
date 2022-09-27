function openDrop()
{   
    this.classList.toggle("hover-stay");
    this.nextElementSibling.classList.toggle("drop-open");
    this.children[0].children[0].classList.toggle("rotate-arrow")
}
document.querySelectorAll(".drop-down-menu").forEach(element => {
    element.firstChild.addEventListener("click",openDrop);
});
