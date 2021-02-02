const Discord = require("discord.js");
exports.run = (client, message, args) => {     
  message.delete();
  let question = args.join(" ");
  let user = message.author.username;
  if (!question)
 return message.channel.send(new Discord.MessageEmbed()
               .setColor("RED")
               .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
               .setDescription(`Oylama Başlatmak İçin Bir Sebep Belirtmen Gerek.`)
               .setTimestamp()
               .setFooter(`Devil Bot Oylama Sistemi`))

  message.channel.send(new Discord.MessageEmbed()
        .setColor("RED")
        .setFooter(`${message.author.username} Tarafından Başlatıldı`, message.author.avatarURL({ dynamic: true }))
        .setDescription(`**${question}**`))
.then(function(message) {
     message.react('✅');
     message.react('❌');
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],
  permLevel: 2
};
exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",
  usage: "oylama <oylamaismi>"
};