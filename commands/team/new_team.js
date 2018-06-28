const commando = require('discord.js-commando');

//template
class NewTeamCommand extends commando.Command {
    //when the bot is started or reloaded
    constructor(client) {
        super(client, {
            name: 'new_team',
            group: 'team',
            memberName: 'new_team',
            description: 'Creates a new team'
        });
    }

    //function runs every single time command is called
    async run(message, args) {
        currentTeamMembers = []
        message.reply("The Current Team has been Reset");
    }
}


module.exports = NewTeamCommand;