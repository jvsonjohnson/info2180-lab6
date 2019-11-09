window.onload = function() {
  var query = document.getElementById("txtBox");
  var btn = document.getElementsByClassName("btn");
  var result = document.getElementById("result");

  btn[0].addEventListener("click", function() {
    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        result.innerHTML = this.responseText;
      }
    };

    http.open("GET", "superheroes.php?query=" + query, true);
    http.send();
  });
};
