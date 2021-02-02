const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
let target = message.mentions.users.first() || message.author;
message.channel.send(new Discord.MessageEmbed()
.setAuthor(target.username, target.avatarURL({ dynamic: true }))
.setDescription(`**Ban Komutları**
» \`${prefix}ban @Üye Sebep\`
» \`${prefix}ban-log ayarla/sıfırla #Kanal\`
» \`${prefix}ban-yetkilisi ayarla/sıfırla @Yetkili\`

**Prefix Sistemi**
» \`${prefix}prefix ekle Prefix\`
» \`${prefix}prefix kaldır Prefix\`
» \`${prefix}prefix temizle\`

**Jail Komutları**
» \`${prefix}jail @Üye Zaman Sebep\`
» \`${prefix}jail-log ayarla/sıfırla #Kanal\`
» \`${prefix}jail-rol ayarla/sıfırla @Rol\`
» \`${prefix}jail-yetkilisi ayarla/sıfırla @Yetkili\`

**Kick Komutları**
» \`${prefix}kick\`
» \`${prefix}kick-log ayarla/sıfırla #Kanal\`
» \`${prefix}kick-yetkilisi ayarla/sıfırla @Yetkili\`

**Uyarı Komutları**
» \`${prefix}uyarı @Üye Sebep\`
» \`${prefix}uyarılar @Üye\`
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
  aliases: ['sistem'],
  permLevel: 0
};

exports.help = {
  name: 'sistem'
};