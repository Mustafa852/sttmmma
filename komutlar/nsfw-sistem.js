const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const sunucu = new Discord.MessageEmbed()
    .setAuthor(`Strom  | Eklentiler`)
    .setTitle(``)
    .setColor("RANDOM")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/854450815149277214/74b8c7ed3f881b718c504a44158bff3d.png"
    )
    .setDescription(
      ` 🔌  Strom  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__4k__`,
      `🍑 \`${prefix}4k\` 4k nsfw komutu`,
      true
    )
    .addField(
      `__anal__`,
      `🍑 \`${prefix}anal\` anal nsfw komutu`,
      true
    )
    .addField(
      `__pgif__`,
      `🍑 \`${prefix}pgif\` pgif nsfw komutu`,
      true
    )
    .addField(
      `__hentai__`,
      `🍑 \`${prefix}hentai\` hentai nsfw komutu`,
      true
    )
   .addField(
      `__hkistune__`,
      `🍑 \`${prefix}hkistune\` hkistune nsfw komutu`,
      true
    )
  .addField(
      `__hneko__`,
      `🍑 \`${prefix}hneko\` hneko nsfw komutu`,
      true
    )
    .addField(
      `__holo__`,
      `🍑 \`${prefix}holo\` holo nsfw komutu`,
      true
    )
      .addField(
      `__kemonomimi__`,
      `🍑 \`${prefix}kemonomimi\` kemonomimi nsfw komutu`,
      true
    )
  .addField(
      `__neko__`,
      `🍑 \`${prefix}neko\` neko nsfw komutu`,
      true
    )
  .addField(
      `__pussy__`,
      `🍑 \`${prefix}pussy\` pussy nsfw komutu`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🥵  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🥵 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🥵 \`${prefix}iletişim\` | Strom  İletişim Bilgileri.`
    );
  return message.channel.send(sunucu);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nsfw-sisetm"],
  permLevel: 0
};

exports.help = {
  name: "nsfw",
  description: "Yardım Menüsü",
  usage: "nsfw"
};
