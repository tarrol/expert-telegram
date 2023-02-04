const Employee = require("../lib/employee")

//default parameters || non-tested parameter declaration
const name = 'Andrew'
const id = 12345
const email = 'Andrew@gmail.com'

//Employee Object Creation
test("Can create an Employee object", () => {
  const e = new Employee()
  expect(typeof (e)).toBe('object')
});

test("Create an Employee object with a name", () => {
  const testValue = 'Andrew'
  const e = new Employee(testValue)
  expect(e.name).toBe(testValue)
})
test("Create an Employee object with an id", () => {
  const testValue = 12345
  const e = new Employee(name, testValue)
  expect(e.id).toBe(id)
})
test('Create an Employee object with an email', () => {
  const testValue = 'Andrew@gmail.com'
  const e = new Employee(name, id, testValue)
  expect(e.email).toBe(email)
})

//Employee Function calls

test('Call getName()', () => {
  const testValue = 'Andrew'
  const e = new Employee(testValue)
  expect(e.getName()).toBe(name)
})

test('Call getId()', () => {
  const testValue = 12345
  const e = new Employee(name, testValue)
  expect(e.getId()).toBe(testValue)
})

test('Call getEmail()', () => {
  const testValue = 'Andrew@gmail.com'
  const e = new Employee(name, id, testValue)
  expect(e.getEmail()).toBe(testValue)
})
test('Call getRole()', () => {
  const testValue = 'Employee'
  const e = new Employee(name, id, email)
  expect(e.getRole()).toBe(testValue)
})