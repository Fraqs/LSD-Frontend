import ContractRPC from './ContractRPC';
import ContractMock from './ContractMock';

/** Dependency injection... ish */
const development: boolean = process.env.NODE_ENV === 'development';
development && console.warn('ATT:: Running ContractMock on development environment, change .evn for production.');

export default development ? ContractMock : ContractRPC;
