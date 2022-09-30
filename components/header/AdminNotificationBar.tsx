import useAuth from "@/hooks/useAuth";
import getUserInitials from "@/lib/getUserInitials";

export default function AdminNotificationBar() {
  const { getAuthStatus } = useAuth();
  const authStatus = getAuthStatus();

  return (
    <>
      {authStatus && (
        <div className="lg:absolute lg:right-5 lg:top-5 flex fixed bottom-20 lg:mt-0 items-center">
          <div className="text flex order-2 lg:order-1 flex-col lg:items-end lg:justify-items-end">
            <h6 className="font-semibold">{authStatus?.displayName}</h6>
            <p className="font-medium">Admin</p>
          </div>
          {authStatus.displayName && (
            <div className="profile-icon order-1 lg:order-2 h-14 w-14 bg-gray-500 font-bold text-white flex items-center justify-center mx-4 rounded-full">
              {getUserInitials(authStatus?.displayName)}
            </div>
          )}
        </div>
      )}
    </>
  );
}
