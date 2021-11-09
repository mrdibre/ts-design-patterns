export type SystemUserAddressProtocol = {
  street: string;
  number: number;
};

export interface SystemUserProtocol {
  firstname: string;
  username: string

  getAddresses(): Promise<SystemUserAddressProtocol[]>;
}
