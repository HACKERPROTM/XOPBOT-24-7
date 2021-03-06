const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: "rolelock",
    permissions: ["ADMINISTRATOR"],
    clientpermissions: ["ADMINISTRATOR"],
    cooldown: 3,
    description: "Locks a given channel for a particular role!",
    async execute(client, message, cmd, args, Discord) {
        const channel = message.mentions.channels.first()
        if (!channel) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)rolelock <#channel> <roleID>\`**`)
            return message.lineReplyNoMention({ embed: nopr })
        }
        const roletofind = args.slice(1).join(" ")
        const fetchunvalidrr = args[1];
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if (!role) {
            const norspecas = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${fetchunvalidrr}\` Is Not A Valid Role ID!**`)
            return message.lineReplyNoMention({ embed: norspecas })
        }
        const embed = new Discord.MessageEmbed().setColor(`${color}`).setTimestamp().setTitle("Channel Locked!").setDescription(`**This channel Has Been Locked By ${message.author.tag} For This Role <@!${role}>**`)
        channel.updateOverwrite(role, { SEND_MESSAGES: false })
        await channel.send({ embed: embed })
    }
}