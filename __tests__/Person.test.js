import Person from '../src/person';

describe('Person', () => {
  let person

  beforeEach(() => {
    person = new Person(34);
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
})