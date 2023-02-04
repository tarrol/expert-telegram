//creating function that houses all team html components to be added as a return output html file
//this will create the string that will be passed through fs to generate an html file back in index.js
const generateTeamHTML = (team) => {
  //first construct the functions to be used by object mapper
  const generateTeamLead = (teamLead) => {
    return `
    <div class="teamLeadCard card">
    <h2>${teamLead.getName()}</h2>
    <h3>Role: ${teamLead.getRole()}</h3>
    <div>
      <a class="red">Email: ${teamLead.getEmail()}</a>
      <a>Phone Number: ${teamLead.phone}</a>
    </div >
    </div >
  `;
  };

  const generateDeveloper = (developer) => {
    return `
<div class="developerCard card">
  <h2>${developer.getName()}</h2>
  <h3>Role: ${developer.getRole()}</h3>
    <div>
      <a class="blue">Email: ${developer.getEmail()}</a>
      <a>Github: ${developer.github}</a>
    </div>
</div>
    `;
  };

  const generateIntern = (intern) => {
    return `
<div class="internCard card">
    <h2>${intern.getName()}</h2>
    <h3>Role: ${intern.getRole()}</h3>
    <div>
      <a class="blue">Email: ${intern.getEmail()}</a>
      <a>School: ${intern.school}</a>
    </div>
</div>
    `;
  };

  //Now, after functions have been loaded, create array of HTML outputs for each employee with filtering based on role input from the given list of employees

  const html = [];
  html.push(
    team
      .filter(employee => employee.getRole() === "Team Lead")
      .map(teamLead => generateTeamLead(teamLead))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Developer")
      .map(developer => generateDeveloper(developer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map(intern => generateIntern(intern))
      .join("")
  );
  return html.join("");
};

//Export a full HTML template and insert team information into html body

module.exports = team => {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
${generateTeamHTML(team)}
</body>


</html>
`;
};
