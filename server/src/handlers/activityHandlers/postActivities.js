const postActivities = require('../../controllers/activitiesControllers/postActivities')

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season } = req.body

    const post = {
      name,
      difficulty,
      duration,
      season
    }

    const createActivities = await postActivities(post)

    res.status(201).json(createActivities)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = postActivity
