const { Discord, MessageEmbed } = require('discord.js')


exports.run = async(client, message, args) => {
              const yavaş = require('../ayarlar.json')
              let prefix = yavaş.prefix
              if(message.channel.type == "dm")  return;
if (message.channel.type !== "text") return;
if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(new MessageEmbed().setDescription("Bu Komutu Kullanabilmen İçin \`Yönetici\` Yetkisine Sahip Olmalısın.").setColor("RED"));  

const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new MessageEmbed()
              .setDescription(`Doğru kullanım: \`${prefix}yavaş-mod [0/100]\``)
              .setColor('YELLOW')
              .setTimestamp()
              .setFooter(`Flex Bot`)
               message.channel.send({embed})
               return}
if (limit > 100) {
    return message.channel.send(new MessageEmbed().setDescription("Süre limiti maksimum **100** saniye olabilir.").setColor('YELLOW'));
}  
    message.channel.send(new MessageEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`).setColor('YELLOW').setFooter("Flex Bot").setTimestamp().setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))).then(m => m.delete({ timeout: 5000, reason: 'Siliniyor.' }));
  
var request = require('request');
request({
    url: `https://discord.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 0,

};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/10]',
};