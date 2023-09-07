import multer from "multer"
import path from "path"

// INITIALIZE DISK STORAGE FOR STORING UPLOADED FILES
const initializeStorage = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.originalname.split(path.extname(file.originalname))}${path.extname(file.originalname)}`)
    }
  })

  // file.originalname.toLowerCase().split(path.extname(file.originalname))}-${Date.now()}${ path.extname(file.originalname)

  return storage

}

export default initializeStorage;