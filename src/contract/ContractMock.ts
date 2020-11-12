// classes, interfaces & functions
// import { IContract } from 'contract';

import IContract from './IContract';
import UserDTO from './UserDTO';

export default class ContractMock implements IContract {
	getUser(): Promise<UserDTO> {
		return new Promise((result, reject) => result(new UserDTO('Steph', 'Mocked')));
	}
	getString(): Promise<string> {
		return new Promise((result, reject) => result('Mocked String'));
	}

	getNumber(): Promise<number> {
		return new Promise((result, reject) => result(123456789));
	}

	getBoolean(): Promise<boolean> {
		return new Promise((result, reject) => result(true));
	}
}
