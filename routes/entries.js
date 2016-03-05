var express = require('express');
var router = express.Router();

var entries = [
  {slug:"how to pass class", body: "Come to class and do your homework", created_at: "Some date"},
  {slug:"how to fail class", body: "Play video games all day", created_at "some date"}
];

/* GET entries listing. */
router.get('/', function(req, res, next){
  res.render('entries/index', { title: 'Blog', entries: entries });
});

/* /entries/new */
router.get('/new', function(req, res, next) {
  res.render('entries/new', {title: "Create new entry"});
});

/* /entriesnew */
router.post('/create', function(req, res, next){
  console.log(req.body);
  entries.push(req.body);
  console.log(entries);
  res.render('entries/index', {title: 'Blog', entries: entries });
});

router.get('/update/:id', function(req, res, next){
  res.render('entries/update',
  {
    title: 'Update an entry',
    id: req.params.id,
    entry: entries[req.params.id]
  });
});

router.post('/update/:id', function(req, res, next){
  //entries.push(req.body);
  entries[req.params.id] = req.body;
  res.render('entries/index',
  {
    title: 'Update an entry',
    entries: entries
  });
});

/*GET entries listing. */
router.get('/', function(req, res, next){
  res.render('entries/entry', {title: "a entry", entry: entries[req.params.id]})
});



/* /entries/0 */
router.get('/:id', function(req, res, next){
  res.render('entries/entry', {title: "a entry", entry: entries[req.params.id]});
});



module.exports = router;
