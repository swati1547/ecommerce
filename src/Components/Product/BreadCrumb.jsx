import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BreadCrumb({ items }) {
  const navigate = useNavigate();

  if (!items || !items.length) return null;

  return (
    <Breadcrumbs sx={{ m: 2 }} className="myntra-breadcrumb">
      {items.map((item, index) =>
        index === items.length - 1 ? (
          <Typography key={index}>{item.label}</Typography>
        ) : (
          <Link
            key={index}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(item.to)}
          >
            {item.label}
          </Link>
        ),
      )}
    </Breadcrumbs>
  );
}
