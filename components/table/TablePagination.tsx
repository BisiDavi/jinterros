const paginationArray = ["<<", "<", ">", ">>"];

function paginationHandler(indexCount: number, tableInstance: any) {
  const { gotoPage, previousPage, nextPage, pageCount } = tableInstance;
  switch (indexCount) {
    case 0:
      return gotoPage(0);
    case 1:
      return previousPage();
    case 2:
      return nextPage();
    case 3:
      return gotoPage(pageCount - 1);
    default:
      return null;
  }
}

function disablePagination(indexCount: number, tableInstance: any): boolean {
  const { canPreviousPage, canNextPage } = tableInstance;
  switch (indexCount) {
    case 0:
      return !canPreviousPage;
    case 1:
      return !canPreviousPage;
    case 2:
      return !canNextPage;
    case 3:
      return !canNextPage;
    default:
      return false;
  }
}

export default function TablePagination({ tableInstance }: any): JSX.Element {
  const {
    gotoPage,
    pageOptions,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;
  return (
    <>
      <div className="pagination flex items-center mx-auto  justify-center">
        {paginationArray.map((paginationItem, index) => (
          <button
            key={index}
            type="button"
            className="hover:bg-red-800 hover:text-red-500 bg-black border-0"
            disabled={disablePagination(index, tableInstance)}
            onClick={() => paginationHandler(index, tableInstance)}
          >
            {paginationItem}
          </button>
        ))}

        <span className="ml-4 flex">
          Page
          <p className="font-bold mx-2">
            {pageIndex + 1} of {pageOptions?.length}
          </p>
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="border-2 p-1"
        >
          {[5, 10, 15, 20].map((pageSizeVal) => (
            <option key={pageSizeVal} value={pageSizeVal}>
              Show {pageSizeVal}
            </option>
          ))}
        </select>
      </div>
      <style jsx>
        {`
          .pagination button {
            padding: 2px 5px;
            margin: 0px 5px;
            color: white;
          }
          .pagination {
            margin: 30px 0px;
          }
        `}
      </style>
    </>
  );
}
