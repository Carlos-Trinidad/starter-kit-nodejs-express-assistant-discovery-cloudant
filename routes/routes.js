const express = require('express');
const router = express.Router();
const main = require('../controllers/main');

router.post('/assistant/message', main.watsonAssistantSendMessage);
router.post('/discovery/query', main.watsonDiscoveryQuery);

module.exports = router;