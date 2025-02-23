require('dotenv').config();
const { SlashCommandBuilder } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('remove')
        .setDescription('Removes from the leaderboard'),
    async execute(interaction) {
        await interaction.reply('Event has been removed')
    },
};
