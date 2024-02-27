import { QueryDocumentSnapshot } from '@angular/fire/firestore';
import { CustomerAddress } from './addresses';

export interface Customers {
  id: string;
  name: string;
  email: string; //Added
  phone: string;
  profile: string;
  createdAt: Date;
  addresses: CustomerAddress[];
}
export const customerConverter = {
  toFirestore: (data: Customers) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as Customers,
};
