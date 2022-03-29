const username = document.getElementById("username");
const submit = document.getElementById("submit");
const score = localStorage.getItem("score");
const finalScore= document.getElementById("finalScore");
const highScores= JSON.parse(localStorage.getItem("highScores")) || [];


finalScore.innerText = "Your score is " + score;

username.addEventListener("keyup",() => {
    submit.disabled = !username.value;

});

savehighscore = e => {
    e.preventDefault();
    var savedScores ={
        savedScores: score,
        name: username.value
    };
    
    highScores.push(savedScores);

    highScores.sort((a,b) => {
        return b.savedScores - a.savedScores;
    })

    localStorage.setItem("highScores" , JSON.stringify(highScores));
    window.location.assign();
    
}

