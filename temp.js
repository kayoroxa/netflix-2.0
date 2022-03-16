const text = 'asdas o {oil} gfaf {oil} {lasd}'
// result split: ['asdas o', '{oil}', 'gfaf', '{oil}', '{lasd}']
console.log(
  //split but not delete delimiter
  text
    .split(/(\{.*?\})/g)
    .map(v => v.trim())
    .filter(item => item.length > 0)
)

// .map(item => {
//   if (item.match(/\{(.*?)\}/g)) {
//     return item.replace(/\{(.*?)\}/g, '$1')
//   }
//   return item
// })
// // .filter(item => item.trim().length > 0)
