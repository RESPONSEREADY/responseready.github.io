const alexa = new Alexa({version: '0.2'});
alexa.onReady((message) => {
    document.getElementById('loader').innerHTML = '<iframe src="assets/templates/default.html" width="100%" height="100%"></iframe>';
});
alexa.onReadyFailed((error) => {
    document.getElementById('loader').innerHTML = '<center><h1>:( Das hat nicht funktioniert:' + error + ' </h1></center>';
});
