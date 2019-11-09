window.onload = function() {
  var btn = document.getElementsByClassName("btn");
  var result = document.getElementById("result");

  btn[0].addEventListener("click", function() {
    let searchValue = document.getElementById("txtBox").value;
    console.log(searchValue);
    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        result.innerHTML = this.responseText;
      }
    };

    http.open("GET", "superheroes.php?query=" + searchValue, true);
    http.send();
  });
};
