const Discord = require("discord.js");
const moment = require("moment");
const useful = require("useful-tools")
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  const tarih = useful.tarih(message.guild.createdTimestamp)
    const sunucubilgi = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor(message.guild.name, message.guild.iconURL())
      .setDescription(`• **Sunucu Sahibi:** ${message.guild.owner || "Bulunamadı."}
      • **Sunucu Adı:** \`${message.guild.name}\`
      • **Sunucu ID:** \`${message.guild.id}\`
      • **Rol Sayısı:** \`${message.guild.roles.cache.size}\`
      • **Kanal Sayısı:** \`${message.guild.channels.cache.size}\`
      • **Emoji Sayısı:** \`${message.guild.emojis.cache.size}\`
      • **Üye Sayısı:** \`${message.guild.memberCount}\`
      • **Oluşturulma Tarihi:** \`${tarih}\`
      `)
      .setTimestamp()
      .setThumbnail(message.guild.iconURL());
    return message.channel.send(sunucubilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-bilgi", "sunucubilgi", "sunucu"],
  permLevel: 0
};

exports.help = {
  name: "sunucubilgi",
  description: "Sunucu hakkında bilgi verir.",
  usage: "sunucubilgi"
};