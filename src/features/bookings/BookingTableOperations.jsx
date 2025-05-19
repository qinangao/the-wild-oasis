import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Newest to oldest date" },
          { value: "startDate-asc", label: "Oldest to newest date" },
          { value: "totalPrice-desc", label: "Highest price first" },
          { value: "totalPrice-asc", label: "Lowest price first" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
