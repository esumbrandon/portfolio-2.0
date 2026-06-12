'use client';
import { useState, useEffect } from 'react';

export default function TestUsersSection() {
  const [userEmail, setUserEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [emails, setEmails] = useState<string[]>([]);

  // Load emails from localStorage on mount (admin only)
  useEffect(() => {
    if (isAuthenticated) {
      const stored = localStorage.getItem('testUserEmails');
      if (stored) {
        setEmails(JSON.parse(stored));
      }
    }
  }, [isAuthenticated]);

  const submitEmail = () => {
    if (userEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      // Store email in localStorage
      const stored = localStorage.getItem('testUserEmails');
      const existingEmails = stored ? JSON.parse(stored) : [];
      const updatedEmails = [...existingEmails, userEmail];
      localStorage.setItem('testUserEmails', JSON.stringify(updatedEmails));

      setSubmitted(true);
      setUserEmail('');
    }
  };

  const handleAdminLogin = () => {
    // Simple password check - change 'admin123' to your preferred password
    if (adminPassword === '872461') {
      setIsAuthenticated(true);
      setAdminPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const removeEmail = (index: number) => {
    const updatedEmails = emails.filter((_, i) => i !== index);
    setEmails(updatedEmails);
    localStorage.setItem('testUserEmails', JSON.stringify(updatedEmails));
  };

  const generateCSV = () => {
    const csvContent = 'Email Address\n' + emails.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `test-users-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearAllEmails = () => {
    if (confirm('Are you sure you want to clear all test user emails?')) {
      setEmails([]);
      localStorage.removeItem('testUserEmails');
    }
  };

  return (
    <section
      id="test-users"
      className="py-32 border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Toggle between public and admin mode */}
        <div className="text-right mb-4">
          <button
            onClick={() => {
              setAdminMode(!adminMode);
              setIsAuthenticated(false);
            }}
            className="text-xs opacity-30 hover:opacity-60 transition-opacity"
            style={{ color: 'var(--text-secondary)' }}
          >
            {adminMode ? '← Back to Public View' : 'Admin'}
          </button>
        </div>

        {!adminMode ? (
          // ========== PUBLIC VIEW ==========
          <>
            <div className="text-center mb-16">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--accent-light)',
                }}
              >
                Beta Testing
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Become a <span className="gradient-text">Test User</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Join our beta testing program and be the first to try new features
              </p>
            </div>

            <div
              className="rounded-2xl border p-8 max-w-xl mx-auto"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              {!submitted ? (
                <>
                  <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                    Enter your email to join our test program. You&apos;ll receive updates and early access to new features.
                  </p>
                  <div className="flex flex-col gap-3">
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && submitEmail()}
                      placeholder="your.email@example.com"
                      className="px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      style={{
                        background: 'var(--bg-secondary)',
                        borderColor: 'var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    />
                    <button
                      onClick={submitEmail}
                      className="py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent), #4f46e5)',
                        boxShadow: '0 0 32px var(--accent-glow)',
                      }}
                    >
                      Join Beta Program
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.1)' }}>
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Thank You!
                  </h3>
                  <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                    You&apos;ve been added to our beta testing program. We&apos;ll be in touch soon!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-purple-400 hover:text-purple-300"
                  >
                    Submit another email
                  </button>
                </div>
              )}
            </div>
          </>
        ) : !isAuthenticated ? (
          // ========== ADMIN LOGIN ==========
          <div
            className="rounded-2xl border p-8 max-w-md mx-auto"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
              Admin Access
            </h3>
            <div className="flex flex-col gap-3">
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
                placeholder="Enter admin password"
                className="px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{
                  background: 'var(--bg-secondary)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)',
                }}
              />
              <button
                onClick={handleAdminLogin}
                className="py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: 'var(--accent)' }}
              >
                Login
              </button>
            </div>
          </div>
        ) : (
          // ========== ADMIN PANEL ==========
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">
                <span className="gradient-text">Admin Panel</span>
              </h2>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Manage test user emails
              </p>
            </div>

            <div
              className="rounded-2xl border p-8"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              {emails.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      Total Test Users: {emails.length}
                    </h3>
                    <button
                      onClick={clearAllEmails}
                      className="text-xs text-red-400 hover:text-red-300"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="max-h-96 overflow-y-auto space-y-2 mb-6">
                    {emails.map((email, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between px-4 py-2.5 rounded-lg border"
                        style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
                      >
                        <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                          {email}
                        </span>
                        <button
                          onClick={() => removeEmail(index)}
                          className="text-red-400 hover:text-red-300 text-sm font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={generateCSV}
                    className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent), #4f46e5)',
                      boxShadow: '0 0 32px var(--accent-glow)',
                    }}
                  >
                    Export as CSV ({emails.length} {emails.length === 1 ? 'email' : 'emails'})
                  </button>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    No test users yet. Share the public form to collect emails.
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

