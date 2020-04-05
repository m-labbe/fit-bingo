import { throwError, throwIf, sendError } from './error'
import Challenge from '../models/challenge'

export const getAll = async (req, res) => {
    try {
        const challenges = await Challenge
            .find({})
            .then(
                throwIf(r => !r, 400, 'not found', 'Challenge Not Found'),
                throwError(500, 'Database Error')
            )
        res.render('challenges', {challenges})
    } catch (err) {
        sendError(res)(err)
    }
}

export const get = async (req, res) => {
    try {
        const challenge = await Challenge
            .findById(req.params.id)
            .then(
                throwIf(r => !r, 400, 'not found', 'Challenge Not Found'),
                throwError(500, 'Database Error')
            )
        res.render('challenge', { title: challenge.name, bootstrapData: JSON.stringify(challenge) })
    } catch (err) {
        sendError(res)(err)
    }

}

export const create = (req, res) => {
    const challenge = new Challenge({
        name: req.body.name,
        tasks: req.body.tasks,
    })

    challenge.save((err, data) => {
        if (err) {
            console.log(err)
            return next(err)
        } else {
            console.log('Success:', data)
        }
        res.send('Challenge created successfully')
    })
}