const { Discord, MessageEmbed } = require("discord.js");
const crypto = require('crypto-global')

exports.run = async (client, message, args) => {
let unit = args[0]
if (!unit) return message.channel.send(new MessageEmbed().setDescription("Lütfen bir crypto para belirtiniz. \`.crypto bitcoin\`").setColor('YELLOW'))
let all = await crypto.all(unit)
 
const embed = new MessageEmbed()
.setColor('YELLOW')
.setThumbnail(all.icon)
.setAuthor(all.name)
.addField('Fiyat (TRY)', `\`${all.try}\``)
.addField('Fiyat (USD)', `\`${all.usd}\``)
.addField('24 Saatlik Hacim', `\`${all.vol24}\``)
.addField('Aktif Hacim', `\`${all.market}\``)
.addField('1 Yılın En Düşük Değeri', `\`${all.lower}\``)
.addField('1 yılın En Yüksek Değeri', `\`${all.higher}\``)
.addField('Anlık Yüzdelik Değeri', `\`${all.percent}\``)
.setImage(all.table)
message.channel.send(embed)
 
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};
 
exports.help = {
 name: 'crypto',
 description: '',
 usage: 'crypto'
};