const Discord = require('discord.js');

exports.run = async(client, message) => {
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjYwNzM0NTkyfQ.Tci7n9zVPbCAfU70t8CccDiH7lg7pGrvYHnIvRk9f1s', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
    const rules = new Discord.MessageEmbed()
    
    .setColor('RANDOM')
      .addField(`Kurallar`, [`
      
» Kurallar

» Her sunucunun kuralları vardır bu sunucununda bir kuralları vardır!

1) Aşırıya kaçmadıkça küfür serbesttir.

2) Her Türlü Reklam Fark Etmeksizin **yasaktır**.

3) Irkçılık , din , siyaset... **yasaktır**.

4) Spam,flood yapmak **yasaktır**.

5) nafw ve nsfw tarzı herşey **yasaktır**.

6) Rahatsız edici davranışlarda bulunma **yasaktır**.

7) Kavga çıkarmak , tartışma oluşturmak **yasaktır**

8) Her hangi bir şekilde kişi dolandırmak **yasaktır**

9) Yetkililere Argo Kelime Kullanmak Ve Emir Verici Sözler Söylemek **yasaktır**.

10) Ses Kanallarında İnsanlara Küfür Etmek,Trollemek Ve Rahatsız Etmek **yasaktır**.

11) +18 Cinsel içerik, kan, vahşet, jump scare içeren fotoğraf,video paylaşımı **yasaktır**.

12) Yetkililerin kendinden düşük rütbe olan kişilere patronluk taslaması **yasaktır**.

Herkes kuralları okumuş ve kabul etmiş sayılır! , ben bilmiyordum vb.. geçmez!
      `, '||@everyone|| & ||@here||']);

       message.delete();
      //message.react("?");

    return message.channel.send(rules).then(keleS => keleS.react("?"));

} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
           .then(Strom => Strom.delete({ timeout: 10000 }));   
}
        })
      
      },

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rules'],
    permLevel: 0
}

exports.help = {
    name : 'kurallar',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: 'kurallar/rules'
}