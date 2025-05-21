import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  //   const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      //   queryClient.setQueryData(["user"], user);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log("error:", err);
      toast.error("Provide email and password are incorrect");
    },
  });

  return { login, isPending };
}
