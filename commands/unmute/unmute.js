const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");
const prefix = botconfig.prefix

module.exports = {
    name: "unmute",

    async run (client, message, args) {
        let unmuteembed = new Discord.MessageEmbed()
        .setColor("Silver")
        .setDescription(`${Member.displayName}-nak/nek feloldottam a némítását!`)
        .setTimestamp("")


        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Nincs ilyen felhasználó!')
    
        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');
    
        await Member.roles.remove(role)
    
        message.channel.send(unmuteembed)

}}
