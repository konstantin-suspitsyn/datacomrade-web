import { NavLink } from "react-router";
export const pagination = (
  totalPages: number,
  currentPage: number,
  link: string,
) => {
  // Only one page
  if (totalPages == 1) {
    return <div></div>;
  }

  const maxNumbersInRow = 6;

  const pagerNums: number[] = [];

  let hasFirst: boolean = false;
  let hasLast: boolean = false;
  let hasDotsOnStart: boolean = false;
  let hasDotsOnEnd: boolean = false;

  if (totalPages > maxNumbersInRow + 1 && currentPage > maxNumbersInRow) {
    hasDotsOnStart = true;
  }
  if (
    totalPages > maxNumbersInRow + 1 &&
    currentPage < totalPages - maxNumbersInRow
  ) {
    hasDotsOnEnd = true;
  }
  if (currentPage > 1) {
    hasFirst = true;
  }

  if (currentPage != totalPages) {
    hasLast = true;
  }

  let minNumberInPages: number = currentPage;
  let maxNumberInPages: number = currentPage;
  let filledNums: number = 0;

  pagerNums.push(currentPage);

  while (filledNums < maxNumbersInRow) {
    if (minNumberInPages - 1 > 0) {
      minNumberInPages--;
      pagerNums.unshift(minNumberInPages);
      filledNums++;
    }
    if (maxNumberInPages + 1 < totalPages) {
      maxNumberInPages++;
      pagerNums.push(maxNumberInPages);
      filledNums++;
    }

    if (minNumberInPages == 1 && maxNumberInPages == totalPages) {
      break;
    }
  }

  const linkWithParams = (pageNo: number) => {
    return `${link}?page=${pageNo}`;
  };

  return (
    <div>
      <ol className="flex justify-center text-xs font-medium space-x-1">
        <li>
          {hasFirst ? (
            <NavLink
              className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
              to={linkWithParams(1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </li>
        {hasDotsOnStart && (
          <li className="block w-8 h-8 text-center border border-gray-100 rounded leading-8">
            ...
          </li>
        )}
        {pagerNums.map((item) => (
          <li>
            {currentPage == item ? (
              <span className="block w-8 h-8 text-center text-white bg-blue-600 border-blue-600 rounded leading-8">
                {item}
              </span>
            ) : (
              <NavLink
                to={linkWithParams(item)}
                className="block w-8 h-8 text-center border border-gray-100 rounded leading-8"
              >
                {item}
              </NavLink>
            )}
          </li>
        ))}
        {hasDotsOnEnd && (
          <li className="block w-8 h-8 text-center border border-gray-100 rounded leading-8">
            ...
          </li>
        )}

        <li>
          {hasLast ? (
            <NavLink
              to={linkWithParams(totalPages)}
              className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </li>
      </ol>
    </div>
  );
};
