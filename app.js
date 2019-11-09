window.onload = function() {
  var btn = document.getElementsByClassName("btn");
  var result = document.getElementById("result");

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function ucFirstAllWords(str) {
    var pieces = str.split(" ");
    for (var i = 0; i < pieces.length; i++) {
      var j = pieces[i].charAt(0).toUpperCase();
      pieces[i] = j + pieces[i].substr(1);
    }
    return pieces.join(" ");
  }

  btn[0].addEventListener("click", function() {
    let searchValue = document.getElementById("txtBox").value;
    let s_value = ucFirstAllWords(searchValue);

    console.log(searchValue);
    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        result.innerHTML = this.responseText;
      }
    };

    http.open("GET", "superheroes.php?query=" + s_value, true);
    http.send();
  });
};
