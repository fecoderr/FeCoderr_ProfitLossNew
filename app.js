var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output");

submitBtn.addEventListener("click", submitHandler)

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if(initial<0 || quantity<0 || current<0){
        showOutput('Enter a valid number');

    }else{
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showOutput(`The loss is ${loss} and the percentage is ${lossPercentage} %`);
    }else if(current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        showOutput(`The profit is ${profit} and the percentage is ${profitPercentage} %`);
    }else{
        showOutput(`There is No Profit No Loss!!`)
    }
}
}

function showOutput(message) {
    output.innerHTML = message;
}