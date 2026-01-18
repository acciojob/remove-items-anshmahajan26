//your JS code here. If required.
// get select element
let select = document.getElementById("colorSelect");

// get the button
let btn = document.querySelector('input[type="button"]');

// add click event
btn.addEventListener("click", function () {
  // get selected index
  let index = select.selectedIndex;

  // remove selected option
  if (index !== -1) {
    select.remove(index);
  }
});
