const Discord = require('discord.js')
const db = require("quick.db");
exports.run = async(client, message, args) => {
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMzczOTIzNTkyNDk0MzI1OTgiLCJib3QiOnRydWUsImlhdCI6MTY2Nzk5MDgwMH0.Sezi4wTpFeojS_StPFbNix1xo5ykBsvpf-C_IiBAQpM', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  
  let limit = args.slice(0).join(' ')
  
  if (!limit) return message.channel.send(`Lütfen Limit Belirt.`)
  if (isNaN(limit)) return message.channel.send('ban Limiti Sadece Sayılardan Oluşabilir! Lütfen Sayıyı Harflerle Yazmayı Deneme :D')
  
  db.set(`banlimit_${message.guild.id}`, limit)
message.channel.send(`Ban Limiti **${limit}** Olarak Ayarlandı! Limiti Geçeni Döverim.`)
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/1037392359249432598/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
            .then(Strom => Strom.delete({ timeout: 10000 }));  
}
        })
      
      },
exports.conf = {
  aliases: ['ban-limit'],
  permLevel: 4
};
exports.help = {
  name: 'banlimit'
}; 