const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('YELLOW')
.setTitle('» Flex Yardım Menüsü')
.setTimestamp()
.addField('» f!genel', `\`Kullanıcı Komutlarını Gösterir\``)
.addField('» f!moderasyon', `\`Moderasyon Komutlarını Gösterir\``)
.addField('» f!koruma', `\`Koruma Komutlarını Gösterir\``)
.addField('» f!eğlence', `\`Eğlence Komutlarını Gösterir\``)
.setFooter('© 2020 Flex Bot', client.user.avatarURL())
.setImage('https://images-ext-1.discordapp.net/external/w2Xt0bVHKuWHqdANEqrkf3i61VOQFmd3Hs3wSO4ZeN4/https/api.creavite.co/out/a67d4779-2d82-43cd-b309-ecd971b5a0eb_standard.gif')
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};