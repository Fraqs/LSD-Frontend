import { createClient } from '@node-rpc/client';
import { jsonSerializer as serializer } from '@node-rpc/client/dist/serializers/jsonSerializer';
import { axiosXHR as xhr } from '@node-rpc/client/dist/xhr/axios';

// classes, interfaces & functions
import IContract from 'Contract';
import { IAirportDetail, IAirportIdentifier } from 'Contract/src/dto/airport';
import { IBookingDetail, IBookingIdentifier } from 'Contract/src/dto/booking';
import { ICarrierDetail } from 'Contract/src/dto/carrier';
import { IFlightSummary, IFlightIdentifier } from 'Contract/src/dto/flight';
import { IReservationSummary, IReservationDetail } from 'Contract/src/dto/reservation';

import { NotFoundError, InconsistentLengthError, InvalidInputError } from 'contract/src/eto';

const endpoint: string = process.env.RPC_HOST || 'Default string, throws error!';
const rpc = createClient<IContract>({ endpoint, serializer, xhr });

export default class ContractRPC implements IContract {
	async getCarrierInformation(iata: string): Promise<ICarrierDetail> {
		const response: any = await rpc.getCarrierInformation(iata).call();

		// ATT:: handle all errors...
		// if (response?.success) throw new NotFoundError('Carrier not found');

		// duck typing -> le Quack 🦆
		const carrierDetail: ICarrierDetail = response?.data;
		return carrierDetail;
	}

	getAirportInformation(iata: string): Promise<IAirportDetail> {
		throw new Error('Method not implemented.');
	}

	getFlightsAvailable(departure: IAirportIdentifier, arrival: IAirportIdentifier, depart: number): Promise<IFlightSummary[]> {
		throw new Error('Method not implemented.');
	}

	reserveFlight(id: IFlightIdentifier, amountSeats: number): Promise<IReservationSummary> {
		throw new Error('Method not implemented.');
	}

	createBooking(reservationDetails: IReservationDetail[], creditCardNumber: number, frequentFlyerNumber?: number): Promise<IBookingDetail> {
		throw new Error('Method not implemented.');
	}

	getBooking(id: IBookingIdentifier): Promise<IBookingDetail> {
		throw new Error('Method not implemented.');
	}

	cancelBooking(id: IBookingIdentifier): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
