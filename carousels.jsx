// FileMayor — social carousels
// 5 carousels × ~7 slides each, at 1080×1350 (works on LI, X, IG)

const e = React.createElement;

/* ---------- helpers ---------- */
const Top = ({left, right}) => (
  <div className="top">
    <span>{left}</span>
    <span>{right}</span>
  </div>
);
const Bot = ({left, right}) => (
  <div className="bot">
    <span>{left}</span>
    <span>{right}</span>
  </div>
);
const Wm = ({dark}) => (
  <span>
    <span className="wm" style={{color: dark ? 'var(--cream)' : 'var(--ink)'}}>FileMayor<span className="d">.</span></span>
    <span className="wm-by">by Chevza</span>
  </span>
);
const Swipe = ({n, total}) => (
  <div className="swipe">
    <span>{String(n).padStart(2,'0')} / {String(total).padStart(2,'0')}</span>
    <span className="arr">→</span>
  </div>
);
const CTA = ({text="filemayor.com  ·  $ npm install -g filemayor", right="→"}) => (
  <div className="cta">
    <span>{text}</span>
    <span className="arrow">{right}</span>
  </div>
);

const Slide = ({n, total, theme, top, bot, swipe=true, cta=true, children, padTop=true}) => {
  const cls = "s " + (theme === 'dark' ? 'dark' : theme === 'deep' ? 'deep' : '');
  return (
    <div className={cls}>
      <Top left={top?.[0] || <Wm dark={theme==='dark'}/>} right={top?.[1] || `${String(n).padStart(2,'0')} · v4.0.1`}/>
      <div className="col grow" style={{marginTop: padTop ? 80 : 0, justifyContent:'flex-start'}}>
        {children}
      </div>
      {cta && <CTA/>}
      <Bot left={bot?.[0] || '●  scan → explain → cure → apply → undo'} right={bot?.[1] || `${String(n).padStart(2,'0')} / ${String(total).padStart(2,'0')}`}/>
      {swipe && n < total && <Swipe n={n} total={total}/>}
    </div>
  );
};

/* =====================================================================
   CAROUSEL 01 — HERO: Your AI can suggest. FileMayor can act.
   Audience: mixed (investors + devs). Tone: bold open, calm body.
   ===================================================================== */
const C1 = () => {
  const T = 7;
  return (<>
    {/* 1 cover */}
    <DCArtboard id="c1-1" label="01 · Hook" width={1080} height={1350}>
      <div className="s dark">
        <Top left={<Wm dark/>} right="MANIFESTO · 01 / 07"/>
        <div className="col grow" style={{justifyContent:'center', gap:40}}>
          <div className="eyebrow">A manifesto for the AI era</div>
          <div className="h1" style={{color:'var(--cream)', fontSize:172}}>
            Your AI<br/>can <span className="muted ital">suggest.</span>
          </div>
          <div className="h1" style={{color:'var(--cream)', fontSize:172}}>
            FileMayor<br/>can <span className="ital accent">act.</span>
          </div>
        </div>
        <div className="cta" style={{borderColor:'rgba(243,238,226,.18)', color:'#8a8377'}}>
          <span>filemayor.com · v4.0.1</span>
          <span className="arrow">swipe →</span>
        </div>
        <Bot left="●  scan → explain → cure → apply → undo" right="01 / 07"/>
      </div>
    </DCArtboard>

    {/* 2 the problem */}
    <DCArtboard id="c1-2" label="02 · The gap" width={1080} height={1350}>
      <Slide n={2} total={T}>
        <div className="eyebrow">02 · The gap</div>
        <div className="h2 mt-s" style={{marginTop:18}}>
          Every model<br/>can <span className="ital">plan</span> a cleanup.
        </div>
        <div className="h2" style={{marginTop:36, color:'var(--accent)'}}>None of them<br/>can <span className="ital">do it.</span></div>
        <div className="sub" style={{marginTop:48, maxWidth:920}}>
          The plan stops at the filesystem boundary. You, the human, copy-paste it into Finder.
          Drag. Rename. <span className="ital">Regret.</span> No undo.
        </div>
      </Slide>
    </DCArtboard>

    {/* 3 wedge */}
    <DCArtboard id="c1-3" label="03 · Wedge" width={1080} height={1350}>
      <Slide n={3} total={T} theme="dark">
        <div className="eyebrow">03 · The wedge</div>
        <div className="col grow" style={{justifyContent:'center', gap:24}}>
          <div className="pull" style={{color:'var(--cream)', fontSize:96}}>
            FileMayor is<br/>the <span className="ital accent">execution layer</span><br/>
            for every AI<br/>that already exists.
          </div>
        </div>
        <div className="row" style={{gap:12, marginBottom:16}}>
          <span className="chip">Claude</span>
          <span className="chip">ChatGPT</span>
          <span className="chip">Cursor</span>
          <span className="chip">Copilot</span>
          <span className="chip">your script</span>
        </div>
      </Slide>
    </DCArtboard>

    {/* 4 how it works */}
    <DCArtboard id="c1-4" label="04 · Five verbs" width={1080} height={1350}>
      <Slide n={4} total={T}>
        <div className="eyebrow">04 · The product</div>
        <div className="h2" style={{marginTop:18}}>Five verbs.<br/><span className="ital muted">In order.</span></div>
        <div className="col" style={{marginTop:48, gap:0, borderTop:'1px solid var(--rule)'}}>
          {[
            ['01','scan','Read the directory. No moves.'],
            ['02','explain','Health score + plain-English diagnosis.'],
            ['03','cure','AI proposes specific moves. Plan, do not act.'],
            ['04','apply','Execute reversibly. Every move journaled.'],
            ['05','undo','One command reverses the whole session.'],
          ].map(([ix, nm, ds]) => (
            <div key={ix} className="row" style={{padding:'22px 0', borderBottom:'1px solid var(--rule)', alignItems:'baseline', gap:32}}>
              <span className="marker" style={{minWidth:48}}>{ix}</span>
              <span className="ital" style={{fontFamily:'var(--serif)', fontSize:72, lineHeight:1, minWidth:240}}>{nm}</span>
              <span className="body" style={{fontSize:22, flex:1}}>{ds}</span>
            </div>
          ))}
        </div>
      </Slide>
    </DCArtboard>

    {/* 5 local-first */}
    <DCArtboard id="c1-5" label="05 · Local-first" width={1080} height={1350}>
      <Slide n={5} total={T} theme="deep">
        <div className="eyebrow">05 · The moat</div>
        <div className="h2" style={{marginTop:18}}>Your files<br/><span className="ital muted">never leave</span><br/>the machine.</div>
        <div className="col" style={{marginTop:48, gap:16}}>
          <div className="body"><span className="accent mono">·</span>&nbsp; Engine runs entirely on your machine.</div>
          <div className="body"><span className="accent mono">·</span>&nbsp; AI sees metadata — names, sizes, paths. Never bytes.</div>
          <div className="body"><span className="accent mono">·</span>&nbsp; Disable AI completely; the engine still works.</div>
          <div className="body"><span className="accent mono">·</span>&nbsp; Three runtime deps. Zero runtime vulnerabilities.</div>
        </div>
        <div className="row" style={{gap:12, marginTop:36}}>
          <span className="chip term">offline-first</span>
          <span className="chip live">journaled</span>
        </div>
      </Slide>
    </DCArtboard>

    {/* 6 traction */}
    <DCArtboard id="c1-6" label="06 · Traction" width={1080} height={1350}>
      <Slide n={6} total={T}>
        <div className="eyebrow">06 · Traction</div>
        <div className="h3" style={{marginTop:18}}>Builders<br/>found us <span className="ital muted">first.</span></div>
        <div className="row" style={{marginTop:56, gap:0, borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)'}}>
          <div className="col" style={{flex:1, padding:'32px 24px', borderRight:'1px solid var(--rule)'}}>
            <div className="stat-n" style={{fontSize:140}}>25<small>k+</small></div>
            <div className="stat-l" style={{marginTop:6}}>npm installs · all-time</div>
          </div>
          <div className="col" style={{flex:1, padding:'32px 24px'}}>
            <div className="stat-n" style={{fontSize:140}}>+700</div>
            <div className="stat-l" style={{marginTop:6}}>installs · last 7 days</div>
          </div>
        </div>
        <div className="body" style={{marginTop:32, maxWidth:920}}>
          No paid acquisition. No launch post. The MCP angle is compounding —
          Claude Code users are finding it on their own.
        </div>
      </Slide>
    </DCArtboard>

    {/* 7 CTA */}
    <DCArtboard id="c1-7" label="07 · CTA" width={1080} height={1350}>
      <div className="s dark">
        <Top left={<Wm dark/>} right="07 / 07"/>
        <div className="col grow" style={{justifyContent:'center', gap:32}}>
          <div className="eyebrow">Try the verbs</div>
          <div className="h1" style={{color:'var(--cream)', fontSize:152}}>
            Install.<br/>Type. <span className="ital accent">Undo.</span>
          </div>
          <div className="term" style={{marginTop:24, fontSize:24}}>
{`$ npm install -g filemayor
$ filemayor explain ~/Downloads`}
          </div>
        </div>
        <div className="cta" style={{borderColor:'rgba(243,238,226,.18)', color:'#8a8377'}}>
          <span>filemayor.com</span>
          <span className="arrow">↗</span>
        </div>
        <Bot left="Free forever for individuals · Pro $19/mo" right="07 / 07"/>
      </div>
    </DCArtboard>
  </>);
};

/* =====================================================================
   CAROUSEL 02 — FIVE VERBS WALKTHROUGH (devs)
   ===================================================================== */
const C2 = () => {
  const T = 7;
  const Verb = ({n, ix, nm, cm, ds, term}) => (
    <DCArtboard id={`c2-${n}`} label={`${String(n).padStart(2,'0')} · ${nm}`} width={1080} height={1350}>
      <div className="s">
        <Top left={<Wm/>} right={`VERB ${ix} / 05`}/>
        <div className="col grow" style={{marginTop:80, justifyContent:'flex-start', gap:0}}>
          <div className="verb-badge">{ix} · {nm}</div>
          <div className="h2" style={{marginTop:24, fontSize:160}}><span className="ital">{nm}</span></div>
          <div className="sub" style={{marginTop:18, maxWidth:920, fontSize:30}}>{ds}</div>
          <div className="term" style={{marginTop:36, fontSize:20}}>{term}</div>
        </div>
        <CTA/>
        <Bot left={`●  ${cm}`} right={`${String(n).padStart(2,'0')} / ${T}`}/>
        <Swipe n={n} total={T}/>
      </div>
    </DCArtboard>
  );

  return (<>
    {/* 1 cover */}
    <DCArtboard id="c2-1" label="01 · Cover" width={1080} height={1350}>
      <div className="s">
        <Top left={<Wm/>} right="WALKTHROUGH · 01 / 07"/>
        <div className="col grow" style={{justifyContent:'center', gap:32}}>
          <div className="eyebrow">FileMayor in 60 seconds</div>
          <div className="h1" style={{fontSize:160}}>Five verbs.<br/>One <span className="ital accent">undo.</span></div>
          <div className="sub" style={{maxWidth:920}}>
            The entire product surface area, in the order you type them.
            Real output from the real CLI — no mocks.
          </div>
          <div className="row" style={{gap:10, marginTop:8, flexWrap:'wrap'}}>
            <span className="chip">scan</span>
            <span className="chip">explain</span>
            <span className="chip">cure</span>
            <span className="chip">apply</span>
            <span className="chip">undo</span>
          </div>
        </div>
        <CTA/>
        <Bot left="●  swipe →" right="01 / 07"/>
        <Swipe n={1} total={T}/>
      </div>
    </DCArtboard>

    <Verb n={2} ix="01" nm="scan" cm="filemayor scan ~/Downloads"
      ds="Read the directory. No moves. No cloud. No permission prompts beyond reading."
      term={`$ filemayor scan ~/Downloads
  Scanned 1,248 files (4.2 GB) in 1.4s
  ─────────────────────────────────
  Images       482 files · 1.2 GB
  Videos        12 files · 2.1 GB
  Documents    634 files · 0.8 GB
  Archives      18 files · 0.1 GB
  Code         102 files · 18 MB`}/>

    <Verb n={3} ix="02" nm="explain" cm="filemayor explain ~/Downloads"
      ds="A health score and a plain-English issue list. Still no moves, still no risk."
      term={`$ filemayor explain ~/Downloads
  Health: 22/100 (POOR)
  ─────────────────────────────────
  • 63 screenshots clog the root
  • 14 duplicate installers · 1.7 GB
  • 27 archives older than 12 months
  • 8 stale .crdownload artifacts
  → filemayor cure ~/Downloads`}/>

    <Verb n={4} ix="03" nm="cure" cm='filemayor cure --prompt "by type"'
      ds="The AI proposes specific moves with rationale. A plan — no execution."
      term={`$ filemayor cure --prompt "by type"
  Gemini 2.0 Flash · 0.8s · metadata only
  ─────────────────────────────────
  → Move 63 screenshots → /Screenshots
  → Consolidate installers → /Software
  → Archive .zip > 12mo → /Archive/2024
  → Trash 8 .crdownload artifacts
  Plan covers 112 files · ETA 3.1s`}/>

    <Verb n={5} ix="04" nm="apply" cm="filemayor apply"
      ds="Execute reversibly. Every move written to a session journal in the workspace."
      term={`$ filemayor apply
  [1/4] Screenshots 63 moved ✓
  [2/4] Software    14 moved ✓
  [3/4] Archive     27 moved ✓
  [4/4] Trash        8 removed ✓
  ─────────────────────────────────
  Applied · 112 files · 3.1s
  journal: .filemayor/journal/...json`}/>

    <Verb n={6} ix="05" nm="undo" cm="filemayor undo --all"
      ds="Change your mind. One command reverses the whole session. The safety net is local."
      term={`$ filemayor undo --all
  Reverting 112 operations · session ...
  ─────────────────────────────────
  [1/4] Trash         8 restored ✓
  [2/4] Archive      27 restored ✓
  [3/4] Software     14 restored ✓
  [4/4] Screenshots  63 restored ✓
  ─────────────────────────────────
  Session reverted · downloads as-was`}/>

    {/* 7 CTA */}
    <DCArtboard id="c2-7" label="07 · CTA" width={1080} height={1350}>
      <div className="s dark">
        <Top left={<Wm dark/>} right="07 / 07"/>
        <div className="col grow" style={{justifyContent:'center', gap:24}}>
          <div className="eyebrow">Same five verbs · three skins</div>
          <div className="h1" style={{color:'var(--cream)', fontSize:160}}>
            CLI.<br/>Desktop. <span className="ital accent">MCP.</span>
          </div>
          <div className="sub" style={{color:'#bcb4a6', fontSize:28, maxWidth:920}}>
            Install once. Drive it from the terminal, the desktop app,
            or any MCP-aware AI client. Local, journaled, undoable.
          </div>
          <div className="term" style={{fontSize:22}}>$ npm install -g filemayor</div>
        </div>
        <div className="cta" style={{borderColor:'rgba(243,238,226,.18)', color:'#8a8377'}}>
          <span>filemayor.com / docs</span>
          <span className="arrow">↗</span>
        </div>
        <Bot left="●  scan → explain → cure → apply → undo" right="07 / 07"/>
      </div>
    </DCArtboard>
  </>);
};

/* =====================================================================
   CAROUSEL 03 — FOUNDER STORY (Chevza / SA)
   ===================================================================== */
const C3 = () => {
  const T = 7;
  return (<>
    {/* 1 cover */}
    <DCArtboard id="c3-1" label="01 · Cover" width={1080} height={1350}>
      <div className="s">
        <Top left={<Wm/>} right="FOUNDER STORY · 01 / 07"/>
        <div className="col grow" style={{justifyContent:'center', gap:32}}>
          <div className="eyebrow"><span className="za-dot"></span>Built in South Africa</div>
          <div className="h1" style={{fontSize:160}}>
            One person.<br/>One <span className="ital accent">engine.</span><br/>
            <span className="ital muted">25k installs.</span>
          </div>
          <div className="sub">The shape of the company is the shape of the product.</div>
        </div>
        <CTA text="hloninchefu@gmail.com  ·  filemayor.com"/>
        <Bot left="●  Lehlohonolo Goodwill Nchefu · Chevza" right="01 / 07"/>
        <Swipe n={1} total={T}/>
      </div>
    </DCArtboard>

    {/* 2 hi */}
    <DCArtboard id="c3-2" label="02 · Hi" width={1080} height={1350}>
      <div className="s deep">
        <Top left={<Wm/>} right="02 / 07"/>
        <div className="col grow" style={{justifyContent:'center', gap:24}}>
          <div className="eyebrow">Hi.</div>
          <div className="h2">I'm <span className="ital accent">Chevza.</span></div>
          <div className="sub" style={{fontSize:32, maxWidth:900}}>
            Lehlohonolo Goodwill Nchefu — solo founder, sole engineer,
            and the inbox at <span className="mono accent">hloninchefu@</span>.
          </div>
          <div className="sub" style={{maxWidth:900}}>
            I built FileMayor because my own ~/Downloads was a swamp and every "AI file organizer"
            I tried wanted to upload it to a stranger's server. So I wrote the one I wanted.
          </div>
        </div>
        <CTA/>
        <Bot left="●  scan → explain → cure → apply → undo" right="02 / 07"/>
        <Swipe n={2} total={T}/>
      </div>
    </DCArtboard>

    {/* 3 why solo works */}
    <DCArtboard id="c3-3" label="03 · Why solo works" width={1080} height={1350}>
      <div className="s">
        <Top left={<Wm/>} right="03 / 07"/>
        <div className="col grow" style={{marginTop:80, gap:24}}>
          <div className="eyebrow">Why one person can ship this</div>
          <div className="h3" style={{fontSize:88}}>Local-first means<br/><span className="ital muted">no servers</span><br/>to operate.</div>
          <div className="sub" style={{maxWidth:920}}>
            The engine <span className="ital">is</span> the product. There's nothing to keep running at 3 AM.
            That's why a single architect can hold the whole thing — and answer the inbox.
          </div>
          <div className="row" style={{gap:12, marginTop:16}}>
            <span className="chip">no servers</span>
            <span className="chip">no analytics SaaS</span>
            <span className="chip">no data plane</span>
          </div>
        </div>
        <CTA/>
        <Bot left="●  the engine is the product" right="03 / 07"/>
        <Swipe n={3} total={T}/>
      </div>
    </DCArtboard>

    {/* 4 two years */}
    <DCArtboard id="c3-4" label="04 · Two years" width={1080} height={1350}>
      <div className="s">
        <Top left={<Wm/>} right="04 / 07"/>
        <div className="col grow" style={{marginTop:80, gap:8}}>
          <div className="eyebrow">The boring truth</div>
          <div className="h2" style={{marginTop:18}}>Two years on the<br/><span className="ital">engine</span> first.</div>
          <div className="sub" style={{marginTop:32, maxWidth:920}}>
            v4 looks like an overnight AI moment. It isn't. It's two years of
            jail, vault, guardrail, halt, architect, and security — the boring
            posture that lets a 9-line LLM call be safe.
          </div>
          <div className="row" style={{marginTop:36, gap:0, borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)'}}>
            <div style={{flex:1, padding:'24px 20px', borderRight:'1px solid var(--rule)'}}>
              <div className="stat-n" style={{fontSize:104}}>128</div>
              <div className="stat-l">tests passing</div>
            </div>
            <div style={{flex:1, padding:'24px 20px', borderRight:'1px solid var(--rule)'}}>
              <div className="stat-n" style={{fontSize:104}}>3</div>
              <div className="stat-l">runtime deps</div>
            </div>
            <div style={{flex:1, padding:'24px 20px'}}>
              <div className="stat-n" style={{fontSize:104}}>0</div>
              <div className="stat-l">runtime vulns</div>
            </div>
          </div>
        </div>
        <CTA/>
        <Bot left="●  boring on purpose" right="04 / 07"/>
        <Swipe n={4} total={T}/>
      </div>
    </DCArtboard>

    {/* 5 ZA story */}
    <DCArtboard id="c3-5" label="05 · From ZA" width={1080} height={1350}>
      <div className="s dark">
        <Top left={<Wm dark/>} right="05 / 07"/>
        <div className="col grow" style={{justifyContent:'center', gap:24}}>
          <div className="eyebrow"><span className="za-dot"></span>From here, to anywhere</div>
          <div className="h1" style={{color:'var(--cream)', fontSize:152}}>
            Built in <span className="ital accent">South Africa.</span><br/>
            Shipped to <span className="ital muted">the world.</span>
          </div>
          <div className="sub" style={{color:'#bcb4a6', fontSize:28, maxWidth:920}}>
            25,000+ npm installs across 60+ countries. The CLI doesn't care where
            you're typing it from — and neither do I.
          </div>
        </div>
        <div className="cta" style={{borderColor:'rgba(243,238,226,.18)', color:'#8a8377'}}>
          <span>local-first · journaled · undo-anything</span>
          <span className="arrow">→</span>
        </div>
        <Bot left="●  Lehlohonolo Goodwill Nchefu" right="05 / 07"/>
        <Swipe n={5} total={T}/>
      </div>
    </DCArtboard>

    {/* 6 what's next */}
    <DCArtboard id="c3-6" label="06 · What's next" width={1080} height={1350}>
      <div className="s">
        <Top left={<Wm/>} right="06 / 07"/>
        <div className="col grow" style={{marginTop:80, gap:18}}>
          <div className="eyebrow">What's next</div>
          <div className="h3">Hire #1.<br/><span className="ital accent">Open the team tier.</span><br/><span className="ital muted">Stay local-first.</span></div>
          <div className="sub" style={{marginTop:28, maxWidth:920}}>
            Raising a pre-seed round to add one more engineer on the desktop,
            harden the enterprise security story, and convert the npm installs into Pro.
            DM open. <span className="accent mono">hloninchefu@gmail.com</span>
          </div>
        </div>
        <CTA text="If you live in the filesystem — let's talk."/>
        <Bot left="●  pre-seed · open" right="06 / 07"/>
        <Swipe n={6} total={T}/>
      </div>
    </DCArtboard>

    {/* 7 CTA */}
    <DCArtboard id="c3-7" label="07 · CTA" width={1080} height={1350}>
      <div className="s deep">
        <Top left={<Wm/>} right="07 / 07"/>
        <div className="col grow" style={{justifyContent:'center', gap:24}}>
          <div className="eyebrow">Try the verb</div>
          <div className="h1" style={{fontSize:160}}>
            Folders,<br/><span className="ital accent">on command.</span>
          </div>
          <div className="term" style={{fontSize:22}}>$ npm install -g filemayor</div>
          <div className="row" style={{gap:12, marginTop:8}}>
            <span className="chip live">v4.0.1 · live</span>
            <span className="chip">free forever</span>
          </div>
        </div>
        <CTA text="filemayor.com  ·  by Chevza"/>
        <Bot left="●  scan → explain → cure → apply → undo" right="07 / 07"/>
      </div>
    </DCArtboard>
  </>);
};

/* =====================================================================
   CAROUSEL 04 — BEFORE / AFTER ~/Downloads
   ===================================================================== */
const C4 = () => {
  const T = 7;
  return (<>
    {/* 1 cover */}
    <DCArtboard id="c4-1" label="01 · Cover" width={1080} height={1350}>
      <div className="s">
        <Top left={<Wm/>} right="BEFORE / AFTER · 01 / 07"/>
        <div className="col grow" style={{justifyContent:'center', gap:24}}>
          <div className="eyebrow">A ~/Downloads horror story · in 6 seconds</div>
          <div className="h1" style={{fontSize:160}}>
            1,248 files.<br/>
            <span className="muted">4.2&nbsp;GB.</span><br/>
            <span className="ital accent">Cured.</span>
          </div>
          <div className="sub">No screenshots. Real output. Real ~/Downloads.</div>
        </div>
        <CTA/>
        <Bot left="●  swipe to see it run" right="01 / 07"/>
        <Swipe n={1} total={T}/>
      </div>
    </DCArtboard>

    {/* 2 before */}
    <DCArtboard id="c4-2" label="02 · Before" width={1080} height={1350}>
      <div className="s">
        <Top left={<Wm/>} right="02 / 07"/>
        <div className="col grow" style={{marginTop:80, gap:18}}>
          <div className="row between" style={{alignItems:'baseline'}}>
            <div>
              <div className="eyebrow">Before</div>
              <div className="h3"><span className="ital">~/Downloads</span></div>
            </div>
            <div className="mono" style={{color:'var(--accent)', fontSize:18, letterSpacing:'.1em'}}>HEALTH&nbsp; 22/100</div>
          </div>
          <div className="files" style={{marginTop:8}}>
            <div className="f"><span className="ic">▢</span><span>Screenshot 2026-04-21 at 09.14.png</span><span className="size">2.1 MB</span></div>
            <div className="f"><span className="ic">▢</span><span>Screenshot 2026-04-21 at 09.15.png</span><span className="size">2.0 MB</span></div>
            <div className="f"><span className="ic">▢</span><span>Screenshot 2026-04-21 at 09.16 (1).png</span><span className="size">2.1 MB</span></div>
            <div className="f dim"><span className="ic">⊟</span><span>… 60 more screenshots</span><span className="size">128 MB</span></div>
            <div className="f"><span className="ic">⬢</span><span>Setup-1.4.0.dmg</span><span className="size">412 MB</span></div>
            <div className="f"><span className="ic">⬢</span><span>Setup-1.4.0 (1).dmg</span><span className="size">412 MB</span></div>
            <div className="f"><span className="ic">⬢</span><span>Setup-1.4.0 (2).dmg</span><span className="size">412 MB</span></div>
            <div className="f dim"><span className="ic">⊟</span><span>… 11 more duplicate installers</span><span className="size">1.7 GB</span></div>
            <div className="f"><span className="ic">▦</span><span>tax-receipts-2023.zip</span><span className="size">88 MB</span></div>
            <div className="f"><span className="ic">▦</span><span>old-project-backup-2022.zip</span><span className="size">2.4 GB</span></div>
            <div className="f dim"><span className="ic">⊟</span><span>… 25 more stale archives</span><span className="size">3.2 GB</span></div>
            <div className="f"><span className="ic">⊘</span><span>my-resume.pdf.crdownload</span><span className="size">1.4 MB</span></div>
            <div className="f dim"><span className="ic">⊟</span><span>… 7 more broken downloads</span><span className="size">320 MB</span></div>
          </div>
          <div className="small" style={{marginTop:12}}>1,248 files · 4.2 GB · 1,242 duplicates · 3.8 GB recoverable</div>
        </div>
        <CTA/>
        <Bot left="●  the swamp" right="02 / 07"/>
        <Swipe n={2} total={T}/>
      </div>
    </DCArtboard>

    {/* 3 the verb */}
    <DCArtboard id="c4-3" label="03 · One command" width={1080} height={1350}>
      <div className="s dark">
        <Top left={<Wm dark/>} right="03 / 07"/>
        <div className="col grow" style={{justifyContent:'center', gap:32}}>
          <div className="eyebrow">One command</div>
          <div className="h1" style={{color:'var(--cream)', fontSize:120}}>
            <span className="ital muted">$</span> filemayor<br/>
            <span className="ital accent">cure</span> ~/Downloads
          </div>
          <div className="sub" style={{color:'#bcb4a6', fontSize:28, maxWidth:920}}>
            The AI proposes the plan. You see every move as a card.
            Nothing touches disk until you say <span className="mono accent">apply</span>.
          </div>
        </div>
        <div className="cta" style={{borderColor:'rgba(243,238,226,.18)', color:'#8a8377'}}>
          <span>plan → review → apply → undo</span>
          <span className="arrow">→</span>
        </div>
        <Bot left="●  Gemini 2.0 Flash · 0.8s · metadata only" right="03 / 07"/>
        <Swipe n={3} total={T}/>
      </div>
    </DCArtboard>

    {/* 4 the plan */}
    <DCArtboard id="c4-4" label="04 · The plan" width={1080} height={1350}>
      <div className="s">
        <Top left={<Wm/>} right="04 / 07"/>
        <div className="col grow" style={{marginTop:80, gap:18}}>
          <div className="eyebrow">The plan</div>
          <div className="h3">Four moves.<br/><span className="ital muted">112 files.</span></div>
          <div className="term" style={{marginTop:24, fontSize:22}}>{`CURATIVE PLAN
─────────────────────────────────
→ 63 screenshots  → ~/Downloads/Screenshots
→ 14 installers   → ~/Downloads/Software
→ 27 zips > 12mo  → ~/Archive/2024
→ 8 .crdownload   → trash
─────────────────────────────────
Plan covers 112 files · ETA 3.1s
→ filemayor apply`}</div>
          <div className="small" style={{marginTop:16}}>Every move appears as a card in the Desktop. Reject any one before apply.</div>
        </div>
        <CTA/>
        <Bot left="●  plan, do not act" right="04 / 07"/>
        <Swipe n={4} total={T}/>
      </div>
    </DCArtboard>

    {/* 5 after */}
    <DCArtboard id="c4-5" label="05 · After" width={1080} height={1350}>
      <div className="s deep">
        <Top left={<Wm/>} right="05 / 07"/>
        <div className="col grow" style={{marginTop:80, gap:18}}>
          <div className="row between" style={{alignItems:'baseline'}}>
            <div>
              <div className="eyebrow">After · 3.1 seconds</div>
              <div className="h3"><span className="ital">~/Downloads</span></div>
            </div>
            <div className="mono" style={{color:'var(--term)', fontSize:18, letterSpacing:'.1em', background:'rgba(163,201,119,.15)', padding:'6px 12px', borderRadius:4}}>HEALTH&nbsp; 94/100</div>
          </div>
          <div className="files" style={{marginTop:8, background:'var(--bg)', borderStyle:'solid'}}>
            <div className="f"><span className="ic">▤</span><span>Screenshots/<span className="muted"> · 63 files</span></span><span className="size">128 MB</span></div>
            <div className="f"><span className="ic">▤</span><span>Software/<span className="muted"> · 1 installer (others removed)</span></span><span className="size">412 MB</span></div>
            <div className="f"><span className="ic">▤</span><span>Documents/<span className="muted"> · 634 files</span></span><span className="size">0.8 GB</span></div>
            <div className="f"><span className="ic">▤</span><span>Videos/<span className="muted"> · 12 files</span></span><span className="size">2.1 GB</span></div>
            <div className="f dim"><span className="ic">⊘</span><span>(8 broken downloads removed)</span><span className="size">−320 MB</span></div>
            <div className="f dim"><span className="ic">↗</span><span>(27 stale archives → ~/Archive/2024)</span><span className="size">−3.2 GB</span></div>
          </div>
          <div className="row" style={{gap:0, marginTop:16, borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)'}}>
            <div style={{flex:1, padding:'18px 16px', borderRight:'1px solid var(--rule)'}}>
              <div className="stat-n" style={{fontSize:72}}>3.8<small>GB</small></div>
              <div className="stat-l" style={{fontSize:14, marginTop:6}}>recovered</div>
            </div>
            <div style={{flex:1, padding:'18px 16px', borderRight:'1px solid var(--rule)'}}>
              <div className="stat-n" style={{fontSize:72}}>112</div>
              <div className="stat-l" style={{fontSize:14, marginTop:6}}>files moved</div>
            </div>
            <div style={{flex:1, padding:'18px 16px'}}>
              <div className="stat-n" style={{fontSize:72}}>3.1<small>s</small></div>
              <div className="stat-l" style={{fontSize:14, marginTop:6}}>wall clock</div>
            </div>
          </div>
        </div>
        <CTA/>
        <Bot left="●  journaled · undo-anything" right="05 / 07"/>
        <Swipe n={5} total={T}/>
      </div>
    </DCArtboard>

    {/* 6 undo */}
    <DCArtboard id="c4-6" label="06 · Undo" width={1080} height={1350}>
      <div className="s">
        <Top left={<Wm/>} right="06 / 07"/>
        <div className="col grow" style={{marginTop:80, gap:18}}>
          <div className="eyebrow">Change your mind</div>
          <div className="h2" style={{fontSize:120}}>One verb<br/>back to <span className="ital muted">as-was.</span></div>
          <div className="term" style={{marginTop:24, fontSize:22}}>{`$ filemayor undo --all
  Reverting 112 operations
  ─────────────────────────────────
  [1/4] Trash         8 restored ✓
  [2/4] Archive      27 restored ✓
  [3/4] Software     14 restored ✓
  [4/4] Screenshots  63 restored ✓
  ─────────────────────────────────
  Session reverted · downloads as-was`}</div>
          <div className="sub" style={{marginTop:18}}>The journal persists across crashes and reboots. You can explore aggressively.</div>
        </div>
        <CTA/>
        <Bot left="●  safety net = local file" right="06 / 07"/>
        <Swipe n={6} total={T}/>
      </div>
    </DCArtboard>

    {/* 7 CTA */}
    <DCArtboard id="c4-7" label="07 · CTA" width={1080} height={1350}>
      <div className="s dark">
        <Top left={<Wm dark/>} right="07 / 07"/>
        <div className="col grow" style={{justifyContent:'center', gap:24}}>
          <div className="eyebrow">Your turn</div>
          <div className="h1" style={{color:'var(--cream)', fontSize:160}}>
            Point it at<br/><span className="ital accent">~/Downloads.</span>
          </div>
          <div className="term" style={{fontSize:22}}>{`$ npm install -g filemayor
$ filemayor explain ~/Downloads`}</div>
        </div>
        <div className="cta" style={{borderColor:'rgba(243,238,226,.18)', color:'#8a8377'}}>
          <span>filemayor.com · free forever</span>
          <span className="arrow">↗</span>
        </div>
        <Bot left="●  v4.0.1" right="07 / 07"/>
      </div>
    </DCArtboard>
  </>);
};

/* =====================================================================
   CAROUSEL 05 — MCP / CLAUDE INTEGRATION (techies)
   ===================================================================== */
const C5 = () => {
  const T = 7;
  return (<>
    {/* 1 cover */}
    <DCArtboard id="c5-1" label="01 · Cover" width={1080} height={1350}>
      <div className="s dark">
        <Top left={<Wm dark/>} right="MCP · 01 / 07"/>
        <div className="col grow" style={{justifyContent:'center', gap:24}}>
          <div className="eyebrow">For Claude users</div>
          <div className="h1" style={{color:'var(--cream)', fontSize:160}}>
            Give Claude<br/>
            <span className="ital accent">a filesystem</span><br/>
            it can <span className="ital">undo.</span>
          </div>
          <div className="sub" style={{color:'#bcb4a6', fontSize:28, maxWidth:920}}>
            One MCP server. Claude Desktop, Claude Code, and any MCP client
            can now diagnose folders and apply moves — locally, journaled.
          </div>
        </div>
        <div className="cta" style={{borderColor:'rgba(243,238,226,.18)', color:'#8a8377'}}>
          <span>@filemayor/mcp · v4.0.1</span>
          <span className="arrow">swipe →</span>
        </div>
        <Bot left="●  no glue code · no data leaves the machine" right="01 / 07"/>
        <Swipe n={1} total={T}/>
      </div>
    </DCArtboard>

    {/* 2 setup */}
    <DCArtboard id="c5-2" label="02 · 30-second setup" width={1080} height={1350}>
      <div className="s">
        <Top left={<Wm/>} right="02 / 07"/>
        <div className="col grow" style={{marginTop:80, gap:18}}>
          <div className="eyebrow">Setup · 30 seconds</div>
          <div className="h3">Paste this into<br/><span className="ital muted">claude_desktop_config.json</span></div>
          <div className="term" style={{marginTop:24, fontSize:24, lineHeight:1.6}}>{`{
  "mcpServers": {
    "filemayor": {
      "command": "npx",
      "args": ["-y", "@filemayor/mcp"]
    }
  }
}`}</div>
          <div className="sub" style={{marginTop:16}}>Restart Claude. Ask: <span className="ital">"diagnose my Downloads"</span>.</div>
        </div>
        <CTA/>
        <Bot left="●  one config block · no servers" right="02 / 07"/>
        <Swipe n={2} total={T}/>
      </div>
    </DCArtboard>

    {/* 3 ask claude */}
    <DCArtboard id="c5-3" label="03 · Ask Claude" width={1080} height={1350}>
      <div className="s deep">
        <Top left={<Wm/>} right="03 / 07"/>
        <div className="col grow" style={{marginTop:80, gap:18}}>
          <div className="eyebrow">Then ask Claude</div>
          <div className="h2" style={{fontSize:104}}><span className="ital">"Diagnose my<br/>Downloads."</span></div>
          <div className="term" style={{marginTop:32, fontSize:21}}>{`Claude › Tool call · filemayor.explain
  workspace: ~/Downloads
  ─────────────────────────────────
  ⮑  Health: 22/100
  ⮑  63 screenshots, 14 dup installers,
     27 stale archives, 8 broken downloads
  ⮑  3.8 GB recoverable

Claude › Want me to cure this? I'll show
        the plan before anything moves.`}</div>
        </div>
        <CTA/>
        <Bot left="●  Claude sees metadata only · never file bytes" right="03 / 07"/>
        <Swipe n={3} total={T}/>
      </div>
    </DCArtboard>

    {/* 4 the gates */}
    <DCArtboard id="c5-4" label="04 · Gates" width={1080} height={1350}>
      <div className="s dark">
        <Top left={<Wm dark/>} right="04 / 07"/>
        <div className="col grow" style={{marginTop:80, gap:18}}>
          <div className="eyebrow">Six layers between Claude and your disk</div>
          <div className="h3" style={{color:'var(--cream)'}}>The <span className="ital accent">Chevza Doctrine.</span></div>
          <div className="layers" style={{marginTop:32, borderColor:'rgba(243,238,226,.20)'}}>
            <div className="l" style={{borderColor:'rgba(243,238,226,.20)'}}>
              <div className="ix" style={{color:'#8a8377'}}>01</div><div className="nm" style={{color:'var(--cream)'}}>jailer</div>
              <div className="ds" style={{color:'#bcb4a6'}}>Path sandbox. AI can't escape the workspace.</div>
            </div>
            <div className="l" style={{borderColor:'rgba(243,238,226,.20)'}}>
              <div className="ix" style={{color:'#8a8377'}}>02</div><div className="nm" style={{color:'var(--cream)'}}>vault</div>
              <div className="ds" style={{color:'#bcb4a6'}}>Credentials in OS keychain. Never in files.</div>
            </div>
            <div className="l" style={{borderColor:'rgba(243,238,226,.20)'}}>
              <div className="ix" style={{color:'#8a8377'}}>03</div><div className="nm" style={{color:'var(--cream)'}}>guardrail</div>
              <div className="ds" style={{color:'#bcb4a6'}}>Refuses destructive batches by policy.</div>
            </div>
            <div className="l" style={{borderColor:'rgba(243,238,226,.20)'}}>
              <div className="ix" style={{color:'#8a8377'}}>04</div><div className="nm" style={{color:'var(--cream)'}}>halt</div>
              <div className="ds" style={{color:'#bcb4a6'}}>One-keystroke kill switch mid-apply.</div>
            </div>
            <div className="l" style={{borderColor:'rgba(243,238,226,.20)'}}>
              <div className="ix" style={{color:'#8a8377'}}>05</div><div className="nm" style={{color:'var(--cream)'}}>architect</div>
              <div className="ds" style={{color:'#bcb4a6'}}>The constitution. Allowed move-shapes only.</div>
            </div>
            <div className="l" style={{borderColor:'rgba(243,238,226,.20)'}}>
              <div className="ix" style={{color:'#8a8377'}}>06</div><div className="nm" style={{color:'var(--cream)'}}>security</div>
              <div className="ds" style={{color:'#bcb4a6'}}>Audit log of every move, every verdict.</div>
            </div>
          </div>
        </div>
        <div className="cta" style={{borderColor:'rgba(243,238,226,.18)', color:'#8a8377'}}>
          <span>all green · 6 / 6</span>
          <span className="arrow">→</span>
        </div>
        <Bot left="●  the answer to enterprise question #1" right="04 / 07"/>
        <Swipe n={4} total={T}/>
      </div>
    </DCArtboard>

    {/* 5 undo from chat */}
    <DCArtboard id="c5-5" label="05 · Undo from chat" width={1080} height={1350}>
      <div className="s">
        <Top left={<Wm/>} right="05 / 07"/>
        <div className="col grow" style={{marginTop:80, gap:18}}>
          <div className="eyebrow">Best part</div>
          <div className="h2"><span className="ital">"Actually,<br/>undo that."</span></div>
          <div className="term" style={{marginTop:32, fontSize:21}}>{`You    › Actually, undo that.

Claude › Tool call · filemayor.undo --all
  Reverting session 2026-04-26-1442
  ─────────────────────────────────
  ✓ 112 files restored
  ✓ Downloads as-was
  ─────────────────────────────────

Claude › Done. 112 files restored.
        Anything else you want me to try?`}</div>
          <div className="sub" style={{marginTop:16}}>The journal is local. The safety net is yours.</div>
        </div>
        <CTA/>
        <Bot left="●  undo from anywhere · CLI, Desktop, MCP" right="05 / 07"/>
        <Swipe n={5} total={T}/>
      </div>
    </DCArtboard>

    {/* 6 why this beats cloud */}
    <DCArtboard id="c5-6" label="06 · Local vs cloud" width={1080} height={1350}>
      <div className="s deep">
        <Top left={<Wm/>} right="06 / 07"/>
        <div className="col grow" style={{marginTop:80, gap:18}}>
          <div className="eyebrow">Why this beats cloud "AI file tools"</div>
          <div className="h3">Same magic.<br/><span className="ital muted">No upload.</span></div>
          <div className="col" style={{marginTop:32, gap:0, borderTop:'1px solid var(--rule)'}}>
            {[
              ['Files leave the machine', 'Yes — to a startup\'s S3', 'No — engine is local'],
              ['AI sees', 'Full file contents', 'Metadata only · names, sizes, paths'],
              ['Undo', 'Cloud trash, eventually', 'Local journal · one verb'],
              ['Works offline', 'No', 'Yes — disable AI, engine still runs'],
              ['IT approval', 'Months', 'It\'s a CLI on your laptop'],
            ].map(([k, a, b], i) => (
              <div key={i} className="row" style={{padding:'18px 0', borderBottom:'1px solid var(--rule)', alignItems:'baseline'}}>
                <span style={{flex:'0 0 220px', fontFamily:'var(--mono)', fontSize:16, letterSpacing:'.1em', color:'var(--muted)', textTransform:'uppercase'}}>{k}</span>
                <span style={{flex:1, fontSize:20, color:'var(--muted)', textDecoration:'line-through'}}>{a}</span>
                <span style={{flex:1, fontSize:20, color:'var(--ink)', fontFamily:'var(--serif)', fontStyle:'italic'}}>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <CTA/>
        <Bot left="●  cloud-first competitors can't retrofit this" right="06 / 07"/>
        <Swipe n={6} total={T}/>
      </div>
    </DCArtboard>

    {/* 7 CTA */}
    <DCArtboard id="c5-7" label="07 · CTA" width={1080} height={1350}>
      <div className="s dark">
        <Top left={<Wm dark/>} right="07 / 07"/>
        <div className="col grow" style={{justifyContent:'center', gap:24}}>
          <div className="eyebrow">Install once · drive it from anywhere</div>
          <div className="h1" style={{color:'var(--cream)', fontSize:160}}>
            <span className="ital muted">@filemayor</span><br/>
            <span className="ital accent">/mcp</span>
          </div>
          <div className="term" style={{fontSize:22}}>$ npx -y @filemayor/mcp</div>
          <div className="sub" style={{color:'#bcb4a6', fontSize:26, maxWidth:920}}>
            Free for personal use. Works with Claude Desktop, Claude Code,
            and any MCP-aware client.
          </div>
        </div>
        <div className="cta" style={{borderColor:'rgba(243,238,226,.18)', color:'#8a8377'}}>
          <span>filemayor.com/skill · @filemayor/mcp on npm</span>
          <span className="arrow">↗</span>
        </div>
        <Bot left="●  scan → explain → cure → apply → undo" right="07 / 07"/>
      </div>
    </DCArtboard>
  </>);
};

/* ---------------------- canvas ---------------------- */
const App = () => (
  <DesignCanvas>
    <DCSection id="c1" title="01 · Hero — Suggest vs. Act" subtitle="Mixed audience · 7 slides · 1080×1350">
      <C1/>
    </DCSection>
    <DCSection id="c2" title="02 · Five Verbs Walkthrough" subtitle="Devs · 7 slides · 1080×1350">
      <C2/>
    </DCSection>
    <DCSection id="c3" title="03 · Founder Story · Chevza / SA" subtitle="Founders + investors · 7 slides · 1080×1350">
      <C3/>
    </DCSection>
    <DCSection id="c4" title="04 · Before / After ~/Downloads" subtitle="General · 7 slides · 1080×1350">
      <C4/>
    </DCSection>
    <DCSection id="c5" title="05 · MCP + Claude Integration" subtitle="Devs + AI builders · 7 slides · 1080×1350">
      <C5/>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
