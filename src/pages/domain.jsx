import React, { useState } from "react";
import Header from "../components/header";
import Switch from "@mui/material/Switch";

const Domain = () => {
  const [domains, setDomains] = useState([
    { id: 1, name: "kapselite.com", status: "active", expiry: "2024-12-31", dns: "ns1.kapselite.com, ns2.kapselite.com" },
    { id: 2, name: "kapselite.co.zw", status: "inactive", expiry: "2025-01-15", dns: "ns1.kapselite.co.zw, ns2.kapselite.co.zw" },
  ]);
  

  const [newDomain, setNewDomain] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [dns, setDns] = useState("");

  const handleAddDomain = () => {
    if (!newDomain.trim()) return;
    const newId = domains.length ? domains[domains.length - 1].id + 1 : 1;
    setDomains([
      ...domains,
      { id: newId, name: newDomain, status: "active", expiry: "2025-01-01", dns: "ns1.default.com, ns2.default.com" },
    ]);
    setNewDomain("");
  };

  const handleDeleteDomain = (id) => {
    setDomains(domains.filter((domain) => domain.id !== id));
  };

  const handleToggleStatus = (id) => {
    setDomains(
      domains.map((domain) =>
        domain.id === id
          ? { ...domain, status: domain.status === "active" ? "inactive" : "active" }
          : domain
      )
    );
  };

  const handleUpdateDns = (id, newDns) => {
    setDomains(
      domains.map((domain) =>
        domain.id === id ? { ...domain, dns: newDns } : domain
      )
    );
  };

  const filteredDomains = domains.filter((domain) =>
    domain.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Header/>
    <div className="container-dom">
    

      <section className="domain-actions">
        <input
          type="text"
          placeholder="Enter domain (e.g., kapselite.com)"
          value={newDomain}
          onChange={(e) => setNewDomain(e.target.value)}
        />
        <button onClick={handleAddDomain}>Add Domain</button>
        <input
          type="text"
          placeholder="Search domains..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button >Search Domain</button>
      </section>

      <section className="domain-list">
      {filteredDomains.length > 0 ? (
          filteredDomains.map((domain) => (
            <div className="domain-card" key={domain.id}>
              <h3>{domain.name}</h3>
              <p>Status: {domain.status}</p>
              <p>Expiry: {domain.expiry}</p>
              <p>DNS: {domain.dns}</p>
              <div className="domain-actions">
                <Switch
                  checked={domain.status === "active"}
                  onChange={() => handleToggleStatus(domain.id)}
                  inputProps={{ "aria-label": "Activate/Deactivate" }}
                />
                <label>{domain.status === "active" ? "Active" : "Inactive"}</label>
                <button onClick={() => handleDeleteDomain(domain.id)}>Delete</button>
              </div>
              <div className="dns-management">
                <input
                  type="text"
                  placeholder="Update DNS (e.g., ns1.new.com, ns2.new.com)"
                  value={dns}
                  onChange={(e) => setDns(e.target.value)}
                />
                <button onClick={() => handleUpdateDns(domain.id, dns)}>
                  Update DNS
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No domains found.</p>
        )}
      </section>
    </div>
    </>
  );
};

export default Domain ;
