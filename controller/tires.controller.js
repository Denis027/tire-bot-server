class TiresController {
    async addTire(req, res) {
        const { title, season, width, hight, diameter, price } = req.body;
        console.log(title, season, width, hight, diameter, price);
        res.json("ok");
    }
    async getTires(req, res) {}
    async getOneTire(req, res) {}
    async updateTire(req, res) {}
    async deleteTire(req, res) {}
}

module.exports = new TiresController();
