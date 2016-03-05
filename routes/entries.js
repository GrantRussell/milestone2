var express = require('express');
var router = express.Router();

var entries = [
  {slug:"TIL 03/02/2016", body: "Raccoons, while looking adorable, make horrible pets.", created_at: "03/02/2016"},
  {slug:"TIL 03/04/2016", body: "Dogs love the taste of limes, even though they find them quite sour", created_at: "03/04/2016"}
];

/* GET entris listing. */
router.get('/', function(req, res, next) {
  res.render('entries/index', { title: 'TIL', entries: entries });
});

/* /entries/new */
router.get('/new', function(req, res, next) {
  res.render('entries/new', {title: "Create new entry"});
});

/* /entries/new */
router.post('/create', function(req, res, next) {
  console.log(req.body);
  entries.push(req.body);
  console.log(entries);
  res.render('entries/index', { title: 'TIL', entries: entries });
});

router.get('/update/:id', function(req, res, next) {
  res.render('entries/update',
  {
    title: 'Update an entry',
    id: req.params.id,
    entry: entries[req.params.id]
  });
});

router.post('/update/:id', function(req, res, next) {
  // entries.push(req.body);
  entries[req.params.id] = req.body;
  res.render('entries/index',
  {
    title: 'Update an entry',
    entries: entries
  });
});

/* GET entris listing. */
router.get('/', function(req, res, next) {
  res.render('entries/index_delete', { title: 'TIL', entries: entries });
});



/* /entries/0 */
router.get('/:id', function(req, res, next) {
  res.render('entries/entry', {title: "A TIL Entry", entry: entries[req.params.id]});
});



module.exports = router;
