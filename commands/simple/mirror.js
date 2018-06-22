const commando = require('discord.js-commando');

//template
class MirrorCommand extends commando.Command {
    //when the bot is started or reloaded
    constructor(client) {
        super(client, {
            name: 'mirror',
            group: 'simple',
            memberName: 'mirror',
            description: 'Looks at your reflection in a mirror'
        });
    }

    //function runs every single time command is called
    async run(message, args) {
        message.reply(message.author.avatarURL);
    }
}


module.exports = MirrorCommand;