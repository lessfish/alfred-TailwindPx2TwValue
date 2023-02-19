const data = require('./data.json')
const keyword = process.argv[2].toLowerCase()

// console.warn('keyword', process.argv);
const res = []

data.forEach(item => {
  const { name, pixels, size } = item;
  const itemVal = +pixels.replace(/px/, '')
  const inputVal = +keyword
  const diff = Math.abs(itemVal - inputVal)

  res.push({
    title: `${pixels} - (${name}) - ${size}`,
    arg: name,
    diff,
    isPositive: itemVal > inputVal,
  })
})

res.sort((a, b) => {
  if (a.diff !== b.diff) return a.diff - b.diff
  else if (a.isPositive) return -1 // 当 diff 相同的时候，大于 inputVal 的优先展示
  else return 1
})

console.log(JSON.stringify({ items: res }))