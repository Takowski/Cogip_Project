import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Company_Name from '../../../Company_Name'
import Company_Contact_Show from '../../../Company_Contact_Show';

function CompanyPage() {
    const { id } = useParams();
    const [companyData, setCompanyData] = useState(null);

    useEffect(() => {
        fetch(`https://api-cogip-329f9c72c66d.herokuapp.com/api/companies/${id}`)
            .then(response => response.json())
            .then(data => setCompanyData(data.data))
            .catch(error => console.error('Error:', error));
    }, [id]);

    return companyData ? (
        <>
            <Company_Name data={companyData} />
            <Company_Contact_Show data={companyData} />
        </>
    ) : (
        <p>Loading...</p>
    );
}

export default CompanyPage;