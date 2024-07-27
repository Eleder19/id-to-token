const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function prompt() {
    rl.question('Enter user id: \n', async (data) => {
        try {
                let userId = data.toString().trim();
                let token = btoa(userId);
                if (!userId || userId.length !== 18) {
                    console.log('You have not specified a valid user id!');
                    prompt();
                } else {
                    console.log(`First part of the user id's token: ${token}`);
                    prompt();
                };
        } catch {
            return new Error;
        };
    });
};

prompt();
