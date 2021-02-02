const db = require('quick.db')
const { Discord, MessageEmbed } = require('discord.js')
 let ayarlar = ['aç','kapat']
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('Hey Bu Ayarı Kullanabilmek için `aç` yada `kapat` yazmalısın.')
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setDescription('Bu Komudu Kullanabilmek İçin \`Yönetici\` Yetkisine Sajip Olmalısın').setColor("RED").setAuthor(message.author.username, message.author.avatarURL({ dynamic: true })))
 
  if (args[0] == 'aç') {
    if(db.has(`reklam_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`Reklam Engelleme Sistemi Zaten \`Aktif\` Durumda.`))
    db.set(`reklam_${message.guild.id}`, 'acik')
      message.channel.send(new MessageEmbed().setDescription('Reklam Engelleme Sistemi Başarıyla \`Aktif\` Edildi.'))
  }
  if (args[0] == 'kapat') {
        if(!db.has(`reklam_${message.guild.id}`)) return message.channel.send(`Sistem zaten kapalı.`)
    db.delete(`reklam_${message.guild.id}`)
      message.channel.send(new MessageEmbed().setDescription('Reklam Engelleme Sistemi Başarıyla \`Devre Dışı Bırakıldı\`').setColor("RED"))
  }
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['advertisement','reklam'],
  permLevel: 0
};
 
exports.help = {
  name: 'reklam-engelle',
  description: '[Admin Komutu]',
  usage: 'reklam-engelle'
};