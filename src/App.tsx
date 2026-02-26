import { useMemo, useState } from 'react';
import ChemistryMap from './components/ChemistryMap';
import LearningTools from './components/LearningTools';
import NodePanel from './components/NodePanel';
import Viewer3D from './components/Viewer3D';
import { edges, topicNodes } from './data/chemData';
import { TopicNode } from './types';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedId, setSelectedId] = useState<string>();
  const [pathway, setPathway] = useState<string[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<'ALL' | 'AS' | 'A2'>('ALL');
  const [search, setSearch] = useState('');
  const [compareText, setCompareText] = useState('Select two compounds to compare.');
  const [hoverText, setHoverText] = useState('Hover on a node to preview definition and formula.');

  const selectedTopic = topicNodes.find((node) => node.id === selectedId);

  const visibleNodes = useMemo(
    () =>
      topicNodes.filter(
        (node) =>
          (difficulty === 'ALL' || node.difficulty === difficulty) &&
          `${node.name} ${node.formula}`.toLowerCase().includes(search.toLowerCase())
      ),
    [difficulty, search]
  );

  const visibleIds = new Set(visibleNodes.map((node) => node.id));
  const visibleEdges = edges.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target));

  const handleDoubleSelect = (id: string) => {
    const linked = edges
      .filter((edge) => edge.source === id || edge.target === id)
      .map((edge) => `${edge.source} → ${edge.target} (${edge.label})`);
    setPathway(linked);
  };

  const toggleComplete = (id: string) => {
    setCompleted((current) => (current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id]));
  };

  const compareCompounds = (left: string, right: string) => {
    const leftTopic = topicNodes.find((topic) => topic.id === left);
    const rightTopic = topicNodes.find((topic) => topic.id === right);
    if (!leftTopic || !rightTopic) return;
    setCompareText(
      `${leftTopic.name}: ${leftTopic.formula}, ${leftTopic.functionalGroup}. ${rightTopic.name}: ${rightTopic.formula}, ${rightTopic.functionalGroup}.`
    );
  };

  const buildSynthesisPath = (start: string, target: string) => {
    const recipes: Record<string, string[]> = {
      'alkenes->alcohols': ['Hydrate alkene with steam', 'Catalyst: H₃PO₄', 'Mechanism: electrophilic addition'],
      'alcohols->carboxylic-acids': ['Reflux with acidified K₂Cr₂O₇', 'Use excess oxidant', 'Mechanism type: oxidation']
    };
    setPathway(recipes[`${start}->${target}`] || ['Pathway not in quick map. Try related nodes.']);
  };

  return (
    <main className={theme === 'dark' ? 'theme-dark min-h-screen p-5' : 'theme-light min-h-screen p-5'}>
      <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold">Organic Chemistry Map</h1>
          <p className="text-sm opacity-80">Cambridge AS/A-Level interactive reaction and mechanism atlas.</p>
        </div>
        <button className="rounded-full bg-slate-700 px-4 py-2" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Toggle {theme === 'dark' ? 'Light' : 'Dark'} Theme
        </button>
      </header>

      <section className="mb-4 grid gap-3 md:grid-cols-3">
        <input
          className="rounded-xl border border-white/20 bg-slate-900/70 p-2"
          placeholder="Search by name or formula..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="rounded-xl border border-white/20 bg-slate-900/70 p-2 text-sm">Draw-your-own molecule tool (canvas stub)</div>
        <div className="rounded-xl border border-white/20 bg-slate-900/70 p-2 text-sm">Isomer generator: enter formula to enumerate structural possibilities (stub)</div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-2">
          <div className="glass-panel p-2 text-sm text-slate-200">{hoverText}</div>
          <ChemistryMap
            nodes={visibleNodes}
            edges={visibleEdges}
            onSelect={setSelectedId}
            onDoubleSelect={handleDoubleSelect}
            onHover={setHoverText}
          />
        </div>
        <NodePanel topic={selectedTopic as TopicNode | undefined} />
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="glass-panel p-4">
          <h2 className="text-xl font-semibold">Reaction Pathway Mode</h2>
          <p className="text-sm text-slate-300">Choose starting and target compounds to generate synthesis steps.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button className="rounded bg-addition px-3 py-1 text-sm" onClick={() => buildSynthesisPath('alkenes', 'alcohols')}>
              Alkenes → Alcohols
            </button>
            <button className="rounded bg-substitution px-3 py-1 text-sm" onClick={() => buildSynthesisPath('alcohols', 'carboxylic-acids')}>
              Alcohols → Carboxylic acids
            </button>
          </div>
          <ul className="mt-3 list-disc pl-5 text-sm">
            {pathway.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="glass-panel p-4">
          <h2 className="text-xl font-semibold">Interactive Bond & Hybridisation Viewer</h2>
          <p className="mb-2 text-sm text-slate-300">Visualize σ vs π bonding and sp³/sp²/sp geometry.</p>
          <Viewer3D />
        </div>

        <LearningTools
          topics={visibleNodes}
          completed={completed}
          onToggleComplete={toggleComplete}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          onCompare={compareCompounds}
        />
      </section>

      <section className="mt-4 glass-panel p-4">
        <h2 className="text-xl font-semibold">Compound Comparison</h2>
        <p className="text-sm text-slate-200">{compareText}</p>
      </section>

      <section className="mt-4 glass-panel p-4">
        <h2 className="text-xl font-semibold">Future Improvements</h2>
        <ul className="list-disc pl-5 text-sm text-slate-200">
          <li>AI assistant for mechanism walkthroughs.</li>
          <li>Voice explanation mode and exam simulation.</li>
          <li>Printable maps and offline PWA mode.</li>
          <li>Teacher dashboard for class analytics.</li>
        </ul>
      </section>
    </main>
  );
}
