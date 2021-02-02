const { Discord, MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

if (!message.member.voice.channel) {
return message.reply("Ses kanalında olman lazım!");
}
const filter = (reaction, user) => {
return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanıcı.id;
};
  
let kullanıcı = message.mentions.members.first();
if (!kullanıcı) return message.channel.send(new MessageEmbed().setDescription('Bir Kullanıcı Belirt.').setColor("RED").setFooter("Flex Ses Sistemi"));

let rol = message.mentions.roles.first();
let member = message.guild.member(kullanıcı);

if (!member.voice.channel) return message.channel.send('Etiketlenen Kullanıcı Ses Kanalında Değil.').then(m => m.delete(5000));

  
let log = new MessageEmbed()
.setColor("#7289D")
.setDescription(`${kullanıcı}, ${message.author} \`${kullanıcı.voice.channel.name}\` Odasına Gelmek İstiyor. Kabul Ediyormusun ?`)
  
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
let onay = new MessageEmbed()
.setColor("GREEN")
.setAuthor(kullanıcı.user.username, kullanıcı.user.avatarURL({ dynamic: true }))
.setDescription(`${message.author} **Tebrikler** :tada:\n ${kullanıcı} Odaya Gelme Teklifini Onayladı.`)
mesaj.edit(onay)
message.member.voice.setChannel(kullanıcı.voice.channel.id)
} else {
let red = new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(kullanıcı.user.username, kullanıcı.user.avatarURL({ dynamic: true }))
.setDescription(`**Üzgünüm** ${message.author} <a:kalp:804406932327759932>\n${kullanıcı} Odaya Gelme Teklifini Reddetti.`)
mesaj.edit(red)
}
})}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["git"],
  permLevel: 0,
}

exports.help = {
  name: "git"
};