const fs = require('node:fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	// new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),     // ping하면 pong하고 대답 
    // new SlashCommandBuilder().setName('야').setDescription('호! 라고 대답합니다.'),
    // new SlashCommandBuilder().setName('info').setDescription('채널의 멤버수를 확인합니다.')
]
	.map(command => command.toJSON());

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);