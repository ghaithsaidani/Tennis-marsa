let { check, validationResult } = require("express-validator");
exports.registerRules = () => [
  check("email", "this field is funking require !!!").notEmpty(),
  check("email", "this should be a valid email").isEmail(),
];

exports.validator = (req, res, next) => {
  let errors = validationResult(req);
  return errors.isEmpty()
    ? next()
    : res.status(404).json({ errors: errors.array() });
};