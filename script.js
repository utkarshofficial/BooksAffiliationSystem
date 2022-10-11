// dropdown
var DATA;
if(localStorage.getItem("currentBookSelection") === null){
    localStorage.setItem("currentBookSelection","Growth");
}
category.innerHTML = localStorage.getItem("currentBookSelection");
// dropdown selection
document.querySelectorAll(".drop").forEach(drop=>{
    drop.addEventListener('click',()=>{
        category.innerHTML = drop.innerHTML;
        localStorage.setItem("currentBookSelection", drop.innerHTML);
        showBooks(DATA);
    })
});
// json get funciton
function get(){
    fetch("books.json")
    .then((res) => res.json())
    .then((res) => {
        showBooks(res);
    })
}

// show books of selected category
function showBooks(data){
    DATA = data
    let bookSelection = localStorage.getItem("currentBookSelection");
    // for create instance of books from json
    let book=""; 
    for(let j=0;j<data.length;j++){
        if(data[j].type===bookSelection){
            for(let i=0;i<data[j].books.length;i++){
                book += `<section class="book-box">
                <span class="temp-title">Title</span>
                <span class="book-name">${data[j].books[i].title}</span>
                <img class="book-cover" src="${data[j].books[i].cover}" width="170" height="200">
                <a class="buy-btn" href="${data[j].books[i].buylink}" alt="buy link">Buy Now</a>
                </section>`;
            }
        }
    }
    document.querySelector("#books").innerHTML = book;
}
get();




