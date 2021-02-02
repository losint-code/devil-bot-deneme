const { Discord, MessageEmbed } = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {

let argslar = ['public', 'oyun', 'priv'];

if(args[0] === 'public') {

};

if(args[0] === 'oyun') {
};

if(args[0] === 'priv') {
let everyone3 = '@everyone'
let embed3 = new MessageEmbed()
.setTitle("Kurallar")
.setColor("RED")
.setFooter(`${message.author.username} Tarafından Yazıldı.`, message.author.avatarURL({ dynamic: true }))
.setTitle(`• Sunucumuzun Kuralları •`)
.setDescription(`• Küfür, Reklam, Spam, Flood Yasaktır.
• +18 İçerik Atmak Yasaktır.
• Ramazan Ayı Boyunca Yiyecek, İçecek Resmi Atmak Yasaktır.
• Din, Dil, Irk, Siyaset Hakkında Konu Açmak Yasaktır.
• Herkes Birbirine Saygılı Olmalıdır.
• J4J Yapmak, Bot Basmak Yasaktır.`)
message.channel.send(everyone).then(message.delete())
message.channel.send(embed3)
}

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'prefix'
};