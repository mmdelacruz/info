let text = "I am Martín de la Cruz... ";
let text2 = "I am a Junior Developer... "
let counter = 0;
let flag = false;

function animateText(){
    if(counter < text.length && flag){
        document.querySelector("#textAnimated").innerHTML += text.charAt(counter);
        counter++;

        if(counter === text.length){
            document.querySelector("#textAnimated").innerHTML = "";
            counter = 0;
            flag = false;
        }
    }
    else if(counter < text2.length && !flag){
        document.querySelector("#textAnimated").innerHTML += text2.charAt(counter);
        counter++;

        if(counter === text2.length){
            document.querySelector("#textAnimated").innerHTML = "";
            counter = 0;
            flag = true;
        }
    }

    setTimeout(animateText, 250);
}

animateText();