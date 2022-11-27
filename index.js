const Discord = require("discord.js") 
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const config = require("./config")
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require('./Loaders/loadEvents')

bot.commands = loadCommands('./Cmds/');

bot.fonction = {
    createId: require("./Fonctions/createId")
}

bot.login(config.token)

loadCommands.bind(bot)('./Cmds/');
loadEvents(bot)