const exec = require('child_process').exec;
const myShellScript = exec('sh wol_PC.sh');
myShellScript.stdout.on('data', (data)=>{
    console.log(data);
    // do whatever you want here with data
});
myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});
