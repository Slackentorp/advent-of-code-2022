import path from "path";

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
  res.sendFile(path.join(__dirname, "/src/01-december/01-december.ts"), (err: any) => console.log(err));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// path.join(__dirname, "/src/01-december/01-december.ts");