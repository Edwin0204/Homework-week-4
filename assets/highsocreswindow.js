const highScoreList = document.getElementById("highScoreList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var element = document.getElementById("clear");


  highScoreList.innerHTML = highScores
  .map(i => {return`<li class="high-score">${i.name} - ${i.savedScores}</li>`;
})
.join('');

clear.addEventListener('click', function () {
  localStorage.clear();
  location.reload();
});