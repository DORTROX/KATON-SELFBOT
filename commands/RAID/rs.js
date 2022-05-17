const axios = require("axios");
const config = require('../../config.json');
const uagent = config.uagent;
const token = config.token;
const headers = {'User-Agent': uagent, 'Authorization': token }

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
  name: "rs",
  category: "RAID",
  description: "Spam No of user defined role",
  usage: "<Your Prefix>rs <amt>",
  run: async (dortrox, message, args) => {
    message.delete();
    for (let i = 0; i < args[0]; i++){
    roleS(message.guild.id);
    }
  },
};
