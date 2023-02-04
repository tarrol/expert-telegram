const Developer = require("../lib/developer")

//default parameters || non-tested parameter declaration
const name = 'Andrew'
const id = 12345
const email = 'Andrew@gmail.com'
const github = 'tarrol'

test('Create a developer with a github parameter', () => {
  const testValue = 'tarrol'
  const d = new Developer(name, id, email, testValue)
  expect(d.github).toBe(testValue)
})

test('Call getGithub() and return a github parameter', () => {
  const testValue = 'tarrol'
  const d = new Developer(name, id, email, testValue)
  expect(d.getGithub()).toBe(testValue)
})

test('Call getRole(), and return "Developer"', () => {
  const testValue = "Developer"
  const d = new Developer(name, id, email)
  expect(d.getRole()).toBe(testValue)
})