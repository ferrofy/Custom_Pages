let Google_Search_Box_Wrapper = document.getElementById("Google_Search_Box_Wrapper");
let Search_Input = document.getElementById("Google_Search_Input");

function Create_Google_Lightning() {
    for (let i = 0; i < 4; i++) {
        let Google_Lightning_Effect = document.createElement("div");
        Google_Lightning_Effect.classList.add("Google_Lightning");

        let Random_X = Math.random() * Google_Search_Box_Wrapper.offsetWidth;
        let Random_Rotate = Math.random() * 360;
        let Random_Height = 40 + Math.random() * 80;

        Google_Lightning_Effect.style.left = Random_X + "px";
        Google_Lightning_Effect.style.top = "-20px";
        Google_Lightning_Effect.style.height = Random_Height + "px";
        Google_Lightning_Effect.style.transform = "rotate(" + Random_Rotate + "deg)";

        Google_Search_Box_Wrapper.appendChild(Google_Lightning_Effect);

        setTimeout(() => {
            Google_Lightning_Effect.remove();
        }, 250);
    }
}

Search_Input.addEventListener("input", Create_Google_Lightning);
