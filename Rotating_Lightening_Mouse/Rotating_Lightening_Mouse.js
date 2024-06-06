// Monitor Mouse Moving Event
document.addEventListener("mousemove",(e)=>{
    // Dynamically Set Css variable--x and y for current position of mouse arrow
    document.documentElement.style.setProperty('--x',e.clientX);
    document.documentElement.style.setProperty('--y',e.clientY);
})