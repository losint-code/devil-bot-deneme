const Discord = require('discord.js');

exports.run = async (client, message, args) => {
let gifler = ['https://68.media.tumblr.com/45a079e2187ee96da24c10122e6b196a/tumblr_odfr5lpZs41uoc5exo1_400.gif',
              'https://media.giphy.com/media/1236TCtX5dsGEo/giphy.gif',
              'https://media.giphy.com/media/qnOBmH70CGSVa/giphy.gif',
              'https://media.giphy.com/media/l0MYM7umPHrEq15S0/giphy.gif']
let random = gifler[Math.floor(Math.random() * (gifler.length))]
let target = message.mentions.users.first() || message.author;
message.channel.send(new Discord.MessageEmbed()
.setAuthor(target.tag, target.avatarURL({ dynamic: true }))
.setImage(`${random}`)
.setFooter(`${message.author.tag} Tarafından İstendi.`)
.setColor("RED")
);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['alkış'],
  permLevel: 0
};

exports.help = {
  name: 'alkış'
};