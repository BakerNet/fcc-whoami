'use strict';
const express = require('express');

var router = express.Router();

router.get('/api/whoami', function(req, res){
  let ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(',')[0];
  let lang = req.headers['accept-language'].split(',')[0];
  let os = req.headers['user-agent'].split('(')[1].split(')')[0];
  res.send({ "ipaddress": ip, "language": lang, "software": os });
});

module.exports = router;