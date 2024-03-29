const Employee = require("./employee")

class TeamLead extends Employee {
  constructor(name, id, email, phone) {
    super(name, id, email);
    this.phone = phone;
  }
  getRole() { return 'Team Lead' }
  getPhone() { return this.phone }
}

module.exports = TeamLead;