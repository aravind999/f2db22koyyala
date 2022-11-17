var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Boxing_controller = require('../controllers/Boxing');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// BOXING ROUTES ///
// POST request for creating a Boxing.
router.post('/Boxings', Boxing_controller.Boxing_create_post);
// DELETE request to delete Boxing.
router.delete('/Boxings/:id', Boxing_controller.Boxing_delete);
// PUT request to update Boxing.
router.put('/Boxings/:id', Boxing_controller.Boxing_update_put);
// GET request for one Boxing.
router.get('/Boxings/:id', Boxing_controller.Boxing_detail);
// GET request for list of all Boxing items.
router.get('/Boxings', Boxing_controller.Boxing_list);
module.exports = router;