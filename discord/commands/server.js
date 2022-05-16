const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('서버정보를 봅니다'),
	async execute(interaction) {
		await interaction.reply(`ServerName : ${interaction.guild.name}`);
	}
};