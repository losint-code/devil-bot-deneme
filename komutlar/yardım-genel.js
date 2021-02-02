const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
let target = message.mentions.users.first() || message.author;
message.channel.send(new Discord.MessageEmbed()
.setAuthor(target.username, target.avatarURL({ dynamic: true }))
.setDescription(`**\`Kullanıcı Komutları\`**
» \`${prefix}avatar\`: **Avatarınızı Atar**
» \`${prefix}sunucu-bilgi\`: **Sunucu Bilgisini Atar**
» \`${prefix}bc\`: **Bitcoin Bilgisi Atar**
» \`${prefix}afk\`: **Kullanıcı Afk Olur**
» \`${prefix}kullanıcı-bilgi\`: **Kullanıcının Bilgilerine Bakarsınız**`)
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setFooter(`${message.author.tag} Tarafından Kullanıldı.`)
.setImage("https://images-ext-1.discordapp.net/external/w2Xt0bVHKuWHqdANEqrkf3i61VOQFmd3Hs3wSO4ZeN4/https/api.creavite.co/out/a67d4779-2d82-43cd-b309-ecd971b5a0eb_standard.gif")
.setColor("YELLOW")
);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['genel'],
  permLevel: 0
};

exports.help = {
  name: 'genel'
};