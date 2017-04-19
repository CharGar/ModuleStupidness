

function usdvalue(number){
  return"Account Balance: \n" + number.toLocaleString("en-US", {style: 'currency', currency: 'USD'});
}


module.exports = usdvalue
