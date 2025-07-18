'use client';

import { useState, useEffect, useMemo } from 'react';
import { Contact } from '@/types/contact';
import { contactService } from '@/services/contactService';
import { ContactsHeader } from '@/components/ContactsHeader';
import { ContactsGrid } from '@/components/ContactsGrid';
import { LoadingState } from '@/components/LoadingState';
import ErrorState from '@/components/ErrorState';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

// 从localStorage加载收藏数据
const loadFavorites = (): number[] => {
  if (typeof window === 'undefined') return [];
  const saved = localStorage.getItem('favoriteContacts');
  return saved ? JSON.parse(saved) : [];
};

// 保存收藏数据到localStorage
const saveFavorites = (favorites: number[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('favoriteContacts', JSON.stringify(favorites));
};

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  useEffect(() => {
    setFavoriteIds(loadFavorites());
  }, []);

  const handleFavoriteToggle = (contactId: number, isFavorite: boolean) => {
    const newFavorites = isFavorite
      ? [...favoriteIds, contactId]
      : favoriteIds.filter(id => id !== contactId);
    setFavoriteIds(newFavorites);
    saveFavorites(newFavorites);
  };

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await contactService.getAllContacts();
      setContacts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const processedContacts = useMemo(() => {
    let result = [...contacts];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (filterBy !== 'all') {
      result = result.filter(contact => {
        switch (filterBy) {
          case 'favorites':
            return favoriteIds.includes(contact.id);
          case 'gmail':
            return contact.email.includes('@gmail.com');
          case 'business':
            return contact.email.includes('.biz') || contact.website.includes('.biz');
          case 'org':
            return contact.email.includes('.org') || contact.website.includes('.org');
          case 'net':
            return contact.email.includes('.net') || contact.website.includes('.net');
          default:
            return true;
        }
      });
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'id':
          return a.id - b.id;
        case 'id-desc':
          return b.id - a.id;
        case 'email':
          return a.email.localeCompare(b.email);
        case 'company':
          return a.company.name.localeCompare(b.company.name);
        case 'city':
          return a.address.city.localeCompare(b.address.city);
        case 'username':
          return a.username.localeCompare(b.username);
        case 'username-desc':
          return b.username.localeCompare(a.username);
        default:
          return 0;
      }
    });

    return result;
  }, [contacts, searchTerm, sortBy, filterBy, favoriteIds]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          <LoadingState />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          <ErrorState onRetry={fetchContacts} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="mb-6 flex justify-start">
          <Link href="/">
            <Button size="lg" variant="outline" className="gap-2 px-6 py-3 rounded-xl shadow hover:shadow-lg transition-all">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <ContactsHeader
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          contactCount={processedContacts.length}
          sortBy={sortBy}
          onSortChange={setSortBy}
          filterBy={filterBy}
          onFilterChange={setFilterBy}
        />

        {processedContacts.length > 0 ? (
          <ContactsGrid
            contacts={processedContacts}
            favoriteIds={favoriteIds}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ) : (
          <div className="text-center py-12">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-lg mb-2">
                No contacts found
              </p>
              <p className="text-sm text-gray-400">
                Try adjusting your search terms, sort options, or filters
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}