const { MessageEmbed } = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "coinflip",
    cooldown: 5,
    aliases: ['cf'],
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "flips a coin!",
    async execute(client, message, cmd, args, Discord) {
        const choices = ["Heads", "Tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        const embed = new MessageEmbed().setColor(`${color}`).setTimestamp().setThumbnail(message.author.displayAvatarURL({ dynamic: true })).setTitle("Coinflip!").setDescription(`**You Flipping Flipped \`${choice}\`**!`)
        message.lineReplyNoMention({ embed: embed })
    }
}