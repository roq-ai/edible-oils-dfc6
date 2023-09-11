interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Inventory Manager', 'Sales Representative', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'edible oils',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Organization profile',
    'Invite and delete users',
    "Manage Organization's information",
    'View all users in the Organization',
  ],
};
