const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'botinvite',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    aliases: ['binv'],
    description: "Embeds!",
    async execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed().setTimestamp().setThumbnail(message.author.displayAvatarURL({ dynamic: true })).setColor(`${color}`).setTitle('Bot Invite').setURL('https://discord.gg/Sy38Uysm4G').setDescription('**This Is The Bot Server Invite Link**').addFields({ name: 'Discord Invite Link', value: '[Bot Invite](https://discord.com/oauth2/authorize?client_id=831824859066925087&scope=bot&permissions=4294967295)' }).setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.lineReplyNoMention({ embed: newEmbed });
    }
}