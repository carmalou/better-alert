<!DOCTYPE html>
<head>
  <link href="better-alert.css" rel="stylesheet">
  <link href="index.css" rel="stylesheet">
</head>

<body>
    <h1>Better Alert</h1>

    <p class="lead">Do you hate native alerts? I do too! That's why I wrote this plug-in to help with that.</p>

    <h1>Demo</h1>

    <button id="js-tryIt" class="btn btn-default">Click me!</button>

    <h1>How to use it</h1>

    <p>To use better-alert, simply download this project, and place the files into your JavaScript and CSS directories. If you are using SCSS, change the CSS file extension to SCSS and import it into your main CSS file.

    Require the better-alert.js file in any files you'd like to use alerting in.</p>

    <pre>
      <code>
        var betterAlert = require(<filepath to get to better-alert.js>);
        betterAlert("Isn't this awesome??");
      </code>
    </pre>

    <p>And that's all there is to it!</p>

    <p>Please feel free to share and use.</p>

<script>
  var tryIt = document.getElementById('js-tryIt');

  function betterAlert(text) {
    var alertDOM = document.createElement("div");
    document.body.appendChild(alertDOM);
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

  function tryOnClick() {
    betterAlert("Isn't better-alert great?");
  }

  tryIt.addEventListener("click", tryOnClick, false);
</script>
</body>
</html>
