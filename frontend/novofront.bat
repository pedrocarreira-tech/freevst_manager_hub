import api from "../lib/api";

const res = await api.get("/api/recommendations/personal", {
  headers: { Authorization: `Bearer ${token}` },
});
