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
const reactionRolesConfig = JSON.parse(fs.readFileSync('reactionroles.json' , 'utf8'))

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
        "Meg Semmi",
        "Dc link",
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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////     WARN + BLACKLIST         ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



        let blacklisted = ['discord.gg/','kurva', 'k4rva','nyomorék','geci','szar','bazdmeg','anyád','cigány','idióta','büdös','kurva','meleg','néger']

        let foundInText = false;
        for (var i in blacklisted){
        if(message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
        }
        if(message.member != null && message.member.hasPermission('KICK_MEMBERS'))
        if (message.member.hasPermission("ADMINISTRATOR")){
        if (foundInText) {
            var member = message.guild.member(message.author);



            if(`${warnadas[member.user.id]??0}`== 9){
                let warn = attach(warnadas, message.author.id, 0);
                
                    warnadas[message.author.id] = warn + 1;
                
                    await promises.writeFile("./warn.json", JSON.stringify(warnadas)).catch(console.error);  

                let parancsEmbed = new Discord.MessageEmbed()
                .setTitle("Parancs használata:")
                .setColor("BLUE")

                var member = message.guild.member(message.author);
                if(!member) return message.reply(parancsEmbed)
    
                let role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
                
                if (!role) return message.reply("Nem találom a ```Muted Rangot```")
    
                let time = '10h';
                if (!time) {
                    return message.reply(parancsEmbed);
                }
    
                member.roles.add(role.id);
    
                message.channel.send(`${member.user} le lett muteolva, ennyi időre: ${ms(ms(time))}`)
    
                setTimeout( function () {
                    member.roles.remove(role.id);
                    message.channel.send(`${member.user}-nak/nek feloldottam a némítását.`)
                }, ms(time));



                
            }
            else{
                if(`${warnadas[member.user.id]??0}`== 5){
                    let warn = attach(warnadas, message.author.id, 0);
                
                    warnadas[message.author.id] = warn + 1;
                
                    await promises.writeFile("./warn.json", JSON.stringify(warnadas)).catch(console.error);  

                    let parancsEmbed = new Discord.MessageEmbed()
                    .setTitle("Parancs használata:")
                    .setColor("BLUE")
    
                    var member = message.guild.member(message.author);
                    if(!member) return message.reply(parancsEmbed)
        
                    let role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
                    
                    if (!role) return message.reply("Nem találom a ```Muted Rangot```")
        
                    let time = '5h';
                    if (!time) {
                        return message.reply(parancsEmbed);
                    }
        
                    member.roles.add(role.id);
        
                    message.channel.send(`${member.user} le lett muteolva, ennyi időre: ${ms(ms(time))}`)
        
                    setTimeout( function () {
                        member.roles.remove(role.id);
                        message.channel.send(`${member.user}-nak/nek feloldottam a némítását.`)
                    }, ms(time));
    
    
    
                    
                }
                else{
                    message.delete()
    
                    let warn = attach(warnadas, message.author.id, 0);
                
                    warnadas[message.author.id] = warn + 1;
                
                    await promises.writeFile("./warn.json", JSON.stringify(warnadas)).catch(console.error);  
                    let donewarn = new Discord.MessageEmbed()
                    .setTitle("WARN")
                    .setColor("RED")
                    .setDescription(`Sikeresen hozzáadtam egy warnt: **${message.author}-nak/nek**\n**Indok:** Tiltott Szavak használata`)
                
                    message.channel.send(donewarn);
        }
    }
}}

    ////////////////////////////////////////////////////// 

    if(cmd ===`${botconfig.prefix}warn`){
        if(!args[0]) return void message.channel.send("Jelölj meg egy embert akinek megszeretnéd nézni a WARNAI-nak számét!");
        
        let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!ember) return void message.channel.send("Jelölj meg egy embert!");
    
        let warnsend = new Discord.MessageEmbed()
            .setTitle(`${ember.user.username} Warnjai:`)
            .setColor("RED")
            .setDescription(`\n ${ember} WARNJAI: **${warnadas[ember.user.id]??0}**`)
    
        message.channel.send(warnsend)
    
        }
        

        if (cmd===`${botconfig.prefix}warnclear`) {
                if(message.member.hasPermission('ADMINISTRATOR')) {
                let ember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
                ///Embeds
                let searchtag = new Discord.MessageEmbed()
                .setTitle("WARN")
                .setColor("RED")
                .setDescription(`Jelölj meg egy embert akinek törölni szeretnéd a Warnjait!`)
              
              let dftag = new Discord.MessageEmbed()
                .setTitle("WARN")
                .setColor("RED")
                .setDescription(`Nincs ilyen felhasználó!`)
              
              let dary = new Discord.MessageEmbed()
                .setTitle("WARN")
                .setColor("RED")
                .setDescription(`Nem törölheted a saját Warnjaid!`)
              
              ///Embeds Ends    
                    
                    if(!args[0]) return void message.channel.send(searchtag); //
                    if(!ember) return void message.channel.send(dftag);
                    if(ember.id === message.author.id) return void message.channel.send(dary);

                    
                    let donerep = new Discord.MessageEmbed()
                    .setTitle("WARN CLEAR")
                    .setColor("RED")
                    .setDescription(`${ember.user.username}.-nak/nek töröltem **${warnadas[ember.user.id]??0}db** Warnt!**`)
                
                    message.channel.send(donerep);
                    
                
                    let warn = attach(warnadas, ember.user.id, 0);
                
                    warnadas[ember.user.id] = warn - `${warnadas[ember.user.id]??0}`;
                
                    await promises.writeFile("./warnadas.json", JSON.stringify(warn)).catch(console.error);  
                    
                }
                else{
                    message.channel.send("Nincs hozzá jogod!")
                }
                
        }









///////////////////////////////////////////////////////////////////////////////

})
bot.login(process.env.BOT_TOKEN);


