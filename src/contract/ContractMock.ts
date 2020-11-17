// classes, interfaces & functions
import IContract from 'contract';
import { AirportDetail, AirportIdentifier } from 'contract/dist/dto/airport';
import { BookingDetail, BookingIdentifier } from 'contract/dist/dto/booking';
import { CarrierDetail } from 'contract/dist/dto/carrier';
import { FlightSummary, FlightIdentifier } from 'contract/dist/dto/flight';
import { ReservationSummary, ReservationDetail } from 'contract/dist/dto/reservation';

export default class ContractMock implements IContract {
	async getCarrierInformation(iata: string): Promise<CarrierDetail> {
		const carrierDetail: CarrierDetail = { iata, name: 'Carrier Mock Name' };
		return new Promise((resolve, reject) => resolve(carrierDetail));
	}

	async getAirportInformation(iata: string): Promise<AirportDetail> {
		const airportDetail: AirportDetail = { iata, name: 'Airport Mock Name', timeZone: 'Mock Timezone' };
		return new Promise((resolve, reject) => resolve(airportDetail));
	}
	async getFlightsAvailable(departure: AirportIdentifier, arrival: AirportIdentifier, depart: number): Promise<FlightSummary[]> {
		const departureAirport: AirportIdentifier = { iata: '' };
		const arrivalAirport: AirportIdentifier = { iata: '' };
		const carrier: CarrierDetail = { iata: '', name: '' };

		const flightSummary: FlightSummary = {
			departureAirport,
			arrivalAirport,
			carrier,
			departureDate: 5,
			arrivalDate: 10,
			availableSeats: 9,
			seatPrice: 500,
			flightCode: 'abc123',
		};

		const flightSummaries: FlightSummary[] = [flightSummary];
		return new Promise((resolve, reject) => resolve(flightSummaries));
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
