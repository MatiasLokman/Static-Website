const btnBuscar = document.getElementById("btnBuscar");
const reviewInput = document.getElementById("reviewInput");
const reviewId = document.getElementById("reviewId");
const reviewTitle = document.getElementById("reviewTitle");
const reviewBody = document.getElementById("reviewBody");
const reviewInfo = document.getElementById("reviewInfo");
const reviewList = document.getElementById("reviewList");

const createTitle = (elementType, texto) => {
  let x = document.createElement(elementType);
  x.innerText = texto;
  return x;
};

let reviewListData = [];
let selectedReview;

const jsonUrl = "https://jsonplaceholder.typicode.com/posts";

const getReviewList = () => {
  fetch(jsonUrl)
    .then((res) => res.json())
    .then((data) => {
      reviewListData = data.map((x) => x.id);
      console.log(reviewListData);
      reviewListData.forEach((x) => {
        reviewList.appendChild(createTitle("h3", x));
      });
      reviewList.classList.remove("hidden");
      document.body.classList.toggle("expand"); //----------
    })
    .catch((err) => console.log("ERROR: ", err));
};

const getReviewById = (id) => {
  reviewInfo.classList.add("hidden");
  console.log("buscando...");
  fetch(`${jsonUrl}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(selectedReview);
      selectedReview = data;
      reviewTitle.innerText = selectedReview.title;
      reviewId.innerText = selectedReview.id;
      reviewBody.innerText = selectedReview.body;
      console.log("ya seteamos los datos del review");
    })
    .then(() => {
      reviewInfo.classList.remove("hidden");
      console.log("ya mostramos la review");
    });
};

btnBuscar.addEventListener("click", () => {
  getReviewById(reviewInput.value);
});
