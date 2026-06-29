import api from "@/lib/api";

export const ReportApi = {

    getAll() {
        return api.get("/reports");
    },

    getById(id: string) {
        return api.get(`/reports/${id}`);
    },

    create(data: {
        cskId: string;
        category: string;
        description: string;
    }) {

        return api.post(
            "/reports",
            {
                csk_id: data.cskId,
                category: data.category,
                description: data.description
            }
        );

    },

    updateStatus(
        id: string,
        data: {
            status: string;
        }
    ) {

        return api.put(
            `/reports/${id}/status`,
            {
                status: data.status
            }
        );

    },

    delete(id: string) {
        return api.delete(`/reports/${id}`);
    }

};