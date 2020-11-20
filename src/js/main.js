import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';

$(document).ready(function() {
  $('#final-amount').click(function() {
    const usd = $('#dollar-amount').val();



    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD`;

    request.onload = function() {
      if (this.status === 200 {
        const response = JSON.parse(this.responseText);
        getElements(response);

      }
    )}
  })
});