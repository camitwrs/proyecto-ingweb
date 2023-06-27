import React, { useState } from 'react';

export function NewPost() {
  const [tipoMascota, setTipoMascota] = useState('');
  const [sexoMascota, setSexoMascota] = useState('');
  const [nombreMascota, setNombreMascota] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [tamanoMascota, setTamanoMascota] = useState('');
  const [antecedentesMedicos, setAntecedentesMedicos] = useState('');
  const [fotos, setFotos] = useState([]);

  const handleTipoMascotaChange = (event) => {
    setTipoMascota(event.target.value);
  };

  const handleSexoMascotaChange = (event) => {
    setSexoMascota(event.target.value);
  };

  const handleNombreMascotaChange = (event) => {
    setNombreMascota(event.target.value);
  };

  const handleCiudadChange = (event) => {
    setCiudad(event.target.value);
  };

  const handleTamanoMascotaChange = (event) => {
    setTamanoMascota(event.target.value);
  };

  const handleAntecedentesMedicosChange = (event) => {
    setAntecedentesMedicos(event.target.value);
  };

  const handleFotoChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFotos([...fotos, selectedFile]);
    }
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu API o hacer lo necesario con ellos
    // ...
    // Luego puedes restablecer los campos del formulario
    setTipoMascota('');
    setSexoMascota('');
    setNombreMascota('');
    setCiudad('');
    setTamanoMascota('');
    setAntecedentesMedicos('');
    setFotos([]);

    //Ocultar el formulario
    onHideForm();
  };

  return (
    <div className="col-12">
      <form onSubmit={handlePostSubmit}>
        <div className="mb-3">
          <label htmlFor="tipoMascota" className="form-label">Tipo de mascota</label>
          <select id="tipoMascota" className="form-select" value={tipoMascota} onChange={handleTipoMascotaChange} required>
            <option value="">Seleccionar tipo de mascota</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="sexoMascota" className="form-label">Sexo de la mascota</label>
          <select id="sexoMascota" className="form-select" value={sexoMascota} onChange={handleSexoMascotaChange} required>
            <option value="">Seleccionar sexo de la mascota</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="nombreMascota" className="form-label">Nombre de la mascota</label>
          <input type="text" id="nombreMascota" className="form-control" value={nombreMascota} onChange={handleNombreMascotaChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="ciudad" className="form-label">Ciudad</label>
          <input type="text" id="ciudad" className="form-control" value={ciudad} onChange={handleCiudadChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="tamanoMascota" className="form-label">Tamaño de la mascota</label>
          <select id="tamanoMascota" className="form-select" value={tamanoMascota} onChange={handleTamanoMascotaChange} required>
            <option value="">Seleccionar tamaño de la mascota</option>
            <option value="Bebe">Bebe</option>
            <option value="Adulto">Adulto</option>
            <option value="Adulto mayor">Adulto mayor</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="antecedentesMedicos" className="form-label">Antecedentes médicos</label>
          <textarea id="antecedentesMedicos" className="form-control" rows={3} value={antecedentesMedicos} onChange={handleAntecedentesMedicosChange} required></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="fotos" className="form-label">Fotos</label>
          <input type="file" id="fotos" className="form-control" accept="image/*" onChange={handleFotoChange} />
        </div>

        <button className="btn btn-dark" type="submit">Publicar</button>
      </form>
    </div>
  );
}