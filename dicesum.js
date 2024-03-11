var dices = ["d-1.png", "d-2.png", "d-3.png", "d-4.png", "d-5.png", "d-6.png"];

function roll() {
    var n1 = Math.floor(Math.random() * 6); 
    var n2 = Math.floor(Math.random() * 6);
    document.querySelector(".d1").src = dices[n1]; 
    document.querySelector(".d2").src = dices[n2]; 
    document.querySelector(".sum").innerHTML = "Sum is = <span>" + (n1 + 1 + n2 + 1)+"</span>"; 
}
