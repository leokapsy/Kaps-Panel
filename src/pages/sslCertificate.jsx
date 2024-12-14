import React, { useState } from "react";
import Header from "../components/header";


const SSL = () => {
  const [certificates, setCertificates] = useState([
    { id: 1, domain: "kapselite.co.zw", status: "valid", expiry: "2025-01-01" },
    { id: 2, domain: "kapselite.com", status: "expired", expiry: "2023-12-10" },
  ]);

  const [newDomain, setNewDomain] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  
  const handleGenerate = () => {
    if (!newDomain.trim()) return;
    const newId = certificates.length ? certificates[certificates.length - 1].id + 1 : 1;
    setCertificates([
      ...certificates,
      { id: newId, domain: newDomain, status: "valid", expiry: "2025-01-01" },
    ]);
    setNewDomain("");
  };

  
  const handleDelete = (id) => {
    setCertificates(certificates.filter((cert) => cert.id !== id));
  };


  const filteredCertificates = certificates.filter((cert) =>
    cert.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
     <Header/>
     <div className="container">
    <div className="ssl-container">
      <section className="ssl-actions">
        <input
          type="text"
          placeholder="Enter domain (e.g., mysite.com)"
          value={newDomain}
          onChange={(e) => setNewDomain(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate SSL</button>
        <input
          type="text"
          placeholder="Search domains..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </section>

    
      <section className="ssl-list">
        {filteredCertificates.length > 0 ? (
          filteredCertificates.map((cert) => (
            <div className={`ssl-card ${cert.status}`} key={cert.id}>
              <h3>{cert.domain}</h3>
              <p>Status: {cert.status === "valid" ? " Valid" : " Expired"}</p>
              <p>Expiry: {cert.expiry}</p>
              <div className="ssl-actions">
                <button onClick={() => handleDelete(cert.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No certificates found.</p>
        )}
      </section>
    </div>
    </div>
    </>
  );
};

export default SSL;
