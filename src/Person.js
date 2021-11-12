export default class Person {

  constructor(age) {
    this.age = age;
    this.mercuryYears = age * .24;
    this.venusYears = age * .62;
  }
}