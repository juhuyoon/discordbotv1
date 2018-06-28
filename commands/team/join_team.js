const commando = require('discord.js-commando');

//template
class JoinTeamCommand extends commando.Command {
    //when the bot is started or reloaded
    constructor(client) {
        super(client, {
            name: 'join_team',
            group: 'team',
            memberName: 'join_team',
            description: 'Joins a current team'
        });
    }

    //function runs every single time command is called
    async run(message, args) {
        currentTeamMembers.push(message.author)

    }
}


module.exports = JoinTeamCommand;