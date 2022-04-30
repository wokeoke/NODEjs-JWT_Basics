const login = async (req, res) => {
  res.send('Fake Login/Register/Signup');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: `Hello, Doe`,
    secret: `Here is your number, ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
