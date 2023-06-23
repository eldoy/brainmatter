function extract(line) {
  let [key, ...value] = line.split(':')
  if ((key = key.trim())) {
    value = value.join(':').trim()
    if (value == 'false') {
      value = false
    } else if (value == 'true') {
      value = true
    } else if (key.endsWith('_at')) {
      const date = new Date(value)
      if (typeof date.getTime == 'function') {
        value = date
      }
    } else if (/^\d+$/.test(value)) {
      value = parseInt(value)
    } else if (/^\d+\.\d+$/.test(value)) {
      value = parseFloat(value)
    }
    return [key, value]
  }
  return []
}

function brainmatter(html) {
  const data = {}
  const matches = html.match(/^-{3}(.+?)-{3}/s)
  if (matches) {
    html = html.replace(matches[0], '')
    matches[1].split('\n').forEach((line) => {
      const [key, value] = extract(line)
      if (key) data[key] = value
    })
  }
  return { html, data }
}

module.exports = brainmatter
