const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'badges',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    aliases: ['usersbadge'],
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.author; const flags = user.flags.toArray(); console.log(flags);
        const badgesuser = new Discord.MessageEmbed().setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setColor(`${color}`).setTimestamp().setDescription(`\`${user.username}\`'s badges: \`${flags.join(', ')}\``).setFooter(`Requested By: ${message.author.tag}`)
        message.lineReplyNoMention({ embed: badgesuser })
    }
}

