const app = require('express')();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Bot is Active.'));

module.exports = () => {
  app.listen(PORT,()=>{
      console.log("Listening on PORT :"+PORT);
  });
}