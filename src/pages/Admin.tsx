import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Eye, EyeOff, Loader, LogOut } from 'lucide-react';
import type { ContactSubmission } from '../types/database';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const ADMIN_PASSWORD = 'sh200429';

  const fetchSubmissions = async () => {
    try {
      console.log('Starting fetch...');
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*');

      console.log('Fetch response:', { data, error });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      if (!data) {
        console.log('No data received');
        setSubmissions([]);
        return;
      }

      console.log('Setting submissions:', data);
      setSubmissions(data);
    } catch (error) {
      console.error('Error in fetchSubmissions:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      try {
        const { data, error } = await supabase
          .from('contact_submissions')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        setIsAuthenticated(true);
        localStorage.setItem('adminAuth', 'true');
        setError('');
        setSubmissions(data || []);
      } catch (error) {
        console.error('Login error:', error);
        setError('Failed to fetch data');
      }
    } else {
      setError('Invalid password');
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = localStorage.getItem('adminAuth') === 'true';
      console.log('Initial auth check:', isAuth);
      
      if (isAuth) {
        try {
          console.log('Attempting to fetch submissions...');
          const { data, error } = await supabase
            .from('contact_submissions')
            .select('*')
            .order('created_at', { ascending: false });

          console.log('Fetch result:', { data, error });

          if (error) {
            console.error('Fetch error:', error);
            throw error;
          }

          setIsAuthenticated(true);
          setSubmissions(data || []);
          console.log('Submissions set:', data?.length || 0);
        } catch (error) {
          console.error('Auth check error:', error);
          localStorage.removeItem('adminAuth');
          setIsAuthenticated(false);
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <Loader className="h-8 w-8 animate-spin text-purple-400" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 rounded-2xl bg-gray-900">
          <h1 className="text-2xl font-bold text-white mb-6">Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-white text-gray-900 py-2 px-4 rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Contact Submissions</h1>
          <div className="flex gap-4">
            <button
              onClick={fetchSubmissions}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg"
            >
              Refresh
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('adminAuth');
                setIsAuthenticated(false);
                setSubmissions([]);
                window.location.reload();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
        <div className="space-y-6">
          {submissions.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              {isLoading ? 'Loading submissions...' : 'No submissions yet'}
            </div>
          ) : (
            submissions.map((submission) => (
              <div
                key={submission.id}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {submission.name}
                    </h3>
                    <a
                      href={`mailto:${submission.email}`}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      {submission.email}
                    </a>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(submission.created_at!).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-300">{submission.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
} 