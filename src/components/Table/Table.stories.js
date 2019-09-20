import React from "react";
import { select, object, array } from "@storybook/addon-knobs";

import Table from "./Table";

export default { title: "Table", component: Table };

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "55%"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: "15%"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: "10%"
  },
  {
    title: "Food",
    dataIndex: "favfood",
    key: "favfood",
    width: "10%"
  }
];

const data = [
  {
    key: 0,
    name:
      "Adolph Blaine Charles David Earl Frederick Gerald Hubert Irvin John Kenneth Lloyd Martin Nero Oliver Paul Quincy Randolph Sherman Thomas Uncas Victor William Xerxes Yancy Wolfeschlegelsteinhausenbergerdorff, Senior",
    age: 32,
    address: "New York No. 1 Lake Park",
    favfood: "Hotdogs"
  },
  {
    key: 1,
    name: "Jane Green",
    age: 42,
    address: "London No. 1 Lake Park",
    favfood: "Amatriciana"
  },
  {
    key: 2,
    name: "Jenny Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    favfood: "Grilled Cheese"
  },
  {
    key: 3,
    name: "Joe Shmo",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    favfood: "Grilled Cheese"
  }
];

export const typical = () => {
  return (
    <Table
      columns={object("columns", columns)}
      data={object("data", data)}
      sortDataIndex={select(
        "sortDataIndex",
        ["name", "address", "favfood", "age"],
        "name"
      )}
      selectedRows={array("selectedRows", [0])}
      onSort={sortIndex => alert(JSON.stringify(sortIndex))}
      onRowClick={rowData => console.log(rowData)}
    />
  );
};

typical.story = {
  name: "Typical",

  parameters: {
    info: {
      text: "A table component."
    }
  }
};
