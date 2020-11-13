import { createClient } from '@node-rpc/client';
import { jsonSerializer as serializer } from '@node-rpc/client/dist/serializers/jsonSerializer';
import { axiosXHR as xhr } from '@node-rpc/client/dist/xhr/axios';

// classes, interfaces & functions
import IContract from 'contract';
import { IAirportDetail, IAirportIdentifier } from 'contract/src/dto/airport';
import { IBookingDetail, IBookingIdentifier } from 'contract/src/dto/booking';
import { ICarrierDetail } from 'contract/src/dto/carrier';
import { IFlightSummary, IFlightIdentifier } from 'contract/src/dto/flight';
import { IReservationSummary, IReservationDetail } from 'contract/src/dto/reservation';

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

	async getAirportInformation(iata: string): Promise<IAirportDetail> {
		throw new Error('Method not implemented.');
	}

	async getFlightsAvailable(departure: IAirportIdentifier, arrival: IAirportIdentifier, depart: number): Promise<IFlightSummary[]> {
		throw new Error('Method not implemented.');
	}

	async reserveFlight(id: IFlightIdentifier, amountSeats: number): Promise<IReservationSummary> {
		const response: any = await rpc.reserveFlight(id, amountSeats).call();

		console.log(response);

		// duck typing -> le Quack 🦆
		const reservationSummary: IReservationSummary = response?.data;
		return reservationSummary;
	}

	async createBooking(reservationDetails: IReservationDetail[], creditCardNumber: number, frequentFlyerNumber?: number): Promise<IBookingDetail> {
		throw new Error('Method not implemented.');
	}

	async getBooking(id: IBookingIdentifier): Promise<IBookingDetail> {
		throw new Error('Method not implemented.');
	}

	async cancelBooking(id: IBookingIdentifier): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
