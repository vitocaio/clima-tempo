import axios from 'axios';

const getCidades = axios.get(`http://localhost:3003/api/cidades`)
  .then(res => {
    const persons = res.data;
    console.log(persons);
  })

export default getCidades;
