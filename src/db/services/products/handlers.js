import Product from '../../../db/models/product/index.js'


export const list = async (req, res, next) => {
    try {
        const products = await Product.findAll()
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
        res.send(products([1][0]))
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const products = await Product.destroy({
            where: { id: req.params.id },
        })
        res.send(products([1][0]))
    } catch (error) {
        console.log(error);
    }
}

