const { Discord, MessageEmbed } = require("discord.js");
const db = require('quick.db')

exports.run = async (client, message, args) => {

if (!message.member.voice.channel) {
return message.reply(new MessageEmbed().setDescription("Ses kanalında olman lazım!").setColor("RED").setFooter("Flex Ses Sistemi").setTimestamp());
}
const filter = (reaction, user) => {
return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanıcı.id;
};
  
let kullanıcı = message.mentions.members.first()
if (!kullanıcı) return message.channel.send(new MessageEmbed().setDescription('Bir Kullanıcı Belirt.').setColor("RED").setFooter("Flex Ses Sistemi").setTimestamp());

let member = message.guild.member(kullanıcı);

if (!member.voice.channel) return message.channel.send(new MessageEmbed().setDescription('Etiketlenen Kullanıcı Ses Kanalında Değil.').setColor("RED").setFooter("Flex Ses Sistemi").setTimestamp()).then(m => m.delete,{timeout: 5000});

const voiceChannel = message.member.voice.channel.id;
if (!voiceChannel) return;
  
let log = new MessageEmbed()
.setColor("YELLOW")
.setDescription(`${kullanıcı}, ${message.author} \`${message.member.voice.channel.name}\` Odasına Çekmek İstiyor.\n **Kabul ediyormusun ?**`)
.setFooter("Devil Ses Sistemi")
.setTimestamp()
  
let mesaj = await message.channel.send(log)
await mesaj.react("✅")
await mesaj.react("❌")
mesaj.awaitReactions(filter, {
max: 1,
time: 60000,
errors: ['time']
}).then(collected => {
const reaction = collected.first();
if (reaction.emoji.name === '✅') {
let evet = new MessageEmbed()
.setColor("GREEN")
.setAuthor(kullanıcı.user.username, kullanıcı.user.avatarURL({ dynamic: true }))
.setDescription(`${message.author} **Tebrikler** :tada:\n ${kullanıcı} Odaya Çekilme Teklifini Onayladı.`)
mesaj.edit(evet)
kullanıcı.voice.setChannel(message.member.voice.channel.id)
} else {
let hayır = new MessageEmbed()
.setColor("RED")
.setAuthor(kullanıcı.user.username, kullanıcı.user.avatarURL({ dynamic: true }))
.setDescription(`**Üzgünüm** ${message.author} <a:kalp:804406932327759932>\n${kullanıcı} Odaya Çekilme Teklifini Reddetti.`)
mesaj.edit(hayır)
}
})
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["gel"],
  permLevel: 0,
}

exports.help = {
  name: 'çek'
  
}