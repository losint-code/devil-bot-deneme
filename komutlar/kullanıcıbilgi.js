const { discord, MessageEmbed } = require("discord.js")
const data = require("quick.db")
const state = require("state")
exports.run = async(client, message, args) => {
  let kullanıcı = message.mentions.users.first()  || message.author;
  let data = message.guild.members.cache.get(kullanıcı.id).presence.activities.filter(x => x.type === 'CUSTOM_STATUS' && x.name === 'Bulunamadı.')[0].state
  let data2 = message.guild.members.cache.get(message.author.id).presence.activities.filter(x => x.type === 'CUSTOM_STATUS' && x.name === 'Bulunamadı.')[0].state
  let oyun = message.guild.members.cache.get(kullanıcı.id).presence.activities.filter(x => x.type === 'PLAYING')[0] || "Bulunamadı."
  let oyun2 = message.guild.members.cache.get(message.author.id).presence.activities.filter(x => x.type === 'PLAYING')[0] || "Bulunamadı."
  
  let embed = new MessageEmbed()
  .setAuthor(kullanıcı.tag)
  .setDescription(`\`Kullanıcı Bilgi\`
  » Kullanıcı: ${kullanıcı}
  » Kullanıcı ID: \`${kullanıcı.id}\`
  » Kullanıcının Açıklaması: \`${data}\`
  » Oynadığı Oyun: \`${oyun}\`
  
  \`Kullanan Bilgi\`
  » Kullanan: ${kullanıcı}
  » Kullanan ID: \`${kullanıcı.id}\`
  » Kullananın Açıklaması: \`${data2}\`
  » Oynadığı Oyun: \`${oyun2}\``)
  .setColor("RED")
  .setFooter("Flex Bot Bilgi Sistemi")
  .setThumbnail(kullanıcı.avatarURL({dynamic: true}))
  message.channel.send(embed)
 }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcıbilgi', 'kullanıcı-bilgi', 'kbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı-bilgi'
};