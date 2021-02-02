const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:supheli:804406927039528980> Yeterli Yetkin Bulunmamakta.`).setColor("RED"))
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setDescription(`<:reddedildi:804406930910740570> Caps Lock Engelleme Sistemi Devre Dışı Bırakıldı.`).setColor("GREEN"))
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(new Discord.MessageEmbed().setDescription(`<:onaylandi:804406929744068670> Caps Lock Engelleme Sistemi Aktifleştirildi.`).setColor("GREEN"))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslock-engel', 'capslock'],
  permLevel: 3
};

exports.help = {
  name: 'capslock-engelleme',
  category: 'Moderasyon komutları!',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engelleme'
};