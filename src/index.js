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
  
  $("#person-form").hide();
  $("#output").show();

  $("#mercury-age").text(`${user.mercuryYears} years`);
  $("#venus-age").text(`${user.venusYears} years`);
  $("#mars-age").text(`${user.marsYears} years`);
  $("#jupiter-age").text(`${user.jupiterYears} years`);

  
  $("#life-expectancy").append(user.earthExp >= 0 ? `<li>Earth: ${user.earthExp} </li>`: `<li>Earth: ${user.earthExp *= -1} over life expectancy</li>`);
  $("#life-expectancy").append(user.mercuryExp >= 0 ? `<li>Mercury: ${user.mercuryExp} </li>`: `<li>Mercury: ${user.mercuryExp *= -1} over life expectancy</li>`);
  $("#life-expectancy").append(user.venusExp >= 0 ? `<li>Venus: ${user.venusExp} </li>`: `<li>Venus: ${user.venusExp *= -1} over life expectancy</li>`);
  $("#life-expectancy").append(user.marsExp >= 0 ? `<li>Mars: ${user.marsExp} </li>`: `<li>Mars: ${user.marsExp *= -1} over life expectancy</li>`);
  $("#life-expectancy").append(user.jupiterExp >= 0 ? `<li>Jupiter: ${user.jupiterExp} </li>`: `<li>Jupiter: ${user.jupiterExp *= -1} over life expectancy</li>`);
});