import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";




import Dashboard from "../../views/admin/Dashboard";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import Settings from "../../views/admin/Settings"
import Tables from "../../views/admin/Tables";
import Maps from "../../views/admin/Maps";
import useAuth from "../../hooks/useAuth";
import ShopKeeperSidebar from "../../components/Sidebar/ShopKeeperSidebar";



export default function CommonDashboard() {
  const { user } = useAuth()
  return (
    <>
      <ShopKeeperSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/dashboard/admin" component={Dashboard} />
            <Route path="/admin/maps"  component={Maps} />
            <Route path="/admin/settings"  component={Settings} />
            <Route path="/admin/tables"  component={Tables} />
            {/* <Redirect from="/dashboard" to="/admin/dashboard" /> */}
          </Switch>

        </div>
      </div>
    </>
  );
}
