const { Workout } = require('../models')

module.exports = {
    getAllWorkouts: async (req, res) => {
        //getlastworkout
        // Workout.find({})
        //     .then(data => {
        //         res.send(data);
        //     })
        //     .catch(err => {
        //         res.json(err);
        //     })

        try {
            const data = await Workout.find({})
            res.json(data)
        } catch (error) {
            res.sendStatus(500)
        }

    },
    addExercise: async ({ params, body }, res) => {
        //addexercise
        // day = new Date()
        // myarr = [1,2,3,4]
        // myarr.push(5)
        // myarr = [1,2,3,4,5]

        // Workout.findByIdAndUpdate(params.id, {
        //     $push: { execises: body }
        // }, {
        //     new: true,
        //     runValidators: true
        // })
        //     .then(db => {
        //         res.json(db)
        //     })
        //     .catch(err => {
        //         res.json(err);
        //     })

        try {
            const data = await Workout.findByIdAndUpdate(params.id, {
                $push: { execises: body }
            }, {
                new: true,
                runValidators: true
            })
            res.json(data)
        } catch (error) {
            res.sendStatus(500)
        }
    },
    createWorkout: async (req, res) => {
        // createworkout
        // Workout.create()
        //     .then(db => {
        //         res.json(db);
        //     })
        //     .catch(err => {
        //         res.json(err);
        //     })

            try {
               const data = await Workout.create()
                res.json(data);
            } catch (error) {
                res.sendStatus(500);
            }
    },
    getWorkoutsInRange: async (req, res) => {
        //getworkoutsinrange
        try {
            const data = await Workout.find({})
            res.json(data)
        } catch (error) {
            res.sendStatus(500)
        }
    }
}

// '/api/workouts'
// server => routes => apiRoutes => workoutRoutes => workoutController

// '/stats'
// server => routes => htmlRoutes

// '/'
// server => public => index.html