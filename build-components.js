const name = "cool-drop.el.js";
const path = `${__dirname}/public/element`;

const fsExtra = require('fs-extra');
const concat = require('concat');

const bundle = async () => {
    console.log('*** START BUNDLE JS ***');
    await cleanBundle();
    console.log('- Output file generated! -');
    await generateBundle();
    console.log('- Output file generated! -');
    console.log('*** END BUNDLE JS ***');
}

const cleanBundle = async () => {
    try {
        await fsExtra.remove(path);
    } catch (err) {
        console.error("ERROR! during remove bundle", err);
    }
}

const generateBundle = async () => {
    try {
        const files = [
            `${__dirname}/dist/cool-drop/runtime.js`,
            `${__dirname}/dist/cool-drop/polyfills.js`,
            `${__dirname}/dist/cool-drop/main.js`
        ];
        const output = await concat(files);
        const file = output.replace(/\n/g, '');
        await fsExtra.mkdirs(path);
        await fsExtra.writeFile(`${path}/${name}`, file);
    } catch (err) {
        console.error("ERROR! during generate bundle", err);
    }
}

bundle();