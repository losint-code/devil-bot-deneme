const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) {
   const embed = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle('Dikkat')
   .setDescription(`Bu Komudu Kullanabilmek İçin \`Yönetici\` Yetkisine Sahip Olmalısınız.`)
   message.channel.send(embed)
  }
 
 let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  
  if(!modlogs) {
    let kanal = message.mentions.channels.first();
    if(!kanal) {
   const embed = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle('Dikkat')
   .setDescription('Mod Log Kanalı Belirtmelisiniz.')
   message.channel.send(embed)
    };

    db.set(`modlogkanaly_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);
    {
     const embed = new Discord.MessageEmbed()
     .setColor('GREEN')
     .setTitle('Başarılı')
     .setDescription(`Mod Log Kanalı Başarıyla Ayarlandı`)
     message.channel.send(embed)
   }
    
    } else {
      if(modlogs) {
        
        const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);
        {
          const embed = new Discord.MessageEmbed()
          .setColor('GREEN')
          .setTitle('Başarılı')
        .setDescription(`Bu Sunucuda Daha Önceden Mod Log Kanalı Ayarlanmış
        Sıfırlamak İçin: \`${prefix}modlog-sıfırla\`
        Ayarlanan Kanal: \`${modlogkanal.name}\``)
        message.channel.send(embed)
        }
      }
    }

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 0
}

exports.help = {
    name: 'mod-log',
    description: 'Log kanalını belirler.',
    usage: 'modlog <#kanal>'
}