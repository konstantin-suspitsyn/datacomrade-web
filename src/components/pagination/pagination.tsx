export const pagination = (
  total_pages: number,
  current_page: number,
  link: string,
) => {
  // Only one page
  if (total_pages == 1) {
    return <div></div>;
  }

  const maxNumbersInRow = 6;

  let pagerNums: number[] = [];

  let hasFirst: boolean = false;
  let hasLast: boolean = false;
  let hasDotsOnStart: boolean = false;
  let hasDotsOnEnd: boolean = false;

  if (total_pages > maxNumbersInRow + 1 && current_page > maxNumbersInRow) {
    hasDotsOnStart = true;
  }
  if (
    total_pages > maxNumbersInRow + 1 &&
    current_page < total_pages - maxNumbersInRow
  ) {
    hasDotsOnEnd = true;
  }
  if (current_page > 1) {
    hasFirst = true;
  }

  if (current_page != total_pages) {
    hasLast = true;
  }

  let minNumberInPages: number = current_page;
  let maxNumberInPages: number = current_page;
  let filledNums: number = 0;

  pagerNums.push(current_page);

  while (
    filledNums < maxNumbersInRow &&
    minNumberInPages > 1 &&
    maxNumberInPages < total_pages
  ) {
    if (minNumberInPages - 1 > 0) {
      console.log(minNumberInPages);

      minNumberInPages--;
      pagerNums.unshift(minNumberInPages);
      filledNums++;
    }
    if (maxNumberInPages + 1 < total_pages) {
      console.log(maxNumberInPages);
      maxNumberInPages++;
      pagerNums.push(maxNumberInPages);
      filledNums++;
    }
  }

  return (
    <div>
      <ol className="flex justify-center text-xs font-medium space-x-1">
        <li>
          {hasFirst ? (
            <a
              href="{link}/?page=1"
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
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
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
        <li className="block w-8 h-8 text-center border border-gray-100 rounded leading-8">
          {hasDotsOnStart && <>...</>}
        </li>
        {pagerNums.map((item) => (
          <li>
            <a
              href="/?page=4"
              className="block w-8 h-8 text-center border border-gray-100 rounded leading-8"
            >
              {item}
            </a>
          </li>
        ))}
      </ol>
      <ol className="flex justify-center text-xs font-medium space-x-1">
        <li>
          <a
            href="/?page=1"
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
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="/?page=1"
            className="block w-8 h-8 text-center border border-gray-100 rounded leading-8"
          >
            {" "}
            1{" "}
          </a>
        </li>

        <li className="block w-8 h-8 text-center text-white bg-blue-600 border-blue-600 rounded leading-8">
          2
        </li>

        <li>
          <a
            href="/?page=3"
            className="block w-8 h-8 text-center border border-gray-100 rounded leading-8"
          >
            {" "}
            3{" "}
          </a>
        </li>

        <li>
          <a
            href="/?page=4"
            className="block w-8 h-8 text-center border border-gray-100 rounded leading-8"
          >
            {" "}
            4{" "}
          </a>
        </li>

        <li>
          <a
            href="/?page=3"
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
          </a>
        </li>
      </ol>
    </div>
  );
};
