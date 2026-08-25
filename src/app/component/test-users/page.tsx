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
        try {
          setEmails(JSON.parse(stored));
        } catch {
          setEmails([]);
        }
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
            className="text-xs transition-opacity hover:opacity-100"
            style={{ color: 'var(--text-secondary)', opacity: 0.6 }}
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
                  color: 'var(--text-primary)',
                }}
              >
                Beta Testing Program
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Become a <span className="gradient-text">Test User</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Join the beta testing program and be the first to experience and review new software builds
              </p>
            </div>

            <div
              className="rounded-2xl border p-8 max-w-xl mx-auto card-hover"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              {!submitted ? (
                <>
                  <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                    Enter your email to join the testing program. You&apos;ll receive early access to experimental builds, test flight invites, and release previews.
                  </p>
                  <div className="flex flex-col gap-3">
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && submitEmail()}
                      placeholder="your.email@example.com"
                      className="px-4 py-3 rounded-lg border text-sm focus:outline-none"
                      style={{
                        background: 'var(--bg-primary)',
                        borderColor: 'var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    />
                    <button
                      onClick={submitEmail}
                      className="py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] border"
                      style={{
                        background: 'var(--accent)',
                        borderColor: 'var(--border)',
                        color: 'var(--text-primary)',
                        boxShadow: '0 0 24px var(--accent-glow)',
                      }}
                    >
                      Join Beta Program
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center border"
                    style={{ background: 'var(--bg-primary)', borderColor: 'var(--border)' }}
                  >
                    <svg
                      className="w-8 h-8"
                      style={{ color: 'var(--text-primary)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Thank You!
                  </h3>
                  <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                    You&apos;ve been added to the beta testing program. We&apos;ll be in touch soon with testing updates!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-medium transition-opacity hover:opacity-80 underline"
                    style={{ color: 'var(--text-primary)' }}
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
            className="rounded-2xl border p-8 max-w-md mx-auto card-hover"
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
                className="px-4 py-3 rounded-lg border text-sm focus:outline-none"
                style={{
                  background: 'var(--bg-primary)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)',
                }}
              />
              <button
                onClick={handleAdminLogin}
                className="py-3 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 border"
                style={{
                  background: 'var(--accent)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)',
                }}
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
                Manage registered test user emails
              </p>
            </div>

            <div
              className="rounded-2xl border p-8"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              {emails.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Total Test Users: {emails.length}
                    </h3>
                    <button
                      onClick={clearAllEmails}
                      className="text-xs px-3 py-1.5 rounded border transition-opacity hover:opacity-80"
                      style={{
                        background: 'var(--bg-primary)',
                        borderColor: 'var(--border)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="max-h-96 overflow-y-auto space-y-2 mb-6">
                    {emails.map((email, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between px-4 py-2.5 rounded-lg border"
                        style={{ background: 'var(--bg-primary)', borderColor: 'var(--border)' }}
                      >
                        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          {email}
                        </span>
                        <button
                          onClick={() => removeEmail(index)}
                          className="text-xs font-semibold px-2 py-1 rounded border transition-colors hover:bg-[var(--accent)]"
                          style={{
                            background: 'var(--bg-card)',
                            borderColor: 'var(--border)',
                            color: 'var(--text-primary)',
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={generateCSV}
                    className="w-full py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] border"
                    style={{
                      background: 'var(--accent)',
                      borderColor: 'var(--border)',
                      color: 'var(--text-primary)',
                      boxShadow: '0 0 24px var(--accent-glow)',
                    }}
                  >
                    Export as CSV ({emails.length} {emails.length === 1 ? 'email' : 'emails'})
                  </button>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    No test users yet. Share the public form to collect beta tester emails.
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