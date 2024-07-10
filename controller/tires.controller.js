const db = require("../db");

class TiresController {
    async addTire(req, res) {
        const { model, season, width, hight, diameter, price } = req.body;
        const newTire = await db.query(
            "INSERT INTO tire_items (model, season, width, hight, diameter, price) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [model, season, width, hight, diameter, price]
        );
        res.json(newTire.rows[0]);
    }
    async getTires(req, res) {
        const allTires = await db.query("SELECT * FROM tire_items;", []);
        res.json(allTires.rows);
    }
    async getOneTire(req, res) {}
    async updateTire(req, res) {}
    async deleteTire(req, res) {}
}

module.exports = new TiresController();
