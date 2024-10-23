const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = upload.single('file'); // Change 'file' to the appropriate field name
