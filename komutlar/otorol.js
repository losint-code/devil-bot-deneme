const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
 if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`${message.author} Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!`)).then(m => m.delete({timeout: 7000}))
  
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
if (!rol) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`Oto Rolü Ayarlamam için bir **Rol** belirtmelisin: **${ayarlar.prefix}otorol-ayarla @rol #kanal**`))
if (!kanal) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`Oto Rolü Ayarlamam için bir **Kanal** belirtmelisin: **${ayarlar.prefix}otorol-ayarla @rol #kanal**`))

const embed = new MessageEmbed()
.setTitle('Başarılı !')
.setColor('YELLOW')
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setDescription(`**Otorol Sistemi Başarıyla Aktif Edildi**
\n**Otorol: ${rol} Olarak Ayarlandı
\nOtorol Kanalı: ${kanal} Olarak Ayarlandı**`)
.setFooter('Botu verilcek rolün üstünde tutmayı unutmayınız.')
message.channel.send(embed)
db.set(`otorol_${message.guild.id}`, rol.id)  
db.set(`otorolKanal_${message.guild.id}`, kanal.id) 
if(await db.has(`rol_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`Rol zaten ayarlanmış`).setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setColor('YELLOW')).then(x => x.delete({timeout: 6500}));
if(await db.has(`kanal_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`Rol zaten ayarlanmış`).setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setColor('YELLOW')).then(x => x.delete({timeout: 6500}));
}
module.exports.conf = {
    guildOnly: true,
    aliases: ["oto-rol","otorol","otorol-ayarla"],
    permLevel: 0
};

module.exports.help = {
    name: "auto-role",
};