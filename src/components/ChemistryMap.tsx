import { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';
import { ConnectionEdge, TopicNode } from '../types';

interface ChemistryMapProps {
  nodes: TopicNode[];
  edges: ConnectionEdge[];
  onSelect: (id: string) => void;
  onDoubleSelect: (id: string) => void;
  onHover: (summary: string) => void;
}

const colorByCategory = {
  functional: '#60a5fa',
  reaction: '#34d399',
  mechanism: '#fb923c',
  structure: '#f472b6'
};

export default function ChemistryMap({ nodes, edges, onSelect, onDoubleSelect, onHover }: ChemistryMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements: [
        ...nodes.map((node) => ({
          data: {
            id: node.id,
            label: node.name,
            summary: `${node.name}: ${node.summary} | Formula: ${node.formula}`,
            color: colorByCategory[node.category]
          }
        })),
        ...edges.map((edge, index) => ({
          data: {
            id: `${edge.source}-${edge.target}-${index}`,
            source: edge.source,
            target: edge.target,
            label: edge.label,
            color: colorByCategory[edge.relationType]
          }
        }))
      ],
      style: [
        {
          selector: 'node',
          style: {
            'background-color': 'data(color)',
            label: 'data(label)',
            color: '#e2e8f0',
            'text-wrap': 'wrap',
            'text-max-width': 120,
            'font-size': 11,
            'text-valign': 'center',
            'text-halign': 'center',
            width: 70,
            height: 70,
            'border-color': '#e2e8f0',
            'border-width': 1
          }
        },
        {
          selector: 'edge',
          style: {
            'line-color': 'data(color)',
            'target-arrow-color': 'data(color)',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            label: 'data(label)',
            'font-size': 9,
            color: '#cbd5e1'
          }
        }
      ],
      layout: {
        name: 'cose',
        animate: true,
        nodeRepulsion: 120000,
        idealEdgeLength: 120
      },
      minZoom: 0.4,
      maxZoom: 2
    });

    cy.on('tap', 'node', (event) => onSelect(event.target.id()));
    cy.on('dbltap', 'node', (event) => onDoubleSelect(event.target.id()));
    cy.on('mouseover', 'node', (event) => onHover(event.target.data('summary')));

    return () => cy.destroy();
  }, [edges, nodes, onDoubleSelect, onHover, onSelect]);

  return <div ref={containerRef} className="h-[70vh] w-full rounded-2xl border border-white/20 bg-slate-900/70" />;
}
