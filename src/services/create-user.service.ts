import { UserData } from '../fixtures/user.fixture';

export class SignUpApi {
  private baseUrl = 'https://us-central1-dev-repmove-enterprise.cloudfunctions.net';

  public async createUser(user: UserData) {
    const response = await fetch(`${this.baseUrl}/companySignUp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: { ...user, type: '[AUTH] Sign up' },
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Failed to create user: ${response.status}, ${text}`);
    }

    return response.json();
  }
}
