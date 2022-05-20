const { SlashCommandBuilder } = require('@discordjs/builders');
const { GuildMember } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({intents: ['GUILDS','GUILD_MESSAGES']});
const member = new Discord.Client({intents: ['GUILD_MEMBERS']});

//var nickName = guildMember.displayName;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('유저정보를 봅니다'),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		console.log("userName : " + user);
		await interaction.reply(`userINfo test중 \n Hi,${user}.`);
		//await interaction.followUp(`Hi, <@user id>.`);
	}
};
