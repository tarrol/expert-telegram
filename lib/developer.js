const Employee = require('./employee')

class Developer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
  }
  //return role and github
  getRole() { return 'Developer' }
  getGithub() { return this.github }
}

module.exports = Developer;