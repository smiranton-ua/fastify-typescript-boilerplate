// hook to check token and write user to request obj
const authHook = (req, res, done) => {
  const user = { name: 'Pavel Valentov', id: '1' };
  req.user = user;

  done();
};

export default authHook;
