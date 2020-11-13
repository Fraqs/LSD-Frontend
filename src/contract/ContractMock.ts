// classes, interfaces & functions
// import { IContract } from 'contract';

import IContract from 'Contract';
import { IAirportDetail, IAirportIdentifier } from 'Contract/src/dto/airport';
import { IBookingDetail, IBookingIdentifier } from 'Contract/src/dto/booking';
import { ICarrierDetail } from 'Contract/src/dto/carrier';
import { IFlightSummary, IFlightIdentifier } from 'Contract/src/dto/flight';
import { IReservationSummary, IReservationDetail } from 'Contract/src/dto/reservation';
import { resolve } from 'path';

// this is a "Fake" but should be mocked in test.
export default class ContractMock implements IContract {
	async getCarrierInformation(iata: string): Promise<ICarrierDetail> {
		// mock contract method structure (Promises)
		return new Promise((resolve, reject) => resolve({ iata: 'some code', name: 'some name' }));
	}
	async getAirportInformation(iata: string): Promise<IAirportDetail> {
		throw new Error('Method not implemented.');
	}

	async getFlightsAvailable(departure: IAirportIdentifier, arrival: IAirportIdentifier, depart: number): Promise<IFlightSummary[]> {
		throw new Error('Method not implemented.');
	}

	async reserveFlight(id: IFlightIdentifier, amountSeats: number): Promise<IReservationSummary> {
		throw new Error('Method not implemented.');
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
