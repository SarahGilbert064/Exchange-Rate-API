import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './services/exchangeService.js';


function convert(response, dollarAmount, currencyType) {
  if (currencyType === "eur") {  
    $("#showResult").text("Your amount of USD in European Euros is: €" + (`${response.conversion_rates.EUR}` * dollarAmount).toFixed(2));
  } 
}

$(document).ready(function() {
  $('#finalAmount').click(function(event) {
    let dollarAmount =$('#numInput').val();
    $('#numInput').val();
    let currencyType = $("input:radio:checked").val();
    
    ExchangeService.getExchange()
      .then(function(response) {
        convert(response, dollarAmount, currencyType);
        // console.log(convert);
      });

    event.preventDefault();
  });
});