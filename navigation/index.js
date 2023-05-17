export default [
  {
    "header": "",
    "description": "",
    "child": [
      {
        "title": "Dashboard",
        "path": "/dashboard",
        "icon": "ic:outline-dashboard",
        "child": [],
        "meta": {}
      },
      {
        "title": "Dashboard New",
        "path": "/dashboard-new",
        "icon": "ic:outline-dashboard",
        "child": [],
        "meta": {}
      },
      {
        "title": "Category",
        "path": "/category",
        "icon": "material-symbols:category-outline",
        "child": [],
        "meta": {}
      },
      {
        "title": "Expense",
        "path": "/Expense",
        "icon": "arcticons:expense-register",
        "child": [],
        "meta": {}
      },
      {
        "title": "Budget",
        "path": "/Budget",
        "icon": "arcticons:budgetmylife",
        "child": [],
        "meta": {}
      },
      {
        "title": "Expense+",
        "path": "/Chat",
        "icon": "material-symbols:android",
        "child": [],
        "meta": {}
      }
    ]
  },
  {
    "header": "Administration",
    "description": "Manage your application",
    "child": [
      {
        "title": "Menu Editor",
        "icon": "ci:menu-alt-03",
        "path": "/devtool/menu-editor",
        "child": []
      },
      {
        "title": "Manage Users",
        "path": "/devtool/user-management",
        "icon": "ph:user-circle-gear",
        "child": [
          {
            "title": "User List",
            "path": "/devtool/user-management/user-list",
            "icon": "",
            "child": []
          },
          {
            "title": "Role List",
            "path": "/devtool/user-management/role-list",
            "icon": "",
            "child": []
          }
        ]
      },
      {
        "title": "Content Editor",
        "path": "/devtool/content-editor",
        "icon": "mdi:pencil-ruler",
        "child": []
      },
      {
        "title": "API Editor",
        "path": "/devtool/api-editor",
        "icon": "material-symbols:api-rounded",
        "child": []
      }
    ],
    "meta": {
      "auth": {
        "role": [
          "Developer"
        ]
      }
    }
  }
]