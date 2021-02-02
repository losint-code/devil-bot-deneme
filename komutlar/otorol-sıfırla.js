const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(new Discord.MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`${message.author} Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!`)).then(m => m.delete({timeout: 7000}))
 
    db.delete(`otorolKanal_${message.guild.id}`)
    db.delete(`otorol_${message.guild.id}`)
    db.delete(`otorolKanal_${message.guild.id}`)
    db.delete(`otorol_${message.guild.id}`)
    db.delete(`otorol_${message.guild.id}`)
    db.delete(`otorolKanal_${message.guild.id}`)

const reset = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle(`Sıfırlama Başarılı!`)
.setDescription(`Ayarladığınız Otorol Sistemini **Başarıyla** Sıfırladım.`)
message.channel.send(reset)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["otorol-sistemi-sıfırla","otorol-kapat","otorol-sıfırla"],
  PermLevel: 0
};

 

exports.help = {
  name: "otorol-sistemi-kapat",
  description: "",
  usage: ""
};