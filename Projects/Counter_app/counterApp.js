localStorage.setItem("value", 0);


function increment1() {
    value = parseInt(localStorage.getItem("value"));
    new_value = value + 1;
    localStorage.setItem("value", new_value);
    document.getElementById("value").innerHTML = `Value: ${new_value}`;
}

function decrement() {
    value = parseInt(localStorage.getItem("value"));
    new_value = value - 1;
    localStorage.setItem("value", new_value);
    document.getElementById("value").innerHTML = `Value: ${new_value}`;
}