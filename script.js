function quoteGen () {
        const GenerateQuote = async () =>{
         var url="https://type.fit/api/quotes";
         const response=await fetch(url);
         const Quote_list = await response.json();
         const randomIdx = Math.floor(Math.random()*Quote_list.length);
         const quoteText=Quote_list[randomIdx].text;
         const auth=Quote_list[randomIdx].author;
         if(!auth) auth = "Anonymous";
         document.getElementById("QuoteText").innerHTML=quoteText;
         document.getElementById("author").innerHTML=""+auth;
      }
      GenerateQuote();
}

quoteGen();

// This is the code for the clicker game
function clickerGame () {
const scoreDisplay = document.querySelector("#score");
const clickArea = document.querySelector("#click-area");
let score = 0;

clickArea.addEventListener("click", function() {
  score += 1;
  scoreDisplay.innerHTML = "Clicks: " + score;
});

const statusBarProgress = document.getElementById("status-bar-progress");
const decreaseButton = document.getElementById("decrease-button");
let progress = 100;

decreaseButton.addEventListener("click", () => {
  progress -= 0.0001;
  statusBarProgress.style.width = `${progress}%`;
})};

clickerGame ();

// title of clicker game page
function displayTitle() {
    var Title = "Clicker Game";
    document.getElementById("title").innerHTML = Title;
  }

displayTitle();


function mainFooter() {
const collection = document.getElementsByClassName("example");
collection[0].innerHTML = "Feel free to reach out to me through any of the following channels:";
}

mainFooter()

function footerContent() {
ocument.getElementsByTagName("p")[0].innerHTML = "";
}

footerContent();



