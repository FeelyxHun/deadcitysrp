const Discord = require("discord.js");

const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
const ms = require('ms')
const { Presence } = require("discord.js")
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const { MessageEmbed } = require('discord.js');

const fs = require("fs");
const { promises } = fs;






const { ifError } = require('assert');
const { randomBytes } = require('crypto');


const cooldown = new Set();

//////////////////////////////////////////////// HANDLER
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot)
});

bot.on("message", async message => {
    let prefix = botconfig.prefix;

    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.member) message.member = await message.guild.fetchMember(message)

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = bot.commands.get(cmd);
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));

    if(command)
    command.run(bot, message, args);
});

function attach(baseDict, key, defaultValue) {
	baseDict = baseDict[key] ? baseDict : Object.assign(baseDict, { [key]: defaultValue} );
	return baseDict[key];
};

////////////////////////////////////////
bot.on("ready", async() => {
    console.log(`${bot.user.username} elindult!`)

    let státuszok = [
        `Prefix: ${botconfig.prefix}`,
        "Dev: ZetiI#3659",
        `${botconfig.prefix}help`,
        "Discord: discord.io/deadcityrp",
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type: "WATCHING"})
    }, 5000)
})

bot.on('message', message => {
    if (message.content === '<@974733860216668170>') {
        message.channel.send(`Az itt beállított prefix: **${botconfig.prefix}**`)
    }
});

bot.on('guildMemberAdd', async(member) => { 

    const Channel = member.guild.channels.cache.get('980524419858452545') 

    const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Becsatlakozás')
        .setDescription(`**${member.user.username}** Üdvözöllek a ${member.guild.name} szerverén. Tagok száma: ${member.guild.memberCount}`)

    Channel.send(embed)
})


bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;






///////////////////////////////////////////////////////////////////////////////

})
bot.login(process.env.BOT_TOKEN);


