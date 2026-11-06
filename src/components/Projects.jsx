import React from 'react';
import { projects } from '../projects';

const covers = {
"farm": (<div className="cover farm"><div className="visual" aria-hidden="true"><div className="visual-label">BUSHI FARM <span>OPERATIONS</span></div><h3>A clearer view of the farm.</h3><div className="diagram"><i></i><i></i><i></i><i></i><i></i></div></div><span className="caption">Illustrative project cover</span></div>),
"school": (<div className="cover school"><div className="visual" aria-hidden="true"><div className="visual-label">STUDENT ATTENDANCE <span>REGISTER</span></div><h3>Every school day counts.</h3><div className="rows"><i></i><i></i><i></i></div></div><span className="caption">Illustrative project cover</span></div>),
"hospital": (<div className="cover hospital"><div className="visual" aria-hidden="true"><div className="visual-label">SEGESE <span>HEALTHCARE</span></div><h3>Connected hospital workflows.</h3><div className="modules"><span>Appointments</span><span>Billing</span><span>Staff portals</span></div></div><span className="caption">Illustrative project cover</span></div>),
"cafe": (<div className="cover cafe"><div className="visual" aria-hidden="true"><div className="visual-label">COFFEE · CRAFT · CONNECTION</div><h3>The Kaffehaus</h3><div className="visual-label">A PLACE TO SLOW DOWN.</div></div><span className="caption">Illustrative project cover</span></div>),
"hims": (<div><a className="screenshot-link" href="assets/hims-dashboard.png" target="_blank" rel="noopener noreferrer" aria-label="Open full HIMS dashboard screenshot"><img src="assets/hims-dashboard.png" width="1480" height="1351" loading="lazy" alt="HIMS hospital dashboard showing patient statistics, appointments, revenue and activity" /></a><div className="screenshot-caption"><span>Actual screenshot · HIMS dashboard</span><a href="assets/hims-inventory.png" target="_blank" rel="noopener noreferrer">View inventory screenshot ↗</a></div></div>)
};

function ProjectCard({ project }) {
  const { id, category, title, description, tags, links, screenshot } = project;
  const details = (
    <>
      <div className="project-meta">{category}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="repo-links">
        {links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>)}
      </div>
    </>
  );
  return (
    <article className={`project${screenshot ? ' hims' : ''}`}>
      {covers[id]}
      {screenshot ? <div>{details}</div> : details}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work">
      <div className="sectionhead">
        <div><span className="eyebrow">01 / Selected work</span><h2>Built around real tasks.</h2></div>
        <p>A selection of projects from my GitHub, spanning operations, education, healthcare, and hospitality.</p>
      </div>
      <div className="projects">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
      <p style={{ marginTop: 35 }}><a className="textlink" href="https://github.com/Johnson1425-ux" target="_blank" rel="noopener noreferrer">More on GitHub ↗</a></p>
    </section>
  );
}
