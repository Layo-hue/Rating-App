let container = document.querySelector("#container");
let containerOne = document.querySelector(".container1");
let ratings = document.querySelectorAll(".rate-list-item");
let thanks = document.querySelector("#thank-you");
let submit = document.querySelector("#submit");
let goBack = document.querySelector("#back-to-rate");

ratings.forEach((rate) => {
  rate.addEventListener("click", function () {
    thanks.textContent = `You selected ${rate.textContent} out of 5`;
  });
});

submit.addEventListener("click", function () {
  if (containerOne.style.display === "none") {
    containerOne.style.display = "block";
    containerOne.classList.add("container-display");
  } else {
    containerOne.style.display = "none";
  }
});

goBack.addEventListener("click", function () {
  container.style.display = "block";
  containerOne.style.display = "none";
});
