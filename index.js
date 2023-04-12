let text = `Welcome to Armenia`;
let i = 0;
let speed = 150;

function type() {
    if (i<text.length){
        document.querySelector (`#par`).textContent+=text.charAt(i);
        i++;
        setTimeout(type,speed);
    }

    if (i>text.length){
        typeTwo()
    }

}

type();


let textTwo = `Choose your adventure `;
let a = 0;

function typeTwo (){
    if(a<textTwo.length){
        document.querySelector (`#parTwo`).textContent+=textTwo.charAt(a);
        a++;
        setTimeout (typeTwo, speed);

    }

    if (a===text.length) {
        const btn = document.querySelector (`.btn`);
        btn.classList.add (`newBtn`);

    }
}

typeTwo ();

