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
        const comments = await Comment.findAll({
            ... filter,
            include: [{model: Product}, {model: User}]
        })
        res.send(comments)
    } catch (error) {
        console.log(error);
    }
}

export const single = async (req, res, next) => {
    try {
        const comments = await Comment.findByPk(req.params.id)
        res.send(comments)
    } catch (error) {
        console.log(error);
    }
}

export const create = async (req, res, next) => {
    try {
        const comments = await Comment.create(req.body)
        res.send(comments)
    } catch (error) {
        console.log(error);
        next(error)
    }
}

export const update = async (req, res, next) => {
    try {
        const comments = await Comment.update(req.body, {
            where: { id: req.params.id },
            returning: true
        })
        if (comments) {
            res.send(comments[1][0])
        } else {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteComment = async (req, res, next) => {
    try {
        const comments = await Comment.destroy({
            where: { id: req.params.id },
        })
        res.send('Deleted')
    } catch (error) {
        console.log(error);
    }
}

