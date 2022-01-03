import { Skeleton } from "@mui/material";
import { Pagination as MUIPagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

interface PaginationProps {
  count?: number;
  loading?: boolean;
  onChange: (page: number) => void;
}

export default function Pagination({
  count = 5,
  loading = false,
  onChange,
}: PaginationProps) {
  const handleChange: (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => void = (_, page) => {
    onChange(page);
  };
  if (loading) {
    return (
      <Skeleton
        data-testid="pagination-loader"
        variant="rectangular"
        width={360}
        height={32}
      />
    );
  }
  return (
    <Stack spacing={2}>
      <MUIPagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Stack>
  );
}
