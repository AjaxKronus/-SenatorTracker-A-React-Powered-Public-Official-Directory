import React from 'react';

const TableHeader = () => {
  const headings = ['Name', 'Party', 'State', 'Phone', 'Twitter'];
  return (
    <thead data-testid="TableHeader">
      <tr>
        {headings.map((heading, index) => (
          <th key={index}>{heading}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
