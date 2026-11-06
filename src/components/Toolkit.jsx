import React from 'react';

const tools = [
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Python', icon: 'python' },
  { name: 'MongoDB', icon: 'mongodb' },
];

export default function Toolkit() {
  return (
    <div className="stack">
      <span className="eyebrow">My toolkit</span>
      {tools.map(({ name, icon }) => (
        <strong key={name}>
          <img src={`/assets/${icon}.svg`} width="36" height="36" alt="" aria-hidden="true" />
          {name}
        </strong>
      ))}
    </div>
  );
}
