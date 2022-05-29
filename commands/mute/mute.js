const Discord = require('discord.js');
const ms = require('ms')
const botconfig = require("../../botconfig.json");
const prefix = botconfig.prefix

module.exports = {
    name: "mute",

    async run (client, message, args) {

        let parancsEmbed = new Discord.MessageEmbed()
          .setTitle("Parancs használata:")
          .addField(`\`${prefix}mute <@név> [időkorlát(pl: 1h)]\``, "˘˘˘")
          .setColor("BLUE")


        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(!member) return message.reply(parancsEmbed)

            let role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
            
            if (!role) return message.reply("Nem találom a ```Muted Rangot```")

            let time = args[1];
            if (!time) {
                return message.reply(parancsEmbed);
            }

            member.roles.add(role.id);

            message.channel.send(`${member.user} le lett muteolva, ennyi időre: ${ms(ms(time))}`)

            setTimeout( function () {
                member.roles.remove(role.id);
                message.channel.send(`${member.user}-nak/nek feloldottam a némítását.`)
            }, ms(time));

        } else {
            return message.channel.send('Nincs hozzá jogod!')
        }

        }}
