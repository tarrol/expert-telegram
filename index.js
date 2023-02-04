const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Intern = require('./lib/intern')
const TeamLead = require('./lib/teamLead')
const Developer = require('./lib/developer')
const render = require('./src/page-template')

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');


const employeeList = []

function App() {
  console.log("Welcome to TEAM-HTML.");
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
        const teamLead = new TeamLead(
          answer.teamLeadName,
          answer.teamLeadID,
          answer.teamLeadEmail,
          answer.teamLeadPhone,
        )
        console.log(`Team leader ${answer.teamLeadName} saved`);
        employeeList.push(teamLead)
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
            createHTML();
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
          const developer = new Developer(
            answer.developerName,
            answer.developerID,
            answer.developerEmail,
            answer.developerGithub,
          )
          console.log(`Developer ${answer.developerName} saved`);
          employeeList.push(developer)
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
          const intern = new Intern(
            answer.internName,
            answer.internID,
            answer.internEmail,
            answer.internSchool,
          )
          console.log(`Intern ${answer.internName} saved`);
          employeeList.push(intern)

          chooseNextStep();
        });
    }
  }
  function createHTML() {
    // Create the output directory if the dist path doesn't exist
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(employeeList), 'utf-8');
  }

  createTeamLead();
}

App();
