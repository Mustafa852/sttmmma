const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(ayarlar.yetkiliRol.some(arwene => message.member.roles.cache.has(arwene)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${client.guild.emojis.cache.get(ayarlar.no)} **Bu işlemi kullanmak için gerekli yetkin yok!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[1])
if(!etiketlenenKişi) return message.channel.send(`${client.guild.emojis.cache.get(ayarlar.no)} **Kaydetmek için bir kişi etiketlemelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

if(db.fetch(`tagliAlim.${message.guild.id}`)) {
    if(!ayarlar.tagRol.some(arwenefalan => message.member.roles.cache.has(arwenefalan)) && !etiketlenenKişi.roles.cache.has(ayarlar.vipRol) && !etiketlenenKişi.roles.cache.has(ayarlar.boosterRol)) return message.channel.send(`${client.emojis.cache.get(ayarlar.no)} **Belirtilen kişinin kaydı \`booster değil/vip değil/tag almamış\` durumlarından herhangi birinden dolayı gerçekleştirilemedi!**`)
}

const isim = args.splice(1).join(' ')
if(!isim) return message.channel.send(`${client.guild.emojis.cache.get(ayarlar.no)} **Kaydetmek için bir isim belirtmelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

ayarlar.erkekRol.some(arwene2 => etiketlenenKişi.roles.add(arwene2))
etiketlenenKişi.roles.remove(ayarlar.kayıtsızRol)
etiketlenenKişi.setNickname(`${ayarlar.tag} ${isim}`)

message.react(client.emojis.cache.get(ayarlar.yes))

const arwEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Kullanıcının ismi \`${isim} Shex\` olarak değiştirildi ve <@&${ayarlar.erkekRol1}>, <@&${ayarlar.erkekRol2}> rolleri verildi!`)
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

message.channel.send(arwEmbed)

db.push(`isimler.${etiketlenenKişi.id}`, `
İsim: isim
Yaş: yaş
Yetkili: message.author
`)

db.add(`erkekTeyit.${etiketlenenKişi.id}`, `1`)
db.add(`toplamTeyit.${etiketlenenKişi.id}`, `1`)

}
exports.config = {
    name: "erkek",
    guildOnly: true,
    aliases: ["e", "male"]
}