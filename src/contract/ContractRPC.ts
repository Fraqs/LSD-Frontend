import { createClient } from '@node-rpc/client';
import { jsonSerializer as serializer } from '@node-rpc/client/dist/serializers/jsonSerializer';
import { axiosXHR as xhr } from '@node-rpc/client/dist/xhr/axios';

// classes, interfaces & functions
// import { IContract } from 'contract';
import IContract from './IContract';
import UserDTO from './UserDTO';

// environments variables -> .env or from custom module
const RCP_PORT: number = 3000;
const endpoint: string = `http://localhost:${RCP_PORT}`;

const rpc = createClient<IContract>({ endpoint, serializer, xhr });

export default class ContractRPC implements IContract {
	async getUser(): Promise<UserDTO> {
		const result: any = await rpc.getUser().call();

		// duck typing -> le Quack 🦆
		const user: UserDTO = result?.data;
		return user;
	}

	async getString(): Promise<string> {
		const result: any = await rpc.getString().call();
		return String(result?.data);
	}

	async getNumber(): Promise<number> {
		const result: any = await rpc.getNumber().call();
		return Number(result?.data);
	}

	async getBoolean(): Promise<boolean> {
		const result: any = await rpc.getBoolean().call();
		return Boolean(result?.data);
	}
}
