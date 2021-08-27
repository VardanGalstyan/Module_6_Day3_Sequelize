import models from '../../models/index.js'
const { Comment, User, Cart, Product } = models
import s from 'sequelize';
const { Op } = s

export const list = async (req, res, next) => {
    try {
        const data = await Cart.findAll({
            where: { userId: req.params.userId },
        });
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}


export const create = async (req, res, next) => {
    try {
        const { userId, productId } = req.params;
        const data = await Cart.create({ userId, productId });
        res.send(data);
    } catch (error) {
        console.log(error);
        next(error)
    }
}


export const deleteCategory = async (req, res, next) => {
    try {
        const { userId, productId } = req.params;
        const rows = await Cart.destroy({ where: { userId, productId } });
        res.send({ rows });
    } catch (error) {
        console.log(error);
        next(error)
    }
}

