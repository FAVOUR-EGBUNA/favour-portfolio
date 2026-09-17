import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Mail, Code2, Database, Layers3, Sparkles } from 'lucide-react';

const skills=[['Frontend','React · TypeScript · Vite · Tailwind CSS'],['Application','TanStack Query · React Hook Form · Zod · REST APIs'],['Backend','Node.js · Express · PostgreSQL · Prisma'],['Delivery','Git · GitHub · Vercel · Render · Neon · Cloudinary']];
const projects=[
 {no:'01',name:'NOVA COMMERCE',type:'FULL-STACK E-COMMERCE',desc:'A production-style fashion commerce experience — from product discovery and wishlist state to server-validated checkout, customer orders and role-based store administration.',stack:'React / TypeScript / Node / Express / PostgreSQL / Prisma',live:'https://nova-commerce-topaz.vercel.app',repo:'https://github.com/FAVOUR-EGBUNA/Nova-Commerce',tone:'nova',journey:['DISCOVER','PRODUCT','CART','CHECKOUT','ORDERS','ADMIN'],metrics:[['10+','PRODUCTS'],['JWT','AUTH'],['3','SYSTEM LAYERS']]},
 {no:'02',name:'EVENTRA',type:'EVENT TICKETING SYSTEM',desc:'An end-to-end ticketing platform connecting attendees, organizers and administrators through discovery, checkout, QR ticketing, event operations and check-in.',stack:'React / TypeScript / Node / Express / PostgreSQL',live:'https://eventra-portfolio.vercel.app',repo:'https://github.com/FAVOUR-EGBUNA/Eventra-Portfolio',tone:'eventra',journey:['DISCOVER','TICKETS','CHECKOUT','QR PASS','CHECK-IN','ADMIN'],metrics:[['3','USER ROLES'],['QR','TICKETING'],['RBAC','ACCESS']]}
];

function App(){
 const {scrollYProgress}=useScroll();
 const scaleX=useSpring(scrollYProgress,{stiffness:120,damping:30});
 const [intro,setIntro]=useState(true);
 const [cursor,setCursor]=useState({x:-100,y:-100});
 useEffect(()=>{const t=setTimeout(()=>setIntro(false),1500);const move=(e:MouseEvent)=>setCursor({x:e.clientX,y:e.clientY});window.addEventListener('mousemove',move);return()=>{clearTimeout(t);window.removeEventListener('mousemove',move)}},[]);
 return <main>
  {intro&&<motion.div className="intro" initial={{opacity:1}} exit={{opacity:0}} animate={{opacity:1}}><motion.div initial={{width:0}} animate={{width:'100%'}} transition={{duration:1.15}} className="introLine"/><span>INITIALIZING FAVOUR.DEV</span><b>FULL-STACK / 2026</b></motion.div>}
  <motion.div className="cursorGlow" animate={{x:cursor.x-180,y:cursor.y-180}} transition={{type:'spring',damping:30,stiffness:180}}/>
  <motion.div className="progress" style={{scaleX}} />
  <div className="noise"/><div className="orb orb1"/><div className="orb orb2"/>
  <nav><a className="mark" href="#top">FE<span>.</span></a><div className="navlinks"><a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#contact">CONTACT</a></div><a className="available" href="mailto:favouregbuna4@gmail.com"><i/> AVAILABLE FOR WORK</a></nav>
  <section className="hero" id="top">
   <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:1.35}} className="eyebrow"><span>FULL-STACK DEVELOPER</span><span>LAGOS, NIGERIA</span></motion.div>
   <div className="heroTitle"><motion.h1 initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:1.45}}>FAVOUR</motion.h1><motion.h1 className="outline" initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:1.58}}>EGBUNA.</motion.h1></div>
   <motion.div className="heroBottom" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.9}}><p>I build <b>interfaces people enjoy</b>,<br/>the logic behind them, and the<br/>systems that make them work.</p><a className="circleLink" href="#work"><span>EXPLORE<br/>MY WORK</span><ArrowUpRight/></a></motion.div>
   <div className="marquee"><div>REACT ✦ TYPESCRIPT ✦ NODE.JS ✦ POSTGRESQL ✦ EXPRESS ✦ PRODUCT ENGINEERING ✦ REACT ✦ TYPESCRIPT ✦ NODE.JS ✦ POSTGRESQL ✦ EXPRESS ✦ PRODUCT ENGINEERING ✦</div></div>
  </section>

  <section id="work" className="work"><div className="sectionHead"><span>01 / SELECTED WORK</span><h2>Products, not<br/><em>just pages.</em></h2><p>Two end-to-end builds that show how I think across interface, application logic, data and delivery.</p></div>
   {projects.map((p,i)=><motion.article className={`project ${p.tone}`} key={p.name} initial={{opacity:0,y:80}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.8}}>
    <div className="projectTop"><span>{p.no}</span><span>{p.type}</span><span>2026</span></div>
    <div className="projectBody"><div className="projectCopy"><span className="projectKicker">CASE STUDY / {p.no}</span><h3>{p.name}</h3><p>{p.desc}</p><small>{p.stack}</small><div className="actions"><a href={p.live} target="_blank" rel="noreferrer">LIVE EXPERIENCE <ArrowUpRight size={16}/></a><a href={p.repo} target="_blank" rel="noreferrer">⌘ SOURCE</a></div></div>
     <div className="productStage"><div className="browser"><div className="browserBar"><i/><i/><i/><span>{i===0?'nova-commerce':'eventra'}.vercel.app</span></div><div className="mock"><div className="stageLabel">{i===0?'COMMERCE SYSTEM':'EVENT OPERATIONS'}</div><span className="bigMark">{i===0?'NOVA':'EVENTRA'}</span><div className="mockGrid"><i/><i/><i/></div><div className="scan"/></div></div><motion.div className="floatCard fc1" animate={{y:[0,-10,0]}} transition={{duration:4,repeat:Infinity}}>API<br/><b>CONNECTED</b></motion.div><motion.div className="floatCard fc2" animate={{y:[0,8,0]}} transition={{duration:5,repeat:Infinity}}>STATUS<br/><b>LIVE</b></motion.div></div>
    </div>
    <div className="journey"><span>PRODUCT FLOW</span><div>{p.journey.map((step,n)=><div key={step}><b>0{n+1}</b><em>{step}</em>{n<p.journey.length-1&&<i>→</i>}</div>)}</div></div>
    <div className="metrics">{p.metrics.map(m=><div key={m[1]}><strong>{m[0]}</strong><span>{m[1]}</span></div>)}</div>
   </motion.article>)}
  </section>

  <section id="about" className="about"><div className="sectionHead"><span>02 / ENGINEERING PROFILE</span><h2>Across the<br/><em>whole stack.</em></h2><p>From the first interaction to the database record behind it, I care about the complete product path.</p></div><div className="skillGrid">{skills.map((s,i)=><motion.div className="skill" key={s[0]} whileHover={{y:-8}}><span>0{i+1}</span>{i===0?<Code2/>:i===1?<Layers3/>:i===2?<Database/>:<Sparkles/>}<h3>{s[0]}</h3><p>{s[1]}</p></motion.div>)}</div>
   <div className="architecture"><span>HOW I SHIP</span><div><b>INTERFACE</b><i>→</i><b>API</b><i>→</i><b>SERVER</b><i>→</i><b>DATABASE</b><i>→</i><b>CLOUD</b></div><small>REACT → REST → NODE / EXPRESS → POSTGRESQL → VERCEL / RENDER</small></div>
  </section>

  <section id="contact" className="contact"><span>03 / LET'S BUILD</span><h2>Have a product<br/>worth <em>building?</em></h2><a href="mailto:favouregbuna4@gmail.com" className="mail"><Mail/> favouregbuna4@gmail.com <ArrowUpRight/></a><div className="footer"><span>FAVOUR EGBUNA © 2026</span><a href="https://github.com/FAVOUR-EGBUNA" target="_blank" rel="noreferrer">GITHUB ↗</a><span>FULL-STACK DEVELOPER</span></div></section>
 </main>
}
export default App;