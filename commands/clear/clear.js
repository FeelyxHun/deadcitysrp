const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");
const prefix = botconfig.prefix

module.exports = {
    name: "clear",

    async run (client, message, args) {

        let parancsEmbed = new Discord.MessageEmbed()
          .setTitle("Parancs használata:")
          .addField(`\`${prefix}clear <1-99-ig adj meg egy számot!>\``, "˘˘˘")
          .setColor("BLUE")

        ////DELETEEMBED
        let deleteembed = new Discord.MessageEmbed()
        .setTitle("Purge")
        .setColor("RED")
        .setDescription(args[0]  + " üzenet törölve")

        message.delete()

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nincs hozzá jogod!")
    if(!args[0]) return message.channel.send(parancsEmbed)
    if(isNaN(args[0])) return message.channel.send(parancsEmbed)
    if(parseInt(args[0]) > 99) return message.channel.send(parancsEmbed)
    await message.channel.bulkDelete(parseInt(args[0]) + 1)
        .catch(err => console.log(err))
    message.channel.send(deleteembed)

        }}

    