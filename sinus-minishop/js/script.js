// DOM Selecta!

let firstHoodieHeader = document.querySelector(".art-1 h2");
firstHoodieHeader.textContent = "Potato";

let navFirst = document.querySelector("header>nav>a:first-of-type");
navFirst.textContent = "Start";

let navLast = document.querySelector("header>nav>a:last-of-type");
navLast.textContent = "Mail Us";

let secondHoodieDescription = document.querySelector(".art-2 p");
secondHoodieDescription.textContent = secondHoodieDescription.textContent.toUpperCase();

let thirdHoodieButton = document.querySelector(".art-3 button");
thirdHoodieButton.style.backgroundColor = "orange";
thirdHoodieButton.textContent = "snatch";

let firstHoodie = document.querySelector(".art-1");
firstHoodie.style.backgroundColor = "lightgray";

let footerAddress = document.querySelector("footer>section>article:nth-of-type(2)>p");
footerAddress.innerHTML = "Sinus skateboards <br>Räjlsvägen 13 <br>1337, Rämpnäs</p>";

let allPs = document.querySelectorAll("p");
allPs.forEach(p => p.style.backgroundColor = "red");
// Probably better to use https://github.com/dvtng/jss or https://stackoverflow.com/a/19613731

let allButtons = document.querySelectorAll("button");
allButtons.forEach(button => button.textContent = "add to cart");

navFirst.classList.add("active");

let headerImg = document.querySelector("header>img");
headerImg.classList.remove("logo");


// Add Content

let newMenuItem = document.createElement("a");
newMenuItem.textContent = "New Item";
newMenuItem.setAttribute("href","#");
let headerNav = document.querySelector("header>nav");
let headerNavCart = document.querySelector("header>nav>img");
headerNav.insertBefore(newMenuItem, headerNavCart);

let main = document.querySelector("main");
main.insertAdjacentHTML("beforeend", `<article class="art-4">
<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
<h2>Sinus Hoodie</h2>
<h3>Forrest</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
<button>buy</button>
</article>`);


// Events

headerImg.addEventListener("click", event => console.log('found you!'));

let articleListener = e => console.log("Hi, Im article", e.currentTarget.querySelector("h3").textContent);
let articles = document.querySelectorAll("main>article");
articles.forEach(article => article.addEventListener("click", articleListener));