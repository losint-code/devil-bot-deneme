const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) {
   const embed = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle('Hata')
   .setDescription('Bu Komutu Kullanabilmek İçin \`Yönetici\` Yetkisine Sahip Olmalısın.')
   message.channel.send(embed)
  }
  
  let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  
  if(!modlogs) {
   const embed = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle('Hata')
   .setDescription(`Bu Sunucuda Mod Log Kanalı Ayarlı Değil.`)
   .setTimestamp() 
   message.channel.send(embed)
  } else {
    if(modlogs) {    
      db.delete(`modlogkanaly_${message.guild.id}`) 
      const embed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle('Başarılı')
      .setDescription('Mod Log Kanalı Başarıyla Sıfırlandı.')
      .setTimestamp() 
      message.channel.send(embed)
     }
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["modlog-sıfırla"],
    permLevel: 0
}

exports.help = {
    name: 'modlog-sıfırla',
    description: 'Sıfırlar.',
    usage: 'modlog-sıfırla'
}