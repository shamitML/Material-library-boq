import Utils from "../../utils";
import {
    apiFailureMessage,
    apiSuccessMessage,
    httpConstants,
} from "../../common/constants";
import BoqSchema from "../../models/boqSchema";
const awsUploadHelper = require("../../../helper/aws-upload");
const uploadFile = new awsUploadHelper()

export default class Manager {

    updateBoq = async (request) => {
        console.log(request);
        if (!request.findQuery || !request.updateQuery) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return await BoqSchema.findOneAndUpdateData(
            request.findQuery,
            request.updateQuery
        );
    };

    addBoqSpace = async (request) => {
        console.log(request);
        if (!request.findQuery || !request.updateQuery) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return await BoqSchema.findOneAndAddSpace(
            request.findQuery,
            request.updateQuery
        );
    };

    updateBoqSpace = async (request) => {
        console.log(request);
        if (!request.findQuery || !request.updateQuery) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return await BoqSchema.findOneAndUpdateSpace(
            request.findQuery,
            request.updateQuery
        );
    };

    deleteBoqSpace = async (request) => {
        console.log(request);
        if (!request) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return await BoqSchema.findOneAndDeleteSpace(request);
    };

    updateBoqCategories = async (request) => {
        console.log(request);
        if (!request.findQuery || !request.updateQuery) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return await BoqSchema.findOneAndUpdateCategories(
            request.findQuery,
            request.updateQuery
        );
    };

    deleteBoqCategories = async (request) => {
        console.log(request);
        if (!request) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return await BoqSchema.findOneAndDeleteCategories(request);
    };

    updateBoqSkuInfo = async (request) => {
        console.log(request);
        if (!request.findQuery || !request.updateQuery) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return await BoqSchema.findOneAndUpdateSku(
            request.findQuery,
            request.updateQuery
        );
    };

    getBoq = async (request) => {
        console.log(request);
        if (!request) {
            return Utils.error(
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }

        return await BoqSchema.findOneData(request).catch((err) => {
            throw err;
        });
    };

    uploadMainLayout = async (request) => {
        console.log(request);
        if (!request.findQuery || !request.updateQuery) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        let key = `assets/${request.updateQuery.role}/BOQ/layout-designs/main-layouts/`
        let url = await uploadFile.uploadImageThumb(request.updateQuery.image, key);
        if (url.success) {
            request.updateQuery.image = url.url;
            return await BoqSchema.findOneAndUploadMainLayout(
                request.findQuery,
                request.updateQuery
            );
        }
    };

    deleteMainLayout = async (request) => {
        console.log(request);
        if (!request.findQuery || !request.updateQuery) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        let url = await uploadFile.removeMedia(request.updateQuery.image);
        if (url.success) {
            return await BoqSchema.findOneAndDeleteMainLayout(
                request.findQuery,
                request.updateQuery
            );
        }
    };

    uploadDetailedLayout = async (request) => {
        console.log(request);
        if (!request.findQuery || !request.updateQuery) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        let key = `assets/${request.updateQuery.role}/BOQ/layout-designs/detailed-layouts/`
        let url = await uploadFile.uploadImageThumb(request.updateQuery.image, key);
        if (url.success) {
            request.updateQuery.image = url.url;
            return await BoqSchema.findOneAndUploadDetailedLayout(
                request.findQuery,
                request.updateQuery
            );
        }
    };

    deleteDetailedLayout = async (request) => {
        console.log(request);
        if (!request.findQuery || !request.updateQuery) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        let url = await uploadFile.removeMedia(request.updateQuery.image);
        if (url.success) {
            return await BoqSchema.findOneAndDeleteDetailedLayout(
                request.findQuery,
                request.updateQuery
            );
        }
        return;
    };

    addWorkCategories = async (request) => {
        console.log(request);
        if (!request.findQuery || !request.updateQuery) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return await BoqSchema.findOneAndAddWorkCat(
            request.findQuery,
            request.updateQuery
        );
    };

    updateWorkCategories = async (request) => {
        console.log(request);
        if (!request.findQuery || !request.updateQuery) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return await BoqSchema.findOneAndUpdateWorkCat(
            request.findQuery,
            request.updateQuery
        );
    };

    deleteWorkCategories = async (request) => {
        console.log(request);
        if (!request) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return await BoqSchema.findOneAndDeleteWorkCat(request);
    };

    updateWorkSku = async (request) => {
        console.log(request);
        if (!request.findQuery || !request.updateQuery) {
            return Utils.error(
                {},
                apiFailureMessage.INVALID_PARAMS,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return await BoqSchema.findOneAndUpdateWorkSku(
            request.findQuery,
            request.updateQuery
        );
    };
}
