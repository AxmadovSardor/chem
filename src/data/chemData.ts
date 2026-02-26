import { ConnectionEdge, TopicNode } from '../types';

export const topicNodes: TopicNode[] = [
  {
    id: 'hydrocarbons',
    name: 'Hydrocarbons',
    category: 'functional',
    summary: 'Compounds containing only carbon and hydrogen.',
    definition: 'Hydrocarbons are organic compounds made solely from C and H atoms.',
    formula: 'Varies (e.g. CₙH₂ₙ₊₂, CₙH₂ₙ, CₙH₂ₙ₋₂)',
    functionalGroup: 'C-C and C-H frameworks',
    physicalProperties: ['Non-polar', 'Insoluble in water', 'Combustible'],
    reactions: [
      {
        type: 'Combustion',
        conditions: 'Excess oxygen / limited oxygen',
        equation: 'CxHy + O₂ → CO₂ + H₂O',
        mechanism: 'Radical chain processes in flames'
      }
    ],
    isomerism: ['Chain isomerism increases with carbon count'],
    examTips: ['Always balance combustion equations carefully.'],
    difficulty: 'AS'
  },
  {
    id: 'alkanes',
    name: 'Alkanes',
    category: 'functional',
    summary: 'Saturated hydrocarbons with single C-C bonds.',
    definition: 'Alkanes are saturated hydrocarbons containing only σ bonds.',
    formula: 'CₙH₂ₙ₊₂',
    functionalGroup: 'None (alkyl chain)',
    physicalProperties: ['BP rises with chain length', 'Non-polar', 'Low reactivity'],
    reactions: [
      {
        type: 'Free radical substitution',
        conditions: 'UV light',
        equation: 'CH₄ + Cl₂ → CH₃Cl + HCl',
        mechanism: 'Initiation, propagation, termination'
      }
    ],
    isomerism: ['Chain structural isomerism'],
    examTips: ['State UV light for halogenation.'],
    difficulty: 'AS'
  },
  {
    id: 'alkenes',
    name: 'Alkenes',
    category: 'functional',
    summary: 'Unsaturated hydrocarbons with a C=C bond.',
    definition: 'Alkenes contain a carbon-carbon double bond with one σ and one π bond.',
    formula: 'CₙH₂ₙ',
    functionalGroup: 'C=C',
    physicalProperties: ['More reactive than alkanes', 'Non-polar', 'Decolorize bromine water'],
    reactions: [
      {
        type: 'Electrophilic addition',
        conditions: 'Room temperature',
        equation: 'CH₂=CH₂ + Br₂ → CH₂Br-CH₂Br',
        mechanism: 'Attack on π bond by electrophile'
      },
      {
        type: 'Hydrogenation',
        conditions: '150°C',
        catalyst: 'Ni',
        equation: 'C₂H₄ + H₂ → C₂H₆',
        mechanism: 'Surface catalysis'
      }
    ],
    isomerism: ['Positional isomerism', 'E/Z stereoisomerism'],
    examTips: ['Markovnikov direction may appear in advanced questions.'],
    difficulty: 'AS'
  },
  {
    id: 'alkynes',
    name: 'Alkynes',
    category: 'functional',
    summary: 'Unsaturated hydrocarbons containing C≡C.',
    definition: 'Alkynes possess a carbon-carbon triple bond with one σ and two π bonds.',
    formula: 'CₙH₂ₙ₋₂',
    functionalGroup: 'C≡C',
    physicalProperties: ['Linear bond angle around triple bond', 'Reactive in additions'],
    reactions: [
      {
        type: 'Electrophilic addition',
        conditions: 'Controlled halogenation',
        equation: 'RC≡CR + Br₂ → R-CBr=CBr-R',
        mechanism: 'Addition across π systems'
      }
    ],
    isomerism: ['Chain and positional isomerism'],
    examTips: ['Remember alkynes need 2 mol of H₂ for full hydrogenation.'],
    difficulty: 'A2'
  },
  {
    id: 'halogenoalkanes',
    name: 'Halogenoalkanes',
    category: 'functional',
    summary: 'Alkyl compounds with a halogen substituent.',
    definition: 'Halogenoalkanes have one or more halogen atoms attached to sp³ carbon.',
    formula: 'R-X',
    functionalGroup: 'C-X',
    physicalProperties: ['Polar C-X bond', 'Higher BP than corresponding alkane'],
    reactions: [
      {
        type: 'Nucleophilic substitution',
        conditions: 'Aqueous NaOH, reflux',
        equation: 'RBr + OH⁻ → ROH + Br⁻',
        mechanism: 'SN1 or SN2'
      }
    ],
    isomerism: ['Positional and chain'],
    examTips: ['Distinguish aqueous vs ethanolic OH⁻ conditions.'],
    difficulty: 'AS'
  },
  {
    id: 'alcohols',
    name: 'Alcohols',
    category: 'functional',
    summary: 'Compounds containing a hydroxyl group.',
    definition: 'Alcohols have an -OH group bonded to a saturated carbon.',
    formula: 'R-OH',
    functionalGroup: '-OH',
    physicalProperties: ['Hydrogen bonding', 'Higher BP than alkanes', 'Short-chain soluble'],
    reactions: [
      {
        type: 'Oxidation',
        conditions: 'Acidified K₂Cr₂O₇, heat',
        equation: 'Primary alcohol → aldehyde → carboxylic acid',
        mechanism: 'Redox sequence'
      },
      {
        type: 'Substitution',
        conditions: 'PCl₅ / SOCl₂',
        equation: 'ROH + PCl₅ → RCl + POCl₃ + HCl',
        mechanism: 'Nucleophilic substitution'
      }
    ],
    isomerism: ['Functional group isomerism with ethers'],
    examTips: ['Use distillation for aldehyde from primary alcohol.'],
    difficulty: 'AS'
  },
  {
    id: 'aldehydes',
    name: 'Aldehydes',
    category: 'functional',
    summary: 'Carbonyl compounds with -CHO.',
    definition: 'Aldehydes contain a terminal carbonyl group.',
    formula: 'R-CHO',
    functionalGroup: '-CHO',
    physicalProperties: ['Polar carbonyl', 'Lower BP than alcohols'],
    reactions: [
      {
        type: 'Nucleophilic addition',
        conditions: 'HCN / NaCN catalyst',
        equation: 'RCHO + HCN → RCH(OH)CN',
        mechanism: 'Attack at carbonyl carbon'
      }
    ],
    isomerism: ['Chain isomerism'],
    examTips: ['Tollens test gives silver mirror for aldehydes.'],
    difficulty: 'A2'
  },
  {
    id: 'ketones',
    name: 'Ketones',
    category: 'functional',
    summary: 'Carbonyl compounds with C=O between carbons.',
    definition: 'Ketones contain an internal carbonyl group.',
    formula: 'R-CO-R',
    functionalGroup: '>C=O',
    physicalProperties: ['Polar', 'Cannot be oxidized easily compared to aldehydes'],
    reactions: [
      {
        type: 'Nucleophilic addition',
        conditions: 'NaBH₄ reduction',
        equation: 'R₂CO + [H] → R₂CHOH',
        mechanism: 'Hydride attack on carbonyl'
      }
    ],
    isomerism: ['Chain and positional'],
    examTips: ['No silver mirror with Tollens reagent.'],
    difficulty: 'A2'
  },
  {
    id: 'carboxylic-acids',
    name: 'Carboxylic acids',
    category: 'functional',
    summary: 'Compounds with the -COOH group.',
    definition: 'Carboxylic acids contain a carboxyl group and are weak acids.',
    formula: 'R-COOH',
    functionalGroup: '-COOH',
    physicalProperties: ['Dimer hydrogen bonding', 'High BP', 'Weakly acidic'],
    reactions: [
      {
        type: 'Esterification',
        conditions: 'Conc. H₂SO₄, heat',
        equation: 'RCOOH + R\'OH ⇌ RCOOR\' + H₂O',
        mechanism: 'Nucleophilic addition-elimination'
      }
    ],
    isomerism: ['Functional group isomerism with esters'],
    examTips: ['Use reflux to maximize ester yield before purification.'],
    difficulty: 'AS'
  },
  {
    id: 'esters',
    name: 'Esters',
    category: 'functional',
    summary: 'Sweet-smelling derivatives of carboxylic acids.',
    definition: 'Esters have the -COO- linkage formed from acid + alcohol.',
    formula: 'R-COO-R',
    functionalGroup: '-COO-',
    physicalProperties: ['Volatile, fragrant', 'No H-bond donor'],
    reactions: [
      {
        type: 'Hydrolysis',
        conditions: 'Acidic or basic reflux',
        equation: 'RCOOR\' + H₂O → RCOOH + R\'OH',
        mechanism: 'Addition-elimination'
      }
    ],
    isomerism: ['Functional group isomerism'],
    examTips: ['Name alkyl part then carboxylate part.'],
    difficulty: 'AS'
  },
  {
    id: 'amines',
    name: 'Amines',
    category: 'functional',
    summary: 'Organic bases derived from ammonia.',
    definition: 'Amines contain a lone pair on nitrogen and act as nucleophiles.',
    formula: 'R-NH₂',
    functionalGroup: '-NH₂',
    physicalProperties: ['Basic', 'Can form hydrogen bonds'],
    reactions: [
      {
        type: 'Nucleophilic substitution',
        conditions: 'Ammonia in ethanol, heat',
        equation: 'RBr + 2NH₃ → RNH₂ + NH₄Br',
        mechanism: 'SN2 for primary haloalkanes'
      }
    ],
    isomerism: ['Chain and positional'],
    examTips: ['Use excess NH₃ to avoid further substitution.'],
    difficulty: 'A2'
  },
  {
    id: 'polymers',
    name: 'Polymers',
    category: 'reaction',
    summary: 'Large molecules made from monomers.',
    definition: 'Polymers form through addition or condensation reactions of monomers.',
    formula: '[monomer]ₙ',
    functionalGroup: 'Repeating unit',
    physicalProperties: ['High Mr', 'Variable flexibility'],
    reactions: [
      {
        type: 'Addition polymerization',
        conditions: 'High pressure, catalyst',
        equation: 'n CH₂=CH₂ → -(CH₂-CH₂)-ₙ',
        mechanism: 'Chain growth mechanism'
      }
    ],
    isomerism: ['Tacticity in advanced courses'],
    examTips: ['Repeat unit must show continuation bonds.'],
    difficulty: 'A2'
  },
  {
    id: 'isomerism',
    name: 'Isomerism',
    category: 'structure',
    summary: 'Same molecular formula, different structure.',
    definition: 'Isomerism includes structural and stereoisomeric differences.',
    formula: 'Same molecular formula',
    functionalGroup: 'Conceptual topic',
    physicalProperties: ['Different BP/MP despite same formula'],
    reactions: [],
    isomerism: ['Structural', 'Geometric', 'Optical'],
    examTips: ['Always check for chiral centers and restricted rotation.'],
    difficulty: 'AS'
  },
  {
    id: 'mechanisms',
    name: 'Reaction mechanisms',
    category: 'mechanism',
    summary: 'Electron-flow descriptions of reactions.',
    definition: 'Mechanisms explain bond breaking/forming with curly arrows.',
    formula: 'Process-based',
    functionalGroup: 'Conceptual topic',
    physicalProperties: ['Determines kinetics and selectivity'],
    reactions: [
      {
        type: 'Core mechanisms',
        conditions: 'Varies by pathway',
        equation: 'FRS, EA, SN, NA',
        mechanism: 'Curly-arrow electron movement'
      }
    ],
    isomerism: [],
    examTips: ['Arrow heads must point from electron pair source.'],
    difficulty: 'AS'
  },
  {
    id: 'redox',
    name: 'Oxidation & reduction',
    category: 'reaction',
    summary: 'Gain/loss of oxygen, hydrogen, or electrons.',
    definition: 'Organic redox often tracks O and H changes at carbon centers.',
    formula: 'Oxidation level concept',
    functionalGroup: 'Conceptual topic',
    physicalProperties: ['Influences functionality interconversions'],
    reactions: [],
    isomerism: [],
    examTips: ['Remember reduction is gain of H in organic chemistry.'],
    difficulty: 'AS'
  },
  {
    id: 'cracking-hydrogenation',
    name: 'Cracking & hydrogenation',
    category: 'reaction',
    summary: 'Industrial transformations of hydrocarbons.',
    definition: 'Cracking breaks long chains; hydrogenation adds H₂ to unsaturation.',
    formula: 'Process topic',
    functionalGroup: 'Conceptual topic',
    physicalProperties: ['Improves fuel utility and saturation level'],
    reactions: [],
    isomerism: [],
    examTips: ['Catalytic cracking gives alkanes + alkenes.'],
    difficulty: 'AS'
  },
  {
    id: 'sigma-pi',
    name: 'σ and π bonds',
    category: 'structure',
    summary: 'Bonding overlap models in covalent compounds.',
    definition: 'σ bonds arise from head-on overlap, π from side-on overlap.',
    formula: 'Conceptual',
    functionalGroup: 'Structure concept',
    physicalProperties: ['π bonds weaker, more reactive'],
    reactions: [],
    isomerism: [],
    examTips: ['Double bond = 1 σ + 1 π, triple = 1 σ + 2 π.'],
    difficulty: 'AS'
  },
  {
    id: 'hybridisation',
    name: 'Hybridisation',
    category: 'structure',
    summary: 'Mixing of atomic orbitals to form bonding orbitals.',
    definition: 'sp³ tetrahedral, sp² trigonal planar, sp linear.',
    formula: 'sp³ / sp² / sp',
    functionalGroup: 'Structure concept',
    physicalProperties: ['Determines geometry and bond angles'],
    reactions: [],
    isomerism: [],
    examTips: ['Link hybridisation to geometry marks in explanations.'],
    difficulty: 'AS'
  }
];

export const edges: ConnectionEdge[] = [
  { source: 'hydrocarbons', target: 'alkanes', label: 'classification', relationType: 'functional' },
  { source: 'hydrocarbons', target: 'alkenes', label: 'classification', relationType: 'functional' },
  { source: 'hydrocarbons', target: 'alkynes', label: 'classification', relationType: 'functional' },
  { source: 'alkanes', target: 'halogenoalkanes', label: 'UV + halogen', relationType: 'mechanism' },
  { source: 'alkenes', target: 'alcohols', label: 'steam hydration', relationType: 'reaction' },
  { source: 'alkenes', target: 'polymers', label: 'addition polymerization', relationType: 'reaction' },
  { source: 'halogenoalkanes', target: 'alcohols', label: 'aq OH⁻', relationType: 'mechanism' },
  { source: 'alcohols', target: 'aldehydes', label: '[O] distil', relationType: 'reaction' },
  { source: 'aldehydes', target: 'carboxylic-acids', label: '[O] reflux', relationType: 'reaction' },
  { source: 'alcohols', target: 'carboxylic-acids', label: 'strong oxidation', relationType: 'reaction' },
  { source: 'carboxylic-acids', target: 'esters', label: 'esterification', relationType: 'mechanism' },
  { source: 'halogenoalkanes', target: 'amines', label: 'NH₃ ethanol', relationType: 'mechanism' },
  { source: 'alkenes', target: 'mechanisms', label: 'electrophilic addition', relationType: 'mechanism' },
  { source: 'halogenoalkanes', target: 'mechanisms', label: 'nucleophilic substitution', relationType: 'mechanism' },
  { source: 'aldehydes', target: 'mechanisms', label: 'nucleophilic addition', relationType: 'mechanism' },
  { source: 'alkanes', target: 'mechanisms', label: 'free radical substitution', relationType: 'mechanism' },
  { source: 'alkenes', target: 'isomerism', label: 'cis/trans', relationType: 'structure' },
  { source: 'isomerism', target: 'hybridisation', label: 'stereochemistry basis', relationType: 'structure' },
  { source: 'alkenes', target: 'sigma-pi', label: 'π bond reactivity', relationType: 'structure' },
  { source: 'alkynes', target: 'sigma-pi', label: '2π in triple bond', relationType: 'structure' },
  { source: 'redox', target: 'alcohols', label: 'oxidation/reduction', relationType: 'reaction' },
  { source: 'cracking-hydrogenation', target: 'alkenes', label: 'industrial source', relationType: 'reaction' }
];
