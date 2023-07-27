const axios = require('axios');

const Car = require('../models/car.js')

const apiUrl = 'http://api-test.bhut.com.br:3000/api/cars';

module.exports = class carController {
    //create cars
    static async create(req, res) {

        // Expressão regular para validar se a string contém apenas números
        const isNumber = (value) => {
            const numberPattern = /^\d+$/;
            return numberPattern.test(value);
        };

        const isValidPrice = (value) => {
            // Verifica se o valor é um número
            if (isNaN(value)) {
                return false;
            }
            // Verifica se o valor é um número positivo maior que zero
            const price = parseFloat(value);
            if (price <= 0) {
                return false;
            }
            return true;
        };


        try {
            const { title, brand, price, age } = req.body;

            //Validation
            if (!title) {
                res.status(422).json({ message: "Obrigatório colocar o Modelo do veiculo" })
                return
            }
            if (!brand) {
                res.status(422).json({ message: "Obrigatório colocar a Marca do veiculo" })
                return
            }
            if (!price) {
                res.status(422).json({ message: "Obrigatório colocar a preço do veiculo" })
                return
            }
            if (!isValidPrice(price)) {
                res.status(422).json({ message: "O campo preço deve ser um número positivo maior que zero, pontos para separar centavos" })
                return
            }
            if (!isNumber(age)) {
                res.status(422).json({ message: "O campo data deve conter apenas números" })
                return
            }
            if (age.length >= 5 || age.length <= 3) {
                res.status(422).json({ message: "O campo data deve conter só ano com 4 números" })
                return
            }

            const data = { title, brand, price, age };

            const response = await axios.post(apiUrl, data);

            const retorno = response.data;
            console.log("aqui", retorno.length)

            const car = new Car({
                _id: retorno._id,
                title: retorno.title,
                price: retorno.price,
            })

            //Salva no banco
            const newCar = await car.save()

            res.status(200).json({ message: 'Dados enviados com sucesso para a API externa!' });


        } catch (error) {
            console.error('Erro ao acessar a API:', error);
            res.status(500).json({ error: 'Erro ao acessar a API externa' });
        }
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