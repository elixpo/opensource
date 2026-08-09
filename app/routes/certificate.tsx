import React from 'react';
import { useParams } from 'react-router';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Certificate() {
  const { id } = useParams();

  return (
    <div className="container section max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Verifiable Certificate</h1>
        <p className="text-secondary">This certificate guarantees the contribution history and skills of the earner.</p>
      </div>

      <div className="bg-panel border border-subtle rounded-xl p-2 md:p-8 relative shadow-xl mx-auto">
        <Card className="border-4 border-[var(--border-gateway)] bg-base overflow-hidden relative min-h-[500px] flex flex-col justify-center items-center text-center p-8 md:p-16">
          {/* Certificate Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--accent-flag) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[var(--accent-flag)]"></div>
          <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[var(--accent-flag)]"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[var(--accent-flag)]"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[var(--accent-flag)]"></div>

          <div className="relative z-10 w-full">
            <div className="flex justify-center mb-8">
              <div className="font-bold text-2xl flex items-center gap-2">
                <img src="/logo.png" alt="Elixpo Logo" className="w-12 h-12" />
                Elixpo Opensource
              </div>
            </div>
            
            <div className="text-sm uppercase tracking-widest text-secondary mb-8">Certificate of Achievement</div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-mono">karan_dev</h2>
            
            <p className="text-lg text-secondary max-w-xl mx-auto mb-10">
              Has successfully achieved the rank of <strong className="text-flag">Core Maintainer</strong> within the Elixpo Opensource Ecosystem, demonstrating exceptional skills in <strong>TypeScript, React, and Open-Source Collaboration</strong>.
            </p>
            
            <div className="flex justify-between items-end w-full px-4 md:px-12 mt-12 border-t border-subtle pt-8">
              <div className="text-left">
                <div className="text-sm font-bold text-primary">Elixpo Organization</div>
                <div className="text-xs text-muted">Issued: October 14, 2026</div>
              </div>
              <div className="text-right flex flex-col items-end">
                <div className="w-16 h-16 bg-white p-1 mb-2">
                  {/* Mock QR Code */}
                  <div className="w-full h-full bg-black flex items-center justify-center text-white text-[8px]">QR</div>
                </div>
                <div className="text-[10px] text-muted font-mono">ID: {id || 'ELX-9982-A'}</div>
              </div>
            </div>
          </div>
        </Card>

        <div className="absolute -bottom-4 right-1/2 transform translate-x-1/2 md:translate-x-0 md:right-8 flex gap-2">
          <span className="bg-solo-bg border border-solo text-solo px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
            Blockchain Verified
          </span>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-12">
        <Button variant="secondary">Download PDF</Button>
        <Button variant="primary">Add to LinkedIn</Button>
      </div>
    </div>
  );
}
