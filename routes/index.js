import { stringConstants } from "../app/common/constants";
import * as ValidationManager from "../middleware/validation";
import BoqCollection from "../app/modules/boq";

module.exports = (app) => {
  app.get("/", (req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));
  app.post(
    "/v0/boq/create-boq",
    new BoqCollection().createBoq
  );
  app.post(
    "/v0/boq/update-boq",
    new BoqCollection().updateBoq
  );
  app.post(
    "/v0/boq/update-boq-space",
    new BoqCollection().updateBoqSpace
  );
  app.delete(
    "/v0/boq/delete-boq-tower",
    new BoqCollection().deleteBoqTower
  );
  app.delete(
    "/v0/boq/delete-boq-space",
    new BoqCollection().deleteBoqSpace
  );
  app.post(
    "/v0/boq/update-boq-categories",
    new BoqCollection().updateBoqCategories
  );
  app.post(
    "/v0/boq/update-boq-sku",
    new BoqCollection().updateBoqSkuInfo
  );
  app.post(
    "/v0/boq/upload-main-layout",
    new BoqCollection().uploadMainLayout
  );
  app.delete(
    "/v0/boq/delete-main-layout",
    new BoqCollection().deleteMainLayout
  );
  app.post(
    "/v0/boq/upload-detailed-layout",
    new BoqCollection().uploadDetailedLayout
  );
  app.delete(
    "/v0/boq/delete-detailed-layout",
    new BoqCollection().deleteDetailedLayout
  );
  app.get(
    "/v0/boq/get-boq/:_id",
    new BoqCollection().getBoq
  );

  app.post(
    "/v0/boq/update-work-categories",
    new BoqCollection().updateWorkCategories
  );
  app.post(
    "/v0/boq/update-work-sku",
    new BoqCollection().updateWorkSku
  );
  app.get(
    "/v0/boq/filter",
    new BoqCollection().getFiltered
  );
};
