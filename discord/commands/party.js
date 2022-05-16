const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed, DiscordAPIError  } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS','GUILD_MESSAGES']});


module.exports = {
	data: new SlashCommandBuilder()
		.setName('파티모집')
		.setDescription('파티모집 폼을 엽니다.'),

	async execute(interaction) { 

        const row = new MessageActionRow()
			.addComponents(
				new MessageButton().setCustomId('D1').setLabel('딜러지원').setStyle('SUCCESS'),
				new MessageButton().setCustomId('S1').setLabel('서폿지원').setStyle('PRIMARY')
            );

        const embed = new MessageEmbed()
			.setColor('#c79af4')
			.setTitle('📌 파티모집')
			.setAuthor({ name: 'Some name', iconURL: 'https://d2v80xjmx68n4w.cloudfront.net/gigs/rate/bBsXC1600649003.png'})
			.setDescription('모집내용을 적는다~~ \n ============================')
			.addFields(
				{ name : '⭐딜러', value: '-' , inline: true },
				{ name : '⭐서포터', value: '-' , inline: true }
			)
			.setTimestamp()
			.setFooter({text : '조랭이떡 파티모집', iconURL : 'https://d2v80xjmx68n4w.cloudfront.net/gigs/rate/bBsXC1600649003.png'});

		await interaction.reply({ content: '파티모집', ephemeral: true, embeds: [embed], components: [row] });
	},
};


//await interaction.reply({ content: '파티모집', ephemeral: true, embeds: [embed], components: [row] });
