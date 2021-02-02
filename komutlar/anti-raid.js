const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.ownerID) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`${message.author} Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!`)).then(m => m.delete({timeout: 7000}))
let seçim = args[0]
if (db.has(`botkoruma_${message.guild.id}`) === false) {
db.set(`botkoruma_${message.guild.id}`, "Aktif")
const embed = new MessageEmbed()
.setDescription(`Anti Raid Sistemi Zaten Açık Kapatmak İçin Çarpı Emojisine Bas.`)
message.channel.send(embed).then(async x => {
  message.react('❌');
  
  const çarpıemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id

const çarpı = x.createReactionCollector(çarpıemoji)
çarpı.on('collect', async ramo => {
    db.delete(`botkoruma_${message.guild.id}`)
    x.delete({timeout: 7000})
    message.delete()
    
    const embed = new MessageEmbed()
    .setColor("RED")
    .setDescription('Anti-Raid Sistemi Maalesef Aktif Edilemedi Tekrar Denemen Gerek.')
    .setFooter(`Flex Anti-Raid Sistemi`)
    .setTimestamp()
    message.channel.send(embed)
  })
})
}
  
  
if (!seçim) {
const embed = new MessageEmbed()
.setColor("YELLOW")
.setTitle(`Anti-Raid Sistemi`)
.setDescription(`Anti-Raid Sistemini Açmak İçin \`✅\`,
Anti-Raid Sistemini İptal Etmek İçin \`❌\`
Tepkilerine Tıklaman Gerek.`)
.setFooter("Flex Bot Anti-Raid Sistemi")
.setTimestamp()
message.channel.send(embed).then(async x => {
     embed.react('✅');
     embed.react('❌');
  
  const tikemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id
  const çarpıemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id

  const tik = x.createReactionCollector(tikemoji)
  const çarpı = x.createReactionCollector(çarpıemoji)
  
  tik.on('collect', async ramo => {
    db.set(`botkoruma_${message.guild.id}`, "aktif")
    x.delete({timeout: 7000})
    message.delete()
    
    const embed = new MessageEmbed()
    .setColor("GREEN")
    .setDescription('Anti-Raid Sistemi Başarıyla Aktif Edildi.')
    .setFooter(`Flex Anti-Raid Sistemi`)
    .setTimestamp()
    message.channel.send(embed)
  })
  
  çarpı.on('collect', async ramo => {
    db.delete(`botkoruma_${message.guild.id}`)
    x.delete({timeout: 7000})
    message.delete()
    
    const embed = new MessageEmbed()
    .setColor("RED")
    .setDescription('Anti-Raid Sistemi Maalesef Aktif Edilemedi Tekrar Denemen Gerek.')
    .setFooter(`Flex Anti-Raid Sistemi`)
    .setTimestamp()
    message.channel.send(embed)
  })
  
})
}



};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['anti-raid'],
  permLevel: 0
};

exports.help = {
  name: 'antiraid'
};
