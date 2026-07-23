import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyMatchHaven.css';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  ['01','Human-Led Compatibility','Insight Supports. People Understand.','Thoughtful compatibility assessment reveals potential, while experienced relationship experts personally curate every introduction.','human'],
  ['02','Family Values','Relationships Bring Families Together.','We honour family guidance while always respecting personal choices and individual journeys.','family'],
  ['03','Cultural Compatibility','Shared Values Create Stronger Bonds.','Beyond interests, we consider traditions, aspirations, lifestyles, and long-term compatibility.','culture'],
  ['04','Quality Over Quantity','Curated Introductions, Not Endless Profiles.','Every recommendation is carefully selected, ensuring meaningful connections instead of overwhelming choices.','quality'],
  ['05','Privacy & Confidentiality','Your Story Stays Yours.','Every conversation, profile, and introduction is handled with complete discretion and confidentiality.','privacy'],
];

function Art({type}) {
  if(type==='quality') return <svg viewBox="0 0 600 400"><g className="faded"><rect x="35" y="105" width="145" height="220" rx="18"/><circle cx="107" cy="169" r="31"/></g><g className="selected"><rect x="205" y="42" width="190" height="315" rx="23"/><circle cx="300" cy="137" r="46"/><path d="M240 260c6-63 27-94 60-94s54 31 60 94"/></g><g className="faded"><rect x="420" y="105" width="145" height="220" rx="18"/><circle cx="492" cy="169" r="31"/></g><circle className="gold halo" cx="300" cy="199" r="184"/></svg>;
  if(type==='privacy') return <svg viewBox="0 0 680 420"><path className="arch" d="M55 398V190c0-186 570-186 570 0v208M112 398V216c0-128 456-128 456 0v182"/><path className="vault" d="M232 396V215c0-65 216-65 216 0v181Z"/><circle className="gold" cx="340" cy="303" r="52"/><path className="gold" d="M340 267v72m-36-36h72m-61-25 50 50m0-50-50 50"/><path className="gold botanical" d="M91 367c12-78 45-129 105-159m393 159c-12-78-45-129-105-159"/></svg>;
  if(type==='human') return <svg viewBox="0 0 680 520"><path className="arch" d="M65 478V240c0-210 550-210 550 0v238"/><g><circle cx="210" cy="212" r="50"/><path d="M122 425c7-114 40-165 88-165s81 51 88 165"/></g><g className="paper"><rect x="342" y="104" width="245" height="329" rx="22"/><circle cx="404" cy="174" r="28"/><path d="M449 160h92m-92 22h69M385 245h151m-151 45h126m-126 44h143"/><path className="gold" d="m395 382 19 19 41-48"/></g><path className="gold thread" d="M259 260c48-54 82-56 116-28"/></svg>;
  return <svg viewBox="0 0 580 390"><path className="arch" d="M45 358V183c0-155 490-155 490 0v175"/><g><circle cx="185" cy="174" r="36"/><path d="M124 318c5-84 28-121 61-121s56 37 61 121"/></g><g><circle cx="395" cy="174" r="36"/><path d="M334 318c5-84 28-121 61-121s56 37 61 121"/></g><path className="gold thread" d="M232 255c42 30 74 30 116 0"/>{type==='family'&&<><circle cx="264" cy="200" r="24"/><circle cx="316" cy="200" r="24"/><path d="M236 325c4-61 14-91 28-91m80 91c-4-61-14-91-28-91"/></>}<path className="gold botanical" d="M76 330c8-74 38-122 94-151m334 151c-8-74-38-122-94-151"/></svg>;
}

export default function WhyMatchHaven(){
  const root=useRef(null); const refs=useRef([]);
  useEffect(()=>{const ctx=gsap.context(()=>{gsap.from('.wmh-head>*',{y:32,opacity:0,stagger:.12,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'.wmh-head',start:'top 80%'}});refs.current.forEach((card,i)=>{gsap.from(card,{y:44,opacity:0,duration:.9,delay:i*.04,ease:'power3.out',scrollTrigger:{trigger:card,start:'top 86%'}});gsap.from(card.querySelector('svg'),{scale:.94,opacity:0,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:card,start:'top 83%'}})});gsap.to('.wmh-card-1 svg',{y:-7,duration:4,repeat:-1,yoyo:true,ease:'sine.inOut'});gsap.to('.wmh-card-4 .selected',{y:-7,duration:3.5,repeat:-1,yoyo:true,ease:'sine.inOut'})},root);return()=>ctx.revert()},[]);
  return <section className="wmh" ref={root} aria-labelledby="wmh-title"><div className="wmh-texture"/><header className="wmh-head"><span>Why Traditional Matchmaking</span><h2 id="wmh-title">The Difference Is In <em>The Details.</em></h2><p>Where personal expertise meets timeless human values to create meaningful lifelong relationships.</p><div className="wmh-divider"><i/>◆<i/></div></header><div className="wmh-grid">{cards.map(([n,label,title,copy,type],i)=><article className={`wmh-card wmh-card-${i+1}`} key={n} ref={el=>{if(el)refs.current[i]=el}}><div className="wmh-art"><span>{n}</span><Art type={type}/></div><div className="wmh-copy"><span>{label}</span><h3>{title}</h3><i/><p>{copy}</p></div></article>)}</div></section>
}
