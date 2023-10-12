import { render, screen } from '@testing-library/react';
import App from './App';
import { fetchUsers } from './utils/api';
import { UserType } from './types';

jest.mock('./utils/api', () => ({
  fetchUsers: jest.fn(),
}));

describe('App component', () => {
  test('renders user types title', async () => {
    render(<App />);
    const titleElement = await screen.findByText(/user types/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('fetches users and displays them', async () => {
    const users = [
      { id: '1', name: 'Test User', role: UserType.ADMIN },
    ];

    (fetchUsers as jest.Mock).mockResolvedValue(users);

    render(<App />);

    const userNameElement = await screen.findByText(/test user/i);
    const userRoleElement = await screen.findAllByText(/admin/i);

    expect(userNameElement).toBeInTheDocument();
    expect(userRoleElement.length).toBeGreaterThan(1); // Makes sure that when a user is an admin, it's also being displayed on the screen, other than the 'Admin' from the select.
  });

});
