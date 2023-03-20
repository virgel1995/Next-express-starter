import multer from 'multer';

const storageEngine = multer.diskStorage({
  destination: path.join(__dirname, 'uploads'),
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const types = ['audo/mp4a-latm', 'audio/mpeg', 'application/zip', 'image/png', 'image/jpeg', 'image/jpg'];


const fileFilter = (req, file, cb) => {
if(types.includes(file.mimetype.toLowerCase())) {
cb(null, true) 
} else { 
	cb(null, false)
	}

}

const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 10000000 },
  fileFilter: fileFilter 
});


//upload 1 file
export const upladImage = upload.single("image")
//upload up to 12 images
export const uploadImages = upload.array('images', 12);

// uploa audio / video file single file and single image twice
export const uploadMedia = upload.fields([
{ name: "media", maxCount: 1 },
{ name: "cover", maxCount: 1 },]