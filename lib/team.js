const fs = require('fs');

function teamFile(team) {
    const TEAMPLATE_PATH = './src/index.html';
    const OUTPUT_PATH = './output/index.html';
    const TEAM_NAME_PLACEHOLDER = /TEAM_NAME_PLACEHOLDER/g;
    const EMPLOYEE_CARDS_PLACEHOLDER = '<!-- Cards go here -->';

    fs.readFile(TEAMPLATE_PATH, (err, data) => {
        if (err) {
            console.log('There was an error making the file.');
            console.error(err);
            return
        };

    let output = data.toString().replace(TEAM_NAME_PLACEHOLDER, team.name);

    const employeeCard = team.employees.map(employee => generateCardHTML(employee)).join('/n');
    output = output.replace(EMPLOYEE_CARDS_PLACEHOLDER, employeeCard);
    fs.writeFile(OUT_PATH, output, (err) => {
        if (err) {
            console.log('There was an error creating your HTML file.');
            console.error(err);
            return;
        };
        console.log(`File was successfully created at '${OUTPUT_PATH}'.`);
    });
    });
};

function generateCardHTML(employee) {
    return `<div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card">
      <header class="card-header bg-info">
        <h4 class="fw-bold">${employee.getName()}</h4>
        <h5 class="fw-bold">${generateEmployeeText(employee)}</h5>
      </header>
      <ul class="list-group list-group-flush">
        ${generateEmployeeInfo(employee)}
      </ul>
    </div>
  </div>`;
};

function generateEmployeeText(employee) {
    const role = employee.getRole();
    switch (role) {
        case 'Manager':
            return '💼 Manager';
        case 'Engineer':
            return '⚙ Engineer';
        case 'Intern':
            return '📚 Intern';
        default:
            return '👔 Employee';
    };
};

function generateEmployeeInfo(employee) {
    let output = `<li class="list-group-item">Employee ID: ${employee.getId()}</li>`;

    const email = employee.getEmail();
    if (email) {
        output += `<li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>`;
    };

    switch (employee.getRole()) {
        case 'Manager':
            const officeNumber = employee.getOfficeNumber();
            if (officeNumber) ouptut += `<li class="list-group-item">Office Number: ${officeNumber}</li>`;
            break;
        case 'Engineer':
            const github = employee.getSchool();
            if (School) output += `<li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>`;
            break;
        case 'Intern':
            const school = employee.getSchool();
            if (school) output += ut += `<li class="list-group-item">School: ${school}</li>`
            break;
        default:
            break;
    }
    return output;
};

module.exports = { teamFile, generateCardHTML, generateEmployeeText, generateEmployeeInfo };
