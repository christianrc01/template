import {
  Grid,
  GridColumn,
  GridToolbar,
  type GridDataStateChangeEvent,
} from "@progress/kendo-react-grid";
import { process, type State } from "@progress/kendo-data-query";
import { useState } from "react";
import type { UserProps } from "@/shared/interfaces/IUser";
import "@/shared/styles/kendo-overrides.css";

function UserTable({ users }: { users: UserProps["user"][] }) {
  const [dataState, setDataState] = useState<State>({
    skip: 0,
    take: 10,
    sort: [{ field: "name", dir: "asc" }],
  });

  const handleDataStateChange = (e: GridDataStateChangeEvent) => {
    setDataState((prev) => ({
      ...prev,
      ...e.dataState,
      skip: e.dataState.skip ?? prev.skip,
      take: e.dataState.take ?? prev.take,
      sort: e.dataState.sort ?? prev.sort,
    }));
  };

  const processedUsers = users.map((user) => ({
    ...user,
    website: `https://${user.website}`,
  }));

  const processedData = process(processedUsers, dataState);
  const commonColumnProps = {
    headerClassName:
      "font-bold !text-gray-700 dark:!text-gray-300 !bg-gray-100 dark:!bg-gray-700 px-4 py-3 !border-b !border-gray-200 dark:!border-gray-600",
    className:
      "px-4 py-3 !text-gray-800 dark:!text-gray-200 !border-b !border-gray-100 dark:!border-gray-600 !bg-white/80 dark:!bg-gray-800/90",
  };

  const columns = [
    {
      field: "name",
      title: "Name",
      ...commonColumnProps,
    },
    {
      field: "username",
      title: "Username",
      ...commonColumnProps,
    },
    {
      field: "email",
      title: "Email",
      ...commonColumnProps,
    },
    {
      field: "phone",
      title: "Phone",
      ...commonColumnProps,
    },
    {
      field: "website",
      title: "Website",
      ...commonColumnProps,
    },
    {
      field: "address.city",
      title: "City",
      ...commonColumnProps,
    },
    {
      field: "company.name",
      title: "Company",
      ...commonColumnProps,
    },
  ];

  return (
    <div className="p-6">
      <Grid
        data={processedData}
        pageable={true}
        sortable={true}
        {...dataState}
        onDataStateChange={handleDataStateChange}
        className="rounded-2xl shadow-sm !border !border-gray-200 dark:!border-gray-600 !bg-white dark:!bg-gray-800"
      >
        <GridToolbar className="rounded-t-2xl !bg-white dark:!bg-gray-800">
          <div className="flex justify-between items-center w-full p-4 !bg-gradient-to-r !from-blue-50 !to-gray-50 dark:!from-gray-700 dark:!to-gray-800 !border-b !border-gray-200 dark:!border-gray-600 rounded-t-lg">
            <h2 className="text-xl font-bold !text-gray-800 dark:!text-gray-200">
              Users List
            </h2>
            <div className="text-sm !text-gray-600 dark:!text-gray-300 !bg-white dark:!bg-gray-700 px-3 py-1 rounded-full shadow-sm">
              Total: <span className="font-semibold">{users.length}</span> users
            </div>
          </div>
        </GridToolbar>

        {columns.map((column) => (
          <GridColumn key={column.field} {...column} />
        ))}
      </Grid>
    </div>
  );
}

export default UserTable;
