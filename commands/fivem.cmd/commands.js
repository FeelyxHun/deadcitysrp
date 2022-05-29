const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");
const prefix = botconfig.prefix

module.exports = {
    name: "helpcmd",
    description: "helpcmd",

    async run (client, message, args) {

        let HelpEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .addFields(
            {name: 'Újraélesztés', value: `/revive (id)`},
            {name: 'Jármű Spawnolás', value: `/car (járműnév)`},
            {name: 'Jármű Törlés', value: `/dv (zóna)`},
            {name: 'Reportok megnézése', value: `/reports`},
            {name: 'Teleportálás megadott helyre', value: `/tpm`},
            {name: 'Item addolás', value: `/list`},
            {name: 'Admin Chat', value: `/a (szöveg)`},
            {name: 'Karakterkészítő', value: `/skin (id)`},
            {name: 'Admin menü', value: `/adminpanel vagy ("del" gomb)`}
            )
        .setTimestamp("")

        message.channel.send(HelpEmbed)

        }}
