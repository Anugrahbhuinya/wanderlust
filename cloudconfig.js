const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_NAME_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});
console.log(process.env.CLOUD_NAME);
console.log(process.env.CLOUD_NAME_API_KEY);
console.log(process.env.CLOUD_API_SECRET);

console.log('ENV TEST:', process.env.TEST_VARIABLE);


module.exports = { cloudinary };
