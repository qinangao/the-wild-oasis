import styled from "styled-components";
import { format, isToday } from "date-fns";
import { Navigate, useNavigate } from "react-router-dom";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import MenuList from "../../ui/MenuList";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";

import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();

  const { checkout, isCheckingout } = useCheckout();
  const { isDeleting, deleteBooking } = useDeleteBooking();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      <Modal>
        <Cabin>{cabinName}</Cabin>

        <Stacked>
          <span>{guestName}</span>
          <span>{email}</span>
        </Stacked>

        <Stacked>
          <span>
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}{" "}
            &rarr; {numNights} night stay
          </span>
          <span>
            {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
            {format(new Date(endDate), "MMM dd yyyy")}
          </span>
        </Stacked>

        <Tag $type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

        <Amount>{formatCurrency(totalPrice)}</Amount>

        <MenuList.Menu>
          <MenuList.Toggle id={bookingId} />
          <MenuList.List id={bookingId}>
            <MenuList.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See Detail
            </MenuList.Button>
            {status === "unconfirmed" && (
              <MenuList.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </MenuList.Button>
            )}
            {status === "checked-in" && (
              <MenuList.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingout}
              >
                Check out
              </MenuList.Button>
            )}

            <Modal.Open opens="delete">
              <MenuList.Button icon={<HiTrash />}>
                Delete booking
              </MenuList.Button>
            </Modal.Open>
          </MenuList.List>
        </MenuList.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="booking"
            disabled={isDeleting}
            onConfirm={() => deleteBooking(bookingId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
