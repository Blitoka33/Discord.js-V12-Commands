let texttosay = args.slice(0).join(' ');
message.delete();
message.channel.send(texttosay);
