import ProductSchema from "../app/models/productSchema";

export async function costCalculator(updateObj) {
    let productInfo = await ProductSchema.findOne({ _id: updateObj.skuId });

    updateObj.materialUnitCost = productInfo.pricingAndOffer.priceAfterDiscount;
    updateObj.totalUnitCost = updateObj.materialUnitCost;

    updateObj.totalCost = updateObj.totalUnitCost * parseInt(updateObj.area);

    return updateObj;
}