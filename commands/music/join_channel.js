const commando = require('discord.js-commando');

//npm install ffmpeg-binaries
//npm install opusscript

//template
class JoinChannelCommand extends commando.Command {
    //when the bot is started or reloaded
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the voice channel of the commander'
        });
    }

    //function runs every single time command is called
    async run(message, args) {
        if(message.member.voiceChannel){
            if(!message.guild.voiceConnection){
                message.member.voiceChannel.join()
                    .then(connection => {
                        message.reply('Joined Successfully');
                     })
            }
        }
        else{
            message.reply("You must be in a voice channel to call me!");
        }
    }
}


module.exports = JoinChannelCommand;