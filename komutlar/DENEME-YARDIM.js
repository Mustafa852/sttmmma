const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMzczOTIzNTkyNDk0MzI1OTgiLCJib3QiOnRydWUsImlhdCI6MTY2Nzk5MDgwMH0.Sezi4wTpFeojS_StPFbNix1xo5ykBsvpf-C_IiBAQpM', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {

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
      `__nsfw-sistem__`,
      `🍑 \`${prefix}nsfw-sistem\` nsfw komutlarını gösterir`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🥵  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🥵 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🥵 \`${prefix}iletişim\` | Strom  İletişim Bilgileri.`
    );
  return message.channel.send(sunucu);
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/1037392359249432598/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              .then(Strom => Strom.delete({ timeout: 10000 }));
}
        })
      
      },

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nsfw'],
  permLevel: 0
};

exports.help = {
  name: "yardımmenusu",
  description: "Yardım Menüsü",
  usage: "nsfw"
};
