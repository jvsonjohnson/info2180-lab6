window.onload = function() {
  var http = new this.XMLHttpRequest();

  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };

  http.open("GET", "superheroes.php", true);
  http.send();

  var btn = document.getElementsByTagName("button");

  btn[0].addEventListener("click", function() {
    $.get("superheroes.php", function(data) {
      alert(data);
    });
  });
};
