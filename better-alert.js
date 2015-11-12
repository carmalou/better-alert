exports.module = function betterAlert(text) {
  var alertDOM = document.createElement("div");
  document.body.appendChild(alertDOM);
  console.log(text);
  alertDOM.classList.add('alert');
  var contents = document.createElement("div");
  alertDOM.appendChild(contents);
  contents.classList.add('container');
  contents.innerHTML = "<h2 class=\"text\">" + text + "</h2>" +  "<button class=\"btn-primary ok-btn\" id=\"js-disableAlert\" type=\"submit\">OK</button>";
  var disable = document.getElementById('js-disableAlert');
  function removeAlert() {
    disable.removeEventListener('click', removeAlert, false);
    document.body.removeChild(alertDOM);
  }
  disable.addEventListener('click', removeAlert, false);
}
