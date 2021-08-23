var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nosotros', { /* busca la plantilla nosotros hbs  */
    isNosotros:true,
    title : 'Nosotros'
  });
});

module.exports = router;
