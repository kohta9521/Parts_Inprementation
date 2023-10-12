const tween = gsap.to("header", {
    duration: 0.5, // アニメーションの時間
    paused: true, // 勝手にアニメーションが変わらないように設定
    ease: "power2.out", // イージング
    top: 0, // アニメーションの終点
})

gsap.to("img", {
    delay: 1,
    duration: 1.5,
    y: -10,
    opacity: 1,
    ease: "power2.out",
    stagger: {
        from: "start",
        amount: 0.8,
    }
});

// box animation


document.querySelector("header").addEventListener("click", tween.play())