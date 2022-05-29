const ms = require('ms')
const { MessageEmbed } = require('discord.js')
const botconfig = require("../../botconfig.json");
const prefix = botconfig.prefix

module.exports = {
    name : 'giveaway',
    run : async(bot, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Nincs hozzá jogod!')
        
        const channel = message.mentions.channels.first()
        if(!channel) return message.channel.send('Kérlek add meg azt a szobát, ahol a nyereményjétk legyen!')

        const duration = args[1]
        if(!duration) return message.channel.send('Kérlek add meg a nyereményjáték idejét!')

        const winners = args[2]
        if(!winners) return message.channel.send('Kérlek add meg a nyertesek számát!')

        const prize = args.slice(3).join(" ")
        if(!prize) return message.channel.send('Kérlek add meg a nyereményt!')

        bot.giveaways.start(channel, {
            time : ms(duration),
            prize : prize,
            winnerCount: winners,
            hostedBy: bot.config.hostedBy ? message.author : null,
            messages: {
                giveaway: (bot.config.everyoneMention ? "@everyone\n\n" : '') + "Nyere,ényjáték",
                giveawayEnd: (bot.config.everyoneMention ? "@everyone\n\n" : '') + "Nyereményjáték vége",
                timeRemaining: "Ennyi idő van még hátra: **{duration}**",
                inviteToParticipate: "Reagálj erre az ikonra 🎉 hogy csatlakozz a nyereményjátékhoz",
                winMessage: "Gratulálunk {winners}, megnyertétek a nyereményjátékot.",
                embedFooter: "Ajándékozás TIMEEEE!",
                noWinner: "Nem sikerült meghatározni a győztest",
                hostedBy: 'Készítette {user}',
                winners: "Nyertesek",
                endedAt: 'Véget ér',
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: 'hours',
                    days: 'days',
                    pluralS: false
                }
            },
           
        })
        message.channel.send(`Nyereményjáték itt: ${channel}`)
    }
}