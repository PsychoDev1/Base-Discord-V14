const loadSlashCommand = require('../Loaders/loadSlashCommands');
const { ActivityType } = require('discord.js');

module.exports = async (bot) => {

    await loadSlashCommand(bot);
    console.log(`${bot.user.tag} est en ligne.`);

    bot.user.setPresence({
      activities: [{name: `${bot.users.cache.size} members`, type: ActivityType.Watching}]
  });
}