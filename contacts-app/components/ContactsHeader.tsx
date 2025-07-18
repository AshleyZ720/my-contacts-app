'use client';

import { Search, SlidersHorizontal, ArrowUpDown, Home } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface ContactsHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  contactCount: number;
  sortBy: string;
  onSortChange: (value: string) => void;
  filterBy: string;
  onFilterChange: (value: string) => void;
}

export function ContactsHeader({
  searchTerm,
  onSearchChange,
  contactCount,
  sortBy,
  onSortChange,
  filterBy,
  onFilterChange
}: ContactsHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Navigation */}

      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Contacts
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse and search through your contact directory. Find colleagues, friends, and business partners all in one place.
        </p>
      </div>

      {/* Search and Controls */}
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 h-12 text-base bg-white/10 backdrop-blur-md border-white/20 text-black placeholder:text-gray-400 focus:border-purple-400/50 focus:bg-white/15 transition-all duration-300"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4 text-gray-400" />
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger className="w-40 bg-white/10 backdrop-blur-md border-white/20 text-gray-400 focus:border-purple-400/50">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800/95 backdrop-blur-md border-white/20">
                <SelectItem value="name" className="text-white hover:bg-white/10">Name A-Z</SelectItem>
                <SelectItem value="name-desc" className="text-white hover:bg-white/10">Name Z-A</SelectItem>
                <SelectItem value="username" className="text-white hover:bg-white/10">Username A-Z</SelectItem>
                <SelectItem value="username-desc" className="text-white hover:bg-white/10">Username Z-A</SelectItem>
                <SelectItem value="email" className="text-white hover:bg-white/10">Email A-Z</SelectItem>
                <SelectItem value="company" className="text-white hover:bg-white/10">Company A-Z</SelectItem>
                <SelectItem value="city" className="text-white hover:bg-white/10">City A-Z</SelectItem>
                <SelectItem value="id" className="text-white hover:bg-white/10">ID (Low to High)</SelectItem>
                <SelectItem value="id-desc" className="text-white hover:bg-white/10">ID (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-gray-400" />
            <Select value={filterBy} onValueChange={onFilterChange}>
              <SelectTrigger className="w-40 bg-white/10 backdrop-blur-md border-white/20 text-gray-400 focus:border-purple-400/50">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800/95 backdrop-blur-md border-white/20">
                <SelectItem value="all" className="text-white hover:bg-white/10">All Contacts</SelectItem>
                <SelectItem value="favorites" className="text-white hover:bg-white/10">Favorites</SelectItem>
                <SelectItem value="gmail" className="text-white hover:bg-white/10">Gmail Users</SelectItem>
                <SelectItem value="business" className="text-white hover:bg-white/10">Business (.biz)</SelectItem>
                <SelectItem value="org" className="text-white hover:bg-white/10">Organizations (.org)</SelectItem>
                <SelectItem value="net" className="text-white hover:bg-white/10">Network (.net)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filters */}
        {(searchTerm || sortBy !== 'name' || filterBy !== 'all') && (
          <div className="flex flex-wrap gap-2 justify-center">
            {searchTerm && (
              <Badge variant="secondary" className="bg-purple-600 text-white border-purple-700 hover:text-purple-300">
                Search: "{searchTerm}"
              </Badge>
            )}
            {sortBy !== 'name' && (
              <Badge variant="secondary" className="bg-blue-600 text-white border-blue-700 hover:text-blue-300">
                Sort: {sortBy === 'name-desc' ? 'Name Z-A' : sortBy === 'id' ? 'ID (Low to High)' : sortBy === 'id-desc' ? 'ID (High to Low)' : sortBy === 'email' ? 'Email' : sortBy === 'company' ? 'Company' : sortBy === 'city' ? 'City' : sortBy === 'username' ? 'Username A-Z' : sortBy === 'username-desc' ? 'Username Z-A' : ''}
              </Badge>
            )}
            {filterBy !== 'all' && (
              <Badge variant="secondary" className="bg-green-600 text-white border-green-700 hover:text-green-300">
                Filter: {filterBy === 'gmail' ? 'Gmail' : filterBy === 'business' ? 'Business' : filterBy === 'org' ? 'Organizations' : filterBy === 'favorites' ? 'Favorites' : 'Network'}
              </Badge>
            )}
          </div>
        )}
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Showing {contactCount} contact{contactCount !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
}