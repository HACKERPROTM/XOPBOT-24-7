const errorChannel = process.env.errorChannel;
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'say',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_MESSAGES"],
    description: "Make the bot say your message",
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.users.first();
            if (!args[0]) {
                const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)say <text>\`**`)
                return message.lineReplyNoMention({ embed: nopr })
            }
            if (message.content.match("gore") || message.content.match("boob") || message.content.match("tits") || message.content.match("fuck") || message.content.match("shit") || message.content.match("nigga") || message.content.match("hoe") || message.content.match("bitch") || message.content.match("dick") || message.content.match("gay") || message.content.match("lesbian") || message.content.match("blowjob") || message.content.match("porn") || message.content.match("cunt") || message.content.match("@")) {
                message.delete(); const embed1 = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Im Not Allowed To Say Bad Words Or Ping! Lol Cry 😂**`)
                message.lineReplyNoMention({ embed: embed1 })
            }
            let sayMessage = args.slice(0).join(' '); let yourmsg = args.slice(1).join(' '); if (sayMessage.length > 100) {
                const maxlen = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Are Not Allowed To Go Over \`100\` Characters!**`)
                return message.lineReplyNoMention({ embed: maxlen })
            }
            if (message.content.match("Im") || message.content.match("I'm") || message.content.match("im") || message.content.match("i'm")) {
                const yourembed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**OK! Your ${yourmsg}**`)
                message.lineReplyNoMention({ embed: yourembed })
            }
            const embed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**${sayMessage}**`)
            message.lineReplyNoMention({ embed: embed });
        } catch (err) {
            const errorlogs = client.channels.cache.get(errorChannel)
            errorlogs.send({ content: `**Error On Say Command!\n\nError:\n\n${err}**` })
        }
    }
}