import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  //1.Load Authenticated user
  const { isPending, isAuthenticated } = useUser();

  //2. if there is no authenticated user,redirect to the Login page

  useEffect(() => {
    if (!isAuthenticated && !isPending) {
      queryClient.clear();
      navigate("/login");
    }
  }, [isAuthenticated, isPending, navigate, queryClient]);

  //3.While loading, show spinner

  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4.if there is an user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
