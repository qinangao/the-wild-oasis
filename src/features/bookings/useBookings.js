import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  //Filter:
  const filteredValue = searchParams.get("status");
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : {
          field: "status",
          value: filteredValue,
          method: "eq",
        };
  const {
    isPending,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getAllBookings({ filter }),
  });
  return { isPending, bookings, error };
}
