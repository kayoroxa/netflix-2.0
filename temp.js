//axios update

const axios = require('axios')

axios
  .get(
    'https://api.jsonstorage.net/v1/json/05e182a5-66dd-4dfb-b45f-8fd701ea413d/1ed36400-4397-4f37-831b-65ef1cffa821'
  )
  .then(function (response) {
    console.log(response.data)
  })

//update
axios.put(
  'https://api.jsonstorage.net/v1/json/05e182a5-66dd-4dfb-b45f-8fd701ea413d/1ed36400-4397-4f37-831b-65ef1cffa821?apiKey=22edd499-8d3d-43f0-af93-16b0c74eef22',
  {
    name: 'Wes Bos',
  }
)
