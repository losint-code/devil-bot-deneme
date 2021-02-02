const Discord = require('discord.js');

exports.run = async (client, message, args) => {
let gifler = ['Mavi',
              'Siyah',
              'Yeşil',
              'Sarı',
              'Kırmızı',
              'Beyaz',
              'Mavi',
              'Turuncu',
              'Pembe',
              'Mor',
              'Eflatun',
              'Kahverengi', ]
let random = gifler[Math.floor(Math.random() * (gifler.length))]
let target = message.mentions.users.first() || message.author;
message.channel.send(new Discord.MessageEmbed()
.setAuthor(target.tag, target.avatarURL({ dynamic: true }))
.setDescription(`\`${random}\``)
.setColor("RED")
);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şanslırengim', "şanslırenk"],
  permLevel: 0
};

exports.help = {
  name: 'şanslırengim'
};