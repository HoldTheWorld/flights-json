const fs = require('fs');

function reader() {
  fs.readdir('./public/files', (err, data) => {
    fs.readFile(`./public/files/${data}`, (errread, newdata) => {
      const result = JSON.stringify(newdata)
      console.log(result);
    })
  })
}

reader()
