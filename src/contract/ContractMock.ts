// classes, interfaces & functions
import IContract from 'contract';
import { AirportDetail, AirportIdentifier } from 'contract/dist/dto/airport';
import { BookingDetail, BookingIdentifier } from 'contract/dist/dto/booking';
import { CarrierDetail } from 'contract/dist/dto/carrier';
import { FlightSummary, FlightIdentifier } from 'contract/dist/dto/flight';
import { ReservationSummary, ReservationDetail } from 'contract/dist/dto/reservation';

// this is a "Fake" but should be mocked in test.
export default class ContractMock implements IContract {
	async getCarrierInformation(iata: string): Promise<CarrierDetail> {
		return new Promise((resolve, reject) => resolve({ iata: 'some code', name: 'some name' }));
	}

	async getAirportInformation(iata: string): Promise<AirportDetail> {
		throw new Error('Method not implemented.');
	}
	async getFlightsAvailable(departure: AirportIdentifier, arrival: AirportIdentifier, depart: number): Promise<FlightSummary[]> {
		throw new Error('Method not implemented.');
	}
	async reserveFlight(id: FlightIdentifier, amountSeats: number): Promise<ReservationSummary> {
		throw new Error('Method not implemented.');
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
