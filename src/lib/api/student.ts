import api from "@/lib/api";

export const StudentApi = {

    getAll() {
        return api.get("/admin/students");
    },

    getById(id: number) {
        return api.get(`/admin/students/${id}`);
    },

    create(data: {
        name: string;
        email: string;
        phone: string;
        idNumber: string;
        universityId: number;
    }) {

        return api.post(
            "/admin/students",
            {
                name: data.name,
                email: data.email,
                phone: data.phone,
                id_number: data.idNumber,
                university_id: data.universityId
            }
        );
    },

    update(
        id: number,
        data: {
            name: string;
            email: string;
            phone: string;
            idNumber: string;
            universityId: number;
        }
    ) {

        return api.put(
            `/admin/students/${id}`,
            {
                name: data.name,
                email: data.email,
                phone: data.phone,
                id_number: data.idNumber,
                university_id: data.universityId
            }
        );
    },

    delete(id: number) {
        return api.delete(`/admin/students/${id}`);
    }

};