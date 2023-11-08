const express = require('express')
const app = express()

app.get('/', function (req, res) {
  return res.redirect("https://www.kuickplan.com")
})

app.get('/:s1', function (req, res) {
  return res.redirect(`https://www.kuickplan.com/${req.params.s1}`)
})

app.get('/:s1/:s2', function (req, res) {
  return res.redirect(`https://www.kuickplan.com/${req.params.s1}/${req.params.s2}`)
})


app.get('/:s1/:s2/:s3', function (req, res) {
  return res.redirect(`https://www.kuickplan.com/${req.params.s1}/${req.params.s2}/${req.params.s3}`)
})

app.listen(5001, ()=>{
  console.log("Server started!")
})