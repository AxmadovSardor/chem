import { motion } from 'framer-motion';
import { TopicNode } from '../types';

interface NodePanelProps {
  topic?: TopicNode;
}

const mechanismAnimations = [
  'Free radical substitution: homolytic bond fission and fish-hook arrows.',
  'Electrophilic addition: π bond attacks electrophile then nucleophile adds.',
  'Nucleophilic substitution: lone pair attacks δ+ carbon, leaving group departs.',
  'Nucleophilic addition: nucleophile attacks carbonyl carbon then protonation.'
];

export default function NodePanel({ topic }: NodePanelProps) {
  if (!topic) {
    return <aside className="glass-panel p-4 text-slate-200">Click any map node to open full details.</aside>;
  }

  return (
    <aside className="glass-panel max-h-[70vh] overflow-y-auto p-4 text-slate-100">
      <h2 className="text-2xl font-bold">{topic.name}</h2>
      <p className="mt-2 text-sm text-slate-300">{topic.summary}</p>

      <Section title="1️⃣ Definition" content={<p>{topic.definition}</p>} />
      <Section title="2️⃣ General Formula" content={<p className="font-mono">{topic.formula}</p>} />
      <Section title="3️⃣ Functional Group" content={<p>{topic.functionalGroup}</p>} />
      <Section
        title="4️⃣ Physical Properties"
        content={<ul className="list-disc pl-5">{topic.physicalProperties.map((item) => <li key={item}>{item}</li>)}</ul>}
      />
      <Section
        title="5️⃣ Chemical Reactions"
        content={
          <div className="space-y-2">
            {topic.reactions.map((reaction) => (
              <div key={reaction.equation} className="rounded-xl bg-slate-800/70 p-2 text-sm">
                <p><strong>Type:</strong> {reaction.type}</p>
                <p><strong>Conditions:</strong> {reaction.conditions}</p>
                {reaction.catalyst && <p><strong>Catalyst:</strong> {reaction.catalyst}</p>}
                <p><strong>Equation:</strong> {reaction.equation}</p>
                <p><strong>Mechanism:</strong> {reaction.mechanism}</p>
              </div>
            ))}
          </div>
        }
      />
      <Section
        title="6️⃣ Mechanism Section"
        content={
          <div className="space-y-2 text-sm">
            {mechanismAnimations.map((entry) => (
              <motion.p
                key={entry}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
              >
                {entry}
              </motion.p>
            ))}
          </div>
        }
      />
      <Section
        title="7️⃣ Isomerism Section"
        content={<ul className="list-disc pl-5">{topic.isomerism.map((entry) => <li key={entry}>{entry}</li>)}</ul>}
      />
      <Section title="8️⃣ 3D Model Viewer" content={<p>Use the 3D viewer widget below to rotate and zoom model geometry.</p>} />
      <Section
        title="9️⃣ Practice Questions"
        content={
          <ul className="list-disc pl-5">
            <li>MCQ: Which reagent converts halogenoalkanes to alcohols?</li>
            <li>Mechanism drawing: Show electrophilic addition of Br₂ to propene.</li>
            <li>Naming: Name CH₃CH₂COOCH₃.</li>
            <li>Isomer counting: Number of C₅H₁₂ isomers?</li>
          </ul>
        }
      />
      <Section
        title="🔟 Exam Tips Box"
        content={<ul className="list-disc pl-5">{topic.examTips.map((tip) => <li key={tip}>{tip}</li>)}</ul>}
      />
    </aside>
  );
}

function Section({ title, content }: { title: string; content: JSX.Element }) {
  return (
    <section className="mt-4 rounded-xl border border-white/10 bg-slate-900/60 p-3">
      <h3 className="mb-2 font-semibold text-cyan-300">{title}</h3>
      {content}
    </section>
  );
}
