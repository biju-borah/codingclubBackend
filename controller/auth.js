const config = require("../config/auth.config");
const User = require("../models/user");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

export const signup = (req, res) => {

    const token = jwt.sign({ email: req.body.email }, config.secret)

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        confirmationCode: token
    })
    user.save((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({
            message:
                "User was registered successfully! Please check your email",
        });

        nodemailer.sendConfirmationEmail(
            user.username,
            user.email,
            user.confirmationCode
        );
    });
}

export const verifyUser = (req, res, next) => {
    User.findOne({
        confirmationCode: req.params.confirmationCode,
    })
        .then((user) => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            user.status = "Active";
            user.save((err) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
            });
        })
        .catch((e) => console.log("error", e));
};

export const login = async (req, res) => {

    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Incorrect Email-ID')

    const valid = await bcrypt.compare(req.body.password, user.password)
    if (!valid) return res.status(400).send('Incorrect Password')

    res.header("auth-token", user.confirmationCode).send(token)
}