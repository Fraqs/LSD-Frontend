// libraries
import * as express from 'express';

// classes, interfaces & functions
import Contract from '../contract';

const router: express.Router = express.Router();

router.get('/', async (req, res) => {
	const contract = new Contract();

	try {
		contract.getCarrierInformation('test');
	} catch (error) {
		console.log(error);
	}

	// stephan syntax:: just a complex way to make a simple list
	const items: string[] = [...Array(20)].map((_, index) => `List item ${index + 1}`);
	const content: object = { title: 'Hello TypeScript RPC', items };

	res.render('index', content);
});

export default router;
