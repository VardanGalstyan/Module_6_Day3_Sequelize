import models from '../../models/index.js'
const {Comment, User, Product, Category} = models

import s from 'sequelize'
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
        const products = await Product.findAll({
            ... filter,
            include: {model: Comment, include : User}
        })
        res.send(products)
    } catch (error) {
        console.log(error);
    }
}

export const single = async (req, res, next) => {
    try {
        const products = await Product.findByPk(req.params.id)
        res.send(products)
    } catch (error) {
        console.log(error);
    }
}

export const create = async (req, res, next) => {
    try {
        const products = await Product.create(req.body)
        res.send(products)
    } catch (error) {
        console.log(error);
    }
}

export const update = async (req, res, next) => {
    try {
        const products = await Product.update(req.body, {
            where: { id: req.params.id },
            returning: true
        })
        if (products) {
            res.send(products[1][0])
        } else {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const products = await Product.destroy({
            where: { id: req.params.id },
        })
        res.send('Deleted')
    } catch (error) {
        console.log(error);
    }
}

