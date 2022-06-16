import React from "react";
  import {
    TabsPanel,
    ContextToolbar,
    PanelItems,
    PanelActions,
    useTraversal,
    PanelProperties,
    PanelPermissions,
    PanelBehaviors,
  } from "@guillotinaweb/react-gmi";

  const tabs = {
    Items: PanelItems,
    Properties: PanelProperties,
    Behaviors: PanelBehaviors,
    Permissions: PanelPermissions,
    Actions: PanelActions,
    Custom: () => <div> This is a custom tab </div>
  };

  const tabsPermissions = {
    Items: "guillotina.ViewContent",
    Properties: "guillotina.ViewContent",
    Behaviors: "guillotina.ModifyContent",
    Permissions: "guillotina.SeePermissions",
    Custom: "guillotina.ViewContent",
  };

  export function DemoTypeView(props) {
    const ctx = useTraversal();
    const calculated = ctx.filterTabs(tabs, tabsPermissions);

    return (
      <TabsPanel
        tabs={calculated}
        currentTab="Items"
        rightToolbar={<ContextToolbar {...props} />}
        {...props}
      />
    );
  }