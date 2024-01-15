import ResponseInterface from "@/interfaces/ResponseInterface";

interface ApiConfig {
    url: string;
    method?: string;
    headers?: { [key: string]: string };
    body?: string;
}

export const useFetch = async (config: ApiConfig): Promise<ResponseInterface> => {
    const api_url: string = import.meta.env.VITE_APP_API_URL;
    const token: string = "token" in localStorage ? `Bearer ${localStorage.getItem("token")}` : null;
    let response = null;

    try {
        const result: Response = await fetch(`${api_url}${config.url}`, {
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            ...config
        });
        response = await result.json();
    } catch (error: any) {
        console.log(error);
    }

    return { data: response };
};
