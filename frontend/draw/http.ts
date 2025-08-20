import { Shape} from "./index"

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;
if (!BACKEND_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

export async function saveShape(shape: Shape) {
    try {
        const res = await fetch(`${BACKEND_URL}/drawing/save`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(shape),
        });
        return await res.json();
    }catch (error) {
        console.error("Error saving shape:", error);
        throw error;
    }
}