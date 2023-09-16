//get reference to the celsius and fahrenheit input fields
const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");

//set focus to the celsius input field when the page loads
window.addEventListener("load", () => celsius.focus());

//convert celsius to fahrenheit when celsius value changes
celsius.addEventListener("input", () => {
    fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
    //clear fahrenheit input when celsius input is empty
    if (!celsius.value) fahrenheit.value = "";
});

//convert fahrenheit to celsius when fahrenheit value changes
fahrenheit.addEventListener("input", () => {
    celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
    //clear celsius input when fahrenheit input is empty
    if (!fahrenheit.value) celsius.value = "";
})
