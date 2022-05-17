module.exports = {
    name: "ping",
    category: "INFO",
    description: "Returns latency and API ping",
  usage: "<Your Prefix>ping",
    run: async (dortrox, message) => {
      message.delete();
       message.channel.send(`🏓 Pong - ${dortrox.ws.ping}ms`)
    }
}