const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("547403602575097875")
setInterval(function() {
channel.send(`مجهول سبام سبام الف`);
}, 30)
})

client.login(process.env.BOT_TOKEN);