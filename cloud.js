require('dotenv').config();

const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');


cloudinary.config({
    cloud_name:"dnipze5fl",
    api_key:"334939887942335",
    api_secret:"HaFlrSCqqyplhCFUVEKO9ufou-c",
});



const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'wanderlust_DEV',
        allowed_formats: ['jpeg', 'png', 'jpg'],
    },
});



module.exports = { cloudinary, storage };
