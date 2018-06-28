require('dotenv').config();
const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client();
const TOKEN = process.env.Token;

//command group name
bot.registry.registerGroup('simple', "Simple");
bot.registry.registerGroup('music', "Music");
bot.registry.registerGroup('team', 'Team');
//instructions of what the commands are
bot.registry.registerDefaults();
//where the commands will go
bot.registry.registerCommandsIn(__dirname + '/commands');

//global variable to print team members
global.currentTeamMembers = []


bot.on('message', function(message){
    if(message.content == "Hello")
    {
        //will respond with the user's name
        message.reply("Hello, how are you?");
    }   //will send the message without any mentions of the username on the channel
        else if(message.content == "Yo")
    {
        message.channel.sendMessage('Yo, ' +  message.author + ' whats up?');
    } else if (message.content == "What's the current team?") {
            var teamInfo = new discord.RichEmbed()
                .setTitle("Current Team Members")
                for(var i = 0; i < currentTeamMembers.length; i++) {
                    teamInfo.addField("Member " + (i+1).toString(), currentTeamMembers[i].username) 
                }
                message.channel.send(teamInfo);
    }
});

bot.on('ready', function() {
    console.log("Ready");
})

bot.login(TOKEN);