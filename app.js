const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log('Bot is online');
})

client.on('message', (msg) => {
  if (msg.content === 'Hello') msg.reply(`Don't fucking talk to me, scrub.`);
});

client.on('message', (msg) => {
  if (msg.content === 'Bad bot :(') {
    msg.reply(`${msg.content} ${msg.content} ${msg.content} ${msg.content} ${msg.content}`);
    console.log(msg.author.username);
  }
});