'use client';

import { Contact } from '@/types/contact';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Phone, Globe, MapPin, Building, Star } from 'lucide-react';
import { useState } from 'react';

interface ContactCardProps {
  contact: Contact;
  onFavoriteToggle?: (contactId: number, isFavorite: boolean) => void;
  initialFavorite?: boolean;
}

export function ContactCard({ contact, onFavoriteToggle, initialFavorite = false }: ContactCardProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (id: number) => {
    const colors = [
      'bg-gradient-to-br from-blue-500 to-purple-600',
      'bg-gradient-to-br from-green-500 to-teal-600',
      'bg-gradient-to-br from-orange-500 to-red-600',
      'bg-gradient-to-br from-purple-500 to-pink-600',
      'bg-gradient-to-br from-teal-500 to-blue-600',
    ];
    return colors[id % colors.length];
  };

  return (
    <Card className="flex flex-col justify-between h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
      <div className="flex-1">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-4">
            <Avatar className={`h-16 w-16 ${getAvatarColor(contact.id)} text-white font-semibold text-lg`}>
              <AvatarFallback className="bg-transparent">
                {getInitials(contact.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">@{contact.username}</p>
                  <Badge variant="secondary" className="mt-1 text-xs">
                    {contact.company.name}
                  </Badge>
                </div>
                <button
                  onClick={() => {
                    const newFavorite = !isFavorite;
                    setIsFavorite(newFavorite);
                    onFavoriteToggle?.(contact.id, newFavorite);
                  }}
                  className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Star
                    className={`h-5 w-5 transition-colors ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
                      }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-3 text-sm group/item hover:text-primary transition-colors">
            <Mail className="h-4 w-4 text-muted-foreground group-hover/item:text-primary" />
            <a
              href={`mailto:${contact.email}`}
              className="truncate hover:underline focus:underline outline-none"
            >
              {contact.email}
            </a>
          </div>
          <div className="flex items-center space-x-3 text-sm group/item hover:text-primary transition-colors">
            <Phone className="h-4 w-4 text-muted-foreground group-hover/item:text-primary" />
            <span>{contact.phone}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm group/item hover:text-primary transition-colors">
            <Globe className="h-4 w-4 text-muted-foreground group-hover/item:text-primary" />
            <a
              href={contact.website.startsWith('http') ? contact.website : `https://${contact.website}`}
              className="truncate hover:underline focus:underline outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.website}
            </a>
          </div>
          <div className="flex items-start space-x-3 text-sm group/item hover:text-primary transition-colors">
            <MapPin className="h-4 w-4 text-muted-foreground group-hover/item:text-primary mt-0.5" />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${contact.address.geo.lat},${contact.address.geo.lng}`}
              className="flex-1 min-w-0 hover:underline focus:underline outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="truncate">
                {contact.address.suite} {contact.address.street}
              </p>
              <p className="text-muted-foreground">
                {contact.address.city}, {contact.address.zipcode}
              </p>
            </a>
          </div>
          <div className="flex items-start space-x-3 text-sm group/item hover:text-primary transition-colors">
            <Building className="h-4 w-4 text-muted-foreground group-hover/item:text-primary mt-0.5" />
            <div className="flex-1 min-w-0">
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(contact.company.name)}`}
                className="font-medium truncate hover:underline focus:underline outline-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.company.name}
              </a>
              <p className="text-xs text-muted-foreground italic">
                "{contact.company.catchPhrase}"
              </p>
              <p className="text-xs text-muted-foreground">
                {contact.company.bs}
              </p>
            </div>
          </div>
        </CardContent>
      </div>
      <div className="pt-2 border-t border-border/50 px-6 pb-2">
        <span className="text-xs text-muted-foreground">ID: {contact.id}</span>
      </div>
    </Card>
  );
}