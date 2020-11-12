// libraries
import express from 'express';
import path from 'path';

// routes
import views from './routes/views';
import api from './routes/api';

// environments variables -> .env
const port: number = 4000;
const app: express.Application = express();

// ejs configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// route configuration
app.use('/', views);
app.use('/api', api);

// static scripts, styles, images etc. configuration
app.use(express.static('src/static'));

// initiating server
app.listen(port, () => {
	console.log('Server running...');
	console.table({ index: `http://localhost:${port}`, api: `http://localhost:${port}/api/` });
});
