const Discord = require('discord.js')
const fs = require('fs');
const ms = require("ms")
const db = require('quick.db')
exports.run = async (client, message, args) => {
  	const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  if (!message.guild) return
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Bu Komutu kullanmanız için `Sunucu_Yönet` Yetkisine sahip olmalısınız.")
    let kullanildii = JSON.parse(fs.readFileSync('./sunucutanıt.json', 'utf8'));
  if (!kullanildii[message.guild.id]) kullanildii[message.guild.id] = {
    gunlukkullanim: 0
  }
  if (kullanildii[message.guild.id].gunlukkullanim == 0)
  {
   
    
    
    const embed = new Discord.MessageEmbed()
    .setAuthor('Strom', client.user.avatarURL())
  .setTitle('Strom', client.user.avatarURL())
  .setURL("https://discord.gg/FV2rwt6GRF")
  .setDescription("s!sunucutanıt Kullandınız.")
  .addField('Sizin Sunucunuz Burada Tanıtıldı', `[Tıkla](https://discord.gg/FV2rwt6GRF)`)
        .setTimestamp()
  .addField("Sizde sunucunuzu tanıtmak istiyorsanız.", "s!davet yazarak beni sunucunuza ekleyebilirsiniz.")
  .setColor('BLUE')
 message.channel.send(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.MessageEmbed()
      .setAuthor('Strom', client.user.avatarURL())
      .setTitle('Storm', client.user.avatarURL())
      .setURL("https://discord.gg/FV2rwt6GRF")
      .addField(` Sunucu Sahibi`, message.author.tag, true)
      .addField(` Sunucu İsmi`, message.guild.name, true)
      .addField(` Sunucudakı Üye Sayısı`, message.guild.members.cache.size, true)
      .addField(` Sunucu Davet Linki`, invite.url, true)
            .setColor('BLUE')
        .setTimestamp()
      .setThumbnail(message.guild.iconURL())
       client.channels.cache.get('826122246548226068').send(embed)//
            });
  kullanildii[message.guild.id].gunlukkullanim = 1
    
  fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  return
  }
  setTimeout(async() => {
    kullanildii[message.guild.id].gunlukkullanim = 0
    fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  }, ms('12h'));
  
  if (kullanildii[message.guild.id].gunlukkullanim == 1)
  {
  message.reply("Bu özelliği `(24)` Saat içinde yalnızca 1 kez kullanabilirsiniz")
  }

} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucutanıt'],
    permLevel: 0,
}

exports.help = {
    name: 'sunucunutanıt',
    description: 'Sunuzunuzu Tanıtmak İçin En Uygun Kod!',
    usage: 'sunucutanıt'
}
