const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");
const prefix = botconfig.prefix

module.exports = {
    name: "dick",

    async run (client, message, args) {

        let zetike = 967112283870331001
        let dick_user = message.mentions.members.first();
        let dick = Math.floor(Math.random()* 19)

        let sajatkuki = new Discord.MessageEmbed()
        .setTitle("📏Kukicskaméretecske📏")
        .setColor("#94543b")
        .setDescription(`<@${message.author.id}> nek a kukija ${dick}cm`)
        .setImage(`https://c.tenor.com/YOC1ckhXVoAAAAAd/toy-dick-boner.gif`)


        let megemlitettkuki = new Discord.MessageEmbed()
        .setTitle("📏Kukicskaméretecske📏")
        .setColor("#94543b")
        .setDescription(`${dick_user} nek a kukija ${dick}cm`)
        .setImage(`https://c.tenor.com/YOC1ckhXVoAAAAAd/toy-dick-boner.gif`)


          
        if(message.author.id == zetike){
            let ultrabigdick = Math.floor(Math.random()* 30)

            let sajatkuki = new Discord.MessageEmbed()
            .setTitle("📏Kukicskaméretecske📏")
            .setColor("#94543b")
            .setDescription(`<@${message.author.id}> nek a kukija ${ultrabigdick}cm`)
            .setImage(`https://c.tenor.com/YOC1ckhXVoAAAAAd/toy-dick-boner.gif`)

            message.channel.send(sajatkuki);

        }
        else{
            if(args[0]){
                
                message.channel.send(megemlitettkuki);
    
            } else {
    
                message.channel.send(sajatkuki);
            }
    
        }

    }}