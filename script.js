import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  doc,
  getFirestore,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEVhj9MwCLykglebLehP7v8Ks_H0jXEfg",
  authDomain: "bookaffiliation.firebaseapp.com",
  projectId: "bookaffiliation",
  storageBucket: "bookaffiliation.appspot.com",
  messagingSenderId: "433705135477",
  appId: "1:433705135477:web:85dbb193cbdc640f88773c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// dropdown
var DATA;
if (localStorage.getItem("currentBookSelection") === null) {
  localStorage.setItem("currentBookSelection", "Growth");
}
category.innerHTML = localStorage.getItem("currentBookSelection");
//* dropdown selection
// show dropdown on click button
document.querySelector("#showDrop").addEventListener("click",()=>{
  //* for show dropdown after click
  document.querySelector("#dropContent").classList.remove("hide");
})
document.querySelectorAll(".drop").forEach((drop) => {
  drop.addEventListener("click", () => {
    category.innerHTML = drop.innerHTML;
    localStorage.setItem("currentBookSelection", drop.innerHTML);
    // show dummy books when user click to a category
    let loadingBooksDummy = '<section class="book-box">    <span class="temp-title">Loading...</span>    <span class="book-name"></span><div class="spinner-box">      <div class="lds-ripple"><div></div><div></div></div>    </div>    <a class="buy-btn" href="#" alt="buy link">Fetching...</a>  </section>  <section class="book-box">    <span class="temp-title">Loading...</span>    <span class="book-name"></span>    <div class="spinner-box">      <div class="lds-ripple"><div></div><div></div></div>    </div>    <a class="buy-btn" href="#" alt="buy link">Fetching...</a>  </section>  <section class="book-box">    <span class="temp-title">Loading...</span>    <span class="book-name"></span>    <div class="spinner-box">      <div class="lds-ripple"><div></div><div></div></div>    </div>    <a class="buy-btn" href="#" alt="buy link">Fetching...</a>  </section>  <section class="book-box">    <span class="temp-title">Loading...</span>    <span class="book-name"></span>    <div class="spinner-box">      <div class="lds-ripple"><div></div><div></div></div>    </div>    <a class="buy-btn" href="#" alt="buy link">Fetching...</a>  </section>';
    document.querySelector("#books").innerHTML = loadingBooksDummy;
    getBooksData();

    //* for dropdown hide after click
    document.querySelector("#dropContent").classList.add("hide");
  });
});



// getting full docs of books
// show books of selected category
async function showList(Data) {
  let data = Data;
  // for create instance of books from json
  let book = "";
  for (let i = 0; i < data.length; i++) {
    book += `<section class="book-box">
                <span class="temp-title">Title</span>
                <span class="book-name">${data[i].bookname}</span>
                <img class="book-cover" src="${data[i].bookcover}" width="170" height="200">
                <a class="buy-btn" target="_blank" href="${data[i].buylink}" alt="buy link">Buy Now</a>
                </section>`;
  }
  document.querySelector("#books").innerHTML = book;
}

// if category changed then change the book data
async function getBooksData() {
  const incomeSnap = await getDoc(doc(db, "bookData", "income"));
  const mindSnap = await getDoc(doc(db, "bookData", "mind"));
  const growthSnap = await getDoc(doc(db, "bookData", "growth"));
  const fitnessSnap = await getDoc(doc(db, "bookData", "fitness"));
  const income = incomeSnap.data();
  const fitness = fitnessSnap.data();
  const mind = mindSnap.data();
  const growth = growthSnap.data();
  let bookSelection = localStorage.getItem("currentBookSelection");
  let booksData;
  if (bookSelection == "Income") {
    booksData = income.books;
  } else if (bookSelection == "Fitness") {
    booksData = fitness.books;
  } else if (bookSelection == "Mind") {
    booksData = mind.books;
  } else if (bookSelection == "Growth") {
    booksData = growth.books;
  }
  showList(booksData);
}
getBooksData();

// for dropdown
function hideAfterClick(){
  let drop = document.querySelectorAll(".drop");
  drop.addEventListener('click',)
}
