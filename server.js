import express from 'express';
import path from 'path';
import opn from 'opn';
import webpack from 'webpack';

import config from './webpack.dev.config';

const port = 3030;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port, err => {
	if (err) {
		console.error(err);
	} else {
		opn('http://localhost:' + port);
	}
});


