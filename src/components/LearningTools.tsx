import { TopicNode } from '../types';

interface LearningToolsProps {
  topics: TopicNode[];
  completed: string[];
  onToggleComplete: (id: string) => void;
  difficulty: 'ALL' | 'AS' | 'A2';
  setDifficulty: (value: 'ALL' | 'AS' | 'A2') => void;
  onCompare: (left: string, right: string) => void;
}

export default function LearningTools({
  topics,
  completed,
  onToggleComplete,
  difficulty,
  setDifficulty,
  onCompare
}: LearningToolsProps) {
  const completionPercent = Math.round((completed.length / topics.length) * 100);

  return (
    <section className="glass-panel p-4 text-slate-100">
      <h2 className="text-xl font-semibold">Smart Learning Toolkit</h2>
      <p className="mt-1 text-sm">Progress tracking: {completionPercent}% complete</p>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-700">
        <div className="h-full bg-emerald-400" style={{ width: `${completionPercent}%` }} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <span className="mr-2">Difficulty:</span>
        {(['ALL', 'AS', 'A2'] as const).map((level) => (
          <button
            key={level}
            className={`rounded-full px-3 py-1 ${difficulty === level ? 'bg-cyan-500' : 'bg-slate-700'}`}
            onClick={() => setDifficulty(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <h3 className="mt-4 font-medium">Spaced Repetition Flashcards</h3>
      <p className="text-sm text-slate-300">Cycle cards by weakest topics first (mock scheduler included).</p>

      <h3 className="mt-3 font-medium">Reaction Pathway Quiz Mode</h3>
      <p className="text-sm text-slate-300">Prompt: Convert propene to propan-2-ol with conditions and mechanism.</p>

      <h3 className="mt-3 font-medium text-amber-300">Common Exam Trap Alerts</h3>
      <ul className="list-disc pl-5 text-sm">
        <li>Confusing ethanolic vs aqueous hydroxide conditions.</li>
        <li>Forgetting oxidation conditions for aldehyde isolation.</li>
      </ul>

      <h3 className="mt-4 font-medium">Mark Topics Complete</h3>
      <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
        {topics.slice(0, 8).map((topic) => (
          <label key={topic.id} className="flex items-center gap-2 rounded bg-slate-800/70 p-2">
            <input
              type="checkbox"
              checked={completed.includes(topic.id)}
              onChange={() => onToggleComplete(topic.id)}
            />
            {topic.name}
          </label>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-white/10 p-3">
        <h3 className="font-medium">Compare Compounds</h3>
        <button className="mt-2 rounded bg-violet-500 px-3 py-1 text-sm" onClick={() => onCompare('alkenes', 'alkynes')}>
          Compare Alkenes vs Alkynes
        </button>
      </div>
    </section>
  );
}
