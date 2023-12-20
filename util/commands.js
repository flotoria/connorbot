require('dotenv').config()
const { REST, Routes } = require('discord.js');


// Function to register all commands to the Discord API
const registerCommands = () => {
    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

    const commands = [
        {
            name: 'osu',
            description: 'View stats regarding an osu! profile',
            options: [
                {
                    name: 'profile',
                    description: 'the id or name of the osu! profile',
                    type: 3,
                    required: true
                }
            ]
        },
    ];

    (async () => {
        try {
            await rest.put(
                Routes.applicationCommands(process.env.CLIENT_ID),
                { body: commands },
            );
        } catch (error) {
            console.error(error);
        }
    })();

    console.log('Successfully registered application commands.')
}

module.exports = registerCommands
