const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "rolelock",
    permissions: ["ADMINISTRATOR"],
    cooldown: 3,
    description: "Locks a given channel for a particular role!",
    async execute(client, message, cmd, args, Discord) {
        const channel = message.mentions.channels.first()
        if (!channel) return message.reply({ content: "**Please mention a Valid Channel!**", allowedMentions: { repliedUser: true } })
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if (!role) return message.reply({ content: "**Please Give A Valid Role Id!**", allowedMentions: { repliedUser: true } })
        const embed = new MessageEmbed()
            .setColor('#c30202')
            .setTimestamp()
            .setTitle("Channel Locked!")
            .setDescription(`**This channel Has Been Locked By ${message.author.tag} For This Role <@!${role}>**`)
        channel.permissionOverwrites.edit(role, {
            SEND_MESSAGES: false
        })
        await channel.send(embed)
    }
}