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
            if (index !== index2) { 
                image2.classList.remove("active"); 
            }
        });

        gameContainer.classList.remove("Start");

        let time = setTimeout(() => {
            gameContainer.classList.add("Start");
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["images/rocky.jpeg", "images/papery.jpg", "images/scissorss.png"];
            cpuResult.src = cpuImages[randomNumber];

            let cpuValue = ["R", "P", "S"][randomNumber]; 
            
            let userValue = ["R", "P", "S"][index];

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

            let outcomeValue = outcomes[userValue + cpuValue]; 

          
            if (userValue === cpuValue) {
                result.textContent = "Match Draw";
            } else if (outcomeValue === 'User') {
                result.textContent = 'Won!!';
            }
        }, 1500);
    });
});
