const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'unban',
    cooldown: 3,
    permissions: ["BAN_MEMBERS"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    description: "This Command Unbans Member",
    async execute(client, message, cmd, args, Discord) {
        const member = message.mentions.users.first()
        const fetcherunban = args[0];
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)unban <@user>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        if (message.author.id === member.id) {
            const nounbanyou = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Are You Alright? You Can Not Unban Yourself!**`)
            return message.lineReplyNoMention({ embed: nounbanyou })
        }
        if (member.id === client.user.id) {
            const whyunbanme = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Can Not Unban Me Through Me, Thats Way Too Evil!**`)
            return message.lineReplyNoMention({ embed: whyunbanme })
        }
        if (member) {
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.unban();
            const successunban = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Unbanned Successfully \`${member.username}\`**`)
            message.lineReplyNoMention({ embed: successunban })
        } else {
            const unsuccess = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Could Not Unban \`${fetcherunban}\`. Account Might Have Been Deleted!**`)
            message.lineReplyNoMention({ embed: unsuccess })
        }
    }
}