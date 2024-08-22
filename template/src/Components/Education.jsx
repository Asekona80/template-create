import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [education, setEducation] = useState({
    school1: {
      name: 'Ntsonkotha SSS',
      date: '2015-2017',
      qualification: 'NSC'
    },
    school2: {
      name: 'Walter Sisulu University',
      date: '2020-2022',
      qualification: 'Diploma in Application Development',
      details: [
        'Involved in creating, designing, and deploying software while learning different programming languages.',
        'Developed skills in project management and mastered the logic and design of software.',
        'Gained exposure to languages and tools such as: Java, Python, JavaScript, React, and SQL.'
      ]
    }
  });

  const handleBlur = (e, key, field) => {
    setEducation(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        [field]: e.target.innerText
      }
    }));
  };

  const handleDetailsBlur = (e, index) => {
    const updatedDetails = [...education.school2.details];
    updatedDetails[index] = e.target.innerText;
    setEducation(prevState => ({
      ...prevState,
      school2: {
        ...prevState.school2,
        details: updatedDetails
      }
    }));
  };

  return (
    <section className="education">
      <h2>Education</h2>
      
      <div>
        <h3>
          <strong
            contentEditable
            suppressContentEditableWarning
            onBlur={e => handleBlur(e, 'school1', 'name')}
          >
            {education.school1.name}
          </strong>
          <span className="date">
            <strong
              contentEditable
              suppressContentEditableWarning
              onBlur={e => handleBlur(e, 'school1', 'date')}
            >
              {education.school1.date}
            </strong>
          </span>
        </h3>
        <p>
          <strong
            contentEditable
            suppressContentEditableWarning
            onBlur={e => handleBlur(e, 'school1', 'qualification')}
          >
            {education.school1.qualification}
          </strong>
        </p>
      </div>
      
      <div>
        <h3>
          <strong
            contentEditable
            suppressContentEditableWarning
            onBlur={e => handleBlur(e, 'school2', 'name')}
          >
            {education.school2.name}
          </strong>
          <span className="date">
            <strong
              contentEditable
              suppressContentEditableWarning
              onBlur={e => handleBlur(e, 'school2', 'date')}
            >
              {education.school2.date}
            </strong>
          </span>
        </h3>
        <p>
          <strong
            contentEditable
            suppressContentEditableWarning
            onBlur={e => handleBlur(e, 'school2', 'qualification')}
          >
            {education.school2.qualification}
          </strong>
        </p>
        <ul>
          {education.school2.details.map((detail, index) => (
            <li key={index}>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={e => handleDetailsBlur(e, index)}
              >
                {detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <hr className="educ-line" />
    </section>
  );
};

export default Education;
