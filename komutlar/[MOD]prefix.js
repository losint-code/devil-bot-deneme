const { Discord, MessageEmbed } = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {

let argslar = ['ekle', 'kaldır', 'temizle'];
if(!args[0] || !argslar.includes(args[0])) {

let prefixes = ['1) \`d!\`'];
const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
if(prefixler && prefixler.length >= 1) {
var i = 1;
for(const key in prefixler) {
i++
prefixes.push(i+') '+`\`${prefixler[key]}\``);
};
};

const embed = new MessageEmbed()
.setTitle(`Flex'in Prefixleri`)
.setColor('YELLOW')
.setFooter(`${prefixes.length} Prefix Bulundu`)
.setDescription(prefixes.join('\n'));
return message.channel.send(embed);

};

if(args[0] === 'ekle') {
if(!args[1]) return;
if(args[1].startsWith('"') && args[args.length-1].endsWith('"')) {
let arg = args.slice(1).join(' ').slice(1, args.slice(1).join(' ').length-1);
const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
if(prefixler && prefixler.some(a => a === arg)) return message.channel.send(new MessageEmbed().setColor("GREEN").setDescription(`\`${arg}\` Adlı Prefix Eklendi.`));  
await database.push(`prefixes.${message.guild.id}`, arg);
return message.channel.send(new MessageEmbed().setColor("GREEN").setDescription(`\`${arg}\` Adlı Prefix Eklendi.`));
};
if(args[2]) return message.channel.send(new MessageEmbed().setColor("RED").setDescription("Çok Fazla Prefix Var.\n Lütfen Temizle Veya Kaldır."));
const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
if(prefixler && prefixler.some(a => a === args[1])) return message.channel.send(new MessageEmbed().setColor("GREEN").setDescription(`\`${args[1]}\` Adlı Prefix Eklendi.`));  
await database.push(`prefixes.${message.guild.id}`, args[1]);
return message.channel.send(new MessageEmbed().setColor("GREEN").setDescription(`\`${args[1]}\` Adlı Prefix Eklendi.`));
};

if(args[0] === 'kaldır') {
if(!args[1]) return;
if(args[1].startsWith('"') && args[args.length-1].endsWith('"')) {
let arg = args.slice(1).join(' ').slice(1, args.slice(1).join(' ').length-1);
const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
if(prefixler && !prefixler.some(a => a === arg)) return message.channel.send(new MessageEmbed().setColor("RED").setDescription('Ayarlanmış Bir Prefix Bulamadım.'));  
await database.set(`prefixes.${message.guild.id}`, prefixler.filter(a => a !== arg));
return message.channel.send(new MessageEmbed().setColor("GREEN").setDescription(`\`${args[1]}\` Adlı Prefix Kaldırıldı.`));
};
if(args[2]) return message.channel.send(new MessageEmbed().setColor("RED").setDescription("Çok Fazla Prefix Var.\n Lütfen Temizle Veya Kaldır."));
const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
if(prefixler && !prefixler.some(a => a === args[1])) return message.channel.send(new MessageEmbed().setColor("RED").setDescription('Ayarlanmış Bir Prefix Bulamadım.'));  
await database.set(`prefixes.${message.guild.id}`, prefixler.filter(a => a !== args[1]));
return message.channel.send(new MessageEmbed().setColor("GREEN").setDescription(`\`${args[1]}\` Adlı Prefix Kaldırıldı.`));
};

if(args[0] === 'temizle') {
await database.delete(`prefixes.${message.guild.id}`);
return message.channel.send(new MessageEmbed().setColor("GREEN").setDescription('Tüm Prefixler Temizlendi.\n Prefix Tekrardan \`f!\` Oldu.'));
};

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'prefix'
};