const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
let prefix = require("../ayarlar.json");

let motivasyonlar = [
"Başarı sana güven duymanla başlar.",
"Her başarısız deneme, bir başarı için bir adımdır.",
"Hayallerin olması, başlaman için en iyi sebepdir.",
"Başarı, sabırla, çalışma azmiyle ve öğrenme isteğiyle gelir.",
"Başarılı olmak istemek, onun yarısıdır.",
"Hayatta başarılı olmak, doğru adımları atmak ve doğru zamanda doğru şeyleri yapmakla ilgilidir.",
"Başarı, hedefinize odaklanmanız ve ona ulaşmak için her fırsatı değerlendirmenizle ilgilidir.",
"Başarı, düşmeyi göze alabilecek kadar yüksek atlamaktır.",
"Hayatta başarılı olmak, beklentilerinizi aşmanızı ve hedeflerinizi gerçekleştirmenizi sağlar.",
"Başarı, umutsuzluğa karşı direnmek ve devam etmektir.",
"Dünya senin ayakların altında olabilir, yeter ki ona ulaşmak için yürümeye devam et.",
"Başarının sırrı, hiçbir zaman pes etmemektir.",
"Başarı, sadece ne istediğinizi bilmek ve onun için savaşmaktır.",
"Başarılı insanlar, zorlukları bir fırsat olarak görürler.",
"Hayatta başarılı olmak için, ne yaptığınızı bilmeli ve buna sadık kalmalısınız.",
"Başarısızlıklar, yeniden deneyebileceğiniz birer fırsattır.",
"Hayallerinizi gerçekleştirmek için, her gün bir adım atın.",
"Başarı, fark yaratmak istemenizle başlar.",
"Kendine inan, cesaretin olsun, başarının sana geleceğine inan.",
"Başarı, risk almaktan korkmamakla ilgilidir.",
"Hayatta başarılı olmak için, önce kendinize inanın.",
"Başarı, ne kadar çok çalıştığınızla ilgilidir.",
"Başarı, zorluklar karşısında pes etmemekle ilgilidir.",
"Her başarı, bir önceki başarının üzerine inşa edilir.",
"Hayatta başarılı olmak için, sabırlı ve azimli olun.",
];

let motivasyon = motivasyonlar[Math.floor(Math.random() * motivasyonlar.length)];

const embed = new Discord.MessageEmbed()
  .setAuthor(
    `${client.user.username} `,
    client.user.displayAvatarURL({ dynamic: true })
  )
  .setColor("RANDOM")
  .setTitle(` **Motivasyon** `)
  .setDescription(`${motivasyon}`);

message.channel.send(embed);

};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["motivasyon"],
permLevel: 0
};

exports.help = {
name: "Motivasyon",
description: "Rastgele motivasyon mesajları atar.",
usage: "motivasyon"
};



