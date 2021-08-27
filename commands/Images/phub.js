const { Canvas } = require('canvacord');
const lineReplyNoMention = require('discord-reply');
module.exports = {
    name: 'phub',
    cooldown: 8,
    permissions: ["SEND_MESSAGES"],
    description: 'what are you doing here?',
    async execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            return message.lineReplyNoMention({ content: '**You Must Do `x!phub text1 / text2` \nYou Must Add The / For It Work!**' }) //, allowedMentions: { repliedUser: true } })
        }
        let splitArgs = args.join(' ').split('/');
        const text = splitArgs[0];
        if (!text) {
            return message.lineReplyNoMention({ content: "**Enter The First Text!**" }) //, allowedMentions: { repliedUser: true } })
        }
        if (text.length > 70) return message.reply({ content: `**You Cant Go Over 70 Characters!**`, allowedMentions: { repliedUser: true } })

        const text2 = splitArgs[1];
        if (!text2) {
            return message.lineReplyNoMention({ content: "**Enter The Second Text!**" }) //, allowedMentions: { repliedUser: true } })
        }
        if (text2.length > 70) return message.lineReplyNoMention({ content: `**You Cant Go Over 70 Characters!**` }) //, allowedMentions: { repliedUser: true }})

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle('PHUB')
            .setColor('#c30202')
            .setImage(`https://api.alexflipnote.dev/pornhub?text=${text}&text2=${text2}`)

        message.lineReplyNoMention(embed)

        // const attachment = new Discord.MessageAttachment(image, "phub.png");
        // return message.channel.send({ files: [{ attachment: image }] });
    }
}