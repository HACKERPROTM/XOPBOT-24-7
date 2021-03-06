const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "xopchat",
    permissions: ["SEND_MESSAGES"],
    aliases: ['iwantxopchat', 'requestxopchat'],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 600000,
    description: 'let users request xop-chat',
    async execute(client, message, cmd, args, Discord) {
        const channel = client.channels.cache.get('853326730937106452')
        const query = args.join(' ');
        if (!query) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)xopchat <channelID>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        const reportEmbed = new Discord.MessageEmbed().setColor(`${color}`).setTitle('**Xop-Chat Request Wanted!**').addField('Author', message.author.toString(), true).addField('Guild', message.guild.name, true).addField('Channel Id', query).setThumbnail(message.author.displayAvatarURL({ dynamic: true })).setTimestamp()
        channel.send({ embed: reportEmbed });
        message.lineReplyNoMention({ content: "**We Have Sent The Request! \nCould Take 1 To 3 Days For The Request To Be Accepted!**" })
    }
}