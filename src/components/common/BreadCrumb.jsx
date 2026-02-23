import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BreadCrumb({ items }) {
  const navigate = useNavigate();

  if (!items || items.length === 0) return null;

  return (
    <Breadcrumbs sx={{ m: 2 }} className="myntra-breadcrumb">
      {items.map((item, index) =>
        index === items.length - 1 ? (
          <Typography key={item.label} sx={{ fontWeight: 600 }}>
            {item.label}
          </Typography>
        ) : (
          <Link
            key={item.label}
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
