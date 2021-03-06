const Levels = require('discord-xp');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'level',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    description: "Shows Level Of You Or User!",
    async execute(client, message, cmd, args, Discord) {
        const mentionedMember = message.mentions.users.first();
        const catcherr = args[0];
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)level <@user>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        const target = await Levels.fetch(mentionedMember.id, message.guild.id);
        if (!target) {
            const nomen = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${catcherr}\` Is Not A Valid User!**`)
            return message.lineReplyNoMention({ embed: nomen })
        }
        try {
            const success = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${mentionedMember.tag}\`'s Level Is \`${target.level}\` And Has \`${target.xp}/${Levels.xpFor(target.level + 1)}\`**`)
            message.lineReplyNoMention({ embed: success })
        } catch (err) {
            console.log(err);
        }
    }
}