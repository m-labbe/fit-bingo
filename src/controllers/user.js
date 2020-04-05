import { throwError, throwIf, sendError } from './error'
import User from '../models/user'

export const test = (req, res) => {
    res.send('Greetings from the user controller!')
}

export const create = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    user.save((err, data) => {
        if (err) {
            console.log(err)
            return next(err)
        } else {
            console.log('Success:', data)
        }
        res.send('User created successfully')
    })
}

export const getAll = async (req, res) => {
    try {
        const users = await User
            .find({})
            .then(
                throwIf(r => !r, 400, 'not found', 'User Not Found'),
                throwError(500, 'Database Error')
            )
        res.render('users', { users })
    } catch (err) {
        sendError(res)(error)
    }
}

export const get = async (req, res) => {
    try {
        const user = await User
            .findById(req.params.id)
            .then(
                throwIf(r => !r, 400, 'not found', 'User Not Found'),
                throwError(500, 'Database Error')
            )
        res.render('users', { users: [user] })
    } catch (err) {
        sendError(res)(error)
    }

}
