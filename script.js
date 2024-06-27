let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let string = "";

let buttonArray = Array.from(buttons);

buttonArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "AC":
        string = "";
        input.value = string;
        break;
      case "DEL":
        string = string.slice(0, -1);
        input.value = string;
        break;
      case "=":
        try {
          string = eval(string);
          input.value = string;
        } catch (error) {
          string = "Error";
          input.value = string;
        }
        break;
      default:
        string += e.target.innerHTML;
        input.value = string;
        break;
    }
  });
});
