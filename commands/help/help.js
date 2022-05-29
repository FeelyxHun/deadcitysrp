const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");
const prefix = botconfig.prefix

module.exports = {
    name: "help",
    description: "help",

    async run (client, message, args) {

        let HelpEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .addFields(
            {name: 'Moderátor Prancsok', value: `${prefix}mute, ${prefix}unmute, ${prefix}clear, ${prefix}giveaway`},
            {name: 'Admin Prancsok', value: `${prefix}help, ${prefix}helpcmd`},
            {name: 'Fun Prancsok', value: `${prefix}love, ${prefix}dick`}
            )
        .setTimestamp("")

        message.channel.send(HelpEmbed)

        }}
