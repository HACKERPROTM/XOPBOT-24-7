const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const logChannel = process.env.logChannel;
module.exports = {
  name: "search",
  aliases: [],
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 120,
  description: { usage: "a-search", content: "Choose your search location and have a chance at some bits!", examples: ["a-search"], },
  async execute(client, message, cmd, args, Discord) {
    const loggerchannel = client.channels.cache.get(logChannel);
    const LOCATIONS = ["Car", "Van", "Sock", "Milk", "Wallet", "Box", "Pocket", "Bus", "Gutters", "Park", "Train", "Lounge", "Keyboard", "Picnic", "Bathroom", "Bed", "Sofa", "Backpack", "Laptop", "Oculus", "Shirt", "Wardrobe", "Hospital", "Gaming Arena", "Server",]; let chosenLocations = LOCATIONS.sort(() => Math.random() - Math.random()).slice(0, 3); const RANDOM_NUMBER = Math.floor(Math.random() * (3000 - 1000 + 1)) + 100; const FILTER = (m) => { return chosenLocations.some((answer) => answer.toLowerCase() === m.content.toLowerCase()) && m.author.id === message.author.id; }; const COLLECTOR = message.channel.createMessageCollector(FILTER, { max: 1, time: 15000 }); COLLECTOR.on("collect", async (m) => {
      const EMBED = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username} Searched ${m.content}🕵️‍♂️`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Found \`${RANDOM_NUMBER.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins!**💸`).setFooter(`What A True Detective You Are.`); client.add(message.author.id, RANDOM_NUMBER)
      message.lineReplyNoMention({ embed: EMBED });
    }); const whatuding = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**What Are You Doing?! There Was \`${RANDOM_NUMBER.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins, Hidden Inside The \`${chosenLocations[0]}\`!😭**`)
    COLLECTOR.on("end", (collected) => { if (collected.size == 0) { return message.lineReplyNoMention({ embed: whatuding }); } }); const chloc = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Which Location Would You Like To Search?🔍 \nType The Location In This Channel.\n\`${chosenLocations.join("` `")}\`**`)
    message.lineReplyNoMention({ embed: chloc });
    loggerchannel.send({ content: `**${message.author.username}#${message.author.discriminator} used the command ${this.name} in ${message.guild.name}**` })
  },
};