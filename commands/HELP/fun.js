const { MessageButton } = require("discord-buttons");
const disbutpages = require("discord-embeds-pages-buttons")
const color = process.env.Color;
module.exports = {
    name: 'fun',
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {
        message.react('🤪');
        const embed7 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**__<:funicon:985258423056756757> Fun (18)__** \n[ping](https://xopbot.glitch.me/) \n__***Not Real Ping!***__ \n[avatar](https://xopbot.glitch.me/) \n__***Shows A Users Avatar!***__ \n[badges](https://xopbot.glitch.me/) \n__***Gives You A Users Badge!***__ \n[8ball](https://xopbot.glitch.me/) \n__***Ask 8ball A Question!***__ \n[reverse](https://xopbot.glitch.me/) \n__***Reverse A Word!***__').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed8 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**__<:funicon:985258423056756757> Fun (18)__** \n[coinflip](https://xopbot.glitch.me/) \n__***Flip A Coin!***__ \n[meme](https://xopbot.glitch.me/) \n__***Get Memes From Reddit!***__ \n[say](https://xopbot.glitch.me/) \n__***XOPBOT Repeats The Word!***__ \n[ascii](https://xopbot.glitch.me/) \n__***Convert Text To Ascii!***__ \n[fliptext](https://xopbot.glitch.me/) \n__***Flip Your Text!***__').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed9 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**__<:funicon:985258423056756757> Fun (18)__** \n[dog](https://xopbot.glitch.me/) \n__***Get A Random Dog Image!***__ \n[cat](https://xopbot.glitch.me/) \n__***Get A Random Cat Image!***__ \n[respect](https://xopbot.glitch.me/) \n__***Respect Forever My Dude!***__ \n[hack](https://xopbot.glitch.me/) \n__***Ima Hack LMAO!***__  \n[kill](https://xopbot.glitch.me/) \n__***You Are Now Dead!***__').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const embed10 = new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()).setTimestamp().setColor(`${color}`).setDescription('**__<:funicon:985258423056756757> Fun (18)__** \n[hug](https://xopbot.glitch.me/) \n__***Hug A User!***__ \n[kiss](https://xopbot.glitch.me/) \n__***Kiss A User!***__ \n[pp](https://xopbot.glitch.me/) \n__***Get A Users PP!***__').setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())
        const pages = [embed7, embed8, embed9, embed10]
        disbutpages.pages(message, pages, { timeout: 540 * 1000, buttons: { delete: { style: "red", emoji: "❌", text: "Delete" }, forward: { style: "blurple", emoji: "⏩", text: "Forward" }, backward: { style: "blurple", emoji: "⏪", text: "Backward" } }, extraRows: [], extraPos: "below", message: "", ephemeral: "**Button Failure! Reasons: \n1.`Not Your Embed!`\n2.`Buttons Timed OUT!`**", })
    }
}