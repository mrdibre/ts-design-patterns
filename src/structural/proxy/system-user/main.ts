import { ProxyUser } from "./proxy-user";

(async () => {
  const user = new ProxyUser("César", "cesar");

  console.log(await user.getAddresses());
  console.log(await user.getAddresses());
  console.log(await user.getAddresses());
  console.log(await user.getAddresses());
  console.log(await user.getAddresses());
})();
