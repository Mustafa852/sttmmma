const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
let prefix = require("../ayarlar.json");

let avelyahya = [
"Yahya SEn Tam bir Malsın",
"Yahya Sen benimkini ye",
];

let motivasyon = avelyahya[Math.floor(Math.random() * avelyahya.length)];

const embed = new Discord.MessageEmbed()
  .setAuthor(
    `${client.user.username} `,
    client.user.displayAvatarURL({ dynamic: true })
  )
  .setColor("RANDOM")
  .setTitle(` **avelyahya** `)
  .setDescription(`${avelyahya}`);

message.channel.send(embed);

};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["avelyahya"],
permLevel: 0
};

exports.help = {
name: "avelyahya",
description: "Rastgele motivasyon mesajları atar.",
usage: "avelyahya"
};



