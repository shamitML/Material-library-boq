import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fname: { type: String, default: "" },
    lname: { type: String, default: "" },
    email: { type: String, default: "", lowercase: true },
    secondarEmail: { type: String, default: "", lowercase: true },
    mobile: { type: String, default: "" },
    secondaryMobile: { type: String, default: "" },
    role: { type: Array },
    permission: { type: String, default: "Admin" },
    password: { type: String, default: "" },
    verfied: { type: String, default: "Unverified" },
    status: { type: Number, default: 0 },
    createdBy: { type: String, default: "" },
    updatedBy: { type: String, default: "" },
    wallet: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
    isLogin: { type: Boolean, default: false },
  },
  { timestamps: true }
);
userSchema.method({
  saveData: async function () {
    return this.save();
  },
});
userSchema.static({
  findData: function (findObj) {
    return this.find(findObj);
  },
  findOneData: function (findObj) {
    return this.findOne(findObj);
  },
  findOneAndUpdateData: function (findObj, updateObj) {
    return this.findOneAndUpdate(findObj, updateObj, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
  },
  findOneDataAndDelete: function (findObj) {
    return this.findOneAndDelete(findObj);
  },

  findAndUpdate: function (findObj, updateObj) {
    return this.update(findObj, updateObj);
  },

  findDataWithAggregate: function (findObj) {
    return this.aggregate(findObj);
  },
});
module.exports = mongoose.model("users", userSchema);
