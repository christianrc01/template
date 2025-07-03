import {
  Grid,
  GridColumn,
  GridToolbar,
  type GridColumnProps,
  type GridDataStateChangeEvent,
} from "@progress/kendo-react-grid";
import { process, type State } from "@progress/kendo-data-query";
import { useState } from "react";
import type { UserProps } from "@/features/users/types/IUser";
import TableLinkCell from "@/shared/views/components/common/TableLinkCell";
import { ROUTE_PATHS } from "@/app/routes";

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

  const processedData = process(users, dataState);
  const commonColumnProps: Partial<GridColumnProps> = {
    headerClassName:
      "font-bold !text-gray-700 dark:!text-gray-300 !bg-gray-100 dark:!bg-gray-700 px-4 py-3 !border-b !border-gray-200 dark:!border-gray-600",
    className:
      "px-4 py-3 !text-gray-800 dark:!text-gray-200 !border-b !border-gray-100 dark:!border-gray-600 !bg-white/80 dark:!bg-gray-800/90",
  };

  return (
    <section
      aria-labelledby="users-table-title"
      className="overflow-x-auto w-full"
    >
      <Grid
        data={processedData}
        pageable={true}
        sortable={true}
        {...dataState}
        onDataStateChange={handleDataStateChange}
        aria-label="User data table"
        className="min-w-[600px] sm:min-w-full rounded-2xl shadow-sm !border !border-gray-200 dark:!border-gray-600 !bg-white dark:!bg-gray-800"
      >
        <GridToolbar className="rounded-t-2xl !bg-white dark:!bg-gray-800">
          <div className="flex justify-between items-center w-full p-4 !bg-gradient-to-r !from-blue-50 !to-gray-50 dark:!from-gray-700 dark:!to-gray-800 !border-b !border-gray-200 dark:!border-gray-600 rounded-t-lg">
            <h2
              id="users-table-title"
              className="text-xl font-bold !text-gray-800 dark:!text-gray-200"
            >
              Users List
            </h2>
            <p
              className="text-sm !text-gray-600 dark:!text-gray-300 !bg-white dark:!bg-gray-700 px-3 py-1 rounded-full shadow-sm"
              aria-live="polite"
            >
              Total: <span className="font-semibold">{users.length}</span> users
            </p>
          </div>
        </GridToolbar>

        <GridColumn
          field="name"
          title="Name"
          {...commonColumnProps}
          cells={{
            data: (props) => (
              <TableLinkCell
                {...props}
                getHref={(user) =>
                  ROUTE_PATHS.USER.replace(":id", user.id.toString())
                }
                getText={(user) => user.name}
              />
            ),
          }}
        />

        <GridColumn field="username" title="Username" {...commonColumnProps} />
        <GridColumn field="email" title="Email" {...commonColumnProps} />
        <GridColumn field="phone" title="Phone" {...commonColumnProps} />
        <GridColumn
          field="address.street"
          title="Street"
          {...commonColumnProps}
        />
        <GridColumn field="address.city" title="City" {...commonColumnProps} />
        <GridColumn
          field="company.name"
          title="Company"
          {...commonColumnProps}
        />
      </Grid>
    </section>
  );
}

export default UserTable;
