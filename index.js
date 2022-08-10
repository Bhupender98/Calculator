let btns = document.querySelectorAll("td");
let screen = document.getElementById("screen");
let screenValue = "";
// console.log(del);
for (item of btns) {
  item.addEventListener("click", (e) => {
    btnText = e.target.innerText;
    if (btnText == "X") {
      btnText = "*";
      screenValue += btnText;
      screen.value = screenValue;
    }
    else if (btnText == "Ac") {
      screenValue = "";
      screen.value = screenValue;
      if(screenValue.length==0){
        screen.value = "0";
    }
    }else if (btnText == "=") {
      screen.value = eval(screenValue);
    }else if(btnText == "Del") {
        screenValue = screenValue.slice(0,-1);
        screen.value = screenValue;
        if(screenValue.length==0){
            screen.value = "0";
        }
    }
    else {
      screenValue += btnText;
      screen.value = screenValue;
    }
  });
//   function del(){
//     btnText = "";
//     screenValue = screenValue.slice(0,-1);
//     // screen.value = screenValue;
//   }
}
