const table = require('./schedule')

const first = table.create({
  id: 3,
  time: 10,
  provider_id: 27
})

const test = async (req, res) => {
  const wait = await (await first).save()

  try {
    if (wait) console.log(wait)
  } catch (e) {
    console.log(e)
  }
}

test()
