const main = document.getElementById("main");
const form = document.getElementById("form");
let tb = document.querySelector(".tb");
let tb2 = document.querySelector(".tb2");

getApiData();
function getApiData() {
  fetch("https://imdb8.p.rapidapi.com/auto-complete?q=action%20", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3a27b0c136msh57a6a2d5ca96333p134535jsn499d1da34e57",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      tb.innerHTML = "";
      data.d.map(function (post) {
        tb.innerHTML += `
            
            <div class=" container row  ">
           
  <div class=" text-light  col-md-4"><img class="images" src="${post.i.imageUrl}" width="350px"; height="300px"> <br>
  <span>${post.l}</span>
  </div>
  
  </div>

            </div>
           
            `;
      });
      document.getElementById("output").append = tb;
    });
}

getcomingsoonmovies();

function getcomingsoonmovies() {
  fetch("https://imdb8.p.rapidapi.com/auto-complete?q=alie", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3a27b0c136msh57a6a2d5ca96333p134535jsn499d1da34e57",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      tb2.innerHTML = "";
      tb2.style.display = "flex";
      data.d.map(function (post2) {
        tb2.innerHTML += `
            <div class=" container row">
            <div class=" text-light  col-md-4"><img class="images" src="${post2.i.imageUrl}" width="350px"; height="300px"> <br>
            <span>${post2.l}</span>
         </tr> 
             </div>
            `;
      });
      document.getElementById("output").append = tb2;
    });
}

function search() {
  var txtSearch, filter, myTable, tr, td, i;
  txtSearch = document.querySelector(".txtSearch").value;
  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${txtSearch}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3a27b0c136msh57a6a2d5ca96333p134535jsn499d1da34e57",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      tb.innerHTML = "";
      tb.style.display = "flex";
      data.d.map(function (post2) {
        tb.innerHTML += `
            <div class=" container row">
            <div class=" text-light  col-md-4"><img class="images" src="${post2.i.imageUrl}" width="350px"; height="300px"> <br>
            <span>${post2.l}</span>
         </tr> 
             </div>
            `;
      });
      document.getElementById("output").append = tb;
    });
}
