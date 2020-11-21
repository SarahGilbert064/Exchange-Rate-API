import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './services/exchangeService.js';

function clearFields() {
  $("#dollar-amount").val("");
  // $(".EUR-rate").val("");
  // $(".GBP-rate").val("");
  // $(".THB-rate").val("");
  // $(".ZAR-rate").val("");
  // $(".JPY-rate").val("");
}


function displayRate(response) {
  if (response.conversion_rates) {  
    $(".EUR-rate").text(`${response.coversion_rates}`);
  }
}


$(document).ready(function() {
  $('#final-amount').click(function(event) {
    // let dollarAmount = parseInt($('#dollar-amount').val());
    let currencyType = $("#currency-type").val();
    clearFields();
    
    let promise = ExchangeService.getExchange();
    promise.then(function(response) {
      const data = JSON.parse(response);

      displayRate(response);
      console.log(response);
    });
    event.preventDefault();
  });
});