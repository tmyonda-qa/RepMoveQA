import { faker } from '@faker-js/faker';

export interface UserData {
  firstName: string;
  lastName: string;
  companyName: string;
  industry: string;
  email: string;
  phone: {
    country: string;
    number: string;
  };
  password: string;
}

export class UserFixture {
  static data(): UserData {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      companyName: faker.company.name(),
      industry: 'Distributor',
      email: faker.internet.email(),
      phone: {
        country: 'ua',
        number: `380${faker.string.numeric(9)}`,
      },
      password: process.env.USER_PASSWORD as string,
    };
  }
}
