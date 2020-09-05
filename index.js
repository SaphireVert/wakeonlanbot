const TeleBot = require('telebot');
const token = require('./secrets.json');
const BOT_TOKEN = token.BOT_TOKEN;
const bot = new TeleBot(BOT_TOKEN);

// const utils = require('./utils.js');



bot.on('/wol', (msg) => {
    msg.reply.text(msg.text);
    console.log(msg);
    if(msg.from.id == 976140946){
      console.log("Yeah, la bonne personne !");
      const exec = require('child_process').exec;
      const myShellScript = exec('sh wol_PC.sh');
      myShellScript.stdout.on('data', (data)=>{
          console.log(data);
          // do whatever you want here with data
      });
      myShellScript.stderr.on('data', (data)=>{
          console.error(data);
      });
    } else {
      console.log("Merde ! Un intrus !");
    }
});
bot.on('/reboot', (msg) => {
    msg.reply.text("Rebooting...");
    console.log(msg);
    if(msg.from.id == 976140946){
      console.log("Yeah, la bonne personne !");
      const exec = require('child_process').exec;
      const myShellScript = exec('scriptReboot.sh');
      myShellScript.stdout.on('data', (data)=>{
          console.log(data);
          // do whatever you want here with data
      });
      myShellScript.stderr.on('data', (data)=>{
          console.error(data);
      });
    } else {
      console.log("Merde ! Un intrus !");
    }
});
// bot.on('/wol', (msg) => msg.reply.text(msg));

bot.start();
