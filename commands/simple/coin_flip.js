const commando = require('discord.js-commando');

//template 
class CoinFlipCommand extends commando.Command {
    constructor(client){
        super(client,{
            name: 'flip',
            group: 'simple', 
            memberName: 'flip', 
            description: 'Flips a coin on command and lands on either heads or tails. '
        });
    }

    async run(message, args){
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0 || chance == 3 || chance == 6){
            message.reply("Your coin landed on Heads!");
        } else {
            message.reply("Your coin landed on Tails!");
        }
    }

}

module.exports = CoinFlipCommand;