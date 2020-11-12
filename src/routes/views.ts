// libraries
import * as express from 'express';

// classes, interfaces & functions
import Contract from '../contract/Contract';
import UserDTO from '../contract/UserDTO';
const contract = new Contract();

const router: express.Router = express.Router();

router.get('/', async (req, res) => {
	const _string: string = await contract.getString();
	const _number: number = await contract.getNumber();
	const _boolean: boolean = await contract.getBoolean();
	const _user: UserDTO = await contract.getUser();
	console.log(_user.fname, _user.lname);

	console.table({ _string, _number, _boolean, _user });

	// stephan syntax:: just a complex way to make a simple list
	const items: string[] = [...Array(20)].map((_, index) => `List item ${index + 1}`);
	const content: object = { title: 'Hello TypeScript RPC', items };

	res.render('index', content);
});

export default router;
