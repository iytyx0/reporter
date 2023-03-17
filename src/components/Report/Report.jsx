import React, { useState } from 'react';
import './Report.css';

const ReportPage = () => {
  const [reportData, setReportData] = useState([]);
  const [formState, setFormState] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setReportData([...reportData, formState]);
    setFormState({});
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h1>Report Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name || ''}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="description">Описание:</label>
          <textarea
            id="description"
            name="description"
            value={formState.description || ''}
            onChange={handleFormChange}
          />
        </div>
        <button type="submit">Отправить</button>
      </form>
      <h2>Отчет за прошлую неделю</h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((report, index) => (
            <tr key={index}>
              <td>{report.name}</td>
              <td>{report.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportPage;
