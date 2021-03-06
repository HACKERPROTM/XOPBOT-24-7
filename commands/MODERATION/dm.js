const errorChannel = process.env.errorChannel;
const Discord = module.require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "dm",
    cooldown: 8,
    permissions: ["MANAGE_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    description: "Send DM message to a user",
    async execute(client, message, cmd, args, Discord) {
        try {
            const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
            if (!user) {
                const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)dm <@user> <text>\`**`)
                return message.lineReplyNoMention({ embed: nopr })
            }
            if (message.mentions.users.first().bot) {
                const nodmbots = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Can Not DM Bot\`s As they Will Never Send Back!**`)
                return message.lineReplyNoMention({ embed: nodmbots })
            }
            if (message.author.id === user.id) {
                const nodmyourself = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Are You Alright? You Can Not DM Yourself!**`)
                return message.lineReplyNoMention({ embed: nodmyourself })
            }
            const dmmessage = args.slice(1).join(" ")
            if (!dmmessage) {
                const nodmmsg = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Did Not Specify Your Message!**`)
                return message.lineReplyNoMention({ embed: nodmmsg })
            }
            const rmvdm = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Could Not Dm \`${user.username}\`!**`)
            const successdm = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Successfully Sent Message To \`${user.username}\`!**`)
            const embed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setDescription(`${dmmessage}`).setFooter(`Sent By ${message.author.username}`)
            user.send({ embed: embed }).catch(() => message.lineReplyNoMention({ embed: rmvdm }))
                .then(() => message.lineReplyNoMention({ embed: successdm }));
        } catch (error) {
            const errorlogs = client.channels.cache.get(errorChannel);
            message.lineReplyNoMention({ content: "**Looks Like An Error Has Occured**" });
            errorlogs.send({ content: "Error on DM command\n Error:\n" + error })
        }
    }
}