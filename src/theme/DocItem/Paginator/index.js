import React from "react";
import Paginator from "@theme-original/DocItem/Paginator";
import Comment from "@site/src/components/Comments";

export default function PaginatorWrapper(props) {
  return (
    <>
      <Paginator {...props} />
      <Comment></Comment>
    </>
  );
}
