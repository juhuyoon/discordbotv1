const commando = require('discord.js-commando');

//npm install ffmpeg-binaries
//npm install opusscript

//template
class LeaveChannelCommand extends commando.Command {
    //when the bot is started or reloaded
    constructor(client) {
        super(client, {
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the voice channel of the commander'
        });
    }

    //function runs every single time command is called
    async run(message, args) {
        if(message.guild.voiceConnection){
            message.guild.voiceConnection.disconnect();
        }
        else{
            message.reply('I must be in a voice channel to be removed!');
        }
    }
}


module.exports = LeaveChannelCommand;