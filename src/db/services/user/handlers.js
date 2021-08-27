import models from '../../models/index.js'
const {Comment, User, Product} = models
import s from 'sequelize'
const { Op } = s


export const list = async (req, res, next) => {
    try {
        const users = await User.findAll({
            include: {model: Comment, include : Product}
        })
        res.send(users)
    } catch (error) {
        console.log(error);
    }
}

export const single = async (req, res, next) => {
    try {
        const users = await User.findByPk(req.params.id)
        res.send(users)
    } catch (error) {
        console.log(error);
    }
}

export const create = async (req, res, next) => {
    try {
        const users = await User.create(req.body)
        res.send(users)
    } catch (error) {
        console.log(error);
    }
}

export const update = async (req, res, next) => {
    try {
        const users = await User.update(req.body, {
            where: { id: req.params.id },
            returning: true
        })
        if (users) {
            res.send(users[1][0])
        } else {
            console.log("This error is thrown", error);
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const users = await User.destroy({
            where: { id: req.params.id },
        })
        res.send('Deleted')
    } catch (error) {
        console.log(error);
    }
}

