const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`${client.user.username}`,"https://twitch.tv//9ivv")
    console.log('')
    console.log('')
    console.log('╔[════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged i as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informatins :')
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
  });

 client.on('message', message => {

	if(message.author.id === "474175378118803466" || message.author.id === "410778583682777098") {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');


    if (message.content.startsWith(prefix + 'setwatch')) {
    client.user.setActivity(argresult, {type: 'WATCHING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`Watching Now: **${argresult}**`)
  }


    if (message.content.startsWith(prefix + 'setlis')) {
    client.user.setActivity(argresult, {type: 'LISTENING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
  }


  if (message.content.startsWith(prefix + 'setname')) {
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`Username Changed To **${argresult}**`)
    return message.reply(".");
  }

  if (message.content.startsWith(prefix + 'setavatar')) {
    client.user.setAvatar(argresult);
     message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
  }

  if (message.content.startsWith(prefix + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
       console.log('test' + argresult);
      message.channel.sendMessage(`Streaming: **${argresult}**`)
  }
  if (message.content.startsWith(prefix + 'setplay')) {
    client.user.setGame(argresult);
       console.log('test' + argresult);
      message.channel.sendMessage(`Playing: **${argresult}**`)
  }
	}

 });

const moment = require("moment")
client.on("guildMemberAdd", m => {
        let room = m.guild.channels.find("id","509397361802477570");
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
        m.ban() .then((
            room.send(`**:no_entry: | ${m} Has been banned for: \`fake\`**`)
        ));
    };
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
    
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };
});

var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
    var guild = client.guilds.get("509397361307680779");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});
 
 client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("509397361802477570");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
     var guild = client.guilds.get("509397361307680779");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    setTimeout(function() {
                        channel.send(`**! . Bienvenido Pour AttacK, ${member} . :champagne_glass: .\n:small_orange_diamond: . Invited By: ${Invite.inviter} :maple_leaf: .**`) ;
                    },1500);
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});


client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("509397361802477570");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        var guild = client.guilds.get("509397361307680779");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    setTimeout(function() {
 channel.send(`**! . Bienvenido Pour AttacK, ${member} . :champagne_glass: .\n:small_orange_diamond: . Invited By: ${Invite.inviter} :maple_leaf: .**`) ;
                    },1500);
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});

client.on("guildMemberAdd", member => {
if(member.guild.id == "509397361307680779") {
let role = member.guild.roles.find("name","❋ Ùn.");
    member.addRole(role);
} else {
    return;
}
});

client.on('message',async message => {
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;
var gMembers;
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

var filter = m => m.author.id === message.author.id;
if(message.content.startsWith(prefix + "giveaway")) {

if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 20000,
    errors: ['time']
  }).then(collected => {
    let room = message.guild.channels.find('name' , collected.first().content);
    if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
    room = collected.first().content;
    collected.first().delete();
    msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
        duration = collected.first().content * 60000;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            title = collected.first().content;
            collected.first().delete();
            msg.delete();
            message.delete();
            try {
              let giveEmbed = new Discord.RichEmbed()
              .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
              .setColor("RED")
              .setFooter(message.author.username, message.author.avatarURL);
              message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                 let re = m.react('🎉');
                 setTimeout(() => {
                   let users = m.reactions.get("🎉").users;
                   let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                   let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                   let endEmbed = new Discord.RichEmbed()
                   .setAuthor(message.author.username, message.author.avatarURL)
                   .setTitle(title)
                   .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                   .setColor("RED")
                   .setTimestamp()
                 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                 },duration);
               });
            } catch(e) {
            message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
              console.log(e);
            }
          });
        });
      });
    });
  });
});
}
});



const coolDown = new Set();
client.on("message", message => {
    let command = message.content.split(" ")[0];
        if(command === prefix + "new") {
            let args = message.content.split(" ").slice(1).join(" ");
                if(!message.channel.guild) return;
                if(coolDown.has(message.author.id)) {
                    return message.channel.send("**:x: | You have to wait 24 hours to make a new ticket.**");
                }
                    if(!args) {
                        return message.channel.send("**:x: | Send invites number you have with the command.**");
                    }
                        if(isNaN(args)) {
                            return message.channel.send("**:x: | Invites must be numbers.**");
                        }
                            if(!message.guild.roles.find(a => a.name === "Support Team")) {
                                return message.channel.send("**Please create role with name `Support Team`.**");
                            }
                                    message.guild.createChannel(`${message.author.username}-ticket`,"text").then((m) => {
                                        m.overwritePermissions(message.guild.id, {
                                            READ_MESSAGES: false
                                        }).then(() => {
                                            m.overwritePermissions(message.author.id, {
                                                READ_MESSAGES: true
                                            })
                                        })
                                    
                                                let r = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username, message.author.displayAvatarURL)
                                                    .setTitle("\n. AttacK Invite Reward System .\n\n")
                                                    .addField("Creator:", message.author.tag)
                                                    .addField("Created In:", message.channel)
                                                    .addField("Invites Count:", args)
                                                    .setColor("RED");

                                                    m.sendEmbed(r).then((w) => {
                                                        w.react("💸");
                                                        coolDown.add(message.author.id);
                                                        message.channel.send(`**:white_check_mark: | Your invites reward request has been created! ${m}**`).then(er => {
                                                            er.delete(5000);
                                                        });
                                                    });


                                                        setTimeout(() => {
                                                            coolDown.remove(message.author.id);
                                                        }, 86400000);
                                                    })

            
        }
});



client.on("message", message => {
    if(message.content.startsWith(prefix + "close")) {
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return;
            if(!message.channel.name.includes("ticket")) return;
                message.channel.delete();
    }
});







client.on("message", message =>{
    if(message.content.startsWith(prefix + "bc")) {
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return;
        var args = message.content.split(' ').slice(1).join(' ');
                        if(!args) return;
                message.guild.members.forEach(member => {
					member.send(args.replace(`[user]`, member)).catch();
					if(message.attachments.first()){
						member.sendFile(message.attachments.first().url).catch();
					}
				})
				message.channel.send(`**:timer: | Sending for ${message.guild.memberCount} members...**`).then(msg => msg.delete(5000));
    }
});


client.login(process.env.BOT_TOKEN);
