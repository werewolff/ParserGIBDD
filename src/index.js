const cheerio = require('cheerio')
const fs = require('fs')
const DATA_DIR = process.env.DATA_DIR || '/tmp/'
const FILE_NAME = process.env.FILE_NAME || '/tmp/data'

function parse() {
  const $ = cheerio.load(fs.readFileSync(FILE_NAME, 'utf-8'), { decodeEntities: false })
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
  
  fs.writeFileSync(DATA_DIR + `data-${date}.json`, JSON.stringify(result, null, '\t'))
}

fs.exists(FILE_NAME, function (exists) {
  if (exists) {
    parse();
  } else {
    console.log(`File ${FILE_NAME} does not exists`)
  }
})

