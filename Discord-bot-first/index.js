const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg =>{
    try{
        if(msg.content === '!ping') msg.channel.send('pong~!');
        if(msg.content === '!avatar') msg.channel.send(msg.author.displayAvatarURL());
        if(msg.content === '!info') msg.channel.send(msg.guild.id());
    }catch(e){
        console.log(e);
    }
})

client.login('OTczNzUxNDI3MDQwMTgyMzAy.Gv2CSu.MrP_SFeUNUhYudrWPlV9xxl0HX6ef0NzVLDFbM');