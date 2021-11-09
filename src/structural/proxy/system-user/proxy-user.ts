import { SystemUserAddressProtocol, SystemUserProtocol } from "./system-user-protocol";
import { AdminUser } from "./admin-user";

class ProxyUser implements SystemUserProtocol {
  private user: SystemUserProtocol | null = null;
  private cachedAddresses: SystemUserAddressProtocol[] | null = null;

  constructor(public firstname: string, public username: string) {}

  private createUser(): SystemUserProtocol {
    if (this.user) return this.user;

    return new AdminUser(this.firstname, this.username);
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    if (this.cachedAddresses) return this.cachedAddresses;

    const user = this.createUser();

    this.cachedAddresses = await user.getAddresses();

    return this.cachedAddresses;
  }

}

export { ProxyUser };
