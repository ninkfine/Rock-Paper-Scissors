const gameContainer = document.querySelector(".Container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rocky.jpeg";
        result.textContent = "Wait...";

        optionImages.forEach((image2, index2) => {
            index !== index2 && image.classList.add("active");
        });

        gameContainer.classList.remove("Start");

            let time = setTimeout(() =>{
                gameContainer.classList.add("Start");
                let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc; 

            let randomNumber = Math.floor(Math.random() *3);
            let cpuImages = ["images/rocky.jpeg", "images/papery.jpg", "images/scissorss.png"];
            cpuResult.src = cpuImages[randomNumber];

            let cpuValue = ["R", "P", "s"][randomNumber];
            let userValue = ["R","P", "S"][index];

            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "Cpu",
                PS: "User",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };

            let outcomeValue = outcomes[userValue, cpuValue];
            result.textContent = userValue === cpuValue ? "Match Draw" : outcomes = 'Won!!' ;
        }, 1500);
    });
});






