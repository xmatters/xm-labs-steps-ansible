var Shell = require('xm-shell')
// create a script and pass some parameters into it.
var script = Shell.script(function () {/*#### PLACE YOUR BASH SCRIPT BETWEEN HERE ####
echo "test" > test
ansible-playbook ${playbook} -u ${username}
#### AND HERE #### */},
{playbook: input['Path to Playbook'], username: input['Username']});

// Execute the script. 
output['Output'] = Shell.exec('bash', script).output();
output['Exit Code'] = Shell.exec('bash', script).exitCode();    
output['Error'] = Shell.exec('bash', script).error();