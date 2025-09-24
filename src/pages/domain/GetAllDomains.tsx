import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiousPrivate";
import { BACKEND_DOMAINS_LINK } from "../../components/AllRoutes";
import type { DomainDTO, DomainsAllDTO } from "./DTODomain";
import { PAGE_PARAM } from "../../components/commonconsts/paging";
import { pagination } from "../../components/pagination/pagination";

export const GetAllDomains = () => {
  const [data, setData] = useState<DomainDTO[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const axiosPrivate = useAxiosPrivate();
  const getAllDomains = (page: number) => {
    axiosPrivate
      .get<DomainsAllDTO>(BACKEND_DOMAINS_LINK + "?" + PAGE_PARAM + `=${page}`)
      .then((response) => {
        setData(response.data.data);
        setCurrentPage(response.data.paging.current_page);
        setTotalPages(response.data.paging.total_pages);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
        if (err.status === 401) {
          console.log("!!!!!!!!!!!UNAUTHORIZED!");
        }
      });
  };
  useEffect(() => {
    getAllDomains(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
            <th>id</th>
            <th>Название</th>
            <th>Описание</th>
            <th>Создано</th>
            <th>Изменено</th>
            <th>Изменение</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.description.String}</th>
              <th>{item.created_at.toLocaleString()}</th>
              <th>{item.updated_at.toLocaleString()}</th>
              <th>{item.id}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {pagination()}
    </div>
  );
};
