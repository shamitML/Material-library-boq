const aws = require("aws-sdk");
const fs = require("fs");
const { resolve } = require("path");
// const mongoose = require("mongoose");
const config = require("../config")
// require("../models/projectModel");
// var PROJECT = mongoose.model("project");
aws.config.update({
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  accessKeyId: config.AWS_SECRET_ACCESS_ID,
  //   region: 'Asia Pacific(Mumbai)'
});

// created s3 instance
const s3 = new aws.S3();

module.exports = function () {
  this.uploadImage = async (base64, userId, key) => {
    return new Promise((resolve, reject) => {
      var imgData = base64;
      // condition starts here
      var base64data = imgData.split(",");
      // let type = extname(imgData);
      const type = imgData.split(";")[0].split("/")[1];

      let buf = Buffer.from(
        base64.replace(/^data:image\/\w+;base64,/, ""),
        "base64"
      );
      var params = {
        Bucket: "ml-users-data",
        Key: key + userId + "." + type,
        Body: buf,
        ContentEncoding: "base64",
        ContentType: `image/${type}`,
        ACL: "public-read"
      };
      s3.upload(params, function (err, data) {
        if (err) {
          // throw err;
          resolve({
            success: false,
          });
        } else {
          resolve({
            success: true,
            url: data.Location,
          });
        }
        console.log(`File uploaded successfully. ${data}`);
      });
    });
  };

  this.uploadImageThumb = async (base64, key) => {
    return new Promise((resolve, reject) => {
      var imgData = base64;
      // condition starts here
      var base64data = imgData.split(",");
      // let type = extname(imgData);
      const type = imgData.split(";")[0].split("/")[1];

      const buf = Buffer.from(
        base64.replace(/^data:image\/\w+;base64,/, ""),
        "base64"
      );
      var params = {
        Bucket: "ml-users-data",
        Key: key + Date.now() + "." + type,
        Body: buf,
        ContentEncoding: "base64",
        ContentType: `image/${type}`,
      };
      s3.upload(params, function (err, data) {
        if (err) {
          // throw err;
          resolve({
            success: false,
          });
        } else {
          resolve({
            success: true,
            url: data.Location,
          });
        }
        console.log(`File uploaded successfully. ${data}`);
      });
    });
  };

  this.removeMedia = async (mediaLink) => {
    return new Promise((resolve, reject) => {
      let splitUrl = mediaLink.split('/');
      let bucketName = splitUrl[2].split('.')[0];
      let key = "";
      for (let i = 3; i < splitUrl.length; i++) {
        key += splitUrl[i] + '/';
      }
      key = key.slice(0, -1);
      console.log(bucketName);
      console.log(key);
      var params = {
        Bucket: bucketName,
        Key: key
      };
      s3.deleteObject(params, function (err, data) {
        if (err) {
          resolve({ success: false })
          console.log(err);
        }
        else {
          resolve({ success: true })
          console.log(data)
        };
      })
    })
  }
};
