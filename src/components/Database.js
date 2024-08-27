import React from 'react';

const Database = () => {
  return (
    <div>
      <h2>Tandem Repeats Database</h2>
      
      {/* First 4x2 Table (No Borders) */}
      <table style={styles.noBorderTable}>
        <thead>
          <tr>
            <th style={styles.firstColumnTh}>TR type</th>
            <th style={styles.firstColumnTh}>Related Gene</th>
            <th style={styles.noBorderTh}>Description</th>
            <th style={styles.noBorderTh}>Data Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.firstColumnTd}>STR</td>
            <td style={styles.firstColumnTd}>FMR1</td>
            <td style={styles.descriptionTd}>DNA samples associated with CGG repeat expansions in the FMR1 gene, which are linked to fragile X syndrome (FXS) and fragile X-associated tremor and ataxia syndrome (FXTAS).</td>
            <td style={styles.noBorderTd}><a href="https://www.ebi.ac.uk/ena/browser/view/PRJNA745542" style={styles.link} target="_blank" rel="noopener noreferrer">PRJNA745542</a></td>
          </tr>
          <tr>
            <td style={styles.firstColumnTd}>STR</td>
            <td style={styles.firstColumnTd}>HTT</td>
            <td style={styles.descriptionTd}>DNA samples from individuals with Huntington's disease (HD), caused by CAG repeat expansions in the HTT gene.</td>
            <td style={styles.noBorderTd}><a href="https://www.ebi.ac.uk/ena/browser/view/PRJNA678742" style={styles.link} target="_blank" rel="noopener noreferrer">PRJNA678742</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  noBorderTable: {
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    textAlign: 'center',
  },
  borderTable: {
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    textAlign: 'center',
  },
  noBorderTh: {
    padding: '8px',
    backgroundColor: '#f2f2f2',
  },
  noBorderTd: {
    padding: '8px',
  },
  borderTh: {
    border: '2px solid black',
    padding: '8px',
    backgroundColor: '#f2f2f2',
  },
  borderTd: {
    border: '2px solid black',
    padding: '8px',
  },
  firstColumnTh: {
    width: '10%',
    padding: '8px',
    backgroundColor: '#f2f2f2',
  },
  firstColumnTd: {
    width: '10%',
    padding: '8px',
  },
  descriptionTd: {
    padding: '8px',
    textAlign: 'left',
  },
  link: {
    color: 'blue',           // Sets the text color to blue
    textDecoration: 'underline', // Underlines the text to indicate it's a link
  },
};

export default Database;
