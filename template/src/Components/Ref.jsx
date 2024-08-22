import React, { useState } from 'react';
import './Ref.css';

const CVReferences = () => {
  const [references, setReferences] = useState([
    {
      name: 'Jane Smith',
      title: 'Senior Developer',
      company: 'Tech Solutions',
      contact: 'jane.smith@techsolutions.com | (987) 654-3210',
      relationship: 'Former Manager',
    },
    {
      name: 'John Doe',
      title: 'Project Lead',
      company: 'Innovate Inc.',
      contact: 'john.doe@innovateinc.com | (654) 321-0987',
      relationship: 'Colleague',
    },
  ]);

  const handleBlur = (e, index, field) => {
    const updatedReferences = [...references];
    updatedReferences[index][field] = e.target.innerText;
    setReferences(updatedReferences);
  };

  const handleAddReference = () => {
    setReferences([
      ...references,
      { name: '', title: '', company: '', contact: '', relationship: '' }
    ]);
  };

  const handleRemoveReference = (index) => {
    setReferences(references.filter((_, i) => i !== index));
  };

  return (
    <section className="cv-references">
      <h2>References</h2>
      {references.map((ref, index) => (
        <div key={index} className="reference-item">
          <h3>
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(e, index, 'name')}
            >
              {ref.name || 'Name'}
            </span>
          </h3>
          <p>
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(e, index, 'title')}
            >
              {ref.title || 'Title'}
            </span> at 
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(e, index, 'company')}
            >
              {ref.company || 'Company'}
            </span>
          </p>
          <p
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleBlur(e, index, 'contact')}
          >
            {ref.contact || 'Contact Info'}
          </p>
          <p
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleBlur(e, index, 'relationship')}
          >
            {ref.relationship || 'Relationship'}
          </p>
          <button onClick={() => handleRemoveReference(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddReference}>Add Reference</button>
    </section>
  );
};

export default CVReferences;
