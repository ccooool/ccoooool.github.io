var ghpages = require('gh-pages');

const source = 'public';
const branch = 'master';
const repo = 'https://github.com/ccooool/ccooool.github.io ';

const callback = () => { console.log(`Finished deployment from ${source} to the ${branch} branch of ${repo} github repository!`)};

ghpages.publish(source, { branch, repo }, callback);