'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ArrowRight, Phone, Mail, Globe, Filter, ArrowUpDown, Zap, ExternalLink } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';

export default function Home() {
  const description = "A modern, responsive contact management application built with Next.js and TypeScript. Browse, search, and discover your professional network.";
  const typedText = useTypewriter(description, 30, 500); // 30ms per character, 500ms initial delay

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Hero Section */}
          <div className="space-y-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:shadow-xl hover:rotate-6">
              <Users className="h-10 w-10 text-primary-foreground animate-pulse" />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hover:from-primary/70 hover:to-primary transition-all duration-500">
                Contact Directory
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed hover:text-foreground transition-colors duration-300 min-h-[3em]">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <Link href="/contacts" className="inline-block">
              <Button size="lg" className="gap-2 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary/90 group">
                Browse Contacts
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg group-hover:text-blue-500 transition-colors">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center group-hover:text-foreground/80 transition-colors">
                  View comprehensive contact details including phone numbers, email addresses, and physical locations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg group-hover:text-green-500 transition-colors">Smart Search</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center group-hover:text-foreground/80 transition-colors">
                  Quickly find contacts by name, email, company, or username with our intelligent search functionality.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg group-hover:text-purple-500 transition-colors">Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center group-hover:text-foreground/80 transition-colors">
                  Perfectly optimized for all devices with a responsive layout that adapts to any screen size.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto bg-amber-100 dark:bg-amber-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Filter className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-lg group-hover:text-amber-500 transition-colors">Smart Filtering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center group-hover:text-foreground/80 transition-colors">
                  Filter contacts by email domain, business type, and more with our advanced filtering system.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto bg-rose-100 dark:bg-rose-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ArrowUpDown className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                </div>
                <CardTitle className="text-lg group-hover:text-rose-500 transition-colors">Clever Sorting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center group-hover:text-foreground/80 transition-colors">
                  Sort contacts by multiple criteria including name, username, email, company, and more.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto bg-sky-100 dark:bg-sky-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ExternalLink className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <CardTitle className="text-lg group-hover:text-sky-500 transition-colors">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center group-hover:text-foreground/80 transition-colors">
                  Direct links to Google Maps locations, company websites, and social profiles.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Technology Section */}
          <div className="space-y-8 mt-16">
            <h2 className="text-3xl font-bold">Built with Modern Technology</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                <Zap className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400" />
                <span>Next.js</span>
              </a>
              <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                <Zap className="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
                <span>TypeScript</span>
              </a>
              <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                <Zap className="h-5 w-5 text-teal-500 group-hover:text-teal-400" />
                <span>Tailwind CSS</span>
              </a>
              <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                <Zap className="h-5 w-5 text-purple-500 group-hover:text-purple-400" />
                <span>shadcn/ui</span>
              </a>
              <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                <Zap className="h-5 w-5 text-green-500 group-hover:text-green-400" />
                <span>Lucide Icons</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}