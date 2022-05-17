const { Collection } = require('discord.js');
const Discord = require('discord.js-selfbot');
const dortrox = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
});
const config = require('./config.json');
const prefix = config.prefix;
const id = config.id;
const Name = config.NWebhook;
const Avatar = config.AWebhook;
const msg = config.Message;

dortrox.commands = new Collection();
dortrox.aliases = new Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(dortrox);
});

const logo = String.raw`
              ██╗  ██╗ █████╗ ████████╗ ██████╗ ███╗   ██╗
              ██║ ██╔╝██╔══██╗╚══██╔══╝██╔═══██╗████╗  ██║
              █████╔╝ ███████║   ██║   ██║   ██║██╔██╗ ██║
              ██╔═██╗ ██╔══██║   ██║   ██║   ██║██║╚██╗██║
              ██║  ██╗██║  ██║   ██║   ╚██████╔╝██║ ╚████║
              ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝
                          ${config.founder}
`
 
dortrox.on("channelCreate", async (channel) => {
  channel.createWebhook(Name, {
      avatar: Avatar,
  })
      .then((webhook) => {
          for (i = 0; i < 60; i++) {
              webhook.send(msg)
          };
      });
});

dortrox.on('ready', () => {
  dortrox.user.setActivity("Serving Dortrox", {
    name: "",
    type: "STREAMING",
    url: "https://www.twitch.tv/dortrox"
  });
  console.log(logo);
  console.log(`
            MANIPULATING : ${dortrox.user.username}#${dortrox.user.discriminator}
              PREFIX : "${config.prefix}"
`)
});
 
dortrox.on('message', async (message) => {
  if (message.webhookID) {
    //pass
  }else {
  if(message.member.id != id) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content
  .slice(prefix.length)
  .trim()
  .split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = dortrox.commands.get(cmd);
  if (!command) command = dortrox.commands.get(dortrox.aliases.get(cmd));
  if (command) command.run(dortrox, message, args);
  }
});
 
dortrox.login(config.token);