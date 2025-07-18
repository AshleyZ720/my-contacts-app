'use client';

import { Contact } from '@/types/contact';
import { ContactCard } from './ContactCard';

interface ContactsGridProps {
  contacts: Contact[];
  favoriteIds: number[];
  onFavoriteToggle: (contactId: number, isFavorite: boolean) => void;
}

export function ContactsGrid({ contacts, favoriteIds, onFavoriteToggle }: ContactsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          initialFavorite={favoriteIds.includes(contact.id)}
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </div>
  );
}