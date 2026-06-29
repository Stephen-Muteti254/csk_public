import api from "@/lib/api";

export interface UniversityPayload {
  name: string;
  short_name?: string;
  location?: string;
}

export const UniversitiesApi = {
  async list(search?: string) {
    const response = await api.get("/admin/universities", {
      params: search ? { search } : {},
    });

    return response.data;
  },

  async get(id: string) {
    const response = await api.get(`/admin/universities/${id}`);
    return response.data;
  },

  async create(data: UniversityPayload) {
    const response = await api.post("/admin/universities", data);
    return response.data;
  },

  async update(id: string, data: UniversityPayload) {
    const response = await api.put(
      `/admin/universities/${id}`,
      data,
    );

    return response.data;
  },

  async remove(id: string) {
    const response = await api.delete(
      `/admin/universities/${id}`,
    );

    return response.data;
  },
};