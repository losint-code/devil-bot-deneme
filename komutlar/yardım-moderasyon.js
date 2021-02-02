const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
let target = message.mentions.users.first() || message.author;
message.channel.send(new Discord.MessageEmbed()
.setAuthor(target.username, target.avatarURL({ dynamic: true }))
.setDescription(`**\`Moderasyon Komutları\`**
» \`${prefix}kes\`: **Kullanıcının Bağlantısını Keser**
» \`${prefix}gel\`: **Kullanıcının Yanına Gelir**
» \`${prefix}git\`: **Kullanıcının Yanına Gider**
» \`${prefix}kilit\`: **Kanalı Kilitler/Açar**
» \`${prefix}capslock\`: **Capslock Açar/Kapar**
» \`${prefix}snipe\`: **Son Silinen Mesajı Gösterir**
» \`${prefix}yavaşamod 1/100\`: **Kanala Yavaş Mod Ekler**
» \`${prefix}sistem\`: **Sistem Yardım Menüsü Açar**
`)
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setFooter(`${message.author.tag} Tarafından Kullanıldı.`)
.setImage("https://images-ext-1.discordapp.net/external/w2Xt0bVHKuWHqdANEqrkf3i61VOQFmd3Hs3wSO4ZeN4/https/api.creavite.co/out/a67d4779-2d82-43cd-b309-ecd971b5a0eb_standard.gif")
.setColor("YELLOW")
);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['moderasyon'],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon'
};