import React from 'react';

const Database = () => {
  return (
    <div>
      <h2>Database</h2>
      
      {/* First 5x3 Table (No Borders) */}
      <table style={styles.noBorderTable}>
        <thead>
          <tr>
            <th style={styles.noBorderTh}>Column 1</th>
            <th style={styles.noBorderTh}>Column 2</th>
            <th style={styles.noBorderTh}>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.noBorderTd}>Row 1, Cell 1</td>
            <td style={styles.noBorderTd}>Row 1, Cell 2</td>
            <td style={styles.noBorderTd}><a href="https://example.com/1" style={styles.link} target="_blank" rel="noopener noreferrer">Row 1, Cell 3</a></td>
          </tr>
          <tr>
            <td style={styles.noBorderTd}>Row 2, Cell 1</td>
            <td style={styles.noBorderTd}>Row 2, Cell 2</td>
            <td style={styles.noBorderTd}><a href="https://example.com/2" style={styles.link} target="_blank" rel="noopener noreferrer">Row 2, Cell 3</a></td>
          </tr>
          <tr>
            <td style={styles.noBorderTd}>Row 3, Cell 1</td>
            <td style={styles.noBorderTd}>Row 3, Cell 2</td>
            <td style={styles.noBorderTd}><a href="https://example.com/3" style={styles.link} target="_blank" rel="noopener noreferrer">Row 3, Cell 3</a></td>
          </tr>
          <tr>
            <td style={styles.noBorderTd}>Row 4, Cell 1</td>
            <td style={styles.noBorderTd}>Row 4, Cell 2</td>
            <td style={styles.noBorderTd}><a href="https://example.com/4" style={styles.link} target="_blank" rel="noopener noreferrer">Row 4, Cell 3</a></td>
          </tr>
          <tr>
            <td style={styles.noBorderTd}>Row 5, Cell 1</td>
            <td style={styles.noBorderTd}>Row 5, Cell 2</td>
            <td style={styles.noBorderTd}><a href="https://example.com/5" style={styles.link} target="_blank" rel="noopener noreferrer">Row 5, Cell 3</a></td>
          </tr>
        </tbody>
      </table>

      {/* Second 5x3 Table (With Solid Borders) */}
      <table style={styles.borderTable}>
        <thead>
          <tr>
            <th style={styles.borderTh}>Column 1</th>
            <th style={styles.borderTh}>Column 2</th>
            <th style={styles.borderTh}>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.borderTd}>Row 1, Cell 1</td>
            <td style={styles.borderTd}>Row 1, Cell 2</td>
            <td style={styles.borderTd}><a href="https://example.com/6" style={styles.link} target="_blank" rel="noopener noreferrer">Row 1, Cell 3</a></td>
          </tr>
          <tr>
            <td style={styles.borderTd}>Row 2, Cell 1</td>
            <td style={styles.borderTd}>Row 2, Cell 2</td>
            <td style={styles.borderTd}><a href="https://example.com/7" style={styles.link} target="_blank" rel="noopener noreferrer">Row 2, Cell 3</a></td>
          </tr>
          <tr>
            <td style={styles.borderTd}>Row 3, Cell 1</td>
            <td style={styles.borderTd}>Row 3, Cell 2</td>
            <td style={styles.borderTd}><a href="https://example.com/8" style={styles.link} target="_blank" rel="noopener noreferrer">Row 3, Cell 3</a></td>
          </tr>
          <tr>
            <td style={styles.borderTd}>Row 4, Cell 1</td>
            <td style={styles.borderTd}>Row 4, Cell 2</td>
            <td style={styles.borderTd}><a href="https://example.com/9" style={styles.link} target="_blank" rel="noopener noreferrer">Row 4, Cell 3</a></td>
          </tr>
          <tr>
            <td style={styles.borderTd}>Row 5, Cell 1</td>
            <td style={styles.borderTd}>Row 5, Cell 2</td>
            <td style={styles.borderTd}><a href="https://example.com/10" style={styles.link} target="_blank" rel="noopener noreferrer">Row 5, Cell 3</a></td>
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
  link: {
    color: 'blue',           // Sets the text color to blue
    textDecoration: 'underline', // Underlines the text to indicate it's a link
  },
};

export default Database;
