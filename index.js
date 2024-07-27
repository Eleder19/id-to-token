const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function pause(ms) {
    rl.close();
    console.log(`Application will close in ${ms / 1000} seconds.`)
    setTimeout(() => {
        process.exit();
    }, ms);  
};
rl.question('Enter user id: \n', async (data) => {
    try {
        await new Promise((resolve, reject) => {
            let userId = data.toString().trim();
            let token = btoa(userId);
            if (!userId) {
                console.log('You have not specified a user id!');
                pause(5000);
                reject();
            } else {
                console.log(`First part of the user id's token: ${token}`);
                resolve();
            };
        });
        return pause(5000);
    } catch {
        return new Error;
    }
});