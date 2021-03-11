.setTitle("Bot Informations")
.setDescription(`Bot Informations`)
.addField("Bot name", `bot.user.username`)
.addField("Bot developer", "<YOUR_DISCORD_NAME><YOUR_DISCORD_DISCRIMINATOR>")
.addField("Programming language", "Node JavaScript (Discord.JS V12)")
.addField("Server count", client.guilds.cache.size);
message.channel.send(embed)
