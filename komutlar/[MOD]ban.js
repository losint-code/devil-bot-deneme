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

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new MessageEmbed()
        .setDescription("Lütfen sunucudan yasaklanacak kişiyi etiketleyiniz!")
        .setFooter("Devil Bot Ban Sistemi")
       .setColor("RED")
    );
  }
  let sebep = args[1]
  if(!sebep)  return message.channel.send(new MessageEmbed().setDescription("Bir Sebep Girmelisiniz.").setColor("RED").setFooter("Devil Bot Ban Sistemi").setTimestamp());

  const embed = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`${u} Adlı Kullanıcının,
    \`${sebep}\` Sebebinden Dolayı Yasaklanmasını Onaylıyor Musunuz?`)
    .setAuthor(u.username, u.avatarURL({ dynamic: true }));
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(new MessageEmbed()
       .setTitle(`${u.username} Sunucudan Yasaklandı`)
       .setDescription(`Sunucudan Yasaklanan: ${u}/(\`${u.id}\`)
       Sunucudan Yasaklayan: ${message.author}/(\`${message.author.id}\`)
       Sebep: \`${sebep}\``)
       .setColor("GREEN")
       .setFooter("Devil Bot Ban Sistemi")
);

        message.guild.users.ban(u);
      }
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban", "yasakla"],
  permLevel: 0
};

exports.help = {
  name: "ban",
  description: "Üye Yasaklamınız Sağlar",
  usage: "ban"
};

