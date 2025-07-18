import { Contact } from '@/types/contact';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const contactService = {
  async getAllContacts(): Promise<Contact[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  },

  async getContactById(id: number): Promise<Contact> {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch contact');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching contact:', error);
      throw error;
    }
  }
};