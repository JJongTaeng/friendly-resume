const fs = require('fs');

const file = fs.readFileSync(__dirname + '/src/assets/resume.json');
const json = JSON.parse(file.toString());
const browserTitle = json.browserTitle;
const meta = json.meta;

fs.writeFileSync('.env', `REACT_APP_SITE_TITLE=${browserTitle}\n`);
if(meta) {
  fs.appendFileSync('.env', `REACT_APP_META_TAG=${meta}`);
}
