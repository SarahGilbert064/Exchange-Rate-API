import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './services/exchangeService.js';


function displayRate(response) {
  for(let property in response.coversion_rates) {
  if (response.conversion_rates) {  
    // $('#show-rates').append(`${response.coversion_rates[property]}`);
    $('.show-rates').text(`Your amount in USD is ${response.conversion_rates[property]}`);
    }
  }
}




$(document).ready(function() {
  $('#final-amount').click(function(event) {
    event.preventDefault();
    Exchange.getExchange()
      .then(function(response) {
        displayRate(response);
        console.log(response);
      });
  });
});