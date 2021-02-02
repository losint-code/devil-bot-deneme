const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const talkedRecently = new Set();


exports.run = async (client, message, args) =>{
  
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send(new Discord.MessageEmbed().setAuthor("Uyarı!").setDescription(" 3 Saniyede Bir Kullanılabilir!").setColor("YELLOW"));
    } else {


        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          talkedRecently.delete(message.author.id);
        }, 3000);
    }
  
if(args[0] === 'aç') {
    if(await db.has(`kufur_${message.guild.id}`, "acik")) return message.channel.send(new Discord.MessageEmbed().setDescription(`\`Küfür Engelleme\` daha önceden açılmış.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setColor('YELLOW')).then(x => x.delete({timeout: 6500}));
    db.set(`kufur_${message.guild.id}`, "acik")
    message.channel.send(new Discord.MessageEmbed().setDescription('Küfür Filtresi Başarıyla \`Aktif\` Edildi.').setColor("GREEN").setFooter(`${message.author.username} Tarafından Kullanıldı`))
  return
}
if (args[0] === 'kapat') {
   db.delete(`kufur_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setDescription('Küfür Filtresi Başarıyla \`Deaktif\` Edildi.').setColor("RED").setFooter(`${message.author.username} Tarafından Kullanıldı`).setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }).then(x => x.delete({timeout: 15000}))))
return
}
 message.channel.send(new Discord.MessageEmbed().setDescription(`**\`Yanlış kullanım.\` \n ${ayarlar.prefix}küfür aç/kapat olarak kullanınız.**`).setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setColor('RED')).then(x => x.delete({timeout: 15000}));
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-ayarla',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};