import React, { useState } from "react";
import Header from "../components/header";

const Email = () => {
  const [emails, setEmails] = useState([]);
  const [domains] = useState(["kapselite.com", "kapselite.org"]); 
  const [selectedDomain, setSelectedDomain] = useState(domains[0]);
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCreateEmail = () => {
    if (!newEmail.trim() || !password.trim()) return;
    const emailAddress = `${newEmail}@${selectedDomain}`;
    setEmails([
      ...emails,
      {
        id: emails.length + 1,
        address: emailAddress,
        password,
        smtpPort: 587,
        imapPort: 993,
      },
    ]);
    setNewEmail("");
    setPassword("");
  };

  const handleDeleteEmail = (id) => {
    setEmails(emails.filter((email) => email.id !== id));
  };

  const filteredEmails = emails.filter((email) =>
    email.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Header/>
    <div className="container-em">
      <section className="email-actions">
        <h2>Create Email</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username (e.g., john.doe)"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <select
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
          >
            {domains.map((domain, index) => (
              <option key={index} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleCreateEmail}>Create Email</button>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Search emails..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      <section className="email-list">
        <h2>Email Accounts</h2>
        {filteredEmails.length > 0 ? (
          filteredEmails.map((email) => (
            <div className="email-card" key={email.id}>
              <h3>{email.address}</h3>
              <p>SMTP Port: {email.smtpPort}</p>
              <p>IMAP Port: {email.imapPort}</p>
              <div className="email-actions">
                <button onClick={() => handleDeleteEmail(email.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No email accounts found.</p>
        )}
      </section>
    </div>
    </>
  );
};

export default Email;
