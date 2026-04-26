'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
  HeartHandshake,
  Trophy,
  Mail,
  CheckCircle2,
} from 'lucide-react';

const pillars = [
  'Strategic Leadership & Development',
  'Career Shadowing',
  'Domestic Travel Abroad',
  'Standardized Test Prep',
  'Multi-Field Certification Attainment',
  'Advanced Curriculum Courses',
  'College Matriculation',
];

const raceDetails = [
  { icon: CalendarDays, label: 'Date', value: 'August 2026' },
  { icon: MapPin, label: 'Location', value: 'Jefferson County, Alabama' },
  { icon: Users, label: 'Event', value: '5K Run/Walk + Community Celebration' },
];

const perks = [
  'Run or walk at your own pace',
  'Support educational access for high school students',
  'Family-friendly community atmosphere',
  'Sponsorship and volunteer opportunities available',
];

function Button({ children, variant = 'primary', className = '', href = '#' }) {
  const styles =
    variant === 'primary'
      ? 'bg-teal-400 text-slate-950 hover:bg-teal-300'
      : 'border border-white/20 bg-white/5 text-white hover:bg-white/10';

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function Card({ children, className = '' }) {
  return <div className={`rounded-3xl border border-white/10 bg-white/5 ${className}`}>{children}</div>;
}

export default function HEY5KWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-black tracking-tight">HEY Inc.</div>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#race" className="hover:text-white">Race</a>
            <a href="#mission" className="hover:text-white">Mission</a>
            <a href="#fellowship" className="hover:text-white">Turner Fellowship</a>
            <a href="#sponsor" className="hover:text-white">Sponsor</a>
          </div>
          <Button href="#sponsor" className="hidden sm:inline-flex">Register Soon</Button>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.25),_transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-4 inline-flex rounded-full border border-teal-300/40 px-4 py-2 text-sm font-medium text-teal-200">
                5K Fun Run • August 2026
              </p>
              <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Run for access. <span className="text-teal-300">Move for possibility.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Helping Educate Youth Inc. is bringing the community together for a 5K run/walk to support the launch of the Turner Fellowship — a leadership and mentorship program designed to expand what students believe is possible beyond the borders of Jefferson County.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#sponsor" className="px-8">
                  Join the Interest List <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="#sponsor" variant="secondary" className="px-8">
                  Become a Sponsor
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <Card className="rounded-[2rem] bg-white/10 p-8 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-slate-900 p-8">
                  <p className="text-sm uppercase tracking-[0.3em] text-teal-300">Next Run</p>
                  <h2 className="mt-3 text-4xl font-black">HEY 5K Fun Run</h2>
                  <div className="mt-8 space-y-5">
                    {raceDetails.map((item) => (
                      <div key={item.label} className="flex gap-4 rounded-2xl bg-white/5 p-4">
                        <item.icon className="h-6 w-6 text-teal-300" />
                        <div>
                          <p className="text-sm text-slate-400">{item.label}</p>
                          <p className="font-semibold">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-sm leading-6 text-slate-400">
                    Registration details, route information, volunteer sign-ups, and sponsorship packets will be posted here.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="race" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-4">
              {perks.map((perk) => (
                <Card key={perk} className="p-6">
                  <CheckCircle2 className="mb-4 h-7 w-7 text-teal-300" />
                  <p className="font-medium text-white">{perk}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="mission" className="bg-white px-6 py-24 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-700">Mission</p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">Built to expose, equip, and elevate.</h2>
            </div>
            <div className="text-lg leading-8 text-slate-700">
              <p>
                Helping Educate Youth Inc. provides transformative educational programs that expose high school students to diverse career pathways, foster innovation, and equip them with the mentorship, skills, and confidence needed to pursue lifelong success.
              </p>
              <p className="mt-6">
                Through the Turner Fellowship, HEY Inc. is building a pathway where students do not simply graduate — they emerge with voice, vision, and the power to turn the tides for generations to come.
              </p>
            </div>
          </div>
        </section>

        <section id="fellowship" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-300">The Turner Fellowship</p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">A leadership incubator for students who deserve more than limited expectations.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                The Turner Fellowship is an ambitious program elevating minority high school students in Jefferson County through multidisciplinary curriculum, mentorship, and leadership training that culminates in Turned It Projects — student-led initiatives addressing real-world community issues.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <HeartHandshake className="mb-4 h-6 w-6 text-teal-300" />
                  <p className="font-semibold">{pillar}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sponsor" className="bg-teal-300 px-6 py-24 text-slate-950">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
            <div>
              <Trophy className="mb-6 h-12 w-12" />
              <h2 className="text-4xl font-black md:text-5xl">Partner with the movement.</h2>
              <p className="mt-6 text-lg leading-8">
                Sponsorships help cover race operations, student programming, scholarships, mentorship resources, and the launch of HEY Inc.’s next major educational initiative.
              </p>
            </div>
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-black">Get involved</h3>
              <p className="mt-4 text-slate-300">
                Interested in sponsoring, volunteering, donating, or joining the race interest list?
              </p>
              <a href="mailto:helpingeducateyouthinc@gmail.com" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-bold text-slate-950 hover:bg-slate-200">
                <Mail className="h-5 w-5" />
                helpingeducateyouthinc@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-10 text-center text-sm text-slate-400">
        © 2026 Helping Educate Youth Inc. All rights reserved.
      </footer>
    </div>
  );
}
