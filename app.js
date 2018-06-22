require('dotenv').config();
const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = process.env.Token;

//command group name
bot.registry.registerGroup('simple', "Simple");
bot.registry.registerGroup('music', "Music");
//instructions of what the commands are
bot.registry.registerDefaults();
//where the commands will go
bot.registry.registerCommandsIn(__dirname + '/commands');


bot.on('message', function(message){
    if(message.content == "Hello")
    {
        //will respond with the user's name
        message.reply("Hello, how are you?");
    }   //will send the message without any mentions of the username on the channel
        else if(message.content == "Yo")
    {
        message.channel.sendMessage('Yo, ' +  message.author + ' whats up?');
    }
});

bot.on('ready', function() {
    console.log("Ready");
})

bot.login(TOKEN);