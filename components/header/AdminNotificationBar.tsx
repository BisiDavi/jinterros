import useAuth from "@/hooks/useAuth";

export default function AdminNotificationBar() {
  const { getAuthStatus } = useAuth();
  const authStatus = getAuthStatus();
  console.log("authStatus", authStatus);

  return (
    <div className="absolute right-5 top-5 flex">
      <h6 className="font-medium">{authStatus?.displayName}</h6>
    </div>
  );
}
