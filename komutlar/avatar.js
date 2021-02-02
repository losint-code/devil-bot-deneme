const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let target = message.mentions.users.first() || message.author;
message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(target.tag, target.avatarURL({ dynamic: true }))
.setImage(target.displayAvatarURL({ dynamic: true, size: 512 }))
.setFooter(`${message.author.tag} Tarafından İstendi.`)
);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar'
};
