import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { memo, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../Hooks/Hooks";
import { getUser } from "../../slice/Dataslice";
// import { getUserName } from "../slice/Slice";
import style from "./UserList.module.css";
const Pagination = () => {
  const dispatch = useAppDispatch();
  const handlePageClick = (data: { selected: number }) => {
    console.log(data);
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
