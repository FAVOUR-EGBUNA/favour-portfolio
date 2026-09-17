import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Mail, Code2, Database, Layers3, Sparkles } from 'lucide-react';

const skills=[['Frontend','React · TypeScript · Vite · Tailwind CSS'],['Application','TanStack Query · React Hook Form · Zod · REST APIs'],['Backend','Node.js · Express · PostgreSQL · Prisma'],['Delivery','Git · GitHub · Vercel · Render · Neon · Cloudinary']];
const projects=[
 {no:'01',name:'NOVA COMMERCE',type:'FULL-STACK E-COMMERCE',desc:'A production-style fashion commerce experience — from product discovery and wishlist state to server-validated checkout, customer orders and role-based store administration.',stack:'React / TypeScript / Node / Express / PostgreSQL / Prisma',live:'https://nova-commerce-topaz.vercel.app',repo:'https://github.com/FAVOUR-EGBUNA/Nova-Commerce',tone:'nova'},
 {no:'02',name:'EVENTRA',type:'EVENT TICKETING SYSTEM',desc:'An end-to-end ticketing platform connecting attendees, organizers and administrators through discovery, checkout, QR ticketing, event operations and check-in.',stack:'React / TypeScript / Node / Express / PostgreSQL',live:'https://eventra-portfolio.vercel.app',repo:'https://github.com/FAVOUR-EGBUNA/Eventra-Portfolio',tone:'eventra'}
];

function App(){
 const {scrollYProgress}=useScroll(); const scaleX=useSpring(scrollYProgress,{stiffness:120,damping:30});
 return <main>
  <motion.div className="progress" style={{scaleX}} />
  <div className="noise"/><div className="orb orb1"/><div className="orb orb2"/>
  <nav><a className="mark" href="#top">FE<span>.</span></a><div className="navlinks"><a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#contact">CONTACT</a></div><a className="available" href="mailto:favouregbuna4@gmail.com"><i/> AVAILABLE FOR WORK</a></nav>
  <section className="hero" id="top">
   <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="eyebrow"><span>FULL-STACK DEVELOPER</span><span>LAGOS, NIGERIA</span></motion.div>
   <div className="heroTitle"><motion.h1 initial={{opacity:0,y:80}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:.1}}>FAVOUR</motion.h1><motion.h1 className="outline" initial={{opacity:0,y:80}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:.22}}>EGBUNA.</motion.h1></div>
   <motion.div className="heroBottom" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.7}}><p>I build <b>interfaces people enjoy</b>,<br/>the logic behind them, and the<br/>systems that make them work.</p><a className="circleLink" href="#work"><span>EXPLORE<br/>MY WORK</span><ArrowUpRight/></a></motion.div>
   <div className="marquee"><div>REACT ✦ TYPESCRIPT ✦ NODE.JS ✦ POSTGRESQL ✦ EXPRESS ✦ PRODUCT ENGINEERING ✦ REACT ✦ TYPESCRIPT ✦ NODE.JS ✦ POSTGRESQL ✦ EXPRESS ✦ PRODUCT ENGINEERING ✦</div></div>
  </section>

  <section id="work" className="work"><div className="sectionHead"><span>01 / SELECTED WORK</span><h2>Products, not<br/><em>just pages.</em></h2><p>Two end-to-end builds that show how I think across interface, application logic, data and delivery.</p></div>
   {projects.map((p,i)=><motion.article className={`project ${p.tone}`} key={p.name} initial={{opacity:0,y:70}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.7}}>
    <div className="projectTop"><span>{p.no}</span><span>{p.type}</span><span>2026</span></div>
    <div className="projectBody"><div><h3>{p.name}</h3><p>{p.desc}</p><small>{p.stack}</small><div className="actions"><a href={p.live} target="_blank" rel="noreferrer">LIVE EXPERIENCE <ArrowUpRight size={16}/></a><a href={p.repo} target="_blank" rel="noreferrer">⌘ SOURCE</a></div></div><div className="browser"><div className="browserBar"><i/><i/><i/><span>{i===0?'nova-commerce':'eventra'}.vercel.app</span></div><div className="mock"><span className="bigMark">{i===0?'NOVA':'EVENTRA'}</span><div className="mockGrid"><i/><i/><i/></div><div className="scan"/></div></div></div>
   </motion.article>)}
  </section>

  <section id="about" className="about"><div className="sectionHead"><span>02 / ENGINEERING PROFILE</span><h2>Across the<br/><em>whole stack.</em></h2></div><div className="skillGrid">{skills.map((s,i)=><motion.div className="skill" key={s[0]} whileHover={{y:-8}}><span>0{i+1}</span>{i===0?<Code2/>:i===1?<Layers3/>:i===2?<Database/>:<Sparkles/>}<h3>{s[0]}</h3><p>{s[1]}</p></motion.div>)}</div>
   <div className="architecture"><span>HOW I SHIP</span><div><b>INTERFACE</b><i>→</i><b>API</b><i>→</i><b>SERVER</b><i>→</i><b>DATABASE</b><i>→</i><b>CLOUD</b></div></div>
  </section>

  <section id="contact" className="contact"><span>03 / LET'S BUILD</span><h2>Have a product<br/>worth <em>building?</em></h2><a href="mailto:favouregbuna4@gmail.com" className="mail"><Mail/> favouregbuna4@gmail.com <ArrowUpRight/></a><div className="footer"><span>FAVOUR EGBUNA © 2026</span><a href="https://github.com/FAVOUR-EGBUNA" target="_blank" rel="noreferrer">GITHUB ↗</a><span>FULL-STACK DEVELOPER</span></div></section>
 </main>
}
export default App;