/////////////////////////////////// HANDLER
const{ readdirSync, readSync } = require("fs");

const ascii = require("ascii-table");
const { Command } = require("discord.js-commando");

let table = new ascii("Parancsok");
table.setHeading("parancsok", "stcommandsatusz")

module.exports = (client) => {
    readdirSync("./commands/").forEach(dir =>{
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));

        for(let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);

            if(pull.name){
                client.commands.set(pull.name, pull)
                table.addRow(file, 'Működik');
            } else {
                table.addRow(file, 'Hiba')
                continue;
            }
            if(pull.aliasses && Array.isArray(pull.aliasses)) pull.aliasses.forEach(alias => client.aliasses.set(alias, pull.name));
        }
    });

    console.log(table.toString());
}