import { SystemUserAddressProtocol, SystemUserProtocol } from "./system-user-protocol";

class AdminUser implements SystemUserProtocol {
  constructor(public firstname: string, public username: string) {}

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { street: "Av. Brasil", number: 50 },
          { street: "Rondon Pacheco", number: 400 }
        ]);
      }, 2000);
    });
  }

}

export { AdminUser };
