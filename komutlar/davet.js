const Discord = require("discord.js")
exports.run = async(client, message, args) => {

const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
.setDescription(`Sunucuya Davet Et: [Davet Et](https://discord.com/api/oauth2n/authorize?client_id=805359521383055370&permissions=8&scope=bot)
Bana Oy Ver: [Yakında]()`)
.setColor("RED")
.setTimestamp()
message.channel.send(embed);
  };

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };

  module.exports.help = {
    name: "davet",
    description: "Davet linki",
    usage: "Davet Linki"
  };