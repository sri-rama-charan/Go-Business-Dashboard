
export const loginUser = async (email, password) => {
  try {
    const res = await fetch(`https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return res;
  } catch (error) {
    console.error("Error logging in:", error);
  }
};
