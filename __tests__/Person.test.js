import Person from '../src/person';

describe('Person', () => {
  let person

  beforeEach(() => {
    person = new Person(34, "United States", "female");
  })

  test('should create a Peron object with an age', () => {
    expect(person.age).toEqual(34);
  })

  test('should create a Person object with age in Mercury years', () => {
    expect(person.mercuryYears).toEqual(8.16);
  })

  test('should create a Person object with age in Venus years', () => {
    expect(person.venusYears).toEqual(21.08);
  })

  test('should create a Person object with age in Mars years', () => {
    expect(person.marsYears).toEqual(63.92);
  })

  test('should create a Person object with age in Jupiter years', () => {
    expect(person.jupiterYears).toEqual(403.24);
  })

  test('should create Person object with country and gender', () => {
    expect(person.country).toEqual("United States");
    expect(person.gender).toEqual("female");
  })

  test('should create Person object with method to find average life expectancy', () => {
    expect(person.lifeExpectancy()).toEqual(81.4)
  })

  test('should create Person object with method to find remaining life expectancy for each planet', () => {
    expect(person.remainingLife()).toEqual(["Earth: 47.4", "Mercury: 73.24", "Venus: 60.32", "Mars: 17.48", "Jupiter: 321.84 over life expectancy"])
  })
})