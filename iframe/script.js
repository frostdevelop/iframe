function inp() {
  var link = "https://" + document.getElementById('in').value
  document.getElementById('ifr').innerHTML = "<iframe width='800px' height='600px' src='" + link + "'title='Your Iframe'></iframe>"
}