function GerarQRCode(){
    var inputUsuario = document.querySelector('textarea').value;
    var GoogleChartsAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=';
    var conteudoQRCode = GoogleChartsAPI + inputUsuario;
    document.querySelector('#QRCodeImage').src = conteudoQRCode;

}