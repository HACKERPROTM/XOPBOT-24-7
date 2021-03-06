const { MessageButton } = require("discord-buttons");
const disbutpages = require("discord-embeds-pages-buttons")
const color = process.env.Color;
module.exports = {
    name: 'config',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        message.react('🌘');
        const embed15 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '__<:configicon:985258417134383136> Config (8)__', value: '\n[antiwords](https://xopbot.glitch.me/) \n__***Setup A Antiword!***__ \n[antilink](https://xopbot.glitch.me/) \n__***Setup A Antilink!***__ \n[autoany](https://xopbot.glitch.me/) \n__***Catch Any Subreddit!***__ \n[joinchannel](https://xopbot.glitch.me/) \n__***Setup A Join Channel!***__' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed16 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).addFields({ name: '__<:configicon:985258417134383136> Config (8)__', value: '\n[leavechannel](https://xopbot.glitch.me/) \n__***Setup A Leave Channel!***__ \n\[joinmessage](https://xopbot.glitch.me/) \n__***Setup A Join Message!***__ \n\[leavemessage](https://xopbot.glitch.me/) \n__***Setup A Leave Message!***__ \n[setprefix](https://xopbot.glitch.me/) \n__***Set A Custom Prefix!***__' }).setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const pages = [embed15, embed16]
        disbutpages.pages(message, pages, { timeout: 540 * 1000, buttons: { delete: { style: "red", emoji: "❌", text: "Delete" }, forward: { style: "blurple", emoji: "⏩", text: "Forward" }, backward: { style: "blurple", emoji: "⏪", text: "Backward" } }, extraRows: [], extraPos: "below", message: "", ephemeral: "**Button Failure! Reasons: \n1.`Not Your Embed!`\n2.`Buttons Timed OUT!`**", })
    }
}