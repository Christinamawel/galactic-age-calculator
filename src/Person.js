import lifeExpectancy from "./LifeExpectancy";

export default class Person {

  constructor(age, country, gender) {
    this.age = age;
    this.country = country;
    this.gender = gender;
    this.mercuryYears = Math.round((age * .24) * 100)/100;
    this.venusYears = Math.round((age * .62) * 100)/100;
    this.marsYears = Math.round((age * 1.88) * 100)/100;
    this.jupiterYears = Math.round((age * 11.86) * 100)/100;
    this.expectancy = lifeExpectancy(this.country, this.gender);
    this.earthExp = Math.round((this.expectancy - this.age)* 100)/100;
    this.mercuryExp = Math.round((this.expectancy - this.mercuryYears)* 100)/100;
    this.venusExp = Math.round((this.expectancy - this.venusYears)* 100)/100;
    this.marsExp = Math.round((this.expectancy - this.marsYears)* 100)/100;
    this.jupiterExp = Math.round((this.expectancy - this.jupiterYears)* 100)/100;
  }
}