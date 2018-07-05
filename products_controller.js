const create = (req, res, next) => {
  const db = req.app.get("db");
  const { name, description, price, imageurl } = req.body;

  db.create_product([name, description, price, imageurl])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err =>
      res.status(500).send({
        errorMessage:
          "We have notified our engineers and they are working around the clock to fix the issue. Please try back later"
      })
    );
};

const getOne = (req, res, next) => {
  const db = req.app.get("db");
  db.read_product([req.params.id])
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err =>
      res.status(500).send({
        errorMessage:
          "We have notified our engineers and they are working around the clock to fix the issue. Please try back later"
      })
    );
};

const getAll = (req, res, next) => {
  const db = req.app.get("db");
  db.read_products()
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err =>
      res.status(500).send({
        errorMessage:
          "We have notified our engineers and they are working around the clock to fix the issue. Please try back later"
      })
    );
};

const update = (req, res, next) => {
  const db = req.app.get("db");
  db.update_product([req.params.id, req.query.desc])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err =>
      res.status(500).send({
        errorMessage:
          "We have notified our engineers and they are working around the clock to fix the issue. Please try back later"
      })
    );
};

const deleteD = (req, res, next) => {
  const db = req.app.get("db");
  db.delete_product([req.params.id])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err =>
      res.status(500).send({
        errorMessage:
          "We have notified our engineers and they are working around the clock to fix the issue. Please try back later"
      })
    );
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  deleteD
};
