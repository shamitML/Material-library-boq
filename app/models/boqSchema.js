import mongoose from "mongoose";
import users from "../models/userSchema";
import products from "../models/productSchema";

const boqSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, unique: true, ref: "users" },
        name: { type: String, default: "" },
        boqNo: { type: Number, default: 0 },
        projectStage: { type: String, default: "" },
        natureOfWork: { type: String, default: "" },
        projectName: { type: String, default: "" },
        projectAddress: { type: String, default: "" },
        projectLocation: { type: String, default: "" },
        projectPincode: { type: String, default: "" },
        projectType1: { type: String, default: "" },
        projectType2: { type: String, default: "" },
        builtUpArea: { type: String, default: "" },
        plotArea: { type: String, default: "" },
        clientName: { type: String, default: "" },
        clientAddress: { type: String, default: "" },
        clientContactNo: { type: String, default: "" },
        clientEmail: { type: String, default: "" },
        architectName: { type: String, default: "" },
        architectAddress: { type: String, default: "" },
        architectContactNo: { type: String, default: "" },
        architectEmailId: { type: String, default: "" },
        boqType: { type: String, default: "" },
        boqStyle: [{
            location: { type: String, default: "" },
            spaceInfo: [{
                spaceName: { type: String, default: "" },
                subSpaces: [{
                    subSpaceName: { type: String, default: "" },
                    subSpaceNo: { type: Number, default: 0 },
                    categories: [
                        {
                            categoryName: { type: String, default: "" },
                            subcategory: [
                                {
                                    subCategoryName: { type: String, default: "" },
                                    subSubCategory: [
                                        {
                                            subSubCategoryName: { type: String, default: "" },
                                            quantity: { type: String, default: "" },
                                            boqMatCode: { type: String, default: "" },
                                            skuInfo: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                }],
            }]
        }],
        categories: [
            {
                categoryName: { type: String, default: "" },
                subcategory: [
                    {
                        subCategoryName: { type: String, default: "" },
                        subSubCategory: [
                            {
                                subSubCategoryName: { type: String, default: "" },
                                quantity: { type: String, default: "" },
                                boqMatCode: { type: String, default: "" },
                                skuInfo: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
                            }
                        ]
                    }
                ]
            }
        ],
        mainLayouts: [
            { type: String, default: "" }
        ],
        detailedLayouts: [
            { type: String, default: "" },
        ],
        saveToDraft: { type: Boolean, default: false }
    },
    { timestamps: true }
);

boqSchema.method({
    saveData: async function () {
        return this.save();
    },
});
boqSchema.static({
    findData: function (findObj) {
        return this.find(findObj).populate('userId boqStyle.spaceInfo.subSpaces.categories.subcategory.subSubCategory.skuInfo');
    },
    findOneData: function (findObj) {
        return this.findOne(findObj).populate('userId boqStyle.spaceInfo.subSpaces.categories.subcategory.subSubCategory.skuInfo');
    },
    findOneAndAddSpace: function (findObj, updateObj) {
        return this.findOneAndUpdate(
            {
                userId: findObj.userId,
                //"boqStyle._id": findObj.bId
            },
            {
                $push: { boqStyle: updateObj }
                //$set: { "boqStyle.$.location": updateObj.location, "boqStyle.$.spaceInfo": updateObj.spaceInfo }
            },
            { upsert: true, new: true }
        )
    },
    findOneAndUpdateSpace: function (findObj, updateObj) {
        return this.findOneAndUpdate(
            {
                userId: findObj.userId,
                "boqStyle._id": findObj.bId
            },
            {
                $set: { "boqStyle.$.location": updateObj.location, "boqStyle.$.spaceInfo": updateObj.spaceInfo }
            },
            { new: true }
        )
    },
    findOneAndDeleteSpace: function (findObj) {
        return this.findOneAndUpdate(
            { userId: findObj.userId },
            {
                $pull: { boqStyle: { _id: { $in: findObj.bId } } }
            },
            { new: true }
        )
    },
    findOneAndUpdateCategories: async function (findObj, updateObj) {
        let user = await this.findOne({ userId: findObj.userId });
        let tower = user.boqStyle.find(el => el.id == findObj.bId);
        let space = tower.spaceInfo.find(el => el.id == findObj.sId);
        let subSpace = space.subSpaces.find(el => el.subSpaceNo == findObj.subSpace);

        subSpace.categories = updateObj.categories;
        user.save();
        return user;
    },
    findOneAndDeleteCategories: async function (findObj) {
        let user = await this.findOne({ userId: findObj.userId });
        let tower = user.boqStyle.find(el => el.id == findObj.bId);
        let space = tower.spaceInfo.find(el => el.id == findObj.sId);
        let subSpace = space.subSpaces.find(el => el.subSpaceNo == findObj.subSpace);

        let index = subSpace.categories.findIndex(el => el.id == findObj.cId);
        subSpace.categories.splice(index, 1);
        user.save();
        return user;
    },
    findOneAndUpdateSku: async function (findObj, updateObj) {
        let user = await this.findOne({ userId: findObj.userId });
        let tower = user.boqStyle.find(el => el.id == findObj.bId);
        let space = tower.spaceInfo.find(el => el.id == findObj.sId);
        let subSpace = space.subSpaces.find(el => el.subSpaceNo == findObj.subSpace);
        let category = subSpace.categories.find(el => el.id == findObj.cId);
        let subCategory = category.subcategory.find(el => el.id == findObj.scId);
        let subsubCategory = subCategory.subSubCategory.find(el => el.id == findObj.sscId);
        subsubCategory.skuInfo = updateObj.skuId;
        subsubCategory.quantity = updateObj.quantity;
        console.log(subsubCategory);

        user.save();
        return user;
    },
    findOneAndUpdateData: function (findObj, updateObj) {
        return this.findOneAndUpdate(findObj, updateObj, {
            upsert: true,
            new: true
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

    findOneAndUploadMainLayout: function (findObj, updateObj) {
        return this.findOneAndUpdate(
            findObj,
            {
                $push: { mainLayouts: updateObj.image }
            },
            { new: true }
        )
    },
    findOneAndDeleteMainLayout: function (findObj, updateObj) {
        return this.findOneAndUpdate(
            findObj,
            {
                $pull: { mainLayouts: updateObj.image }
            },
            { new: true }
        )
    },
    findOneAndUploadDetailedLayout: function (findObj, updateObj) {
        return this.findOneAndUpdate(
            findObj,
            {
                $push: { detailedLayouts: updateObj.image }
            },
            { new: true }
        )
    },
    findOneAndDeleteDetailedLayout: function (findObj, updateObj) {
        return this.findOneAndUpdate(
            findObj,
            {
                $pull: { detailedLayouts: updateObj.image }
            },
            { new: true }
        )
    },
    findOneAndAddWorkCat: function (findObj, updateObj) {
        return this.findOneAndUpdate(
            findObj,
            {
                $push: { categories: updateObj }
            },
            { new: true }
        )
    },
    findOneAndUpdateWorkCat: function (findObj, updateObj) {
        return this.findOneAndUpdate(
            findObj,
            {
                $set: { "categories.$.categoryName": updateObj.categoryName, "categories.$.subcategory": updateObj.subcategory }
            },
            { new: true }
        )
    },
    findOneAndDeleteWorkCat: function (findObj) {
        return this.findOneAndUpdate(
            { userId: findObj.userId },
            {
                $pull: { categories: { _id: { $in: findObj.cId } } }
            },
            { new: true }
        )
    },
    findOneAndUpdateWorkSku: async function (findObj, updateObj) {
        let user = await this.findOne({ userId: findObj.userId });
        console.log(user.categories);
        let category = user.categories.find(el => el.id == findObj.cId);
        let subCategory = category.subcategory.find(el => el.id == findObj.scId);
        let subSubCategory = subCategory.subSubCategory.find(el => el.id == findObj.sscId);
        subSubCategory.skuInfo = updateObj.skuId;
        subSubCategory.quantity = updateObj.quantity;

        user.save();
        return user;
    },
    findFilteredElements: function (findObj) {
        return this.find({
            $and: [
                { userId: findObj.userId },
                {
                    $or: [
                        { "categories.categoryName": { $regex: findObj.input, $options: "i" } },
                        { "categories.subcategory.subCategoryName": { $regex: findObj.input, $options: "i" } },
                        { "boqStyle.location": { $regex: findObj.input, $options: "i" } },
                        { "boqStyle.spaceInfo.spaceName": { $regex: findObj.input, $options: "i" } },
                        { "boqStyle.spaceInfo.subSpaces.subSpaceName": { $regex: findObj.input, $options: "i" } },
                        { "boqStyle.spaceInfo.subSpaces.categories.categoryName": { $regex: findObj.input, $options: "i" } },
                        { "boqStyle.spaceInfo.subSpaces.categories.subcategory.subCategoryName": { $regex: findObj.input, $options: "i" } },
                        { "boqStyle.spaceInfo.subSpaces.categories.subcategory.subSubCategory.subSubCategoryName": { $regex: findObj.input, $options: "i" } },
                    ]
                }
            ]
        })
    }
});

categories: [
    {
        categoryName: { type: String, default: "" },
        subcategory: [
            {
                subCategoryName: { type: String, default: "" },
                subSubCategory: [
                    {
                        subSubCategoryName: { type: String, default: "" },
                        quantity: { type: String, default: "" },
                        boqMatCode: { type: String, default: "" },
                        skuInfo: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
                    }
                ]
            }
        ]
    }
],

    module.exports = mongoose.model("boqSchema", boqSchema);