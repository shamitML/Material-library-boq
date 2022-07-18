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
        boqStyle: [
            {
                towerName: { type: String, default: "" },
                towerInfo: [
                    {
                        location: { type: String, default: "" },
                        space: [{
                            spaceName: { type: String, default: "" },
                            subSpace: [{
                                subSpaceName: { type: String, default: "" },
                                spaceNo: { type: String, default: "" },
                                categories: [
                                    {
                                        categoryName: { type: String, default: "" },
                                        subCategory: [
                                            {
                                                subCategoryName: { type: String, default: "" },
                                                subSubCategory: [
                                                    {
                                                        subSubCategoryName: { type: String, default: "" },
                                                        boqMatCode: { type: String, default: "" },
                                                        skuInfo: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
                                                        area: { type: String, default: "" },
                                                        materialUnitCost: { type: Number, default: 0 },
                                                        othersUnitCost: { type: Number, default: 0 },
                                                        totalUnitCost: { type: Number, default: 0 },
                                                        totalCost: { type: Number, default: 0 }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                            }],
                        }]
                    }
                ]
            },
        ],
        categories: [
            {
                categoryName: { type: String, default: "" },
                subCategory: [
                    {
                        subCategoryName: { type: String, default: "" },
                        subSubCategory: [
                            {
                                subSubCategoryName: { type: String, default: "" },
                                boqMatCode: { type: String, default: "" },
                                skuInfo: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
                                area: { type: String, default: "" },
                                materialUnitCost: { type: Number, default: 0 },
                                othersUnitCost: { type: Number, default: 0 },
                                totalUnitCost: { type: Number, default: 0 },
                                totalCost: { type: Number, default: 0 }
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
        return this.find(findObj).populate('userId boqStyle.towerInfo.space.subSpace.categories.subCategory.subSubCategory.skuInfo');
    },
    findOneData: function (findObj) {
        return this.findOne(findObj).populate('boqStyle.towerInfo.space.subSpace.categories.subCategory.subSubCategory.skuInfo categories.subCategory.subSubCategory.skuInfo'); //boqStyle.spaceInfo.subSpaces.categories.subcategory.subSubCategory.skuInfo
    },

    findOneAndUpdateSpace: async function (findObj, updateObj) {
        let doc = await this.findOne({ _id: findObj._id, userId: findObj.userId });

        let tower = doc.boqStyle.find((el => el.towerName == updateObj.towerName));
        if (!tower) {
            doc.boqStyle.push({ towerName: updateObj.towerName, towerInfo: updateObj.towerInfo });
            await doc.save();
            return doc;
        }

        let loc = tower.towerInfo.find(el => el._id == updateObj.locationId);
        if (!loc) {
            tower.towerInfo.push(updateObj.towerInfo);
            await doc.save();
            return doc;
        }

        loc.location = updateObj.towerInfo.location;
        loc.space = updateObj.towerInfo.space;

        await doc.save();
        return doc;
    },

    findOneAndDeleteTower: function (findObj) {
        return this.findOneAndUpdate(
            { userId: findObj.userId, _id: findObj._id },
            {
                $pull: { boqStyle: { _id: { $in: findObj.towerId } } }
            },
            { new: true }
        )
    },

    findOneAndDeleteSpace: async function (findObj) {

        let doc = await this.findOne({ userId: findObj.userId, _id: findObj._id });
        let tower = doc.boqStyle.find((el => el._id == findObj.towerId));
        let loc = tower.towerInfo.findIndex(el => el._id == findObj.locationId);

        tower.towerInfo.splice(loc, 1);
        await doc.save();
        return doc;
    },

    findOneAndUpdateCategories: async function (findObj, updateObj) {
        let user = await this.findOne(findObj);
        let tower = user.boqStyle.find(el => el._id == updateObj.towerId);
        let loc = tower.towerInfo.find(el => el._id == updateObj.locationId);
        let space = loc.space.find(el => el._id == updateObj.spaceId);
        let subSpace = space.subSpace.find(el => el._id == updateObj.subSpaceId);

        subSpace.categories = updateObj.categories;
        await user.save();
        return user;
    },

    findOneAndUpdateSku: async function (findObj, updateObj) {
        let user = await this.findOne(findObj);
        let tower = user.boqStyle.find(el => el._id == updateObj.towerId);
        let loc = tower.towerInfo.find(el => el._id == updateObj.locationId);
        let space = loc.space.find(el => el._id == updateObj.spaceId);
        let subSpace = space.subSpace.find(el => el._id == updateObj.subSpaceId);

        let category = subSpace.categories.find(el => el._id == updateObj.categoryId);
        let subCategory = category.subCategory.find(el => el._id == updateObj.subCategoryId);
        let subSubCategory = subCategory.subSubCategory.find(el => el._id == updateObj.subSubCategoryId);

        subSubCategory.skuInfo = updateObj.skuId;
        subSubCategory.area = updateObj.area;
        subSubCategory.materialUnitCost = updateObj.materialUnitCost;
        subSubCategory.othersUnitCost = updateObj.othersUnitCost;
        subSubCategory.totalUnitCost = updateObj.totalUnitCost;
        subSubCategory.totalCost = updateObj.totalCost;
        console.log(subSubCategory);

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

    findOneAndUpdateWorkCat: function (findObj, updateObj) {
        return this.findOneAndUpdate(
            findObj,
            {
                categories: updateObj.categories
            },
            { new: true }
        )
    },

    findOneAndUpdateWorkSku: async function (findObj, updateObj) {
        let user = await this.findOne({ userId: findObj.userId });
        let category = user.categories.find(el => el._id == updateObj.categoryId);
        let subCategory = category.subCategory.find(el => el._id == updateObj.subCategoryId);
        let subSubCategory = subCategory.subSubCategory.find(el => el._id == updateObj.subSubCategoryId);

        subSubCategory.skuInfo = updateObj.skuId;
        subSubCategory.area = updateObj.area;
        subSubCategory.materialUnitCost = updateObj.materialUnitCost;
        subSubCategory.othersUnitCost = updateObj.othersUnitCost;
        subSubCategory.totalUnitCost = updateObj.totalUnitCost;
        subSubCategory.totalCost = updateObj.totalCost;
        console.log(subSubCategory);

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

module.exports = mongoose.model("boqSchema", boqSchema);