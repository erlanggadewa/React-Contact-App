import React from "react";
import { useNavigate } from "react-router-dom";
import ContactInput from "../components/ContactInput";
import { addContact } from "../utils/data";

function AddPage() {
  const navigate = useNavigate();
  function onAddContactHandler(contact) {
    addContact(contact);

    navigate("/");
  }

  return (
    <>
      <h2>Tambah Kontak</h2>
      <ContactInput addContact={onAddContactHandler} />
    </>
  );
}

export default AddPage;
