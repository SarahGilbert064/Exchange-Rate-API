import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './services/exchangeService.js';


function convert(response, dollarAmount, currencyType) {
  if(response.base_code) {
    if (currencyType === "eur") {  
      $("#showResult").text("Your amount of USD in European Euros is : €" + (`${response.conversion_rates.EUR}` * dollarAmount).toFixed(2));
    } else if (currencyType === "gbp") {
      $("#showResult").text("Your amount of USD in Great British Pounds is : £" + (`${response.conversion_rates.GBP}` * dollarAmount).toFixed(2));
    } else if (currencyType === "thb") {
      $("#showResult").text("Your amount of USD in Thai Baht is : ฿" + (`${response.conversion_rates.THB}` * dollarAmount).toFixed(2));
    } else if (currencyType === "zar") {
      $("#showResult").text("Your amount of USD in South African Rand is : R" + (`${response.conversion_rates.ZAR}` * dollarAmount).toFixed(2));
    } else if (currencyType === "jpy") {
      $("#showResult").text("Your amount of USD in Japanese Yen is : ¥" + (`${response.conversion_rates.JPY}` * dollarAmount).toFixed(2));
    } else {
      $("#showResult").text("Please specify a currency");
    }
  } else {
    $("#showError").text(`There was an error: ${response.message}`);
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
      });

    event.preventDefault();
  });
});