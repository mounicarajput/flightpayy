var estimate = document.getElementById("field-3");
document
  .getElementById("submit-button")
  .addEventListener("click", onEstimatePress);
function onEstimatePress() {
  document.getElementById("name-2").value =
    "₹ " + Math.round(estimate.value * 0.45);
}

document.addEventListener("DOMContentLoaded", function () {
  var datepicker = document.getElementById("datepicker");
  var currentDate = new Date();
  datepicker.value = currentDate.toISOString().slice(0, 10);
});
