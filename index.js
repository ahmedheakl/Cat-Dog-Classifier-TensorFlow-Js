const run = () => {
  /* 
  A function to excute the main flow of the website.
  The function is invoked once the website loads
  */

  // Getting the element needed to modify the UI
  const img = document.querySelector(".image-view");
  const input = document.querySelector(".input-field");
  const form = document.querySelector("form");
  const predict_button = document.querySelector("#predict-button");
  const pred_text = document.querySelector(".result-span");

  // Adding an event listener for the form submission
  form.addEventListener("submit", (w) => {
    // Preventing loading to anther page
    w.preventDefault();

    // Clearing out the data in the result-span element
    pred_text.innerHTML = "";

    // Showing the image Section
    toggleShow(img, (show = true));

    // Creating a new Reader object to read the
    // input image from the input-field
    let reader = new FileReader();
    reader.onload = (e) => {
      // Setting the source val of the img
      // to the value of the input-field
      img.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);

    // Showing the prediction button and hiding the form
    toggleShow(predict_button);
    toggleShow(form);
  });
};

async function predict(elem) {
  /* 
  An Asynchrous function that loads our trained model,
   read the pixel data of the image,
   and predict which class the image belongs to.

   Args: the prediction button
  */

  // Hidding the prediction button and showing the form
  toggleShow(elem);
  toggleShow(document.querySelector("form"));

  // Getting the pixel data from the image
  img = document.querySelector(".image-view");
  img_Data = tf.browser.fromPixels(img).resizeBilinear([224, 224]);

  // Expanding the dim of the image to include a dim for the batch size
  img = tf.reshape(img_Data, [1, 224, 224, 3]);

  // Loading the model through a local URL
  const MODEL_URL = "http://127.0.0.1:8887/model.json";
  const model = await tf.loadLayersModel(MODEL_URL);

  // Getting the prediction results
  // and storing them in the result-span element
  result = model
    .predict(img)
    .data()
    .then((arr) => {
      res = arr[0] > 0.5 ? "Dog" : "Cat";
      document.querySelector(".result-span").innerHTML = `This is a ${res}`;
    });
}

function toggleShow(elem, show = false) {
  /*
  A function that toggles the display property on the entry element

  Args: 
      elem: the element we want to toggle its display property
      show: if set to true, the function will display the element
  */
  if (elem.style.display == "none" || show == true) {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

// if the DOM content is loaded, invoke the run function
window.addEventListener("DOMContentLoaded", () => {
  run();
});
