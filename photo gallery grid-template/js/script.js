var array = [
  {
    id: 1,
    name: 'Dashboard',
    sublink: 'dashboard',
    icon: 'fas fa-tachometer-alt',
    active: false,
    nasted: false,
    subCategory: [],
  },
  {
    id: 2,
    name: 'Manage Orders',
    sublink: 'all_orders',
    icon: 'fas fa-gift',
    active: false,
    nasted: true,
    subCategory: [
      { name: 'All Orders', sublink: 'all_orders' },
      { name: 'Cancelled Orders', sublink: 'cancelled_orders' },
      { name: 'Pending Orders', sublink: 'pending_orders' },
    ],
  },
  {
    id: 3,
    name: 'Manage Products',
    sublink: 'all_products',
    icon: 'fas fa-shopping-cart',
    active: false,
    nasted: true,
    subCategory: [
      { name: 'All Products', sublink: 'all_products' },
      { name: 'Add Product', sublink: 'add_product' },
      { name: 'Out of Stock', sublink: 'out_of_stock' },
    ],
  },
  {
    id: 4,
    name: 'Manage User',
    sublink: 'all_users',
    icon: 'fas fa-user-tie',
    active: false,
    nasted: true,
    subCategory: [
      { name: 'All Users', sublink: 'all_users' },
      { name: 'Add User', sublink: 'add_user' },
      { name: 'Suspanded Users', sublink: 'suspanded_users' },
      { name: 'Pending Requests', sublink: 'pending_requests' },
    ],
  },
  {
    id: 5,
    name: 'Manage Customers',
    sublink: 'all_customers',
    icon: 'fas fa-users',
    active: false,
    nasted: true,
    subCategory: [
      { name: 'All Customers', sublink: 'all_customers' },
      { name: 'Customers Review', sublink: 'customers_review' },
    ],
  },
  {
    id: 6,
    name: 'Logout',
    sublink: 'logout',
    icon: 'fas fa-sign-out-alt',
    active: false,
    nasted: false,
    subCategory: [],
  },
]

// let x = array.find((item) => item.nasted && item.subCategory )

let k = array.find(
  (item) =>
    item.nasted &&
    item.subCategory.map((a) => a.sublink).includes('add_user') &&
    item
)

console.log(k)
