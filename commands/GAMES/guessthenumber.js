const guildNumber = new Map();
const guildAttempts = new Map();
function guildNumberMap(message) {
    const guildId = message.guild.id;
    var number = Math.floor(Math.random() * 20000) + 1;
    if (!guildNumber.get(guildId)) {
        guildNumber.set(guildId, number);
    }
}
function guildAttemptsMap(message) {
    const guildId = message.guild.id;
    if (!guildAttempts.get(guildId)) {
        guildAttempts.set(guildId, {
            attempts: 1
        });
    } else {
        guildAttempts.get(guildId).attempts++;
    }
}
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const gcolor = process.env.Gcolor;
module.exports = {
    name: "guessthenumber",
    aliases: ['gtn', 'guess'],
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 5,
    category: "games",
    description: {
        usage: 'guesseasy <guesseasy number>',
        content: "Try and guess the number!",
    },
    async execute(client, message, cmd, args, Discord) {
        const { member, channel, guild } = message; const provideaguess = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setDescription(`**❌ Please Provide A Guess!**`)
        const pickinganumber = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setDescription('**Picking A Number Between \`1\` And \`20000\`**');
        await guildNumberMap(message);
        await guildAttemptsMap(message);
        let guess = args[0];
        if (!guess && guildAttempts.get(guild.id).attempts === 1) {
            return channel.send({ embed: pickinganumber })
        } else if (!guess) {
            return channel.send({ embed: provideaguess });
        }
        if (+guess === guildNumber.get(guild.id)) {
            let attempts = guildAttempts.get(guild.id); const guessedthenumber = new Discord.MessageEmbed().setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setTimestamp().setColor(`${gcolor}`).setDescription(`**✅ Perfect, The Number Was \`${guildNumber.get(guild.id)}\`! It Only Took You \`${attempts.attempts}\` Attempts!**`)
            channel.send({ embed: guessedthenumber }); guildNumber.delete(guild.id); guildAttempts.delete(guild.id); return;
        } else if (+guess < guildNumber.get(guild.id)) {
            const lowgsin = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${guess}\` Is Too Low!**`)
            return message.lineReplyNoMention({ embed: lowgsin })
        } else if (+guess > guildNumber.get(guild.id)) {
            const highgsin = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${guess}\` Is Too High!**`)
            return message.lineReplyNoMention({ embed: highgsin })
        } else {
            const invgsin = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Invalid Number Please Try Again!**`)
            return message.lineReplyNoMention({ embed: invgsin })
        }
    },
};