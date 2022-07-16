const fs = require('fs');

function teamFile(team) {
    const TEMPLATE_PATH = './src/index.html';
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
        <h5 class="fw-bold">${generateEmployeeSubtitleText(employee)}</h5>
      </header>
      <ul class="list-group list-group-flush">
        ${generateEmployeeInfoList(employee)}
      </ul>
    </div>
  </div>`;
};

