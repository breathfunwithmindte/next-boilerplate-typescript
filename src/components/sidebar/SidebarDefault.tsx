import SidebarInterface from "./SidebarInterface";

const sidebarDefault : SidebarInterface = {

  navigations: [
    {
      label: "Dashboard",
      name: "dashboard",
      path: "/admin/dashboard/show"
    },
    {
      label: "Providers",
      name: "providers",
      path: "/admin/providers/read"
    },
    {
      label: "Users",
      name: "users",
      path: "/admin/users/read"
    },
    {
      label: "Groups",
      name: "groups",
      path: "/admin/groups/read"
    },
    {
      label: "Related Items",
      name: "relateditems",
      path: "/admin/relateditems/read"
    },
    {
      label: "Provider Rules",
      name: "providerrules",
      path: "/admin/providerrules/read"
    },
    {
      label: "Security",
      name: "security",
      path: "/admin/security/render"
    },
    {
      label: "Integrations",
      name: "integrations",
      path: "/admin/integrations/read"
    },
    {
      label: "Tokens",
      name: "tokens",
      path: "/admin/tokens/read"
    },
    {
      label: "Settings",
      name: "settings",
      path: "/admin/settings/render"
    },
  ]

}

export default sidebarDefault;