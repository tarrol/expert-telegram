const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

function App() {
  console.log("Hello world.");
  // Start building the team using 
  function createTeamLead() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'teamLeadName',
        message: 'What is the name of the of the team lead?'
      }
    ])
      .then((answer) => {
        console.log(answer.teamLeadName);
      })
  }
  createTeamLead();
}

App();