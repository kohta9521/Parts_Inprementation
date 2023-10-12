document.querySelector(".card").array.forEach(element => {
    gsap.fromTo(
        element, 
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                ease: "expo",
            }
        }
    )
});