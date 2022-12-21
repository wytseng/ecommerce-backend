const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags, including its associated Product data
  try {
    const tags = await Tag.findAll({ include: Product });
    return res.json(tags)
  } catch(err) {
    res.status(500).json(err);
  } 
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`, including its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, { include: Product });
    return res.json(tag);
  } catch(err) {
    res.status(400).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    return res.json(newTag);
  } catch(err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body, { where: { id: req.params.id }});
    return res.json(updateTag);
  } catch(err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({ where: { id: req.params.id}});
    return res.json(deleteTag);
  } catch(err) {
    res.status(400).json(err);
  }
});

module.exports = router;
