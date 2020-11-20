import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Exchange from '../services/exchangeService.js';


function displayRate(response) {
  if (response.conversion_rates) {  
    $('#rates').append(`${response.coversion_rates}`);
    }
  }




$(document).ready(function() {
  $('#final-amount').click(function() {
    Exchange.getExchange()
      .then(function(response) {
        displayRate(response);
        console.log(response);
      })
  });
});