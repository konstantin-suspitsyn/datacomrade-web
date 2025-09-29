import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiousPrivate";
import { BACKEND_DOMAINS_LINK } from "../../components/AllRoutes";
import type { DomainDTO, DomainsAllDTO } from "./DTODomain";
import { PAGE_PARAM } from "../../components/commonconsts/paging";
import { pagination } from "../../components/pagination/pagination";
import { useLocation, useSearchParams } from "react-router";
import { CONTAINER } from "../../App";

export const GetAllDomains = () => {
  const [data, setData] = useState<DomainDTO[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();

  const [urlParams] = useSearchParams();

  const axiosPrivate = useAxiosPrivate();

  const handlePageChange = async () => {
    const curPageNo = urlParams.get(PAGE_PARAM);
    if (curPageNo === null) {
      setCurrentPage(1);
      return 1;
    } else {
      setCurrentPage(parseInt(curPageNo));
      return parseInt(curPageNo);
    }
  };

  const getAllDomains = async (page: number) => {
    setLoading(true);
    axiosPrivate
      .get<DomainsAllDTO>(BACKEND_DOMAINS_LINK + "?" + PAGE_PARAM + `=${page}`)
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
        setCurrentPage(response.data.paging.current_page);
        setTotalPages(response.data.paging.total_pages);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        if (err.status === 401) {
          setError("UNAUTHORIZED");
        }
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const pN = await handlePageChange();
      await getAllDomains(pN);
    };
    fetchData();
  }, [urlParams, location.pathname]);

  if (error === "UNAUTHORIZED") {
    return <div>UNAUTHORIZED</div>;
  }

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <div className={CONTAINER}>
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
                <th>{item.user_id}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {pagination(totalPages, currentPage, null)}
      </div>
    </div>
  );
};
