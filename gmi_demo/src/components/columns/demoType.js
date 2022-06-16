import React from "react";
import { Icon, TdLink } from "@guillotinaweb/react-gmi";

export const ColumnsDemoType = () => {
  const smallcss = { width: 25 };
  const mediumcss = { width: 120 };

  return [
    {
      label: "",
      child: (m) => <td style={smallcss}>{<Icon icon={m.icon} />}</td>,
    },
    {
      label: "type",
      child: (m) => (
        <TdLink style={smallcss} model={m}>
          <span className="tag">{m.type}</span>
        </TdLink>
      ),
    },
    {
      label: "id/name",
      child: (m, navigate, search) => (
        <TdLink model={m}>
          {m.name}
          {search && (
            <React.Fragment>
              <br />
              <span className="is-size-7 tag is-light">{m.path}</span>
            </React.Fragment>
          )}
        </TdLink>
      ),
    },
    {
      label: "path",
      child: (m) => (
        <td style={mediumcss} className="is-size-7 is-vcentered">
          {m.item.path}
        </td>
      ),
    },
    {
      label: "created",
      child: (m) => (
        <td style={mediumcss} className="is-size-7 is-vcentered">
          {m.created}
        </td>
      ),
    },
    {
      label: "modified",
      child: (m) => (
        <td style={mediumcss} className="is-size-7 is-vcentered">
          {m.updated}
        </td>
      ),
    },
  ];
};