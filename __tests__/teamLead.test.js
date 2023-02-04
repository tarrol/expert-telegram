const teamLead = require("../lib/teamLead")

//default parameters || non-tested parameter declaration
const name = 'Andrew'
const id = 12345
const email = 'Andrew@gmail.com'
const phone = 9495555555

test('Return the phone parameter from a teamLead object', () => {
  const testValue = phone
  const tL = new teamLead(name, id, email, testValue)
  expect(tL.phone).toBe(testValue)
})

test('Call the getPhone() function and return a phone number', () => {
  const testValue = phone
  const tL = new teamLead(name, id, email, testValue)
  expect(tL.getPhone()).toBe(testValue)
})

test('Call the getRole() function and return "Team Lead"', () => {
  const testValue = 'Team Lead'
  const tL = new teamLead(name, id, email, phone)
  expect(tL.getRole()).toBe(testValue)
})