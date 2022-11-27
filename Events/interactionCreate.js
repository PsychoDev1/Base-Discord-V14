const Discord = require("discord.js")

module.exports = async (bot, interaction, args) => {

    if (interaction.isChatInputCommand()) {
        const command = interaction.client.commands.get(interaction.commandName);
          command.run(bot, interaction, interaction.options);
      }
}