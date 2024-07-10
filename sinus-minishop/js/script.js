// DOM Selecta!

firstHoodieHeader = document.querySelector(".art-1 h2");
firstHoodieHeader.textContent = "Potato";

navFirst = document.querySelector("header>nav>a:first-of-type");
navFirst.textContent = "Start";

navLast = document.querySelector("header>nav>a:last-of-type");
navLast.textContent = "Mail Us";

secondHoodieDescription = document.querySelector(".art-2 p");
secondHoodieDescription.textContent = secondHoodieDescription.textContent.toUpperCase();

thirdHoodieButton = document.querySelector(".art-3 button");
thirdHoodieButton.style.backgroundColor = "orange";
thirdHoodieButton.textContent = "snatch";

firstHoodie = document.querySelector(".art-1");
firstHoodie.style.backgroundColor = "lightgray";

footerAddress = document.querySelector("footer>section>article:nth-of-type(2)>p");
footerAddress.innerHTML = "Sinus skateboards <br>Räjlsvägen 13 <br>1337, Rämpnäs</p>";

allPs = document.querySelectorAll("p");
allPs.forEach(p => p.style.backgroundColor = "red");

allButtons = document.querySelectorAll("button");
allButtons.forEach(button => button.textContent = "add to cart");

navFirst.classList.add("active");

headerImg = document.querySelector("header>img");
headerImg.classList.remove("logo");