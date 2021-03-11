let embed = new Discord.MessageEmbed()
.setTitle("Bot Ping")
.setColor("FF0000")
.setDescription(`Pong! **${client.ws.ping} ms**`);
message.channel.send(embed)
