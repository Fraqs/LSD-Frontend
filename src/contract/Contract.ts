import ContractRPC from './ContractRPC';
import ContractMock from './ContractMock';

/** Dependency injection... ish */

// const isProduction: boolean = ...
const Contract = true ? ContractRPC : ContractMock;

export default Contract;
