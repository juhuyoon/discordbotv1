require('dotenv').config();
const commando = require('discord.js-commando');
const bot = new commando.Client();
const TOKEN = process.env.Token;


bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


bot.on('ready', function(){
    console.log('Ready');
})

bot.login(TOKEN);