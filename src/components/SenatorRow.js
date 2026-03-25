import React from 'react';

const SenatorRow = ({ senator }) => {
  return (
    <tr data-testid="SenatorRow">
      <td>{senator.name}</td>
      <td>{senator.party}</td>
      <td>{senator.state}</td>
      <td>
        <a href={`tel:${senator.phone}`}>{senator.phone}</a>
      </td>
      <td>
        <a href={`https://twitter.com/${senator.twitter}`}>@{senator.twitter}</a>
      </td>
    </tr>
  );
};

export default SenatorRow;
