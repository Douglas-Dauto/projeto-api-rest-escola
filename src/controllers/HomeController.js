import Aluno from "../models/Aluno";

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: 'Luana',
            sobrenome: 'Dauto Bastos',
            email: 'bastosluanabastos@gmail.com',
            idade: 20,
            peso: 55,
            altura: 1.60
        });

        res.json(novoAluno);
    }
}

export default new HomeController();
