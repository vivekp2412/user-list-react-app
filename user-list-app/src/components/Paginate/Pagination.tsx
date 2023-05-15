import { memo, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import ReactPaginate from "react-paginate";
import { useAppDispatch } from "../../Hooks/Hooks";
import { getUser } from "../../slice/Dataslice";
import style from "./Paginate.module.css";
// Pagination  UI
const Pagination = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handlePageClick = (data: { selected: number }) => {
    dispatch(getUser(data.selected + 1));
  };
  useEffect(() => {
    dispatch(getUser(1));
  }, []);
  return (
    <ReactPaginate
      previousLabel={<ArrowLeft />}
      nextLabel={<ArrowRight />}
      className={style.pagination}
      pageClassName={style.page}
      breakLabel=" . . . "
      previousClassName={style.indicators}
      nextClassName={style.indicators}
      activeClassName={style.activepage}
      pageCount={8}
      initialPage={0}
      disableInitialCallback={true}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      renderOnZeroPageCount={null}
      onPageChange={handlePageClick}
    />
  );
};

export default memo(Pagination);
