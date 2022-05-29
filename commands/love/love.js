const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");
const prefix = botconfig.prefix

module.exports = {
    name: "love",

    async run (client, message, args) {

        let love_user = message.mentions.members.first();
        let love = Math.floor(Math.random()* 101)

        if(love_user != null && love_user.id === message.author.id) return void message.channel.send('Buzi vagy😏?');
  
          if(args[0]){
                
  
              let BanEmbed = new Discord.MessageEmbed()
              .setTitle("Szerelem")
              .setColor("#e61089")
              .setDescription(`<@${message.author.id}> és <@${love_user.user.id}> ${love}%-ra illenek össze`)
              .setFooter("💓💓💓")
  
              message.channel.send(BanEmbed);
  
          } else {
          let parancsEmbed = new Discord.MessageEmbed()
          .setTitle("Parancs használata:")
          .addField(`\`${prefix}love <@név>\``, "˘˘˘")
          .setColor("#8a1a5b")
  
          message.channel.send(parancsEmbed);
          }

    }}