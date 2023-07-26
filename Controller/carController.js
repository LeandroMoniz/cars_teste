const axios = require('axios');

const apiUrl = 'http://api-test.bhut.com.br:3000/api/cars';

module.exports = class carController {
    //create cars
    static async create(req, res) {

    }

    static async getAll(req, res) {
        try {
            const response = await axios.get(apiUrl);
            const data = response.data;
            res.status(200).json(data);
        } catch (error) {
            console.error('Erro ao acessar a API:', error);
            res.status(500).json({ error: 'Erro ao acessar a API externa' });
        }
    };




}