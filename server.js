const express = require('express');
const app = express();
app.use("/output",express.static('output'));
app.use(express.static('public'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));