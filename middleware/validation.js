import Utils from "../app/utils";

import * as yup from "yup";

module.exports = {
  validateCart: async (req, res, next) => {
    const schema = yup.object().shape({
      userId: yup.string(),
      productId: yup.string(),
      quantity: yup.number(),
      unitPrice: yup.number(),
      totalAmount: yup.number(),
      orderGroup: yup.number(),
      addressline1: yup.string(),
      addressline2: yup.string(),
      city: yup.string(),
      state: yup.string(),
      pincode: yup.number(),
      name: yup.string(),
      contact: yup.string(),
      email: yup.string(),
      shippingAddress: yup.boolean(),
      billingAddress: yup.boolean(),
      both: yup.boolean(),
    });
      await validate(schema, req.body, res, next);
    },

  validateCatalog: async(data) => {
    const schema = yup.object().shape({
      userId: yup.string(),
      category: yup.string(),
      subCategory: yup.number(),
      superSubCategory: yup.number(),
      productName: yup.number(),
      brandName: yup.number(),
      model: yup.string(),
      stockCount: yup.string(),
      stockCountType: yup.number(),
      noOfPieces: yup.number(),
      componetIncluded: yup.string(),
      isAssemblyRequire: yup.string(),
      assemblyInstruction: yup.string(),
      noOfBoxes: yup.number(),
      countryOfOrigin: yup.string(),
      colour: yup.string(),
      material: yup.string(),
      texture: yup.string(),
      measuringUnit: yup.string(),
      depth: yup.string(),
      width: yup.string(),
      height: yup.string(),
      productImages: yup.array(),
      variationTypes: yup.array(),
      variationName: yup.string(),
      stockCount: yup.number(),
      standardPrice: yup.number(),
      materialType: yup.string(),
      variationName: yup.string(),
      mrp: yup.string(),
      discount: yup.number(),
      priceAfterDiscount: yup.number(),
      hsn: yup.string(),
      no: yup.number(),
      price: yup.number(),
      shipingCharge: yup.number(),
      installationRequired: yup.string(),
      installationPrice: yup.number(),
      description: yup.string(),
    });
    await validateProductInfo(schema, data);
  }
};
  const validate = async (schema, reqData, res, next) => {
    try {
      await schema.validate(reqData, { abortEarly: false });

      next();
    } catch (e) {
      const errors = e.inner.map(({ path, message, value }) => ({
        path,

        message,

        value,
      }));

      Utils.responseForValidation(res, errors);
    }
  };
  const validateProductInfo = async function(schema, data){
    try{
      await schema.validate(data, {abortEarly: false});
    }catch(e){
      const errors = e.inner.map(({ path, message, value }) => ({
        path,

        message,

        value,
      }));

      Utils.responseForValidation(res, errors);
    }
  }
