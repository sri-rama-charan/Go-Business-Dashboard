import Cookies from "js-cookie";

const SearchFilterApi = async (search, sort) => {
    try {
        const token = Cookies.get("jwt_token");
        const res = await fetch(`https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?search=${search}&sort=${sort}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

export default SearchFilterApi;