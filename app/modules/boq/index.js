import Utils from "../../utils";
import {
    apiSuccessMessage,
    apiFailureMessage,
    httpConstants,
} from "../../common/constants";
import BLManager from "./manager";

export default class Index {

    async createBoq(req, res) {
        const [error, createBoqResponse] = await Utils.parseResponse(
            new BLManager().createBoq(req.body)
        );
        if (error || !createBoqResponse) {
            return Utils.handleError(error, req, res);
        }
        if (
            createBoqResponse.code &&
            createBoqResponse.code !== 200
        ) {
            return Utils.response(
                res,
                {},
                createBoqResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            createBoqResponse,
            apiSuccessMessage.UPDATED_PROFESSIONAL,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async updateBoq(req, res) {
        const [error, updateBoqResponse] = await Utils.parseResponse(
            new BLManager().updateBoq(req.body)
        );
        if (error || !updateBoqResponse) {
            return Utils.handleError(error, req, res);
        }
        if (
            updateBoqResponse.code &&
            updateBoqResponse.code !== 200
        ) {
            return Utils.response(
                res,
                {},
                updateBoqResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            updateBoqResponse,
            apiSuccessMessage.UPDATED_PROFESSIONAL,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async updateBoqSpace(req, res) {
        const [error, updateBoqSpaceResponse] = await Utils.parseResponse(
            new BLManager().updateBoqSpace(req.body)
        );
        if (error || !updateBoqSpaceResponse) {
            return Utils.handleError(error, req, res);
        }
        if (
            updateBoqSpaceResponse.code &&
            updateBoqSpaceResponse.code !== 200
        ) {
            return Utils.response(
                res,
                {},
                updateBoqSpaceResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            updateBoqSpaceResponse,
            apiSuccessMessage.UPDATED_PROFESSIONAL,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async deleteBoqTower(req, res) {
        const [error, deleteBoqTowerResponse] = await Utils.parseResponse(
            new BLManager().deleteBoqTower(req.body)
        );
        if (error || !deleteBoqTowerResponse) {
            return Utils.handleError(error, req, res);
        }
        if (
            deleteBoqTowerResponse.code &&
            deleteBoqTowerResponse.code !== 200
        ) {
            return Utils.response(
                res,
                {},
                deleteBoqTowerResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            deleteBoqTowerResponse,
            apiSuccessMessage.UPDATED_PROFESSIONAL,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async deleteBoqSpace(req, res) {
        const [error, deleteBoqSpaceResponse] = await Utils.parseResponse(
            new BLManager().deleteBoqSpace(req.body)
        );
        if (error || !deleteBoqSpaceResponse) {
            return Utils.handleError(error, req, res);
        }
        if (
            deleteBoqSpaceResponse.code &&
            deleteBoqSpaceResponse.code !== 200
        ) {
            return Utils.response(
                res,
                {},
                deleteBoqSpaceResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            deleteBoqSpaceResponse,
            apiSuccessMessage.UPDATED_PROFESSIONAL,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async updateBoqCategories(req, res) {
        const [error, updateBoqCategoriesResponse] = await Utils.parseResponse(
            new BLManager().updateBoqCategories(req.body)
        );
        if (error || !updateBoqCategoriesResponse) {
            return Utils.handleError(error, req, res);
        }
        if (
            updateBoqCategoriesResponse.code &&
            updateBoqCategoriesResponse.code !== 200
        ) {
            return Utils.response(
                res,
                {},
                updateBoqCategoriesResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            updateBoqCategoriesResponse,
            apiSuccessMessage.UPDATED_PROFESSIONAL,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async updateBoqSkuInfo(req, res) {
        const [error, updateBoqSkuInfoResponse] = await Utils.parseResponse(
            new BLManager().updateBoqSkuInfo(req.body)
        );
        if (error || !updateBoqSkuInfoResponse) {
            return Utils.handleError(error, req, res);
        }
        if (
            updateBoqSkuInfoResponse.code &&
            updateBoqSkuInfoResponse.code !== 200
        ) {
            return Utils.response(
                res,
                {},
                updateBoqSkuInfoResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            updateBoqSkuInfoResponse,
            apiSuccessMessage.UPDATED_PROFESSIONAL,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async uploadMainLayout(req, res) {
        const [error, uploadMainLayoutResponse] = await Utils.parseResponse(
            new BLManager().uploadMainLayout(req.body)
        );
        if (error || !uploadMainLayoutResponse) {
            return Utils.handleError(error, req, res);
        }
        if (
            uploadMainLayoutResponse.code &&
            uploadMainLayoutResponse.code !== 200
        ) {
            return Utils.response(
                res,
                {},
                uploadMainLayoutResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            uploadMainLayoutResponse,
            apiSuccessMessage.UPDATED_PROFESSIONAL,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async deleteMainLayout(req, res) {
        const [error, deleteMainLayoutResponse] = await Utils.parseResponse(
            new BLManager().deleteMainLayout(req.body)
        );
        if (error || !deleteMainLayoutResponse) {
            return Utils.handleError(error, req, res);
        }
        if (
            deleteMainLayoutResponse.code &&
            deleteMainLayoutResponse.code !== 200
        ) {
            return Utils.response(
                res,
                {},
                deleteMainLayoutResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            deleteMainLayoutResponse,
            apiSuccessMessage.UPDATED_PROFESSIONAL,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async uploadDetailedLayout(req, res) {
        const [error, uploadDetailedLayoutResponse] = await Utils.parseResponse(
            new BLManager().uploadDetailedLayout(req.body)
        );
        if (error || !uploadDetailedLayoutResponse) {
            return Utils.handleError(error, req, res);
        }
        if (
            uploadDetailedLayoutResponse.code &&
            uploadDetailedLayoutResponse.code !== 200
        ) {
            return Utils.response(
                res,
                {},
                uploadDetailedLayoutResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            uploadDetailedLayoutResponse,
            apiSuccessMessage.UPDATED_PROFESSIONAL,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async deleteDetailedLayout(req, res) {
        const [error, deleteDetailedLayoutResponse] = await Utils.parseResponse(
            new BLManager().deleteDetailedLayout(req.body)
        );
        if (error || !deleteDetailedLayoutResponse) {
            return Utils.handleError(error, req, res);
        }
        if (
            deleteDetailedLayoutResponse.code &&
            deleteDetailedLayoutResponse.code !== 200
        ) {
            return Utils.response(
                res,
                {},
                deleteDetailedLayoutResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            deleteDetailedLayoutResponse,
            apiSuccessMessage.UPDATED_PROFESSIONAL,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async getBoq(req, res) {
        const [error, getBoqResponse] = await Utils.parseResponse(
            new BLManager().getBoq(req.params)
        );
        if (error || !getBoqResponse) {
            return Utils.handleError(error, req, res);
        }
        if (getBoqResponse.code && getBoqResponse.code !== 200) {
            return Utils.response(
                res,
                {},
                getBoqResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            getBoqResponse,
            apiSuccessMessage.FETCH_SUCCESS,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async updateWorkCategories(req, res) {
        const [error, updateWorkCategoriesResponse] = await Utils.parseResponse(
            new BLManager().updateWorkCategories(req.body)
        );
        if (error || !updateWorkCategoriesResponse) {
            return Utils.handleError(error, req, res);
        }
        if (
            updateWorkCategoriesResponse.code &&
            updateWorkCategoriesResponse.code !== 200
        ) {
            return Utils.response(
                res,
                {},
                updateWorkCategoriesResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            updateWorkCategoriesResponse,
            apiSuccessMessage.UPDATED_PROFESSIONAL,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async updateWorkSku(req, res) {
        const [error, updateWorkSkuResponse] = await Utils.parseResponse(
            new BLManager().updateWorkSku(req.body)
        );
        if (error || !updateWorkSkuResponse) {
            return Utils.handleError(error, req, res);
        }
        if (
            updateWorkSkuResponse.code &&
            updateWorkSkuResponse.code !== 200
        ) {
            return Utils.response(
                res,
                {},
                updateWorkSkuResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            updateWorkSkuResponse,
            apiSuccessMessage.UPDATED_PROFESSIONAL,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }

    async getFiltered(req, res) {
        const [error, getFilteredResponse] = await Utils.parseResponse(
            new BLManager().getFiltered(req.body)
        );
        if (error || !getFilteredResponse) {
            return Utils.handleError(error, req, res);
        }
        if (getFilteredResponse.code && getFilteredResponse.code !== 200) {
            return Utils.response(
                res,
                {},
                getFilteredResponse.data,
                httpConstants.RESPONSE_STATUS.FAILURE,
                httpConstants.RESPONSE_CODES.FORBIDDEN
            );
        }
        return Utils.response(
            res,
            getFilteredResponse,
            apiSuccessMessage.FETCH_SUCCESS,
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }
}
