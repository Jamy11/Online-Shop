import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";




import Dashboard from "../../views/admin/Dashboard";
import Sidebar from "../Sidebar/Sidebar";
import Settings from "../../views/admin/Settings"
import Tables from "../../views/admin/Tables";
import Maps from "../../views/admin/Maps";



export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>

        </div>
      </div>
    </>
  );
}
