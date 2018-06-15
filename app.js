require('dotenv').config();


const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.Token;

bot.on('message', function(message){
    if(message.content == 'Hello'){
        {
            message.reply("Hello, how are you?");
        }
    }
});

bot.on('ready', function(){
    console.log('Ready');
})

bot.login(TOKEN);