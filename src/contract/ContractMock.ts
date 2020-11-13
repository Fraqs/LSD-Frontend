// classes, interfaces & functions
// import { IContract } from 'contract';

import IContract from 'contract';
import { IAirportDetail, IAirportIdentifier } from 'contract/src/dto/airport';
import { IBookingDetail, IBookingIdentifier } from 'contract/src/dto/booking';
import { ICarrierDetail } from 'contract/src/dto/carrier';
import { IFlightSummary, IFlightIdentifier } from 'contract/src/dto/flight';
import { IReservationSummary, IReservationDetail } from 'contract/src/dto/reservation';

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
