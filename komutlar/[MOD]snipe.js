const { MessageEmbed } = require('discord.js')
const data = require('quick.db')

   exports.run = async(client, message, args) => {
    const flex = await data.fetch(`snipe.id.${message.guild.id}`)
    if(!flex) {
    const embeds = new MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setDescription(`Mesaj bulunamadı!`)
.setColor(`RED`)
    message.channel.send(embeds);
          } else {
  let kullanıcı = client.users.cache.get(flex);
  const silinen = await data.fetch(`snipe.mesaj.${message.guild.id}`)
  const embed = new MessageEmbed()
  .setAuthor(kullanıcı.username, kullanıcı.avatarURL({ dynamic: true }))
  .setDescription(`Silinen Mesaj: \`${silinen}\``)
.setColor("YELLOW")
  message.channel.send(embed) }
}
exports.conf = {
    enabled:true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}
exports.help = {
  name: "snipe",
  description: 'Son silinen mesajı yakalar.',
  usage: 'snipe'
} 