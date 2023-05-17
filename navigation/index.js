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
        "title": "Place",
        "path": "/place",
        "icon": "",
        "child": [],
        "meta": {}
      },
      {
        "title": "Pet Configuration",
        "path": "/pet-configuration",
        "icon": "",
        "child": []
      },
      {
        "title": "Manage Pet",
        "path": "/admin-pet",
        "icon": "",
        "child": []
      },
      {
        "title": "Manage Pet Owner",
        "path": "/owner-pet",
        "icon": "",
        "child": []
      },
      {
        "title": "Pet Keeper",
        "path": "/keeper-pet",
        "icon": "",
        "child": []
      },
      {
        "title": "Manage Request",
        "path": "/keeper-request",
        "icon": "",
        "child": []
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