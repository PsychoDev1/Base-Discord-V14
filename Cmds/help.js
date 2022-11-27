const Discord = require('discord.js');
const config = require("../config")

module.exports = {

    name: "help",
    description: "Allows you to know all the commands",
    permission: "Aucune",
    dm: false,
    category: "Informations",
    
    async run(bot, message, args) {

        let command; 
        if(args.getString("commande")) {
            command = bot.commands.get(args.getString("commande"));
            if(!command) return message.reply("> No order available !")
        }

        if(!command) {
            let categories = [];
            bot.commands.forEach(command => {
                if(!categories.includes(command.category)) categories.push(command.category)
            })

        let Embed = new Discord.EmbedBuilder()
            .setColor(config.color)
            .setTitle(`Here are the available commands`)
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription(`> Commands available : \`${bot.commands.size}\`\n> Categories available : \`${categories.length}\``)
            .setTimestamp()
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .setFooter({text: `${bot.user.username}`, iconURL: bot.user.displayAvatarURL()})

            await categories.sort().forEach(async cat => {

                let commands = bot.commands.filter(cmd => cmd.category === cat)
                Embed.addFields({name: `${cat}`, value: `${commands.map(cmd => `\`${cmd.name}\` : ${cmd.description}`).join("\n")}`})
            })

            await message.reply({embeds: [Embed], ephemeral: true})

        } 
    }
}