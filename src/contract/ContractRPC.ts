import { createClient } from '@node-rpc/client';
import { jsonSerializer as serializer } from '@node-rpc/client/dist/serializers/jsonSerializer';
import { axiosXHR as xhr } from '@node-rpc/client/dist/xhr/axios';

// classes, interfaces & functions
import IContract from 'contract';
import { AirportDetail, AirportIdentifier } from 'contract/dist/dto/airport';
import { BookingDetail, BookingIdentifier } from 'contract/dist/dto/booking';
import { CarrierDetail } from 'contract/dist/dto/carrier';
import { FlightSummary, FlightIdentifier } from 'contract/dist/dto/flight';
import { ReservationSummary, ReservationDetail } from 'contract/dist/dto/reservation';

import { NotFoundError, InconsistentLengthError, InvalidInputError } from 'contract/dist/eto';

const endpoint: string = process.env.RPC_HOST || 'Default string, throws error!';
const rpc = createClient<IContract>({ endpoint, serializer, xhr });

export default class ContractRPC implements IContract {
	async getCarrierInformation(iata: string): Promise<CarrierDetail> {
		const response: any = await rpc.getCarrierInformation(iata).call();
		// ATT:: handle all errors...
		// if (response?.success) throw new NotFoundError('Carrier not found');

		// duck typing -> le Quack 🦆
		const carrierDetail: CarrierDetail = response?.data;
		return carrierDetail;
	}

	async getAirportInformation(iata: string): Promise<AirportDetail> {
		throw new Error('Method not implemented.');
	}
	async getFlightsAvailable(departure: AirportIdentifier, arrival: AirportIdentifier, depart: number): Promise<FlightSummary[]> {
		throw new Error('Method not implemented.');
	}

	async reserveFlight(id: FlightIdentifier, amountSeats: number): Promise<ReservationSummary> {
		const response: any = await rpc.reserveFlight(id, amountSeats).call();

		console.log(response);

		// duck typing -> le Quack 🦆
		const reservationSummary: ReservationSummary = response?.data;
		return reservationSummary;
	}

	async createBooking(reservationDetails: ReservationDetail[], creditCardNumber: number, frequentFlyerNumber?: number): Promise<BookingDetail> {
		throw new Error('Method not implemented.');
	}
	async getBooking(id: BookingIdentifier): Promise<BookingDetail> {
		throw new Error('Method not implemented.');
	}
	async cancelBooking(id: BookingIdentifier): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
