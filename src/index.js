const cheerio = require('cheerio')
const fs = require('fs')
const path = '/tmp/data.html'
fs.exists(path, function (exists) {
  if (exists) {
    const $ = cheerio.load(fs.readFileSync(path, 'utf-8'), { decodeEntities: false })
    let result = {
      title: '',
      data: {}
    }
    result.title = $('.b-crash-stat th').html().trim().substring(24)
    $('.b-crash-stat tr').each(function (i, elem) {
      if (i > 1)
        result['data'][$(this).children().first().text()] = $(this).children().last().text()
    })
    let date = new Date()
    date = date.toISOString()
      .replace(/[T:]/g, '-')
      .replace(/\..+/, '')
    fs.writeFileSync(`data-${date}.json`, JSON.stringify(result, null, '\t'))
  } else
    console.log(`File ${path} could't found`)
})

