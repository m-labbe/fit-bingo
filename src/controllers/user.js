import User from '../models/user'

export const test = function (req, res) {
    res.send('Greetings from the user controller!')
}

export const create = function (req, res) {
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