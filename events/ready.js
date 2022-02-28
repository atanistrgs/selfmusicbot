const utils = require('../utils');

module.exports = client => {

    client.user.setActivity("Made By Almighty Codez", {type: "WATCHING"});

    utils.log(`Logged in as ${client.user.tag} !`);

};