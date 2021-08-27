import models from '../../models/index.js'
const {Comment, User, Product, Category} = models
import s from 'sequelize';
const { Op } = s

export const list = async (req, res, next) => {
    try {
        const { name } = req.query
        const filter = req.query.name
            ? {
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`,
                    }
                },
            } : {}

        const categories = await Category.findAll({
            ...filter,
            include: [{model: Product, as: "products"}]
        })
        res.send(categories)
    } catch (error) {
        console.log(error);
    }
}

export const single = async (req, res, next) => {
    try {

        const categories = await Category.findByPk(req.params.id)
        if (categories) {
            res.send(categories)
        } else {
            res.status(404).send('There is no selected data!')
        }
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
            where: { id: req.params.id },
            returning: true
        })
        if (categories) {
            res.send(categories[1][0])
        } else {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteCategory = async (req, res, next) => {
    try {
        const categories = await Category.destroy({
            where: { id: req.params.id },
        })
        if (rows > 0) {
            res.send("ok");
        } else {
            res.status(404).send("not found");
        }
    } catch (error) {
        console.log(error);
    }
}

