const fs = require('fs');

const file = fs.readFileSync(__dirname + '/src/assets/resume.json');
const json = JSON.parse(file.toString());
const browserTitle = json.browserTitle;

fs.writeFileSync('.env', `REACT_APP_SITE_TITLE=${browserTitle}`);
