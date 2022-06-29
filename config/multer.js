import multer from "multer";

const csvFilter = (req, file,cb) => {
    if(file.mimetype.includes("csv")){
        cb(null, true);
    }else{
        cb("Please upload csv file.", false);
    }
};

const upload = multer({fileFilter: csvFilter});
module.exports = upload;