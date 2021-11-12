import Person from '../src/person';

describe('Person', () => {

  test('should create a Peron object with an age', () => {
    const person = new Person(34);
    expect(person.age).toEqual(34);
  })
})