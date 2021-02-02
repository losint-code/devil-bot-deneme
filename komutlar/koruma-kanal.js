const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.ownerID) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`${message.author} Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!`)).then(m => m.delete({timeout: 7000}))
  
let kanal = message.mentions.channels.first()

if (!kanal) {

const uyarı = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setColor('RED')
.setDescription(`Bir Kanal Etiketlemen Gerekiyor Örnek: **koruma-kanal #kanal**`)
return message.channel.send(uyarı).then(a => a.delete({timeout:15000}))
};
  
const başarılı = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setColor('GREEN')
.setDescription(`Koruma Kanalı Başarıyla ${kanal} olarak Ayarlandı.`)
message.channel.send(başarılı)
db.set(`korumakanal_${message.guild.id}`, kanal.id)

}
module.exports.conf = {
    guildOnly: true,
    aliases: ["korumakanal","koruma-kanal-ayarla"],
    permLevel: 0
};

module.exports.help = {
    name: "koruma-kanal",
};
