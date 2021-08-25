import Category from '../../../db/models/category/index.js'

export const list = async (req, res, next) => {
    try {
        const categories = await Category.findAll()
        res.send(categories)
    } catch (error) {
        console.log(error);
    }
}

export const single = async (req, res, next) => {
    try {

        const categories = await Category.findByPk(req.params.id)
        res.send(categories)
    } catch (error) {
        console.log(error);
    }
}

export const create = async (req, res, next) => {
    try {
        console.log(req.body);
        const categories = await Category.create(req.body)
        res.send(categories)
    } catch (error) {
        console.log(error);
    }
}

export const update = async (req, res, next) => {
    try {
        const categories = await Category.update(req.body, {
            where: {id: req.params.id},
            returning: true
        })
        res.send(categories([1][0]))
    } catch (error) {
        console.log(error);
    }
}

export const deleteCategory = async (req, res, next) => {
    try {
        const categories = await Product.destroy({
            where: {id: req.params.id},
        })
        res.send(categories([1][0]))
    } catch (error) {
        console.log(error);
    }
}

