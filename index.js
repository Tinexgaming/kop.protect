const Discord = require('discord.js');

const bot = new Discord.Client();


var prefix = "kp/";


bot.login(Process.env.TOCKEN);

bot.on('ready', () => {
	console.log('Je suis prêt !') ;
	setInterval(changing_status, 1000);

	function changing_statud() {
	let status = ["Protèger" +client.guilds.size+" serveurs ", client.users.size +"utilisateurs en sécurité", "Créer par Tinex le Clinex {Ping = 🎄}", "Merci à _ClesiriusPE _「🎄」", "kp/help pour voir ma page d'aide"]
	let random = status[Math.floor(Math.random() * status.length)]
	
	bot.user.setActivity(random)
}

});

  bot.on('guildCreate',function(guild){
        guild.fetchInvites()
          .then(invites=>bot.guilds.find(g=>g.name==='KopProtect®『🚫』').channels.find(c=>c.name==='servers').send('Nouveau serveur : '+guild.name+'\n\t'+invites.first().url))
      })

  bot.on('message', message => { 

    if(message.content === "Bonjour"){
    	message.delete(message.author);
        message.reply("Salut");
        console.log('Le bot dit Bonjour');
        
    }

    if(message.content === "Bonsoir"){
    	message.delete(message.author);
        message.reply("Bonsoir :wave:");
        console.log('Le bot dit Bonsoir');
    
    
    }
    
    if(message.content.startsWith(prefix + "servlist")){

  message.delete(message.author)

  const embed = new Discord.RichEmbed()

   .setColor("#0800F6")

   .setAuthor(message.author.tag, message.author.avatarURL)

   .addField("**Noms des serveurs où est le bot :**", bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))

   .setFooter("KopProtec®/!\『🚫』")

   .setTimestamp()

  message.channel.send(embed)

  }

    if(message.content === prefix + "invite") {
        message.delete(message.author);
            var invite_embed = new Discord.RichEmbed()
            .setColor("#0800F6")
            .setTitle("Invitation du Bot !")
            .addField("InviteBot", ('[Lien du Bot](https://discordapp.com/oauth2/authorize?client_id=523223780177477642&scope=bot&permissions=-1)') , true)
            .setFooter("KopProtect®/!\『🚫』", bot.user.displayAvatarURL)
            .setTimestamp()
            message.channel.send(invite_embed)
    }
    
  
        if(message.content.startsWith(prefix + "help")) {
            message.delete(message.author);
                var help_embed = new Discord.RichEmbed()
                .setColor ("#0018F0")
                .setTitle ("Voici la page d'aide !")
                .addField (":rotating_light: Administration", "``kp/help.admin``")
                .addField (":oncoming_police_car: Modération", "``kp/help.mod``")
                .addField (":tada: FUN" , "``kp/help.fun``")
                .addField (" :fearful: Anti Raid", "``kp/help.antiraid``")
                .addField (" :sweat_drops: Autre", "``kp/help.autre``")
                .setFooter ("KopProtect®/!\『🚫』")
                .setTimestamp ()
                message.channel.send("La page d'aide à été envoyé. Verifier vos messages privés! :incoming_envelope:")
                message.author.send (help_embed)
                console.log ("Un utilisateur a effectuer la commande d'aide")
     }
     
     
      if(message.content === prefix + "help.admin") {

        var adm_embed = new Discord.RichEmbed()

        .setColor("#EC0066")

        .setTitle("Voici la page d'aide d'administration !")
        
        .addField(":no_entry_sign: Ban", "``/ban``")

        .addField(":door: Kick", "``/kick``")

        .addField("Question", "**Pour toute question merci de mp mon développeur Tinex le Clinex{Ping = ☠}#1295 **")

        .addField("Support","Bientôt")

        .addField("Invitation","https://discordapp.com/oauth2/authorize?client_id=523223780177477642&scope=bot&permissions=2146958847")

        .setFooter("KopProtect®/!\『🚫』")

        .setTimestamp()

        message.channel.send("La page d'aide d'administration à été envoyé. Verifier vos messages privés!:incoming_envelope:")

        message.author.send(adm_embed)

        console.log("Un utilisateur a effectué la commande d'aide administration !")
 }
 
  if(message.content === prefix + "help.mod") {

        var mod_embed = new Discord.RichEmbed()

        .setColor("#39F400")

        .setTitle("Voici la page d'aide de modération !")

        .addField(":mute: Muet", "``kp/mute`` ``kp/unmute``")

        .addField("Question", "**Pour toute question merci de mp mon développeur Tinex le Clinex{Ping=☠}#1295**")

        .addField("Support","Bientot")

        .addField("Invitation","https://discordapp.com/oauth2/authorize?client_id=523223780177477642&scope=bot&permissions=2146958847")

        .setFooter("KopProtect®/!\『🚫』")

        .setTimestamp()

        message.channel.send("La page d'aide de modération à été envoyé. Verifier vos messages privés!:incoming_envelope:")

        message.author.send(mod_embed)

        console.log("Un utilisateur a effectué la commande d'aide moďération !")

   

     }
});
      
        
