const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format("\`D [gün], H [saat], m [dakika], s [saniye]\`  ");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
   .setThumbnail("")
    .setFooter("Devil Bot ©", message.guild.iconURL())
    .addField("» **Botun Sahibi**", "<@793893131825184790>")
    .addField("» **Gecikme süreleri**","Mesaj Gecikmesi: \`{ping1}ms\` \nBot Gecikmesi: \`{ping2}ms\`"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("» **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " \`MB\`",true)
    .addField("» **Çalışma süresi**", seksizaman, true)
    .addField("» **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("» **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("» **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("» **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField(`» **Destek Sunucumuz**`, `[Sunucumuza Katıl](https://discord.gg/Gp86dU73UQ)`, true)
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};