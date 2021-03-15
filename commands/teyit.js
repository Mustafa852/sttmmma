const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    if(ayarlar.yetkiliRol.some(arwene => message.member.roles.cache.has(arwene)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${client.guild.emojis.cache.get(ayarlar.no)} **Bu işlemi kullanmak için gerekli yetkin yok!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[1])
if(!etiketlenenKişi) etiketlenenKişi = message.author

const arwEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`${client.emojis.cache.get(ayarlar.yes)} ${etiketlenenKişi} kullanıcısının
${db.fetch(`kadinTeyit.${etiketlenenKişi.id}`)} kadın,
${db.fetch(`erkekTeyit.${etiketlenenKişi.id}`)} erkek,
${db.fetch(`toplamTeyit.${etiketlenenKişi.id}`)} toplam
kaydı var.
`)
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

message.react(client.emojis.cache.get(ayarlar.yes))

message.channel.send(arwEmbed)

}
exports.config = {
    name: "teyit",
    guildOnly: true,
    aliases: ["teyit-bilgi", "teyitbilgi", "teyitler", "teyit-sayi", "teyitsayi", "teyitsayisi", "teyit-sayisi", "kayit-bilgi", "kayitbilgi", "kayitlar", "kayit-sayi", "kayitsayi", "kayit-sayisi", "kayitsayisi"]
  }