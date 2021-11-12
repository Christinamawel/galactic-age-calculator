import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import Person from './person';

$("form#person-form").submit(function(event) {
  event.preventDefault();
  const age = parseInt($("#age").val());
  const country = $("#country-select").val();
  const gender = $("#gender-select").val();
  const user = new Person(age, country, gender);
  const userLifeExpArray = user.remainingLife();
  
  $("#person-form").hide();
  $("#output").show();

  $("#mercury-age").text(user.mercuryYears);
  $("#venus-age").text(user.venusYears);
  $("#mars-age").text(user.marsYears);
  $("#jupiter-age").text(user.jupiterYears);

  userLifeExpArray.forEach(function(exp) {
    $("#life-expectancy").append(`<li>${exp}</li>`);
  })
})