function sumFactors(n){
  var result = [];
  inverseN = Math.pow(n,0.5);
  for(var i = 1; i <= inverseN + 1; i++){
    if(n % i == 0){
      result.push(i)
      result.push(Math.floor(n/i));
    }
  }
  var index = result.indexOf(n);
  result.splice(index, 1);
  var sum = 0;
  for(var i = 1; i < result.length; i++){
    sum += result[i];
  }
  return sum+1;
}

function amicablePairs(number){
  var counterNum = sumFactors(number);
  if(sumFactors(counterNum) == number && number != counterNum){
    return number > counterNum ? [counterNum,number]: [number,counterNum];
  }
  return null;
}

$(document).ready(function() {
  var at = 1;
  $("#get-next").click(function() {
    var pair;
    while(!pair){
      pair = amicablePairs(at);
      at++;
    }
    $("#first-num").text(pair[0]);
    $("#second-num").text(pair[1]);
    at = pair[1] + 1;
  });

});