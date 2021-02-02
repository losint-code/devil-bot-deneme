const { Discord, MessageEmbed } = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("Bu Komutu Kullanabilmek İçin \`Üyeleri Yasakla\` Yetkisine Sahip Olmalısın.")
      .setColor("RED")
      .setFooter(bot.user.username, bot.user.avatarURL());
    message.channel.send(embed);
    return;
  }

  let sebep = args[0]
  if(!sebep)  return message.channel.send(new MessageEmbed().setDescription("Bir Sebep Girmelisiniz.").setColor("RED").setFooter("Devil Bot Ban Sistemi").setTimestamp());

  const embed = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`Devil Bot Duyuru'yu \`@everyone\` İle Birlikte Atmaktadır Kabul Ediyor Musunuz?`)
    .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem İptal Edildi."));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        let everyone = "@everyone"
        message.channel.send(everyone).then(x => x.delete())
        message.channel.send(new MessageEmbed()
       .setTitle(`${message.author.username} Tarafından Kullanıldı.`, message.author.avatarURL({ dynamic: true }))
       .setDescription(`**${sebep}**`)
       .setColor("RED")
       .setFooter("Devil Bot Duyuru Sistemi")
);
      }
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["duyuru", "duyur"],
  permLevel: 0
};

exports.help = {
  name: "duyuru",
  description: "Üye Yasaklamınız Sağlar",
  usage: "duyuru"
};

