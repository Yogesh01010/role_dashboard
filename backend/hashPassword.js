import bcrypt from "bcryptjs";

const run = async () => {
  const password = "123456";
  const hashed = await bcrypt.hash(password, 10);
  console.log(hashed);
};

run();