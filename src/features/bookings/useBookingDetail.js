import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBookingDetails() {
  const { bookingId } = useParams();
  const {
    isPending,
    data: details,
    error,
  } = useQuery({
    queryKey: ["details"],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });
  return { isPending, details, error };
}
