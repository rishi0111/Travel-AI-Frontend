// Common interfaces and types
export interface User {
     id: string;
     email: string;
     name: string;
}

export interface Booking {
     id: string;
     userId: string;
     destination: string;
     startDate: string;
     endDate: string;
     status: 'pending' | 'confirmed' | 'cancelled';
}

export interface AuthState {
     isAuthenticated: boolean;
     user: User | null;
     token: string | null;
     loading: boolean;
     error: string | null;
}

export interface BookingState {
     bookings: Booking[];
     currentBooking: Booking | null;
     loading: boolean;
     error: string | null;
}