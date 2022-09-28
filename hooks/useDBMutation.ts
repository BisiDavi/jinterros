import useRequestMutation from "@/hooks/useRequestMutation";
import useFirebase from "@/hooks/useFirebase";

export default function useDBMutation() {
  const { deleteData } = useFirebase();

  function useDeleteDataMutation() {
    return useRequestMutation((dbNode) => deleteData(dbNode), {
      mutationKey: ["useDeleteDataMutation"],
      success: "deleted successfully",
      error: "error deleting",
    });
  }

  return { useDeleteDataMutation };
}
