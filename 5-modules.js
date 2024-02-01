// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const {dileep, pulluru} = require('./3-names');
const Sync = require('./2-utils');
require('./4-mind-grenade');
Sync(dileep);
Sync(pulluru);
Sync("John Snow")