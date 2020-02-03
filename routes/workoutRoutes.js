const router = require('express').Router()
const workoutController = require('../controllers/workoutController')

router.route('/')
    .get(workoutController.getAllWorkouts)
    .post(workoutController.createWorkout)

router.put('/:id', workoutController.addExercise)

router.get('/range', workoutController.getWorkoutsInRange)


module.exports = router;

