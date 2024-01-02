import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios'; // Make sure axios is installed


const EditPopup = ({ row, open, setOpen }) => {
    const [formData, setFormData] = useState({ ...row, type: row ? row.type_name : '' });

    useEffect(() => {
        if (row) {
            setFormData({ ...row, type: row.type_name });
        }
    }, [row]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleClose = () => {
        setOpen(false);
        setReload(reload=>!reload);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = {
            type_id: formData.type_name === 'Client' ? 1 : 2,
            name: formData.company_name,
            country: formData.country,
            tva: formData.tva,
        };
        console.log(formData.id);
        console.log(dataToSend);
        axios.put(`https://api-cogip-329f9c72c66d.herokuapp.com/api/update-company/${formData.id}`, dataToSend)
            .then(response => {
                console.log(response.data);
                setFormData(response.data);
                setOpen(false);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <Popup open={open} onClose={() => setOpen(false)} modal>
            <form onSubmit={handleSubmit}>
                <label>
                    Company Name:
                    <input type="text" name="company_name" value={formData.company_name || ''} onChange={handleChange} />
                </label>
                <label>
                    TVA:
                    <input type="text" name="tva" value={formData.tva || ''} onChange={handleChange} />
                </label>
                <label>
                    Country:
                    <input type="text" name="country" value={formData.country || ''} onChange={handleChange} />
                </label>
                <label>
                    Type:
                    <div>
                        <label>
                            <input type="radio" name="type_name" value="Client" checked={formData.type_name === 'Client'} onChange={handleChange} />
                            Client
                        </label>
                        <label>
                            <input type="radio" name="type_name" value="Supplier" checked={formData.type_name === 'Supplier'} onChange={handleChange} />
                            Supplier
                        </label>
                    </div>
                </label>
                <button type="submit">Submit</button>
            </form>
        </Popup>
    );
};

export default EditPopup;