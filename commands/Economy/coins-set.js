const profileModel = require("../../models/profileSchema");
module.exports = {
  name: "coins-set",
  cooldown: 3,
  aliases: ['cs', 'cst'],
  permissions: ["SEND_MESSAGES"],
  description: "give a player some Xocoins",
  async execute(client, message, cmd, args, Discord, profileData) {
    if (message.member.id != "600094534386319370") return message.reply({ content: `**Sorry Only 👑HACKERPROᵈᵉᵛ#1498 Can Run This Command 😔**`, allowedMentions: { repliedUser: true } });
    if (!args.length) return message.channel.send({ content: "**You Need To Mention A Player To Set Their Xocoins!**" });
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send({ content: "**That User Does Not Exist In This Server!**" });

    if (amount % 1 != 0 || amount <= 0) return message.channel.send({ content: "**Deposit Amount Must Be A Whole Number!**" });

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send({ content: `**This User Does Not Exist In The Database!**` });

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          coins: amount,
        },
      );

      return message.channel.send({ content: `**This User's Xocoins Have Been Set To ${amount} Xocoins!** 💸` });
    } catch (err) {
      console.log(err);
    }
  },
};