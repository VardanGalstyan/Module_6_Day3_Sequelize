import models from '../../models/index.js'
const { User, Cart, Product } = models



export const list = async (req, res, next) => {
    try {
        const data = await Cart.findAll({
            where: { userId: req.params.userId },
            include: [{model: User}, {model:Product}]
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

