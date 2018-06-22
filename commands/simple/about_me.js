const commando = require('discord.js-commando');
const discord = require('discord.js');

//template
class AboutMeCommand extends commando.Command {
    //when the bot is started or reloaded
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Anything you want to know about me!'
        });
    }

    //function runs every single time command is called
    async run(message, args) {
            var myInfo = new discord.RichEmbed()
                .setTitle("Click me for my website!")
                .addField("About Me", "Name: Jung", true)
                .addField("Side Text", "Secret Info!", false)
                .setDescription("I'm learning how to program!")
                .setColor(0xFF5733) //hexcode for orange!
                .setThumbnail(message.author.avatarURL) //can input your own photos inside and connect it to directory!
                .setURL("https://github.com/juhuyoon")
                .setFooter("Thanks for reading and contact me whenever you want!")

            message.channel.send(myInfo);
    }
}


module.exports = AboutMeCommand;