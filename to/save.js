var shell = require('shelljs');

module.exports = async function*(args) {
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
  }
  if (shell.exec(`npm run build`).code !== 0){
    shell.echo('Error: Build step failed')
    shell.exit(1)
    return;
  }
  let type = yield {
    message: "Type of commit",
    type: "list",
    choices: ["💎 Feature", "🐛 Bug Fix", "🎨 Styling", "⚡ Refactor", "✅ Testing", "📚 Docs", "🔨 Chore"]
  }
  let action = yield {
    message: "Summary (ex: \"Fix Bug\")",
    type: "input"
  }
  let details = yield {
    message: "Explain changes and why you made them"
  }
  if (shell.exec(`git add . && git commit -m "${type}: ${action}" -m "${details}"`).code !== 0){
    shell.echo('Error: Git commit failed')
    shell.exit(1)
    return;
  }
  let shouldPush = yield {
    message: "Push changes to remote?",
    type: "confirm"
  }
  if(shouldPush){
    if (shell.exec(`git push -u origin master`).code !== 0){
      shell.echo('Error: Git Push failed')
      shell.exit(1)
      return;
    }
  }
}