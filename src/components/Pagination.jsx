import React from "react";

import { UilAngleRightB, UilAngleLeftB } from "@iconscout/react-unicons";

function Pagination({ isPreviousData, data, page, setPage }) {
  return (
    <div>
      <span>Current Page: {page}</span>
      <a
        onClick={() => setPage((old) => Math.max(old - 1, 1))}
        disabled={page === 1}
      >
        <UilAngleLeftB className="pag-icon" />
      </a>{" "}
      <a
        onClick={() => {
          if (!isPreviousData && data.next) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data?.next}
      >
        <UilAngleRightB className="pag-icon" />
      </a>
    </div>
  );
}

export default Pagination;
