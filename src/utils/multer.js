const multer = require('multer')
const { ApiError } = require('./apiResponse')

const multerConfig = (fileType = 'image') => {

    const storage = multer.diskStorage({})
    const fileFilter = (req, file, next) => {

        if (file.mimetype.startsWith(fileType)) {

            return next(null, true)
        } else {
            console.log(file)
            return next(new ApiError(`Only ${fileType} allowed`, 400), false)
        }
    }

    return multer({
        limits: {
            fileSize: 20 * 1024 * 1024 // 20MB
        },
        fileFilter,
        storage
    });
}


module.exports = {
    multerConfig
}