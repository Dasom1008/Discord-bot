const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

//const nickname = 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('테스트입력')
		.setDescription('새로운 입력 테스트 '),
	async execute(interaction,user) {
		await interaction.reply('Pong!');
	}
};