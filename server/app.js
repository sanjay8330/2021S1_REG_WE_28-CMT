const PORT = process.env.PORT || 8087;
const app = require('./index');

//Running on the server
app.listen(PORT, () => {
    console.log(`Server started and listening to ${PORT}`);
});
