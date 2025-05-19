import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";

export function useBookings() {
  const {
    isPending,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getAllBookings,
  });
  return { isPending, bookings, error };
}
