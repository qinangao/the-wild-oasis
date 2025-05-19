import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
function CabinTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With discount" },
          { value: "no-discount", label: "No discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperation;
