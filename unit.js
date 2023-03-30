var lengthinmeter=document.getElementById("meter");
var lengthincentimeter=document.getElementById("centimeter")
meter.addEventListener("keyup",result);

function result()
{
    lengthincentimeter.value=Number(lengthinmeter.value)*100;
}

