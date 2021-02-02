const Discord = require('discord.js');

exports.run = async (client, message, args) => {
let gifler = ['https://media.giphy.com/media/RMGjus0Fr1uJdeRvrq/giphy.gif',
              'https://media.giphy.com/media/rcRwO8GMSfNV6/giphy.gif',
              'https://media.giphy.com/media/3o6ZtrxkK4jLkmn8He/giphy.gif',
             'https://media.giphy.com/media/l2JJJqZlP6ocHAHGo/giphy.gif',
             'https://media.giphy.com/media/3oEhn4mIrTuCf0bn1u/giphy.gif']
let random = gifler[Math.floor(Math.random() * (gifler.length))]
let target = message.mentions.users.first() || message.author;
let yazı = "Dostum Çok Güzel Yumruk Attın WoW!!!"
message.channel.send(new Discord.MessageEmbed()
.setAuthor(yazı, target.avatarURL({ dynamic: true }))
.setImage(`${random}`)
.setFooter(`${message.author.tag} Tarafından Yumruklandınız.`)
.setColor("RED")
);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yumruk'],
  permLevel: 0
};

exports.help = {
  name: 'yumruk'
};