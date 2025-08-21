"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Palette,
  ArrowRight,
  Menu,
  X,
  Star,
  Clock
} from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">         
            <span className="text-xl font-bold text-slate-900"> Doodle</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
                  Features
                </Button>
              
              </div>
              <div className="flex items-center space-x-4">
                <Button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-700 hover:to-green-800" onClick={() => router.push('/home')}>
                  Get Started for Free
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

  
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              <Button variant="ghost" className="w-full justify-start">
                Features
              </Button>
             
              <div className="pt-4 space-y-3 border-t">
                <Button variant="outline" className="w-full"onClick={() => router.push('/signin')}>
                  Sign in
                </Button>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-800" onClick={() => router.push('/signup')}>
                  Get Started for Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-8 bg-green-100 text-green-700 hover:bg-green-200">
              <Star className="w-4 h-4 mr-2 fill-current" />
              #1 Whiteboard Tool
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8">
              Draw Freely
              <br />
              <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                visually together
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Doodle is a free whiteboarding platform that allows anyone to
              brainstorm, plan, and create in canvas from anywhere in the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 px-8"
                onClick={() => router.push('/home')}
              >
                Try without Signup
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything you need to create
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Powerful features designed to make drawing seamless and productive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Built for speed with optimized performance. No lag, no delays - just smooth collaboration.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Rich Drawing Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Express your ideas with a complete set of drawing tools, shapes, and templates.
                </CardDescription>
              </CardContent>
            </Card>


            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-200 to-green-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-900 to-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">No SignUp Needed</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Start drawing instantly without any registration. Just do guest login and begin creating.
                </CardDescription>
              </CardContent>
            </Card>

           
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by teams worldwide
            </h2>
            <p className="text-lg text-slate-600">
              See what our customers have to say about Doodle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Doodle has transformed how our remote team collaborates. The real-time features are incredible!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    S
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Sarah Chen</p>
                    <p className="text-sm text-slate-500">Product Manager, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "The drawing tools are intuitive and powerful. We use it for everything from brainstorming to project planning."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Mike Rodriguez</p>
                    <p className="text-sm text-slate-500">Design Lead, StartupXYZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Simple to use but incredibly powerful. Our productivity has increased significantly since switching to Doodle."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Alex Thompson</p>
                    <p className="text-sm text-slate-500">CEO, InnovateLab</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

  

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Doodle</span>
              </div>
              <p className="text-slate-400">
                The collaborative whiteboarding platform
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto text-slate-400 hover:text-white">Features</Button></li>
              </ul>
            </div>

          

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto text-slate-400 hover:text-white">Help Center</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-slate-400 hover:text-white">Community</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-slate-400 hover:text-white">Privacy</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-slate-400 hover:text-white">Terms</Button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Doodle. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}