
function toCelsius(temp){
    return (temp - 32) * (5 / 9);
};

function toFarenheit(temp){
    return temp * 9 / 5 + 32;
};

document.getElementById("submitButton").onclick = function(){

    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLable").innerHTML = temp + "°С";
    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFarenheit(temp);
        document.getElementById("tempLable").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("tempLable").innerHTML = "Select a unit";
    }

}
