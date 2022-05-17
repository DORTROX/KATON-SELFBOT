const axios = require("axios");
const config = require('../../config.json');
const uagent = config.uagent;
const token = config.token;
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

module.exports = {
  name: "cs",
  category: "RAID",
  description: "Spam No of user defined channel",
  usage: "<Your Prefix>cs <amt>",
  run: async (dortrox, message, args) => {
    message.delete();
    for (let i = 0; i < args[0]; i++){
    channelS(message.guild.id);
    }
  },
};
