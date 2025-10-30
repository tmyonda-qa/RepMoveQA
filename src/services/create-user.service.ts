import {UserData} from "../fixtures/user.fixture";

export class SignUpApi {
    private baseUrl = 'https://us-central1-dev-repmove-enterprise.cloudfunctions.net';

    public async createUser(user: UserData) {
        const response = await fetch(`${this.baseUrl}/companySignUp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    companyName: user.companyName,
                    industry: user.industry,
                    email: user.email,
                    password: user.password,
                    phone: {
                        country: user.phone.country,
                        number: user.phone.number,
                    },
                    type: "[AUTH] Sign up"
                }
            }),
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`Failed to create user: ${response.status}, ${text}`);
        }

        return response.json();
    }
}
