import mongoose from "mongoose";
import { boolean, string } from "yup";

const productSchema = new mongoose.Schema(
  {
    userId: { type: String, default: "" },
    categories: {
      category: { type: String, default: "" },
      subCategory: { type: String, default: "" },
      superSubCategory: { type: String, default: "" },
    },
    productDetails: {
      productName: { type: String, default: "" },
      brandName: { type: String, default: "" },
      model: { type: String, default: "" },
      isFragile: { type: String, default: "No" },
      noOfItems: { type: Number, default: 0 },
      stockCount: { type: Number, default: 0 },
      stockCountType: { type: String, default: "" },
    },
    components: {
      noOfPieces: { type: Number, default: 0 },
      componentIncluded: [
        { type: String, default: "" },
      ],
      isAssemblyRequire: { type: String, default: "No" },
      assemblyInstruction: { type: String, default: "" },
      noOfBoxes: { type: Number, default: 0 },
    },
    properties: {
      countryOfOrigion: { type: String, default: "" },
      colour: { type: String, default: "" },
      material: { type: String, default: "" },
      texture: { type: String, default: "" },
      measurements: {
        dimensions: {
          measuringUnit: { type: String, default: "" },
          depth: { type: Number, default: 0 },
          width: { type: Number, default: 0 },
          height: { type: Number, default: 0 },
        },
      },
      productImages: [],
    },
    variations: {
      haveVariation: { type: String, default: "" },
      variationTypes:[
        { type: String, default: "" }
      ],
      colour: [
        {
          variationName: { type: String, default: "" },
          stockCount: { type: Number, default: 0 },
          standardPrice: { type: Number, default: 0 }
        }
      ],
      materialType:{
        variationName: { type: String, default: "" },
        stockCount: { type: Number, default: 0 },
        standardPrice: { type: Number, default: 0 }
      }
    },
    pricingAndOffer: {
      mrp: { type: Number, default: 0 },
      discount: { type: Number, default: 0 },
      priceAfterDiscount: { type: Number, default: 0 },
      hsn: { type: String, default: "" },
      moq1: {
        no: { type: Number, default: 0 },
        price: { type: Number, default: 0 },
      },
      moq2: {
        no: { type: Number, default: 0 },
        price: { type: Number, default: 0 },
      },
      shipingCharge: { type: Number, default: 0 },
      installationRequired: { type: String, default: "No" },
      installationPrice: { type: Number, default: 0 },
    },
    descriptionAndTags: {
      description: { type: String, default: "" },
      tags: [],
    },
    faq: {
      question: { type: String, default: "" },
      answer: { type: String, default: "" },
    },
    media: {
      document: [],
      productVideos: [],
      executionVideos: [],
      manufacturingVideos: [],
      view360: [],
      arVideos: [],
    },
    status: { type: Number, default: 0 },
    createdBy: { type: String, default: "" },
    updatedBy: { type: String, default: "" },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
productSchema.method({
  saveData: async function () {
    return this.save();
  },
});
productSchema.static({
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
module.exports = mongoose.model("products", productSchema);
