const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    //when the bot is started or reloaded
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random', 
            memberName: 'roll',
            description: 'Rolls a dice',
            examples: ['Roll']
        });
    } 

    //function runs every single time command is called
    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) +1;
        message.reply("You rolled a " + roll);
    }
}


module.exports = DiceRollCommand;