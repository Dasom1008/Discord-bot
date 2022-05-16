const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed  } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('파티모집')
		.setDescription('파티모집 폼을 엽니다.'),

	async execute(interaction) { 
        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
                .setCustomId('primary')
                .setLabel('Primary')
                .setStyle('PRIMARY')
            );
        const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org')
			.setDescription('Some description here');

            await interaction.reply({ content: '파티모집', ephemeral: true, embeds: [embed], components: [row] });
	},
};



// const row = new MessageActionRow()
// 			.addComponents(
// 				new MessageButton()
// 					.setCustomId('primary')
// 					.setLabel('Primary')
// 					.setStyle('PRIMARY'),
// 			);