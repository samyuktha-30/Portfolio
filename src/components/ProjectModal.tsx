import { useState } from 'react';
import { X, CheckCircle2, Terminal, Play, Layers, ShieldCheck, Activity, Copy, Check } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'api' | 'demo'>('overview');
  const [demoOutput, setDemoOutput] = useState<string | null>(null);
  const [simulating, setSimulating] = useState(false);
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  if (!project) return null;

  const handleSimulateEndpoint = (path: string) => {
    setSimulating(true);
    setDemoOutput(null);
    setTimeout(() => {
      setSimulating(false);
      if (path.includes('login')) {
        setDemoOutput(JSON.stringify({ status: 200, message: "Authentication successful", role: "Resident_Admin", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", expires_in: "3600s" }, null, 2));
      } else if (path.includes('roster')) {
        setDemoOutput(JSON.stringify({ status: 200, count: 186, occupancy_rate: "82.3%", active_maintenance_due: 4, timestamp: new Date().toISOString() }, null, 2));
      } else if (path.includes('nasa-power')) {
        setDemoOutput(JSON.stringify({ status: 200, coordinates: [13.0827, 80.2707], solar_irradiance: "5.42 kWh/m2/day", soil_temp_10cm: "27.4C", precipitation_prob: "14%" }, null, 2));
      } else if (path.includes('recommend')) {
        setDemoOutput(JSON.stringify({ status: 200, recommended_crop: "Millet / Organic Cotton", optimal_irrigation_window: "05:30 - 08:00 AM", soil_nitrogen_status: "Sufficient", yield_index: "94.2%" }, null, 2));
      } else if (path.includes('register-token')) {
        setDemoOutput(JSON.stringify({ status: 200, device: "FCM_Client_Android_14", push_enabled: true, latency_ms: 18 }, null, 2));
      } else {
        setDemoOutput(JSON.stringify({ status: 200, success: true, payload_sync: "Complete", execution_time: "32ms" }, null, 2));
      }
    }, 450);
  };

  const copyToClipboard = (text: string, path: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(path);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#131b2e] border border-[#908fa0]/25 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#dae2fd]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0e1629] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#222a3d] text-[#4cd7f6] border border-white/5">
              {project.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-md">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#908fa0] hover:text-white hover:bg-[#222a3d] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="px-6 py-2 bg-[#171f33]/80 border-b border-white/5 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#4cd7f6] text-[#003640] font-semibold'
                : 'text-[#c7c4d7] hover:bg-[#222a3d]'
            }`}
          >
            System Overview
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'api'
                ? 'bg-[#4cd7f6] text-[#003640] font-semibold'
                : 'text-[#c7c4d7] hover:bg-[#222a3d]'
            }`}
          >
            API Endpoints &amp; Architecture
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'demo'
                ? 'bg-[#4cd7f6] text-[#003640] font-semibold'
                : 'text-[#c7c4d7] hover:bg-[#222a3d]'
            }`}
          >
            Live Endpoint Simulator
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Image banner */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video max-h-72 w-full bg-[#0b1326]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-[#0b1326]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#4edea3] border border-white/10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
                  <span>{project.statusBadge}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-mono text-[#908fa0] uppercase tracking-wider mb-2">
                  System Specification
                </h4>
                <p className="text-sm text-[#dae2fd] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="text-xs font-mono text-[#908fa0] uppercase tracking-wider mb-3">
                  Architectural Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 bg-[#0e1629] p-3 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#dae2fd] leading-relaxed">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              {project.keyMetrics && (
                <div>
                  <h4 className="text-xs font-mono text-[#908fa0] uppercase tracking-wider mb-3">
                    Runtime Invariants &amp; Performance
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {project.keyMetrics.map((metric, i) => (
                      <div key={i} className="bg-[#0e1629] p-3 rounded-xl border border-white/5 text-center">
                        <div className="text-[10px] font-mono text-[#908fa0] uppercase mb-1">
                          {metric.label}
                        </div>
                        <div className="text-base font-extrabold text-[#4cd7f6] font-mono">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'api' && (
            <div className="space-y-6">
              {/* Architecture text */}
              <div className="bg-[#0e1629] p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#c0c1ff]">
                  <Layers className="w-4 h-4 text-[#4cd7f6]" />
                  <span>Architecture Deep Dive</span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  {project.architectureOverview}
                </p>
              </div>

              {/* Endpoints Table */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-mono text-[#908fa0] uppercase tracking-wider">
                    Core REST / Service Endpoints
                  </h4>
                  <span className="text-xs font-mono text-[#4edea3]">
                    ● Documented &amp; Tested
                  </span>
                </div>

                <div className="space-y-2.5">
                  {project.endpoints?.map((ep, i) => (
                    <div
                      key={i}
                      className="bg-[#0e1629] p-3.5 rounded-xl border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-[#4cd7f6]/40 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                              ep.method === 'GET'
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : ep.method === 'POST'
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'bg-purple-500/20 text-purple-400'
                            }`}
                          >
                            {ep.method}
                          </span>
                          <span className="text-xs font-mono text-white font-semibold">
                            {ep.path}
                          </span>
                        </div>
                        <p className="text-xs text-[#94a3b8]">
                          {ep.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => copyToClipboard(ep.path, ep.path)}
                          className="p-1.5 rounded-md bg-[#222a3d] text-[#c7c4d7] hover:text-white hover:bg-[#31394d] text-xs font-mono flex items-center gap-1 cursor-pointer"
                          title="Copy path"
                        >
                          {copiedEndpoint === ep.path ? (
                            <Check className="w-3.5 h-3.5 text-[#4edea3]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          onClick={() => {
                            setActiveTab('demo');
                            handleSimulateEndpoint(ep.path);
                          }}
                          className="px-2.5 py-1 rounded-md bg-[#4cd7f6]/10 text-[#4cd7f6] hover:bg-[#4cd7f6]/20 text-xs font-mono flex items-center gap-1 cursor-pointer border border-[#4cd7f6]/20"
                        >
                          <Play className="w-3 h-3" />
                          <span>Simulate</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#908fa0]">
                  Select an endpoint to execute in the sandbox:
                </span>
                <span className="text-xs font-mono text-[#4cd7f6]">
                  Status: Ready
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.endpoints?.map((ep, i) => (
                  <button
                    key={i}
                    onClick={() => handleSimulateEndpoint(ep.path)}
                    className="p-2.5 text-left rounded-lg bg-[#0e1629] border border-white/5 hover:border-[#4cd7f6]/40 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#222a3d] text-[#4cd7f6] font-bold">
                        {ep.method}
                      </span>
                      <span className="text-xs font-mono text-white group-hover:text-[#4cd7f6] transition-colors truncate">
                        {ep.path}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#908fa0] truncate">
                      {ep.desc}
                    </p>
                  </button>
                ))}
              </div>

              {/* Simulated Terminal Window */}
              <div className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-[#080d1a] shadow-inner">
                <div className="px-4 py-2 bg-[#0e1629] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-xs font-mono text-[#908fa0] ml-2">
                      terminal — {project.id}
                    </span>
                  </div>
                  <Terminal className="w-3.5 h-3.5 text-[#908fa0]" />
                </div>

                <div className="p-4 font-mono text-xs overflow-x-auto min-h-36">
                  {simulating ? (
                    <div className="flex items-center gap-2 text-[#4cd7f6]">
                      <Activity className="w-4 h-4 animate-spin" />
                      <span>Sending payload &amp; computing response metrics...</span>
                    </div>
                  ) : demoOutput ? (
                    <pre className="text-[#34d399] leading-relaxed">
                      {demoOutput}
                    </pre>
                  ) : (
                    <p className="text-[#908fa0] italic">
                      Click any endpoint above to execute a live simulation and inspect the structured JSON response.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#0e1629] border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#908fa0]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4edea3]" />
            <span>Tested &amp; Production Verified</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-medium bg-[#222a3d] text-white hover:bg-[#31394d] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
