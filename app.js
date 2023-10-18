const express = require('express');
const app = express();
const moduleHighlightsRoutes = require('./routes/module_highlights')
const setHeaders = require('./middlewares/setHeaders');
const PORT = process.env.PORT || 8765;

app.use(express.json());
app.use(setHeaders);
app.use('/module_highlights', moduleHighlightsRoutes)




app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});