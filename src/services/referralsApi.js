import Cookies from "js-cookie";

export const fetchReferralsData = async () => {
    try {
        const token = Cookies.get("jwt_token");
        const res = await fetch(`https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        if (!res.ok) {
            let message = `HTTP error! Status: ${res.status}`;
            try {
                const body = await res.json();
                if (body && body.message) {
                    message = body.message;
                }
            } catch (e) {}
            return { success: false, error: message, status: res.status };
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching referrals data:", error);
        return { success: false, error: error.message || "Failed to fetch data", status: 500 };
    }
};

export const fetchReferralById = async (id) => {
    try {
        const token = Cookies.get("jwt_token");
        const res = await fetch(`https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?id=${id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching referral by ID:", error);
        return null;
    }
};

