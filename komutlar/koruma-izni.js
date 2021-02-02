const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
if(!message.guild.owner && message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`${message.author} Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!`)).then(m => m.delete({timeout: 7000}))

  let kanal = await db.fetch(`korumakanal_${message.guild.id}`) 
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`Koruma Kanalı Ayarlı Değil Ayarlamak İçin: **${prefix}koruma-kanal #kanal**`))


  
let arguman = args[0];

if (!arguman) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setColor('RED').setDescription(`Lütfen Bir Bot ID Giriniz.(Giriş izni iptal etmek için: \`${prefix}botizni iptal ID\``))

if (arguman == "iptal") {
db.delete(`botİzinli_${args[1]}`) 
message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setColor('GREEN').setDescription(`<@${args[1]}>\`${args[1]}\` Kimliğine Sahip Botun **Giriş** İzni Devre Dışı Bırakıldı.`))

} else {
   
  
  message.channel.send
  var filtre = m => m.author.id === message.author.id 
   
       
db.set(`botİzinli_${arguman}`, "İzinli")
message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setColor('GREEN').setDescription(`<@${arguman}>\`${arguman}\` Kimliğine Sahip Bota **Giriş** İzni Verildi Bot Artık Sunucuya Girebilir.`))
  
       }
}
exports.conf = {
  guildOnly : true,
  enabled : true,
  aliases : ["bot-izni","giriş-izni","girişizni"],
  permLevel : 0,
}
exports.help = {
  name : "botizni"
}