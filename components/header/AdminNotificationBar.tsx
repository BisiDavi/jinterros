import useAuth from "@/hooks/useAuth";
import getUserInitials from "@/lib/getUserInitials";

export default function AdminNotificationBar() {
  const { getAuthStatus } = useAuth();
  const authStatus = getAuthStatus();

  return (
    <>
      {authStatus && (
        <div className="absolute right-5 top-5 flex items-center">
          <div className="text flex flex-col items-end justify-items-end">
            <h6 className="font-semibold">{authStatus?.displayName}</h6>
            <p className="font-medium">Admin</p>
          </div>
          {authStatus.displayName && (
            <div className="profile-icon h-14 w-14 bg-gray-500 font-bold text-white flex items-center justify-center mx-4 rounded-full">
              {getUserInitials(authStatus?.displayName)}
            </div>
          )}
        </div>
      )}
    </>
  );
}
