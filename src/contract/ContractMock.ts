// classes, interfaces & functions
// import { IContract } from 'contract';

import IContract from 'Contract';
import { IAirportDetail, IAirportIdentifier } from 'Contract/src/dto/airport';
import { IBookingDetail, IBookingIdentifier } from 'Contract/src/dto/booking';
import { ICarrierDetail } from 'Contract/src/dto/carrier';
import { IFlightSummary, IFlightIdentifier } from 'Contract/src/dto/flight';
import { IReservationSummary, IReservationDetail } from 'Contract/src/dto/reservation';

// this is a "Fake" but should be mocked in test.
export default class ContractMock implements IContract {
	getCarrierInformation(iata: string): Promise<ICarrierDetail> {
		throw new Error('Method not implemented.');
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
