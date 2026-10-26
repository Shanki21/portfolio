import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUp, ArrowUpRight, Bug, Github, Phone, RotateCcw, Sparkles } from 'lucide-react';

const projects = [
  { name: 'PixDrive', type: 'Cloud storage · Full stack', href: 'https://www.pixdrive.site', stack: 'Next.js · TypeScript · Prisma · PostgreSQL', images: ['/pixdrive/img1.png', '/pixdrive/img2.png', '/pixdrive/img3.png'], note: 'A considered home for files, built around a clean and focused product experience.' },
  { name: 'Slot.sa', type: 'Booking platform · Full stack', href: 'https://slot.slot.sa', stack: 'Next.js · TypeScript · Prisma · PostgreSQL', images: ['/slot/Screenshot%202026-10-26%20143051.png', '/slot/Screenshot%202026-10-26%20143126.png', '/slot/Screenshot%202026-10-26%20143203.png'], note: 'A booking experience designed to make finding and reserving a slot feel simple.' },
];

const services = [
  ['01', 'Web applications', 'Responsive interfaces in React and Next.js, connected cleanly to the data and services behind them.'],
  ['02', 'APIs & backend', 'Reliable REST APIs with Node.js, Express, Java and Spring Boot, built for real product workflows.'],
  ['03', 'Data & security', 'Thoughtful PostgreSQL, MySQL and MongoDB schemas with JWT, RBAC and bcrypt authentication.'],
  ['04', 'Ship & improve', 'From Docker and Git to AWS, Vercel and Render: deployment, debugging and performance improvements.'],
];

const experience = [
  { company: 'Structures Online', role: 'Full Stack Developer', period: 'May 2025 — Aug 2026', detail: 'Built Node.js and Express REST APIs, designed PostgreSQL and MySQL databases, and implemented JWT authentication with role based access control. Debugged production issues and improved API and database queries.', tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT / RBAC'] },
  { company: 'Technogig Software Solution', role: 'Full Stack Developer', period: 'Nov 2022 — Dec 2024', detail: 'Developed React and Next.js applications with API integrations, modeled application data in MongoDB, and implemented secure authentication with JWT and bcrypt. Contributed to architecture and production support.', tags: ['React', 'Next.js', 'MongoDB', 'bcrypt'] },
];

const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Docker', 'AWS', 'JWT / RBAC'];

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'on-light' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>;
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 30]);
  return <section ref={ref} className="hero" id="top">
    <div className="hero-grain" aria-hidden="true" />
    <header className="nav-wrap"><a href="#top" className="brand" aria-label="Mridul Rawat home"><span className="brand-mark">M</span><span>MRIDUL RAWAT<small>FULL STACK DEVELOPER</small></span></a><nav className="nav-links" aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact" className="nav-contact">Let’s talk <ArrowUpRight size={15} /></a></nav></header>
    <div className="hero-content">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [.2, .7, .2, 1] }}>
        <div className="availability"><span /> OPEN TO GREAT PROJECTS <Sparkles size={13} /></div>
        <p className="hero-intro">I turn complex ideas into <span>useful digital products.</span></p>
        <h1>MRIDUL<br /><span>RAWAT</span><i>®</i></h1>
        <div className="hero-bottom"><p>Full stack developer building considered interfaces and dependable systems, from the first sketch to production.</p><a className="button button-lime" href="#work">Explore my work <ArrowDown size={16} /></a></div>
      </motion.div>
      <motion.div className="portrait-stage" initial={{ opacity: 0, scale: .94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: .16 }} style={{ y: portraitY }}>
        <motion.div className="portrait-orbit orbit-one" style={{ rotate: orbitRotate }} /><div className="portrait-orbit orbit-two" />
        <div className="portrait-glow" />
        <img src="/mridul.png" alt="Portrait of Mridul Rawat" className="portrait" />
        <div className="portrait-caption"><span>BASED IN INDIA</span><span>AVAILABLE WORLDWIDE ↗</span></div>
      </motion.div>
      <div className="hero-index"><span>01 / 05</span><span>SCROLL TO EXPLORE ↓</span></div>
    </div>
  </section>;
}

function InfiniteTicker() {
  const words = ['DESIGN MINDED', 'API BUILDER', 'PRODUCT THINKER', 'FULL STACK', 'DETAIL OBSESSED'];
  return <div className="ticker" aria-label="Design minded · API builder · product thinker · full stack"><div className="ticker-track">{[0, 1, 2, 3].map(copy => <div className="ticker-group" key={copy} aria-hidden={copy > 0}>{words.map(word => <span key={`${copy}-${word}`}>{word}<i>✳</i></span>)}</div>)}</div></div>;
}

function About() {
  return <section className="about section-pad" id="about"><div className="about-top"><p className="eyebrow">A LITTLE ABOUT ME <span>✳</span></p><p className="about-aside">CODE WITH CLARITY.<br />BUILD FOR PEOPLE.</p></div><div className="about-copy"><h2>I like making the <em>complicated</em> feel beautifully simple.</h2><p>I’m a full stack developer with 3+ years of experience building web applications and REST APIs. I move comfortably between React and Next.js interfaces, backend services, databases and the details that make a product feel finished.</p><p>My approach is practical: understand the real problem, choose the right tools, and ship something people can rely on.</p><a href="#experience" className="text-link">A little more about how I work <ArrowUpRight size={17} /></a></div><div className="about-stats"><div><strong>3<span>+</span></strong><small>YEARS BUILDING</small></div><div><strong>14</strong><small>TOOLS IN MY STACK</small></div><div><strong>∞</strong><small>THINGS LEFT TO LEARN</small></div></div></section>;
}

function Skills() {
  return <section className="skills-section section-pad"><div className="skills-heading"><div><p className="eyebrow">TOOLS I REACH FOR</p><h2>A flexible stack.<br /><span>A thoughtful approach.</span></h2></div><p>Good tools matter. Knowing when and how to use them matters more.</p></div><div className="skill-cloud">{skills.map((skill, i) => <motion.span key={skill} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 7) * .06 }} whileHover={{ y: -5, rotate: i % 2 ? 2 : -2 }} className={i % 4 === 0 ? 'skill-pill featured' : 'skill-pill'}>{skill}<span>↗</span></motion.span>)}</div></section>;
}

function Services() {
  return <section className="services section-pad"><SectionHeading eyebrow="WHAT I BRING TO THE TABLE" title="From first commit to final pixel." light /><div className="service-list">{services.map(([num, title, desc]) => <motion.article className="service-row" key={num} whileHover={{ x: 8 }}><span className="service-number">{num}</span><h3>{title}</h3><p>{desc}</p><ArrowUpRight className="service-arrow" size={20} /></motion.article>)}</div></section>;
}

function Projects() {
  return <section className="projects section-pad" id="work"><SectionHeading eyebrow="SELECTED WORK · 2026" title="Made to be used." /><div className="project-list">{projects.map((project, i) => <motion.article className={`project-card project-${i + 1}`} key={project.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55 }}><a href={project.href} target="_blank" rel="noreferrer" className="project-image-link" aria-label={`Open ${project.name}`}><div className="project-mosaic"><img src={project.images[0]} alt={`${project.name} screen`} loading="lazy" /><img src={project.images[1]} alt={`${project.name} screen`} loading="lazy" /><img src={project.images[2]} alt={`${project.name} screen`} loading="lazy" /></div><span className="project-open"><ArrowUpRight size={24} /></span></a><div className="project-info"><div><p className="eyebrow">0{i + 1} — {project.type}</p><h3>{project.name}</h3><p className="project-note">{project.note}</p></div><a href={project.href} target="_blank" rel="noreferrer" className="project-arrow" aria-label={`Visit ${project.name}`}><ArrowUpRight size={22} /></a></div><div className="project-tags">{project.stack.split(' · ').map(tag => <span key={tag}>{tag}</span>)}</div></motion.article>)}</div></section>;
}

function Experience() {
  return <section className="experience section-pad" id="experience"><SectionHeading eyebrow="THE ROAD SO FAR" title="Experience that ships." /><div className="experience-list">{experience.map((item, i) => <article className="experience-item" key={item.company}><div className="experience-meta"><span>0{i + 1}</span><span>{item.period}</span></div><div className="experience-body"><h3>{item.company}</h3><p className="experience-role">{item.role}</p><p className="experience-detail">{item.detail}</p><div className="project-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><span className="experience-dot" /></article>)}</div></section>;
}

function PointerGlow() {
  const x = useMotionValue(-500), y = useMotionValue(-500);
  const smoothX = useSpring(x, { stiffness: 90, damping: 24, mass: .5 });
  const smoothY = useSpring(y, { stiffness: 90, damping: 24, mass: .5 });
  useEffect(() => {
    const move = (event: PointerEvent) => { x.set(event.clientX - 150); y.set(event.clientY - 150); };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);
  return <motion.div aria-hidden="true" className="cursor-glow" style={{ x: smoothX, y: smoothY }} />;
}

function FloatingNav() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollY, 'change', value => setVisible(value > 620));
  return <AnimatePresence>{visible && <motion.nav className="floating-nav" aria-label="Quick navigation" initial={{ opacity: 0, y: 20, x: '-50%' }} animate={{ opacity: 1, y: 0, x: '-50%' }} exit={{ opacity: 0, y: 20, x: '-50%' }} transition={{ duration: .25 }}><a href="#top" aria-label="Back to top"><ArrowUp size={15} /></a><a href="#about">ABOUT</a><a href="#work">WORK</a><a href="#play" className="dock-play">PLAY <span>↗</span></a></motion.nav>}</AnimatePresence>;
}

function BugHunt() {
  const [playing, setPlaying] = useState(false);
  const [seconds, setSeconds] = useState(20);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [position, setPosition] = useState({ left: 48, top: 48 });
  const [target, setTarget] = useState(0);
  const areaRef = useRef<HTMLDivElement>(null);
  const moveTarget = () => {
    setPosition({ left: 8 + Math.random() * 84, top: 12 + Math.random() * 74 });
    setTarget(value => value + 1);
  };

  useEffect(() => {
    if (!playing) return;
    const clock = window.setInterval(() => setSeconds(value => {
      if (value <= 1) { setPlaying(false); return 0; }
      return value - 1;
    }), 1000);
    const jump = window.setInterval(moveTarget, 1150);
    return () => { window.clearInterval(clock); window.clearInterval(jump); };
  }, [playing]);

  const start = () => { setScore(0); setSeconds(20); moveTarget(); setPlaying(true); areaRef.current?.focus(); };
  const smash = () => {
    if (!playing) return;
    setScore(value => { const next = value + 1; setBest(current => Math.max(current, next)); return next; });
    moveTarget();
  };

  return <section className="game-section section-pad" id="play"><div className="game-copy"><p className="eyebrow">A SMALL SIDE QUEST</p><h2>Ship it.<br /><em>Squash bugs.</em></h2><p>No quiz this time. You have 20 seconds to catch the runaway bugs. How many can you fix?</p><div className="game-high-score"><span>YOUR BEST</span><b>{best.toString().padStart(2, '0')}</b><span>BUGS FIXED</span></div></div><div className="whack-game"><div className="whack-top"><div className="terminal-lights"><i /><i /><i /></div><span>PRODUCTION / BUGS.EXE</span><span className={playing ? 'live-indicator' : ''}>{playing ? '● LIVE' : '● READY'}</span></div><div ref={areaRef} className={`bug-arena ${playing ? 'is-playing' : ''}`} tabIndex={0} aria-label="Bug catching game area. Click the moving bug to score."><div className="arena-grid" aria-hidden="true" />{playing ? <><div className="arena-score"><span>SCORE <b>{score.toString().padStart(2, '0')}</b></span><span>TIME <b className={seconds <= 5 ? 'time-low' : ''}>{`00:${seconds.toString().padStart(2, '0')}`}</b></span></div><motion.button key={target} className="bug-target" style={{ left: `${position.left}%`, top: `${position.top}%` }} initial={{ opacity: 0, scale: .3, rotate: -35 }} animate={{ opacity: 1, scale: 1, rotate: [0, -12, 12, 0] }} exit={{ opacity: 0, scale: .2 }} transition={{ duration: .2 }} onClick={smash} aria-label="Squash bug"><Bug size={28} strokeWidth={2.4} /></motion.button><div className="arena-hint">CLICK OR TAP THE BUG</div></> : <div className="arena-start"><div className="start-icon"><Bug size={28} /></div><p className="eyebrow">{seconds === 0 ? 'TIME IS UP' : 'READY WHEN YOU ARE'}</p><h3>{seconds === 0 ? `You fixed ${score} ${score === 1 ? 'bug' : 'bugs'}.` : 'Ready to ship?'}</h3>{seconds === 0 && <p className="final-score">Final score <b>{score}</b> · Best <b>{best}</b></p>}<button className="button button-lime" onClick={start}><RotateCcw size={15} /> {seconds === 0 ? 'Run it back' : 'Start game'}</button></div>}</div><div className="whack-foot"><span>TIP: TARGETS JUMP EVERY SECOND</span><span>{playing ? 'KEEP YOUR EYES OPEN ↗' : '20 SECOND SPRINT'}</span></div></div></section>;
}

function Contact() {
  return <footer className="contact section-pad" id="contact"><p className="eyebrow">HAVE A GOOD ONE IN MIND?</p><h2>Let’s make<br /><em>it real.</em></h2><a className="contact-email" href="mailto:mridulrawat21@gmail.com">mridulrawat21@gmail.com <ArrowUpRight size={21} /></a><div className="footer-bottom"><a href="#top" className="brand"><span className="brand-mark">M</span><span>MRIDUL RAWAT<small>FULL STACK DEVELOPER</small></span></a><div className="social-links"><a href="https://github.com/Shanki21" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a><a href="tel:+917531988764" aria-label="Call Mridul"><Phone size={18} /></a></div></div></footer>;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  return <main><motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} /><PointerGlow /><FloatingNav /><Hero /><InfiniteTicker /><About /><Skills /><Services /><Projects /><Experience /><BugHunt /><Contact /></main>;
}
