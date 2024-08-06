require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express');
const UsersRoutes = require('./src/routes/users.js');
const MiddlewareLogRequst = require('./src/middleware/logs.js');
const upload = require('./src/middleware/multer.js');

const app = express();

//app.method(path, handler)

app.use(MiddlewareLogRequst);
app.use(express.json());
app.use('/assets', express.static('./public/images'));
app.post('/upload',upload.single('photo'), (req, res) => {
    res.json({
        message: 'upload berhasil'
    })
})
app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.use('/users', UsersRoutes);

app.listen(5000, () => {
    console.log(`Server Succesfully Running In Port ${PORT} `);

})