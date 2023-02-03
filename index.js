const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Employees = []

function App() {
  console.log("Hello world.");
  // Start building the team using
  function createTeamLead() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "teamLeadName",
          message: "What is the name of the team lead?",
        },
        {
          type: "input",
          name: "teamLeadID",
          message: "What is the ID of the team lead?",
        },
        {
          type: "input",
          name: "teamLeadEmail",
          message: "What is the email of the team lead?",
        },
        {
          type: "input",
          name: "teamLeadPhone",
          message: "What is the phone number of the team lead?",
        },
      ])
      .then((answer) => {
        console.log(answer.teamLeadName);
        console.log(answer.teamLeadID);
        console.log(answer.teamLeadEmail);
        console.log(answer.teamLeadPhone);
        chooseNextStep();
      });
  }
  function chooseNextStep() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "Please select what you want to do next.",
          choices: [
            'Add an Developer to this team',
            'Add an Intern to this team',
            'I am done with my team',
          ],
        },
      ])
      .then((choice) => {
        switch (choice.choice) {
          case 'Add an Developer to this team':
            createDeveloper();
            break;
          case 'Add an Intern to this team':
            createIntern();
            break;
          default:
            console.log("Goodbye.");
            break;
        }
      });
    function createDeveloper() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "developerName",
            message: "What is the name of the developer?",
          },
          {
            type: "input",
            name: "developerID",
            message: "What is the ID of the developer?",
          },
          {
            type: "input",
            name: "developerEmail",
            message: "What is the email of the developer?",
          },
          {
            type: "input",
            name: "developerGithub",
            message: "What is the github name of the developer?",
          },
        ])
        .then((answer) => {
          console.log(answer.developerName);
          console.log(answer.developerID);
          console.log(answer.developerEmail);
          console.log(answer.developerGithub);
          chooseNextStep();
        });
    }
    function createIntern() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "internName",
            message: "What is the name of the Intern?",
          },
          {
            type: "input",
            name: "internID",
            message: "What is the ID of the Intern?",
          },
          {
            type: "input",
            name: "internEmail",
            message: "What is the email of the Intern?",
          },
          {
            type: "input",
            name: "internSchool",
            message: "What is the school the Intern is attending?",
          },
        ])
        .then((answer) => {
          console.log(answer.internName);
          console.log(answer.internID);
          console.log(answer.internEmail);
          console.log(answer.internSchool);
          chooseNextStep();
        });
    }
  }
  createTeamLead();
}

App();
