const router = require('express').Router();
const { Category, Product } = require('../../models');
const { update } = require('../../models/Category');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories, including its associated products
  try {
    const category = await Category.findAll({ include: Product });
    return res.json(category);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value, including its associated products
  try {
    const category = await Category.findByPk(req.params.id, { include: Product });
    return res.json(category);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    return res.json({newCategory});
  } catch(err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, { where: { id: req.params.id }});

    return res.json({updateCategory});
  } catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({ where: { id: req.params.id }});
    return res.json({deleteCategory});
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
