import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([
    'Communication',
    'Adaptability',
    'Resilient',
    'Team Player',
    'Attention to details',
    'Computer Skills'
  ]);

  const handleSkillChange = (e, index) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = e.target.innerText;
    setSkills(updatedSkills);
  };

  return (
    <section className="skills">
      <h2 className="skills-title">Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={e => handleSkillChange(e, index)}
            >
              {skill}
            </span>
          </li>
        ))}
      </ul>
      <hr className="skills-line" />
    </section>
  );
};

export default Skills;
