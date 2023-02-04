const Intern = require("../lib/intern")

//default parameters || non-tested parameter declaration
const name = 'Andrew'
const id = 12345
const email = 'Andrew@gmail.com'
const school = 'UCI'

test('Get school parameter from intern object', () => {
  const testValue = 'UCI'
  const i = new Intern(name, id, email, testValue)
  expect(i.school).toBe(testValue)
})

test('Use getSchool() to return intern.school', () => {
  const testValue = school
  const i = new Intern(name, id, email, testValue)
  expect(i.getSchool()).toBe(testValue)
})

test('Use getRole() to return "Intern"', () => {
  const testValue = 'Intern'
  const i = new Intern(name, id, email, school)
  expect(i.getRole()).toBe(testValue)
})

