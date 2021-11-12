export default class Person {

  constructor(age) {
    this.age = age;
    this.mercuryYears = Math.round((age * .24) * 100)/100;
    this.venusYears = Math.round((age * .62) * 100)/100;
    this.marsYears = Math.round((age * 1.88) * 100)/100;
  }
}