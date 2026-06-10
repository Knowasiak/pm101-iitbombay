/**
 * slides/index.tsx
 * All 48 slides as React components, exported as an indexed array.
 */
import React from 'react';
import {
  SlideWrapper, Window90s, Dialog90s, Bullets,
  LogoGrid, Logo, QRPanel, ChestIcon, FlowArrow, ErrorDialog,
} from '../components/SlideComponents';
import type { SlideMetadata } from '../data/slides';

type SlideFC = React.FC<{ meta: SlideMetadata }>;

// ══════════════════════════════════════════════════════════════
// ACT 0 — HOOK
// ══════════════════════════════════════════════════════════════

const Slide01: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div style={{ width: '100%', maxWidth: 1180, display: 'flex', flexDirection: 'column', gap: 12 }}>

      {/* ── Top row: title + why panel ── */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'stretch' }}>

        {/* Main title */}
        <Window90s
          title="PM101.exe — Product Management 101"
          icon="/assets/icons/pixel/laptop.svg"
          menuItems={['File', 'View', 'Help']}
          statusLeft="ShARE Career Cell · IIT Bombay"
          statusRight="June 2026"
          style={{ flex: '0 0 auto', width: 340 }}
          accentColor="#00FF41"
        >
          <div style={{ padding: '14px 16px' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'clamp(1rem, 2vw, 1.55rem)', lineHeight: 1.45, color: 'var(--text-primary)', marginBottom: 10 }}>
              Foundations of<br />
              <span style={{ color: 'var(--matrix-green)', textShadow: '0 0 20px rgba(0,255,65,0.5)' }}>Product</span><br />
              Thinking.
            </div>
            <div className="divider90" />
            <p style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: 8, lineHeight: 1.65 }}>
              Build what people <em>actually</em> want.<br />
              Not what you <em>think</em> they want.
            </p>
            <div style={{ marginTop: 12, padding: '8px 10px', background: '#001500', border: '1px solid var(--matrix-dim)' }}>
              <div style={{ fontFamily: 'ShareTechMono', fontSize: '12px', color: 'var(--matrix-mid)', letterSpacing: 3, marginBottom: 3 }}>PRESENTER</div>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>ADITYA GAURAV</div>
              <div style={{ fontFamily: 'ShareTechMono', fontSize: '12px', color: 'var(--text-muted)' }}>Founder · Knowasiak · SF Bay Area</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginTop: 10 }}>
              {[{ n: '40', l: 'MINUTES' }, { n: '48', l: 'SLIDES' }, { n: '100+', l: 'COUNTRIES' }, { n: '0→1', l: 'JOURNEY' }].map(s => (
                <div key={s.n} style={{ textAlign: 'center', padding: '5px 4px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
                  <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-base)', color: 'var(--matrix-mid)' }}>{s.n}</div>
                  <div style={{ fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Window90s>

        {/* The honest why */}
        <Window90s
          title="WHY_THIS.exe — The Honest Reason You're Here"
          icon="/assets/icons/pixel/block_green.svg"
          statusLeft="read this first" statusRight="important"
          style={{ flex: 1 }}
        >
          <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>

            {/* The core insight */}
            <div style={{ padding: '10px 14px', background: '#1A0000', border: '2px solid rgba(217,83,79,0.5)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <img src="/assets/icons/pixel/block_green.svg" style={{ width: 20, height: 20, marginTop: 2, flexShrink: 0 }} alt="" />
              <div>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--btn-red)', marginBottom: 3 }}>THE BRUTAL TRUTH</div>
                <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', lineHeight: 1.65 }}>
                  You're at <strong style={{ color: 'var(--matrix-mid)' }}>one of the world's top engineering institutions.</strong><br />
                  You know how to <strong style={{ color: 'var(--text-primary)' }}>build.</strong> You will learn how to <strong style={{ color: 'var(--matrix-green)' }}>build the right thing.</strong>
                </div>
                <div style={{ fontFamily: 'ShareTechMono', fontSize: '13px', color: 'var(--text-muted)', marginTop: 5, fontStyle: 'italic' }}>
                  95% of products fail. Not because the code was bad. Because nobody needed them.
                </div>
              </div>
            </div>

            {/* Who this is for — two columns */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ padding: '9px 11px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 5 }}>IF YOU'RE A FRESHER</div>
                {[
                  'No bad habits yet. Perfect time.',
                  'Skip the 3-year learning curve.',
                  'Know what PMs actually do before your first internship.',
                  'Start with frameworks, not guesswork.',
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: 6, marginBottom: 3, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--matrix-green)', fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', flexShrink: 0 }}>›</span>
                    <span style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', lineHeight: 1.45 }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: '9px 11px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 5 }}>IF YOU'VE ALREADY BUILT</div>
                {[
                  'You\'ve done hackathons. Good.',
                  'Now learn why some of them went nowhere.',
                  'Fill the gap between "builds cool stuff" and "builds right stuff".',
                  'Product sense interviews await. Prepare now.',
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: 6, marginBottom: 3, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--matrix-green)', fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', flexShrink: 0 }}>›</span>
                    <span style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', lineHeight: 1.45 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Window90s>
      </div>

      {/* ── Bottom row: what you'll learn + career paths + what NOT to expect ── */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'stretch' }}>

        {/* What you'll walk away with */}
        <Window90s title="LEARNING_GOALS.exe — What You Take Home" icon="/assets/icons/pixel/star_pixel.svg"
          statusLeft="5 mental models" statusRight="0 fluff"
          style={{ flex: 2 }}>
          <div style={{ padding: '10px 14px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
            {[
              { n: '01', title: 'Validate First', desc: 'Talk to users before building. Always.' },
              { n: '02', title: 'Problem > Solution', desc: 'Fall in love with the problem, not your idea.' },
              { n: '03', title: 'Ship Fast', desc: 'Good enough and live beats perfect and never.' },
              { n: '04', title: 'Metrics First', desc: 'Define what success looks like before you start.' },
              { n: '05', title: 'Iterate Always', desc: 'V1 will be wrong. That\'s the point.' },
            ].map(m => (
              <div key={m.n} style={{ padding: '8px 9px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: '11px', color: 'var(--matrix-dim)', marginBottom: 3 }}>{m.n}</div>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: '12px', color: 'var(--matrix-mid)', marginBottom: 4, lineHeight: 1.3 }}>{m.title}</div>
                <div style={{ fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.4 }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </Window90s>

        {/* Where this skill takes you */}
        <Window90s title="CAREER_PATHS.exe — Where This Leads" icon="/assets/icons/pixel/rocket.svg"
          statusLeft="post-IIT tracks" statusRight="all need product thinking"
          style={{ flex: 1 }}>
          <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[
              { role: 'Product Manager', co: 'Google, Flipkart, Zepto, Razorpay…', hot: true },
              { role: 'Startup Founder', co: '0→1 survival depends on validation' },
              { role: 'SWE / SDE', co: 'Product sense rounds at every top company' },
              { role: 'VC / Analyst', co: 'Evaluating what will survive the market' },
              { role: 'Consultant', co: 'McKinsey, BCG, Bain love PM frameworks' },
            ].map(p => (
              <div key={p.role} style={{ display: 'flex', gap: 6, padding: '5px 8px', background: p.hot ? '#001A00' : 'var(--panel-bg-dark)', border: `1px solid ${p.hot ? 'var(--matrix-dim)' : 'var(--panel-border)'}`, alignItems: 'center' }}>
                <span style={{ fontFamily: 'Minecraft, monospace', fontSize: '12px', color: p.hot ? 'var(--matrix-green)' : 'var(--matrix-mid)', minWidth: 130, flexShrink: 0 }}>{p.role}</span>
                <span style={{ fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.3 }}>{p.co}</span>
              </div>
            ))}
            <div style={{ marginTop: 4, padding: '5px 8px', background: '#0A0800', border: '1px solid var(--matrix-dim)', fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--matrix-dim)', lineHeight: 1.5 }}>
              Every path above runs a product sense interview.<br />
              <strong style={{ color: 'var(--matrix-mid)' }}>This session is your prep.</strong>
            </div>
          </div>
        </Window90s>
      </div>

    </div>
  </SlideWrapper>
);

const Slide02: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div className="desktop-scene" style={{ width: '100%', maxWidth: 1300, justifyContent: 'center' }}>
      <Window90s title="SYSTEM_INFO.exe — Presenter Profile" icon="/assets/icons/pixel/star_pixel.svg"
        menuItems={['File', 'Edit', 'View']} statusLeft="Aditya Gaurav" statusRight="SF Bay Area, US"
        style={{ flex: 1, maxWidth: 660 }}>
        <div style={{ display: 'flex', gap: 16, padding: 8 }}>
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: 90, height: 90, border: '3px solid var(--matrix-dim)', overflow: 'hidden' }}>
              <img src="/assets/images/aditya_avatar.png" alt="Aditya Gaurav" className="photo" style={{ width: '100%', height: '100%', objectFit: 'cover', imageRendering: 'auto' }} />
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', marginBottom: 4 }}>Aditya Gaurav</div>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 10 }}>SF BAY AREA · US </div>
            <Bullets items={[
              '26× World Champion ',
              'Founder, Knowasiak Inc.',
              'Cognac Metaverse · SkuixStudios',
              'Speaker · Builder · Mentor, Startup World Cup',
            ]} />
          </div>
        </div>
        <div className="divider90" style={{ margin: '8px 0' }} />
        <div style={{ display: 'flex', gap: 8, padding: '0 4px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Logo name="knowasiak" ext="png" size={26} />
          <Logo name="cognac_metaverse" ext="png" size={26} />
          <Logo name="skuixstudios" ext="png" size={26} />
          <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', fontStyle: 'italic', marginLeft: 6 }}>
            "Turn work into reputation."
          </div>
        </div>
      </Window90s>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Dialog90s title="LINKS.exe" icon="/assets/icons/pixel/pixel_arrow.svg">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              { qr: 'linkedin', label: 'LinkedIn' },
              { qr: 'knowasiak', label: 'Knowasiak' },
              { qr: 'adityagaurav', label: 'Website' },
            ].map(l => <QRPanel key={l.qr} name={l.qr} label={l.label} size={64} />)}
          </div>
        </Dialog90s>
        <img src="/assets/images/iitb_real.png" alt="IIT Bombay" style={{ height: 48, objectFit: 'contain', imageRendering: 'auto', filter: 'none' }} />
      </div>
    </div>
  </SlideWrapper>
);

// ══════════════════════════════════════════════════════════════
// ACT 1 — HONEST TRUTH
// ══════════════════════════════════════════════════════════════

const Slide03: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="STAT_REPORT.exe — Why Products Actually Die"
      icon="/assets/icons/pixel/block_green.svg"
      statusLeft="CB Insights · 2024 · N=1,000+ startups" statusRight="POST-MORTEM DATA"
      style={{ maxWidth: 1100, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 20px', background: '#1A0000', border: '2px solid var(--btn-red)', flexShrink: 0 }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--btn-red)', lineHeight: 1 }}>95%</div>
            <div>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--btn-red)' }}>PRODUCTS FAIL</div>
              <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: 2 }}>Not because of bad code.</div>
              <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>Because nobody asked for them.</div>
            </div>
          </div>
          <div style={{ flex: 1, padding: '10px 14px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 6, letterSpacing: 2 }}>TOP FAILURE REASONS (ranked)</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 16px' }}>
              {[
                { pct: '42%', reason: 'No market need', funny: 'Built the solution to YOUR problem. Not theirs.' },
                { pct: '29%', reason: 'Ran out of cash', funny: '$50k on AWS. $0 on user research. Classic.' },
                { pct: '23%', reason: 'Wrong team', funny: 'Brilliant engineer. Could not sell ice in a desert.' },
                { pct: '19%', reason: 'Outcompeted', funny: 'Launched 3 months after a VC-backed clone. Ouch.' },
                { pct: '17%', reason: 'Bad pricing model', funny: '"Free tier forever" → no revenue → RIP' },
                { pct: '14%', reason: 'Poor product fit', funny: 'Users said "interesting" and never came back' },
                { pct: '13%', reason: 'Wrong timing', funny: '2 years too early = wrong. 2 years too late = dead.' },
                { pct: '10%', reason: 'Ignored user feedback', funny: '"I know my users better than my users."  — Famous last words' },
              ].map(r => (
                <div key={r.pct} style={{ padding: '5px 0', borderBottom: '1px solid var(--panel-border)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--btn-red)', minWidth: 34, flexShrink: 0 }}>{r.pct}</span>
                  <div>
                    <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>{r.reason}</div>
                    <div style={{ fontFamily: 'ShareTechMono', fontSize: '12px', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.3 }}>{r.funny}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[
            { icon: '/assets/icons/ui/x-circle.svg', label: 'Built without validation', detail: 'Idea → Code → Ship → Crickets' },
            { icon: '/assets/icons/ui/x-circle.svg', label: 'Solved a fake problem', detail: '"My 3 friends agreed it was a great idea"' },
            { icon: '/assets/icons/ui/check-circle.svg', label: 'The fix is simple', detail: 'Talk to 10–50 real users BEFORE writing a line of code', ok: true },
          ].map(c => (
            <div key={c.label} style={{ padding: '8px 12px', background: c.ok ? 'var(--matrix-darkest)' : '#1A0000', border: `1px solid ${c.ok ? 'var(--matrix-dim)' : 'rgba(217,83,79,0.35)'}`, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <img src={c.icon} style={{ width: 18, height: 18, marginTop: 2, flexShrink: 0 }} alt="" />
              <div>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: c.ok ? 'var(--matrix-mid)' : 'var(--btn-red)' }}>{c.label}</div>
                <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: 2 }}>{c.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide04: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="JOB_DESC.exe — What Does a PM Actually Do?"
      icon="/assets/icons/pixel/star_pixel.svg"
      statusLeft="Not a project manager." statusRight="Not an engineer."
      style={{ width: '100%', maxWidth: 1100 }}>
      <div style={{ padding: 14, display: 'flex', gap: 14 }}>

        {/* Left: PM's actual week */}
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 10, letterSpacing: 2 }}>A PM'S ACTUAL WEEK</div>
          {[
            { day: 'MON', task: 'User calls / discovery interviews', detail: 'Why are users churning? What pain are they screaming about? 5–10 calls/week minimum.' },
            { day: 'TUE', task: 'Sprint planning with engineers', detail: 'Prioritize this sprint. Write acceptance criteria. Defend the "why" behind every ticket.' },
            { day: 'WED', task: 'Write specs & PRDs', detail: 'What to build, why, and for whom. Not how. That\'s engineering\'s job.' },
            { day: 'THU', task: 'Unblock engineering & review designs', detail: 'Remove ambiguity. Make decisions fast. Slow PM = slow product.' },
            { day: 'FRI', task: 'Metrics review + stakeholder sync', detail: 'Did last week\'s feature move the needle? Report to leadership.' },
          ].map(d => (
            <div key={d.day} style={{ display: 'flex', gap: 10, padding: '7px 0', borderBottom: '1px solid var(--panel-border)', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-dim)', minWidth: 36, flexShrink: 0 }}>{d.day}</span>
              <div>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>{d.task}</div>
                <div style={{ fontFamily: 'ShareTechMono', fontSize: '12px', color: 'var(--text-muted)', marginTop: 2, lineHeight: 1.4 }}>{d.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: PM ≠ + PM = + quote */}
        <div style={{ width: 330, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ padding: '10px 12px', background: '#1A0000', border: '1px solid rgba(217,83,79,0.4)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--btn-red)', marginBottom: 6 }}>PM ≠ THESE THINGS</div>
            {[
              'Project Manager (completely different role)',
              'The person who writes the code',
              'The boss of engineers — they are peers',
              'The one who says yes to everything',
            ].map(t => (
              <div key={t} style={{ display: 'flex', gap: 6, marginBottom: 4, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--btn-red)', fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', flexShrink: 0 }}>✗</span>
                <span style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', lineHeight: 1.4 }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: '10px 12px', background: '#001500', border: '1px solid var(--matrix-dim)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 6 }}>PM = THIS</div>
            {[
              'CEO of the product (without the authority)',
              'Voice of the user inside the company',
              'Translate user pain → engineer tasks',
              'Own the outcome, not just the output',
            ].map(t => (
              <div key={t} style={{ display: 'flex', gap: 6, marginBottom: 4, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--matrix-green)', fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', flexShrink: 0 }}>›</span>
                <span style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', lineHeight: 1.4 }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: '8px 12px', background: '#0A0800', border: '2px solid var(--matrix-dim)' }}>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--matrix-dim)', fontWeight: 700, lineHeight: 1.55, fontStyle: 'italic' }}>
              "A PM's job is to figure out what to build, convince the team to build it, and make sure it solves the real problem."
            </div>
          </div>
        </div>

      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide05: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div style={{ position: 'relative', width: '100%', maxWidth: 900 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', width: '100%' }}>
        <Dialog90s title="ALERT.exe — The One Rule" icon="/assets/icons/pixel/shield.svg" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)', color: 'var(--matrix-mid)', lineHeight: 1.4, marginBottom: 12 }}>
            Talk. To. People. First.
          </div>
          <div className="divider90" />
          <p style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-base)', color: 'var(--text-muted)', marginTop: 10 }}>
            Before code. Before design. Before PRD.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 16 }}>
            <button className="btn90 ok lg">GOT IT</button>
          </div>
        </div>
      </Dialog90s>
      <ChestIcon type="gold" label="CORE CONCEPT UNLOCKED" size={36} />
      </div>
      <ChestIcon floating type="gold" label="BONUS TIP" tip="Record your user interviews on Loom. Watch them back. The patterns emerge in the silences, not just the answers." size={28} />
    </div>
  </SlideWrapper>
);

// ══════════════════════════════════════════════════════════════
// ACT 2 — IDEATION & VALIDATION
// ══════════════════════════════════════════════════════════════

const Slide06: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="SEARCH.exe — Problem First" icon="/assets/icons/pixel/rocket.svg"
      menuItems={['File', 'Object']} statusLeft="Fall in love with the problem." statusRight=""
      style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14, display: 'flex', gap: 20 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 10 }}>CORRECT PATH</div>
          <FlowArrow steps={['Problem ', 'Research ', 'Solution ', 'Build ', 'Ship ']} />
          <div style={{ marginTop: 10, padding: 8, background: 'var(--matrix-darkest)', border: '1px solid var(--matrix-dim)' }}>
            <span style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>[OK] Validated demand before line 1 of code</span>
          </div>
        </div>
        <div style={{ width: 1, background: 'var(--panel-border)' }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--btn-red)', marginBottom: 10 }}>WRONG PATH</div>
          <FlowArrow steps={['Cool idea ', 'Build ', 'Ship ', 'Crickets ']} color="var(--btn-red)" />
          <div style={{ marginTop: 10, padding: 8, background: '#1A0000', border: '1px solid var(--btn-red)' }}>
            <span style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--btn-red)' }}>[X] Solution looking for a problem</span>
          </div>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide07: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="MESSENGER.exe — User Research" icon="/assets/icons/pixel/laptop.svg"
      menuItems={['File', 'Edit', 'Object', 'Type']}
      statusLeft="16 Online" statusRight="3 New Messages"
      style={{ maxWidth: 980, width: '100%' }}>
      <div style={{ padding: 12 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 12 }}>
          TALK TO 10–50 PEOPLE BEFORE YOU BUILD
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { q: '"Would you pay for this?"', a: '"Honestly? Yes. My team wastes 2hr/day on this."', good: true },
            { q: '"What\'s your current solution?"', a: '"Excel. It\'s terrible but nothing better exists."', good: true },
            { q: '"Would this be useful?"', a: '"Maybe? I\'m not sure I have that problem..."', good: false },
          ].map((msg, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginBottom: 3 }}>You asked:</div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', marginBottom: 4, padding: '6px 10px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>{msg.q}</div>
              <div style={{ padding: '8px 12px', background: msg.good ? 'rgba(92,184,92,0.15)' : 'rgba(240,160,48,0.15)', border: `1px solid ${msg.good ? '#5CB85C' : 'var(--text-warning)'}`, fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>{msg.a}</div>
            </div>
          ))}
        </div>
        <div className="divider90" />
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', letterSpacing: 1 }}>
          RULE: If &gt;70% say YES unprompted → Build it.
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide08: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="DOCUMENT_1.txt — Product Requirements Doc"
      icon="/assets/icons/pixel/laptop.svg" menuItems={['File', 'Edit', 'Object', 'Type', 'Paragraph']}
      statusLeft="PRD · Keep it 1 page." statusRight="v1.0"
      style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: '10px 14px', display: 'flex', gap: 20 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 10 }}>WHAT A GOOD PRD HAS</div>
          {[
            { icon: '', label: 'Problem', desc: 'What pain exists?' },
            { icon: '', label: 'Users', desc: 'Who has this pain?' },
            { icon: '', label: 'Goal', desc: 'What does success look like?' },
            { icon: '', label: 'Non-goals', desc: 'What are we NOT building?' },
            { icon: '', label: 'Constraints', desc: 'Time, team, budget.' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', gap: 10, padding: '6px 0', borderBottom: '1px solid var(--panel-border)' }}>
              <span style={{ fontSize: 'var(--font-base)', width: 24, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <span style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', fontWeight: 700, color: 'var(--text-primary)' }}>{item.label}: </span>
                <span style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ width: 180 }}>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 8 }}>FREE TEMPLATES</div>
          <LogoGrid items={[
            { name: 'notion', label: 'Notion' },
            { name: 'linear', label: 'Linear' },
          ]} cols={2} />
          <div className="divider90" />
          <div style={{ padding: '8px', background: '#0A0800', border: '2px solid var(--matrix-dim)', marginTop: 8 }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-dim)' }}>RULE: 1 PAGE MAX</div>
            <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-dim)', marginTop: 4 }}>If it's longer, it's a novel, not a plan.</div>
          </div>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide09: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="CONTROL_PANEL.exe — Validate Before Building"
      icon="/assets/icons/pixel/database.svg" menuItems={['General', 'Options']}
      statusLeft="Demand check" statusRight=""
      style={{ maxWidth: 980, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 12 }}>
          LAUNCH BEFORE YOU BUILD — TEST DEMAND FIRST
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {[
            { icon: '', name: 'Waitlist Page', desc: 'Carrd or Notion. Collect emails. Ship later.' },
            { icon: '', name: 'Fake Door Test', desc: '"Buy Now" button. Track clicks. Build if clicks.' },
            { icon: '', name: 'Survey', desc: 'Tally or Typeform. 5 questions. Share in communities.' },
            { icon: '', name: 'Pre-sell', desc: 'Charge before building. If they pay, they want it.' },
          ].map(opt => (
            <div key={opt.name} style={{ padding: '10px 12px', background: 'var(--panel-bg-dark)', border: '2px solid var(--panel-border)' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                <span style={{ fontSize: 'var(--font-base)' }}>{opt.icon}</span>
                <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>{opt.name}</span>
              </div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>{opt.desc}</div>
            </div>
          ))}
        </div>
        <div className="divider90" />
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <QRPanel name="v0dev" label="tally.so" size={60} />
          <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>
            <strong>Tally.so</strong> — free forms that actually look good.
          </div>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide10: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="OPEN_FILE.exe — Validation Toolkit"
      icon="/assets/icons/pixel/laptop.svg" menuItems={['File', 'Edit', 'View']}
      statusLeft="All free to start" statusRight=""
      style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 12, letterSpacing: 2 }}>
          FREE TOOLS TO VALIDATE YOUR IDEA
        </div>
        <LogoGrid items={[
          { name: 'tally', label: 'Tally' },
          { name: 'typeform', label: 'Typeform' },
          { name: 'notion', label: 'Notion' },
          { name: 'carrd', label: 'Carrd' },
          { name: 'loom', label: 'Loom' },
          { name: 'airtable', label: 'Airtable' },
        ]} cols={6} />
        <div className="divider90" />
        <div style={{ display: 'flex', gap: 10 }}>
          <QRPanel name="figma" label="figma.com" size={64} />
          <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>
            <strong>Rule:</strong> Use the simplest tool that answers your question. Don't build a full app to test an idea.
          </div>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide11: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div style={{ position: 'relative', width: '100%' }}>
    <Window90s title="FLOW_CHART.exe — User Journey"
      icon="/assets/icons/pixel/database.svg" style={{ maxWidth: 1050, width: '100%' }}
      statusLeft="Where do users drop off?" statusRight="">
      <div style={{ padding: 14 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 14 }}>USER JOURNEY MAP</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 12 }}>
          {['Discover', 'Sign Up', '* Aha Moment', 'Habit', 'Refer'].map((step, i, arr) => (
            <React.Fragment key={step}>
              <div style={{
                padding: '10px 14px', background: i === 2 ? 'var(--matrix-dark)' : 'var(--panel-bg-dark)',
                border: `2px solid ${i === 2 ? '#3a8a3a' : 'var(--panel-border)'}`,
                fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', fontWeight: 700,
                color: i === 2 ? 'var(--matrix-green)' : 'var(--text-primary)',
                textAlign: 'center', minWidth: 100,
              }}>{step}</div>
              {i < arr.length - 1 && <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-md)', color: 'var(--matrix-green)', padding: '0 4px' }}>►</div>}
            </React.Fragment>
          ))}
        </div>
        <div style={{ padding: '10px 14px', background: '#1A0000', border: '2px solid var(--btn-red)', marginBottom: 10 }}>
          <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--btn-red)' }}>[!] MOST PRODUCTS DIE HERE: Sign Up → Aha Moment</span>
          <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', marginTop: 4 }}>
            Users don't understand the value fast enough. Simplify the onboarding.
          </div>
        </div>
        <div className="prog90">
          <div className="prog90-fill" style={{ width: '60%' }} />
        </div>
        <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: 4, letterSpacing: 2 }}>
          60% of users drop off before the Aha Moment (average app)
        </div>
      </div>
    </Window90s>
    <ChestIcon floating type="gold" label="BONUS TIP" tip="Map the user journey of an app you use every day. Write down exactly where YOU had your Aha Moment. Build your product to create that same feeling." size={28} />
    </div>
  </SlideWrapper>
);

// ══════════════════════════════════════════════════════════════
// ACT 3 — BUILD SMART
// ══════════════════════════════════════════════════════════════

const Slide12: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div style={{ display: 'flex', gap: '2vw', width: '100%', maxWidth: 1000, alignItems: 'flex-start', justifyContent: 'center' }}>
      <Window90s title="SYSTEM_ERROR.exe — Architecture Warning" icon="/assets/icons/pixel/shield.svg" style={{ flex: 1 }}
        accentColor="var(--matrix-mid)">
        <div style={{ padding: 14 }}>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'clamp(1rem, 2.5vw, 1.6rem)', color: 'var(--matrix-mid)', lineHeight: 1.5, marginBottom: 12 }}>
            Don't architect until<br />you have users.
          </div>
          <div className="divider90" />
          <Bullets items={[
            'YAGNI — You Aren\'t Gonna Need It',
            'Perfect code nobody uses = waste',
            'Ship, learn, then refactor',
            'Architecture follows growth',
          ]} />
        </div>
      </Window90s>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Dialog90s title="BEFORE.exe" icon="/assets/icons/pixel/star_pixel.svg">
          <div style={{ padding: 8 }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--btn-red)', marginBottom: 6 }}>[X] OVER-ENGINEERED (DAY 1)</div>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', lineHeight: 1.6 }}>
              Microservices<br/>Event sourcing<br/>Kubernetes cluster<br/>Multi-region DB<br/>→ 0 users, 3 months
            </div>
          </div>
        </Dialog90s>
        <Dialog90s title="AFTER.exe" icon="/assets/icons/pixel/star_pixel.svg">
          <div style={{ padding: 8 }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-dark)', marginBottom: 6 }}>[OK] LEAN (DAY 1)</div>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', lineHeight: 1.6 }}>
              1 file, SQLite<br/>Deployed on Vercel<br/>Built in 3 days<br/>→ 100 users, learning
            </div>
          </div>
        </Dialog90s>
      </div>
    </div>
  </SlideWrapper>
);

const Slide13: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="CONTROL_PANEL.exe — The Stack Spectrum"
      icon="/assets/icons/pixel/laptop.svg" style={{ maxWidth: 960, width: '100%' }}
      statusLeft="Start left. Move right when forced by scale." statusRight="">
      <div style={{ padding: 14 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 10, letterSpacing: 2 }}>
          SIMPLEST ──────────────────────────────────────── COMPLEX
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 6, marginBottom: 10 }}>
          {[
            { logos: ['html5', 'css3'], label: 'HTML\nCSS', level: 1, note: '' },
            { logos: ['javascript'], label: 'JS / AJAX', level: 2, note: 'Browser' },
            { logos: ['nodejs'], label: 'Node.js', level: 3, note: 'Server JS' },
            { logos: ['php', 'python'], label: 'PHP\nPython', level: 4, note: 'Backend' },
            { logos: ['vue', 'react'], label: 'Vue\nReact', level: 5, note: 'Frontend' },
            { logos: ['typescript'], label: 'TypeScript', level: 6, note: 'Typed JS' },
            { logos: ['postgresql', 'sqlite'], label: 'SQL\nDBs', level: 7, note: 'Data' },
            { logos: ['python'], label: 'R / ML', level: 8, note: 'Analysis' },
          ].map((col, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: 6, background: `rgba(0,204,51,${0.03 + i * 0.04})`, border: '1px solid var(--panel-border)' }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {col.logos.map(l => <Logo key={l} name={l} size={22} />)}
              </div>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', textAlign: 'center', whiteSpace: 'pre-line', lineHeight: 1.3 }}>{col.label}</div>
              {col.note && <div style={{ fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center' }}>{col.note}</div>}
              <div className="prog90" style={{ width: '100%', height: 5 }}>
                <div className="prog90-fill" style={{ width: `${(col.level / 8) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8, padding: '6px 10px', background: '#0A0800', border: '1px solid var(--matrix-dim)', marginBottom: 6 }}>
          <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-green)', whiteSpace: 'nowrap' }}>AJAX:</span>
          <span style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>Async data fetch without page reload. <code style={{ color: 'var(--matrix-mid)' }}>fetch()</code> or <code style={{ color: 'var(--matrix-mid)' }}>axios</code>. Every modern app uses it.</span>
        </div>
        <div style={{ padding: '6px 12px', background: '#0A0800', border: '2px solid var(--matrix-dim)' }}>
          <span style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', fontWeight: 700, color: 'var(--matrix-dim)' }}>
            Rule: Start left. Move right only when scale forces it. Architecture follows growth.
          </span>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide14: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="SEARCH.exe — Competitive Analysis in 20 Minutes"
      icon="/assets/icons/pixel/database.svg"
      statusLeft="Before you build a single feature." statusRight="20 MIN EXERCISE"
      style={{ maxWidth: 1050, width: '100%' }}>
      <div style={{ padding: 14, display: 'flex', gap: 14 }}>

        {/* Left: 4-step framework */}
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 10, letterSpacing: 2 }}>THE 4-STEP FRAMEWORK</div>
          {[
            { n: '01', step: 'Google the problem, not your solution', detail: 'Search "best tools for [problem]". Who already exists? That list IS your competitive landscape.' },
            { n: '02', step: 'Read their 1-star reviews', detail: 'App Store, Play Store, G2, Capterra, Reddit. Angry users = unmet needs = your product opportunity.' },
            { n: '03', step: 'Map the gaps', detail: 'What do all competitors lack? What do users beg for in every review thread? That gap is your brief.' },
            { n: '04', step: 'Find your wedge', detail: 'You don\'t need to beat everyone. Beat one competitor on one dimension for one segment.' },
          ].map(s => (
            <div key={s.n} style={{ display: 'flex', gap: 10, padding: '9px 0', borderBottom: '1px solid var(--panel-border)', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-lg)', color: 'var(--matrix-dim)', minWidth: 28, flexShrink: 0, lineHeight: 1 }}>{s.n}</span>
              <div>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>{s.step}</div>
                <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: 3, lineHeight: 1.5 }}>{s.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Where to look + real India example */}
        <div style={{ width: 290, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ padding: '10px 12px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 8 }}>WHERE TO LOOK</div>
            {[
              { source: 'App Store / Play Store', tip: 'Sort by "most critical" reviews first' },
              { source: 'G2.com / Capterra', tip: '1-star reviews = gold mine of pain' },
              { source: 'Reddit', tip: 'Search "[product] alternatives" or "[product] sucks"' },
              { source: 'Twitter/X search', tip: '"I wish [product] would..." or "hate [competitor]"' },
              { source: 'Blind / Glassdoor', tip: 'Enterprise product pain surfaces here' },
            ].map(s => (
              <div key={s.source} style={{ padding: '5px 0', borderBottom: '1px solid var(--panel-border)' }}>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: '12px', color: 'var(--text-primary)' }}>{s.source}</div>
                <div style={{ fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', marginTop: 1, lineHeight: 1.3 }}>{s.tip}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '10px 12px', background: '#001500', border: '1px solid var(--matrix-dim)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 6 }}>REAL INDIA EXAMPLE</div>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              Zepto read 1-star reviews of BigBasket:<br />
              <span style={{ color: 'var(--matrix-green)', fontStyle: 'italic' }}>"Why does delivery take 2 days?"</span><br />
              That complaint became the brief for 10-minute delivery. A review IS a product spec.
            </div>
          </div>
        </div>

      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide15: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%', maxWidth: 1050, alignItems: 'center' }}>
      <Window90s title="ROCKET.exe — Rapid Prototyping" icon="/assets/icons/pixel/rocket.svg"
        statusLeft="Zero to working UI in 10 minutes." statusRight=""
        style={{ width: '100%' }}>
        <div style={{ padding: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
            {[
              { logo: 'v0dev', name: 'v0.dev', desc: 'Describe UI → get React code', qr: 'v0dev' },
              { logo: 'bolt', name: 'Bolt.new', desc: 'Full-stack app from prompt', qr: 'bolt' },
              { logo: 'blink', name: 'blink.new', desc: 'One sentence → running app', qr: null },
              { logo: 'cursor', name: 'Cursor', desc: 'AI-powered VS Code', qr: 'cursor' },
              { logo: 'replit', name: 'Replit', desc: 'Code + deploy in browser', qr: null },
            ].map(tool => (
              <div key={tool.name} style={{ display: 'flex', gap: 10, padding: '10px 12px', background: 'var(--panel-bg-dark)', border: '2px solid var(--panel-border)' }}>
                <Logo name={tool.logo} size={36} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>{tool.name}</div>
                  <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', marginTop: 4 }}>{tool.desc}</div>
                </div>
                {tool.qr && <QRPanel name={tool.qr} size={48} />}
              </div>
            ))}
          </div>
        </div>
      </Window90s>
      <ChestIcon type="diamond" label="POWER MOVE: Build v1 in a day. Show real users tomorrow." size={32} />
    </div>
  </SlideWrapper>
);

const Slide16: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="STORAGE.exe — Database Strategy"
      icon="/assets/icons/pixel/laptop.svg" menuItems={['File', 'Edit', 'View']}
      statusLeft="Start simple. Migrate when needed." statusRight=""
      style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 12 }}>START HERE ─── MIGRATE WHEN FORCED</div>
        {[
          { logo: 'sqlite', name: 'SQLite', when: 'Local dev, MVP, &lt;1K users', color: 'var(--matrix-mid)' },
          { logo: 'supabase', name: 'Supabase', when: '1K–100K users, auth needed', color: 'var(--matrix-mid)' },
          { logo: 'firebase', name: 'Firebase', when: 'Mobile apps, realtime', color: 'var(--text-warning)' },
          { logo: 'postgresql', name: 'PostgreSQL', when: 'Scale, complex queries', color: 'var(--matrix-green)' },
          { logo: 'planetscale', name: 'PlanetScale', when: 'Millions of rows', color: 'var(--btn-red)' },
        ].map((db, i) => (
          <div key={db.name} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '8px 10px', marginBottom: 6, background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)', borderLeft: '6px solid var(--matrix-dim)' }}>
            <Logo name={db.logo} size={28} />
            <div style={{ flex: 1 }}>
              <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>{db.name}</span>
              <span style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginLeft: 12 }} dangerouslySetInnerHTML={{ __html: db.when }} />
            </div>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: db.color, letterSpacing: 2 }}>TIER {i + 1}</div>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
          <QRPanel name="supabase" label="supabase.com" size={64} />
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide17: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="CLOUD.exe — Free Hosting" icon="/assets/icons/pixel/star_pixel.svg"
      statusLeft="$0 to start, all of them." statusRight=""
      style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 12 }}>DEPLOY YOUR PRODUCT FOR FREE</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 12 }}>
          {[
            { logo: 'vercel', name: 'Vercel', desc: 'Frontend + Serverless', best: 'Next.js' },
            { logo: 'netlify', name: 'Netlify', desc: 'JAMstack + Forms', best: 'Static sites' },
            { logo: 'railway', name: 'Railway', desc: 'Full-stack, DB included', best: 'Node/Python' },
            { logo: 'cloudflare', name: 'Cloudflare', desc: 'Edge + CDN + Pages', best: 'Global speed' },
            { logo: 'supabase', name: 'Supabase', desc: 'Backend-as-a-Service', best: 'Auth + DB' },
            { logo: 'replit', name: 'Replit', desc: 'Code + Deploy in 1', best: 'Quick demos' },
          ].map(h => (
            <div key={h.name} style={{ padding: '10px 12px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <Logo name={h.logo} size={28} />
              <div>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>{h.name}</div>
                <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: 2 }}>{h.desc}</div>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginTop: 3 }}>BEST FOR: {h.best}</div>
              </div>
            </div>
          ))}
        </div>
        <QRPanel name="vercel" label="vercel.com" size={64} />
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide18: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="CONNECT.exe — API Integration 101"
      icon="/assets/icons/pixel/laptop.svg" style={{ maxWidth: 1050, width: '100%' }}
      statusLeft="How to call any external service" statusRight="">
      <div style={{ padding: 14 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 12 }}>
          3-STEP PATTERN — WORKS FOR EVERY API
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 12 }}>
          {[
            { n: '01', title: 'GET YOUR KEY', body: 'Sign up → Dashboard → API Keys. Store in .env file. NEVER in code.' },
            { n: '02', title: 'MAKE THE CALL', body: 'fetch() or axios. Pass key in headers. Await the response.' },
            { n: '03', title: 'HANDLE THE JSON', body: 'const data = await res.json(). Check for errors. Render the data.' },
          ].map(step => (
            <div key={step.n} style={{ padding: '10px 12px', background: 'var(--panel-bg-dark)', border: '2px solid var(--panel-border)', borderTop: '4px solid var(--matrix-mid)' }}>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-lg)', color: 'var(--matrix-dim)', lineHeight: 1 }}>{step.n}</div>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', margin: '4px 0' }}>{step.title}</div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>{step.body}</div>
            </div>
          ))}
        </div>
        <div className="code-block" style={{ marginBottom: 10 }}>
          <span className="cm">{'// .env file — git-ignored, never committed'}</span>{'\n'}
          <span className="kw">OPENAI_API_KEY</span>=sk-proj-...<br/>{'\n'}
          <span className="cm">{'// your component'}</span>{'\n'}
          <span className="kw">const</span> res = <span className="kw">await</span> fetch(<span className="str">'https://api.openai.com/v1/chat'</span>, {'{'}<br/>
          {'  '}<span className="str">headers</span>: {'{ Authorization: `Bearer ${'}process.env.OPENAI_API_KEY{'}` }'}<br/>
          {'}'});<br/>
          <span className="kw">const</span> data = <span className="kw">await</span> res.json();
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ flex: 1, padding: '8px 12px', background: '#1A0000', border: '1px solid rgba(217,83,79,0.4)' }}>
            <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--btn-red)' }}>[X] NEVER hardcode keys</span>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: 2 }}>const key = "sk-abc123..." — ONE GitHub push = key stolen</div>
          </div>
          <div style={{ flex: 1, padding: '8px 12px', background: 'var(--matrix-darkest)', border: '1px solid var(--matrix-dim)' }}>
            <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>[OK] .env + .gitignore</span>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: 2 }}>Add .env to .gitignore. Use Thunder Client (VS Code) to test APIs first.</div>
          </div>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide19: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="CALENDAR.exe — 7-Day 0→1 Sprint"
      icon="/assets/icons/pixel/star_pixel.svg" style={{ maxWidth: 1050, width: '100%' }}
      statusLeft="From idea to live product." statusRight="7 days">
      <div style={{ padding: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
          {[
            { day: 'MON', icon: '', task: 'Talk to 10 users' },
            { day: 'TUE', icon: '', task: 'Write 1-page PRD' },
            { day: 'WED', icon: '', task: 'Prototype in v0.dev' },
            { day: 'THU', icon: '', task: 'Build core feature' },
            { day: 'FRI', icon: '', task: 'Test with 3 users' },
            { day: 'SAT', icon: '', task: 'Fix top 3 issues' },
            { day: 'SUN', icon: '', task: 'Launch on PH / X' },
          ].map((d, i) => (
            <div key={d.day} style={{
              padding: '10px 6px', textAlign: 'center',
              background: i === 6 ? 'var(--matrix-dark)' : 'var(--panel-bg-dark)',
              border: i === 6 ? '2px solid var(--matrix-green)' : '1px solid var(--panel-border)',
            }}>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: i === 6 ? 'var(--matrix-green)' : 'var(--matrix-mid)', marginBottom: 4 }}>{d.day}</div>
              <div style={{ fontSize: 'var(--font-lg)', lineHeight: 1, marginBottom: 4 }}>{d.icon}</div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: i === 6 ? 'var(--matrix-green)' : 'var(--text-primary)', fontWeight: 700 }}>{d.task}</div>
            </div>
          ))}
        </div>
        <div className="divider90" />
        <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', fontWeight: 700, color: 'var(--matrix-mid)', textAlign: 'center' }}>
          Day 7: Live. Real users. Real feedback. Nothing theoretical.
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide20: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div style={{ position: 'relative', width: '100%', maxWidth: 980 }}>
    <Window90s title="CONTROL_PANEL.exe — Git Basics"
      icon="/assets/icons/pixel/star_pixel.svg" style={{ maxWidth: 980, width: '100%' }}
      statusLeft="Every change tracked. Nothing lost." statusRight="">
      <div style={{ padding: 14 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 14 }}>4 COMMANDS YOU MUST KNOW</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { cmd: 'git init', desc: 'Start tracking a project', when: 'Once per project' },
            { cmd: 'git add .', desc: 'Stage all changes', when: 'Before every commit' },
            { cmd: 'git commit -m "message"', desc: 'Save a checkpoint', when: 'Every feature/fix' },
            { cmd: 'git push origin main', desc: 'Upload to GitHub', when: 'Before sharing/deploying' },
          ].map(g => (
            <div key={g.cmd} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '8px 12px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
              <div className="inset90" style={{ minWidth: 260, fontSize: 'var(--font-xs)', fontFamily: 'ShareTechMono' }}>{g.cmd}</div>
              <div>
                <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', fontWeight: 700, color: 'var(--text-primary)' }}>{g.desc}</div>
                <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--matrix-green)', marginTop: 2 }}>WHEN: {g.when}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 10, alignItems: 'center' }}>
          <Logo name="github" size={36} />
          <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>
            <strong>GitHub</strong> = free backup + collaboration + portfolio. Use it from day 1.
          </div>
        </div>
      </div>
    </Window90s>
    <ChestIcon floating type="iron" label="BONUS TIP" tip="Commit to GitHub every single day — even if it's one line. Public commit history is proof of work that compounds over 12 months." size={28} />
    </div>
  </SlideWrapper>
);

// ══════════════════════════════════════════════════════════════
// ACT 4 — DESIGN
// ══════════════════════════════════════════════════════════════

const Slide21: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="PAINT.exe — One Design Language"
      icon="/assets/icons/pixel/star_pixel.svg" style={{ maxWidth: 1000, width: '100%' }}
      statusLeft="Consistency beats creativity. Always.">
      <div style={{ padding: 14 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 14 }}>RULE OF 3</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 14 }}>
          {[
            { n: '1', label: 'Font', desc: 'One typeface. Two weights max.' },
            { n: '2', label: 'Colors', desc: 'Primary + accent. Done.' },
            { n: '3', label: 'Spacing', desc: '8px grid. No exceptions.' },
          ].map(rule => (
            <div key={rule.n} style={{ padding: '14px 16px', background: 'var(--panel-bg-dark)', border: '2px solid var(--panel-border)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 36, color: 'var(--matrix-mid)', lineHeight: 1 }}>{rule.n}</div>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', margin: '6px 0 4px' }}>{rule.label}</div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>{rule.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ flex: 1, padding: '10px 14px', background: '#1A0000', border: '2px solid var(--btn-red)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--btn-red)', marginBottom: 4 }}>[X] 5 different fonts, rainbow colors, random spacing</div>
            <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)' }}>Feels like a <em>fever dream</em></div>
          </div>
          <div style={{ flex: 1, padding: '10px 14px', background: 'var(--matrix-darkest)', border: '2px solid var(--matrix-dim)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-dark)', marginBottom: 4 }}>[OK] 1 font, 2 colors, consistent spacing</div>
            <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)' }}>Feels <strong>professional and intentional</strong></div>
          </div>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide22: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="DOCUMENT.exe — UI Fundamentals"
      icon="/assets/icons/pixel/star_pixel.svg" style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {[
            { icon: '', name: 'Hierarchy', rule: 'Big = important. Small = detail.', tip: 'One heading. One action. Per screen.' },
            { icon: '', name: 'Contrast', rule: 'Dark on light. Light on dark.', tip: 'WCAG AA: 4.5:1 ratio minimum.' },
            { icon: '', name: 'Whitespace', rule: 'Empty space is not wasted space.', tip: 'If it looks crowded, double the padding.' },
            { icon: '', name: 'Alignment', rule: 'Left-align text. Always.', tip: 'Center only for titles and CTAs.' },
          ].map(rule => (
            <div key={rule.name} style={{ padding: '12px 14px', background: 'var(--panel-bg-dark)', border: '2px solid var(--panel-border)' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 'var(--font-md)' }}>{rule.icon}</span>
                <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>{rule.name}</span>
              </div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{rule.rule}</div>
              <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--matrix-green)' }}>» {rule.tip}</div>
            </div>
          ))}
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide23: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="TOOLBOX.exe — Free Design Tools"
      icon="/assets/icons/pixel/star_pixel.svg" style={{ maxWidth: 1000, width: '100%' }}
      statusLeft="All free. No excuses." statusRight="">
      <div style={{ padding: 14 }}>
        <LogoGrid items={[
          { name: 'figma', label: 'Figma' },
          { name: 'framer', label: 'Framer' },
          { name: 'canva', label: 'Canva' },
          { name: 'penpot', label: 'Penpot' },
          { name: 'whimsical', label: 'Whimsical' },
          { name: 'excalidraw', label: 'Excalidraw' },
        ]} cols={6} />
        <div className="divider90" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div style={{ padding: '10px 12px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>FIGMA (Start here)</div>
            <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: 4 }}>Industry standard. Free for 3 projects. Real-time collaboration.</div>
          </div>
          <div style={{ padding: '10px 12px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>FRAMER (When you're ready)</div>
            <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: 4 }}>Design → code → live site. No handoff needed.</div>
          </div>
        </div>
        <div style={{ marginTop: 10, display: 'flex', justifyContent: 'flex-end' }}>
          <QRPanel name="figma" label="figma.com" size={64} />
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide24: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="PREVIEW.exe — Show Your Product Before It's Perfect"
      icon="/assets/icons/pixel/star_pixel.svg"
      statusLeft="60s demo > 60-slide deck" statusRight="SHOW DON'T TELL"
      style={{ maxWidth: 1100, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 10 }}>

          <div>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 8 }}>PROTOTYPE & CLICK-THROUGH</div>
            {[
              { logo: 'framer', name: 'Framer', desc: 'Interactive prototypes. Looks real without code.' },
              { logo: 'figma', name: 'Figma Prototype', desc: 'Clickable wireframes in 10 minutes.' },
              { logo: 'whimsical', name: 'Whimsical', desc: 'User flow diagrams fast.' },
            ].map(t => (
              <div key={t.name} style={{ display: 'flex', gap: 8, padding: '7px', marginBottom: 6, background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
                <Logo name={t.logo} size={22} />
                <div>
                  <div style={{ fontFamily: 'Minecraft, monospace', fontSize: '12px', color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', marginTop: 2, lineHeight: 1.3 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 8 }}>SCREEN RECORDING</div>
            {[
              { logo: 'loom', name: 'Loom', desc: 'Free. Record face + screen. Share link instantly.' },
              { logo: 'screenstudio', name: 'ScreenStudio', desc: 'Cinematic quality screen recordings.' },
              { logo: 'figma', name: 'Figma Mirror', desc: 'Show prototype on a real phone live.' },
            ].map(t => (
              <div key={t.name} style={{ display: 'flex', gap: 8, padding: '7px', marginBottom: 6, background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
                <Logo name={t.logo} size={22} />
                <div>
                  <div style={{ fontFamily: 'Minecraft, monospace', fontSize: '12px', color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', marginTop: 2, lineHeight: 1.3 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 8 }}>AI VIDEO MOCKUPS</div>
            {[
              { logo: 'kling', name: 'Kling AI', desc: 'Cinematic AI video. Phone mockups. Free tier.' },
              { logo: 'ltx', name: 'LTX Video', desc: 'Fast local video generation. No cloud.' },
              { logo: 'veo', name: 'Veo 2 (Google)', desc: 'Best quality AI video. For final polish.' },
            ].map(t => (
              <div key={t.name} style={{ display: 'flex', gap: 8, padding: '7px', marginBottom: 6, background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
                <Logo name={t.logo} size={22} />
                <div>
                  <div style={{ fontFamily: 'Minecraft, monospace', fontSize: '12px', color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', marginTop: 2, lineHeight: 1.3 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div style={{ padding: '8px 12px', background: '#0A0800', border: '2px solid var(--matrix-dim)' }}>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', fontWeight: 700, color: 'var(--matrix-dim)', lineHeight: 1.55 }}>
              Rule: A 60-second product demo converts better than any pitch deck. Investors watch demos, not slides.
            </div>
          </div>
          <div style={{ padding: '8px 12px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: '12px', color: 'var(--matrix-mid)', marginBottom: 5 }}>TODAY'S EXERCISE</div>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', lineHeight: 1.5 }}>Open Loom → record 60s of your current project or idea. Share with 5 strangers. Their confusion = your next sprint backlog.</div>
          </div>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide25: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="INDIA.exe — PM Landscape: What Actually Matters Here"
      icon="/assets/icons/pixel/rocket.svg"
      statusLeft="India-specific context" statusRight="READ BEFORE PLACEMENT SEASON"
      style={{ maxWidth: 1100, width: '100%' }}>
      <div style={{ padding: 14, display: 'flex', gap: 14 }}>

        {/* Left: APM Programs */}
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 8, letterSpacing: 2 }}>APM PROGRAMS — APPLY EARLY, NOT AFTER PLACEMENT</div>
          {[
            { co: 'Google', prog: 'APM Program', note: 'Most competitive. Targets IIT/IIM final-years. Apply Sep–Nov. Resume screen is brutal.' },
            { co: 'Flipkart', prog: 'Flipkart Product Analyst', note: 'Strong IIT pipeline. E-commerce scale. Meesho/Myntra also worth checking.' },
            { co: 'Razorpay', prog: 'PM Internship', note: 'Fintech-first. They love structured problem-solvers and hustle culture.' },
            { co: 'Zepto / Blinkit', prog: 'Product roles (Q-commerce)', note: 'High ownership. Fast decisions. Chaos is the job. Great first PM experience.' },
            { co: 'PhonePe / CRED', prog: 'PM / APM', note: 'UPI + payments scale. Understanding India-first users is the biggest edge.' },
          ].map(p => (
            <div key={p.co} style={{ display: 'flex', gap: 10, padding: '7px 0', borderBottom: '1px solid var(--panel-border)', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Minecraft, monospace', fontSize: '12px', color: 'var(--matrix-green)', minWidth: 80, flexShrink: 0 }}>{p.co}</span>
              <div>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: '12px', color: 'var(--text-primary)' }}>{p.prog}</div>
                <div style={{ fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', marginTop: 1, lineHeight: 1.35 }}>{p.note}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: India-specific tactics + advantage */}
        <div style={{ width: 310, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ padding: '10px 12px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 8 }}>BUILD-IN-PUBLIC: INDIA TACTICS</div>
            {[
              { tip: 'LinkedIn > Twitter/X here', detail: 'Indian PM hiring happens on LinkedIn. Post your builds there, not just X.' },
              { tip: 'Product Hunt timing', detail: '12:01 AM PST = midnight IST. Schedule your launch accordingly.' },
              { tip: 'DPIIT Startup Registration', detail: 'Free. Zero tax for 3 years. Gateway to Startup India grants.' },
              { tip: 'IIT Alumni PM network', detail: 'Warm intros from seniors who are already PMs at Google, Swiggy etc. Ask early.' },
            ].map(t => (
              <div key={t.tip} style={{ padding: '5px 0', borderBottom: '1px solid var(--panel-border)' }}>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: '12px', color: 'var(--matrix-dim)' }}>{t.tip}</div>
                <div style={{ fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', marginTop: 1, lineHeight: 1.35 }}>{t.detail}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '10px 12px', background: '#001500', border: '1px solid var(--matrix-dim)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 6 }}>THE EDGE NO ONE FROM STANFORD HAS</div>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              You understand India-scale problems. 1.4B users. UPI-first, jugaad-first, internet-first rural behavior. That context is something you cannot learn in a classroom outside India. Use it.
            </div>
          </div>
        </div>

      </div>
    </Window90s>
  </SlideWrapper>
);

// ══════════════════════════════════════════════════════════════
// ACT 5 — AI / AUTOMATION
// ══════════════════════════════════════════════════════════════

const Slide26: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div className="desktop-scene" style={{ width: '100%', maxWidth: 1050, justifyContent: 'center' }}>
      <Window90s title="GEAR.exe — Automate First" icon="/assets/icons/pixel/database.svg" style={{ flex: 1 }}>
        <div style={{ padding: 14 }}>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-base)', color: 'var(--matrix-mid)', marginBottom: 14, lineHeight: 1.5 }}>
            1 person + automation<br />= small team output
          </div>
          <div className="divider90" />
          <Bullets items={[
            'Automate repetitive tasks day 1',
            'Email responses, data entry, deploys',
            'Save hours = ship faster',
            'Your competitor is doing this',
          ]} />
        </div>
      </Window90s>
      <Dialog90s title="EXAMPLES.exe" icon="/assets/icons/pixel/block_green.svg" style={{ width: 280 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 8 }}>
          {[
            { task: 'Form → Notion DB', time: '30 min setup → ∞ saved' },
            { task: 'New signup → Slack alert', time: '15 min setup' },
            { task: 'Weekly report → auto-send', time: '1hr setup → done forever' },
            { task: 'Code review → AI first pass', time: 'Already free' },
          ].map(e => (
            <div key={e.task} style={{ padding: '6px 8px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', fontWeight: 700, color: 'var(--text-primary)' }}>{e.task}</div>
              <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--matrix-green)', marginTop: 2 }}>{e.time}</div>
            </div>
          ))}
        </div>
      </Dialog90s>
    </div>
  </SlideWrapper>
);

const Slide27: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="FLOW.exe — n8n: Visual Automation"
      icon="/assets/icons/pixel/star_pixel.svg" style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14, display: 'flex', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
            <Logo name="n8n" size={36} />
            <div>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>n8n</div>
              <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', letterSpacing: 2 }}>SELF-HOSTED · OPEN SOURCE · FREE</div>
            </div>
          </div>
          <Bullets items={[
            'Connect 400+ apps visually',
            'Trigger on events (form, webhook, schedule)',
            'Run on your own server — private',
            'No code required',
          ]} />
          <div className="divider90" />
          <FlowArrow steps={['Trigger', 'Filter', 'Transform', 'Action']} />
        </div>
        <div>
          <QRPanel name="n8n" label="n8n.io" size={90} />
          <div style={{ marginTop: 8 }}>
            <ChestIcon type="diamond" label="vs Zapier: $0 self-hosted" size={28} />
          </div>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide28: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="CURSOR.exe — AI-Assisted Development"
      icon="/assets/icons/pixel/block_green.svg" style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 12 }}>
          {[
            { logo: 'cursor', name: 'Cursor', desc: 'AI-first VS Code. Tab = autocomplete entire blocks.', star: true },
            { logo: 'githubcopilot', name: 'GitHub Copilot', desc: 'In-editor AI. $10/mo or free for students.', star: false },
            { logo: 'opencode', name: 'OpenCode (opencode.ai)', desc: 'Terminal AI agent. Open source. Pair with Ollama = free+private.', star: false },
            { logo: 'replit', name: 'Replit AI', desc: 'Build + deploy in browser with AI.', star: false },
          ].map(t => (
            <div key={t.name} style={{ display: 'flex', gap: 10, padding: '10px 12px', background: 'var(--panel-bg-dark)', border: t.star ? '2px solid #446600' : '1px solid var(--panel-border)' }}>
              <Logo name={t.logo} size={32} />
              <div>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>{t.name} {t.star ? '★' : ''}</div>
                <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', marginTop: 4 }}>{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: '8px 12px', background: 'var(--matrix-darkest)', border: '2px solid var(--matrix-green)' }}>
          <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-green)' }}>RULE:</span>
          <span style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', marginLeft: 8 }}>
            Use AI for boilerplate. Own your logic. Never ship AI code you don't understand.
          </span>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide29: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div className="desktop-scene" style={{ width: '100%', maxWidth: 1000, justifyContent: 'center' }}>
      <Window90s title="TERMINAL.exe — Ollama: Local AI"
        icon="/assets/icons/pixel/star_pixel.svg" style={{ flex: 1 }}>
        <div style={{ padding: 14 }}>
          <div className="inset90" style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', padding: '10px 14px', marginBottom: 12 }}>
            $ ollama run llama3<br />
            <span style={{ color: 'var(--matrix-green)' }}>&gt;&gt;&gt; Ask me anything...</span>
          </div>
          <Bullets items={[
            'Runs on your laptop',
            'Private — zero data leaves',
            'Free forever',
            'Works offline',
          ]} />
          <div style={{ marginTop: 12, background: '#000800', border: '1px solid var(--matrix-dark)', borderLeft: '3px solid var(--matrix-mid)', padding: '8px 12px' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 4 }}>CUSTOM MODELFILE — Weighted Persona</div>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--matrix-green)', lineHeight: 1.8 }}>
              FROM llama3<br />
              PARAMETER temperature 0.2<br />
              <span style={{ color: '#88CC44' }}>SYSTEM "You are a PM coach. Be direct. No fluff."</span>
            </div>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: 4 }}>= Custom PM assistant. No training needed. Instant.</div>
          </div>
        </div>
      </Window90s>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Window90s title="MODELS.exe" icon="/assets/icons/pixel/star_pixel.svg" style={{ width: 260 }}>
          <div style={{ padding: 10 }}>
            {[
              { name: 'Llama 3.1 8B', use: 'General purpose' },
              { name: 'Mistral 7B', use: 'Code + speed' },
              { name: 'Phi-3 mini', use: 'Runs on anything' },
              { name: 'Gemma 2B', use: 'Ultra lightweight' },
            ].map(m => (
              <div key={m.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid var(--panel-border)' }}>
                <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>{m.name}</span>
                <span style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>{m.use}</span>
              </div>
            ))}
          </div>
        </Window90s>
        <QRPanel name="ollama" label="ollama.com" size={90} />
      </div>
    </div>
  </SlideWrapper>
);

const Slide30: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="NETWORK.exe — Cloud AI APIs"
      icon="/assets/icons/pixel/laptop.svg" style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 12 }}>
          PICK THE CHEAPEST MODEL THAT SOLVES YOUR PROBLEM
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 12 }}>
          {[
            { logo: 'openai', name: 'OpenAI GPT-4o', cost: '$$', quality: '*****', use: 'Complex reasoning' },
            { logo: 'anthropic', name: 'Claude 3.5', cost: '$$', quality: '*****', use: 'Long context + code' },
            { logo: 'gemini', name: 'Gemini Flash', cost: '$', quality: '****', use: 'Speed + images' },
            { logo: 'groq', name: 'Groq (Llama)', cost: 'FREE', quality: '***', use: 'Ultra fast inference' },
            { logo: 'together', name: 'Together AI', cost: '$', quality: '***', use: 'Open models cheap' },
            { logo: 'replicate', name: 'Replicate', cost: '$', quality: '***', use: 'Images + video' },
          ].map(m => (
            <div key={m.name} style={{ padding: '8px 10px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 4 }}>{m.name}</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: m.cost === 'FREE' ? 'var(--matrix-green)' : 'var(--text-muted)' }}>{m.cost}</span>
                <span style={{ fontSize: 'var(--font-xs)', color: 'var(--text-warning)' }}>{m.quality}</span>
              </div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: 2 }}>{m.use}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '8px 12px', background: '#0A0800', border: '2px solid var(--matrix-dim)' }}>
          <span style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', fontWeight: 700, color: 'var(--matrix-dim)' }}>
            Start with Groq (free) → move up only when quality isn't enough.
          </span>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide31: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div style={{ position: 'relative', width: '100%', maxWidth: 1000 }}>
    <Window90s title="VIDEO_GEN.exe — Local AI Video"
      icon="/assets/icons/pixel/laptop.svg" style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 12 }}>
          RUN VIDEO AI ON YOUR OWN MACHINE
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 12 }}>
          {[
            { name: 'ComfyUI', desc: 'Node-based AI workflow. Images + video. Free.', type: 'Local' },
            { name: 'Wan2.1', desc: 'State-of-art video gen. Open source.', type: 'Local' },
            { name: 'AnimateDiff', desc: 'Animate your own images. Stable Diffusion.', type: 'Local' },
            { name: 'Veo 2 (Google)', desc: 'Best quality. Google cloud. Paid.', type: 'Cloud' },
          ].map(t => (
            <div key={t.name} style={{ padding: '10px 12px', background: t.type === 'Local' ? 'rgba(0,204,51,0.08)' : 'rgba(0,100,200,0.08)', border: `2px solid ${t.type === 'Local' ? 'var(--matrix-mid)' : 'var(--matrix-dim)'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>{t.name}</span>
                <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: t.type === 'Local' ? '#5CB85C' : 'var(--matrix-mid)' }}>{t.type}</span>
              </div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>{t.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', padding: '8px 12px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
          Use case: Product demos, social content, prototype visualizations. All locally.
        </div>
      </div>
    </Window90s>
    <ChestIcon floating type="diamond" label="BONUS TIP" tip="Run: ollama run llama3 tonight. Ask it to poke holes in your PRD. Free, private, offline AI feedback at 2am beats waiting for a mentor." size={28} />
    </div>
  </SlideWrapper>
);

// ══════════════════════════════════════════════════════════════
// ACT 6 — LAUNCH
// ══════════════════════════════════════════════════════════════

const Slide32: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="MEGAPHONE.exe — How to Launch"
      icon="/assets/icons/pixel/star_pixel.svg" style={{ maxWidth: 1050, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-lg)', color: 'var(--matrix-mid)', textAlign: 'center', marginBottom: 14 }}>
          "Launch ugly. Fix fast."
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 10 }}>
          {[
            { logo: 'producthunt', name: 'Product Hunt', tip: 'Tue 8am PST (9:30pm IST). Join communities 2 weeks before.' },
            { logo: 'hackernews', name: 'Show HN', tip: '"Show HN: I built X for Y problem." — be specific.' },
            { logo: 'x', name: 'Twitter/X', tip: 'Build in public. 30-day updates. Tag relevant people.' },
            { logo: 'reddit', name: 'Reddit', tip: 'r/SideProject, r/startups, niche subreddits.' },
            { logo: 'discord', name: 'Discord', tip: 'Find 3–5 communities in your exact niche.' },
            { logo: 'knowasiak', name: 'Knowasiak', tip: 'Professional graph. Permanent URL. No algorithm decay.' },
          ].map(c => (
            <div key={c.name} style={{ display: 'flex', gap: 8, padding: '10px 12px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
              <Logo name={c.logo} size={28} />
              <div>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>{c.name}</div>
                <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', marginTop: 3 }}>{c.tip}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
          <div style={{ padding: '8px 12px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 6 }}>DAY-OF-LAUNCH CHECKLIST</div>
            {[
              'Post on 5 communities simultaneously',
              'DM 10 specific people who have the problem',
              'Email your entire waitlist (not just notify)',
              'Reply to every single comment for 24h',
              'Screenshot early traction — it compounds',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 6, marginBottom: 3, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--matrix-green)', fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', flexShrink: 0 }}>›</span>
                <span style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <QRPanel name="producthunt" label="producthunt.com" size={70} />
            <ChestIcon type="gold" label="FIRST 100 USERS = hardest and most important. Every one is a founder-level relationship." size={28} />
          </div>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide33: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="KNOWASIAK.exe — Build in Public"
      icon="/assets/icons/pixel/laptop.svg" style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14, display: 'flex', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
            <Logo name="knowasiak" size={40} />
            <div>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>Knowasiak</div>
              <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', letterSpacing: 2 }}>TURN WORK INTO REPUTATION</div>
            </div>
          </div>
          <Bullets items={[
            'Public professional graph',
            'Posts with permanent URLs',
            'Direct inbound from followers',
            '$0 paid acquisition',
          ]} />
          <div className="divider90" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 8 }}>
            {[
              { n: '900K', l: 'Monthly pageviews' },
              { n: '190+', l: 'Countries' },
              { n: '20K+', l: 'Registered users' },
            ].map(s => (
              <div key={s.n} style={{ textAlign: 'center', padding: '8px 4px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-base)', color: 'var(--matrix-mid)' }}>{s.n}</div>
                <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', letterSpacing: 1 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <QRPanel name="knowasiak" label="knowasiak.com" size={100} />
          <div style={{ marginTop: 8, fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', textAlign: 'center', letterSpacing: 2 }}>
            JOIN FREE · BUILD PUBLIC
          </div>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide34: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="LOOP.exe — Build → Measure → Learn"
      icon="/assets/icons/pixel/star_pixel.svg" style={{ maxWidth: 980, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 16, textAlign: 'center' }}>
          THE LEAN STARTUP LOOP — KEEP IT SHORT
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 16 }}>
          {[' BUILD', ' MEASURE', '🧠 LEARN'].map((step, i, arr) => (
            <React.Fragment key={step}>
              <div style={{ padding: '16px 20px', background: 'var(--panel-bg-dark)', border: '2px solid var(--panel-border)', fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', textAlign: 'center' }}>
                {step}
              </div>
              {i < arr.length - 1 ? (
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-lg)', color: 'var(--matrix-green)', padding: '0 10px' }}>►</div>
              ) : (
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-lg)', color: 'var(--matrix-green)', padding: '0 10px' }}>↩</div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div style={{ padding: '10px 14px', background: '#1A0000', border: '2px solid var(--btn-red)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--btn-red)', marginBottom: 4 }}>[X] WRONG</div>
            <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)' }}>6-month build with no user feedback loop.</div>
          </div>
          <div style={{ padding: '10px 14px', background: 'var(--matrix-darkest)', border: '2px solid var(--matrix-dim)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-dark)', marginBottom: 4 }}>[OK] RIGHT</div>
            <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)' }}>Ship in days. Talk to users weekly. Iterate.</div>
          </div>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide35: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div style={{ position: 'relative', width: '100%', maxWidth: 1000 }}>
    <Window90s title="CHART.exe — Metrics That Matter"
      icon="/assets/icons/pixel/database.svg" style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--btn-red)', marginBottom: 8, letterSpacing: 2 }}> VANITY METRICS (lie to you)</div>
            {['Total signups', 'App downloads', 'Page views', 'Social followers'].map(m => (
              <div key={m} style={{ padding: '6px 10px', marginBottom: 4, background: '#1A0000', border: '1px solid rgba(217,83,79,0.3)', fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>
                {m}
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 8, letterSpacing: 2 }}>[OK] SIGNAL METRICS (tell truth)</div>
            {['DAU / MAU ratio', 'Day 7 retention', 'Time to value', 'NPS score'].map(m => (
              <div key={m} style={{ padding: '6px 10px', marginBottom: 4, background: 'var(--matrix-darkest)', border: '1px solid var(--matrix-dim)', fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', fontWeight: 700, color: 'var(--text-primary)' }}>
                {m}
              </div>
            ))}
          </div>
        </div>
        <div className="divider90" />
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', textAlign: 'center' }}>
          Retention tells truth. Everything else can be faked.
        </div>
      </div>
    </Window90s>
    <ChestIcon floating type="iron" label="BONUS TIP" tip="Block 30 minutes every Monday to review DAU/retention. The week you skip it is the week churn sneaks up on you." size={28} />
    </div>
  </SlideWrapper>
);

// ══════════════════════════════════════════════════════════════
// ACT 7 — SECURITY
// ══════════════════════════════════════════════════════════════

const Slide36: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', width: '100%', maxWidth: 700 }}>
      <ErrorDialog message="Security is not optional." detail="1 breach = 0 users. You are responsible for your users' data." />
      <Window90s title="REALITY_CHECK.exe" icon="/assets/icons/pixel/shield.svg" style={{ width: '100%' }}>
        <div style={{ padding: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, textAlign: 'center' }}>
            {[
              { icon: '', text: 'Users trust you with their data' },
              { icon: '', text: 'Breach = legal liability' },
              { icon: '', text: '60% of SMBs close after breach' },
            ].map(f => (
              <div key={f.text} style={{ padding: '10px 8px', background: '#1A0000', border: '1px solid rgba(217,83,79,0.3)' }}>
                <div style={{ fontSize: 'var(--font-lg)', marginBottom: 6 }}>{f.icon}</div>
                <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </Window90s>
    </div>
  </SlideWrapper>
);

const Slide37: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="LOCK.exe — Auth Essentials"
      icon="/assets/icons/pixel/shield.svg" style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { icon: '', name: 'CSRF Tokens', desc: 'Protect forms from cross-site forgery attacks.' },
            { icon: '', name: 'HTTP-Only Cookies', desc: 'Store session tokens. Never in localStorage.' },
            { icon: '', name: 'HTTPS / SSL', desc: 'Let\'s Encrypt: free SSL. No excuse not to.' },
            { icon: '', name: 'Use an Auth Library', desc: 'Clerk, Auth0, Supabase Auth. Never DIY auth.' },
          ].map(item => (
            <div key={item.name} style={{ padding: '10px 14px', background: 'var(--panel-bg-dark)', border: '2px solid var(--panel-border)' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontSize: 'var(--font-md)' }}>{item.icon}</span>
                <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>{item.name}</span>
              </div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="divider90" />
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Logo name="letsencrypt" size={28} />
          <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', fontWeight: 700, color: 'var(--matrix-mid)' }}>
            Let's Encrypt: free SSL on any domain. Vercel/Netlify do it automatically.
          </div>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide38: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="FIREWALL.exe — Rate Limiting + 2FA"
      icon="/assets/icons/pixel/star_pixel.svg" style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 12 }}>
          {[
            { icon: '', name: 'Rate Limiting', desc: '100 requests/min max. Use Redis or upstash.' },
            { icon: '', name: '2FA (TOTP)', desc: 'Google Authenticator or SMS for admin access.' },
            { icon: '', name: 'Password Hashing', desc: 'bcrypt or Argon2. NEVER MD5 or plain text.' },
          ].map(item => (
            <div key={item.name} style={{ padding: '12px 14px', background: 'var(--panel-bg-dark)', border: '2px solid var(--panel-border)', textAlign: 'center' }}>
              <div style={{ fontSize: 'var(--font-xl)', marginBottom: 6 }}>{item.icon}</div>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 4 }}>{item.name}</div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="inset90" style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', padding: '10px 14px' }}>
          <span style={{ color: 'var(--matrix-mid)' }}>// Hash passwords with bcrypt</span><br />
          const hash = await bcrypt.hash(password, 12);<br />
          const valid = await bcrypt.compare(input, hash);
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide39: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div style={{ position: 'relative', width: '100%', maxWidth: 1000 }}>
    <Window90s title="SECURITY_SCAN.exe — OWASP Top 5"
      icon="/assets/icons/pixel/shield.svg" style={{ maxWidth: 1000, width: '100%' }}
      statusLeft="Open Web Application Security Project" statusRight="owasp.org">
      <div style={{ padding: 14 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { n: '01', attack: 'SQL Injection', fix: 'Use parameterized queries. NEVER string concat.' },
            { n: '02', attack: 'XSS (Cross-Site Scripting)', fix: 'Sanitize ALL user input. Use DOMPurify.' },
            { n: '03', attack: 'Broken Authentication', fix: 'Use battle-tested auth libraries. No DIY.' },
            { n: '04', attack: 'Sensitive Data Exposure', fix: 'Encrypt at rest + in transit. Env vars.' },
            { n: '05', attack: 'Security Misconfiguration', fix: 'Review defaults. Remove test credentials.' },
          ].map(item => (
            <div key={item.n} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '8px 12px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--btn-red)', minWidth: 28 }}>{item.n}</div>
              <div style={{ width: 1, height: 30, background: 'var(--panel-border)', flexShrink: 0 }} />
              <div style={{ minWidth: 200 }}>
                <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', fontWeight: 700, color: 'var(--btn-red)' }}>{item.attack}</div>
              </div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>{item.fix}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, display: 'flex', gap: 8, alignItems: 'center' }}>
          <QRPanel name="vercel" label="owasp.org" size={56} />
          <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            Read the OWASP Top 10 once. It will save you from 80% of vulnerabilities.
          </div>
        </div>
      </div>
    </Window90s>
    <ChestIcon floating type="iron" label="BONUS TIP" tip="Run OWASP ZAP (free) on localhost:3000 before every launch. One SQL injection in production and you're writing public apology emails to your users." size={28} />
    </div>
  </SlideWrapper>
);

// ══════════════════════════════════════════════════════════════
// ACT 8 — LEGAL
// ══════════════════════════════════════════════════════════════

const Slide40: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="DOCUMENT.exe — Privacy Policy + Terms"
      icon="/assets/icons/pixel/laptop.svg" style={{ maxWidth: 980, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 10 }}>WHY YOU NEED BOTH</div>
            <Bullets items={[
              'GDPR requires it (EU users)',
              'CCPA requires it (California)',
              'App stores reject without it',
              'Investors ask for it',
            ]} />
          </div>
          <div>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 10 }}>WHAT TO INCLUDE</div>
            {['What data you collect', 'How you use it', 'Who you share with', 'User rights + deletion'].map(item => (
              <div key={item} style={{ display: 'flex', gap: 6, padding: '5px 0', borderBottom: '1px solid var(--panel-border)' }}>
                <span style={{ color: 'var(--matrix-green)', fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)' }}>►</span>
                <span style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="divider90" />
        <div style={{ padding: '10px 14px', background: '#0A0800', border: '2px solid var(--matrix-dim)' }}>
          <span style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', fontWeight: 700, color: 'var(--matrix-dim)' }}>
            Add both pages BEFORE your first user. It takes 10 minutes with free tools.
          </span>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide41: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div style={{ position: 'relative', width: '100%', maxWidth: 1000 }}>
    <Window90s title="OPEN_FILE.exe — Free Legal Tools"
      icon="/assets/icons/pixel/shield.svg" style={{ maxWidth: 1000, width: '100%' }}
      statusLeft="All free tiers." statusRight="">
      <div style={{ padding: 14 }}>
        <LogoGrid items={[
          { name: 'termly', label: 'Termly' },
          { name: 'iubenda', label: 'iubenda' },
          { name: 'privacypolicygen', label: 'PP.gen' },
          { name: 'docracy', label: 'Docracy' },
          { name: 'ironclad', label: 'Ironclad' },
          { name: 'letsencrypt', label: 'HelloSign' },
        ]} cols={6} />
        <div className="divider90" />
        <div style={{ display: 'flex', gap: 12 }}>
          <QRPanel name="termly" label="termly.io" size={80} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 8 }}>TERMLY (RECOMMENDED)</div>
            <Bullets items={[
              'Privacy policy in 5 minutes',
              'Terms of Service generator',
              'Cookie consent banner',
              'GDPR + CCPA compliant',
            ]} />
          </div>
        </div>
      </div>
    </Window90s>
    <ChestIcon floating type="diamond" label="BONUS TIP" tip="Open termly.io right now. Generate Privacy Policy + ToS in 5 minutes. You cannot legally collect user emails without it — GDPR fines start at €20M." size={28} />
    </div>
  </SlideWrapper>
);

// ══════════════════════════════════════════════════════════════
// CLOSE
// ══════════════════════════════════════════════════════════════

const Slide42: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="LIST.exe — Full Toolkit"
      icon="/assets/icons/pixel/star_pixel.svg" menuItems={['File', 'View']}
      statusLeft="Everything in one view." statusRight="48 slides"
      style={{ maxWidth: 980, width: '100%' }}>
      <div style={{ padding: 12 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            { label: 'IDEATE', color: 'var(--matrix-mid)', items: ['Tally', 'Typeform', 'Notion', 'Carrd'], logos: ['tally', 'typeform', 'notion', 'carrd'] },
            { label: 'BUILD', color: 'var(--matrix-mid)', items: ['v0.dev', 'Cursor', 'Supabase', 'Vercel'], logos: ['v0dev', 'cursor', 'supabase', 'vercel'] },
            { label: 'DESIGN', color: 'var(--text-warning)', items: ['Figma', 'Framer', 'Loom', 'Kling AI'], logos: ['figma', 'framer', 'loom', 'kling'] },
            { label: 'LAUNCH', color: 'var(--text-warning)', items: ['PH', 'GitHub', 'n8n', 'Knowasiak'], logos: ['producthunt', 'github', 'n8n', 'knowasiak'] },
          ].map(col => (
            <div key={col.label} style={{ padding: '10px 8px', background: 'var(--panel-bg-dark)', border: `2px solid ${col.color}`, borderTop: `6px solid ${col.color}` }}>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: col.color, marginBottom: 8, textAlign: 'center' }}>{col.label}</div>
              {col.logos.map((logo, i) => (
                <div key={logo} style={{ display: 'flex', gap: 6, alignItems: 'center', padding: '4px 0', borderBottom: '1px solid var(--panel-border)' }}>
                  <Logo name={logo} size={18} />
                  <span style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>{col.items[i]}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide43: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <div className="desktop-scene" style={{ width: '100%', maxWidth: 980, justifyContent: 'center' }}>
      <Window90s title="ALERT.exe — 5 Things to Remember"
        icon="/assets/icons/pixel/star_pixel.svg" style={{ flex: 1 }} accentColor="#00FF41">
        <div style={{ padding: 14 }}>
          {[
            { n: '01', text: 'Talk to users BEFORE building.' },
            { n: '02', text: 'Start simple. Architect later.' },
            { n: '03', text: 'Launch ugly. Iterate fast.' },
            { n: '04', text: 'Automate repetitive work.' },
            { n: '05', text: 'Security + legal = non-negotiable.' },
          ].map(item => (
            <div key={item.n} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--panel-border)' }}>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-lg)', color: 'var(--matrix-green)', minWidth: 44 }}>{item.n}</div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-base)', fontWeight: 700, color: 'var(--text-primary)' }}>{item.text}</div>
            </div>
          ))}
        </div>
      </Window90s>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ padding: '14px 16px', background: 'rgba(0,255,65,0.1)', border: '2px solid var(--matrix-green)', textAlign: 'center' }}>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-base)', color: 'var(--text-primary)', marginBottom: 8 }}>Keep building.</div>
          <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>The world runs on products.<br />One of them will be yours.</div>
        </div>
        <QRPanel name="adityagaurav" label="adityagaurav.com" size={100} />
      </div>
    </div>
  </SlideWrapper>
);

// ══════════════════════════════════════════════════════════════
// APPENDIX
// ══════════════════════════════════════════════════════════════

const Slide44: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="BMC.exe — Business Model Canvas"
      icon="/assets/icons/pixel/database.svg" style={{ maxWidth: 980, width: '100%' }}>
      <div style={{ padding: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: 6 }}>
          {[
            { label: 'Key Partners', icon: '', span: '', content: 'Suppliers, alliances, key vendors' },
            { label: 'Key Activities', icon: '', content: 'What you do to deliver value' },
            { label: 'Value Proposition', icon: '', content: 'Why customers choose YOU', rowSpan: true },
            { label: 'Customer Relationships', icon: '', content: 'How you connect with customers' },
            { label: 'Customer Segments', icon: '', content: 'Who you serve' },
          ].map((block) => (
            <div key={block.label} style={{ padding: '8px 10px', background: 'var(--panel-bg-dark)', border: '2px solid var(--panel-border)', gridRow: block.rowSpan ? '1 / 3' : undefined }}>
              <div style={{ fontSize: 'var(--font-base)', marginBottom: 3 }}>{block.icon}</div>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 4 }}>{block.label}</div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>{block.content}</div>
            </div>
          ))}
          {[
            { label: 'Key Resources', icon: '', content: 'Assets you need to operate' },
            { label: 'Channels', icon: '', content: 'How you reach customers' },
          ].map(block => (
            <div key={block.label} style={{ padding: '8px 10px', background: 'var(--panel-bg-dark)', border: '2px solid var(--panel-border)' }}>
              <div style={{ fontSize: 'var(--font-base)', marginBottom: 3 }}>{block.icon}</div>
              <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 4 }}>{block.label}</div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>{block.content}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginTop: 6 }}>
          {[
            { label: 'Cost Structure', icon: '', content: 'Fixed + variable costs. What you spend to operate.' },
            { label: 'Revenue Streams', icon: '', content: 'How you make money. Subscriptions, ads, sales, licensing.' },
          ].map(block => (
            <div key={block.label} style={{ padding: '8px 10px', background: 'var(--panel-bg-dark)', border: '2px solid var(--matrix-dim)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{ fontSize: 'var(--font-base)' }}>{block.icon}</span>
                <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>{block.label}</span>
              </div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)', marginTop: 4 }}>{block.content}</div>
            </div>
          ))}
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide45: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="KANBAN.exe — Project Management"
      icon="/assets/icons/pixel/star_pixel.svg" style={{ maxWidth: 1050, width: '100%' }}>
      <div style={{ padding: 14, display: 'flex', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 12 }}>
            {[
              { label: 'TO DO', color: 'var(--matrix-mid)', items: ['Talk to users', 'Design mockup', 'Write PRD'] },
              { label: 'IN PROGRESS', color: 'var(--text-warning)', items: ['Build auth flow', 'Test onboarding'] },
              { label: 'DONE', color: 'var(--matrix-mid)', items: ['Landing page', 'Waitlist setup', 'Domain'] },
            ].map(col => (
              <div key={col.label} style={{ border: `2px solid ${col.color}`, borderTop: `6px solid ${col.color}` }}>
                <div style={{ padding: '4px 8px', background: col.color, fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-green)' }}>{col.label}</div>
                {col.items.map(item => (
                  <div key={item} style={{ padding: '6px 8px', margin: 4, background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)', fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <LogoGrid items={[
            { name: 'linear', label: 'Linear' },
            { name: 'notion', label: 'Notion' },
            { name: 'trello', label: 'Trello' },
            { name: 'jira', label: 'Jira' },
          ]} cols={4} />
        </div>
        <div style={{ width: 200 }}>
          <Dialog90s title="TIME METHODS" icon="/assets/icons/pixel/star_pixel.svg">
            <div style={{ padding: 8 }}>
              {[
                { name: 'Time-blocking', desc: '90min focus blocks' },
                { name: 'Pomodoro', desc: '25min work / 5min break' },
                { name: 'Eat the frog', desc: 'Hardest task first' },
                { name: 'Weekly review', desc: 'Sunday planning' },
              ].map(m => (
                <div key={m.name} style={{ padding: '5px 0', borderBottom: '1px solid var(--panel-border)' }}>
                  <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>{m.name}</div>
                  <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>{m.desc}</div>
                </div>
              ))}
              <div style={{ marginTop: 8, padding: '6px 0', borderTop: '1px solid var(--matrix-dim)' }}>
                <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-dim)' }}>BURNDOWN CHART</div>
                <div style={{ fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', marginTop: 2, lineHeight: 1.4 }}>Remaining work vs. time. Flat line = blocked team.</div>
              </div>
            </div>
          </Dialog90s>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide46: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="CONTRACT.exe — Safe Contracts + NDAs"
      icon="/assets/icons/pixel/laptop.svg" style={{ maxWidth: 1000, width: '100%' }}>
      <div style={{ padding: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
          {[
            { icon: '', name: 'NDA', desc: 'Protect your ideas before sharing. Free on Docracy.' },
            { icon: '', name: 'Client Contract', desc: 'Scope, payment terms, IP ownership. Use Bonsai.' },
            { icon: '', name: 'Co-founder Agreement', desc: 'Equity split, roles, vesting. Do this first.' },
            { icon: '', name: 'Service Agreement', desc: 'Freelance work. Define deliverables upfront.' },
          ].map(c => (
            <div key={c.name} style={{ padding: '10px 14px', background: 'var(--panel-bg-dark)', border: '2px solid var(--panel-border)' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 'var(--font-md)' }}>{c.icon}</span>
                <span style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>{c.name}</span>
              </div>
              <div style={{ fontFamily: 'ShareTechMono, monospace', fontSize: 'var(--font-xs)', color: 'var(--text-primary)' }}>{c.desc}</div>
            </div>
          ))}
        </div>
        <LogoGrid items={[
          { name: 'docracy', label: 'Docracy' },
          { name: 'ironclad', label: 'Ironclad' },
          { name: 'letsencrypt', label: 'HelloSign' },
          { name: 'notion', label: 'Bonsai' },
        ]} cols={4} />
      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide47: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="INTERVIEW.exe — PM Interview Framework"
      icon="/assets/icons/pixel/star_pixel.svg"
      statusLeft="Google, Flipkart, Razorpay all run this" statusRight="PLACEMENT PREP"
      style={{ maxWidth: 1050, width: '100%' }}>
      <div style={{ padding: 14, display: 'flex', gap: 14 }}>

        {/* Left: CIRCLES Framework */}
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)', marginBottom: 10, letterSpacing: 2 }}>THE CIRCLES FRAMEWORK — ANSWER ANY PM QUESTION</div>
          {[
            { step: 'C — Clarify', desc: 'Repeat the question, clarify scope. "By improve, do you mean engagement or revenue? What timeframe?"' },
            { step: 'I — Identify Users', desc: 'Segment the users. "For Swiggy: students, working professionals, families — let\'s focus on working professionals."' },
            { step: 'R — Report Needs', desc: 'User pain points for that segment. Use empathy, not your own assumptions. "They want faster re-order."' },
            { step: 'C — Cut Through (Prioritize)', desc: 'Which need is biggest? Back it with why. "Re-order is highest frequency use case = biggest impact."' },
            { step: 'L — List Solutions', desc: '3–4 solutions. Breadth shows PM creativity. Don\'t jump to one. "Quick re-order button, AI meal suggestions, saved meals."' },
            { step: 'E — Evaluate', desc: 'Score by impact vs. effort. Pick one and defend it. "Quick re-order: high impact, low effort. Ship first."' },
            { step: 'S — Summarize', desc: 'Restate in 2 sentences. Always bring it back to the user. "I\'d ship X for Y segment because Z metric."' },
          ].map(s => (
            <div key={s.step} style={{ display: 'flex', gap: 10, padding: '5px 0', borderBottom: '1px solid var(--panel-border)', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Minecraft, monospace', fontSize: '12px', color: 'var(--matrix-green)', minWidth: 110, flexShrink: 0, lineHeight: 1.4 }}>{s.step}</span>
              <span style={{ fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.45 }}>{s.desc}</span>
            </div>
          ))}
        </div>

        {/* Right: Real questions + what they test */}
        <div style={{ width: 280, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ padding: '10px 12px', background: 'var(--panel-bg-dark)', border: '1px solid var(--panel-border)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: '12px', color: 'var(--matrix-mid)', marginBottom: 8 }}>REAL INTERVIEW QUESTIONS</div>
            {[
              '"Design a feature for WhatsApp for senior citizens."',
              '"How would you improve Swiggy\'s search?"',
              '"What metric would you use to grow Zepto?"',
              '"Uber\'s rides dropped 15%. Diagnose it."',
              '"Design a product for farmers in rural Bihar."',
            ].map((q, i) => (
              <div key={i} style={{ padding: '5px 6px', marginBottom: 4, background: '#0A0800', border: '1px solid var(--panel-border)', fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.4 }}>{q}</div>
            ))}
          </div>
          <div style={{ padding: '10px 12px', background: '#001500', border: '1px solid var(--matrix-dim)' }}>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: '12px', color: 'var(--matrix-mid)', marginBottom: 6 }}>WHAT THEY'RE TESTING</div>
            {[
              'Structured thinking — not the right answer',
              'User empathy (not your own preferences)',
              'Prioritization under real constraints',
              'Communication clarity under pressure',
            ].map(t => (
              <div key={t} style={{ display: 'flex', gap: 5, marginBottom: 4, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--matrix-green)', fontFamily: 'ShareTechMono', fontSize: '12px', flexShrink: 0 }}>›</span>
                <span style={{ fontFamily: 'ShareTechMono', fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.35 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Window90s>
  </SlideWrapper>
);

const Slide48: SlideFC = ({ meta }) => (
  <SlideWrapper meta={meta}>
    <Window90s title="LINKS.exe — Scan Everything"
      icon="/assets/icons/pixel/pixel_arrow.svg" style={{ maxWidth: 1100, width: '100%' }}>
      <div style={{ padding: 12 }}>
        <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-md)', color: 'var(--matrix-mid)', textAlign: 'center', marginBottom: 12 }}>
          Keep building.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: 6, marginBottom: 12 }}>
          {[
            { name: 'adityagaurav', label: 'adityagaurav' },
            { name: 'knowasiak', label: 'knowasiak' },
            { name: 'linkedin', label: 'LinkedIn' },
            { name: 'v0dev', label: 'v0.dev' },
            { name: 'bolt', label: 'bolt.new' },
            { name: 'ollama', label: 'ollama' },
            { name: 'n8n', label: 'n8n.io' },
            { name: 'vercel', label: 'vercel' },
            { name: 'supabase', label: 'supabase' },
            { name: 'figma', label: 'figma' },
            { name: 'producthunt', label: 'producthunt' },
            { name: 'termly', label: 'termly' },
            { name: 'cursor', label: 'cursor' },
            { name: 'twitter', label: '@adityagaurav' },
          ].map(q => <QRPanel key={q.name} name={q.name} label={q.label} size={52} />)}
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'center', padding: '10px 0', borderTop: '2px solid var(--panel-border)' }}>
          <img src="/assets/images/aditya_avatar.png" alt="Aditya Gaurav" style={{ width: 44, height: 44, border: '2px solid var(--panel-border)', objectFit: 'cover' }} />
          <div>
            <div style={{ fontFamily: 'Minecraft, monospace', fontSize: 'var(--font-xs)', color: 'var(--matrix-mid)' }}>Aditya Gaurav</div>
            <div style={{ fontFamily: 'ShareTechMono', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', letterSpacing: 2 }}>FOUNDER · KNOWASIAK INC. · SF BAY AREA </div>
          </div>
        </div>
      </div>
    </Window90s>
  </SlideWrapper>
);

// ══════════════════════════════════════════════════════════════
// REGISTRY — map slide number → component
// ══════════════════════════════════════════════════════════════
export const SLIDES: SlideFC[] = [
  null!, // index 0 unused
  Slide01, Slide02,
  Slide03, Slide04, Slide05,
  Slide06, Slide07, Slide08, Slide09, Slide10, Slide11,
  Slide12, Slide13, Slide14, Slide15, Slide16, Slide17, Slide18, Slide19, Slide20,
  Slide21, Slide22, Slide23, Slide24, Slide25,
  Slide26, Slide27, Slide28, Slide29, Slide30, Slide31,
  Slide32, Slide33, Slide34, Slide35,
  Slide36, Slide37, Slide38, Slide39,
  Slide40, Slide41,
  Slide42, Slide43,
  Slide44, Slide45, Slide46, Slide47, Slide48,
];
