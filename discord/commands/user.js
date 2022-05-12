const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('유저정보를 봅니다'),
	async execute(interaction) {
		await interaction.reply(`yourName : ${interaction.user.tag} \nYonr Id : ${interaction.user.id}`);
        //
	},
};


//`client : ${interaction.user.client}`

// /n avatar : ${interaction.user.avatar}
// /n banner : ${interaction.user.banner}
// /n bot : ${interaction.user.bot}
// /n discriminator : ${interaction.user.discriminator}
// /n flags : ${interaction.user.flags}
// /n id : ${interaction.user.id}
// /n partial: ${interaction.user.partial}
// /n system: ${interaction.user.system}
// /n tag : ${interaction.user.tag}
// /n userName : ${interaction.user.username}