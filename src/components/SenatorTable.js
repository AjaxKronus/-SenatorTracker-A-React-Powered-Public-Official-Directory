import React from 'react';
import TableHeader from './TableHeader';
import SenatorRow from './SenatorRow';

const SenatorTable = ({ senatorsList }) => {
  return (
    <div data-testid="SenatorTable">
      <table className="table table-bordered">
        <TableHeader />
        <tbody>
          {senatorsList.map((senator, index) => (
            <SenatorRow key={index} senator={senator} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SenatorTable;
