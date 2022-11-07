const express = require('express')
const app = express()
const cors = require('cors')
const { CopyResponse } = require('pg-protocol/dist/messages')
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

app.use(cors())
app.use(express.json())

app.locals.title = 'Cheers for Fears API'

app.set('port', process.env.PORT || 3003)
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on ${app.get('port')}!`)
})

app.get('/api/v1/emotions', async (request, response) => {
  try {
    const emotions = await database('emotions').select()
    response.status(200).json(emotions)
  } catch(error) {
    response.status(500).json({ error })
  }
})

app.get('/api/v1/advice', async (request, response) => {
  try {
    const advice = await database('advice').select()
    response.status(200).json(advice)
  } catch(error) {
    response.status(500).json({ error })
  }
})

app.get('/api/v1/quotes', async (request, response) => {
  try {
    const quote = await database('quote').select()
    response.status(200).json(quote)
  } catch(error) {
    response.status(500).json({ error })
  }
})

app.get('/api/v1/emotions/:id', async (request, response) => {
  try {
    const emotions = await database('emotions').where('id', request.params.id).select()
    if (emotions.length) {
      response.status(200).json(emotions)
    } else {
      response.status(404).json({
        error: `Could not find emotion with id ${request.params.id}`
      })
    }
  } catch (error) {
    response.status(500).json({ error })
  }
})

app.get('/api/v1/advice/:id', async (request, response) => {
  try {
    const advice = await database('advice').where('id', request.params.id).select()
    if (advice.length) {
      response.status(200).json(advice)
    } else {
      response.status(404).json({
        error: `Could not find advice with id ${request.params.id}`
      })
    }
  } catch (error) {
    response.status(500).json({ error })
  }
})

app.get('/api/v1/quotes/:id', async (request, response) => {
  try {
    const quote = await database('quote').where('id', request.params.id).select()
    if (quote.length) {
      response.status(200).json(quote)
    } else {
      response.status(404).json({
        error: `Could not find quote with id ${request.params.id}`
      })
    }
  } catch (error) {
    response.status(500).json({ error })
  }
})

app.post('/api/v1/advice', async(request, response) => {
  const advice = request.body

  for (let requiredParameter of ['id', 'emotion_id', 'content']) {
    if(!advice[requiredParameter]) {
      return response 
        .status(422)
        .send({ error: `Expected format: {id: <Integer>, emotion_id: <Integer>, content: <String>}. You're missing a "${requiredParameter}" property.`})
    }
  }
  try {
    const id = await database('advice').insert(advice, 'id')
    response.status(201).json({ id })
  } catch (error) {
    response.status(500).json({ error })
  }
})

app.post('/api/v1/quotes', async(request, response) => {
  const quotes = request.body
  
  for (let requiredParameter of ['id', 'emotion_id', 'content']) {
    if(!quotes[requiredParameter]) {
      return response 
        .status(422)
        .send({ error: `Expected format: {id: <Integer>, emotion_id: <Integer>, content: <String>}. You're missing a "${requiredParameter}" property.`})
    }
  }
  try {
    const id = await database('quote').insert(quotes, 'id')
    response.status(201).json({ id })
  } catch (error) {
    response.status(500).json({ error })
  }
})